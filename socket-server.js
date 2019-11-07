const dotenv = require("dotenv");
const { initSocket } = require("./lib/socket");

dotenv.config();

const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = express()
  .use(path.join(__dirname, "client/build"))
  .get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

initSocket(server);
