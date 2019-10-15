import React from "react";
import styled from "styled-components";
import ChatMessage from "./ChatMessage";

const ChatDisplay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2px;
  margin-top: auto;
`;

function ChatHistory({ messages }) {
  return (
    <ChatDisplay>
      {messages.map((message, index) => {
        return <ChatMessage key={index} message={message}></ChatMessage>;
      })}
    </ChatDisplay>
  );
}

export default ChatHistory;
