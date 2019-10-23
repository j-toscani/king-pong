import React from "react";
import styled from "styled-components";
import { TopLogo } from "../components/Top";
import GameInput from "../components/GameInput";
import Button from "../components/Button";
import GameBoard from "../components/GameBoard";
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
  padding: 20px;
`;

const ConcedeButton = styled(Button)`
  position: absolute;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  margin-left: auto;
  margin-right: auto;
  top: -40px;
`;

export default function GameScreen({ nickname, connectedTo }) {
  let history = useHistory();
  const [leftPressed, togglePressedLeft] = React.useState(false);
  const [rightPressed, togglePressedRight] = React.useState(false);

  function handleClick() {
    connectedTo["ws"].close(1000, "Chickened out!");
    history.push(`/select`);
  }

  return (
    <>
      <TopLogo headline={`${nickname}'s Game`}></TopLogo>
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
