
module.exports = class Join {
    constructor()
    {
        this.fileName = 'join.html';
        this.buttons = {
            BACK: this.back,
            createBtn: 3,
        };
        this.plainHTML;
    }

    back(socket, scenes)
    {
        socket.emit('CLIENT_LOAD_SCENE', (scenes.HOME.plainHTML));
    }
}