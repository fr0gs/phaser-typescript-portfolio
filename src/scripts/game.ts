/// <reference path="../refs.d.ts" />

module Portfolio {
  export class Game extends Phaser.Game {
    /*
    * Create the game object and specify the game states.
    */
    constructor() {
        super({
            width: 800,
            height: 640,
            renderer: Phaser.AUTO,
            parent: 'portfolio'
        });

        this.state.add('preloader', State.Preloader, true);
        this.state.add('game', State.Game);
    }
  }
}

// export Game to window
var Game = Portfolio.Game;
