const dotenv = require("dotenv");
const { initSocket } = require("./lib/socket");

dotenv.config();

const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));

initSocket(server);
