function calculateNewGameState(game, timeSinceLastDraw) {
  const { player1, player2, global, ball } = game;
  const fraction = timeSinceLastDraw / 1000;

  const ballHitWallRight = ball.x > global.x - ball.w && ball.dx > 0;
  const ballHitWallLeft = ball.x < 0 && ball.dx < 0;
  const ballHitWallTop = ball.y < 0 && ball.dy < 0;
  const ballHitWallBottom = ball.y > global.y - ball.h && ball.dy > 0;
  const ballHitPlayerOne =
    ball.y + ball.h > player1.y &&
    ball.y < player1.y + player1.h &&
    (ball.x > player1.x && ball.x < player1.x + player1.w);
  const ballHitPlayerTwo =
    ball.y < player2.y + player2.h &&
    ball.y + ball.h > player2.y &&
    (ball.x > player2.x && ball.x < player2.x + player2.w);
  const gameRunning = player1.lifes > 0 && player2.lifes > 0;

  if (ballHitWallRight) {
    ball.dx *= -1;
  }

  if (ballHitWallLeft) {
    ball.dx *= -1;
  }

  if (ballHitWallTop) {
    ball.dy *= -1;
    player2.lifes -= 1;
  }

  if (ballHitWallBottom) {
    ball.dy *= -1;
    player1.lifes -= 1;
  }

  if (ballHitPlayerOne) {
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

  if (ballHitPlayerTwo) {
    if (ball.dy < 0 && ball.dx > 0) {
      ball.dy -= 2;
      ball.dx += 2;
      ball.dy *= -1;
    } else if (ball.dy < 0) {
      ball.dy -= 2;
      ball.dx -= 2;
      ball.dy *= -1;
    }
  }

  if (gameRunning) {
    ball.x += ball.dx * fraction;
    ball.y += ball.dy * fraction;

    player1.x += player1.dx * fraction;
    player2.x += player2.dx * fraction;
  }
  return game;
}

exports.calculateNewGameState = calculateNewGameState;
