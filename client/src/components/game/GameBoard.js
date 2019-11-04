import React from "react";
import styled from "styled-components";
import HeartRow from "./HeartRow";
import { useHistory } from "react-router-dom";
import drawGameState from "../../gameData/draw";
import WinLossWindow from "./WinLossWindow";
import initGameState from "../../gameData/initGameState";
import { getItem, setItem } from "../../ressources/scripts/storage";
import { handleEvents, createEvents } from "../../gameData/handleEvents";

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
  // const [play, setPlay] = React.useState(false);

  function saveWinLossData(result) {
    let count = getItem(result) || 0;
    count += 1;
    setItem(result, count);
  }

  React.useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    // let currentFrame;
    // if (play && game) {
    //   const drawGame = game => {
    //     const { global, ball, player, player2 } = game;
    //     drawGameState(ctx, global, ball, player, player2);
    //     const events = createEvents(game);
    //     handleEvents(events);
    //     const newFrame = { global, ball, player, player2 };
    //     requestAnimationFrame(() => drawGame(newFrame));
    //   };
    //   drawGame(game);
    // }

    const { socket } = connectedTo;
    socket.on("new frame", frame => {
      const { global, ball, player, player2 } = frame;
      drawGameState(ctx, global, ball, player, player2);
      updateGame(frame);
    });
    socket.on("opponent conceded", () => {
      const state = { ...lifes };
      state.opponent = 0;
      setLifes(state);
    });
    socket.emit("first frame", "first frame");
    socket.emit("subscribe to game", "subscribe");

    return () => {
      // cancelAnimationFrame(currentFrame);
      connectedTo.socket.removeAllListeners();
    };
  }, []);

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
