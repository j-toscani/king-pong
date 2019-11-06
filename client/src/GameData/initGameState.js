export default function initGameState() {
  const game = {
    ball: {
      x: 145,
      y: 195,
      w: 10,
      h: 10,
      dx: -1,
      dy: -1
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
      dx: 3,
      dy: 0,
      lifes: 5
    },
    global: {
      x: 300,
      y: 400,
      lastDraw: false,
      cheerWin: "You Won!!!",
      cheerLoss: "You Lost...",
      winner: "opponent"
    }
  };
  return game;
}
