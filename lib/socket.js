const socketIo = require("socket.io");

function initSocket(httpServer) {
  const io = socketIo(httpServer);

  const allClients = [];
  const allChannels = [];

  function sendServerChatMessage(targetUser, action) {
    const sender = targetUser;
    const message = {
      user: "socket.io - server",
      nickname: "Server"
    };
    switch (action) {
      case "leave":
        message["content"] = sender + " left the chat";
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
      const room = socket.id;
      allChannels.push(room);
      console.log(allChannels);
      console.log("created");
      socket.broadcast
        .to(room)
        .emit(
          "new message",
          sendServerChatMessage(allClients[socket.id], "create")
        );
      socket.broadcast.to(room).emit("current room", room);
    });
    socket.on("join room", () => {
      const room = allChannels[0];
      socket.join(room);
      console.log("joined: ", room);
      socket.broadcast
        .to(room)
        .emit(
          "new message",
          sendServerChatMessage(allClients[socket.id], "join")
        );
      socket.broadcast.to(room).emit("current room", room);
    });
    socket.on("leave room", room => {
      if (!room) {
        //using var only to not be forced to create state for testing
        var room = allChannels[0];
      }
      socket.leave(room);
      console.log("left: ", room);
      socket.broadcast
        .to(room)
        .emit(
          "new message",
          sendServerChatMessage(allClients[socket.id], "join")
        );
    });

    socket.on("new message", data => {
      console.log(data);
      socket.broadcast.to(room).emit("new message", message);
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
