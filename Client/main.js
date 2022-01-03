var socket = io();

var gameClient = new GameClient(socket, this.document);
gameClient.init();