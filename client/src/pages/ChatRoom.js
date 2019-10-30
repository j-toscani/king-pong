import React from "react";
import styled from "styled-components";
import ChatWindow from "../components/chat/ChatWindow";
import Button from "../components/Button";
import HeaderNav from "../components/Header/HeaderNav";
import Overlay from "../components/Options/Overlay";
import { useHistory } from "react-router-dom";
import { getItem, setItem } from "../ressources/scripts/storage";

const StyledMain = styled.main`
  flex-direction: column;
  position: relative;
`;

const ButtonContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
`;

export default function ChatRoom({
  setSettings,
  settings,
  connectedTo,
  handleSession,
  setConnectionTo
}) {
  let history = useHistory();
  const [chatHistory, updateHistory] = React.useState();
  const [open, setOpen] = React.useState(false || getItem("open"));

  function toggleOpen() {
    setItem("open", !open);
    setOpen(!open);
  }

  function handleSubmitMessage(content) {
    const { socket } = connectedTo;
    const newMessage = {
      user: socket.id,
      nickname: getItem("nickname"),
      content: content
    };
    if (chatHistory) {
      const newChatHistory = [...chatHistory];
      newChatHistory.push(newMessage);
      socket.emit("new message", newChatHistory);
      updateHistory(newChatHistory);
    } else {
      const newChatHistory = [];
      newChatHistory.push(newMessage);
      socket.emit("new message", newChatHistory);
      updateHistory(newChatHistory);
    }
  }

  function routeTo(destination) {
    if (destination === "main") {
      history.push("/main");
    } else {
      history.push(`${destination}`);
    }
  }

  // Check for number of people in the Channel and toggle activation of ready button
  // Include Feedback for whether or not the ready button is pressed
  // --> Maybe use a little animation?
  // --> use Checkbox

  React.useEffect(() => {
    if (connectedTo.socket) {
      const { socket } = connectedTo;
      socket.on("new message", message => {
        updateHistory(message);
      });
      socket.on("new server message", message => {
        if (chatHistory) {
          const newChatHistory = [...chatHistory];
          newChatHistory.push(message);
          updateHistory(newChatHistory);
        } else {
          const firstMessage = [message];
          updateHistory(firstMessage);
        }
      });
      socket.on("game ready", () => {
        const { connected, socket } = connectedTo;
        setConnectionTo({ connected, socket, ready: true });
      });
      socket.on("game not ready", () => {
        const { connected, socket } = connectedTo;
        setConnectionTo({ connected, socket, ready: false });
      });

      socket.on("game start", () => {
        routeTo("game");
      });

      socket.on("room full", () => {
        routeTo("main");
        setTimeout(() => {
          alert("Room full, please choose a different one");
        }, 100);
      });
    }
    return;
  }, []);

  return (
    <>
      <HeaderNav
        open={settings["open"]}
        toggleOpen={toggleOpen}
        headline={"Chatroom"}
      />
      <StyledMain>
        <ChatWindow
          messages={chatHistory}
          onSubmitMessage={handleSubmitMessage}
        ></ChatWindow>
        <ButtonContainer>
          <Button
            onClick={() => {
              const { socket } = connectedTo;
              socket.emit("start game", "start");
              console.log("start game");
            }}
            disabled={!connectedTo.ready}
            big
          >
            Ready!
          </Button>
          <Button
            alter
            onClick={() => {
              const { socket } = connectedTo;
              handleSession(socket, "leave");
              routeTo("main");
            }}
            big
          >
            Chicken out...
          </Button>
        </ButtonContainer>
        <Overlay
          setSettings={setSettings}
          settings={settings}
          inGame={true}
          toggleOpen={toggleOpen}
          open={open}
        />
      </StyledMain>
    </>
  );
}
