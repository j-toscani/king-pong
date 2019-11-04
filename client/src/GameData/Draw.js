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

export default function draw(
  canvas,
  game,
  play,
  updateGame,
  currentFrame,
  move,
  lifes,
  setLifes
) {
  const { ball, global, player, opponent } = game;
  currentFrame = requestAnimationFrame(() =>
    draw(canvas, game, play, updateGame, currentFrame)
  );
  if (game) {
    drawGameState(canvas, global, ball, player, opponent);
  }
  if (play) {
    const events = createEvents(game, move, lifes, setLifes);
    handleEvents(events);
  }

  ball.x += ball.dx;
  ball.y += ball.dy;

  const state = { ball, player, global, opponent };
  updateGame(state);
}
