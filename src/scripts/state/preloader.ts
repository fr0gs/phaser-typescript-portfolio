module Portfolio.State {
  /*
  * Represents the initial stated previous to the loading of the portfolio itself.
  * Adds a loading bar that will show progress while loading the portfolio's assets.
  */
  export class Preloader extends Phaser.State {
      loadingBar: Entity.PreloadBar;

      preload() {
          // Create the loading bar.
          this.loadingBar = new Entity.PreloadBar(this.game);

          // Center the canvas in the middle of the screen.
          this.game.scale.pageAlignHorizontally = true;
          this.game.scale.pageAlignVertically = true;
          this.game.scale.refresh();

          this.game.load.tilemap('portfolio', 'assets/portfolio.json', null, Phaser.Tilemap.TILED_JSON);

          /*
           * Load assets needed to render the game. In this case the three tilesets that conform
           * the tilemap. First argument is an arbitrary name to ID it, second is the path.
           */
          this.game.load.image('bluetown', 'assets/images/BlueTownv2_byLunarea.png');
          this.game.load.image('markerpreset', 'assets/images/Market-Preset-byLunarea.png');
          this.game.load.image('pathandobjects', 'assets/images/PathAndObjects.png');
      }

      // Add logic to the loading bar and set the function to call when
      // all assets are loaded.
      create() {
          this.loadingBar.setFillPercent(100);
          let tween = this.game.add.tween(this.loadingBar).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
          tween.onComplete.add(this.startGame, this);
      }

      // Jump to the game state, where the portfolio logic is placed.
      startGame() {
          this.game.state.start('game', true);
      }

      // Set the percentage of the bar as the loading process keeps going.
      loadUpdate() {
          this.loadingBar.setFillPercent(this.load.progress);
      }
  }
}
