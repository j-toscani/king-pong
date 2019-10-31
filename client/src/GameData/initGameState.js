export default function initGameState() {
  const game = {
    ball: {
      x: 100,
      y: 150,
      w: 10,
      h: 10,
      dx: 1.5,
      dy: 2.5,
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
      w: 50,
      h: 10,
      dx: 1,
      dy: 0
    },
    global: {
      x: 295,
      y: 400,
      cheerWin: "You Won!!!",
      cheerLoss: "You Lost...",
      winner: "opponent"
    }
  };
  return game;
}
