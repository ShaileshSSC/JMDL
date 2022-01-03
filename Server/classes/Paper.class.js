// var SceneManager = require('./InputManager.class.js');
// var InputManager = require('./InputManager.class.js');

class Paper {

    constructor(player) {
        this.paper = {
            round: [
                null, 
                {jongen: {name: 'shai', punten: 0}, meisje: {name: 'preeti', punten: 40}},
                {jongen: {name: 'Aap', punten: 10}, meisje: {name: 'Ansia', punten: 20}},
            ]
        };
        this.points = 0;
        this.player = player;
    }

    init()
    {

    }

    setPoint(point)
    {

    }

    getRound(round)
    {
        return this.paper.round[round];
    }


    


}

module.exports = Paper;
