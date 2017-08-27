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
                this.GUI = new Portfolio.Gui.Gui();
                this.antidoteCache = false;
                this.featherCache = false;
                this.bookCache = false;
                this.mapCache = false;
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
                this.antidote.inputEnabled = true;
                this.antidote.events.onInputDown.add(this.showAbout, this);
                this.game.physics.arcade.enable(this.antidote);
                this.feather = this.game.add.sprite(230, 400, 'feather');
                this.feather.inputEnabled = true;
                this.feather.events.onInputDown.add(this.showContact, this);
                this.game.physics.arcade.enable(this.feather);
                this.book = this.game.add.sprite(500, 150, 'book');
                this.book.inputEnabled = true;
                this.book.events.onInputDown.add(this.showBlog, this);
                this.game.physics.arcade.enable(this.book);
                this.map = this.game.add.sprite(600, 350, 'mymap');
                this.map.inputEnabled = true;
                this.map.events.onInputDown.add(this.showExperience, this);
                this.game.physics.arcade.enable(this.map);
                this.cursors = this.game.input.keyboard.createCursorKeys();
            };
            Game.prototype.showAbout = function (first, second) {
                var _this = this;
                if (this.antidoteCache === false) {
                    EZGUI.renderer = this.game.renderer;
                    EZGUI.Theme.load(['assets/metalworks-theme/metalworks-theme.json'], function () {
                        var aboutScreen = EZGUI.create(_this.GUI.aboutScreen, 'metalworks');
                        var frontendScreen = EZGUI.create(_this.GUI.frontendScreen, 'metalworks');
                        var backendScreen = EZGUI.create(_this.GUI.backendScreen, 'metalworks');
                        var miscScreen = EZGUI.create(_this.GUI.miscScreen, 'metalworks');
                        frontendScreen.visible = false;
                        backendScreen.visible = false;
                        miscScreen.visible = false;
                        EZGUI.components.btnClose.on('click', function () {
                            aboutScreen.visible = false;
                        });
                        EZGUI.components.btnCloseFrontend.on('click', function () {
                            frontendScreen.visible = false;
                        });
                        EZGUI.components.btnCloseBackend.on('click', function () {
                            backendScreen.visible = false;
                        });
                        EZGUI.components.btnCloseMisc.on('click', function () {
                            miscScreen.visible = false;
                        });
                        EZGUI.components.btnBackFrontend.on('click', function () {
                            frontendScreen.visible = false;
                            aboutScreen.visible = true;
                        });
                        EZGUI.components.btnBackBackend.on('click', function () {
                            backendScreen.visible = false;
                            aboutScreen.visible = true;
                        });
                        EZGUI.components.btnBackMisc.on('click', function () {
                            miscScreen.visible = false;
                            aboutScreen.visible = true;
                        });
                        EZGUI.components.frontend.on('click', function () {
                            aboutScreen.visible = false;
                            frontendScreen.visible = true;
                        });
                        EZGUI.components.backend.on('click', function () {
                            aboutScreen.visible = false;
                            backendScreen.visible = true;
                        });
                        EZGUI.components.misc.on('click', function () {
                            aboutScreen.visible = false;
                            miscScreen.visible = true;
                        });
                        _this.game.input.keyboard.onDownCallback = function (e) {
                            if (e.keyCode === 27) {
                                aboutScreen.visible = false;
                                frontendScreen.visible = false;
                                backendScreen.visible = false;
                                miscScreen.visible = false;
                            }
                        };
                    });
                    this.antidoteCache = true;
                }
            };
            Game.prototype.showContact = function (first, second) {
                var _this = this;
                if (this.featherCache === false) {
                    EZGUI.renderer = this.game.renderer;
                    EZGUI.Theme.load(['assets/metalworks-theme/metalworks-theme.json'], function () {
                        var contactScreen = EZGUI.create(_this.GUI.contactScreen, 'metalworks');
                        EZGUI.components.btnCloseContact.on('click', function () {
                            contactScreen.visible = false;
                        });
                        EZGUI.components.github.on('click', function () {
                            var win = window.open('https://github.com/fr0gs', '_blank');
                            if (win) {
                                win.focus();
                            }
                            else {
                                alert('Please allow popups for this website');
                            }
                        });
                        EZGUI.components.twitter.on('click', function () {
                            var win = window.open('https://twitter.com/fro_g', '_blank');
                            if (win) {
                                win.focus();
                            }
                            else {
                                alert('Please allow popups for this website');
                            }
                        });
                        EZGUI.components.email.on('click', function () {
                            window.location.href = "mailto:mail@example.org";
                        });
                        EZGUI.components.linkedin.on('click', function () {
                            var win = window.open('https://be.linkedin.com/in/estebansastre', '_blank');
                            if (win) {
                                win.focus();
                            }
                            else {
                                alert('Please allow popups for this website');
                            }
                        });
                        _this.game.input.keyboard.onDownCallback = function (e) {
                            if (e.keyCode === 27) {
                                contactScreen.visible = false;
                            }
                        };
                    });
                    this.featherCache = true;
                }
            };
            Game.prototype.showBlog = function (first, second) {
                var _this = this;
                if (this.bookCache === false) {
                    EZGUI.renderer = this.game.renderer;
                    EZGUI.Theme.load(['assets/metalworks-theme/metalworks-theme.json'], function () {
                        var blogScreen = EZGUI.create(_this.GUI.blogScreen, 'metalworks');
                        EZGUI.components.btnCloseBlog.on('click', function () {
                            blogScreen.visible = false;
                        });
                        EZGUI.components.blog.on('click', function () {
                            var win = window.open('http://estebansastre.com/blog/', '_blank');
                            if (win) {
                                win.focus();
                            }
                            else {
                                alert('Please allow popups for this website');
                            }
                        });
                        _this.game.input.keyboard.onDownCallback = function (e) {
                            if (e.keyCode === 27) {
                                blogScreen.visible = false;
                            }
                        };
                    });
                    this.bookCache = true;
                }
            };
            Game.prototype.showExperience = function (first, second) {
                var _this = this;
                if (this.mapCache === false) {
                    EZGUI.renderer = this.game.renderer;
                    EZGUI.Theme.load(['assets/metalworks-theme/metalworks-theme.json'], function () {
                        var experienceScreen = EZGUI.create(_this.GUI.experienceScreen, 'metalworks');
                        EZGUI.components.btnCloseExperience.on('click', function () {
                            experienceScreen.visible = false;
                        });
                        _this.game.input.keyboard.onDownCallback = function (e) {
                            if (e.keyCode === 27) {
                                experienceScreen.visible = false;
                            }
                        };
                    });
                    this.mapCache = true;
                }
            };
            Game.prototype.update = function () {
                this.game.input.update();
                this.player.body.velocity.x = 0;
                this.player.body.velocity.y = 0;
                if (this.cursors.down.isDown) {
                    this.player.body.velocity.y = 100;
                    this.player.animations.play('down', 10, true);
                }
                else if (this.cursors.up.isDown) {
                    this.player.body.velocity.y = -100;
                    this.player.animations.play('up', 10, true);
                }
                else if (this.cursors.left.isDown) {
                    this.player.body.velocity.x = -100;
                    this.player.animations.play('left', 10, true);
                }
                else if (this.cursors.right.isDown) {
                    this.player.body.velocity.x = 100;
                    this.player.animations.play('right', 10, true);
                }
                else {
                    this.player.animations.stop();
                    this.player.frame = 1;
                }
                this.game.physics.arcade.collide(this.player, this.water);
                this.game.physics.arcade.collide(this.player, this.houses);
                this.game.physics.arcade.collide(this.player, this.decoration);
                var antidote = this.game.physics.arcade.overlap(this.player, this.antidote, this.showAbout, null, this);
                if (!antidote)
                    this.antidoteCache = false;
                var feather = this.game.physics.arcade.overlap(this.player, this.feather, this.showContact, null, this);
                if (!feather)
                    this.featherCache = false;
                var book = this.game.physics.arcade.overlap(this.player, this.book, this.showBlog, null, this);
                if (!book)
                    this.bookCache = false;
                var map = this.game.physics.arcade.overlap(this.player, this.map, this.showExperience, null, this);
                if (!map)
                    this.mapCache = false;
            };
            return Game;
        }(Phaser.State));
        State.Game = Game;
    })(State = Portfolio.State || (Portfolio.State = {}));
})(Portfolio || (Portfolio = {}));
