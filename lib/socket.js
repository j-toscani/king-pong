const socketIo = require("socket.io");
const {
  gameCountDown,
  handleJoin,
  handleLeave
} = require("./socket-callbacks");

async function initSocket(httpServer) {
  const io = socketIo(httpServer);

  const allClients = [];
  const room = "ThisIsARooom";

  io.on("connection", socket => {
    console.log("client connected");

    socket.on("setname", name => {
      allClients[socket.id] = name;
    });

    socket.on("join room", () => handleJoin(socket, room, allClients));
    socket.on("leave room", () => handleLeave(socket, room, allClients));

    socket.on("new message", message => {
      socket.broadcast.to(room).emit("new message", message);
    });

    socket.on("start game", () => gameCountDown(io, room));

    socket.on("conceded", () =>
      socket.broadcast.to(room).emit("opponent conceded", "opponent conceded")
    );

    socket.on("release button", direction => {
      socket.broadcast.to(room).emit("release button", direction);
    });
    socket.on("tap button", direction => {
      socket.broadcast.to(room).emit("tap button", direction);
    });

    socket.on("reset ball", () => io.to(room).emit("reset ball", "reset ball"));

    socket.on("error", err => {
      console.log("recievederror from client: ", allCLients[socket.id]);
      console.log(err);
    });
    socket.on("disconnect", () => {
      console.log("client disconnected...", socket.id);
      delete allClients[socket.id];
      console.log(allClients);
    });
  });
}

exports.initSocket = initSocket;
