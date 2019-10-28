import React from "react";
import styled from "styled-components";
import { TopLogo } from "../components/Top";
import { AltButton } from "../components/Button";
import { useHistory } from "react-router-dom";

const StyledMain = styled.main`
  background: ${props => props.theme.contrast};
`;

const WelcomeWindow = styled.section`
  background: ${props => props.theme.accent};
  width: 270px;
  height: 420px;
  padding: 30px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 10px;
`;

export default function Welcome() {
  let history = useHistory();

  function handleClick() {
    history.push("/entername");
  }

  return (
    <>
      <TopLogo headline={"KingPong"}></TopLogo>
      <StyledMain>
        <WelcomeWindow>
          <AltButton big handleClick={handleClick}>
            Tap to start!
          </AltButton>
        </WelcomeWindow>
      </StyledMain>
    </>
  );
}
