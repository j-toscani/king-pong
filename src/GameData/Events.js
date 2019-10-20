export default function createEvents(
  game,
  moveLeft,
  moveRight,
  setlifesP1,
  lifesP1,
  setlifesP2,
  lifesP2
) {
  const ball = game["ball"];
  const player1 = game["player1"];
  const player2 = game["player2"];
  const board = game["board"];
  return [
    {
      name: "Ball and the Wall left and right",
      case: ball.x > board.x - ball.w || ball.x < 0,
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
      case: ball.y > board.y - ball.h,
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
      name: "Player moving Paddle",
      case: moveLeft && player1.x > 0,
      result: () => {
        player1.x -= player1.dx;
      }
    },
    {
      name: "Player moving Paddle",
      case: moveRight && player1.x < board.x - player1.w,
      result: () => {
        player1.x += player1.dx;
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
