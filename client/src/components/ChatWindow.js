import React from "react";
import StyledWindow from "./StyledWindow";
import ChatHistory from "./ChatHistory";
import ChatBar from "./ChatBar";

function ChatWindow({ handleSubmitMessage, messages, nickname }) {
  return (
    <StyledWindow chat>
      <ChatHistory nickname={nickname} messages={messages}></ChatHistory>
      <ChatBar handleSubmitMessage={handleSubmitMessage}></ChatBar>
    </StyledWindow>
  );
}

export default ChatWindow;
