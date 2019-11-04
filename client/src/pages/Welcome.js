import React from "react";
import styled from "styled-components";
import HeaderLogo from "../components/header/HeaderLogo";
import Button from "../components/Button";
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
      <HeaderLogo headline={"KingPong"}></HeaderLogo>
      <StyledMain>
        <WelcomeWindow>
          <Button alter big onClick={handleClick}>
            Tap to start!
          </Button>
        </WelcomeWindow>
      </StyledMain>
    </>
  );
}
