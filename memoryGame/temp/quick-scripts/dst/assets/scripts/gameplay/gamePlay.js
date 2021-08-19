
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameplay/gamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6979/ZWV5IDKJN8bhNrScU', 'gamePlay');
// scripts/gameplay/gamePlay.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameManager_1 = require("../managers/GameManager");
var constants_1 = require("../helper/constants");
var SoundManager_1 = require("../managers/SoundManager");
var AdManager_1 = require("../managers/AdManager");
var cardIndex = {
    GROUP_3_4: 0,
    GROUP_4_4: 1,
    GROUP_4_5: 2,
    GROUP_4_6: 3,
    GROUP_4_7: 4
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cards = [];
        _this._gridInfo = null;
        _this._level = 0;
        _this._timer = null;
        _this.OpenCards = [];
        _this.cardsInPair = [];
        _this.tutorialCards = [];
        _this.tutCardName = 0;
        _this.isTutoiral = true;
        _this.levelData = null;
        _this.interval = null;
        _this.isTouchBlocked = false;
        _this.totalTime = 0;
        _this.groupOf = 2;
        _this.progresser = null;
        _this.gameMode = '';
        _this.gameStartAlert = null;
        _this.gameEndAlert = null;
        _this.optionLayer = null;
        _this.gameTutorials = null;
        _this.bounsPoints = 0;
        _this.isSoundPlaying = false;
        _this.cardPrefab = null;
        _this.options = null;
        _this.timerBar = null;
        _this.gameLayout = null;
        _this.bouns = null;
        _this.startPopUp = null;
        _this.gameEndPopUp = null;
        _this.containerNode = null;
        _this.correctAnswerAudio = null;
        _this.wrongAnswerAudiodFlip = null;
        _this.last5Sec = null;
        _this.clapping = null;
        _this.timesUp = null;
        _this.cardsSpriteFrames = [];
        _this.hand = null;
        _this.netError = null;
        _this.levelLabel = null;
        _this.gameInstructions = null;
        _this.tutorials = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.hand.zIndex = 20;
        this.netError.zIndex = 20;
        this.progresser = this.timerBar.node.getChildByName("bar");
        var animationClips = this.bouns.node.getComponent(cc.Animation);
        animationClips.on('finished', this.bounsAnimationCompleted, this);
        this.setOptions();
        this.progresser.width = 0;
        this.timerBar.progress = 0;
        this.timerBar.totalLength = this.timerBar.node.width;
    };
    GamePlay.prototype.onDisable = function () {
        if (!this.node.parent.getComponent("home").isforSetting) {
            clearInterval(this.interval);
            this.OpenCards.length = 0;
            this.cardsInPair.length = 0;
            this.hand.parent = this.node;
            this.bouns.node.active = false;
            this.tutorialCards.length = 0;
            this.hand.active = false;
            this.isTutoiral = true;
            SoundManager_1.default.getInstance().stopAllSounds();
            this.optionLayer.getComponent("options").disableClockButton();
        }
        else {
            SoundManager_1.default.getInstance().stopAllSounds();
        }
    };
    GamePlay.prototype.onEnable = function () {
        if (this.optionLayer) {
            this.optionLayer
                .getComponent("options").updateHindText();
        }
    };
    GamePlay.prototype.setOptions = function () {
        this.optionLayer = cc.instantiate(this.options);
        this.optionLayer
            .getComponent("options").setDelegate(this);
        this.optionLayer;
        this.node.addChild(this.optionLayer);
        this.optionLayer.zIndex = 5;
    };
    // SETTING UP UI
    GamePlay.prototype.setUpUI = function (level, gameMode) {
        this.gameLayout.node.active = false;
        this.gameMode = gameMode;
        this._level = level;
        this.levelData = GameManager_1.GameManager.getInstance().getLevelData(this._level, this.gameMode);
        this.setUpAlerts();
        this.loadLevelImages();
    };
    GamePlay.prototype.loadLevelImages = function () {
        var _this = this;
        GameManager_1.GameManager.getInstance()
            .loadLevelImages(this._level)
            .then(function (data) {
            _this.groupOf = _this.levelData.groupOf;
            _this.createAndShuffelCards();
            _this._gridInfo = _this.levelData.grid;
            _this.setGrid();
        })
            .catch(function (error) {
        });
    };
    GamePlay.prototype.setUpAlerts = function () {
        this.gameStartAlert = cc.instantiate(this.startPopUp);
        var timerTitle = this.levelData.timer.totalTime + "s";
        var levelInfo = GameManager_1.GameManager.getInstance().getLevelData(this._level);
        this.gameStartAlert.getComponent("gameStart").setProperties(this, levelInfo.gameType, levelInfo.groupOf);
        this.gameEndAlert = cc.instantiate(this.gameEndPopUp);
        this.gameEndAlert.getComponent("gameEnd").setProperties(this, this.gameMode);
        this.node.parent.addChild(this.gameStartAlert, 7);
        this.node.parent.addChild(this.gameEndAlert, 7);
        this.gameEndAlert.active = false;
        this.gameStartAlert.active = false;
    };
    GamePlay.prototype.setGrid = function () {
        console.log("inside set card elements");
        this.gameLayout.getComponent(cc.Widget).updateAlignment();
        this.containerNode.getComponent(cc.Widget).updateAlignment();
        this.gameLayout.node.removeAllChildren();
        var index = cardIndex["GROUP_" + this._gridInfo.col + "_" + this._gridInfo.row];
        var totalHeight = (this.containerNode.height - (this.gameLayout.spacingX * this._gridInfo.row));
        var spacing = this.gameLayout.spacingX * this._gridInfo.col;
        var width = this.containerNode.width - spacing;
        var scale = 1;
        var dummyWidth = 1;
        for (var i = 0; i < this._cards.length; i++) {
            var card = cc.instantiate(this.cardPrefab);
            card.getComponent("cards").setDelegate(this);
            card.getComponent("cards").setUpUI(this._cards[i].name, this._level, this.gameMode, this.cardsSpriteFrames[index]);
            var blockSize = width / this._gridInfo.col;
            var height = totalHeight / this._gridInfo.row;
            card.setScale(Math.min(blockSize / card.width, height / card.height));
            scale = card.scale;
            dummyWidth = card.width;
            this.gameLayout.node.addChild(card);
        }
        this.gameLayout.node.width = this._gridInfo.col * (scale * dummyWidth) + spacing;
        this.optionLayer.active = false;
        this.gameLayout.node.active = true;
        this.levelLabel.node.parent.active = true;
        console.log("inisde this we have set the cards");
        this.updateGamePlay();
    };
    GamePlay.prototype.updateGamePlay = function () {
        var _this = this;
        this.levelLabel.getComponent("localiser").replaceValue("" + (this._level + 1));
        this.levelLabel.getComponent("localiser").setStringForKey();
        this.levelLabel.node.parent.runAction(cc.sequence(cc.scaleTo(1.5, 1), cc.delayTime(0.5), cc.callFunc(function () {
            _this.levelLabel.node.parent.active = false;
            _this.levelLabel.node.parent.scale = 0.5;
            if ((_this._level + 1) % 10 == 1) {
                _this.showTutorials();
            }
            else {
                _this.startGame();
            }
        })));
        this.totalTime = this.levelData.timer.totalTime;
        this.bouns.node.getChildByName("bonus").string = this.levelData.timer.bounsTime;
    };
    GamePlay.prototype.createAndShuffelCards = function () {
        var _a;
        this._cards.length = 0;
        for (var i = 0; i < this.groupOf; i++) {
            (_a = this._cards).push.apply(_a, this.levelData.cards);
        }
        for (var index = this._cards.length - 1; index >= 0; index--) {
            var randomIndex = Math.floor(Math.random() * (index - 0) + 0);
            var swapElement = this._cards[randomIndex];
            var currentElement = this._cards[index];
            this._cards[index] = swapElement;
            this._cards[randomIndex] = currentElement;
        }
        if ((this._level + 1) % 10 == 1) {
            this.tutCardName = this._cards[Math.floor(Math.random() * (this._cards.length - 1) + 0)].name;
        }
    };
    GamePlay.prototype.flipAllCards = function () {
        var _this = this;
        for (var _i = 0, _a = this.gameLayout.node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.getComponent("cards").unreveal();
            if ((this._level + 1) % 10 != 1) {
                child.getComponent('cards').disableOverlay();
            }
        }
        if ((this._level + 1) % 10 == 1) {
            this.tutorialCards = this.gameLayout.node.children.filter(function (item) { return item.getComponent('cards').getCardName() == _this.tutCardName; });
            this.isTutoiral = true;
            this.moveTutHand();
        }
        else {
            this.isTutoiral = false;
        }
    };
    GamePlay.prototype.moveTutHand = function () {
        console.log("move tut hand");
        var card = this.tutorialCards.shift();
        if (!card)
            return;
        card.parent.getComponent(cc.Widget).updateAlignment();
        card.getComponent('cards').disableOverlay();
        this.hand.active = true;
        var worldSpace = this.containerNode.convertToWorldSpace(card.getPosition());
        var nodeSpace = this.hand.parent.convertToNodeSpace(worldSpace);
        this.hand.y = nodeSpace.y - (card.height * card.scale);
        this.hand.x = nodeSpace.x;
        this.hand.stopAllActions();
        this.hand.runAction(cc.sequence(cc.moveBy(.5, 0, 50), cc.moveBy(.5, 0, -50)).repeat(1000));
    };
    GamePlay.prototype.moveTudHandsOnHints = function (isOnMagnifineGlass) {
        this.hand.parent = this.gameTutorials;
        var position = this.optionLayer.getComponent("options").getChildrenPosition(isOnMagnifineGlass);
        var worldSpace = this.optionLayer.parent.convertToWorldSpaceAR(position);
        var nodeSpace = this.gameTutorials.convertToNodeSpaceAR(worldSpace);
        this.hand.y = nodeSpace.y + this.node.height * 0.3;
        this.hand.x = nodeSpace.x;
    };
    GamePlay.prototype.startGameTimer = function () {
        var _this = this;
        var target = this;
        target.optionLayer.getComponent("options").updateTimer(0, this.totalTime);
        this.interval = setInterval(function () {
            _this._timer++;
            target.optionLayer.getComponent("options").updateTimer(_this._timer, _this.totalTime);
            // console.log("inside this maximum time inside this", this.totalTime);
            if (_this.gameMode != constants_1.GAME_MODE.PRACTICE) {
                _this.timerBar.progress = _this._timer / _this.totalTime;
                if (Math.abs(_this._timer - _this.totalTime) == 10 ||
                    (!_this.isSoundPlaying && Math.abs(_this._timer - _this.totalTime) < 10)) {
                    SoundManager_1.default.getInstance().playEffect(_this.last5Sec, false);
                    _this.isSoundPlaying = true;
                    _this.optionLayer.getComponent("options").enableClockButton();
                    console.log("inside thie we are here hhheheheh");
                    _this.showTenSecondsPopUp();
                }
                else if (_this.isSoundPlaying && Math.abs(_this._timer - _this.totalTime) > 10) {
                    SoundManager_1.default.getInstance().stopAllSounds();
                    _this.optionLayer.getComponent("options").disableClockButton();
                    _this.isSoundPlaying = false;
                }
                if (_this._timer == _this.totalTime) {
                    _this.isTouchBlocked = true;
                    clearInterval(_this.interval);
                    _this.endGame(false);
                }
            }
        }, 1000);
    };
    GamePlay.prototype.showCard = function (card) {
        if (this.cardsInPair.length >= this.groupOf || this.isTouchBlocked) {
            return;
        }
        card.getComponent("cards").reveal();
        this.cardsInPair.push(card);
        this.isTutoiral && this.moveTutHand();
        this.cardsInPair.length > 1 && this.isPair();
        // this.isTutoiral 
    };
    GamePlay.prototype.isPair = function () {
        var _this = this;
        var cards = [];
        cards.length = 0;
        for (var i = 0; i < this.cardsInPair.length; i++) {
            cards.push(this.cardsInPair[i].getComponent('cards'));
        }
        var isMatch = true;
        for (var i = 0; i < cards.length - 1; i++) {
            if (cards[i].getCardName() !== cards[i + 1].getCardName()) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            if (this.cardsInPair.length != this.groupOf) {
                return;
            }
            this.playBounsAnimation();
            this.isTouchBlocked = true;
            this.node.runAction(cc.sequence(cc.delayTime(0.2), cc.callFunc(function () {
                for (var _i = 0, cards_2 = cards; _i < cards_2.length; _i++) {
                    var cardScipt = cards_2[_i];
                    cardScipt.playCorrectAnimation();
                }
                _this.isTouchBlocked = false;
            })));
            for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
                var cardScipt = cards_1[_i];
                this.OpenCards.push(cardScipt.getCardName());
            }
            this.cardsInPair.length = 0;
            if (this.OpenCards.length == this._cards.length) {
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                    _this.endGame(true);
                })));
            }
            if (this.isTutoiral) {
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                    // this();
                    _this.continueTutorial();
                })));
            }
        }
        else {
            var target = this;
            this.isTouchBlocked = true;
            this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                for (var _i = 0, cards_3 = cards; _i < cards_3.length; _i++) {
                    var cardScipt = cards_3[_i];
                    cardScipt.unreveal();
                    _this.isTouchBlocked = false;
                }
                _this.cardsInPair.length = 0;
            })));
        }
        this.node.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(function () {
            var clip = isMatch ? _this.correctAnswerAudio : _this.wrongAnswerAudiodFlip;
            SoundManager_1.default.getInstance().playEffect(clip, false);
        })));
    };
    GamePlay.prototype.endGame = function (isWon) {
        var _this = this;
        this.optionLayer.getComponent("options").disableClockButton();
        SoundManager_1.default.getInstance().stopAllSounds();
        clearInterval(this.interval);
        if (isWon) {
            var isNewRecord = false;
            var levelInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
            var levels = JSON.parse(levelInfo.level);
            // SoundManager.getInstance().playEffect(this.clapping, false);
            if (levels[this._level].time > this._timer) {
                levels[this._level].time = this._timer;
                if (this._level < levels.length - 1) {
                    levels[this._level + 1].isUnlock = true;
                }
                levelInfo.level = JSON.stringify(levels);
                cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(levelInfo));
                isNewRecord = true;
            }
            this.gameEndAlert.getComponent("gameEnd").showPopUpFor(isNewRecord ? constants_1.END_POP_UP.NEW_RECORD : constants_1.END_POP_UP.CLEARD, this._level);
            this.gameEndAlert.active = true;
        }
        else {
            // SoundManager.getInstance().playEffect(this.timesUp, false);
            this.gameEndAlert.getComponent("gameEnd").showPopUpFor(constants_1.END_POP_UP.FAILED, this._level);
            this.gameEndAlert.active = true;
        }
        this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
            var clip = isWon ? _this.clapping : _this.timesUp;
            SoundManager_1.default.getInstance().playEffect(clip, false);
        })));
    };
    // pop ups DELEGATE METHODS 
    GamePlay.prototype.onPlayAgain = function () {
        this.gameEndAlert.active = false;
        if (!cc.sys.isBrowser) {
            if (AdManager_1.default.getInstance().isAdAvailable()) {
                AdManager_1.default.getInstance().showInterstital(this);
            }
            ;
        }
        cc.sys.localStorage.setItem("lastPlayedLevel", this._level);
        //MARK : TO DO CHECK WORK AFTER ADS COMES
        this.node.parent.getComponent("home").onBack();
        this.node.parent.getComponent("home").startGame();
    };
    GamePlay.prototype.startGame = function () {
        var _this = this;
        console.log("inside this");
        this.levelLabel.node.parent.active = false;
        this.progresser.width = this.timerBar.node.width;
        this.timerBar.progress = 1;
        var target = this;
        var time = this.levelData.timer.memorizeTime;
        target.optionLayer.getComponent("options").updateTimer(time, this.levelData.timer.totalTime);
        target.optionLayer.active = true;
        this.isTouchBlocked = true;
        this.interval = setInterval(function () {
            target.optionLayer.getComponent("options").updateTimer(time, _this.levelData.timer.totalTime);
            time--;
            _this.timerBar.progress = time / _this.levelData.timer.memorizeTime;
            if (time === -1) {
                clearInterval(_this.interval);
                target.isTouchBlocked = false;
                target.flipAllCards();
                if (!_this.isTutoiral) {
                    _this._timer = 0;
                    _this.startGameTimer();
                }
            }
        }, 1000);
    };
    GamePlay.prototype.onPlayAgainCancel = function () {
        this.gameEndAlert.active = false;
        this.gameEndAlert.removeFromParent();
        this.node.parent.getComponent("home").onBack();
    };
    GamePlay.prototype.gameEnded = function () {
        this.gameEndAlert.removeFromParent();
        var level = GameManager_1.GameManager.getInstance().getCurrentLevel();
        var totalLevelInMode = GameManager_1.GameManager.getInstance().getLevelInfo(this.gameMode);
        if (level == totalLevelInMode.length - 1) {
            this.node.parent.getComponent("home").showFutureDetailsScreen();
            GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.FUTURE_ANNOCMENTS);
        }
        else {
            cc.sys.localStorage.setItem("lastPlayedLevel", this._level + 1);
            this.node.parent.getComponent("home").onBack();
            this.node.parent.getComponent("home").startGame();
        }
    };
    // ANIMATION CALLBACKS :
    GamePlay.prototype.playBounsAnimation = function (isFromPowerUp) {
        if (isFromPowerUp === void 0) { isFromPowerUp = false; }
        console.log("is from popwe up ", isFromPowerUp);
        var additonPoints = isFromPowerUp ? 10 : 5;
        this.bounsPoints += additonPoints;
        this.bouns.node.active = true;
        this.bouns.node.position = new cc.Vec2(0, 0);
        this.bouns.node.scale = 2;
        this.bouns.node.getComponentInChildren(cc.Label).string = "+" + additonPoints;
        this.bouns.node.opacity = 255;
        this.bouns.node.getComponent(cc.Animation).play();
    };
    GamePlay.prototype.bounsAnimationCompleted = function () {
        this.bouns.node.active = false;
        this.totalTime += this.bounsPoints; //this.levelData.timer.bounsTime;
        this.optionLayer.getComponent("options").updateTimer(this._timer, this.totalTime);
        this.isTouchBlocked = false;
        this.bounsPoints = 0;
    };
    GamePlay.prototype.showTutorials = function () {
        this.gameTutorials = cc.instantiate(this.tutorials);
        this.gameTutorials.getComponent("tutorials").setDelegate(this);
        this.gameTutorials.getComponent("tutorials").showMemoriseTime(this.levelData.timer.memorizeTime);
        this.hand.setPosition(0, 0);
        this.node.parent.addChild(this.gameTutorials, 100);
    };
    GamePlay.prototype.continueTutorial = function () {
        this.gameTutorials.active = true;
        this.gameTutorials.getComponent("tutorials").moveToNextSlide();
    };
    GamePlay.prototype.showGameInstructionPopUp = function () {
        console.log("inside this we have to see the ");
        this.gameStartAlert.active = true;
        this.hand.active = false;
    };
    GamePlay.prototype.stopTutorials = function () {
        this.isTutoiral = false;
        this.tutorialCards.length = 0;
        this.gameStartAlert.removeFromParent();
        for (var _i = 0, _a = this.gameLayout.node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.getComponent('cards').disableOverlay();
        }
        this._timer = 0;
        this.startGameTimer();
    };
    GamePlay.prototype.adHasbeenShown = function () {
    };
    GamePlay.prototype.isTutorialPlaying = function () {
        return this.isTutoiral;
    };
    GamePlay.prototype.removeHintPopUp = function () {
        this.gameEndAlert.active = false;
        this.startGameTimer();
        this.optionLayer.getComponent('options').updateHindText();
    };
    GamePlay.prototype.showHintPopUP = function (type) {
        console.log("cc.sys.getNetworkType()", cc.sys.getNetworkType(), cc.sys.NetworkType.LAN, cc.sys.NetworkType.WWAN);
        if (cc.sys.getNetworkType() == cc.sys.NetworkType.LAN || cc.sys.getNetworkType() == cc.sys.NetworkType.WWAN) {
            this.gameEndAlert.getComponent("gameEnd").showPopUpFor(type, this._level);
            this.gameEndAlert.active = true;
            clearInterval(this.interval);
        }
        else {
            console.log("show error pop up", this.netError);
            this.showNetErroPopUP();
        }
    };
    GamePlay.prototype.showNetErroPopUP = function () {
        var _this = this;
        this.netError.active = true;
        this.netError.getComponentInChildren(cc.Label).string = GameManager_1.GameManager.getInstance().getString('openNet');
        cc.tween(this.netError)
            .delay(2)
            .call(function () { return _this.netError.active = false; })
            .start();
    };
    GamePlay.prototype.openPairCards = function () {
        var _this = this;
        var hiddenCards = [];
        var targetCard = null;
        if (this.cardsInPair.length == this.groupOf || this.isTouchBlocked) {
            console.log("please. return");
            return;
        }
        else if (this.cardsInPair.length != 0 && this.cardsInPair.length <= this.groupOf) {
            hiddenCards = this.cardsInPair;
        }
        else {
            // console.log("innside else");
            hiddenCards = this.gameLayout.node.children.filter(function (item) { return !item.getComponent('cards').isOpen(); });
        }
        // console.log("hidden cards hehhehe", hiddenCards, this.cardsInPair);
        if (hiddenCards.length > 0) {
            var card_1 = hiddenCards[0];
            var pairs = this.gameLayout.node.children.filter(function (item) {
                return item.getComponent('cards').getCardName() == card_1.getComponent('cards').getCardName();
            });
            //   console.log("pairs", pairs, card.getComponent('cards').getCardName());
            pairs.forEach(function (card) {
                if (!card.getComponent('cards').isOpen()) {
                    _this.showCard(card);
                }
            });
        }
    };
    GamePlay.prototype.showTenSecondsPopUp = function () {
        console.log("inside this we have to show ten seconds timer here hehe", JSON.parse(cc.sys.localStorage.getItem("lastTenSeconds")));
        if (!JSON.parse(cc.sys.localStorage.getItem("lastTenSeconds"))) {
            cc.sys.localStorage.setItem("lastTenSeconds", true);
            clearInterval(this.interval);
            this.node.parent.getComponent("home").showLastSecondsPopUp();
        }
    };
    GamePlay.prototype.hideTenSecondsPopUp = function () {
        this.node.parent.getComponent("home").hideLastSecondsPopUp();
        this.startGameTimer();
    };
    __decorate([
        property(cc.Prefab)
    ], GamePlay.prototype, "cardPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GamePlay.prototype, "options", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GamePlay.prototype, "timerBar", void 0);
    __decorate([
        property(cc.Layout)
    ], GamePlay.prototype, "gameLayout", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamePlay.prototype, "bouns", void 0);
    __decorate([
        property(cc.Prefab)
    ], GamePlay.prototype, "startPopUp", void 0);
    __decorate([
        property(cc.Prefab)
    ], GamePlay.prototype, "gameEndPopUp", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "containerNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "correctAnswerAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "wrongAnswerAudiodFlip", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "last5Sec", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "clapping", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "timesUp", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], GamePlay.prototype, "cardsSpriteFrames", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "netError", void 0);
    __decorate([
        property(cc.Label)
    ], GamePlay.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "gameInstructions", void 0);
    __decorate([
        property(cc.Prefab)
    ], GamePlay.prototype, "tutorials", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L2dhbWVQbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFtRDtBQUNuRCxpREFBeUU7QUFDekUseURBQW9EO0FBQ3BELG1EQUE4QztBQUc5QyxJQUFRLFNBQVMsR0FBRztJQUNmLFNBQVMsRUFBRyxDQUFDO0lBQ2IsU0FBUyxFQUFHLENBQUM7SUFDYixTQUFTLEVBQUcsQ0FBQztJQUNiLFNBQVMsRUFBRyxDQUFDO0lBQ2IsU0FBUyxFQUFHLENBQUM7Q0FDakIsQ0FBQTtBQUdLLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeW5CQztRQXZuQlcsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsWUFBTSxHQUFLLENBQUMsQ0FBQztRQUNiLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxlQUFTLEdBQUUsRUFBRSxDQUFDO1FBQ2QsaUJBQVcsR0FBRSxFQUFFLENBQUM7UUFDaEIsbUJBQWEsR0FBRSxFQUFFLENBQUM7UUFDbEIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLG9CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDMUIsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGlCQUFXLEdBQUcsSUFB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QVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDTTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzt1REFDYztJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFJekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUztJQUk1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNlO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1E7SUFuRlgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXluQjVCO0lBQUQsZUFBQztDQXpuQkQsQUF5bkJDLENBem5CcUMsRUFBRSxDQUFDLFNBQVMsR0F5bkJqRDtrQkF6bkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0dhbWVNYW5hZ2VyfSBmcm9tIFwiLi4vbWFuYWdlcnMvR2FtZU1hbmFnZXJcIlxuaW1wb3J0IHsgR0FNRV9NT0RFLCBFTkRfUE9QX1VQLCBHQU1FX1NDUkVFTiB9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXJcIjtcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJzL0FkTWFuYWdlclwiO1xuXG5cbmNvbnN0ICAgY2FyZEluZGV4ID0ge1xuICAgICBHUk9VUF8zXzQgOiAwLFxuICAgICBHUk9VUF80XzQgOiAxLFxuICAgICBHUk9VUF80XzUgOiAyLFxuICAgICBHUk9VUF80XzYgOiAzLFxuICAgICBHUk9VUF80XzcgOiA0XG59XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIF9jYXJkcyA9IFtdO1xuICAgIHByaXZhdGUgX2dyaWRJbmZvID0gbnVsbDtcbiAgICBwcml2YXRlIF9sZXZlbCAgPSAgMDtcbiAgICBwcml2YXRlIF90aW1lciA9IG51bGw7XG4gICAgcHJpdmF0ZSBPcGVuQ2FyZHMgPVtdO1xuICAgIHByaXZhdGUgY2FyZHNJblBhaXIgPVtdO1xuICAgIHByaXZhdGUgdHV0b3JpYWxDYXJkcyA9W107XG4gICAgcHJpdmF0ZSB0dXRDYXJkTmFtZSA9IDA7XG4gICAgcHJpdmF0ZSBpc1R1dG9pcmFsID0gdHJ1ZTsgXG4gICAgcHJpdmF0ZSBsZXZlbERhdGEgPSBudWxsO1xuICAgIHByaXZhdGUgaW50ZXJ2YWwgPSBudWxsO1xuICAgIHByaXZhdGUgaXNUb3VjaEJsb2NrZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIHRvdGFsVGltZSA9IDA7XG4gICAgcHJpdmF0ZSBncm91cE9mID0gMjtcbiAgICBwcml2YXRlIHByb2dyZXNzZXIgPSBudWxsO1xuICAgIGdhbWVNb2RlID0gJyc7XG4gICAgZ2FtZVN0YXJ0QWxlcnQgPSBudWxsO1xuICAgIGdhbWVFbmRBbGVydCA9IG51bGw7XG4gICAgb3B0aW9uTGF5ZXIgPSBudWxsO1xuICAgIGdhbWVUdXRvcmlhbHMgPSBudWxsO1xuXG4gICAgYm91bnNQb2ludHMgPSAwO1xuICAgIGlzU291bmRQbGF5aW5nID0gZmFsc2VcbiAgICBcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY2FyZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgb3B0aW9uczogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICB0aW1lckJhciA6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYXlvdXQpXG4gICAgZ2FtZUxheW91dCA6IGNjLkxheW91dCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJvdW5zID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc3RhcnRQb3BVcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVFbmRQb3BVcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250YWluZXJOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgY29ycmVjdEFuc3dlckF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICB3cm9uZ0Fuc3dlckF1ZGlvZEZsaXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBsYXN0NVNlYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgY2xhcHBpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHRpbWVzVXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBjYXJkc1Nwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuZXRFcnJvcjogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsZXZlbExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdhbWVJbnN0cnVjdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB0dXRvcmlhbHM6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgICBvbkxvYWQgKCkge1xuXG4gICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5oYW5kLnpJbmRleCA9IDIwO1xuICAgICAgICB0aGlzLm5ldEVycm9yLnpJbmRleCA9IDIwO1xuICAgICAgICB0aGlzLnByb2dyZXNzZXIgPSB0aGlzLnRpbWVyQmFyLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIik7XG4gICAgICAgIHZhciBhbmltYXRpb25DbGlwcyA9IHRoaXMuYm91bnMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgYW5pbWF0aW9uQ2xpcHMub24oJ2ZpbmlzaGVkJywgdGhpcy5ib3Vuc0FuaW1hdGlvbkNvbXBsZXRlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucygpO1xuICAgICAgICB0aGlzLnByb2dyZXNzZXIud2lkdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWVyQmFyLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy50aW1lckJhci50b3RhbExlbmd0aCA9IHRoaXMudGltZXJCYXIubm9kZS53aWR0aDtcblxuICAgIH1cbiAgICBvbkRpc2FibGUoKXtcbiAgICAgICAgaWYoICF0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikuaXNmb3JTZXR0aW5nKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCkgIDtcbiAgICAgICAgICAgIHRoaXMuT3BlbkNhcmRzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLmhhbmQucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgdGhpcy5ib3Vucy5ub2RlLmFjdGl2ZSA9IGZhbHNlOyBcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWxDYXJkcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc1R1dG9pcmFsID0gdHJ1ZTtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnN0b3BBbGxTb3VuZHMoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uTGF5ZXIuZ2V0Q29tcG9uZW50KFwib3B0aW9uc1wiKS5kaXNhYmxlQ2xvY2tCdXR0b24oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zdG9wQWxsU291bmRzKCk7IFxuICAgICAgICB9XG4gICAgfVxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIGlmKHRoaXMub3B0aW9uTGF5ZXIpe1xuICAgICAgICAgICAgdGhpcy5vcHRpb25MYXllclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChcIm9wdGlvbnNcIikudXBkYXRlSGluZFRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgc2V0T3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5vcHRpb25MYXllciA9IGNjLmluc3RhbnRpYXRlKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMub3B0aW9uTGF5ZXJcbiAgICAgICAgLmdldENvbXBvbmVudChcIm9wdGlvbnNcIikuc2V0RGVsZWdhdGUodGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9uTGF5ZXJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMub3B0aW9uTGF5ZXIpO1xuICAgICAgICB0aGlzLm9wdGlvbkxheWVyLnpJbmRleCA9IDU7XG4gICAgICB9XG5cbiAgICAvLyBTRVRUSU5HIFVQIFVJXG4gICAgc2V0VXBVSShsZXZlbCA6IG51bWJlciwgZ2FtZU1vZGU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5nYW1lTGF5b3V0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGUgPSBnYW1lTW9kZTtcbiAgICAgICAgdGhpcy5fbGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsRGF0YSh0aGlzLl9sZXZlbCAsIHRoaXMuZ2FtZU1vZGUpO1xuICAgICAgICB0aGlzLnNldFVwQWxlcnRzKCk7XG4gICAgICAgIHRoaXMubG9hZExldmVsSW1hZ2VzKCk7XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgIGxvYWRMZXZlbEltYWdlcygpe1xuICAgICAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgICAgIC5sb2FkTGV2ZWxJbWFnZXModGhpcy5fbGV2ZWwpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5ncm91cE9mID0gIHRoaXMubGV2ZWxEYXRhLmdyb3VwT2Y7XG4gICAgICAgICAgdGhpcy5jcmVhdGVBbmRTaHVmZmVsQ2FyZHMoKTtcbiAgICAgICAgICB0aGlzLl9ncmlkSW5mbyA9IHRoaXMubGV2ZWxEYXRhLmdyaWQ7XG4gICAgICAgICAgdGhpcy5zZXRHcmlkKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgfSk7XG4gICAgIH1cbiAgICBzZXRVcEFsZXJ0cyAoKXtcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRBbGVydCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhcnRQb3BVcCk7XG4gICAgICAgIGxldCB0aW1lclRpdGxlID0gYCR7dGhpcy5sZXZlbERhdGEudGltZXIudG90YWxUaW1lfXNgO1xuICAgICAgICBsZXQgbGV2ZWxJbmZvID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbERhdGEodGhpcy5fbGV2ZWwpO1xuICAgICAgICB0aGlzLmdhbWVTdGFydEFsZXJ0LmdldENvbXBvbmVudChcImdhbWVTdGFydFwiKS5zZXRQcm9wZXJ0aWVzKHRoaXMsIGxldmVsSW5mby5nYW1lVHlwZSwgbGV2ZWxJbmZvLmdyb3VwT2YpO1xuICAgICAgICB0aGlzLmdhbWVFbmRBbGVydCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVuZFBvcFVwKTtcbiAgICAgICAgdGhpcy5nYW1lRW5kQWxlcnQuZ2V0Q29tcG9uZW50KFwiZ2FtZUVuZFwiKS5zZXRQcm9wZXJ0aWVzKHRoaXMsIHRoaXMuZ2FtZU1vZGUpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHRoaXMuZ2FtZVN0YXJ0QWxlcnQsNyk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQodGhpcy5nYW1lRW5kQWxlcnQsNyk7XG4gICAgICAgIHRoaXMuZ2FtZUVuZEFsZXJ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVTdGFydEFsZXJ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBzZXRHcmlkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBzZXQgY2FyZCBlbGVtZW50c1wiKTtcbiAgICAgICAgdGhpcy5nYW1lTGF5b3V0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lck5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgIHRoaXMuZ2FtZUxheW91dC5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGxldCBpbmRleCA9IGNhcmRJbmRleFtgR1JPVVBfJHt0aGlzLl9ncmlkSW5mby5jb2x9XyR7dGhpcy5fZ3JpZEluZm8ucm93fWBdO1xuICAgICAgICBsZXQgdG90YWxIZWlnaHQgPSAodGhpcy5jb250YWluZXJOb2RlLmhlaWdodCAtICh0aGlzLmdhbWVMYXlvdXQuc3BhY2luZ1gqdGhpcy5fZ3JpZEluZm8ucm93KSk7XG4gICAgICAgIGxldCBzcGFjaW5nID0gdGhpcy5nYW1lTGF5b3V0LnNwYWNpbmdYICogdGhpcy5fZ3JpZEluZm8uY29sO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLmNvbnRhaW5lck5vZGUud2lkdGggLSBzcGFjaW5nO1xuICAgICAgICBsZXQgc2NhbGUgPSAxO1xuICAgICAgICBsZXQgZHVtbXlXaWR0aCA9IDE7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLl9jYXJkcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgY2FyZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FyZFByZWZhYik7XG4gICAgICAgICAgICBjYXJkLmdldENvbXBvbmVudChcImNhcmRzXCIpLnNldERlbGVnYXRlKHRoaXMpO1xuICAgICAgICAgICAgY2FyZC5nZXRDb21wb25lbnQoXCJjYXJkc1wiKS5zZXRVcFVJKHRoaXMuX2NhcmRzW2ldLm5hbWUsIHRoaXMuX2xldmVsLCB0aGlzLmdhbWVNb2RlLCB0aGlzLmNhcmRzU3ByaXRlRnJhbWVzW2luZGV4XSk7XG4gICAgICAgICAgICBsZXQgYmxvY2tTaXplID0gd2lkdGggLyB0aGlzLl9ncmlkSW5mby5jb2w7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdG90YWxIZWlnaHQvIHRoaXMuX2dyaWRJbmZvLnJvdztcbiAgICAgICAgICAgIGNhcmQuc2V0U2NhbGUoTWF0aC5taW4oYmxvY2tTaXplL2NhcmQud2lkdGgsIGhlaWdodC9jYXJkLmhlaWdodCkpO1xuICAgICAgICAgICAgc2NhbGUgPSBjYXJkLnNjYWxlO1xuICAgICAgICAgICAgZHVtbXlXaWR0aCA9IGNhcmQud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmdhbWVMYXlvdXQubm9kZS5hZGRDaGlsZChjYXJkKTtcbiAgICAgICAgfSAgXG4gICAgICAgIHRoaXMuZ2FtZUxheW91dC5ub2RlLndpZHRoID0gICB0aGlzLl9ncmlkSW5mby5jb2wgKiAoc2NhbGUgKiBkdW1teVdpZHRoICkgKyBzcGFjaW5nO1xuICAgICAgICB0aGlzLm9wdGlvbkxheWVyLmFjdGl2ZSA9IGZhbHNlOyAgIFxuICAgICAgICB0aGlzLmdhbWVMYXlvdXQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxldmVsTGFiZWwubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTsgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pc2RlIHRoaXMgd2UgaGF2ZSBzZXQgdGhlIGNhcmRzXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZUdhbWVQbGF5KCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVHYW1lUGxheSgpe1xuICAgICAgICB0aGlzLmxldmVsTGFiZWwuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLnJlcGxhY2VWYWx1ZShgJHt0aGlzLl9sZXZlbCsxfWApOyBcbiAgICAgICAgICB0aGlzLmxldmVsTGFiZWwuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLnNldFN0cmluZ0ZvcktleSgpO1xuICAgICAgICAgIHRoaXMubGV2ZWxMYWJlbC5ub2RlLnBhcmVudC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygxLjUsIDEpLCBjYy5kZWxheVRpbWUoMC41KSwgY2MuY2FsbEZ1bmMoKCk9PntcbiAgICAgICAgICAgICAgdGhpcy5sZXZlbExhYmVsLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLmxldmVsTGFiZWwubm9kZS5wYXJlbnQuc2NhbGUgPSAwLjU7XG4gICAgICAgICAgICBpZigodGhpcy5fbGV2ZWwrMSkgJSAxMCA9PSAxKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUdXRvcmlhbHMoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgfSkpKTtcbiAgICAgICAgICB0aGlzLnRvdGFsVGltZSA9IHRoaXMubGV2ZWxEYXRhLnRpbWVyLnRvdGFsVGltZTtcbiAgICAgICAgICB0aGlzLmJvdW5zLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib251c1wiKS5zdHJpbmcgPSB0aGlzLmxldmVsRGF0YS50aW1lci5ib3Vuc1RpbWU7XG4gICAgfVxuICAgIGNyZWF0ZUFuZFNodWZmZWxDYXJkcygpe1xuICAgICAgICB0aGlzLl9jYXJkcy5sZW5ndGggPTA7XG4gICAgICAgIGZvcihsZXQgaSA9MDsgaSA8IHRoaXMuZ3JvdXBPZjsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuX2NhcmRzLnB1c2goLi4udGhpcy5sZXZlbERhdGEuY2FyZHMpO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaW5kZXggPSB0aGlzLl9jYXJkcy5sZW5ndGgtMTsgaW5kZXg+PSAwOyBpbmRleC0tKXtcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpbmRleCAtIDApICsgMCk7XG4gICAgICAgICAgICBsZXQgc3dhcEVsZW1lbnQgPSB0aGlzLl9jYXJkc1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSB0aGlzLl9jYXJkc1tpbmRleF07XG4gICAgICAgICAgICB0aGlzLl9jYXJkc1tpbmRleF0gPSBzd2FwRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuX2NhcmRzW3JhbmRvbUluZGV4XSA9IGN1cnJlbnRFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoKHRoaXMuX2xldmVsICsxKSUgMTAgPT0gMSl7XG4gICAgICAgICAgIHRoaXMudHV0Q2FyZE5hbWUgPSB0aGlzLl9jYXJkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5fY2FyZHMubGVuZ3RoIC0gMSkgKyAwKV0ubmFtZTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuXG5cblxuICAgIH1cbiAgICBmbGlwQWxsQ2FyZHMoKXtcbiAgICAgICAgZm9yKGxldCBjaGlsZCBvZiB0aGlzLmdhbWVMYXlvdXQubm9kZS5jaGlsZHJlbil7XG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoXCJjYXJkc1wiKS51bnJldmVhbCgpO1xuICAgICAgICAgICAgaWYoKHRoaXMuX2xldmVsKzEpICUgMTAgIT0gMSl7XG4gICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudCgnY2FyZHMnKS5kaXNhYmxlT3ZlcmxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKCh0aGlzLl9sZXZlbCsxKSAlIDEwID09IDEpe1xuICAgICAgICAgICAgdGhpcy50dXRvcmlhbENhcmRzID0gdGhpcy5nYW1lTGF5b3V0Lm5vZGUuY2hpbGRyZW4uZmlsdGVyKGl0ZW0gPT4gIGl0ZW0uZ2V0Q29tcG9uZW50KCdjYXJkcycpLmdldENhcmROYW1lKCkgPT0gdGhpcy50dXRDYXJkTmFtZSk7IFxuICAgICAgICAgICAgdGhpcy5pc1R1dG9pcmFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubW92ZVR1dEhhbmQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaXNUdXRvaXJhbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIG1vdmVUdXRIYW5kKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW92ZSB0dXQgaGFuZFwiKTtcbiAgICAgICAgbGV0IGNhcmQgPSB0aGlzLnR1dG9yaWFsQ2FyZHMuc2hpZnQoKTtcbiAgICAgICAgaWYoIWNhcmQpIHJldHVybjtcbiAgICAgICAgY2FyZC5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgIGNhcmQuZ2V0Q29tcG9uZW50KCdjYXJkcycpLmRpc2FibGVPdmVybGF5KCk7XG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgd29ybGRTcGFjZSA9IHRoaXMuY29udGFpbmVyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlKGNhcmQuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGxldCBub2RlU3BhY2UgPSB0aGlzLmhhbmQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZSh3b3JsZFNwYWNlKTtcbiAgICAgICAgdGhpcy5oYW5kLnkgPSBub2RlU3BhY2UueSAtIChjYXJkLmhlaWdodCAgKiBjYXJkLnNjYWxlKTtcbiAgICAgICAgdGhpcy5oYW5kLnggPSBub2RlU3BhY2UueDtcbiAgICAgICAgdGhpcy5oYW5kLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuaGFuZC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZUJ5KC41LCAgMCAsIDUwKSwgY2MubW92ZUJ5KC41LCAwLCAtNTApKS5yZXBlYXQoMTAwMCkpO1xuICAgIH1cbiAgICBtb3ZlVHVkSGFuZHNPbkhpbnRzKGlzT25NYWduaWZpbmVHbGFzcyl7XG4gICAgICAgIHRoaXMuaGFuZC5wYXJlbnQgPSB0aGlzLmdhbWVUdXRvcmlhbHM7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMub3B0aW9uTGF5ZXIuZ2V0Q29tcG9uZW50KFwib3B0aW9uc1wiKS5nZXRDaGlsZHJlblBvc2l0aW9uKGlzT25NYWduaWZpbmVHbGFzcyk7XG4gICAgICAgIGxldCB3b3JsZFNwYWNlID0gdGhpcy5vcHRpb25MYXllci5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvc2l0aW9uKTtcbiAgICAgICAgbGV0IG5vZGVTcGFjZSA9IHRoaXMuZ2FtZVR1dG9yaWFscy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFNwYWNlKTtcbiAgICAgICAgdGhpcy5oYW5kLnkgPSBub2RlU3BhY2UueSArIHRoaXMubm9kZS5oZWlnaHQgKiAwLjM7XG4gICAgICAgIHRoaXMuaGFuZC54ID0gbm9kZVNwYWNlLng7XG4gICAgfVxuICAgIHN0YXJ0R2FtZVRpbWVyICgpe1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgdGFyZ2V0Lm9wdGlvbkxheWVyLmdldENvbXBvbmVudChcIm9wdGlvbnNcIikudXBkYXRlVGltZXIoMCAsIHRoaXMudG90YWxUaW1lKVxuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyKys7XG5cbiAgICAgICAgICAgIHRhcmdldC5vcHRpb25MYXllci5nZXRDb21wb25lbnQoXCJvcHRpb25zXCIpLnVwZGF0ZVRpbWVyKHRoaXMuX3RpbWVyICwgdGhpcy50b3RhbFRpbWUpXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zaWRlIHRoaXMgbWF4aW11bSB0aW1lIGluc2lkZSB0aGlzXCIsIHRoaXMudG90YWxUaW1lKTtcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZU1vZGUgIT0gR0FNRV9NT0RFLlBSQUNUSUNFKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyQmFyLnByb2dyZXNzICA9IHRoaXMuX3RpbWVyICAvIHRoaXMudG90YWxUaW1lO1xuXG4gICAgICAgICAgICAgICAgaWYoTWF0aC5hYnModGhpcy5fdGltZXIgIC0gdGhpcy50b3RhbFRpbWUpID09IDEwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLmlzU291bmRQbGF5aW5nICYmIE1hdGguYWJzKHRoaXMuX3RpbWVyICAtIHRoaXMudG90YWxUaW1lKSA8IDEwKSl7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5sYXN0NVNlYywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU291bmRQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25MYXllci5nZXRDb21wb25lbnQoXCJvcHRpb25zXCIpLmVuYWJsZUNsb2NrQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHRoaWUgd2UgYXJlIGhlcmUgaGhoZWhlaGVoXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUZW5TZWNvbmRzUG9wVXAoKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmlzU291bmRQbGF5aW5nICYmIE1hdGguYWJzKHRoaXMuX3RpbWVyICAtIHRoaXMudG90YWxUaW1lKSA+IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkuc3RvcEFsbFNvdW5kcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkxheWVyLmdldENvbXBvbmVudChcIm9wdGlvbnNcIikuZGlzYWJsZUNsb2NrQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTb3VuZFBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fdGltZXIgID09IHRoaXMudG90YWxUaW1lKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RvdWNoQmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7ICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRHYW1lKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIHNob3dDYXJkKGNhcmQpe1xuICAgICAgICBpZih0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aCA+PSB0aGlzLmdyb3VwT2YgfHwgdGhpcy5pc1RvdWNoQmxvY2tlZCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FyZC5nZXRDb21wb25lbnQoXCJjYXJkc1wiKS5yZXZlYWwoKTtcbiAgICAgICAgdGhpcy5jYXJkc0luUGFpci5wdXNoKGNhcmQpO1xuICAgICAgICB0aGlzLmlzVHV0b2lyYWwgJiYgdGhpcy5tb3ZlVHV0SGFuZCgpO1xuICAgICAgICB0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aCA+IDEgJiYgdGhpcy5pc1BhaXIoKTtcbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgLy8gdGhpcy5pc1R1dG9pcmFsIFxuICAgIH1cbiAgICBpc1BhaXIoKXtcbiAgICAgICAgbGV0IGNhcmRzID0gW107XG4gICAgICAgIGNhcmRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPCB0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNhcmRzLnB1c2godGhpcy5jYXJkc0luUGFpcltpXS5nZXRDb21wb25lbnQoJ2NhcmRzJykpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNNYXRjaCAgPSB0cnVlO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoIC0gMTsgaSsrICl7XG4gICAgICAgICAgICBpZihjYXJkc1tpXS5nZXRDYXJkTmFtZSgpICE9PSBjYXJkc1tpKzFdLmdldENhcmROYW1lKCkpe1xuICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IFxuICAgICAgICBpZiggaXNNYXRjaCApeyAgIFxuICAgICAgICAgICAgaWYodGhpcy5jYXJkc0luUGFpci5sZW5ndGggIT0gdGhpcy5ncm91cE9mKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnBsYXlCb3Vuc0FuaW1hdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5pc1RvdWNoQmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjIpLCBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgZm9yKGxldCBjYXJkU2NpcHQgb2YgY2FyZHMpe1xuICAgICAgICAgICAgICAgICAgICBjYXJkU2NpcHQucGxheUNvcnJlY3RBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNUb3VjaEJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICBmb3IobGV0IGNhcmRTY2lwdCBvZiBjYXJkcyl7XG4gICAgICAgICAgICAgICAgdGhpcy5PcGVuQ2FyZHMucHVzaChjYXJkU2NpcHQuZ2V0Q2FyZE5hbWUoKSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBpZih0aGlzLk9wZW5DYXJkcy5sZW5ndGggPT0gdGhpcy5fY2FyZHMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLCBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kR2FtZSh0cnVlKTtcbiAgICAgICAgICAgICAgIH0pKSk7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLmlzVHV0b2lyYWwpe1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLCBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGludWVUdXRvcmlhbCgpO1xuICAgICAgICAgICAgICAgICAgIH0pKSk7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmlzVG91Y2hCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLCBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgIGZvcihsZXQgY2FyZFNjaXB0IG9mIGNhcmRzKXtcbiAgICAgICAgICAgICAgICAgICAgY2FyZFNjaXB0LnVucmV2ZWFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUb3VjaEJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkc0luUGFpci5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjMpLCBjYy5jYWxsRnVuYyggKCk9PntcbiAgICAgICAgICAgIGxldCBjbGlwID0gaXNNYXRjaCA/IHRoaXMuY29ycmVjdEFuc3dlckF1ZGlvIDogdGhpcy53cm9uZ0Fuc3dlckF1ZGlvZEZsaXA7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcbiAgICAgICAgfSkpKTtcbiAgICB9XG4gICAgZW5kR2FtZSAoaXNXb24pIHtcblxuICAgICAgICB0aGlzLm9wdGlvbkxheWVyLmdldENvbXBvbmVudChcIm9wdGlvbnNcIikuZGlzYWJsZUNsb2NrQnV0dG9uKCk7XG4gICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zdG9wQWxsU291bmRzKCk7XG4gICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICBpZihpc1dvbil7XG4gICAgICAgICAgICBsZXQgaXNOZXdSZWNvcmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBsZXZlbEluZm8gPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxldmVsSW5mb1wiKSk7XG4gICAgICAgICAgICBsZXQgbGV2ZWxzID0gIEpTT04ucGFyc2UobGV2ZWxJbmZvLmxldmVsKTtcbiAgICAgICAgICAgIC8vIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5jbGFwcGluZywgZmFsc2UpO1xuICAgICAgICAgICAgaWYobGV2ZWxzW3RoaXMuX2xldmVsXS50aW1lID4gdGhpcy5fdGltZXIpe1xuICAgICAgICAgICAgICAgIGxldmVsc1t0aGlzLl9sZXZlbF0udGltZSA9IHRoaXMuX3RpbWVyO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2xldmVsIDwgbGV2ZWxzLmxlbmd0aC0xKXtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxzW3RoaXMuX2xldmVsKzFdLmlzVW5sb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV2ZWxJbmZvLmxldmVsID0gSlNPTi5zdHJpbmdpZnkobGV2ZWxzKTtcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMZXZlbEluZm9cIiwgSlNPTi5zdHJpbmdpZnkobGV2ZWxJbmZvKSk7XG4gICAgICAgICAgICAgICAgaXNOZXdSZWNvcmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nYW1lRW5kQWxlcnQuZ2V0Q29tcG9uZW50KFwiZ2FtZUVuZFwiKS5zaG93UG9wVXBGb3IoaXNOZXdSZWNvcmQgPyBFTkRfUE9QX1VQLk5FV19SRUNPUkQ6IEVORF9QT1BfVVAuQ0xFQVJELCB0aGlzLl9sZXZlbCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVFbmRBbGVydC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy50aW1lc1VwLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmdhbWVFbmRBbGVydC5nZXRDb21wb25lbnQoXCJnYW1lRW5kXCIpLnNob3dQb3BVcEZvcihFTkRfUE9QX1VQLkZBSUxFRCx0aGlzLl9sZXZlbCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVFbmRBbGVydC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSwgY2MuY2FsbEZ1bmMoICgpPT57XG4gICAgICAgICAgICBsZXQgY2xpcCA9IGlzV29uID8gdGhpcy5jbGFwcGluZyA6IHRoaXMudGltZXNVcDtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xuICAgICAgICB9KSkpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBwb3AgdXBzIERFTEVHQVRFIE1FVEhPRFMgXG4gICAgb25QbGF5QWdhaW4gKCl7XG4gICAgICAgIHRoaXMuZ2FtZUVuZEFsZXJ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZighY2Muc3lzLmlzQnJvd3Nlcil7XG4gICAgICAgICAgICBpZihBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pc0FkQXZhaWxhYmxlKCkpe1xuICAgICAgICAgICAgICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNob3dJbnRlcnN0aXRhbCh0aGlzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdFBsYXllZExldmVsXCIsIHRoaXMuX2xldmVsKTtcbiAgICAgICAgLy9NQVJLIDogVE8gRE8gQ0hFQ0sgV09SSyBBRlRFUiBBRFMgQ09NRVNcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJob21lXCIpLm9uQmFjaygpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHRoaXNcIik7XG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5ub2RlLnBhcmVudC5hY3RpdmU9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2dyZXNzZXIud2lkdGggPSB0aGlzLnRpbWVyQmFyLm5vZGUud2lkdGg7ICAgXG4gICAgICAgIHRoaXMudGltZXJCYXIucHJvZ3Jlc3MgPSAxO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmxldmVsRGF0YS50aW1lci5tZW1vcml6ZVRpbWU7XG4gICAgICAgIHRhcmdldC5vcHRpb25MYXllci5nZXRDb21wb25lbnQoXCJvcHRpb25zXCIpLnVwZGF0ZVRpbWVyKHRpbWUsIHRoaXMubGV2ZWxEYXRhLnRpbWVyLnRvdGFsVGltZSlcbiAgICAgICAgdGFyZ2V0Lm9wdGlvbkxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzVG91Y2hCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICB0YXJnZXQub3B0aW9uTGF5ZXIuZ2V0Q29tcG9uZW50KFwib3B0aW9uc1wiKS51cGRhdGVUaW1lcih0aW1lLCB0aGlzLmxldmVsRGF0YS50aW1lci50b3RhbFRpbWUpXG4gICAgICAgICAgICB0aW1lLS07XG4gICAgICAgICAgICB0aGlzLnRpbWVyQmFyLnByb2dyZXNzID0gdGltZS90aGlzLmxldmVsRGF0YS50aW1lci5tZW1vcml6ZVRpbWU7XG4gICAgICAgICAgICBpZih0aW1lID09PSAtMSl7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuaXNUb3VjaEJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZmxpcEFsbENhcmRzKCk7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaXNUdXRvaXJhbCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWVUaW1lcigpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBvblBsYXlBZ2FpbkNhbmNlbCgpe1xuICAgICAgICB0aGlzLmdhbWVFbmRBbGVydC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1lRW5kQWxlcnQucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikub25CYWNrKCk7XG5cbiAgICB9XG5cbiAgICBnYW1lRW5kZWQgKCl7XG4gICAgICAgIHRoaXMuZ2FtZUVuZEFsZXJ0LnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgbGV0IGxldmVsID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50TGV2ZWwoKTtcbiAgICAgICAgbGV0IHRvdGFsTGV2ZWxJbk1vZGUgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsSW5mbyh0aGlzLmdhbWVNb2RlKTtcbiAgICAgICAgaWYobGV2ZWwgPT0gdG90YWxMZXZlbEluTW9kZS5sZW5ndGggLTEpe1xuICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiaG9tZVwiKS5zaG93RnV0dXJlRGV0YWlsc1NjcmVlbigpO1xuICAgICAgICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFNjZW5lKEdBTUVfU0NSRUVOLkZVVFVSRV9BTk5PQ01FTlRTKTsgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdFBsYXllZExldmVsXCIsIHRoaXMuX2xldmVsICsgMSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikub25CYWNrKCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikuc3RhcnRHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG5cbiAgICAvLyBBTklNQVRJT04gQ0FMTEJBQ0tTIDpcbiAgICBwbGF5Qm91bnNBbmltYXRpb24oaXNGcm9tUG93ZXJVcCA9IGZhbHNlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJpcyBmcm9tIHBvcHdlIHVwIFwiLCBpc0Zyb21Qb3dlclVwKTtcbiAgICAgICAgbGV0IGFkZGl0b25Qb2ludHMgPSBpc0Zyb21Qb3dlclVwID8gMTAgOiA1O1xuICAgICAgICB0aGlzLmJvdW5zUG9pbnRzICs9IGFkZGl0b25Qb2ludHM7XG4gICAgICAgIHRoaXMuYm91bnMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJvdW5zLm5vZGUucG9zaXRpb24gID0gbmV3IGNjLlZlYzIoMCwwKTtcbiAgICAgICAgdGhpcy5ib3Vucy5ub2RlLnNjYWxlID0gMjtcbiAgICAgICAgdGhpcy5ib3Vucy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IGArJHthZGRpdG9uUG9pbnRzfWA7XG4gICAgICAgIHRoaXMuYm91bnMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLmJvdW5zLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuXG4gICAgfVxuICAgIGJvdW5zQW5pbWF0aW9uQ29tcGxldGVkICgpe1xuICAgICAgICB0aGlzLmJvdW5zLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG90YWxUaW1lICs9IHRoaXMuYm91bnNQb2ludHMvL3RoaXMubGV2ZWxEYXRhLnRpbWVyLmJvdW5zVGltZTtcbiAgICAgICAgdGhpcy5vcHRpb25MYXllci5nZXRDb21wb25lbnQoXCJvcHRpb25zXCIpLnVwZGF0ZVRpbWVyKHRoaXMuX3RpbWVyLCAgdGhpcy50b3RhbFRpbWUpO1xuICAgICAgICB0aGlzLmlzVG91Y2hCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYm91bnNQb2ludHMgPSAwO1xuICAgIH1cbiAgICBzaG93VHV0b3JpYWxzKCl7XG4gICAgICAgIHRoaXMuZ2FtZVR1dG9yaWFscyA9IGNjLmluc3RhbnRpYXRlKHRoaXMudHV0b3JpYWxzKTtcbiAgICAgICAgdGhpcy5nYW1lVHV0b3JpYWxzLmdldENvbXBvbmVudChcInR1dG9yaWFsc1wiKS5zZXREZWxlZ2F0ZSh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lVHV0b3JpYWxzLmdldENvbXBvbmVudChcInR1dG9yaWFsc1wiKS5zaG93TWVtb3Jpc2VUaW1lKHRoaXMubGV2ZWxEYXRhLnRpbWVyLm1lbW9yaXplVGltZSk7XG4gICAgICAgIHRoaXMuaGFuZC5zZXRQb3NpdGlvbigwLDApO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHRoaXMuZ2FtZVR1dG9yaWFscywgMTAwKTtcbiAgICAgICAgXG4gICAgfVxuICAgIGNvbnRpbnVlVHV0b3JpYWwoKXtcbiAgICAgICAgdGhpcy5nYW1lVHV0b3JpYWxzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZVR1dG9yaWFscy5nZXRDb21wb25lbnQoXCJ0dXRvcmlhbHNcIikubW92ZVRvTmV4dFNsaWRlKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBzaG93R2FtZUluc3RydWN0aW9uUG9wVXAoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgdGhpcyB3ZSBoYXZlIHRvIHNlZSB0aGUgXCIpO1xuICAgICAgICB0aGlzLmdhbWVTdGFydEFsZXJ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgc3RvcFR1dG9yaWFscygpe1xuICAgICAgICB0aGlzLmlzVHV0b2lyYWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50dXRvcmlhbENhcmRzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0QWxlcnQucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICBmb3IobGV0IGNoaWxkIG9mIHRoaXMuZ2FtZUxheW91dC5ub2RlLmNoaWxkcmVuKXtcbiAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KCdjYXJkcycpLmRpc2FibGVPdmVybGF5KCk7XG4gICAgICAgICB9XG4gICAgICAgICB0aGlzLl90aW1lciA9IDA7XG4gICAgICAgICB0aGlzLnN0YXJ0R2FtZVRpbWVyKCk7XG4gICAgfSBcbiAgICBhZEhhc2JlZW5TaG93bigpe1xuXG4gICAgfVxuICAgIGlzVHV0b3JpYWxQbGF5aW5nKCl7XG4gICAgICAgcmV0dXJuIHRoaXMuaXNUdXRvaXJhbDtcbiAgICB9XG4gICAgcmVtb3ZlSGludFBvcFVwKCl7XG4gICAgICAgdGhpcy5nYW1lRW5kQWxlcnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgdGhpcy5zdGFydEdhbWVUaW1lcigpO1xuICAgICAgIHRoaXMub3B0aW9uTGF5ZXIuZ2V0Q29tcG9uZW50KCdvcHRpb25zJykudXBkYXRlSGluZFRleHQoKTtcbiAgICB9XG4gICAgc2hvd0hpbnRQb3BVUCh0eXBlKXtcbiAgICAgICBjb25zb2xlLmxvZyhcImNjLnN5cy5nZXROZXR3b3JrVHlwZSgpXCIsIGNjLnN5cy5nZXROZXR3b3JrVHlwZSgpLCAgY2Muc3lzLk5ldHdvcmtUeXBlLkxBTiwgY2Muc3lzLk5ldHdvcmtUeXBlLldXQU4pXG4gICAgaWYgKGNjLnN5cy5nZXROZXR3b3JrVHlwZSgpID09IGNjLnN5cy5OZXR3b3JrVHlwZS5MQU4gfHwgY2Muc3lzLmdldE5ldHdvcmtUeXBlKCkgPT0gY2Muc3lzLk5ldHdvcmtUeXBlLldXQU4pe1xuICAgICAgICB0aGlzLmdhbWVFbmRBbGVydC5nZXRDb21wb25lbnQoXCJnYW1lRW5kXCIpLnNob3dQb3BVcEZvcih0eXBlLCB0aGlzLl9sZXZlbCk7XG4gICAgICAgIHRoaXMuZ2FtZUVuZEFsZXJ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBlcnJvciBwb3AgdXBcIix0aGlzLm5ldEVycm9yKTtcbiAgICAgICAgdGhpcy5zaG93TmV0RXJyb1BvcFVQKCk7XG4gICAgfVxuICAgICAgXG4gICAgfVxuICAgIHNob3dOZXRFcnJvUG9wVVAoKXtcblxuICAgICAgIHRoaXMubmV0RXJyb3IuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgIHRoaXMubmV0RXJyb3IuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdHJpbmcoJ29wZW5OZXQnKTtcbiAgICAgICBjYy50d2Vlbih0aGlzLm5ldEVycm9yKVxuICAgICAgIC5kZWxheSgyKVxuICAgICAgIC5jYWxsKCgpPT4gdGhpcy5uZXRFcnJvci5hY3RpdmUgPSBmYWxzZSlcbiAgICAgICAuc3RhcnQoKTtcbiAgICB9XG4gICAgb3BlblBhaXJDYXJkcygpe1xuXG4gICAgbGV0IGhpZGRlbkNhcmRzICA9IFtdO1xuICAgIGxldCB0YXJnZXRDYXJkID0gbnVsbDtcblxuICAgIFxuICAgIGlmKHRoaXMuY2FyZHNJblBhaXIubGVuZ3RoID09IHRoaXMuZ3JvdXBPZiB8fCB0aGlzLmlzVG91Y2hCbG9ja2VkKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGVhc2UuIHJldHVyblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuY2FyZHNJblBhaXIubGVuZ3RoIT0wICYmIHRoaXMuY2FyZHNJblBhaXIubGVuZ3RoIDw9IHRoaXMuZ3JvdXBPZil7XG4gICAgICAgIGhpZGRlbkNhcmRzID0gdGhpcy5jYXJkc0luUGFpcjtcbiAgICB9ZWxzZXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbm5zaWRlIGVsc2VcIik7XG4gICAgICAgICAgaGlkZGVuQ2FyZHMgPSAgdGhpcy5nYW1lTGF5b3V0Lm5vZGUuY2hpbGRyZW4uZmlsdGVyKGl0ZW0gPT4gICFpdGVtLmdldENvbXBvbmVudCgnY2FyZHMnKS5pc09wZW4oKSk7ICBcbiAgICB9XG5cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiaGlkZGVuIGNhcmRzIGhlaGhlaGVcIiwgaGlkZGVuQ2FyZHMsIHRoaXMuY2FyZHNJblBhaXIpO1xuICAgIGlmKGhpZGRlbkNhcmRzLmxlbmd0aCA+IDApe1xuICAgICAgbGV0IGNhcmQgPSBoaWRkZW5DYXJkc1swXTtcbiAgICAgIGxldCBwYWlycyA9ICB0aGlzLmdhbWVMYXlvdXQubm9kZS5jaGlsZHJlbi5maWx0ZXIoaXRlbSA9PiBcbiAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KCdjYXJkcycpLmdldENhcmROYW1lKCkgPT0gIGNhcmQuZ2V0Q29tcG9uZW50KCdjYXJkcycpLmdldENhcmROYW1lKCkgKTsgXG4gICAgLy8gICBjb25zb2xlLmxvZyhcInBhaXJzXCIsIHBhaXJzLCBjYXJkLmdldENvbXBvbmVudCgnY2FyZHMnKS5nZXRDYXJkTmFtZSgpKTtcbiAgICAgIHBhaXJzLmZvckVhY2goY2FyZD0+e1xuICAgICAgICAgIGlmKCFjYXJkLmdldENvbXBvbmVudCgnY2FyZHMnKS5pc09wZW4oKSl7XG4gICAgICAgICAgICB0aGlzLnNob3dDYXJkKGNhcmQpXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAgICAgXG4gICAgICAgXG4gICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgIFxuICAgICBcbiAgICB9XG4gICAgc2hvd1RlblNlY29uZHNQb3BVcCgpe1xuICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHRoaXMgd2UgaGF2ZSB0byBzaG93IHRlbiBzZWNvbmRzIHRpbWVyIGhlcmUgaGVoZVwiLCBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3RUZW5TZWNvbmRzXCIpKSk7XG4gICAgICAgaWYoIUpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdFRlblNlY29uZHNcIikpKXtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdFRlblNlY29uZHNcIiwgdHJ1ZSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiaG9tZVwiKS5zaG93TGFzdFNlY29uZHNQb3BVcCgpO1xuICAgIH1cbiAgICB9XG5cbiAgIGhpZGVUZW5TZWNvbmRzUG9wVXAoKXtcbiAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikuaGlkZUxhc3RTZWNvbmRzUG9wVXAoKTtcbiAgICB0aGlzLnN0YXJ0R2FtZVRpbWVyKCk7XG4gICB9XG5cblxuXG4gICAgXG5cblxuXG4gICAgXG5cblxuXG5cblxuXG5cbiAgIFxuXG59XG4iXX0=