var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Portfolio;
(function (Portfolio) {
    var State;
    (function (State) {
        var Game = (function (_super) {
            __extends(Game, _super);
            function Game() {
                _super.apply(this, arguments);
            }
            Game.prototype.create = function () {
                this.antidoteCache = false;
                this.map = this.game.add.tilemap('portfolio');
                this.map.addTilesetImage('BlueTownv2_byLunarea', 'bluetown');
                this.map.addTilesetImage('Market-Preset-byLunarea', 'markerpreset');
                this.map.addTilesetImage('PathAndObjects', 'pathandobjects');
                this.ground = this.map.createLayer('ground');
                this.ground.resizeWorld();
                this.water = this.map.createLayer('water');
                this.water.resizeWorld();
                this.path = this.map.createLayer('path');
                this.path.resizeWorld();
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
                this.map.setCollisionBetween(1, 100000, true, 'water');
                this.map.setCollisionBetween(1, 100000, true, 'houses');
                this.map.setCollisionBetween(1, 100000, true, 'decoration');
                this.player = this.game.add.sprite(300, 200, 'player');
                this.game.physics.arcade.enable(this.player);
                this.player.animations.add('down', [0, 1, 2], 10, true);
                this.player.animations.add('left', [12, 13, 14], 10, true);
                this.player.animations.add('right', [24, 25, 26], 10, true);
                this.player.animations.add('up', [36, 37, 38], 10, true);
                this.player.body.collideWorldBounds = true;
                this.antidote = this.game.add.sprite(30, 180, 'antidote');
                this.game.physics.arcade.enable(this.antidote);
                this.cursors = this.game.input.keyboard.createCursorKeys();
            };
            Game.prototype.printInfo = function (first, second) {
                if (this.antidoteCache === false) {
                    this.antidoteCache = true;
                }
            };
            Game.prototype.update = function () {
                this.game.input.update();
                this.player.body.velocity.x = 0;
                this.player.body.velocity.y = 0;
                if (this.cursors.down.isDown) {
                    this.player.body.velocity.y = 150;
                    this.player.animations.play('down', 1, true);
                }
                else if (this.cursors.up.isDown) {
                    this.player.body.velocity.y = -150;
                    this.player.animations.play('up', 1, true);
                }
                else if (this.cursors.left.isDown) {
                    this.player.body.velocity.x = -150;
                    this.player.animations.play('left', 1, true);
                }
                else if (this.cursors.right.isDown) {
                    this.player.body.velocity.x = 150;
                    this.player.animations.play('right', 1, true);
                }
                else {
                    this.player.animations.stop();
                    this.player.frame = 1;
                }
                this.game.physics.arcade.collide(this.player, this.water);
                this.game.physics.arcade.collide(this.player, this.houses);
                this.game.physics.arcade.collide(this.player, this.decoration);
                var antidote = this.game.physics.arcade.overlap(this.player, this.antidote, this.printInfo, null, this);
                if (!antidote)
                    this.antidoteCache = false;
            };
            return Game;
        }(Phaser.State));
        State.Game = Game;
    })(State = Portfolio.State || (Portfolio.State = {}));
})(Portfolio || (Portfolio = {}));
