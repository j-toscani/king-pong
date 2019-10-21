export default function createEvents(
  game,
  moveLeft,
  moveRight,
  setlifesP1,
  lifesP1,
  setlifesP2,
  lifesP2
) {
  const { player1, player2, global, ball } = game;

  const player = game["player1"].player ? game["player1"] : game["player2"];
  const opponent = game["player2"].player ? game["player2"] : game["player1"];

  return [
    {
      name: "Ball and the Wall left and right",
      case: ball.x > global.x - ball.w || ball.x < 0,
      result: () => (ball.dx *= -1)
    },
    {
      name: "Ball and the Wall top",
      case: ball.y < 0,
      result: () => {
        ball.dy *= -1;
        const lostLife = lifesP1 - 1;
        setlifesP1(lostLife);
      }
    },
    {
      name: "Ball and the Wall bottom",
      case: ball.y > global.y - ball.h,
      result: () => {
        ball.dy *= -1;
        const lostLife = lifesP2 - 1;
        setlifesP2(lostLife);
      }
    },
    {
      name: "Ball and Player1",
      case:
        ball.y > player1.y - ball.h &&
        (ball.x > player1.x && ball.x < player1.x + player1.w),
      result: () => {
        ball.dy *= -1;
      }
    },
    {
      name: "Ball and Player1",
      case:
        ball.y < player2.y + 10 &&
        (ball.x > player2.x && ball.x < player2.x + player2.w),
      result: () => {
        ball.dy *= -1;
      }
    },
    {
      name: "Player moving Paddle left",
      case: moveLeft && player.x > 0,
      result: () => {
        player.x -= player.dx;
      }
    },
    {
      name: "Player moving Paddle right",
      case: moveRight && player.x < global.x - player.w,
      result: () => {
        player.x += player.dx;
      }
    }
  ];
}

export function handleEvents(events) {
  events.forEach(event => {
    if (event.case) {
      console.log(` The ${event.name}-Event occured!`);
      event.result();
    }
  });
}
