import React from "react";
import styled from "styled-components";
import HeartRow from "./HeartRow";
import { useHistory } from "react-router-dom";
import drawGameState from "../../gameData/draw";
import WinLossWindow from "./WinLossWindow";

import handleEvents, { createEvents } from "../../gameData/handleEvents";

const StyledCanvas = styled.canvas`
  background: ${props => props.theme.accent};
  width: 300px;
  height: 400px;
  transform: ${props => (props.player2View ? "rotate(180deg)" : "none")};
`;

const GameContainer = styled.section`
  margin: 0;
  padding: 0;
  position: relative;
`;

export default function GameBoard({ connectedTo, saveWinLossData }) {
  let history = useHistory();

  function handleGameEnding() {
    history.push(`/main`);
  }

  const [game, updateGame] = React.useState();

  const [lifes, setLifes] = React.useState({ playerOne: 5, playerTwo: 5 });
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const { socket } = connectedTo;
    socket.on("new frame", frame => {
      updateGame(frame);
    });
    socket.on("playerTwo lost a life", newLifes => {
      setLifes(newLifes);
    });
    socket.on("game ended", game => {
      game.global.play = "ended";
      saveWinLossData(game.global.winner);
      updateGame(game);
    });
    socket.on("playerOne lost a life", newLifes => {
      setLifes(newLifes);
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

    const drawLoop = game => {
      const { ball, player1, player2, global } = game;
      const now = Date.now();
      const timeSinceLastDraw = game.global.lastDraw
        ? now - game.global.lastDraw
        : 0;

      game.global.lastDraw = now;
      const events = createEvents(game, timeSinceLastDraw);
      handleEvents(events);

      drawGameState(ctx, global, ball, player1, player2);
      if (game.global.play) {
        currentFrame = requestAnimationFrame(() => drawLoop(game));
      }
    };
    if (game && game.global.play !== "ended") {
      drawLoop(game);
    }
    return () => cancelAnimationFrame(currentFrame);
  }, [game]);

  return (
    <GameContainer>
      <HeartRow
        p1={Number(connectedTo.player) === 2}
        lifes={lifes.playerTwo}
      ></HeartRow>
      <HeartRow
        p1={Number(connectedTo.player) === 1}
        lifes={lifes.playerOne}
      ></HeartRow>
      <StyledCanvas
        player2View={Number(connectedTo.player) === 2}
        ref={canvasRef}
        width="300"
        height="400"
      ></StyledCanvas>
      {game && game.global.play === "ended" && (
        <WinLossWindow
          result={game.global.winner}
          handleClick={handleGameEnding}
        />
      )}
    </GameContainer>
  );
}
