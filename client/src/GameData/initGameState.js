export default function initGameState(state) {
  const game = {
    ball: {
      x: 200,
      y: 145,
      w: 10,
      h: 10,
      dx: -1,
      dy: -1,
      pdx: 2
    },
    player: {
      x: 290 / 2 - 50,
      y: 350,
      w: 100,
      h: 10,
      dx: 3,
      dy: 0
    },
    opponent: {
      x: 290 / 2 - 50,
      y: 40,
      w: 100,
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
    debugger;
  }
  return game;
}
