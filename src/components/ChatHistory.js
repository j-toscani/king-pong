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
      {messages.map((message, index) => {
        return (
          <ChatMessage key={message[index]} message={message}></ChatMessage>
        );
      })}
    </ChatDisplay>
  );
}

export default ChatHistory;
