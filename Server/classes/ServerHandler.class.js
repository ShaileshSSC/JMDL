var Subject = require('./Subject.class.js');

module.exports = class ServerHandler extends Subject {

    constructor(io, inputManager, app , express) {
        super();
        this.io = io;
        this.app = app;
        this.express = express;
        this.inputManager = inputManager;
        this.listen();
    }

    init()
    {

    }

    listen()
    {
        this.io.on('connection', (socket) =>{
            console.log('connectuon');
            //this.notify({event: 'new', socket: socket});
            socket.on('disconnect', ()=>{
                console.log('disconnect');
                //this.notify({event: 'dis', socket: socket});
            });
            this.inputManager.listen(socket);
        });
    }

    update()
    {
        console.log(require('path').resolve(__dirname, '../../Client'));
        this.app.use(this.express.static(require('path').resolve(__dirname, '../../Client')));
        this.app.use(this.express.static(require('path').resolve(__dirname, '../..')));
        this.app.get('/', (req, res) => {
            res.sendFile(require('path').resolve(__dirname, '../../Client/screen.html'));
          });
    }

    playerDisconnects(socket)
    {
        socket.on('disconnect', ()=>{
            console.log();
         });
    }


    getNewConnection() {
        return new Promise((resolve, reject) => {
          this.io.on('connection', resolve);
        });
      }

}