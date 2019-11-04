export default function initGameState(state) {
  const game = {
    ball: {
      x: 145,
      y: 195,
      w: 10,
      h: 10,
      dx: -1,
      dy: -1
    },
    player: {
      x: 300 / 2 - 25,
      y: 350,
      w: 50,
      h: 10,
      dx: 3,
      dy: 0
    },
    opponent: {
      x: 300 / 2 - 25,
      y: 50,
      w: 50,
      h: 10,
      dx: 3,
      dy: 0
    },
    global: {
      x: 300,
      y: 400,
      cheerWin: "You Won!!!",
      cheerLoss: "You Lost...",
      winner: "opponent"
    }
  };
  if (state) {
    game.ball.dy *= -1;
  }
  return game;
}
