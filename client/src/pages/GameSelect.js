import React from "react";
import ChatRoom from "./ChatRoom";
import GameScreen from "./GameScreen";
import SelectRoom from "./SelectRoom";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import openSocket from "socket.io-client";

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
      socket.close();
      setConnectionTo(false);
    };
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/select">
          <SelectRoom
            routeTo={routeTo}
            nickname={nickname}
            setSettings={setSettings}
            settings={settings}
          ></SelectRoom>
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
