import React from "react";
import styled from "styled-components";
import HeartRow from "./HeartRow";
import { useHistory } from "react-router-dom";
import WinLossWindow from "./WinLossWindow";
import drawGameState from "../../GameData/draw";
import createEvents, { handleEvents } from "../../GameData/handleEvents";
import gameStateInit from "../../GameData/initGameState";

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

export default function GameBoard({
  leftPressed,
  rightPressed,
  connectedTo,
  handleSession
}) {
  let history = useHistory();

  function handleGameEnding() {
    history.push(`/main`);
  }

  const [play, setPlay] = React.useState(false);
  const [moveLeft, toggleMovementLeft] = React.useState(false);
  const [moveRight, toggleMovementRight] = React.useState(false);
  const [game, updateGame] = React.useState(gameStateInit);
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
      const { socket } = connectedTo;
      handleSession(socket, "leave");
    }
  }, [lifesP1, lifesP2, moveRight, moveLeft, play]);

  return (
    <GameContainer>
      <HeartRow p1 lifes={lifesP1}></HeartRow>
      <HeartRow p1={false} lifes={lifesP2}></HeartRow>

      <StyledCanvas width="295" height="400" ref={canvasRef}></StyledCanvas>
      <Modal ref={modal}>
        <WinLossWindow result={game["global"]} handleClick={handleGameEnding} />
      </Modal>
    </GameContainer>
  );
}
