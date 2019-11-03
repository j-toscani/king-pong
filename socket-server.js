const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const { initSocket } = require("./lib/socket");

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);

initSocket(server).then(() =>
  server.listen(port, () => console.log(`Listening on port ${port}`))
);
