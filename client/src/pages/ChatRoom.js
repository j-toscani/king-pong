import React from "react";
import styled from "styled-components";
import ChatWindow from "../components/ChatWindow";
import Button, { AltButton } from "../components/Button";
import NavTop from "../components/NavTop";
import Overlay from "../components/Overlay";
import { useHistory } from "react-router-dom";

import openSocket from "socket.io-client";

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
  nickname,
  setSettings,
  settings,
  connectedTo,
  setConnectionTo
}) {
  let history = useHistory();
  const [chatHistory, updateHistory] = React.useState();

  function handleSubmitMessage(content) {
    const { socket } = connectedTo;
    const newMessage = {
      user: socket.id,
      nickname: nickname ? nickname : "Pal",
      content: content
    };

    const newChatHistory = [...chatHistory];
    newChatHistory.push(newMessage);
    socket.emit("new message", newChatHistory);
    updateHistory(newChatHistory);
  }

  function routeTo(destination) {
    if (destination === "select") {
      history.push("/select");
    } else {
      history.push(`${destination}`);
    }
  }

  if (!connectedTo) {
    history.push("/gameroom");
  }

  React.useEffect(() => {
    if (!connectedTo) {
      history.push("/gameroom");
    }
    if (connectedTo) {
      const { socket } = connectedTo;
      socket.on("new message", message => {
        console.log(message);
        updateHistory(message);
      });
    }
  }, [connectedTo]);

  return (
    <>
      <NavTop
        open={settings["open"]}
        toggleOpen={() => setSettings("open")}
        headline={"Chatroom"}
      ></NavTop>
      <StyledMain>
        <ChatWindow
          nickname={nickname}
          messages={chatHistory}
          handleSubmitMessage={handleSubmitMessage}
        ></ChatWindow>
        <ButtonContainer>
          <Button handleClick={() => routeTo("game")} big>
            Ready!
          </Button>
          <AltButton handleClick={() => routeTo("select")} big>
            Chicken out...
          </AltButton>
        </ButtonContainer>
        <Overlay setSettings={setSettings} settings={settings} inGame={true} />
      </StyledMain>
    </>
  );
}
