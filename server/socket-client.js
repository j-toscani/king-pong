//https://itnext.io/building-a-node-js-websocket-chat-app-with-socket-io-and-react-473a0686d1e1

//Socket-IO listens on both sides -> What habens on CLientside
// -> deliver to server and assure response through callback

function registerHandler(onMessageRecieved) {
  socket.on("message", onMessageRecieved);
}

function unregisterHandler() {
  socket.off("message");
}

socket.on("error", function(err) {
  console.log("recieved socket error:");
  console.log(err);
});

function register(name, cb) {
  socket.emit("register", name, cb);
}

function join(chatroomName, cb) {
  socket.emit("join", chatroomName, cb);
}

function leave(chatroomName, cb) {
  socket.emit("leave", chatroomName, cb);
}

function message(chatroomName, msg, cb) {
  socket.emit("message", { chatroomName, message: msg }, cb);
}

function getChatrooms(cb) {
  socket.emit("chatrooms", null, cb);
}

function getAvailableUsers(cb) {
  socket.emit("availableUsers", null, cb);
}
