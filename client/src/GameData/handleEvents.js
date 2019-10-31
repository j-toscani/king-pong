import initGameState from "./initGameState";

export default function createEvents(game, move, lifes, setLifes, socket) {
  const { player, opponent, global, ball } = game;
  const { moveLeft, moveRight } = move;

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
        const newLifes = { ...lifes };
        newLifes.opponent -= 1;
        setLifes(newLifes);
      }
    },
    {
      name: "Ball and the Wall bottom",
      case: ball.y > global.y - ball.h,
      result: () => {
        ball.dy *= -1;
        const newLifes = { ...lifes };
        newLifes.you -= 1;
        setLifes(newLifes);
      }
    },
    {
      name: "Ball and player",
      case:
        ball.y > player.y - ball.h &&
        (ball.x > player.x && ball.x < player.x + player.w),
      result: () => {
        if (ball.dy > 0) {
          ball.dy *= -1;
        } else {
        }
      }
    },
    {
      name: "Ball and opponent",
      case:
        ball.y < opponent.y + 10 &&
        (ball.x > opponent.x && ball.x < opponent.x + opponent.w),
      result: () => {
        if (ball.dy < 0) {
          ball.dy -= 0.2;
          ball.dy *= -1;
        } else {
        }
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
    },
    {
      name: "Opponent moves to left to catch ball",
      case: ball.x - 25 < opponent.x && opponent.x > 0,
      result: () => {
        // opponent.x -= opponent.dx;
      }
    },
    {
      name: "Opponent moves to left to catch ball",
      case: ball.x - 25 > opponent.x && opponent.x + opponent.w < global.x,
      result: () => {
        // opponent.x += opponent.dx;
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
