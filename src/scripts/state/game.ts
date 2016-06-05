module Portfolio.State {

  /*
  * Game state, logic here.
  */
  export class Game extends Phaser.State {
    map: Phaser.Tilemap;
    ground: Phaser.TilemapLayer;
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

    create() {

      // load the tilemap information previously preloaded.
      this.map = this.game.add.tilemap('portfolio');

      // add the tilesetimage previously loaded to the map.
      // first argument must be the name of the tileset in tiled
      this.map.addTilesetImage('BlueTownv2_byLunarea', 'bluetown');
      this.map.addTilesetImage('Market-Preset-byLunarea', 'markerpreset');
      this.map.addTilesetImage('PathAndObjects', 'pathandobjects');

      this.ground = this.map.createLayer('ground');
      this.ground.resizeWorld();

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

      this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    // hook run in each cycle of the game loop. Logic here.
    update() {
        this.game.input.update();

        if (this.cursors.down.isDown)
            console.log('down');
        if (this.cursors.up.isDown)
            console.log('up');
        if (this.cursors.left.isDown)
            console.log('left');
        if (this.cursors.right.isDown)
            console.log('right');
    }
  }
}
