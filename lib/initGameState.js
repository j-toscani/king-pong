function initGameState() {
  const game = {
    ball: {
      x: 135,
      y: 195,
      w: 10,
      h: 10,
      dx: -60,
      dy: -60,
      speed: false
    },
    player1: {
      x: 270 / 2 - 25,
      y: 300,
      w: 50,
      h: 10,
      dx: 0,
      dy: 0,
      lifes: 2
    },
    player2: {
      x: 270 / 2 - 25,
      y: 50,
      w: 50,
      h: 10,
      dx: 0,
      dy: 0,
      lifes: 2
    },
    global: {
      x: 270,
      y: 350,
      lastDraw: 0,
      winner: false
    }
  };
  return game;
}

exports.initGameState = initGameState;
