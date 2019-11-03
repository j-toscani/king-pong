function gameCountDown(io, room) {
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

function handleJoin(socket, room, clientArray) {
  const maxNrOfPLayers = 2;
  socket.join(room);
  const usersInRoom = socket.adapter.rooms[room];
  if (usersInRoom.length < maxNrOfPLayers) {
    socket.broadcast
      .to(room)
      .emit(
        "new server message",
        sendServerChatMessage(clientArray[socket.id], "join")
      );
  } else if (usersInRoom.length === maxNrOfPLayers) {
    socket.broadcast
      .to(room)
      .emit(
        "new server message",
        sendServerChatMessage(clientArray[socket.id], "join")
      );
    socket.broadcast.to(room).emit("set opponent", "you are the opponent");
    socket.emit("set player", "you are the player");
  } else {
    socket.emit("room full", "got to main");
    socket.leave(room);
  }
}

function handleLeave(socket, room, clientArray) {
  console.log(clientArray[socket.id], "left: ", room);
  const maxNrOfPLayers = 2;
  socket.broadcast
    .to(room)
    .emit(
      "new server message",
      sendServerChatMessage(clientArray[socket.id], "leave")
    );
  const usersInRoom = socket.adapter.rooms[room];
  if (usersInRoom && usersInRoom.length === maxNrOfPLayers) {
    socket.to(room).emit("game not ready", "Disable ready-button");
  }
  socket.leave(room);
}

exports.gameCountDown = gameCountDown;
exports.handleJoin = handleJoin;
exports.handleLeave = handleLeave;
