class ClientSceneManager {

    constructor(socket, document) {
        this.socket = socket;
        this.document = document;
        this.EVENT_TRIGGER = 'SCENE';
    }


    load(scene)
    {
        this.socket.emit({event: this.EVENT_TRIGGER, payload: scene});
        socket.on('LOAD_SCENE', (scene)=>{
            this.document.getElementById('stage').innerHTML = scene;
        });
    }

    // update(data = null)
    // {
    //     if(data.event == this.EVENT_TRIGGER) {
    //         this.socket.emit(this.EVENT_TRIGGER, data.payload);
    //     }
    // }

    test(socket)
    {
        socket.emit({input: true});
    }

}