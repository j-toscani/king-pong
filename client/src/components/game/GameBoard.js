import React from "react";
import styled from "styled-components";
import HeartRow from "./HeartRow";
import { useHistory } from "react-router-dom";
import draw from "../../gameData/draw";
import WinLossWindow from "./WinLossWindow";

import initGameState from "../../gameData/initGameState";

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

      if (lifes && !play) {
        connectedTo.socket.on("opponent conceded", () => {
          const state = { ...lifes };
          state.opponent = 0;
          setLifes(state);
        });
        setPlay(true);
      }

      draw(ctx, game, play, updateGame, currentFrame, move, lifes, setLifes);
      return () => {
        cancelAnimationFrame(currentFrame);
      };
    } else if (
      !modal.current.open &&
      (lifes.opponent === 0 || lifes.you === 0)
    ) {
      modal.current.showModal();
      const { socket } = connectedTo;
      handleSession(socket, "leave");
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
