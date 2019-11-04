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

  io.on("connection", socket => {
    console.log("client connected");

    socket.on("setname", name => {
      allClients[socket.id] = name;
    });

    socket.on("join room", () => handleJoin(socket, room, allClients));
    socket.on("leave room", () => {
      handleLeave(socket, room, allClients);
      game.global["play"] = true;
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

      const events = createEvents(game, io, room, timeSinceLastDraw);
      handleEvents(events);

      if (game.global.play) {
        setTimeout(() => drawLoop(game), 500);
      }
    }

    function updateLoop(game) {
      let intervall;
      if (game.global.play) {
        intervall = setInterval(() => {
          io.to(room).emit("new frame", game);
        }, 100);
      } else if (!game.global.play) {
        clearInterval(intervall);
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
        game.player.dx = -3;
      }
      if (direction === "right") {
        game.player.dx = 3;
      }
    });

    socket.on("first frame", () => {
      game.global.play = true;
      drawLoop(game);
    });
    socket.on("subscribe to game", () => {
      game.global.play = true;
      updateLoop(game);
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
