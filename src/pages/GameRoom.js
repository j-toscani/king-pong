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
  const [connected, setConnection] = React.useState(false);

  function handleClick(destination) {
    if (destination === "select") {
      history.push("/select");
    } else {
      history.push(`${destination}`);
      console.log(`${destination}`);
    }
  }

  React.useEffect(() => {
    history.push("/gameroom/chat");
    setConnection(true);
  }, [roomId]);

  return (
    <>
      <Switch>
        <Route exact path="/gameroom">
          <div>
            connecting
            <button onClick={() => handleClick("chat")}>button</button>
          </div>
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
          <GameScreen nickname={nickname}></GameScreen>
        </Route>
      </Switch>
    </>
  );
}
