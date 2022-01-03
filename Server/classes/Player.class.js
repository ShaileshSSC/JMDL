// var SceneManager = require('./InputManager.class.js');
// var InputManager = require('./InputManager.class.js');

class Player{

    constructor() {
        this.socketId;
        this.userName;
        this.paper;
    }

    init()
    {

    }

    setPoint(socket)
    {
        socket.on('set-point', (data)=>{
            this.paper.setPoint()
        });
    }

    disconnect(socket)
    {
        socket.on('disconnect', ()=>{
            console.log(socket.id, ' disconnected');
        });
    }

    connect(socket)
    {
        console.log(socket.id, ' connected');
        this.update(socket);
        this.disconnect(socket);
    }

    update(io, socket)
    {
        socketthis.connect(socket);
        this.disconnect(socket);
        this.inputManager.update(socket);
        if(this.gameStarted)
        {

        }
    }

    test(socket) {
        socket.on('test', () => {
            console.log('hallo dit werkt');
        });
    }

    hai(socket) {
        socket.on('hai', () => {
            console.log('haishai');
        });
    }


}

module.exports = Room;