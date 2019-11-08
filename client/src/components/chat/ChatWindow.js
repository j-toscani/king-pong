import React from "react";
import StyledWindow from "../StyledWindow";
import ChatHistory from "./ChatHistory";
import ChatBar from "./ChatBar";
import PropTypes from "prop-types";

function ChatWindow({ onSubmitMessage, messages }) {
  return (
    <StyledWindow chat>
      <ChatHistory messages={messages} />
      <ChatBar onSubmitMessage={onSubmitMessage}></ChatBar>
    </StyledWindow>
  );
}

export default ChatWindow;

ChatWindow.propTypes = {
  messages: PropTypes.array,
  onSubmitMessage: PropTypes.func
};
