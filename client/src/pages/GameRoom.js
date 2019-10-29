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

export default function GameRoom({ nickname, connectedTo }) {
  let history = useHistory();
  const [leftPressed, togglePressedLeft] = React.useState(false);
  const [rightPressed, togglePressedRight] = React.useState(false);

  function handleClick() {
    history.push(`/select`);
  }

  return (
    <>
      <HeaderLogo headline={`${nickname}'s Game`}></HeaderLogo>
      <Container>
        <ConcedeButton onClick={handleClick}>Concede</ConcedeButton>
        <GameBoard
          rightPressed={rightPressed}
          leftPressed={leftPressed}
          connectedTo={connectedTo}
        ></GameBoard>
        <InputContainer>
          <GameInput
            direction={"left"}
            handleTap={() => {
              togglePressedLeft(true);
            }}
            handleRelease={() => {
              togglePressedLeft(false);
            }}
          ></GameInput>
          <GameInput
            direction={"right"}
            handleTap={() => {
              togglePressedRight(true);
            }}
            handleRelease={() => {
              togglePressedRight(false);
            }}
          ></GameInput>
        </InputContainer>
      </Container>
    </>
  );
}
