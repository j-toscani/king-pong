import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  display: grid;
  grid-template: 1fr / 30% 40%;
  background: "transparent";
  color: ${props =>
    props.player.p1 ? props.theme.brightFont : props.theme.darkFont};
`;

function ChatMessage({ player }) {
  return (
    <MessageContainer p1={player.p1}>
      <span>{`${player.name} :`}</span>
      <span>{player.message}</span>
    </MessageContainer>
  );
}

export default ChatMessage;
