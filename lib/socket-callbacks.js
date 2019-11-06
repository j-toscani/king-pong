function gameCountDown(io, socket, room) {
  let usersInRoom;
  let count = 4;
  const timer = setInterval(() => {
    io.in(room).emit("new server message", {
      user: "socket.io - server",
      nickname: "Server",
      content: `${count - 1} seconds until start`
    });
    usersInRoom = socket.adapter.rooms[room];
    const numberOfUsersInRoom = usersInRoom.length;
    count -= 1;
    if (numberOfUsersInRoom !== 2) {
      clearInterval(timer);
      io.in(room).emit("new server message", {
        user: "socket.io - server",
        nickname: "Server",
        content: `Opponent chickened out!`
      });
    }
    if (count === 0 && numberOfUsersInRoom === 2) {
      clearInterval(timer);
      io.in(room).emit("game start", "start");
    }
  }, 1000);
}

function sendServerChatMessage(sender, action) {
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

function handleJoin(io, socket, room, name) {
  const maxNrOfPLayers = 2;
  socket.join(room);
  const usersInRoom = socket.adapter.rooms[room];
  if (usersInRoom.length < maxNrOfPLayers) {
    socket.broadcast
      .to(room)
      .emit("new server message", sendServerChatMessage(name, "join"));
  } else if (usersInRoom.length === maxNrOfPLayers) {
    socket.broadcast
      .to(room)
      .emit("new server message", sendServerChatMessage(name, "join"));

    io.to(room).emit("game ready", "game ready");
  } else {
    socket.emit("room full", "got to main");
    socket.leave(room);
  }
}

function handleLeave(socket, room, name) {
  console.log(name, "left: ", room);
  const maxNrOfPLayers = 2;
  socket.broadcast
    .to(room)
    .emit("new server message", sendServerChatMessage(name, "leave"));
  const usersInRoom = socket.adapter.rooms[room];
  if (usersInRoom && usersInRoom.length === maxNrOfPLayers) {
    socket.to(room).emit("game not ready", "Disable ready-button");
  }
  socket.leave(room);
}

exports.gameCountDown = gameCountDown;
exports.handleJoin = handleJoin;
exports.handleLeave = handleLeave;
