const socketIo = require("socket.io");
const {
  gameCountDown,
  handleJoin,
  handleLeave
} = require("./socket-callbacks");
const { initGameState } = require("./initGameState");
const { createEvents, handleEvents } = require("./handleEvents");

async function initSocket(httpServer) {
  const io = socketIo(httpServer);

  const allClients = [];
  const room = "ThisIsARooom";
  const game = initGameState();
  let updateTime = 0;

  io.on("connection", socket => {
    console.log("client connected");

    socket.on("setname", name => {
      allClients[socket.id] = name;
    });

    socket.on("join room", () => handleJoin(socket, room, allClients));
    socket.on("leave room", () => {
      game.global.play = false;
      handleLeave(socket, room, allClients);
    });

    socket.on("new message", message => {
      socket.broadcast.to(room).emit("new message", message);
    });

    function drawLoop(game) {
      const now = Date.now();
      const timeSinceLastDraw = game.global.lastDraw
        ? now - game.global.lastDraw
        : 0;
      game.global.lastDraw = now;
      const events = createEvents(game, timeSinceLastDraw);
      handleEvents(events);
      if (game.global.play) {
        updateTime += timeSinceLastDraw;
        if (updateTime > 50) {
          io.to(room).emit("new frame", game);
          updateTime = 0;
        }
        setTimeout(() => drawLoop(game), 0);
      }
    }

    socket.on("start game", () => gameCountDown(io, room));

    socket.on("conceded", () => {
      game.global.play = false;
      socket.broadcast.to(room).emit("opponent conceded", "opponent conceded");
    });

    socket.on("release button", direction => {
      if (direction === "left") {
        game.player.dx = 0;
      }
      if (direction === "right") {
        game.player.dx = 0;
      }
    });
    socket.on("tap button", direction => {
      if (direction === "left") {
        game.player.dx = -15;
      }
      if (direction === "right") {
        game.player.dx = 15;
      }
    });

    socket.on("first frame", () => {
      game.global.play = true;
      drawLoop(game);
    });

    socket.on("error", err => {
      console.log("recievederror from client: ", allCLients[socket.id]);
      console.log(err);
    });
    socket.on("disconnect", () => {
      console.log("client disconnected...", socket.id);
      game.global.play = false;
      delete allClients[socket.id];
      console.log(allClients);
    });
  });
}

exports.initSocket = initSocket;
