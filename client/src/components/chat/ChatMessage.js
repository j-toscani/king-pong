import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  display: grid;
  padding: 2px;
  grid-template: 1fr / 35% 65%;
  width: 100%;
  background: "transparent";
  color: ${props => (props.p1 ? props.theme.brightFont : props.theme.accent)};
`;

function ChatMessage({ p1, message }) {
  return (
    <MessageContainer p1={p1}>
      <span>{`${message.nickname} :`}</span>
      <span>{message.content}</span>
    </MessageContainer>
  );
}

export default ChatMessage;