const socketIo = require("socket.io");
const {
  gameCountDown,
  handleJoin,
  handleLeave,
  prepareGameStart
} = require("./socket-callbacks");
const { initGameState } = require("./initGameState");
const { calculateNewGameState } = require("./calculateNewGameState");

async function initSocket(httpServer) {
  const io = socketIo(httpServer);

  const allClients = [];
  const room = "ThisIsARooom";
  let game = initGameState();
  let updateTime = 0;

  io.on("connection", socket => {
    console.log("client connected");

    socket.on("setname", name => {
      allClients[socket.id] = name;
    });

    socket.on("join room", name => handleJoin(io, socket, room, name));
    socket.on("leave room", name => {
      game.global.play = false;
      handleLeave(socket, room, name);
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
      const newGameState = calculateNewGameState(
        game,
        io,
        room,
        timeSinceLastDraw
      );
      if (game.global.play) {
        updateTime += timeSinceLastDraw;
        if (updateTime > 50) {
          io.to(room).emit("new frame", newGameState);
          updateTime = 0;
        }
        setTimeout(() => drawLoop(newGameState), 0);
      } else {
        const player1Won = game.player2.lifes === 0;
        const winner = player1Won ? "1" : "2";
        io.to(room).emit("game ended", winner);
        game.global.lastDraw = 0;
      }
    }

    socket.on("start game", () => {
      io.to(room).emit("start countdown", "start countdown");
      gameCountDown(io, socket, room);
    });

    socket.on("conceded", player => {
      const user = player === "1" ? "player1" : "player2";
      game[user].lifes = 0;
      socket.broadcast.to(room).emit("opponent conceded", "opponent conceded");
    });

    socket.on("release button", data => {
      const direction = data.direction;
      const user = data.player;
      if (direction === "left" && user == "1") {
        game.player1.dx = 0;
      }
      if (direction === "right" && user == "1") {
        game.player1.dx = 0;
      }
      if (direction === "left" && user == "2") {
        game.player2.dx = 0;
      }
      if (direction === "right" && user == "2") {
        game.player2.dx = 0;
      }
    });
    socket.on("tap button", data => {
      const direction = data.direction;
      const user = data.player;
      if (direction === "left" && user === "1") {
        game.player1.dx = -30;
      }
      if (direction === "right" && user === "2") {
        game.player2.dx = -30;
      }
      if (direction === "right" && user === "1") {
        game.player1.dx = 30;
      }
      if (direction === "left" && user === "2") {
        game.player2.dx = 30;
      }
    });

    socket.on("first frame", () => {
      drawLoop(prepareGameStart(socket, game, room));
    });

    socket.on("error", err => {
      console.log("recievederror from client: ", allCLients[socket.id]);
      console.log(err);
    });
    socket.on("disconnect", () => {
      console.log("client disconnected...", socket.id);
      game.global.play = false;
      socket.broadcast.to(room).emit("game ended", "game ended");
      delete allClients[socket.id];
      console.log("Clients left: ", allClients);
    });
  });
}

exports.initSocket = initSocket;
