const socketIo = require("socket.io");

function initSocket(httpServer) {
  const io = socketIo(httpServer);

  const allClients = [];
  const allChannels = [];
  const room = "ThisIsARooom";

  function sendServerChatMessage(targetUser, action) {
    const sender = targetUser;
    const message = {
      user: "socket.io - server",
      nickname: "Server"
    };
    switch (action) {
      case "leave":
        message["content"] = sender + " left the chat";
        console.log("left");
        return message;
      case "join":
        message["content"] = sender + " joined the chat";
        return message;
      case "create":
        message["content"] = sender + " created a channel";
        return message;
    }
  }

  io.on("connection", socket => {
    console.log("client connected");

    socket.on("setname", name => {
      allClients[socket.id] = name;
      console.log(allClients);
    });
    socket.on("create room", () => {
      allChannels.push(room);
      console.log(allChannels);
      console.log("created");
      socket.broadcast
        .to(room)
        .emit(
          "new server message",
          sendServerChatMessage(allClients[socket.id], "create")
        );
      socket.broadcast.to(room).emit("current room", room);
    });
    socket.on("join room", () => {
      socket.join(room);
      console.log(socket.id, " joined: ", room);
      socket.to(room).emit("room", room);
      socket.broadcast
        .to(room)
        .emit(
          "new server message",
          sendServerChatMessage(allClients[socket.id], "join")
        );
      console.log(sendServerChatMessage(allClients[socket.id], "join"));
    });
    socket.on("leave room", () => {
      console.log("left: ", room);
      socket.broadcast
        .to(room)
        .emit(
          "new server message",
          sendServerChatMessage(allClients[socket.id], "leave")
        );
      console.log(sendServerChatMessage(allClients[socket.id], "leave"));
      socket.leave(room);
    });

    socket.on("new message", message => {
      socket.broadcast.to(room).emit("new message", message);
      console.log(message);
    });

    socket.on("error", err => {
      console.log("recievederror from client: ", socket.id);
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

// socket.emit(
//   "new message",
//   (message = [
//     {
//       nickname: "A wild",
//       content: "contestant joined the chat..."
//     }
//   ])
// );

// socket.on("new message", message => {
//   console.log("new message from", allClients[socket.id] || socket.id);
//   socket.broadcast.emit("new message", message);
// });

// socket.on("connected", data => console.log(data, socket.id));
