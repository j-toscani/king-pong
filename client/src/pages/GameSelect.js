import React from "react";
import styled from "styled-components";
import HeaderNav from "../components/Header/HeaderNav";
import Button from "../components/Button";
import Overlay from "../components/Options/Overlay";
import ChatRoom from "./ChatRoom";
import GameScreen from "./GameScreen";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import openSocket from "socket.io-client";

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

export default function GameSelect({ setSettings, settings, nickname }) {
  const [connectedTo, setConnectionTo] = React.useState(false);

  const history = useHistory();
  function routeTo() {
    history.push(`/select/chat`);
  }

  React.useEffect(() => {
    const socket = openSocket(
      process.env.REACT_APP_CLIENT_SOCKET_CONNECT || "http://127.0.0.1:8000"
    );
    socket.emit("setname", nickname);
    setConnectionTo({ connected: true, socket });
    return () => {
      socket.emit("disconnected", "bye");
      setConnectionTo(false);
    };
  }, [nickname]);

  return (
    <>
      <Switch>
        <Route exact path="/select">
          <HeaderNav
            open={settings.open}
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
              <Button alter active big onClick={routeTo}>
                Join Game!
              </Button>
            </Background>
            <Overlay
              settings={settings}
              inGame={false}
              setSettings={setSettings}
            />
          </Container>
        </Route>
        <Route exact path="/select/chat">
          <ChatRoom
            setConnectionTo={setConnectionTo}
            connectedTo={connectedTo}
            nickname={nickname}
            setSettings={setSettings}
            settings={settings}
          ></ChatRoom>
        </Route>
        <Route exact path="/select/game">
          <GameScreen
            nickname={nickname}
            connectedTo={connectedTo}
          ></GameScreen>
        </Route>
      </Switch>
    </>
  );
}
