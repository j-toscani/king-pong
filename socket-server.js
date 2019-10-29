const express = require("express");
const http = require("http");
const port = process.env.PORT || 8000;
const { initSocket } = require("./lib/socket");

const app = express();
const server = http.createServer(app);

initSocket(server);

server.listen(port, () => console.log(`Listening on port ${port}`));
