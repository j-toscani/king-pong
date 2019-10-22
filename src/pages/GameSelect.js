import React from "react";
import styled from "styled-components";
import NavTop from "../components/NavTop";
import Button, { AltButton } from "../components/Button";
import Overlay from "../components/Overlay";
import { useHistory } from "react-router-dom";

const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
`;

const Background = styled.div`
  background: ${props => (props.alt ? props.theme.main : props.theme.contrast)};
  margin-bottom: ${props => (props.alt ? "100px" : false)};
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function GameSelect({ open, handleToggleMode, mute, darkmode }) {
  let history = useHistory();

  function handleClick() {
    const id = Math.random();
    history.push(`gameroom/chat/${id}`);
  }

  return (
    <>
      <NavTop
        state={open ? "open" : "closed"}
        handleToggleMode={handleToggleMode}
        headline={"Start a Game!"}
      ></NavTop>
      <Container>
        <Background>
          <Button active big onClick={handleClick}>
            Open Game!
          </Button>
        </Background>
        <Background alt="true">
          <AltButton active big onClick={handleClick}>
            Join Game!
          </AltButton>
        </Background>
        <Overlay
          open={open}
          mute={mute}
          darkmode={darkmode}
          inGame={false}
          handleToggleMode={handleToggleMode}
        />
      </Container>
    </>
  );
}
