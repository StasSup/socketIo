const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer();
const { Server } = require('socket.io');
const path = require('path');
const io = new Server(server, { cors: { origin: "*", methods: "*" }});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("../client/index.html"));
});

io.on("connection", (socket) => {
  console.log('a user connection');
  socket.on("message", (arg) => {
    console.log(arg)
  })
})

app.listen(3000, () => {
  console.log("Example port 3001")
})

server.listen(3001, () => {
  console.log(`Example port 3001}`)
})

