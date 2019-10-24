const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", client => {
  client.on("register", handleRegister);

  client.on("join", handleJoin);

  client.on("leave", handleLeave);

  client.on("message", handleMessage);

  client.on("chatrooms", handleGetChatrooms);

  client.on("availableUsers", handleGetAvailableUsers);

  client.on("disconnect", () => {
    console.log("clien disconnected...", client.id);
    handleDisconnect();
  });

  client.on("error", err => {
    console.log("recievederror from client: ", client.id);
    console.log(err);
  });
});

const port = 5000;

server.listen(5000, function(err) {
  if (err) throw err;
  console.log("listening on port " + port);
});
