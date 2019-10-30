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
      const check = socket.adapter.rooms[room];
      if (check.length < 2) {
        // socket.to(room).emit("room", room);
        socket.broadcast
          .to(room)
          .emit(
            "new server message",
            sendServerChatMessage(allClients[socket.id], "join")
          );
        console.log(sendServerChatMessage(allClients[socket.id], "join"));
      } else if (check.length === 2) {
        socket.broadcast
          .to(room)
          .emit(
            "new server message",
            sendServerChatMessage(allClients[socket.id], "join")
          );
        io.in(room).emit("game ready", "Let users be able to click ready!");
        console.log(sendServerChatMessage(allClients[socket.id], "join"));
      } else {
        socket.emit("room full", "got to main");
        socket.leave(room);
      }
    });
    socket.on("leave room", () => {
      console.log("left: ", room);
      socket.broadcast
        .to(room)
        .emit(
          "new server message",
          sendServerChatMessage(allClients[socket.id], "leave")
        );
      const check = socket.adapter.rooms[room];
      if (check && check.length === 2) {
        socket.to(room).emit("game not ready", "Disable ready-button");
      }
      console.log(sendServerChatMessage(allClients[socket.id], "leave"));
      socket.leave(room);
    });

    socket.on("new message", message => {
      socket.broadcast.to(room).emit("new message", message);
      console.log(message);
    });

    function gameCountDown() {
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

    socket.on("start game", gameCountDown);

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
