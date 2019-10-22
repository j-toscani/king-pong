const http = require("http");
const WebSocketServer = require("websocket").server;
const port = 4000;

const server = http.createServer();
server.listen(port, () => {
  console.log("opened server on", server.address().port);
});

const wsServer = new WebSocketServer({
  httpServer: server
});

wsServer.on("request", request => {
  const connection = request.accept(null, request.origin);

  connection.on("message", message => {
    console.log("Received Message:", message.utf8Data);
    connection.sendUTF(message.utf8Data);
  });
  connection.on("close", (reasonCode, description) => {
    console.log("Client has disconnected.");
  });
});
