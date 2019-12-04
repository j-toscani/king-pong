# KingPong

Play a classic against your friends. Online! On mobile and Desktop!

## Usage

In order to install all dependencies use the following commands:

```
npm install
cd client
npm install
```

In order for the game to work, you have to make the following adjustments:

1. open the file "socket-server.js" and choose a port you want the socket to run on.
1. Go to the folder "pages" and open the "Main.js" file and look for the following line of code:

```JS
...
React.useEffect(() => {
const socket = io();
socket.emit("setname", getItem("nickname"));
...
```

1. Add "http://127.0.0.1:<YourPort>" as an argument to the `ìo()` function. <YourPort> has to be the same port your server listens to.

For developement you can start the server and client at the same time by using the following command:

```
npm run dev
```

The game can be viewed here: https://king-pong-nf.herokuapp.com/;
