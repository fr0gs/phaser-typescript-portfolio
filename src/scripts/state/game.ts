module Portfolio.State {

  /*
  * Game state, logic here.
  */
  export class Game extends Phaser.State {
    player: Phaser.Sprite;
    antidote: Phaser.Sprite;
    book: Phaser.Sprite;
    feather: Phaser.Sprite;
    mymap: Phaser.Sprite;
    map: Phaser.Tilemap;
    ground: Phaser.TilemapLayer;
    water: Phaser.TilemapLayer;
    path: Phaser.TilemapLayer;
    boats: Phaser.TilemapLayer;
    treesone: Phaser.TilemapLayer;
    treestwo: Phaser.TilemapLayer;
    treesthree: Phaser.TilemapLayer;
    treesfour: Phaser.TilemapLayer;
    treesfive: Phaser.TilemapLayer;
    houses: Phaser.TilemapLayer;
    decoration: Phaser.TilemapLayer;
    cursors: Phaser.CursorKeys;
    antidoteCache: boolean;
    GUI: Gui.Gui;

    create() {
      this.GUI = new Gui.Gui();

      this.antidoteCache = false;

      // load the tilemap information previously preloaded.
      this.map = this.game.add.tilemap('portfolio');

      // add the tilesetimage previously loaded to the map.
      // first argument must be the name of the tileset in tiled
      this.map.addTilesetImage('BlueTownv2_byLunarea', 'bluetown');
      this.map.addTilesetImage('Market-Preset-byLunarea', 'markerpreset');
      this.map.addTilesetImage('PathAndObjects', 'pathandobjects');

      this.ground = this.map.createLayer('ground');
      this.ground.resizeWorld();

      this.water = this.map.createLayer('water');
      this.water.resizeWorld();

      this.path = this.map.createLayer('path');
      this.path.resizeWorld(); //not necessary because all layers same dimensions. But still

      this.boats = this.map.createLayer('boats');
      this.boats.resizeWorld();

      this.treesone = this.map.createLayer('trees_1');
      this.treesone.resizeWorld();

      this.treestwo = this.map.createLayer('trees_2');
      this.treestwo.resizeWorld();

      this.treesthree = this.map.createLayer('trees_3');
      this.treesthree.resizeWorld();

      this.treesfour = this.map.createLayer('trees_4');
      this.treesfour.resizeWorld();

      this.treesfive = this.map.createLayer('trees_5');
      this.treesfive.resizeWorld();

      this.houses = this.map.createLayer('houses');
      this.houses.resizeWorld();

      this.decoration = this.map.createLayer('decoration');
      this.decoration.resizeWorld();

      // Set collisions in several layers
      this.map.setCollisionBetween(1, 100000, true, 'water');
      this.map.setCollisionBetween(1, 100000, true, 'houses');
      this.map.setCollisionBetween(1, 100000, true, 'decoration');

      // Add the sprite player to the map
      this.player = this.game.add.sprite(300, 200, 'player');

      // Enable physics for the player
      this.game.physics.arcade.enable(this.player);

      // Define the animations for the keypresses.
      this.player.animations.add('down', [0, 1, 2], 10, true);
      this.player.animations.add('left', [12, 13, 14], 10, true)
      this.player.animations.add('right', [24, 25, 26], 10, true)
      this.player.animations.add('up', [36, 37, 38], 10, true)

      // Collide the player with the world's limits.
      this.player.body.collideWorldBounds = true;

      // Add the sprite antidote
      this.antidote = this.game.add.sprite(30, 180, 'antidote');
      this.game.physics.arcade.enable(this.antidote);

      // Create cursor keys.
      this.cursors = this.game.input.keyboard.createCursorKeys();
    }


    // Show the About Me modal window.
    showAbout(first: Phaser.Sprite, second: Phaser.Sprite) {
      if (this.antidoteCache === false) {
        EZGUI.renderer = this.game.renderer;

        EZGUI.Theme.load(['assets/kenney-theme/kenney-theme.json'], () => {
          let aboutScreen = EZGUI.create(this.GUI.aboutScreen, 'kenney');
          let frontendScreen = EZGUI.create(this.GUI.frontendScreen, 'kenney');
          frontendScreen.visible = false;

          EZGUI.components.btnClose.on('click', () => {
            aboutScreen.visible = false;
          });

          EZGUI.components.btnCloseFrontend.on('click', () => {
            frontendScreen.visible = false;
          });

          EZGUI.components.frontend.on('click', () => {
            aboutScreen.visible = false;
            frontendScreen.visible = true;
          });

          this.game.input.keyboard.onDownCallback = (e) {
            if (e.keyCode === 27) {
              aboutScreen.visible = false;
              frontendScreen.visible = false;
            }
          }
        });
        this.antidoteCache = true;
      }
    }


    // hook run in each cycle of the game loop. Logic here.
    update() {
        this.game.input.update();

        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if (this.cursors.down.isDown) {
          this.player.body.velocity.y = 100;
          this.player.animations.play('down', 1, true);
        }
        else if (this.cursors.up.isDown) {
          this.player.body.velocity.y = -100;
          this.player.animations.play('up', 1, true);
        }
        else if (this.cursors.left.isDown) {
          this.player.body.velocity.x = -100;
          this.player.animations.play('left', 1, true);
        }
        else if (this.cursors.right.isDown) {
          this.player.body.velocity.x = 100;
          this.player.animations.play('right', 1, true);
        }
        else {
          //  Stand still
          this.player.animations.stop();
          this.player.frame = 1;
        }

        // Make player not able to go over water, houses or decoration.
        this.game.physics.arcade.collide(this.player, this.water);
        this.game.physics.arcade.collide(this.player, this.houses);
        this.game.physics.arcade.collide(this.player, this.decoration);

        // Check if
        const antidote = this.game.physics.arcade.overlap(this.player, this.antidote, this.showAbout, null, this);
        if (!antidote)
          this.antidoteCache = false;
    }
  }
}
