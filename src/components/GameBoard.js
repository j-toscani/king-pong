import React from "react";
import styled from "styled-components";
import HeartRow from "./HeartRow";
import { useHistory } from "react-router-dom";
import drawGameState from "../GameData/Draw";
import createEvents, { handleEvents } from "../GameData/Events";

const StyledCanvas = styled.canvas`
  background: ${props => props.theme.accent};
`;

const GameContainer = styled.section`
  margin: 0;
  padding: 0;
  position: relative;
`;

export default function GameBoard({ leftPressed, rightPressed }) {
  let history = useHistory();

  function handleGameEnding() {
    history.push(`/select`);
  }

  const [play, setPlay] = React.useState(false);
  const [moveLeft, toggleMovementLeft] = React.useState(false);
  const [moveRight, toggleMovementRight] = React.useState(false);
  const [game, updateGame] = React.useState({
    ball: {
      x: 100,
      y: 150,
      w: 10,
      h: 10,
      dx: 1,
      dy: 1,
      pdx: 2
    },
    player1: { x: 290 / 2 - 50, y: 380, w: 100, h: 10, dx: 1, dy: 0 },
    board: {
      x: 295,
      y: 400
    }
  });

  const [lifesP1, setlifesP1] = React.useState(5);
  const [lifesP2, setlifesP2] = React.useState(5);
  const canvasRef = React.useRef(null);

  React.useEffect(() => toggleMovementLeft(leftPressed), [leftPressed]);
  React.useEffect(() => toggleMovementRight(rightPressed), [rightPressed]);
  React.useEffect(() => {
    debugger;
    if (game && lifesP1 > 0) {
      let canvas = canvasRef.current;
      let ctx = canvas.getContext("2d");
      let requestId;
      const draw = game => {
        const ball = game["ball"];
        const player1 = game["player1"];
        const player2 = game["player2"];
        const board = game["board"];

        requestId = requestAnimationFrame(() => draw(game));
        drawGameState(ctx, board, ball, player1);

        if (play) {
          const events = createEvents(
            game,
            moveLeft,
            moveRight,
            setlifesP1,
            lifesP1,
            setlifesP2,
            lifesP2
          );
          handleEvents(events);
        }
        ball.x += ball.dx;
        ball.y += ball.dy;

        const state = { ball, player1, board };

        if (lifesP1 && lifesP2 && !play) {
          setPlay(true);
        }
        updateGame(state);
      };

      draw(game);
      return () => {
        cancelAnimationFrame(requestId);
      };
    } else {
      alert("Game Over");
    }
  }, [lifesP1, lifesP2, moveRight, moveLeft, play]);

  return (
    <GameContainer>
      <HeartRow p1 lifes={lifesP1}></HeartRow>
      <HeartRow p1={false} lifes={lifesP2}></HeartRow>

      <StyledCanvas
        width="295"
        height="400"
        ref={canvasRef}
        onClick={() => {
          alert("You will be sent to main Page!");
          handleGameEnding();
        }}
      ></StyledCanvas>
    </GameContainer>
  );
}
