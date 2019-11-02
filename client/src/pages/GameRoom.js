import React from "react";
import styled from "styled-components";
import HeaderLogo from "../components/Header/HeaderLogo";
import GameInput from "../components/game/GameInput";
import Button from "../components/Button";
import GameBoard from "../components/game/GameBoard";
import { useHistory } from "react-router-dom";

const Container = styled.main`
  height: 100%;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  padding: 20px;
`;

const ConcedeButton = styled(Button)`
  position: absolute;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  margin-left: auto;
  margin-right: auto;
  top: -20px;
`;

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
    const state = { ...playerPressed };
    state[direction] = !state[direction];
    setPlayerPressed(state);
    const { socket } = connectedTo;
    if (action === "release") {
      socket.emit("release button", direction);
    } else if (action === "tap") socket.emit("tap button", direction);
  }

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
    socket.on("release button", direction => {
      togglePressedOpponent(direction, "release");
    });
    socket.on("tap button", direction => {
      togglePressedOpponent(direction, "tap");
    });
    return () => {
      const { connected, socket } = connectedTo;
      setConnectionTo({ connected, socket, ready: false });
      handleSession(socket, "leave");
    };
  }, []);

  console.log(connectedTo);

  return (
    <>
      <HeaderLogo headline={`Session's Game`}></HeaderLogo>
      <Container>
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
      </Container>
    </>
  );
}
