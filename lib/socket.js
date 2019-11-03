const socketIo = require("socket.io");
const { gameCountDown } = require("./socket-callbacks");

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

        socket.broadcast.to(room).emit("set opponent", "you are the opponent");
        socket.emit("set player", "you are the player");
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

    socket.on("start game", () => gameCountDown(io, room));
    socket.on("conceded", () =>
      socket.broadcast.to(room).emit("opponent conceded", "opponent conceded")
    );

    socket.on("release button", direction => {
      socket.broadcast.to(room).emit("release button", direction);
      console.log(direction, "release");
    });
    socket.on("tap button", direction => {
      socket.broadcast.to(room).emit("tap button", direction);
      console.log(direction, "tap");
    });

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
