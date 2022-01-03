var Subject = require('./Subject.class.js');

module.exports = class InputManager extends Subject{

    constructor()
    {
        super();
        this.input;
    }


    listen(socket)
    {
        socket.onAny((data) => {
            this.notify({data, socket})
          });
        // socket.on('create-game', (input)=>{
        //     this.input = 'creating';
        //     this.notify({page: this.input, socket: socket});
        // });
        // socket.on('join-game', ()=>{
        //     this.input = 'joining';
        //     this.notify({page: this.input, socket: socket});
        // });
        // socket.on('JOIN', (button)=>{
        //     this.input = 'JOIN';
        //     console.log('koos join');
        //     this.notify({page: this.input, button: button, socket: socket});
        // });
        // socket.on('HOME', (button)=>{
        //     this.input = 'HOME';
        //     console.log('koos home');
        //     this.notify({page: this.input, button: button, socket: socket});
        // });
        
    }

    update()
    {

    }

}