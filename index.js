const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var GameManager = require('./Server/classes/GameManager.class.js');

var gameManager = new GameManager(io, app, express);
gameManager.init();

server.listen(3000, () => {
  console.log('listening on *:3000');
});