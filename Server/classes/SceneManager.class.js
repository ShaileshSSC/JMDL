// var SceneManager = require('./InputManager.class.js');
// var InputManager = require('./InputManager.class.js');
const Scene = require('./Scene.class.js');

module.exports = class SceneManager {

    constructor(app, express) {
        this.fs = require('fs');
        this.app = app;
        this.express = express;
        this.SCENES = {};
        this.EVENT_TRIGGER = 'SCENE';
    }

    init()
    {
        this.SCENES = {
            HOME: new Scene('home'),
            JOIN: new Scene('join'),
            CREATE: new Scene('create'),
            LOBBY: new Scene('lobby'),
            LOBBY_CLIENT: new Scene('lobby_client'),
            SETTINGS: new Scene('settings')
        }
        this.SCENES.HOME.html = this.htmlFileToPlain(this.SCENES.HOME.fileName);
        this.SCENES.JOIN.html = this.htmlFileToPlain(this.SCENES.JOIN.fileName);
        this.SCENES.CREATE.html = this.htmlFileToPlain(this.SCENES.CREATE.fileName);
    }

    htmlFileToPlain(file)
    {
        return this.fs.readFileSync(require('path').resolve(__dirname, '../assets/scenes/' + file), 'utf8');
    }

    update(data)
    {
        // console.log(data.page);
        //this.SCENES[data.page].buttons[data.button](data.socket, this.SCENES);
        if(data.data.event == this.EVENT_TRIGGER) {
            data.socket.emit('LOAD_SCENE', this.SCENES[(data.data.payload.toString().toUpperCase())].html);
        }
        //console.log(data);
    }




}