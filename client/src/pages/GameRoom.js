import React from "react";
import GameRoomContainer, {
  InputContainer
} from "../components/game/GameRoomContainer";
import HeaderLogo from "../components/header/HeaderLogo";
import GameInput from "../components/game/GameInput";
import ConcedeButton from "../components/game/ConcedeButton";
import GameBoard from "../components/game/GameBoard";
import { getItem, setItem } from "../ressources/scripts/storage";
import { useHistory } from "react-router-dom";

export default function GameRoom({
  handleSession,
  connectedTo,
  setConnectionTo
}) {
  let history = useHistory();

  function saveWinLossData(ending) {
    const result = ending ? "won" : "lost";
    let count = getItem(result) || 0;
    count += 1;
    setItem(result, count);
  }

  function handleConcede() {
    history.push(`/main`);
    const { socket, player } = connectedTo;
    const lost = !true;
    saveWinLossData(lost);
    socket.emit("conceded", player);
  }

  function togglePressed(direction, action) {
    const infoToServer = { player: connectedTo.player, direction };
    const { socket } = connectedTo;
    if (action === "release") {
      socket.emit("release button", infoToServer);
    } else if (action === "tap") socket.emit("tap button", infoToServer);
  }

  return (
    <>
      <HeaderLogo headline={`Session's Game`}></HeaderLogo>
      <GameRoomContainer>
        <ConcedeButton onClick={handleConcede}>Concede</ConcedeButton>
        <GameBoard
          connectedTo={connectedTo}
          setConnectionTo={setConnectionTo}
          handleSession={handleSession}
          saveWinLossData={saveWinLossData}
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
