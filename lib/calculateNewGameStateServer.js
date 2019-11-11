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
    (ball.x - ball.w > player1.x && ball.x < player1.x + player1.w);
  const leftQuarterPlayerOne = ball.x < player1.x + 12;
  const rightQuarterPlayerOne = ball.x > player1.x + player1.w - 12;
  const middleQuartersPlayerOne =
    !leftQuarterPlayerOne && !rightQuarterPlayerOne;

  const ballHitPlayerTwo =
    ball.y < player2.y + player2.h &&
    ball.y + ball.h > player2.y &&
    ball.dy < 0 &&
    (ball.x - ball.w > player2.x && ball.x < player2.x + player2.w);
  const leftQuarterPlayerTwo = ball.x < player2.x + 12;
  const rightQuarterPlayerTwo = ball.x > player2.x + player2.w - 12;
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
  }

  if (ballHitWallBottom) {
    ball.dy *= -1;
    player1.lifes -= 1;
    ball.x = Math.random() * global.x;
    ball.y = global.y / 2;
    io.to(room).emit("playerOne lost a life", {
      playerOne: player1.lifes,
      playerTwo: player2.lifes
    });
  }
  if (ballHitPlayerOne || ballHitPlayerTwo) {
    console.log("ball hit");
  }
  if (ballHitPlayerOne && leftQuarterPlayerOne) {
    ball.dy = (-1 * ballspeed * 3) / 8;
    ball.dx = (ballspeed * 5) / 8;
  }
  if (ballHitPlayerOne && rightQuarterPlayerOne) {
    ball.dy = (ballspeed * 3) / 8;
    ball.dx = (-1 * ballspeed * 5) / 8;
  }
  if (ballHitPlayerOne && middleQuartersPlayerOne) {
    ball.dy = ballspeed / 2;
    ball.dx = ballspeed / 2;
    ball.dy *= -1;
  }

  if (ballHitPlayerTwo && leftQuarterPlayerTwo) {
    ball.dy = (ballspeed * 3) / 8;
    ball.dx = (-1 * ballspeed * 5) / 8;
  }
  if (ballHitPlayerTwo && rightQuarterPlayerTwo) {
    ball.dy = (ballspeed * 3) / 8;
    ball.dx = (ballspeed * 5) / 8;
  }
  if (ballHitPlayerTwo && middleQuartersPlayerTwo) {
    ball.dy = ballspeed / 2;
    ball.dx = ballspeed / 2;
    ball.dy *= -1;
  }

  if (gameRunning) {
    ball.x += ball.dx * fraction;
    ball.y += ball.dy * fraction;

    player1.x += player1.dx * fraction;
    player2.x += player2.dx * fraction;

    if (player1.x > 0) {
      player1.x = 0;
    }
    if (player2.x > 0) {
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
