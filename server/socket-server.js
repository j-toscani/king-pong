const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server); // < Interesting!

io.on("connection", socket => {
  socket.on("new message", messages => {
    socket.emit("new message", messages);
  });

  socket.on("connected", data => console.log(data, socket.id));

  socket.on("error", err => {
    console.log("recievederror from client: ", socket.id);
    console.log(err);
  });
  socket.on("disconnect", () => {
    console.log("client disconnected...", socket.id);
  });

  socket.emit("register", socket.id);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
