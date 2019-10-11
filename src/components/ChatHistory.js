import React from "react";
import styled from "styled-components";
import ChatMessage from "./ChatMessage";

const ChatDisplay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function ChatHistory({ messages }) {
  return (
    <ChatDisplay>
      {messages.map((p1, user, message) => (
        <ChatMessage player={(p1, user, message)}></ChatMessage>
      ))}
    </ChatDisplay>
  );
}

export default ChatHistory;
