import drawAnimationBall from "./drawAnimationBall";

function drawPaddle(canvas, player) {
  canvas.fillStyle = player.style;
  canvas.fillRect(player.x, player.y, player.w, player.h);
}

export default function animationDraw(canvas, animationObjects) {
  const { ball, paddle1, paddle2 } = animationObjects;

  canvas.clearRect(0, 0, 200, 280);
  drawPaddle(canvas, paddle1);
  drawPaddle(canvas, paddle2);
  drawAnimationBall(canvas, ball);

  ball.x += ball.dx;
  ball.y += ball.dy;
  paddle1.y += paddle1.d;
  paddle2.y += paddle2.d;
  paddle2["y"] = ball.y - 25;
  if (paddle2.y < 0) {
    paddle2.y = 0;
  }
  if (paddle2.y < 0) {
    paddle2.y = 0;
  }
  if (paddle2.y > 230) {
    paddle2.y = 230;
  }
  if (ball.x > 195) {
    ball.dx = -2;
  }
  if (ball.x < 10) {
    ball.dx = 2;
  }
  if (ball.y > 270) {
    ball.dy = -2;
  }
  if (ball.y < 5) {
    ball.dy = 2;
  }
  if (paddle1.y <= 5) {
    paddle1.d = 3;
  }
  if (paddle1.y >= 225) {
    paddle1.d = -3;
  }
}
