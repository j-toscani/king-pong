import createEvents, { handleEvents } from "./handleEvents";

function drawBall(canvas, ball) {
  canvas.fillStyle = ball.style;
  canvas.fillRect(ball.x, ball.y, ball.w, ball.h);
}

function drawPaddle(canvas, player) {
  canvas.fillStyle = player.style;
  canvas.fillRect(player.x, player.y, player.w, player.h);
}

function drawGameState(canvas, board, ball, player1, player2) {
  canvas.clearRect(0, 0, board.x, board.y);
  drawBall(canvas, ball);
  drawPaddle(canvas, player1);
  if (player2) {
    drawPaddle(canvas, player2);
  }
}

function draw(
  game,
  play,
  requestId,
  ctx,
  setPlay,
  connectedTo,
  updateGame,
  moveLeft,
  moveRight,
  setlifesYou,
  lifesYou,
  setlifesOpponent,
  lifesOpponent
) {
  const { ball, global, player, opponent } = game;

  requestId = requestAnimationFrame(() => draw(game));
  if (game) {
    drawGameState(ctx, global, ball, player, opponent);
  }
  if (play) {
    const events = createEvents(
      game,
      moveLeft,
      moveRight,
      setlifesYou,
      lifesYou,
      setlifesOpponent,
      lifesOpponent
    );
    handleEvents(events);
  }

  ball.x += ball.dx;
  ball.y += ball.dy;

  const state = { ball, player, global, opponent };

  if (lifesYou && lifesOpponent && !play) {
    const { socket } = connectedTo;
    socket.on("set winner", data => {
      const oldState = { ...game };
      oldState.global.winner = data;
    });
    setPlay(true);
  }
  updateGame(state);
}

export default draw;
