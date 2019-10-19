// Global functions and properties
"use strict";

import { setNewLevel } from "../app.js";

const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");

//Collision consequence

function consequenceAfterCollisionWithSquare(square) {
  const ballDistanceToSquareCenter = {
    X: Math.abs(square.X + square.width / 2 - (ball.X + ball.width / 2)),
    Y: Math.abs(square.Y + square.height / 2 - (ball.Y + ball.height / 2))
  };
  const hitFromLeftOrRight =
    ballDistanceToSquareCenter.X > ballDistanceToSquareCenter.Y;
  const hitFromTopOrBottom = !hitFromLeftOrRight;

  if (hitFromLeftOrRight) {
    ball.SpeedX *= -1;
  } else if (hitFromTopOrBottom) {
    ball.SpeedY *= -1;
  }
}

//Ball Functions
function drawBall() {
  ball.X += ball.SpeedX;
  ball.Y += ball.SpeedY;
  ctx.drawImage(ballImage, ball.X, ball.Y, ball.width, ball.height);
  if (detectCollisionWallLeft(ball) || detectCollisionWallRight(ball)) {
    ball.SpeedX *= -1;
  }
  if (detectCollisionWallTop(ball)) {
    ball.SpeedY *= -1;
  }
  if (detectCollisionBetween(ball, paddleP1)) {
    ball.SpeedY *= -1;
    paddleP1.SpeedY += +2;
    ball.SpeedY -= 0.5;
    score = ++score;
    if (ball.SpeedX < 0) {
      ball.SpeedX -= 0.5;
    } else if (ball.SpeedX > 0) {
      ball.SpeedX += 0.5;
    }
  }
  if (detectCollisionWallBottom(ball)) {
    life -= 1;
    ball.X = canvas.width / 2 - ball.width / 2;
    ball.Y = canvas.height - 70;
    ball.SpeedY *= -1;
  }
}

// Paddle Functions
function drawPaddleP1() {
  ctx.fillRect(paddleP1.X, paddleP1.Y, paddleP1.width, paddleP1.height);
  if (detectCollisionWallLeft(paddleP1)) {
    paddleP1.X = 0;
  }
  if (detectCollisionWallRight(paddleP1)) {
    paddleP1.X = canvas.width - paddleP1.width;
  }
}

//Game function
export function drawLevel01() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddleP1();
  drawBall();
  createUserInfo();
  if (life > 0 && score < 10) {
    requestAnimationFrame(drawLevel01);
  } else if (life > 0 && score === 10) {
    alert(`New Level unlocked!!!`);
    setNewLevel(2);
  } else if (life === 0) {
    if (score < 5) {
      alert(`Game Over :(. You hit the ball.: ${score} times... meh.`);
    } else if (score > 5 && score < 10) {
      alert(`Game Over :(. You hit the ball: ${score} times. Well done!`);
    } else if (score >= 10) {
      alert(`Game Over :(. You hit the ball: ${score} times. Shibedisheesh!`);
    }
  }
}
