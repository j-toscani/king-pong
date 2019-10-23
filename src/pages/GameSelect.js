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
  const [open, setOpen] = React.useState(false);

  function toggleOpen(open) {
    setOpen(!open);
  }

  console.log(settings);
  let history = useHistory();

  function handleClick() {
    history.push(`gameroom/join`);
  }

  return (
    <>
      <NavTop
        open={open}
        setSettings={setSettings}
        toggleOpen={toggleOpen}
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
          toggleOpen={toggleOpen}
          open={open}
          settings={settings}
          inGame={false}
          setSettings={setSettings}
        />
      </Container>
    </>
  );
}
