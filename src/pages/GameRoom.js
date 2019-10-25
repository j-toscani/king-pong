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
    const socket = openSocket("http://127.0.0.1:5000");
    socket.emit("connected", "client connection established");
    socket.on("register", data => console.log(data));
    debugger;
    setConnectionTo({ connected: true, socket });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/gameroom/join/chat">
          <ChatRoom
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
