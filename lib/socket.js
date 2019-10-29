const socketIo = require("socket.io");

function initSocket(httpServer) {
  const io = socketIo(httpServer);

  const allClients = [];
  io.on("connection", socket => {
    socket.emit(
      "new message",
      (message = [
        {
          nickname: "A wild",
          content: "contestant joined the chat..."
        }
      ])
    );

    socket.on("new message", message => {
      console.log("new message from", allClients[socket.id] || socket.id);
      socket.broadcast.emit("new message", message);
    });

    socket.on("connected", data => console.log(data, socket.id));

    socket.on("error", err => {
      console.log("recievederror from client: ", socket.id);
      console.log(err);
    });
    socket.on("disconnect", () => {
      console.log("client disconnected...", socket.id);
      delete allClients[socket.id];
      console.log(allClients);
    });
    console.log("connected..." + socket.id);

    socket.on("setname", name => {
      allClients[socket.id] = name;
      console.log(allClients);
    });

    console.log("socket init");
  });
}

exports.initSocket = initSocket;
