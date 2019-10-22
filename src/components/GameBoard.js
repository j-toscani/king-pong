import React from "react";
import styled from "styled-components";
import HeartRow from "./HeartRow";
import { useHistory } from "react-router-dom";
import WinLossWindow from "../components/WinLossWindow";
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

const Modal = styled.dialog`
  border: none;
  padding: 0;
  margin: auto;
  background: transparent;
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
      dx: 1.5,
      dy: 2.5,
      pdx: 2
    },
    player1: {
      player: true,
      x: 290 / 2 - 50,
      y: 350,
      w: 100,
      h: 10,
      dx: 3,
      dy: 0
    },
    player2: {
      player: false,
      x: 290 / 2 - 50,
      y: 40,
      w: 100,
      h: 10,
      dx: 2,
      dy: 0
    },
    global: {
      x: 295,
      y: 400,
      cheerWin: "You Won!!!",
      cheerLoss: "You Lost...",
      winner: "opponent"
    }
  });
  const [lifesP1, setlifesP1] = React.useState(5);
  const [lifesP2, setlifesP2] = React.useState(1);
  const canvasRef = React.useRef(null);
  const modal = React.useRef(null);

  React.useEffect(() => toggleMovementLeft(leftPressed), [leftPressed]);
  React.useEffect(() => toggleMovementRight(rightPressed), [rightPressed]);
  React.useEffect(() => {
    if (game && lifesP1 > 0 && lifesP2 > 0) {
      let canvas = canvasRef.current;
      let ctx = canvas.getContext("2d");
      let requestId;
      const draw = game => {
        const { ball, global, player1, player2 } = game;

        requestId = requestAnimationFrame(() => draw(game));
        if (game) {
          drawGameState(ctx, global, ball, player1, player2);
        }
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

        const state = { ball, player1, global, player2 };

        if (lifesP1 && lifesP2 && !play) {
          setPlay(true);
        }
        updateGame(state);
      };

      draw(game);
      return () => {
        cancelAnimationFrame(requestId);
      };
    } else if (!modal.current.open) {
      modal.current.showModal();
    }
  }, [lifesP1, lifesP2, moveRight, moveLeft, play]);

  return (
    <GameContainer>
      <HeartRow p1 lifes={lifesP1}></HeartRow>
      <HeartRow p1={false} lifes={lifesP2}></HeartRow>

      <StyledCanvas width="295" height="400" ref={canvasRef}></StyledCanvas>
      <Modal ref={modal}>
        <WinLossWindow
          result={game["global"]}
          onClick={() => {
            handleGameEnding();
          }}
        />
      </Modal>
    </GameContainer>
  );
}
