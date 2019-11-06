function initGameState() {
  const game = {
    ball: {
      x: 145,
      y: 195,
      w: 10,
      h: 10,
      dx: -40,
      dy: -40
    },
    player1: {
      x: 300 / 2 - 25,
      y: 350,
      w: 50,
      h: 10,
      dx: 0,
      dy: 0,
      lifes: 5
    },
    player2: {
      x: 300 / 2 - 25,
      y: 50,
      w: 50,
      h: 10,
      dx: 0,
      dy: 0,
      lifes: 5
    },
    global: {
      x: 300,
      y: 400,
      lastDraw: 0,
      cheerWin: "You Won!!!",
      cheerLoss: "You Lost...",
      winner: "opponent"
    }
  };
  return game;
}

exports.initGameState = initGameState;
