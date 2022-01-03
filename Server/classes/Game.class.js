const InputManager = require("./InputManager.class.js");
const GameRules = require('./GameRules.class.js');


module.exports = class Game{

    constructor(sceneManager) {
        this.gameRules = new GameRules();
        this.inputManager = new InputManager();
        this.rooms = [];
        this.sceneManager = sceneManager;
    }

    init()
    {

    }

    //game logic
    update(data)
    {

    }

    render()
    {
        
    }


}
