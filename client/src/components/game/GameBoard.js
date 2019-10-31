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
  const [move, toggleMovement] = React.useState({
    moveLeft: false,
    moveRight: false
  });

  const [game, updateGame] = React.useState(gameStateInit);
  const [lifes, setLifes] = React.useState({ you: 5, opponent: 5 });
  const canvasRef = React.useRef(null);
  const modal = React.useRef(null);

  React.useEffect(
    () => toggleMovement({ moveLeft: leftPressed, moveRight: rightPressed }),
    [leftPressed, rightPressed]
  );

  React.useEffect(() => {
    if (game && lifes.you > 0 && lifes.opponent > 0) {
      let canvas = canvasRef.current;
      let ctx = canvas.getContext("2d");
      let requestId;
      const draw = game => {
        const { ball, global, player, opponent } = game;

        requestId = requestAnimationFrame(() => draw(game));
        if (game) {
          drawGameState(ctx, global, ball, player, opponent);
        }
        if (play) {
          const events = createEvents(game, move, lifes, setLifes);
          handleEvents(events);
        }

        ball.x += ball.dx;
        ball.y += ball.dy;

        const state = { ball, player, global, opponent };

        if (lifes && !play) {
          const { socket } = connectedTo;
          socket.on("set winner", data => {
            const oldState = { ...game };
            oldState.global.winner = data;
          });
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
  }, [lifes, move, play]);

  return (
    <GameContainer>
      <HeartRow p1 lifes={lifes.you}></HeartRow>
      <HeartRow p1={false} lifes={lifes.opponent}></HeartRow>

      <StyledCanvas width="295" height="400" ref={canvasRef}></StyledCanvas>
      <Modal ref={modal}>
        <WinLossWindow result={game["global"]} handleClick={handleGameEnding} />
      </Modal>
    </GameContainer>
  );
}
