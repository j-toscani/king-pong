import React from "react";
import ChatRoom from "./ChatRoom";
import GameScreen from "./GameScreen";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

export default function GameRoom({ nickname, setSettings, settings }) {
  let history = useHistory();

  const [roomId, setRoomId] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [connectedTo, setConnectionTo] = React.useState(false);

  function toggleOpen(open) {
    setOpen(!open);
  }

  React.useEffect(() => {
    history.push("/gameroom/join/chat");
    if (!connectedTo) {
      let id = Math.random();
      setRoomId(id);
      const ws = new WebSocket("ws://127.0.0.1:4000/");

      ws.onopen = function() {
        ws.send("Hi, this is " + nickname || "Pal");
      };

      ws.onmessage = function(message) {
        console.log(typeof message.data);
        if (JSON.parse(message.data).type === "chatmessage") {
          console.log(JSON.parse(message.data));
          console.log(JSON.parse(message.data).nickname);
        } else {
          console.log(JSON.stringify(message));
        }
      };

      setConnectionTo({ connected: true, roomId, ws });
    } else {
      console.log(`ID already declared: ${roomId}`);
    }
  }, [roomId]);

  return (
    <>
      <Switch>
        <Route exact path="/gameroom/join/chat">
          <ChatRoom
            connectedTo={connectedTo}
            nickname={nickname}
            setSettings={setSettings}
            toggleOpen={toggleOpen}
            settings={settings}
            open={open}
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
