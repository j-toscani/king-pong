import React from "react";
import styled from "styled-components";
import HeartRow from "./HeartRow";
import { useHistory } from "react-router-dom";
import drawGameState from "../../gameData/draw";
import WinLossWindow from "./WinLossWindow";
import { getItem, setItem } from "../../ressources/scripts/storage";
import handleEvents, { createEvents } from "../../gameData/handleEvents";

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

  const [game, updateGame] = React.useState(false);

  const [move, toggleMovement] = React.useState({
    movePLayerLeft: false,
    movePlayerRight: false,
    moveOpponentLeft: false,
    moveOpponentRight: false
  });
  const [lifes, setLifes] = React.useState({ you: 4, opponent: 2 });
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

  function saveWinLossData(result) {
    let count = getItem(result) || 0;
    count += 1;
    setItem(result, count);
  }

  React.useEffect(() => {
    const { socket } = connectedTo;
    socket.on("new frame", frame => {
      updateGame(frame);
    });
    socket.on("opponent conceded", () => {
      const state = { ...lifes };
      state["you"] = 0;
      handleSession(socket, "leave");
      setLifes(state);
    });
    socket.emit("first frame", "first frame");

    return () => {
      connectedTo.socket.removeAllListeners();
    };
  }, []);

  React.useEffect(() => {
    let currentFrame;
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    if (game) {
      const drawLoop = game => {
        const { ball, player, player2, global } = game;
        const now = Date.now();
        const timeSinceLastDraw = game.global.lastDraw
          ? now - game.global.lastDraw
          : 0;

        game.global.lastDraw = now;
        const events = createEvents(game, timeSinceLastDraw);
        handleEvents(events);

        drawGameState(ctx, global, ball, player, player2);
        const state = { ball, player, player2, global };
        if (game.global.play) {
          currentFrame = requestAnimationFrame(() => drawLoop(game));
        }
      };
      drawLoop(game);
    }
    return () => cancelAnimationFrame(currentFrame);
  }, [game]);

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
