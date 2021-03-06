import React from "react";
import styled from "styled-components";
import HeaderNav from "../components/header/HeaderNav";
import Button from "../components/Button";
import Overlay from "../components/options/Overlay";
import { getItem, setItem } from "../ressources/scripts/storage";

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

export default function SelectRoom({
  routeTo,
  connectedTo,
  settings,
  setSettings,
  handleSession
}) {
  const [open, setOpen] = React.useState(false || getItem("open"));

  function toggleOpen() {
    setItem("open", !open);
    setOpen(!open);
  }
  return (
    <>
      <HeaderNav
        open={open}
        toggleOpen={toggleOpen}
        headline={"Start a Game!"}
      />
      <Container>
        <Background>
          <Button
            big
            onClick={() => {
              alert(
                "This feature will be added soon! Talk to the creater for more info :)"
              );
            }}
          >
            Create Game!
          </Button>
        </Background>
        <Background alt="true">
          <Button
            alter
            active
            big
            onClick={() => {
              routeTo();
              const { socket } = connectedTo;
              handleSession(socket, "join");
            }}
          >
            Join Game!
          </Button>
        </Background>
        <Overlay
          settings={settings}
          inGame={false}
          setSettings={setSettings}
          toggleOpen={toggleOpen}
          open={open}
        />
      </Container>
    </>
  );
}
