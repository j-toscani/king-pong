const {
  calculateNewGameStateServer
} = require("./calculateNewGameStateServer");

function serverLoop(game, io, socket, room, updateTime) {
  const now = Date.now();
  const timeSinceLastDraw = game.global.lastDraw
    ? now - game.global.lastDraw
    : 0;
  game.global.lastDraw = now;
  const newGameState = calculateNewGameStateServer(
    game,
    io,
    room,
    timeSinceLastDraw
  );
  if (game.global.play) {
    updateTime += timeSinceLastDraw;
    if (updateTime > 40) {
      io.to(room).emit("new frame", newGameState);
      updateTime = 0;
    }
    setTimeout(() => serverLoop(newGameState, io, socket, room, updateTime), 0);
  } else {
    const player1Won = game.player2.lifes === 0;
    game.global.winner = player1Won ? "1" : "2";
    game.global.lastDraw = 0;
    console.log("game ended");
    socket.emit("game ended", game);
  }
}

exports.serverLoop = serverLoop;
