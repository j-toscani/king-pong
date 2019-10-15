import React from "react";
import styled from "styled-components";
import { TopLogo } from "../components/Top";
import ChatWindow from "../components/ChatWindow";
import Button, { AltButton } from "../components/Button";

const StyledMain = styled.main`
  flex-direction: column;
  margin: auto;
`;

const ButtonContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
`;

export default function Chatroom() {
  const messages = [
    { p1: true, name: "SirL00t4L0t", content: "lol, n4p" },
    { p1: false, name: "Martin", content: "lol, n4p" },
    { p1: true, name: "SirL00t4L0t", content: "lol, n4p" }
  ];

  return (
    <>
      <TopLogo headline={"Chatroom"}></TopLogo>
      <StyledMain>
        <ChatWindow messages={messages}></ChatWindow>
        <ButtonContainer>
          <Button active big>
            Ready!
          </Button>
          <AltButton big>Chicken out...</AltButton>
        </ButtonContainer>
      </StyledMain>
    </>
  );
}
