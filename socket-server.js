const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.REACT_APP_SERVER_PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

var allClients = [];

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
    console.log(allClients);
  });
  console.log("connected..." + socket.id);

  socket.on("setname", name => {
    allClients[socket.id] = name;
    console.log(allClients);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
