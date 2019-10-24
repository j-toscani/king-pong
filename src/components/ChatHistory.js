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

function ChatHistory({ message }) {
  return (
    <ChatDisplay>
      {/* {messages.map((message, index) => { */}
      {/* return */}
      {/* key={key} */}
      <ChatMessage message={message}></ChatMessage>;{/* })} */}
    </ChatDisplay>
  );
}

export default ChatHistory;
