import React from "react";
import StyledWindow from "../StyledWindow";
import ChatHistory from "./ChatHistory";
import ChatBar from "./ChatBar";

function ChatWindow({ onSubmitMessage, messages, nickname }) {
  return (
    <StyledWindow chat>
      <ChatHistory nickname={nickname} messages={messages} />
      <ChatBar onClick={onSubmitMessage}></ChatBar>
    </StyledWindow>
  );
}

export default ChatWindow;
