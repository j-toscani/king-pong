import React from "react";
import StyledWindow from "../StyledWindow";
import ChatHistory from "./ChatHistory";
import ChatBar from "./ChatBar";

function ChatWindow({ onSubmitMessage, messages }) {
  return (
    <StyledWindow chat>
      <ChatHistory messages={messages} />
      <ChatBar onSubmitMessage={onSubmitMessage}></ChatBar>
    </StyledWindow>
  );
}

export default ChatWindow;
