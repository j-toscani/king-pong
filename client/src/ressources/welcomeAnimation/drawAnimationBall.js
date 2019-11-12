export default function drawAnimationBall(canvas, ball) {
  canvas.beginPath();
  canvas.arc(ball.x, ball.y, ball.w, 0, Math.PI * 2);
  canvas.fill();
}
