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

  function handleClick() {
    history.push(`/select`);
  }
  return (
    <>
      <TopLogo headline={`${nickname}'s Game`}></TopLogo>
      <Container>
        <ConcedeButton big onClick={handleClick}>
          Concede
        </ConcedeButton>
        <GameBoard></GameBoard>
        <InputContainer>
          <GameInput
            direction={"left"}
            onClick={() => console.log("move left")}
          ></GameInput>
          <GameInput
            direction={"right"}
            onClick={() => console.log("move right")}
          ></GameInput>
        </InputContainer>
      </Container>
    </>
  );
}
