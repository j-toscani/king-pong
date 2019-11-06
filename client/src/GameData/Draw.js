function drawBall(canvas, ball) {
  canvas.fillStyle = ball.style;
  canvas.fillRect(ball.x, ball.y, ball.w, ball.h);
}

function drawPaddle(canvas, player) {
  canvas.fillStyle = player.style;
  canvas.fillRect(player.x, player.y, player.w, player.h);
}

export default function drawGameState(canvas, board, ball, player1, player2) {
  canvas.clearRect(0, 0, board.x, board.y);
  drawBall(canvas, ball);
  drawPaddle(canvas, player1);
  if (player2) {
    drawPaddle(canvas, player2);
  }
}
