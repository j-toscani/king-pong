import React from "react";
import styled from "styled-components";

const ChatInput = styled.input`
  height: 30px;
  width: 65%;
  padding: 5px;
  border-radius: 10px 0 0 10px;
  margin: 0;
  border: none;
`;

const Sender = styled.label`
  margin-left: 10px;
  margin-right: 10px;
`;

const SubmitButton = styled.input`
  height: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
  border-radius: 0px 10px 10px 0px;
  &:active {
    box-shadow: none;
  }
`;

const InputContainer = styled.form`
  width: 100%;
  height: 40px;
  padding: 5px;
  border-radius: 0 0 10px 10px;
  color: ${props => props.theme.darkFont};
  display: flex;
  align-items: center;
  background: ${props => props.theme.accent};
`;

function ChatBar({ submitMessage }) {
  return (
    <InputContainer
      onSubmit={event => {
        event.preventDefault();
        if (submitMessage) {
          submitMessage();
        } else {
          console.log("message send");
        }
      }}
    >
      <Sender>You: </Sender>
      <ChatInput type="input" placeholder="Tap to start chatting!"></ChatInput>
      <SubmitButton type="submit" />
    </InputContainer>
  );
}

export default ChatBar;
