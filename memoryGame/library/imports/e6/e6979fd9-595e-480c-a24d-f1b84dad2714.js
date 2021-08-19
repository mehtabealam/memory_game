"use strict";
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