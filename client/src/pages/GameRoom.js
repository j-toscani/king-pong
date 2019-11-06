import React from "react";
import GameRoomContainer, {
  InputContainer
} from "../components/game/GameRoomContainer";
import HeaderLogo from "../components/header/HeaderLogo";
import GameInput from "../components/game/GameInput";
import ConcedeButton from "../components/game/ConcedeButton";
import GameBoard from "../components/game/GameBoard";
import { useHistory } from "react-router-dom";

export default function GameRoom({
  handleSession,
  connectedTo,
  setConnectionTo
}) {
  let history = useHistory();
  const [playerPressed, setPlayerPressed] = React.useState({
    left: false,
    right: false
  });
  const [opponentPressed, setOpponentPressed] = React.useState({
    left: false,
    right: false
  });

  function handleConcede() {
    history.push(`/main`);
    const { socket } = connectedTo;
    socket.emit("conceded", "condeded");
  }

  function togglePressedPlayer(direction, action) {
    // const state = { ...playerPressed };
    // state[direction] = !state[direction];
    // setPlayerPressed(state);
    const infoToServer = { player: connectedTo.player, direction };
    const { socket } = connectedTo;
    if (action === "release") {
      socket.emit("release button", infoToServer);
    } else if (action === "tap") socket.emit("tap button", infoToServer);
  }

  console.log(connectedTo);

  function togglePressedOpponent(direction, action) {
    const state = { ...opponentPressed };
    if (action === "tap") {
      state[direction] = true;
    } else if (action === "release") {
      state[direction] = false;
    }
    setOpponentPressed(state);
  }

  React.useEffect(() => {
    const { socket } = connectedTo;
    socket.on("set player", number => {
      const { connected, socket } = { ...connectedTo };
      setConnectionTo({ connected, player: number, socket, ready: true });
    });
    socket.on("release button", direction => {
      togglePressedOpponent(direction, "release");
    });
    socket.on("tap button", direction => {
      togglePressedOpponent(direction, "tap");
    });
    return () => {
      const { connected, socket, player } = { ...connectedTo };
      setConnectionTo({ connected, socket, player, ready: false });
      handleSession(socket, "leave");
    };
  }, []);

  return (
    <>
      <HeaderLogo headline={`Session's Game`}></HeaderLogo>
      <GameRoomContainer>
        <ConcedeButton onClick={handleConcede}>Concede</ConcedeButton>
        <GameBoard
          opponentPressed={opponentPressed}
          playerPressed={playerPressed}
          connectedTo={connectedTo}
          handleSession={handleSession}
        ></GameBoard>
        <InputContainer>
          <GameInput
            direction={"left"}
            handleTap={() => {
              togglePressedPlayer("left", "tap");
            }}
            handleRelease={() => {
              togglePressedPlayer("left", "release");
            }}
          ></GameInput>
          <GameInput
            direction={"right"}
            handleTap={() => {
              togglePressedPlayer("right", "tap");
            }}
            handleRelease={() => {
              togglePressedPlayer("right", "release");
            }}
          ></GameInput>
        </InputContainer>
      </GameRoomContainer>
    </>
  );
}
