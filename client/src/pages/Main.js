import React from "react";
import ChatRoom from "./ChatRoom";
import GameRoom from "./GameRoom";
import SelectRoom from "./SelectRoom";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { getItem } from "../ressources/scripts/storage";
import io from "socket.io-client";

export default function Main({ setSettings, settings }) {
  const [connectedTo, setConnectionTo] = React.useState({});

  const history = useHistory();
  function routeTo() {
    history.push(`/main/chat`);
  }

  React.useEffect(() => {
    const socket = io(
      process.env.REACT_APP_CLIENT_SOCKET_CONNECT || "http://127.0.0.1:8000"
    );
    socket.emit("setname", getItem("nickname"));
    setConnectionTo({ connected: true, socket, opponent: false, ready: false });
    return () => {
      socket.close();
      setConnectionTo(false);
    };
  }, [connectedTo.room]);

  function handleSessionAction(socket, event) {
    switch (event) {
      case "join":
        socket.emit("join room", "joined room");
        break;
      case "create":
        socket.emit("create room", "created room");
        break;
      case "leave":
        socket.emit("leave room", "left room");
        break;
      default:
        alert("Dude, choose an event!");
        break;
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
            handleSession={handleSessionAction}
          ></SelectRoom>
        </Route>
        <Route exact path="/main/chat">
          <ChatRoom
            setConnectionTo={setConnectionTo}
            connectedTo={connectedTo}
            setSettings={setSettings}
            settings={settings}
            handleSession={handleSessionAction}
          ></ChatRoom>
        </Route>
        <Route exact path="/main/game">
          <GameRoom
            connectedTo={connectedTo}
            setConnectionTo={setConnectionTo}
            handleSession={handleSessionAction}
          ></GameRoom>
        </Route>
      </Switch>
    </>
  );
}
