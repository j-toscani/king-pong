//Starting to play
//-by joining a room
socket.emit("join-room", "Nickname");
//-by creating a room
socket.emit("create-room", "Nickname" + Math.Random);

//Stopping to play
// -by disconnecting
socket.emit("disconnect");
// -by going back to the select-screen
// -by losing/winning the game (chicken out... , concede, game end)

//Interacting
//-by joining a chat
//-by leaving a chat
//-by being ready to play
//-by using the input buttons

//Handle Server actions
