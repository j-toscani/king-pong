const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const { initSocket } = require("./lib/socket");

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const server = http.createServer(app);

initSocket(server).then(() =>
  server.listen(port, () => console.log(`Listening on port ${port}`))
);
