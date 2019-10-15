import React from "react";
import styled from "styled-components";
import { TopLogo } from "../components/Top";
import { AltButton } from "../components/Button";

const StyledMain = styled.main`
  background: ${props => props.theme.contrast};
`;

const WelcomeWondow = styled.section`
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
  return (
    <>
      <TopLogo headline={"KingPong"}></TopLogo>
      <StyledMain>
        <WelcomeWondow>
          <AltButton big>Tap to start!</AltButton>
        </WelcomeWondow>
      </StyledMain>
    </>
  );
}
