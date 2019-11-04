import React from "react";
import styled from "styled-components";
import HeartRow from "./HeartRow";
import { useHistory } from "react-router-dom";
import drawGameState from "../../gameData/draw";
import createEvents, { handleEvents } from "../../gameData/handleEvents";
import WinLossWindow from "./WinLossWindow";
import initGameState from "../../gameData/initGameState";
import { getItem, setItem } from "../../ressources/scripts/storage";

const StyledCanvas = styled.canvas`
  background: ${props => props.theme.accent};
  width: 300px;
  height: 400px;
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
  opponentPressed,
  playerPressed,
  connectedTo,
  handleSession
}) {
  let history = useHistory();

  function handleGameEnding() {
    history.push(`/main`);
  }

  const [play, setPlay] = React.useState(false);
  const [move, toggleMovement] = React.useState({
    movePLayerLeft: false,
    movePlayerRight: false,
    moveOpponentLeft: false,
    moveOpponentRight: false
  });

  const [game, updateGame] = React.useState(() =>
    initGameState(connectedTo.opponent)
  );
  const [lifes, setLifes] = React.useState({ you: 2, opponent: 2 });
  const canvasRef = React.useRef(null);
  const modal = React.useRef(null);

  React.useEffect(() => {
    toggleMovement({
      movePlayerLeft: playerPressed.left,
      movePlayerRight: playerPressed.right,
      moveOpponentLeft: opponentPressed.left,
      moveOpponentRight: opponentPressed.right
    });
  }, [playerPressed, opponentPressed]);

  React.useEffect(() => {
    if (game && lifes.you > 0 && lifes.opponent > 0) {
      let canvas = canvasRef.current;
      let ctx = canvas.getContext("2d");
      let currentFrame;

      const draw = () => {
        const { ball, global, player, opponent } = game;
        currentFrame = requestAnimationFrame(() => draw(game));
        if (game) {
          drawGameState(ctx, global, ball, player, opponent);
        }
        if (play) {
          const events = createEvents(
            game,
            move,
            lifes,
            setLifes,
            connectedTo.socket
          );
          handleEvents(events);
        }

        ball.x += ball.dx;
        ball.y += ball.dy;

        if (lifes && !play) {
          connectedTo.socket.on("opponent conceded", () => {
            const state = { ...lifes };
            state.opponent = 0;
            setLifes(state);
          });
          connectedTo.socket.on("reset game", () =>
            initGameState(connectedTo.opponent)
          );
          setPlay(true);
        }
        const state = { ball, player, global, opponent };
        updateGame(state);
      };
      draw();
      return () => {
        cancelAnimationFrame(currentFrame);
      };
    } else if (!modal.current.open && lifes.you === 0) {
      modal.current.showModal();
      let losses = getItem("lost") || 0;
      losses += 1;
      setItem("lost", losses);
      handleSession(connectedTo.socket, "leave");
    } else if (!modal.current.open && lifes.opponent === 0) {
      modal.current.showModal();
      let wins = getItem("won") || 0;
      wins += 1;
      setItem("won", wins);
      handleSession(connectedTo.socket, "leave");
    }
  }, [lifes, move, play, connectedTo, handleSession]);

  return (
    <GameContainer>
      <HeartRow p1 lifes={lifes.you}></HeartRow>
      <HeartRow p1={false} lifes={lifes.opponent}></HeartRow>

      <StyledCanvas width="300" height="400" ref={canvasRef}></StyledCanvas>
      <Modal ref={modal}>
        <WinLossWindow lifes={lifes} handleClick={handleGameEnding} />
      </Modal>
    </GameContainer>
  );
}
