function gameCountDown(io, room) {
  let count = 4;
  const timer = setInterval(() => {
    io.in(room).emit("new server message", {
      user: "socket.io - server",
      nickname: "Server",
      content: `${count - 1} seconds until start`
    });
    count -= 1;
    if (count === 0) {
      clearInterval(timer);
      io.in(room).emit("game start", "start");
    }
  }, 1000);
}

exports.gameCountDown = gameCountDown;
