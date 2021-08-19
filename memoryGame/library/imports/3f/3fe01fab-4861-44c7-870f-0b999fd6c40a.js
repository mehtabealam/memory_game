"use strict";
cc._RF.push(module, '3fe01+rSGFEx4cPC5mf1sQK', 'home');
// scripts/home/home.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameScreen = constants_1.GAME_SCREEN.HOME;
        _this.gameMode = "";
        _this.letloadCount = 0;
        _this.isAfterTerms = false;
        _this.isforSetting = false;
        _this.modeLayout = null;
        _this.hud = null;
        _this.howToPlayPopUp = null;
        _this.modeSelectionNode = null;
        _this.levelSelectionNode = null;
        _this.gameplayNode = null;
        _this.scrollViewLayout = null;
        _this.levelHolderPrefab = null;
        _this.scrollView = null;
        _this.musicClip = null;
        _this.privacyPolicy = null;
        _this.buttonPressed = null;
        _this.bottomBar = null;
        _this.futureDetailsPrefab = null;
        _this.settings = null;
        _this.terms = null;
        _this.dailyRewards = null;
        _this.loader = null;
        _this.lastTenSeconds = null;
        return _this;
    }
    Home.prototype.onLoad = function () {
    };
    Home.prototype.start = function () {
        var _this = this;
        console.log("start", constants_1.GAME_SCREEN.HOME);
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.HOME);
        this.terms.zIndex = 10;
        this.dailyRewards.zIndex = 9;
        this.settings.zIndex = 9;
        this.settings.getComponent("settings").init(this);
        this.howToPlayPopUp.zIndex = 7;
        // this.moreInfo.zIndex =7;
        this.loader.zIndex = 12;
        this.privacyPolicy.zIndex = 50;
        this.lastTenSeconds.zIndex = 60;
        // this.privacyPolicy.getComponent("policy").setTerm();
        // this.privacyPolicy.getComponent("policy").setPrivacy();
        this.terms.active = !JSON.parse(cc.sys.localStorage.getItem("hasTermAccepted"));
        console.log("active", this.terms.active, cc.sys.localStorage.getItem("hasTermAccepted"));
        cc.game.emit("onLanguageChanged");
        this.setupUI();
        this.setLevelInfoInLS();
        this.startImageLoading();
        cc.debug.setDisplayStats(false);
        SoundManager_1.default.getInstance().init(this.musicClip);
        if (!cc.sys.localStorage.getItem("Sound")) {
            cc.sys.localStorage.setItem("Sound", false);
        }
        if (cc.sys.isMobile) {
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (ev) {
                if (ev.keyCode === cc.macro.KEY.back) {
                    _this.onBack();
                }
            });
        }
    };
    Home.prototype.setupUI = function () {
        this.setHud();
        this.modeSelectionNode.zIndex = 5;
        this.levelSelectionNode.zIndex = 6;
        this.futureDetails = cc.instantiate(this.futureDetailsPrefab);
        this.futureDetails.zIndex = 6;
        this.futureDetails.active = false;
        this.futureDetails.getComponent("gameFutureDetails").setDelegatScript(this);
        this.dailyRewards.getComponent("dailyRewards").setDelegate(this);
        this.node.addChild(this.futureDetails);
        // this.addLevelsInLevelSelection();
        // MARK: SHOWING BANNER ADS
        if (cc.sys.isMobile) {
            // sdkbox.PluginShare.init();
            AdManager_1.default.getInstance().init();
            AdManager_1.default.getInstance().setTestDevice('12FA347A3FF2FE36F7A2E2AB230AC410');
            AdManager_1.default.getInstance().cacheAds('gameover');
            // AdManager.getInstance().cacheAds('banner');
        }
        if (!this.terms.active) {
            // check the last time daily reward wag given 
            var rewardGivenAt = cc.sys.localStorage.getItem("rewardClaimDate");
            var today = GameManager_1.GameManager.getInstance().getCurrentDate();
            console.log("today", today, rewardGivenAt);
            if (rewardGivenAt != today) {
                console.log("show daily reward pop up");
                this.dailyRewards.active = true;
            }
            else {
                this.startGame();
            }
        }
    };
    Home.prototype.onAnimationEnd = function () {
        console.log("animation ended");
    };
    Home.prototype.setHud = function () {
        this.hudLayer = cc.instantiate(this.hud);
        this.node.addChild(this.hudLayer);
        this.hudLayer.getComponent("hud").setDelegate(this);
        this.hudLayer.zIndex = 1;
        this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
    };
    Home.prototype.showDailyRewards = function () {
        this.dailyRewards.active = true;
    };
    Home.prototype.showLevelSelection = function () {
        if (this.levelSelectionNode.active) {
            return;
        }
        this.levelSelectionNode.active = true;
        this.setLevelSelectionScreen();
        this.gameScreen == constants_1.GAME_SCREEN.SETTINGS && GameManager_1.GameManager.getInstance().popScene();
        this.gameScreen == constants_1.GAME_SCREEN.GAME_PLAY && GameManager_1.GameManager.getInstance().popScene();
        this.changeSceneVisiblity(this.gameScreen, false);
        this.gameScreen = constants_1.GAME_SCREEN.LEVEL_SELECTION;
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.LEVEL_SELECTION);
    };
    //button callbacks:
    Home.prototype.showHowToPlayPopUp = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.howToPlayPopUp.active = true;
        this.howToPlayPopUp.getChildByName("Post").getComponent(cc.Animation).play();
    };
    Home.prototype.removeHowToPlayPopUp = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.howToPlayPopUp.active = false;
    };
    Home.prototype.addLevelsInLevelSelection = function () {
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        this.scrollViewLayout.node.removeAllChildren();
        var totalFrame = Math.ceil(levels.length / 10);
        for (var i = 0; i < totalFrame; i++) {
            var levelHolder = cc.instantiate(this.levelHolderPrefab);
            levelHolder.getComponent("levelUIManager").setDelegateComponent(this);
            levelHolder.getComponent("levelUIManager").populateLevels(i * 10);
            this.scrollViewLayout.node.addChild(levelHolder);
        }
    };
    Home.prototype.setLevelSelectionScreen = function () {
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        this.scrollViewLayout.node.removeAllChildren();
        var totalFrame = Math.ceil(levels.length / 10);
        for (var i = 0; i < totalFrame; i++) {
            var levelHolder = cc.instantiate(this.levelHolderPrefab);
            levelHolder.getComponent("levelUIManager").setDelegateComponent(this);
            levelHolder.getComponent("levelUIManager").populateLevels(i * 10);
            this.scrollViewLayout.node.addChild(levelHolder);
        }
        if (totalFrame == 1) {
            this.scrollViewLayout.node.children[0].width = 1000;
            this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = true;
            this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
            this.scrollViewLayout.updateLayout();
        }
        else {
            this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = false;
            this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
        }
        var levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var levelsInfoForMode = JSON.parse(levelsInfo.level);
        var lastUnlockedLevel = 0;
        for (var _i = 0, levelsInfoForMode_1 = levelsInfoForMode; _i < levelsInfoForMode_1.length; _i++) {
            var item = levelsInfoForMode_1[_i];
            if (!item.isUnlock) {
                break;
            }
            lastUnlockedLevel++;
        }
        var frame = Math.ceil(lastUnlockedLevel / 10);
        var offset = this.scrollView.getScrollOffset();
        var offsetPercent = (frame - 1) * (1 / (this.scrollViewLayout.node.childrenCount - 1));
        this.levelSelectionNode.getComponent(cc.Animation).play("moveIn");
    };
    Home.prototype.onBack = function () {
        var currentScene = GameManager_1.GameManager.getInstance().popScene();
        var lastScene = GameManager_1.GameManager.getInstance().popScene();
        console.log("curerntScene", currentScene, lastScene);
        if (currentScene == constants_1.GAME_SCREEN.HOME) {
            cc.game.end();
            return;
        }
        else if (currentScene == constants_1.GAME_SCREEN.FUTURE_ANNOCMENTS) {
            GameManager_1.GameManager.getInstance().removeAllScene();
            this.levelSelectionNode.active = false;
            this.settings.active = false;
            this.gameplayNode.active = false;
            this.modeSelectionNode.active = true;
            this.gameScreen = constants_1.GAME_SCREEN.HOME;
            GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.HOME);
            return;
        }
        this.hudLayer.zIndex = 1;
        this.gameScreen = lastScene;
        this.changeSceneVisiblity(currentScene, false);
        this.changeSceneVisiblity(lastScene, true);
        GameManager_1.GameManager.getInstance().pushScene(lastScene);
        console.log("scene arra", GameManager_1.GameManager.getInstance().screen);
    };
    Home.prototype.changeSceneVisiblity = function (currentScene, isActive) {
        console.log("scnenes", currentScene, isActive);
        switch (currentScene) {
            case constants_1.GAME_SCREEN.LEVEL_SELECTION:
                this.levelSelectionNode.active = isActive;
                isActive && this.setLevelSelectionScreen();
                break;
            case constants_1.GAME_SCREEN.SETTINGS:
                this.settings.getComponent('settings').closeAllPopUps();
                this.settings.active = isActive;
                this.isforSetting = isActive;
                break;
            case constants_1.GAME_SCREEN.GAME_PLAY:
                this.gameplayNode.active = isActive;
                break;
            case constants_1.GAME_SCREEN.HOME:
                this.modeSelectionNode.active = isActive;
                break;
        }
    };
    Home.prototype.startGame = function () {
        // disable the last scne pushed 
        var lastPlayedLevel = cc.sys.localStorage.getItem("lastPlayedLevel");
        console.log("last played level", lastPlayedLevel);
        this.onLevelSelect(lastPlayedLevel);
    };
    Home.prototype.onLevelSelect = function (level) {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        GameManager_1.GameManager.getInstance().setCurrentLevel(parseInt(level));
        cc.sys.localStorage.setItem("lastPlayedLevel", parseInt(level));
        this.changeSceneVisiblity(this.gameScreen, false);
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.GAME_PLAY);
        console.log("we have pushed game scene", GameManager_1.GameManager.getInstance().screen);
        this.gameScreen = constants_1.GAME_SCREEN.GAME_PLAY;
        this.levelSelectionNode.active = false;
        this.modeSelectionNode.active = false;
        this.gameplayNode.active = true;
        this.gameplayNode
            .getComponent("gamePlay")
            .setUpUI(GameManager_1.GameManager.getInstance().getCurrentLevel());
    };
    Home.prototype.onLevelAnimationCompleted = function () {
        if (this.gameScreen == constants_1.GAME_SCREEN.GAME_PLAY) {
        }
    };
    /**
     *
     *
     * data is stored in this mannor in the local storage
     * LevelInfo = {
     * "levels" :[{time :100, isUnlock : true} , ... ]
     *
     *  * }
     *
     */
    Home.prototype.setLevelInfoInLS = function () {
        if (!cc.sys.localStorage.getItem("LevelInfo")) {
            cc.sys.localStorage.setItem("LevelInfo", JSON.stringify({}));
        }
        var levelInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var totalLevels = GameManager_1.GameManager.getInstance().getLevelInfo().length;
        var levelObj = { time: 500, isUnlock: false };
        if (!levelInfo.level) {
            var levelObjectArray = [];
            for (var i = 0; i < totalLevels; i++) {
                levelObjectArray[i] = Object.assign({ id: i }, levelObj);
            }
            levelObjectArray[0].isUnlock = true;
            console.log(levelObjectArray[0] === levelObjectArray[1]);
            levelInfo["level"] = JSON.stringify(levelObjectArray);
        }
        else {
            // New Level added in the json file
            var levelArray_1 = JSON.parse(levelInfo.level);
            if (levelArray_1.length < totalLevels) {
                var difference = GameManager_1.GameManager.getInstance().getLevelInfo().filter(function (item) { return !levelArray_1.some(function (data) { return data.id == item.id; }); });
                var timeArray = [];
                for (var i = 0; i < difference.length; i++) {
                    timeArray[i] = Object.assign({ id: difference[i].id }, levelObj);
                }
                console.log("time ArraY", timeArray);
                levelArray_1.push.apply(levelArray_1, timeArray);
                console.log("time ArraY", levelArray_1);
            }
            else {
                // OLD Level removed from the json file
                var difference_1 = levelArray_1.filter(function (item) { return !GameManager_1.GameManager.getInstance().getLevelInfo().some(function (data) { return data.id == item.id; }); });
                console.log("difference", difference_1);
                var _loop_1 = function (i) {
                    var index = levelArray_1.findIndex(function (item) { return item.id == difference_1[i].id; });
                    console.log("index", index);
                    if (index != -1) {
                        levelArray_1.splice(index, 1);
                    }
                };
                for (var i = 0; i < difference_1.length; i++) {
                    _loop_1(i);
                }
            }
            // console.log("level Daata", levelArray);
            levelArray_1[0].isUnlock = true;
            levelInfo["level"] = JSON.stringify(levelArray_1);
        }
        cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(levelInfo));
    };
    Home.prototype.onShare = function () {
        if (cc.sys.isBrowser) {
            return;
        }
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shareApp", "(Ljava/lang/String;)V", "Hey I have been playing this amazing game, let's connect there. " + constants_1.GAME_LINK.URL);
    };
    Home.prototype.onMoreGames = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        cc.sys.openURL(constants_1.GAME_LINK.URL);
    };
    Home.prototype.showPrivacyPolicy = function () {
        // this.playLoader();
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        // this.moreInfo.active = false;
        this.privacyPolicy.active = true;
        console.log("show privact plicty");
    };
    Home.prototype.enabledMoreGamesButton = function (isActive) {
        // this.moreInfo.getChildByName("Background").getChildByName("buttonLayout").getChildByName("moreGames").active = isActive;
        this.bottomBar.getChildByName("moreGames").active = isActive;
    };
    Home.prototype.showFutureDetailsScreen = function () {
        this.futureDetails.active = true;
    };
    Home.prototype.openSettings = function () {
        if (this.settings.active) {
            return;
        }
        this.isforSetting = true;
        this.gameScreen == constants_1.GAME_SCREEN.LEVEL_SELECTION && GameManager_1.GameManager.getInstance().popScene();
        this.changeSceneVisiblity(this.gameScreen, false);
        this.gameScreen = constants_1.GAME_SCREEN.SETTINGS;
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.SETTINGS);
        this.settings.active = true;
        this.hudLayer.zIndex = 8;
        console.log(GameManager_1.GameManager.getInstance().screen);
    };
    Home.prototype.onTermsAccept = function () {
        this.terms.active = false;
        this.isAfterTerms = true;
        cc.sys.localStorage.setItem("hasTermAccepted", true);
        this.dailyRewards.active = true;
    };
    Home.prototype.startImageLoading = function () {
        var _this = this;
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        // console.log("eleves", )
        if (this.letloadCount == levels.length) {
            return;
        }
        else {
            GameManager_1.GameManager.getInstance()
                .loadLevelImages(this.letloadCount).then(function () {
                _this.letloadCount++;
                _this.startImageLoading();
            }).catch(function () {
                console.log("error while loading data");
            });
        }
    };
    Home.prototype.onRewardCollected = function () {
        if (!this.isAfterTerms) {
            this.startGame();
        }
    };
    Home.prototype.openTermAndConditions = function () {
        this.privacyPolicy.active = true;
        this.privacyPolicy.getComponent("policy").setTerm(this.loader);
    };
    Home.prototype.openPrivacyPolicy = function () {
        this.privacyPolicy.active = true;
        this.privacyPolicy.getComponent("policy").setPrivacy(this.loader);
    };
    Home.prototype.showLastSecondsPopUp = function () {
        console.log("inside this we are  not going anywhere", cc.sys.localStorage.getItem("lastTenSeconds"));
        this.lastTenSeconds.active = true;
        // if(!cc.sys.localStorage.getItem("lastTenSeconds")){
        //   cc.sys.localStorage.setItem("lastTenSeconds", true);
        // }
    };
    Home.prototype.hideLastSecondsPopUp = function () {
        console.log("inside this last seconds ere are here ");
        this.lastTenSeconds.active = false;
    };
    __decorate([
        property(cc.Layout)
    ], Home.prototype, "modeLayout", void 0);
    __decorate([
        property(cc.Prefab)
    ], Home.prototype, "hud", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "howToPlayPopUp", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "modeSelectionNode", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "levelSelectionNode", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "gameplayNode", void 0);
    __decorate([
        property(cc.Layout)
    ], Home.prototype, "scrollViewLayout", void 0);
    __decorate([
        property(cc.Prefab)
    ], Home.prototype, "levelHolderPrefab", void 0);
    __decorate([
        property(cc.ScrollView)
    ], Home.prototype, "scrollView", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Home.prototype, "musicClip", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "privacyPolicy", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Home.prototype, "buttonPressed", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "bottomBar", void 0);
    __decorate([
        property(cc.Prefab)
    ], Home.prototype, "futureDetailsPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "settings", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "terms", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "dailyRewards", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "loader", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "lastTenSeconds", void 0);
    Home = __decorate([
        ccclass
    ], Home);
    return Home;
}(cc.Component));
exports.default = Home;

cc._RF.pop();