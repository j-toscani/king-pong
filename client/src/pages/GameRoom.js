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

  function handleConcede() {
    history.push(`/main`);
    const { socket, player } = connectedTo;
    socket.emit("conceded", player);
  }

  function togglePressed(direction, action) {
    const infoToServer = { player: connectedTo.player, direction };
    const { socket } = connectedTo;
    if (action === "release") {
      socket.emit("release button", infoToServer);
    } else if (action === "tap") socket.emit("tap button", infoToServer);
  }

  React.useEffect(() => {
    const { socket } = connectedTo;
    socket.on("set player", number => {
      const { connected, socket } = { ...connectedTo };
      setConnectionTo({ connected, player: number, socket, ready: true });
    });

    return () => {
      const { connected, socket, player } = { ...connectedTo };
      setConnectionTo({ connected, socket, player, ready: false });
      socket.removeAllListeners();
      handleSession(socket, "leave");
    };
  }, []);

  return (
    <>
      <HeaderLogo headline={`Session's Game`}></HeaderLogo>
      <GameRoomContainer>
        <ConcedeButton onClick={handleConcede}>Concede</ConcedeButton>
        <GameBoard
          connectedTo={connectedTo}
          handleSession={handleSession}
        ></GameBoard>
        <InputContainer>
          <GameInput
            direction={"left"}
            handleTap={() => {
              togglePressed("left", "tap");
            }}
            handleRelease={() => {
              togglePressed("left", "release");
            }}
          ></GameInput>
          <GameInput
            direction={"right"}
            handleTap={() => {
              togglePressed("right", "tap");
            }}
            handleRelease={() => {
              togglePressed("right", "release");
            }}
          ></GameInput>
        </InputContainer>
      </GameRoomContainer>
    </>
  );
}
