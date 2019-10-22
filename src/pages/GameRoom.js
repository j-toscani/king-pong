import React from "react";
import ChatRoom from "./ChatRoom";
import GameScreen from "./GameScreen";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

export default function GameRoom({ nickname, setSettings, settings }) {
  let history = useHistory();

  const [roomId, setRoomId] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [connectedTo, setConnectionTo] = React.useState(false);

  function toggleOpen(open) {
    setOpen(!open);
  }

  React.useEffect(() => {
    if (!connectedTo) {
      let id = Math.random();
      setRoomId(id);
      const ws = new WebSocket("ws://127.0.0.1:4000/");

      ws.onopen = function() {
        console.log("Websocket Client Connected");
        ws.send("Hi this is web client.");
      };

      ws.onmessage = function(e) {
        console.log(typeof e.data, e.data);
      };
      console.log("hook executed");
      history.push("/gameroom/chat");
      setConnectionTo({ connected: true, roomId, ws });
    } else {
      console.log(`ID already declared: ${roomId}`);
    }
  }, [roomId]);

  return (
    <>
      <Switch>
        <Route exact path="/gameroom">
          <div>connecting</div>
        </Route>
        <Route exact path="/gameroom/chat">
          <ChatRoom
            connectedTo={connectedTo}
            nickname={nickname}
            setSettings={setSettings}
            toggleOpen={toggleOpen}
            settings={settings}
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
