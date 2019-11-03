//Starting to play
//-by joining a room
socket.emit("join-room", "Nickname");
//-by creating a room
socket.emit("create-room", "Nickname" + Math.Random);

//Stopping to play
// -by disconnecting
socket.close();
// -by going back to the select-screen
// -by losing/winning the game (chicken out... , concede, game end)

// build a new namespace "playing" that are active if you are in a room. By leaving chat or the game, you will leave the namespace

//Interacting
//-by joining a chat
//-by leaving a chat
//-by being ready to play
//-by using the input buttons

//Handle Server actions
