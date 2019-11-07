export function createEvents(game, timeSinceLastDraw) {
  const { player1, player2, global, ball } = game;
  const fraction = timeSinceLastDraw / 1000;
  return [
    {
      name: "Ball and the Wall left and right",
      case: ball.x > global.x - ball.w,
      result: () => {
        if (ball.dx > 0) {
          ball.dx *= -1;
        }
      }
    },
    {
      name: "Ball and the Wall left and right",
      case: ball.x < 0,
      result: () => {
        if (ball.dx < 0) {
          ball.dx *= -1;
        }
      }
    },
    {
      name: "Ball and the Wall top",
      case: ball.y < 0,
      result: () => {
        ball.dy *= -1;
        player2.lifes -= 1;
      }
    },
    {
      name: "Ball and the Wall bottom",
      case: ball.y > global.y - ball.h,
      result: () => {
        ball.dy *= -1;
        player1.lifes -= 1;
      }
    },
    {
      name: "Ball and player",
      case:
        ball.y + ball.h > player1.y &&
        ball.y < player1.y + player1.h &&
        (ball.x > player1.x && ball.x < player1.x + player1.w),
      result: () => {
        if (ball.dy > 0 && ball.dx > 0) {
          ball.dy += 2;
          ball.dx += 2;
          ball.dy *= -1;
        } else if (ball.dy > 0) {
          ball.dy += 2;
          ball.dx -= 2;
          ball.dy *= -1;
        }
      }
    },
    {
      name: "Ball and player2",
      case:
        ball.y < player2.y + player2.h &&
        ball.y + ball.h > player2.y &&
        (ball.x > player2.x && ball.x < player2.x + player2.w),
      result: () => {
        if (ball.dy < 0 && ball.dx > 0) {
          ball.dy -= 0.2;
          ball.dx += 0.2;
          ball.dy *= -1;
        } else if (ball.dy < 0) {
          ball.dy -= 0.2;
          ball.dx -= 0.2;
          ball.dy *= -1;
        } else {
        }
      }

      // {
      //   name: "Player moving Paddle left",
      //   case: movePlayerLeft && player.x > 0,
      //   result: () => {
      //     player.x -= player.dx;
      //   }
      // },
      // {
      //   name: "Player moving Paddle right",
      //   case: movePlayerRight && player.x < global.x - player.w,
      //   result: () => {
      //     player.x += player.dx;
      //   }
      // },
      // {
      //   name: "Opponent moving Paddle left",
      //   case: moveOpponentLeft && opponent.x > 0,
      //   result: () => {
      //     opponent.x -= opponent.dx;
      //   }
      // },
      // {
      //   name: "Opponent moving Paddle right",
      //   case: moveOpponentRight && opponent.x < global.x - opponent.w,
      //   result: () => {
      //     opponent.x += opponent.dx;
      //   }
    },
    {
      name: "progression Loop",
      case: player1.lifes > 0 && player2.lifes > 0,
      result: () => {
        ball.x += ball.dx * fraction;
        ball.y += ball.dy * fraction;

        player1.x += player1.dx * fraction;
        player2.x += player2.dx * fraction;
      }
    }
  ];
}

export default function handleEvents(events) {
  events.forEach(event => {
    if (event.case) {
      event.result();
    }
  });
}
