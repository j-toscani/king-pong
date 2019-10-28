// Defining actions that have to be performed on certain events
"-----------";

//Information to keep track of client interactions
// -> Log info on user connect
// -> Log info when User connects to Chatroom
// -> Log Info when User connects to game
// -> Log and store number of connected clients
// -> Log and storen umber of created Rooms
// -> Log and store number of Clients connected to Rooms

// Monitoring and Handling of connections
// -> Keep track of connected clients (server-side)
const allClients = { socketID: "Nickname", "...": "..." };
// -> Keep track of existing Rooms and clients connected to them
const allRooms = { room: [socketID_user1, socketID_user2] };
// -> Handle user gameinput on input
// activate/ deactivate socket connection based on user location
("Solved on client side via Clean-Up");
// Create Rooms based on user Information
const roomname = createrName + Math.random() + socketID;
// Manage joining rooms (DB required?!)
// The rooms are either saved in an array or in an object
// -> Room has to be existing
// -> Room has to have less than two clients
// -> Room has to have less at least one client
// -> function has to return the name of the room

//Send Information that alters client View and results into action for Userfeedback
// -> If two Users are in a room, enable "readyness"
socket.broadcast.emit("ready", setRoomReady);
// -> If a user Leaves the Room, disable readyness
socket.broadcast.emit("user-left", updateUserInRoom);
socket.broadcast.emit("new message", () => sendServerChatMessage("leave"));
// -> send "..." joined message
socket.broadcast.emit("user-joined", updateUserInRoom);
socket.broadcast.emit("new message", () => sendServerChatMessage("join"));
// -> send "..." room created
socket.broadcast.emit("new message", () => sendServerChatMessage("create"));
// -> send "game start in ... s" message
socket.broadcast.emit("new message", startGameCountdown);
// -> send message information to User
function sendServerChatMessage(type) {
  const sender = allClients[socket.id];
  const message = {
    user: "socket.io - server",
    nickname: "Server"
  };
  switch (type) {
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

// Send clients to game
socket.to(room).broadcast.emit("start", "start Game");
// -> Send messages to clients
// -> Send Info to clients on connection/disconnection from chat
// -> Send Info to clients on connection/disconnection from game
// -> Send the information that both clients are ready to start the Game and start Countdown
