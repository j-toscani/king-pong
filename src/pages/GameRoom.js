import React from "react";
import ChatRoom from "./ChatRoom";
import GameScreen from "./GameScreen";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

export default function GameRoom({
  nickname,
  open,
  handleToggleMode,
  mute,
  darkmode
}) {
  let history = useHistory();
  let id = Math.random();
  const [roomId, setRoomId] = React.useState(id);
  const [connectedTo, setConnectionTo] = React.useState(false);

  React.useEffect(() => {
    const port = 4000;

    const ws = new WebSocket("ws://localhost:4000/");

    ws.onopen = function() {
      console.log("Wbsocket Client Connected");
      ws.send("Hi this is web client.");
    };

    ws.message = function(e) {
      console.log("Recieved '" + e.data + "'");
    };

    history.push("/gameroom/chat");
    setConnectionTo({ connected: true, roomId, ws });
  }, [roomId]);

  console.log(connectedTo);

  return (
    <>
      <Switch>
        <Route exact path="/gameroom">
          <div>connecting</div>
        </Route>
        <Route exact path="/gameroom/chat">
          <ChatRoom
            nickname={nickname}
            handleToggleMode={handleToggleMode}
            darkmode={darkmode}
            mute={mute}
            open={open}
          ></ChatRoom>
        </Route>
        <Route exact path="/gameroom/game">
          <GameScreen
            nickname={nickname}
            connectedTo={connectedTo}
          ></GameScreen>
        </Route>
      </Switch>
    </>
  );
}
