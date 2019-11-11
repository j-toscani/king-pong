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

function setPlayer1and2(socket, room) {
  socket.emit("set player", "1");
  socket.to(room).emit("set player", "2");
}

function handleJoin(socket, room, name) {
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
    setPlayer1and2(socket, room);
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

function prepareGameStart(game) {
  const { player1, player2, global } = game;

  player1.lifes = 5;
  player2.lifes = 5;

  global.play = true;
  return game;
}

function handleMovement(data, game, toggle) {
  if (toggle === "tap") {
    const direction = data.direction;
    const user = data.player;

    if (direction === "left" && user === "1") {
      game.player1.dx = -65;
    }
    if (direction === "right" && user === "2") {
      game.player2.dx = -65;
    }
    if (direction === "right" && user === "1") {
      game.player1.dx = 65;
    }
    if (direction === "left" && user === "2") {
      game.player2.dx = 65;
    }
  }
  if (toggle === "release") {
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
  }
}

exports.prepareGameStart = prepareGameStart;
exports.handleMovement = handleMovement;
exports.gameCountDown = gameCountDown;
exports.handleJoin = handleJoin;
exports.handleLeave = handleLeave;
