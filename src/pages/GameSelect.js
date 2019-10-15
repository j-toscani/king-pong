import React from "react";
import styled from "styled-components";
import NavTop from "../components/NavTop";
import Button, { AltButton } from "../components/Button";
import Overlay from "../components/Overlay";

const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
`;

const Background = styled.div`
  background: ${props => (props.alt ? props.theme.main : props.theme.contrast)};
  margin-bottom: ${props => (props.alt ? "100px" : 0)};
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function GameSelect({ open, handleToggleMode, mute, darkmode }) {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <>
      <NavTop
        state={open ? "open" : "closed"}
        handleToggleMode={handleToggleMode}
        headline={"GameSelect"}
      ></NavTop>
      <Container>
        <Background>
          <Button active big onClick={handleClick}>
            Open Game!
          </Button>
        </Background>
        <Background alt>
          <AltButton active big onClick={handleClick}>
            Join Game!
          </AltButton>
        </Background>
        <Overlay
          open={open}
          mute={mute}
          darkmode={darkmode}
          handleToggleMode={handleToggleMode}
        />
      </Container>
    </>
  );
}
