import React from "react";
import styled from "styled-components";
import ChatMessage from "./ChatMessage";
import { getItem } from "../../ressources/scripts/storage";
import PropTypes from "prop-types";

const ChatDisplay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2px;
  overflow: auto;
`;

function ChatHistory({ messages }) {
  return (
    <ChatDisplay>
      {messages &&
        messages.map((message, index) => {
          return (
            <ChatMessage
              key={index}
              p1={getItem("nickname") === message.nickname}
              message={message}
            ></ChatMessage>
          );
        })}
    </ChatDisplay>
  );
}

export default ChatHistory;

ChatHistory.propTypes = {
  messages: PropTypes.array
};
