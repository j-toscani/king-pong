import React from "react";
import styled from "styled-components";
import HeartRow from "./HeartRow";

const StyledCanvas = styled.canvas`
  background: ${props => props.theme.accent};
  height: 400px;
  width: 295px;
`;

const GameContainer = styled.section`
  margin: 0;
  padding: 0;
  position: relative;
`;

export default function GameBoard() {
  const [gameState, setGameState] = React.useState({
    lifes: 2,
    level: 1,
    score: 0
  });
  return (
    <GameContainer>
      <HeartRow p1></HeartRow>
      <HeartRow p1={false} lifes={gameState["lifes"]}></HeartRow>
      <StyledCanvas></StyledCanvas>
    </GameContainer>
  );
}
