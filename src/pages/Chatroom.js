import React from "react";
import styled from "styled-components";
import ChatWindow from "../components/ChatWindow";
import Button, { AltButton } from "../components/Button";
import NavTop from "../components/NavTop";
import Overlay from "../components/Overlay";
import { useHistory, useParams } from "react-router-dom";

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
  open,
  handleToggleMode,
  mute,
  darkmode
}) {
  let history = useHistory();

  function handleClick(destination) {
    if (destination === "select") {
      history.push("/select");
    } else {
      history.push(`${destination}`);
      console.log(`${destination}`);
    }
  }

  const [chatHistory, updateHistory] = React.useState([]);

  function handleSubmitMessage(content) {
    const newChatHistory = [...chatHistory];

    const newMessage = {
      p1: true,
      nickname: nickname ? nickname : "Pal",
      content: content
    };
    newChatHistory.push(newMessage);
    updateHistory(newChatHistory);
  }

  return (
    <>
      <NavTop
        state={open ? "open" : "closed"}
        handleToggleMode={handleToggleMode}
        headline={"Chatroom"}
      ></NavTop>
      <StyledMain>
        <ChatWindow
          messages={chatHistory}
          handleSubmitMessage={handleSubmitMessage}
        ></ChatWindow>
        <ButtonContainer>
          <Button onClick={() => handleClick("game")} big>
            Ready!
          </Button>
          <AltButton onClick={() => handleClick("select")} big>
            Chicken out...
          </AltButton>
        </ButtonContainer>
        <Overlay
          open={open}
          mute={mute}
          darkmode={darkmode}
          handleToggleMode={handleToggleMode}
          inGame={true}
        />
      </StyledMain>
    </>
  );
}
