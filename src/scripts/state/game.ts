module Portfolio.State {

  /*
  * Game state, logic here.
  */
  export class Game extends Phaser.State {
    player: Phaser.Sprite;
    antidote: Phaser.Sprite;
    feather: Phaser.Sprite;
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
    featherCache: boolean;
    GUI: Gui.Gui;

    create() {
      this.GUI = new Gui.Gui();

      // booleans to detect collision with objects/player.
      this.antidoteCache = false;
      this.featherCache = false;
      this.bookCache = false;

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

      // Add the sprite antidote, make it react to clicks, enable physics on it.
      this.antidote = this.game.add.sprite(30, 180, 'antidote');
      this.antidote.inputEnabled = true;
      this.antidote.events.onInputDown.add(this.showAbout, this);
      this.game.physics.arcade.enable(this.antidote);

      //Add the sprite feather
      this.feather = this.game.add.sprite(230, 400, 'feather');
      this.feather.inputEnabled = true;
      this.feather.events.onInputDown.add(this.showContact, this);
      this.game.physics.arcade.enable(this.feather);

      //Add the sprite book
      this.book = this.game.add.sprite(500, 150, 'book');
      this.book.inputEnabled = true;
      this.book.events.onInputDown.add(this.showBlog, this);
      this.game.physics.arcade.enable(this.book);

      // Create cursor keys.
      this.cursors = this.game.input.keyboard.createCursorKeys();
    }


    // Show the About Me modal window.
    showAbout(first: Phaser.Sprite, second: Phaser.Sprite) {
      if (this.antidoteCache === false) {
        EZGUI.renderer = this.game.renderer;

        EZGUI.Theme.load(['assets/metalworks-theme/metalworks-theme.json'], () => {
          let aboutScreen = EZGUI.create(this.GUI.aboutScreen, 'metalworks');
          let frontendScreen = EZGUI.create(this.GUI.frontendScreen, 'metalworks');
          let backendScreen = EZGUI.create(this.GUI.backendScreen, 'metalworks');
          let miscScreen = EZGUI.create(this.GUI.miscScreen, 'metalworks');

          frontendScreen.visible = false;
          backendScreen.visible = false;
          miscScreen.visible = false;

          // Close the about screen
          EZGUI.components.btnClose.on('click', () => {
            aboutScreen.visible = false;
          });

          // Close frontend screen
          EZGUI.components.btnCloseFrontend.on('click', () => {
            frontendScreen.visible = false;
          });

          // Close backend screen
          EZGUI.components.btnCloseBackend.on('click', () => {
            backendScreen.visible = false;
          });

          // Close misc screen
          EZGUI.components.btnCloseMisc.on('click', () => {
            miscScreen.visible = false;
          });

          // Go back to about screen from frontend screen
          EZGUI.components.btnBackFrontend.on('click', () => {
            frontendScreen.visible = false;
            aboutScreen.visible = true;
          });

          // Go back to about screen from backend screen
          EZGUI.components.btnBackBackend.on('click', () => {
            backendScreen.visible = false;
            aboutScreen.visible = true;
          });

          // Go back to about screen from misc screen
          EZGUI.components.btnBackMisc.on('click', () => {
            miscScreen.visible = false;
            aboutScreen.visible = true;
          });

          // Go to frontend screen from about screen
          EZGUI.components.frontend.on('click', () => {
            aboutScreen.visible = false;
            frontendScreen.visible = true;
          });

          // Go to backend screen from about screen
          EZGUI.components.backend.on('click', () => {
            aboutScreen.visible = false;
            backendScreen.visible = true;
          });

          // Go to misc screen from about screen
          EZGUI.components.misc.on('click', () => {
            aboutScreen.visible = false;
            miscScreen.visible = true;
          });

          this.game.input.keyboard.onDownCallback = (e) => {
            if (e.keyCode === 27) {
              aboutScreen.visible = false;
              frontendScreen.visible = false;
              backendScreen.visible = false;
              miscScreen.visible = false;
            }
          }
        });
        this.antidoteCache = true;
      }
    }

    // Show the conacts page.
    showContact(first: Phaser.Sprite, second: Phaser.Sprite) {
      if (this.featherCache === false) {
        EZGUI.renderer = this.game.renderer;
        EZGUI.Theme.load(['assets/metalworks-theme/metalworks-theme.json'], () => {
          let contactScreen = EZGUI.create(this.GUI.contactScreen, 'metalworks');

          EZGUI.components.btnCloseContact.on('click', () => {
            contactScreen.visible = false;
          });

          EZGUI.components.github.on('click', () => {
            const win = window.open('https://github.com/fr0gs', '_blank');
              if (win) {
                  //Browser has allowed it to be opened
                  win.focus();
              } else {
                  //Browser has blocked it
                  alert('Please allow popups for this website');
              }
          });

          EZGUI.components.twitter.on('click', () => {
            const win = window.open('https://twitter.com/fro_g', '_blank');
              if (win) {
                  //Browser has allowed it to be opened
                  win.focus();
              } else {
                  //Browser has blocked it
                  alert('Please allow popups for this website');
              }
          });

          EZGUI.components.email.on('click', () => {
            window.location.href = "mailto:mail@example.org";
          });

          EZGUI.components.linkedin.on('click', () => {
            const win = window.open('https://be.linkedin.com/in/estebansastre', '_blank');
              if (win) {
                  //Browser has allowed it to be opened
                  win.focus();
              } else {
                  //Browser has blocked it
                  alert('Please allow popups for this website');
              }
          });

          this.game.input.keyboard.onDownCallback = (e) => {
            if (e.keyCode === 27) {
              contactScreen.visible = false;
            }
          }
        }
        this.featherCache = true;
      }
    }

    // Show the blog page.
    showBlog(first: Phaser.Sprite, second: Phaser.Sprite) {
      if (this.bookCache === false) {
        EZGUI.renderer = this.game.renderer;

        EZGUI.Theme.load(['assets/metalworks-theme/metalworks-theme.json'], () => {
          let blogScreen = EZGUI.create(this.GUI.blogScreen, 'metalworks');

          EZGUI.components.btnCloseBlog.on('click', () => {
            blogScreen.visible = false;
          });

          EZGUI.components.blog.on('click', () => {
            const win = window.open('http://estebansastre.com/blog/', '_blank');
              if (win) {
                  //Browser has allowed it to be opened
                  win.focus();
              } else {
                  //Browser has blocked it
                  alert('Please allow popups for this website');
              }
          });

          this.game.input.keyboard.onDownCallback = (e) => {
            if (e.keyCode === 27) {
              blogScreen.visible = false;
            }
          }
        }
      }
      this.bookCache = true;
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
          // Stand still
          this.player.animations.stop();
          this.player.frame = 1;
        }

        // Make player not able to go over water, houses or decoration.
        this.game.physics.arcade.collide(this.player, this.water);
        this.game.physics.arcade.collide(this.player, this.houses);
        this.game.physics.arcade.collide(this.player, this.decoration);

        // Check if the player overlaps with the antidote sprite and call showAbout if they do.
        const antidote = this.game.physics.arcade.overlap(this.player, this.antidote, this.showAbout, null, this);
        if (!antidote)
          this.antidoteCache = false;

        const feather = this.game.physics.arcade.overlap(this.player, this.feather, this.showContact, null, this);
        if (!feather)
          this.featherCache = false;

        const book = this.game.physics.arcade.overlap(this.player, this.book, this.showBlog, null, this);
        if (!book)
          this.bookCache = false;
    }
  }
}
