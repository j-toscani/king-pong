const socketIo = require("socket.io");
const {
  gameCountDown,
  handleJoin,
  handleLeave,
  prepareGameStart,
  handleMovement
} = require("./socket-callbacks");
const { initGameState } = require("./initGameState");
const { serverLoop } = require("./serverLoop");

function initSocket(httpServer) {
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

    socket.on("join room", name => handleJoin(socket, room, name));
    socket.on("leave room", name => {
      game.global.play = false;
      handleLeave(socket, room, name);
    });

    socket.on("new message", message => {
      socket.broadcast.to(room).emit("new message", message);
    });

    socket.on("start game", () => {
      io.to(room).emit("start countdown", "start countdown");
      gameCountDown(io, socket, room);
    });

    socket.on("conceded", player => {
      const user = player === "1" ? "player1" : "player2";
      game[user].lifes = 0;
    });

    socket.on("release button", data => {
      handleMovement(data, game, "release");
    });
    socket.on("tap button", data => {
      handleMovement(data, game, "tap");
    });

    socket.on("first frame", () => {
      console.log("game started");
      serverLoop(prepareGameStart(game), io, socket, room, updateTime);
    });

    socket.on("error", err => {
      console.log("recievederror from client: ", allCLients[socket.id]);
      console.log(err);
    });
    socket.on("disconnect", () => {
      console.log("client disconnected...", socket.id);
      delete allClients[socket.id];
      console.log("Clients left: ", allClients);
    });
  });
}

exports.initSocket = initSocket;
