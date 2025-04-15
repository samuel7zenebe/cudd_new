const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("node:http");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("Home page");
  res.send("Home Page...");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

app.listen(3000, () => {
  console.log("listening....");
});
