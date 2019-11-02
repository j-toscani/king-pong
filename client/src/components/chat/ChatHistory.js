import React from "react";
import styled from "styled-components";
import ChatMessage from "./ChatMessage";

const ChatDisplay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2px;
  overflow: auto;
`;

function ChatHistory({ messages, nickname }) {
  console.log(messages, nickname);
  if (messages && messages[0].nickname) {
    console.log(messages[0].nickname);
  }
  return (
    <ChatDisplay>
      {messages &&
        messages.map((message, index) => {
          return (
            <ChatMessage
              key={index}
              p1={nickname === message.nickname}
              message={message}
            ></ChatMessage>
          );
        })}
    </ChatDisplay>
  );
}

export default ChatHistory;
