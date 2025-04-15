const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const multer = require("multer");
const http = require("node:http");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(cors());

const upload = multer(
  multer.diskStorage({
    destination: "uploads",
    filename: "name",
  })
);

app.post("/upload", upload.single("file"), (req, res) => {
  const { file } = req.body;
  res.redirect("/success");
});
app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/thank.html");
});
app.get("/", (req, res) => {
  console.log("Home page");
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("listening....");
});
