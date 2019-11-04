import React from "react";
import styled from "styled-components";
import ChatWindow from "../components/chat/ChatWindow";
import Button from "../components/Button";
import HeaderNav from "../components/header/HeaderNav";
import Overlay from "../components/options/Overlay";
import { useHistory } from "react-router-dom";
import { getItem, setItem } from "../ressources/scripts/storage";
import initChatListeners from "../ressources/scripts/socket.client-events";

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
  const history = useHistory();
  const [chatHistory, updateHistory] = React.useState([]);
  const [open, setOpen] = React.useState(false || getItem("open"));

  function toggleOpen() {
    setItem("open", !open);
    setOpen(!open);
  }

  function handleSubmitMessage(content) {
    const newMessage = {
      user: connectedTo.socket.id,
      nickname: getItem("nickname"),
      content: content
    };
    const newChatHistory = [...chatHistory];
    newChatHistory.push(newMessage);
    connectedTo.socket.emit("new message", newChatHistory);
    updateHistory(newChatHistory);
  }

  function routeTo(destination) {
    if (destination === "main") {
      history.push("/main");
    } else {
      history.push(`${destination}`);
    }
  }

  React.useEffect(() => {
    if (connectedTo.socket) {
      initChatListeners(
        connectedTo,
        chatHistory,
        updateHistory,
        setConnectionTo,
        routeTo
      );
    }
    return () => {
      if (connectedTo.socket) {
        connectedTo.socket.removeAllListeners();
      }
    };
  }, []);

  return (
    <>
      <HeaderNav
        open={settings.open}
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
              connectedTo.socket.emit("start game", "start");
            }}
            disabled={!connectedTo.ready}
            big
          >
            Ready!
          </Button>
          <Button
            alter
            onClick={() => {
              handleSession(connectedTo.socket, "leave");
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
