import React from "react";
import styled from "styled-components";
import HeaderNav from "../components/Header/HeaderNav";
import Button from "../components/Button";
import Overlay from "../components/Options/Overlay";
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
      <HeaderNav
        open={settings["open"]}
        toggleOpen={() => setSettings("open")}
        headline={"Start a Game!"}
      />
      <Container>
        <Background>
          <Button active big onClick={routeTo}>
            Open Game!
          </Button>
        </Background>
        <Background alt="true">
          <Button alt active big onClick={routeTo}>
            Join Game!
          </Button>
        </Background>

        <Overlay settings={settings} inGame={false} setSettings={setSettings} />
      </Container>
    </>
  );
}
