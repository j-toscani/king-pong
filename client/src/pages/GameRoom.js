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
  const [leftPressed, togglePressedLeft] = React.useState(false);
  const [rightPressed, togglePressedRight] = React.useState(false);

  function handleConcede() {
    history.push(`/main`);
    const { socket } = connectedTo;
    socket.emit("conceded", "condeded");
  }

  // function togglePressedLeft(user){
  //   const state = {...leftPressed};
  //   state[user] = true;
  //   setPressedLeft(state)
  // }

  // function togglePressedRight(user){
  //   const state = {...leftPressed};
  //   state[user] = true;
  //   setPressedLeft(state)
  // }

  React.useEffect(() => {
    const { socket } = connectedTo;
    socket.on("pressed button", direction => {
      console.log("pressed ", direction);
    });
    socket.on("released button", direction => {
      console.log("pressed ", direction);
    });
    return () => {
      const { connected, socket } = connectedTo;
      socket.removeAllListeners();
      setConnectionTo({ connected, socket, ready: false });
      handleSession(socket, "leave");
    };
  }, []);

  return (
    <>
      <HeaderLogo headline={`Session's Game`}></HeaderLogo>
      <Container>
        <ConcedeButton onClick={handleConcede}>Concede</ConcedeButton>
        <GameBoard
          rightPressed={rightPressed}
          leftPressed={leftPressed}
          connectedTo={connectedTo}
          handleSession={handleSession}
        ></GameBoard>
        <InputContainer>
          <GameInput
            direction={"left"}
            handleTap={() => {
              togglePressedLeft(true);
              const { socket } = connectedTo;
              socket.emit("pressed button", "left");
            }}
            handleRelease={() => {
              togglePressedLeft(false);
              const { socket } = connectedTo;
              socket.emit("released button", "left");
            }}
          ></GameInput>
          <GameInput
            direction={"right"}
            handleTap={() => {
              togglePressedRight(true);
              const { socket } = connectedTo;
              socket.emit("pressed button", "right");
            }}
            handleRelease={() => {
              togglePressedRight(false);
              const { socket } = connectedTo;
              socket.emit("released button", "right");
            }}
          ></GameInput>
        </InputContainer>
      </Container>
    </>
  );
}
