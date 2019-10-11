import React from "react";
import StyledWindow from "./StyledWindow";
import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";

function ChatWindow({ messages, handleSubmitMessage }) {
  return (
    <StyledWindow chat>
      <ChatHistory messages={messages}></ChatHistory>
      <ChatInput handleSubmitMessage={handleSubmitMessage}></ChatInput>
    </StyledWindow>
  );
}

export default ChatWindow;
