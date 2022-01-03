
module.exports = class Home {
    constructor()
    {
        this.fileName = 'home.html';
        this.buttons = {
            JOINGAME: this.joinGame,
            CREATEGAME: this.createGame,
        };
        this.plainHTML;
    }



    joinGame(socket, scenes)
    {
        console.log(scenes.JOIN.plainHTML);
        socket.emit('CLIENT_LOAD_SCENE', (scenes.JOIN.plainHTML));
    }

    createGame(socket)
    {
        socket.emit('CLIENT_LOAD_SCENE', );
    }
}