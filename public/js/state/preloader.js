var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Portfolio;
(function (Portfolio) {
    var State;
    (function (State) {
        var Preloader = (function (_super) {
            __extends(Preloader, _super);
            function Preloader() {
                _super.apply(this, arguments);
            }
            Preloader.prototype.preload = function () {
                this.loadingBar = new Portfolio.Entity.PreloadBar(this.game);
                this.game.scale.pageAlignHorizontally = true;
                this.game.scale.pageAlignVertically = true;
                this.game.scale.refresh();
                this.game.load.tilemap('portfolio', 'assets/portfolio.json', null, Phaser.Tilemap.TILED_JSON);
                this.game.load.image('bluetown', 'assets/images/BlueTownv2_byLunarea.png');
                this.game.load.image('markerpreset', 'assets/images/Market-Preset-byLunarea.png');
                this.game.load.image('pathandobjects', 'assets/images/PathAndObjects.png');
            };
            Preloader.prototype.create = function () {
                this.loadingBar.setFillPercent(100);
                var tween = this.game.add.tween(this.loadingBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
                tween.onComplete.add(this.startGame, this);
            };
            Preloader.prototype.startGame = function () {
                this.game.state.start('game', true);
            };
            Preloader.prototype.loadUpdate = function () {
                this.loadingBar.setFillPercent(this.load.progress);
            };
            return Preloader;
        }(Phaser.State));
        State.Preloader = Preloader;
    })(State = Portfolio.State || (Portfolio.State = {}));
})(Portfolio || (Portfolio = {}));
