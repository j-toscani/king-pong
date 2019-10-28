import React from "react";
import ChatRoom from "./ChatRoom";
import GameScreen from "./GameScreen";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import openSocket from "socket.io-client";

export default function GameRoom({ nickname, setSettings, settings }) {
  let history = useHistory();
  const [connectedTo, setConnectionTo] = React.useState(false);

  React.useEffect(() => {
    history.push("/gameroom/join/chat");
    const socket = openSocket(
      process.env.REACT_APP_CLIENT_SOCKET_CONNECT || "http://127.0.0.1:8000"
    );
    socket.emit("setname", nickname);
    console.log(nickname + " connected to the Chat");
    setConnectionTo({ connected: true, socket });

    if (connectedTo) {
      return () => socket.emit("disconnected", "bye");
    }
  }, [connectedTo]);

  return (
    <>
      <Switch>
        <Route exact path="/gameroom/join/chat">
          <ChatRoom
            setConnectionTo={setConnectionTo}
            connectedTo={connectedTo}
            nickname={nickname}
            setSettings={setSettings}
            settings={settings}
          ></ChatRoom>
        </Route>
        <Route exact path="/gameroom/join/game">
          <GameScreen
            nickname={nickname}
            connectedTo={connectedTo}
          ></GameScreen>
        </Route>
      </Switch>
    </>
  );
}
