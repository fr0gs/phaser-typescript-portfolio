var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Portfolio;
(function (Portfolio) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, {
                width: 800,
                height: 640,
                renderer: Phaser.AUTO,
                parent: 'portfolio'
            });
            this.state.add('preloader', Portfolio.State.Preloader, true);
            this.state.add('game', Portfolio.State.Game);
        }
        return Game;
    }(Phaser.Game));
    Portfolio.Game = Game;
})(Portfolio || (Portfolio = {}));
var Game = Portfolio.Game;
