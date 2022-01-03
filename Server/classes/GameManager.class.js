//var SceneManager = require('./InputManager.class.js');
var InputManager = require('./InputManager.class.js');
var SceneManager = require('./SceneManager.class.js');
var ServerHandler = require('./ServerHandler.class.js');
var Game = require('./Game.class.js');

module.exports = class GameManager{

    constructor(io, app, express) {
        this.sceneManager = new SceneManager(app, express);
        this.inputManager = new InputManager();
        this.serverHandler = new ServerHandler(io, this.inputManager, app, express);
        this.serverHandler.update();
        //this.game = new Game();
    }

    init()
    {
        this.players = [];
        this.rounds = 8;
        this.currentRound;
        this.sceneManager.init();
        this.inputManager.addObserver(this);
        this.serverHandler.addObserver(this);
        //this.serverHandler.update();
    }



    update(data)
    {
        this.sceneManager.update(data);
        // if(data.event == 'new'){console.log('new connection with: ', data.socket.id);}
        // if(data.event == 'dis'){console.log('disconnected => ', data.socket.id);}
        // if(data.event == 'home'){data.socket.emit('home', ());}
        console.log('updated');
    }

    render()
    {
        console.log(this.inputManager.input);
    }


}
