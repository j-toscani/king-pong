// Global functions and properties
"use strict";

import { setNewLevel } from "../app.js";

console.log("I am loaded!");

const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");

// adjust life and score display
const lifeDisplay = document.querySelector("#lifes");
const scoreDisplay = document.querySelector("#score");

function createUserInfo() {
  lifeDisplay.innerHTML = `You have ${life} lifes remaining.`;
  scoreDisplay.innerHTML = `Score: ${score}`;
}

// loading images
const ballImage = new Image();
ballImage.src = "sprites/ball.jpg";
const paddleImageP1 = new Image();
paddleImageP1.src = "./sprites/paddle.jpg";

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

// Obstacle Variables (for testing)
const obstacle = {
  height: 100,
  width: 100,
  X: canvas.width / 2,
  Y: canvas.height / 2
};

obstacle.X = obstacle.X - obstacle.height / 2;
obstacle.Y = obstacle.Y - obstacle.width / 2;

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
function movePaddelRightP1() {
  paddleP1.X += paddleP1.SpeedY;
}
function movePaddleLeftP1() {
  paddleP1.X -= paddleP1.SpeedY;
}
//Paddle interaction
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
window.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight" && paddleP1.X < canvas.width) {
    movePaddelRightP1();
  }
  if (e.key === "ArrowLeft" && paddleP1.X > 0) {
    movePaddleLeftP1();
  }
});

function drawObstacle(object) {
  ctx.fillRect(object.X, object.Y, object.width, object.height);
  const collision = detectCollisionBetween(ball, object);
  if (collision) {
    consequenceAfterCollisionWithSquare(object);
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
