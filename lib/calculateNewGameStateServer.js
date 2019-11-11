function calculateNewGameStateServer(game, io, room, timeSinceLastDraw) {
  const { player1, player2, global, ball } = game;
  const fraction = timeSinceLastDraw / 1000;
  ballspeed = Math.abs(ball.dx) + Math.abs(ball.dy);

  const ballHitWallRight = ball.x > global.x - ball.w && ball.dx > 0;
  const ballHitWallLeft = ball.x < 0 && ball.dx < 0;
  const ballHitWallTop = ball.y < 0 && ball.dy < 0;
  const ballHitWallBottom = ball.y > global.y - ball.h && ball.dy > 0;

  const ballHitPlayerOne =
    ball.y + ball.h > player1.y &&
    ball.y < player1.y + player1.h &&
    ball.dy > 0 &&
    (ball.x + ball.w > player1.x && ball.x < player1.x + player1.w);
  const leftQuarterPlayerOne = ball.x + 5 < player1.x + 10;
  const rightQuarterPlayerOne = ball.x + 5 > player1.x + player1.w - 10;
  const middleQuartersPlayerOne =
    !leftQuarterPlayerOne && !rightQuarterPlayerOne;

  const ballHitPlayerTwo =
    ball.y < player2.y + player2.h &&
    ball.y + ball.h > player2.y &&
    ball.dy < 0 &&
    (ball.x + ball.w > player2.x && ball.x < player2.x + player2.w);
  const leftQuarterPlayerTwo = ball.x + 5 < player2.x + 10;
  const rightQuarterPlayerTwo = ball.x + 5 > player2.x + player2.w - 10;
  const middleQuartersPlayerTwo =
    !leftQuarterPlayerTwo && !rightQuarterPlayerTwo;
  const gameRunning = player1.lifes > 0 && player2.lifes > 0;
  const gameEnded = !gameRunning;

  if (ballHitWallRight) {
    ball.dx *= -1;
  }

  if (ballHitWallLeft) {
    ball.dx *= -1;
  }

  if (ballHitWallTop) {
    ball.dy *= -1;
    player2.lifes -= 1;
    io.to(room).emit("playerTwo lost a life", {
      playerOne: player1.lifes,
      playerTwo: player2.lifes
    });
    ball.y = global.y / 2;
    ball.x = Math.random() * global.x;
    if (ballspeed > 150) {
      ballspeed -= 30;
    }
  }

  if (ballHitWallBottom) {
    ball.dy *= -1;
    player1.lifes -= 1;
    io.to(room).emit("playerOne lost a life", {
      playerOne: player1.lifes,
      playerTwo: player2.lifes
    });
    ball.x = Math.random() * global.x;
    ball.y = global.y / 2;
    if (ballspeed > 100) {
      ballspeed = 100;
    }
  }
  if (ballHitPlayerOne && leftQuarterPlayerOne) {
    ballspeed += 10;
    ball.dy = (ballspeed * -3) / 10;
    ball.dx = (ballspeed * -7) / 10;
  }
  if (ballHitPlayerOne && rightQuarterPlayerOne) {
    ballspeed += 10;
    ball.dy = (ballspeed * -3) / 10;
    ball.dx = (ballspeed * 7) / 10;
  }
  if (ballHitPlayerOne && middleQuartersPlayerOne) {
    ballspeed += 10;
    const ballFromRight = ball.dx < 0;

    ball.dy = ballspeed / -2;
    ball.dx = ballspeed / 2;

    if (ballFromRight) {
      ball.dx += -1;
    }
  }

  if (ballHitPlayerTwo && leftQuarterPlayerTwo) {
    ballspeed += 10;
    ball.dy = (ballspeed * 3) / 10;
    ball.dx = (ballspeed * 7) / 10;
  }
  if (ballHitPlayerTwo && rightQuarterPlayerTwo) {
    ballspeed += 10;
    ball.dy = (ballspeed * 3) / 10;
    ball.dx = (-ballspeed * -7) / 10;
  }
  if (ballHitPlayerTwo && middleQuartersPlayerTwo) {
    ballspeed += 10;
    const ballFromRight = ball.dx < 0;

    ball.dy = ballspeed / 2;
    ball.dx = ballspeed / 2;
    if (ballFromRight) {
      ball.dx *= -1;
    }
  }

  if (gameRunning) {
    ball.x += ball.dx * fraction;
    ball.y += ball.dy * fraction;

    player1.x += player1.dx * fraction;
    player2.x += player2.dx * fraction;

    if (player1.x < 0) {
      player1.x = 0;
    }
    if (player2.x < 0) {
      player2.x = 0;
    }
    if (player1.x + player1.w > global.x) {
      player1.x = global.x - player1.w;
    }
    if (player2.x + player2.w > global.x) {
      player2.x = global.x - player2.w;
    }
  }
  if (gameEnded) {
    game.global.play = false;
  }
  return game;
}

exports.calculateNewGameStateServer = calculateNewGameStateServer;
