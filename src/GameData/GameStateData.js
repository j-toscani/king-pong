// Default GameState

// Level functions and variables

const gameState = {
  player1: 5,
  player2: 5,
  width: 295,
  height: 400
};

// Ball Variables
const ball = {
  height: 5,
  width: 5,
  X: gameState.width / 2,
  Y: gameState.height / 2,
  SpeedX: 1,
  SpeedY: -1
};

// Paddle Variables

// paddle : "top" or "bottom" has to be decided via "user"

const user = {
  // player : user.name
  lifes: 5,
  height: 20,
  width: 100,
  X: gameState.width / 2,
  Y: user.p1 ? 0 + 20 : gameState.height - 20,
  Speed: 25
};
