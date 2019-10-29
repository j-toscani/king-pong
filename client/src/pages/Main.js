import React from "react";
import ChatRoom from "./ChatRoom";
import GameRoom from "./GameRoom";
import SelectRoom from "./SelectRoom";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import io from "socket.io-client";

export default function Main({ setSettings, settings, nickname }) {
  const [connectedTo, setConnectionTo] = React.useState(false);

  const history = useHistory();
  function routeTo() {
    history.push(`/main/chat`);
  }

  React.useEffect(() => {
    const socket = io(
      process.env.REACT_APP_CLIENT_SOCKET_CONNECT || "http://127.0.0.1:8000"
    );
    socket.emit("setname", nickname);
    console.log(nickname);
    setConnectionTo({ connected: true, socket });
    return () => {
      socket.close();
      setConnectionTo(false);
    };
  }, [nickname]);

  function enterPlaySession(io, event) {
    const socket = io;
    switch (event) {
      case "join":
        socket.emit("room", "joined room");
        break;
      case "create":
        socket.emit("room", "created room");
        break;
      default:
        alert("Dude, choose an event!");
        break;
    }
  }
  function leavePlaySession(io) {
    const socket = io;
    socket.close();
  }

  function handleSession(io, action, event) {
    if (action === "start") {
      enterPlaySession(io, event);
    }
    if (action === "end") {
      leavePlaySession(io);
    }
  }

  return (
    <>
      <Switch>
        <Route exact path="/main">
          <SelectRoom
            routeTo={routeTo}
            connectedTo={connectedTo}
            setSettings={setSettings}
            settings={settings}
            handleSession={handleSession}
          ></SelectRoom>
        </Route>
        <Route exact path="/main/chat">
          <ChatRoom
            setConnectionTo={setConnectionTo}
            connectedTo={connectedTo}
            setSettings={setSettings}
            settings={settings}
            handleSession={handleSession}
          ></ChatRoom>
        </Route>
        <Route exact path="/main/game">
          <GameRoom
            connectedTo={connectedTo}
            handleSession={handleSession}
          ></GameRoom>
        </Route>
      </Switch>
    </>
  );
}
