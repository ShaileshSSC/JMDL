
class GameClient{

    constructor(socket, document) {
        this.inputManager = new ClientInputManager(socket);
        this.sceneManager = new ClientSceneManager(socket, document);
    }

    init()
    {
        this.sceneManager.load('home');
    }

    //game logic
    update()
    {

    }

    render()
    {
        
    }

}
