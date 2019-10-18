import React from "react";
import styled from "styled-components";
import HeartRow from "./HeartRow";
import { useHistory } from "react-router-dom";
import { detectCollisionBetween } from "../GameData/Collision";

const StyledCanvas = styled.canvas`
  background: ${props => props.theme.accent};
`;

const GameContainer = styled.section`
  margin: 0;
  padding: 0;
  position: relative;
`;

export default function GameBoard({ leftPressed, rightPressed }) {
  //include gameobjects as the state
  //include draw-function to draw everything once when canvas gets clicked, fiddle around with positioning
  // implement gameloop to let the ball bounce araound
  // implement controles
  const [moveLeft, toggleMovementLeft] = React.useState(false);
  const [moveRight, toggleMovementRight] = React.useState(false);
  const [game, updateGame] = React.useState([
    // ball
    {
      x: 100,
      y: 150,
      w: 10,
      h: 10,
      dx: 1,
      dy: 1,
      pdx: 2
    },
    // paddle
    { x: 10, y: 10, w: 100, h: 10, dx: 1, dy: 0 },
    // canvas
    {
      x: 295,
      y: 400
    }
  ]);
  const [lifes, setLifes] = React.useState(5);

  const canvasRef = React.useRef(null);

  React.useEffect(() => toggleMovementLeft(leftPressed), [leftPressed]);
  React.useEffect(() => toggleMovementRight(rightPressed), [rightPressed]);
  React.useEffect(() => {
    if (lifes > 0) {
      let canvas = canvasRef.current;
      let ctx = canvas.getContext("2d");
      let requestId;
      const draw = input => {
        const ball = input[0];
        const paddle = input[1];
        const board = input[2];
        const collision =
          ball.y < paddle.y + paddle.h &&
          (ball.x > paddle.x && ball.x < paddle.x + paddle.w);

        ctx.clearRect(0, 0, 295, 400);
        ctx.fillRect(ball.x, ball.y, 10, 10);
        ctx.fillRect(paddle.x, 10, paddle.w, paddle.h);

        requestId = requestAnimationFrame(() => draw(game));
        if (ball.x > board.x - 10 || ball.x < 0) {
          ball.dx *= -1;
        }
        if (collision) {
          ball.dy *= -1;
        }
        if (ball.y > board.y - 10) {
          ball.dy *= -1;
          const lifeLost = lifes - 1;
          setLifes(lifeLost);
        }

        if (moveLeft) {
          paddle.x -= paddle.dx;
        } else if (moveRight) {
          paddle.x += paddle.dx;
        }

        ball.x += ball.dx;
        ball.y += ball.dy;

        const state = [ball, paddle, board];

        updateGame(state);
      };

      draw(game);
      return () => {
        cancelAnimationFrame(requestId);
      };
    } else {
      alert("Game Over");
    }
  }, [lifes, moveRight, moveLeft]);

  let history = useHistory();

  function handleGameEnding() {
    history.push(`/select`);
  }

  return (
    <GameContainer>
      <HeartRow p1></HeartRow>
      <HeartRow p1={false} lifes={lifes}></HeartRow>

      <StyledCanvas
        width="295"
        height="400"
        ref={canvasRef}
        onClick={
          () => {
            alert("You will be sent to main Page!");
            handleGameEnding();
          }
          //   () => {
          //   console.log(ball.dy);
          //   if (ball.dy === 1) {
          //     updateBall(prevState => {
          //       return { ...prevState, dy: -1 };
          //     });
          //   } else {
          //     updateBall(prevState => {
          //       return { ...prevState, dy: 1 };
          //     });
          //   }
          // }
        }
      ></StyledCanvas>
    </GameContainer>
  );
}
