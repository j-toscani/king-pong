import drawAnimationBall from "../../ressources/welcomeAnimation/drawAnimationObjects";

export default function animationDraw(
  canvas,
  currentFrame,
  ball,
  updateAnimation
) {
  console.log(ball);

  canvas.clearRect(0, 0, 200, 280);
  //drawAnimationObjects(canvas, animationObjects);
  drawAnimationBall(canvas, ball);

  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.x > 200 || ball.x < 0) {
    ball.dx *= -1;
  }
  if (ball.y > 280 || ball.y < 0) {
    ball.dy *= -1;
  }
  //handleNewFrame(animationObjects);

  updateAnimation(ball);

  currentFrame = requestAnimationFrame(() =>
    animationDraw(canvas, currentFrame, ball, updateAnimation)
  );
}
