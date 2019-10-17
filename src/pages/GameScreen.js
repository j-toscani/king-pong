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

export default function GameScreen({ nickname }) {
  let history = useHistory();
  const [state, setState] = React.useState(10);
  function handleClick() {
    history.push(`/select`);
  }

  function handleInputClick(direction) {
    if (direction === "up") {
      const newState = state + 10;
      setState(Number(newState));
    }
    if (direction === "down") {
      const newState = state - 10;
      setState(Number(newState));
    }
  }

  return (
    <>
      <TopLogo headline={`${nickname}'s Game`}></TopLogo>
      <Container>
        <ConcedeButton big onClick={handleClick}>
          Concede
        </ConcedeButton>
        <GameBoard change={state}></GameBoard>
        <InputContainer>
          <GameInput
            direction={"left"}
            onClick={() => handleInputClick("up")}
          ></GameInput>
          <GameInput
            direction={"right"}
            onClick={() => handleInputClick("down")}
          ></GameInput>
        </InputContainer>
      </Container>
    </>
  );
}
