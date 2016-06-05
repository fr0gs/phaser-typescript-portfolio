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
                this.map = this.game.add.tilemap('portfolio');
                this.map.addTilesetImage('BlueTownv2_byLunarea', 'bluetown');
                this.map.addTilesetImage('Market-Preset-byLunarea', 'markerpreset');
                this.map.addTilesetImage('PathAndObjects', 'pathandobjects');
                this.ground = this.map.createLayer('ground');
                this.ground.resizeWorld();
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
                this.cursors = this.game.input.keyboard.createCursorKeys();
            };
            Game.prototype.update = function () {
                this.game.input.update();
                if (this.cursors.down.isDown)
                    console.log('down');
                if (this.cursors.up.isDown)
                    console.log('up');
                if (this.cursors.left.isDown)
                    console.log('left');
                if (this.cursors.right.isDown)
                    console.log('right');
            };
            return Game;
        }(Phaser.State));
        State.Game = Game;
    })(State = Portfolio.State || (Portfolio.State = {}));
})(Portfolio || (Portfolio = {}));
