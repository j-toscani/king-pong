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

export default function GameSelect({ setSettings, settings }) {
  console.log(settings);
  let history = useHistory();

  function routeTo() {
    history.push(`gameroom/join`);
  }

  return (
    <>
      <NavTop
        open={settings["open"]}
        toggleOpen={() => setSettings("open")}
        headline={"Start a Game!"}
      ></NavTop>
      <Container>
        <Background>
          <Button active big handleClick={routeTo}>
            Open Game!
          </Button>
        </Background>
        <Background alt="true">
          <AltButton active big handleClick={routeTo}>
            Join Game!
          </AltButton>
        </Background>

        <Overlay settings={settings} inGame={false} setSettings={setSettings} />
      </Container>
    </>
  );
}
