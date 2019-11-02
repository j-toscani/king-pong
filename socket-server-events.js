// Defining serverside event-listeners

// join-room
socket.on("join-room", handleJoinRoom);
// create-room
socket.on("create-room", handleCreateRoom);
// ?reconnect to room?
// leave-room
socket.on("leave-room", handleLeaveRoom);

//entered-chat
socket.on("enter-chat", handleEnterChat);
//recieve-message
soccket.on("new-chat-message", handleChatMessage);
//ready-for-game
socket.on("ready", handleReady);
//disconnect from chat
socket.on("leave-chat", handleLeaveChat);

//start-game
socket.on("start-game", hadnleGamestart);
//pressed-left
socket.on("pressed-left", handlePressedLeft);
//pressed-right
socket.on("pressed-right", handlePressedRight);
//leave-game
socket.on("leave-game", handleLeaveGame);

//end game
socket.on("game-end", handleGameend);
