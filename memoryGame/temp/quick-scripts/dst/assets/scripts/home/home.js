
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/home/home.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hvbWUvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsaURBQXdFO0FBQ3hFLHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFpaEJDO1FBaGhCQyxnQkFBVSxHQUFnQix1QkFBVyxDQUFDLElBQUksQ0FBQztRQUUzQyxjQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBR3JCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBSTdCLFNBQUcsR0FBYyxJQUFJLENBQUM7UUFHdEIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsdUJBQWlCLEdBQVksSUFBSSxDQUFDO1FBR2xDLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUduQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBR3BDLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUdqQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUsvQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUl0QyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBSXpCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFJdEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsWUFBTSxHQUFZLElBQUks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RUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDTztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ2tCO0lBSXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ087SUFJekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUl0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYTtJQXRFWixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBaWhCeEI7SUFBRCxXQUFDO0NBamhCRCxBQWloQkMsQ0FqaEJpQyxFQUFFLENBQUMsU0FBUyxHQWloQjdDO2tCQWpoQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IHsgR0FNRV9NT0RFLCBHQU1FX1NDUkVFTiwgR0FNRV9MSU5LIH0gZnJvbSBcIi4uL2hlbHBlci9jb25zdGFudHNcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJzL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlcnMvQWRNYW5hZ2VyXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIGdhbWVTY3JlZW46IEdBTUVfU0NSRUVOID0gR0FNRV9TQ1JFRU4uSE9NRTtcbiAgaHVkTGF5ZXI6IGNjLk5vZGU7XG4gIGdhbWVNb2RlOiBzdHJpbmcgPSBcIlwiO1xuICBmdXR1cmVEZXRhaWxzIDogY2MuTm9kZTtcbiAgbGV0bG9hZENvdW50ID0gMDtcbiAgaXNBZnRlclRlcm1zID0gZmFsc2U7XG4gIGlzZm9yU2V0dGluZyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eShjYy5MYXlvdXQpXG4gIG1vZGVMYXlvdXQ6IGNjLkxheW91dCA9IG51bGw7XG5cblxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBodWQ6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGhvd1RvUGxheVBvcFVwOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbW9kZVNlbGVjdGlvbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBsZXZlbFNlbGVjdGlvbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBnYW1lcGxheU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5MYXlvdXQpXG4gIHNjcm9sbFZpZXdMYXlvdXQ6IGNjLkxheW91dCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgbGV2ZWxIb2xkZXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIG11c2ljQ2xpcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuXG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHByaXZhY3lQb2xpY3k6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGJ1dHRvblByZXNzZWQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBib3R0b21CYXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGZ1dHVyZURldGFpbHNQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgc2V0dGluZ3M6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHRlcm1zOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBkYWlseVJld2FyZHM6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBsb2FkZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBsYXN0VGVuU2Vjb25kczogY2MuTm9kZSA9IG51bGw7XG5cbiBcbiAgb25Mb2FkKCkge1xuXG5cbiAgICBcblxuICB9XG4gIHN0YXJ0KCkge1xuXG4gICAgY29uc29sZS5sb2coXCJzdGFydFwiLEdBTUVfU0NSRUVOLkhPTUUpO1xuICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFNjZW5lKEdBTUVfU0NSRUVOLkhPTUUpO1xuICAgIHRoaXMudGVybXMuekluZGV4ID0gMTA7XG4gICAgdGhpcy5kYWlseVJld2FyZHMuekluZGV4ID0gOTtcbiAgICB0aGlzLnNldHRpbmdzLnpJbmRleCA9IDk7XG4gICAgdGhpcy5zZXR0aW5ncy5nZXRDb21wb25lbnQoXCJzZXR0aW5nc1wiKS5pbml0KHRoaXMpO1xuICAgIHRoaXMuaG93VG9QbGF5UG9wVXAuekluZGV4ID03O1xuICAgIC8vIHRoaXMubW9yZUluZm8uekluZGV4ID03O1xuICAgIHRoaXMubG9hZGVyLnpJbmRleCA9IDEyO1xuICAgIHRoaXMucHJpdmFjeVBvbGljeS56SW5kZXggPSA1MDtcbiAgICB0aGlzLmxhc3RUZW5TZWNvbmRzLnpJbmRleCA9IDYwO1xuICAgIC8vIHRoaXMucHJpdmFjeVBvbGljeS5nZXRDb21wb25lbnQoXCJwb2xpY3lcIikuc2V0VGVybSgpO1xuICAgIC8vIHRoaXMucHJpdmFjeVBvbGljeS5nZXRDb21wb25lbnQoXCJwb2xpY3lcIikuc2V0UHJpdmFjeSgpO1xuXG4gICAgdGhpcy50ZXJtcy5hY3RpdmUgPSAhSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoYXNUZXJtQWNjZXB0ZWRcIikpO1xuICAgIGNvbnNvbGUubG9nKFwiYWN0aXZlXCIsIHRoaXMudGVybXMuYWN0aXZlLCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoYXNUZXJtQWNjZXB0ZWRcIikpO1xuICAgIFxuXG4gICAgY2MuZ2FtZS5lbWl0KFwib25MYW5ndWFnZUNoYW5nZWRcIik7XG4gICAgdGhpcy5zZXR1cFVJKCk7XG4gICAgdGhpcy5zZXRMZXZlbEluZm9JbkxTKCk7XG4gICAgdGhpcy5zdGFydEltYWdlTG9hZGluZygpO1xuXG4gICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcbiAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLmluaXQodGhpcy5tdXNpY0NsaXApO1xuICAgIGlmICghY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU291bmRcIikpIHtcbiAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlNvdW5kXCIsIGZhbHNlKTtcbiAgICB9IFxuXG5cbiAgICBpZihjYy5zeXMuaXNNb2JpbGUpe1xuICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgKGV2KSA9PiB7XG4gICAgICAgIGlmIChldi5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuYmFjaykge1xuICAgICAgICAgICB0aGlzLm9uQmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNldHVwVUkoKSB7XG4gICAgdGhpcy5zZXRIdWQoKTtcbiAgICB0aGlzLm1vZGVTZWxlY3Rpb25Ob2RlLnpJbmRleCA9IDU7XG4gICAgdGhpcy5sZXZlbFNlbGVjdGlvbk5vZGUuekluZGV4ID0gNjtcbiAgICB0aGlzLmZ1dHVyZURldGFpbHMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZ1dHVyZURldGFpbHNQcmVmYWIpO1xuICAgIHRoaXMuZnV0dXJlRGV0YWlscy56SW5kZXggPSA2O1xuICAgIHRoaXMuZnV0dXJlRGV0YWlscy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmZ1dHVyZURldGFpbHMuZ2V0Q29tcG9uZW50KFwiZ2FtZUZ1dHVyZURldGFpbHNcIikuc2V0RGVsZWdhdFNjcmlwdCh0aGlzKTtcbiAgICB0aGlzLmRhaWx5UmV3YXJkcy5nZXRDb21wb25lbnQoXCJkYWlseVJld2FyZHNcIikuc2V0RGVsZWdhdGUodGhpcyk7XG4gICAgdGhpcy5ub2RlLmFkZENoaWxkKCB0aGlzLmZ1dHVyZURldGFpbHMpXG4gICAgLy8gdGhpcy5hZGRMZXZlbHNJbkxldmVsU2VsZWN0aW9uKCk7XG4gIFxuXG4gICAgLy8gTUFSSzogU0hPV0lORyBCQU5ORVIgQURTXG4gICAgaWYoY2Muc3lzLmlzTW9iaWxlKXtcbiAgICAgIC8vIHNka2JveC5QbHVnaW5TaGFyZS5pbml0KCk7XG4gICAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pbml0KCk7XG4gICAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZXRUZXN0RGV2aWNlKCcxMkZBMzQ3QTNGRjJGRTM2RjdBMkUyQUIyMzBBQzQxMCcpO1xuICAgICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FjaGVBZHMoJ2dhbWVvdmVyJyk7XG4gICAgICAvLyBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYWNoZUFkcygnYmFubmVyJyk7XG4gICAgfVxuXG5cblxuICAgIGlmKCF0aGlzLnRlcm1zLmFjdGl2ZSl7XG4gICAgICAvLyBjaGVjayB0aGUgbGFzdCB0aW1lIGRhaWx5IHJld2FyZCB3YWcgZ2l2ZW4gXG4gICAgICBsZXQgcmV3YXJkR2l2ZW5BdCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJld2FyZENsYWltRGF0ZVwiKTtcbiAgICAgIGxldCB0b2RheSA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudERhdGUoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidG9kYXlcIiwgdG9kYXkscmV3YXJkR2l2ZW5BdCApO1xuICAgICAgaWYocmV3YXJkR2l2ZW5BdCAhPSB0b2RheSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBkYWlseSByZXdhcmQgcG9wIHVwXCIpXG4gICAgICAgIHRoaXMuZGFpbHlSZXdhcmRzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuXG4gIH1cblxuICBvbkFuaW1hdGlvbkVuZCAoKXtcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hdGlvbiBlbmRlZFwiKTtcbiAgfVxuIFxuXG4gIHNldEh1ZCgpIHtcbiAgICB0aGlzLmh1ZExheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5odWQpO1xuICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLmh1ZExheWVyKTtcbiAgICB0aGlzLmh1ZExheWVyLmdldENvbXBvbmVudChcImh1ZFwiKS5zZXREZWxlZ2F0ZSh0aGlzKTtcbiAgICB0aGlzLmh1ZExheWVyLnpJbmRleCA9IDE7XG4gICAgdGhpcy5odWRMYXllci5nZXRDb21wb25lbnQoXCJodWRcIikuc2V0VmlzaWJsaXR5KHRoaXMuZ2FtZVNjcmVlbik7XG4gIH1cblxuICBzaG93RGFpbHlSZXdhcmRzKCl7XG4gICAgdGhpcy5kYWlseVJld2FyZHMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHNob3dMZXZlbFNlbGVjdGlvbigpe1xuICAgIGlmKHRoaXMubGV2ZWxTZWxlY3Rpb25Ob2RlLmFjdGl2ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgXG4gICAgdGhpcy5sZXZlbFNlbGVjdGlvbk5vZGUuYWN0aXZlID0gdHJ1ZTsgIFxuICAgIHRoaXMuc2V0TGV2ZWxTZWxlY3Rpb25TY3JlZW4oKTtcbiAgICB0aGlzLmdhbWVTY3JlZW4gPT0gR0FNRV9TQ1JFRU4uU0VUVElOR1MgJiYgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wb3BTY2VuZSgpO1xuICAgIHRoaXMuZ2FtZVNjcmVlbiA9PSBHQU1FX1NDUkVFTi5HQU1FX1BMQVkgJiYgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wb3BTY2VuZSgpO1xuICAgIHRoaXMuY2hhbmdlU2NlbmVWaXNpYmxpdHkodGhpcy5nYW1lU2NyZWVuLCBmYWxzZSk7XG4gICAgdGhpcy5nYW1lU2NyZWVuID0gR0FNRV9TQ1JFRU4uTEVWRUxfU0VMRUNUSU9OO1xuICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFNjZW5lKEdBTUVfU0NSRUVOLkxFVkVMX1NFTEVDVElPTik7XG4gXG4gIH1cblxuXG4gIC8vYnV0dG9uIGNhbGxiYWNrczpcbiAgc2hvd0hvd1RvUGxheVBvcFVwKCkge1xuICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5idXR0b25QcmVzc2VkLCBmYWxzZSk7XG4gICAgdGhpcy5ob3dUb1BsYXlQb3BVcC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuaG93VG9QbGF5UG9wVXAuZ2V0Q2hpbGRCeU5hbWUoXCJQb3N0XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgfVxuXG4gIHJlbW92ZUhvd1RvUGxheVBvcFVwKCkge1xuICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5idXR0b25QcmVzc2VkLCBmYWxzZSk7XG4gICAgdGhpcy5ob3dUb1BsYXlQb3BVcC5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG5cbiAgYWRkTGV2ZWxzSW5MZXZlbFNlbGVjdGlvbigpe1xuICAgIGxldCBsZXZlbHMgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsSW5mbygpO1xuICAgIHRoaXMuc2Nyb2xsVmlld0xheW91dC5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgbGV0IHRvdGFsRnJhbWUgPSBNYXRoLmNlaWwobGV2ZWxzLmxlbmd0aCAvIDEwKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgIHRvdGFsRnJhbWU7IGkrKyl7XG4gICAgICBsZXQgbGV2ZWxIb2xkZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxldmVsSG9sZGVyUHJlZmFiKTtcbiAgICAgIGxldmVsSG9sZGVyLmdldENvbXBvbmVudChcImxldmVsVUlNYW5hZ2VyXCIpLnNldERlbGVnYXRlQ29tcG9uZW50KHRoaXMpO1xuICAgICAgbGV2ZWxIb2xkZXIuZ2V0Q29tcG9uZW50KFwibGV2ZWxVSU1hbmFnZXJcIikucG9wdWxhdGVMZXZlbHMoaSAqIDEwKTtcbiAgICAgIHRoaXMuc2Nyb2xsVmlld0xheW91dC5ub2RlLmFkZENoaWxkKGxldmVsSG9sZGVyKTtcbiAgICB9XG4gIH1cblxuICBzZXRMZXZlbFNlbGVjdGlvblNjcmVlbigpIHtcbiAgICBsZXQgbGV2ZWxzID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbEluZm8oKTtcbiAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIGxldCB0b3RhbEZyYW1lID0gTWF0aC5jZWlsKGxldmVscy5sZW5ndGggLyAxMCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8ICB0b3RhbEZyYW1lOyBpKyspe1xuICAgICAgbGV0IGxldmVsSG9sZGVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbEhvbGRlclByZWZhYik7XG4gICAgICBsZXZlbEhvbGRlci5nZXRDb21wb25lbnQoXCJsZXZlbFVJTWFuYWdlclwiKS5zZXREZWxlZ2F0ZUNvbXBvbmVudCh0aGlzKTtcbiAgICAgIGxldmVsSG9sZGVyLmdldENvbXBvbmVudChcImxldmVsVUlNYW5hZ2VyXCIpLnBvcHVsYXRlTGV2ZWxzKGkgKiAxMCk7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5hZGRDaGlsZChsZXZlbEhvbGRlcik7XG4gICAgfVxuICAgIGlmKHRvdGFsRnJhbWUgPT0gMSl7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5jaGlsZHJlblswXS53aWR0aCA9IDEwMDA7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IHRydWU7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQudXBkYXRlTGF5b3V0KCk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5zY3JvbGxWaWV3TGF5b3V0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgIH1cblxuICAgIGxldCBsZXZlbHNJbmZvID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMZXZlbEluZm9cIikpO1xuICAgIGxldCBsZXZlbHNJbmZvRm9yTW9kZSA9IEpTT04ucGFyc2UobGV2ZWxzSW5mby5sZXZlbCk7XG5cbiAgICBsZXQgbGFzdFVubG9ja2VkTGV2ZWwgPSAwO1xuICAgIGZvcihsZXQgaXRlbSBvZiBsZXZlbHNJbmZvRm9yTW9kZSl7XG4gICAgICBpZighaXRlbS5pc1VubG9jayl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbGFzdFVubG9ja2VkTGV2ZWwrKztcbiAgICB9XG5cblxuICAgXG4gICAgbGV0IGZyYW1lID0gTWF0aC5jZWlsKGxhc3RVbmxvY2tlZExldmVsLzEwKTtcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpO1xuICAgIGxldCBvZmZzZXRQZXJjZW50ID0gKGZyYW1lIC0gMSkgKiAoMSAvICh0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5jaGlsZHJlbkNvdW50IC0gMSkpOyAgIFxuICAgIHRoaXMubGV2ZWxTZWxlY3Rpb25Ob2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtb3ZlSW5cIik7XG5cbiAgfVxuXG4gIG9uQmFjaygpIHtcbiAgICBsZXQgY3VycmVudFNjZW5lID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wb3BTY2VuZSgpO1xuICAgIGxldCBsYXN0U2NlbmUgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBvcFNjZW5lKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImN1cmVybnRTY2VuZVwiLCBjdXJyZW50U2NlbmUsIGxhc3RTY2VuZSk7XG4gICAgaWYoY3VycmVudFNjZW5lID09IEdBTUVfU0NSRUVOLkhPTUUpe1xuICAgICAgY2MuZ2FtZS5lbmQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZihjdXJyZW50U2NlbmUgPT0gR0FNRV9TQ1JFRU4uRlVUVVJFX0FOTk9DTUVOVFMpe1xuICAgICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZW1vdmVBbGxTY2VuZSgpO1xuICAgICAgdGhpcy5sZXZlbFNlbGVjdGlvbk5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5nYW1lcGxheU5vZGUuYWN0aXZlID0gZmFsc2U7ICBcbiAgICAgIHRoaXMubW9kZVNlbGVjdGlvbk5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2FtZVNjcmVlbiA9IEdBTUVfU0NSRUVOLkhPTUU7XG4gICAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hTY2VuZShHQU1FX1NDUkVFTi5IT01FKTtcbiAgICAgIHJldHVybjtcblxuICAgIH1cbiAgICB0aGlzLmh1ZExheWVyLnpJbmRleCA9IDE7XG4gICAgdGhpcy5nYW1lU2NyZWVuID0gbGFzdFNjZW5lO1xuICAgIHRoaXMuY2hhbmdlU2NlbmVWaXNpYmxpdHkoY3VycmVudFNjZW5lLCBmYWxzZSk7XG4gICAgdGhpcy5jaGFuZ2VTY2VuZVZpc2libGl0eShsYXN0U2NlbmUsIHRydWUpO1xuICAgIFxuICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFNjZW5lKGxhc3RTY2VuZSk7XG4gICAgY29uc29sZS5sb2coXCJzY2VuZSBhcnJhXCIsR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zY3JlZW4gKVxuICB9XG5cbiAgY2hhbmdlU2NlbmVWaXNpYmxpdHkoY3VycmVudFNjZW5lLCBpc0FjdGl2ZSl7XG4gICAgY29uc29sZS5sb2coXCJzY25lbmVzXCIsY3VycmVudFNjZW5lLCBpc0FjdGl2ZSlcbiAgICBzd2l0Y2goY3VycmVudFNjZW5lKXtcbiAgICAgIGNhc2UgR0FNRV9TQ1JFRU4uTEVWRUxfU0VMRUNUSU9OOlxuICAgICAgICB0aGlzLmxldmVsU2VsZWN0aW9uTm9kZS5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICAgICAgaXNBY3RpdmUgJiYgdGhpcy5zZXRMZXZlbFNlbGVjdGlvblNjcmVlbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgR0FNRV9TQ1JFRU4uU0VUVElOR1M6XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZ2V0Q29tcG9uZW50KCdzZXR0aW5ncycpLmNsb3NlQWxsUG9wVXBzKCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICAgIHRoaXMuaXNmb3JTZXR0aW5nID0gaXNBY3RpdmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBHQU1FX1NDUkVFTi5HQU1FX1BMQVk6XG4gICAgICAgICB0aGlzLmdhbWVwbGF5Tm9kZS5hY3RpdmUgPSBpc0FjdGl2ZTsgIFxuICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEdBTUVfU0NSRUVOLkhPTUU6XG4gICAgICAgIHRoaXMubW9kZVNlbGVjdGlvbk5vZGUuYWN0aXZlID0gaXNBY3RpdmU7ICAgXG4gICAgICAgICAgYnJlYWs7ICBcblxuICAgICAgXG4gICAgfVxuICB9XG5cblxuXG4gIHN0YXJ0R2FtZSgpe1xuICAgIC8vIGRpc2FibGUgdGhlIGxhc3Qgc2NuZSBwdXNoZWQgXG4gICAgbGV0IGxhc3RQbGF5ZWRMZXZlbCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3RQbGF5ZWRMZXZlbFwiKVxuICAgIGNvbnNvbGUubG9nKFwibGFzdCBwbGF5ZWQgbGV2ZWxcIiwgbGFzdFBsYXllZExldmVsKTtcbiAgICB0aGlzLm9uTGV2ZWxTZWxlY3QobGFzdFBsYXllZExldmVsKTtcbiAgfVxuXG4gIG9uTGV2ZWxTZWxlY3QoIGxldmVsOiBzdHJpbmcpIHtcbiAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uUHJlc3NlZCwgZmFsc2UpO1xuICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2V0Q3VycmVudExldmVsKHBhcnNlSW50KGxldmVsKSk7XG4gICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdFBsYXllZExldmVsXCIsIHBhcnNlSW50KGxldmVsKSk7XG4gICAgdGhpcy5jaGFuZ2VTY2VuZVZpc2libGl0eSh0aGlzLmdhbWVTY3JlZW4gLCBmYWxzZSk7XG4gICBcbiAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hTY2VuZShHQU1FX1NDUkVFTi5HQU1FX1BMQVkpO1xuICAgIGNvbnNvbGUubG9nKFwid2UgaGF2ZSBwdXNoZWQgZ2FtZSBzY2VuZVwiLCBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNjcmVlbik7XG4gICAgdGhpcy5nYW1lU2NyZWVuID0gR0FNRV9TQ1JFRU4uR0FNRV9QTEFZO1xuICAgIHRoaXMubGV2ZWxTZWxlY3Rpb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubW9kZVNlbGVjdGlvbk5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLmdhbWVwbGF5Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZ2FtZXBsYXlOb2RlXG4gICAgLmdldENvbXBvbmVudChcImdhbWVQbGF5XCIpXG4gICAgLnNldFVwVUkoIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudExldmVsKCkpO1xuICB9XG5cblxuICBvbkxldmVsQW5pbWF0aW9uQ29tcGxldGVkKCl7XG4gICAgaWYodGhpcy5nYW1lU2NyZWVuID09IEdBTUVfU0NSRUVOLkdBTUVfUExBWSl7XG4gICBcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIFxuICAgKiBkYXRhIGlzIHN0b3JlZCBpbiB0aGlzIG1hbm5vciBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgKiBMZXZlbEluZm8gPSB7XG4gICAqIFwibGV2ZWxzXCIgOlt7dGltZSA6MTAwLCBpc1VubG9jayA6IHRydWV9ICwgLi4uIF0gIFxuICAgKiBcbiAgICogICogfVxuICAgKiBcbiAgICovXG5cbiAgc2V0TGV2ZWxJbmZvSW5MUygpe1xuXG5cbiAgICBpZiAoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxldmVsSW5mb1wiKSkge1xuICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTGV2ZWxJbmZvXCIsIEpTT04uc3RyaW5naWZ5KHt9KSk7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsSW5mbyA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTGV2ZWxJbmZvXCIpKTtcbiAgICBcbiAgICBsZXQgdG90YWxMZXZlbHMgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsSW5mbygpLmxlbmd0aDtcbiAgICAgICAgbGV0IGxldmVsT2JqID0ge3RpbWUgOjUwMCwgaXNVbmxvY2sgOiBmYWxzZX1cbiAgICAgICBpZighbGV2ZWxJbmZvLmxldmVsKSB7XG4gICAgICAgIGxldCBsZXZlbE9iamVjdEFycmF5ID1bXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTwgdG90YWxMZXZlbHM7IGkrKyl7XG4gICAgICAgICAgbGV2ZWxPYmplY3RBcnJheVtpXSA9IE9iamVjdC5hc3NpZ24oe2lkOiBpfSwgbGV2ZWxPYmopO1xuICAgICAgICB9XG4gICAgICAgICBsZXZlbE9iamVjdEFycmF5WzBdLmlzVW5sb2NrID0gdHJ1ZTtcbiAgICAgICAgIGNvbnNvbGUubG9nKGxldmVsT2JqZWN0QXJyYXlbMF09PT1sZXZlbE9iamVjdEFycmF5WzFdKTtcbiAgICAgICAgIGxldmVsSW5mb1tcImxldmVsXCJdID0gSlNPTi5zdHJpbmdpZnkobGV2ZWxPYmplY3RBcnJheSk7IFxuICAgICAgIH1lbHNle1xuXG4gICAgICAgIC8vIE5ldyBMZXZlbCBhZGRlZCBpbiB0aGUganNvbiBmaWxlXG4gICAgICAgICBsZXQgbGV2ZWxBcnJheSA9IEpTT04ucGFyc2UobGV2ZWxJbmZvLmxldmVsKTsgICBcbiAgICAgICAgIGlmKGxldmVsQXJyYXkubGVuZ3RoIDwgdG90YWxMZXZlbHMpe1xuICAgICAgICAgIGxldCBkaWZmZXJlbmNlID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbEluZm8oKS5maWx0ZXIoaXRlbSA9PiAhIGxldmVsQXJyYXkuc29tZShkYXRhID0+IGRhdGEuaWQgPT0gaXRlbS5pZCkpO1xuICAgICAgICAgIGxldCB0aW1lQXJyYXkgPSBbXTtcbiAgICAgICAgICBmb3IobGV0IGkgPTA7IGk8IGRpZmZlcmVuY2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICB0aW1lQXJyYXlbaV0gPSBPYmplY3QuYXNzaWduKHtpZCA6ZGlmZmVyZW5jZVtpXS5pZCB9LCBsZXZlbE9iaik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGltZSBBcnJhWVwiLCB0aW1lQXJyYXkpO1xuICAgICAgICAgIGxldmVsQXJyYXkucHVzaCguLi50aW1lQXJyYXkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGltZSBBcnJhWVwiLCBsZXZlbEFycmF5KTtcbiAgICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgLy8gT0xEIExldmVsIHJlbW92ZWQgZnJvbSB0aGUganNvbiBmaWxlXG4gICAgICAgICAgbGV0IGRpZmZlcmVuY2UgPSBsZXZlbEFycmF5LmZpbHRlcihpdGVtID0+ICEgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbEluZm8oKS5zb21lKGRhdGEgPT4gZGF0YS5pZCA9PSBpdGVtLmlkKSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJkaWZmZXJlbmNlXCIsIGRpZmZlcmVuY2UpO1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IGRpZmZlcmVuY2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gbGV2ZWxBcnJheS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09IGRpZmZlcmVuY2VbaV0uaWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCk7XG4gICAgICAgICAgICBpZihpbmRleCAhPS0xKXtcbiAgICAgICAgICAgICAgIGxldmVsQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGV2ZWwgRGFhdGFcIiwgbGV2ZWxBcnJheSk7XG4gICAgICAgICAgbGV2ZWxBcnJheVswXS5pc1VubG9jayA9IHRydWU7XG4gICAgICAgICAgbGV2ZWxJbmZvW1wibGV2ZWxcIl0gPSBKU09OLnN0cmluZ2lmeShsZXZlbEFycmF5KTtcbiAgICAgIH1cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTGV2ZWxJbmZvXCIsIEpTT04uc3RyaW5naWZ5KGxldmVsSW5mbykpO1xuICB9XG5cblxuICBvblNoYXJlKCl7XG4gICAgaWYoY2Muc3lzLmlzQnJvd3Nlcil7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5idXR0b25QcmVzc2VkLCBmYWxzZSk7XG4gICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwic2hhcmVBcHBcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgYEhleSBJIGhhdmUgYmVlbiBwbGF5aW5nIHRoaXMgYW1hemluZyBnYW1lLCBsZXQncyBjb25uZWN0IHRoZXJlLiAke0dBTUVfTElOSy5VUkx9YCk7XG5cbiAgfVxuXG4gIG9uTW9yZUdhbWVzKCl7XG4gICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvblByZXNzZWQsIGZhbHNlKTtcbiAgICBjYy5zeXMub3BlblVSTChHQU1FX0xJTksuVVJMKTtcbiAgfVxuXG5cbiAgc2hvd1ByaXZhY3lQb2xpY3koKXtcbiAgICAvLyB0aGlzLnBsYXlMb2FkZXIoKTtcbiAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uUHJlc3NlZCwgZmFsc2UpO1xuICAgIC8vIHRoaXMubW9yZUluZm8uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5wcml2YWN5UG9saWN5LmFjdGl2ZSA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJzaG93IHByaXZhY3QgcGxpY3R5XCIpO1xuXG4gIH1cblxuICBlbmFibGVkTW9yZUdhbWVzQnV0dG9uKGlzQWN0aXZlKXtcbiAgICAvLyB0aGlzLm1vcmVJbmZvLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcImJ1dHRvbkxheW91dFwiKS5nZXRDaGlsZEJ5TmFtZShcIm1vcmVHYW1lc1wiKS5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICB0aGlzLmJvdHRvbUJhci5nZXRDaGlsZEJ5TmFtZShcIm1vcmVHYW1lc1wiKS5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgfVxuXG5cbiAgc2hvd0Z1dHVyZURldGFpbHNTY3JlZW4oKXtcbiAgICB0aGlzLmZ1dHVyZURldGFpbHMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG5cbiAgb3BlblNldHRpbmdzKCl7XG4gICAgaWYodGhpcy5zZXR0aW5ncy5hY3RpdmUpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzZm9yU2V0dGluZyA9IHRydWU7XG4gICAgdGhpcy5nYW1lU2NyZWVuID09IEdBTUVfU0NSRUVOLkxFVkVMX1NFTEVDVElPTiAmJiBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBvcFNjZW5lKCk7XG4gICAgdGhpcy5jaGFuZ2VTY2VuZVZpc2libGl0eSh0aGlzLmdhbWVTY3JlZW4sIGZhbHNlKTtcbiAgICB0aGlzLmdhbWVTY3JlZW4gPSBHQU1FX1NDUkVFTi5TRVRUSU5HUztcbiAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hTY2VuZShHQU1FX1NDUkVFTi5TRVRUSU5HUyk7XG4gICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuaHVkTGF5ZXIuekluZGV4ID0gODtcbiAgICBjb25zb2xlLmxvZyhHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNjcmVlbik7XG4gIH1cblxuICBvblRlcm1zQWNjZXB0KCl7XG4gICAgdGhpcy50ZXJtcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQWZ0ZXJUZXJtcyA9IHRydWU7XG4gICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGFzVGVybUFjY2VwdGVkXCIsIHRydWUpO1xuICAgIHRoaXMuZGFpbHlSZXdhcmRzLmFjdGl2ZSA9IHRydWU7XG5cbiAgfVxuXG4gIHN0YXJ0SW1hZ2VMb2FkaW5nKCl7XG4gICAgbGV0IGxldmVscyA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJbmZvKCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJlbGV2ZXNcIiwgKVxuICAgIGlmKHRoaXMubGV0bG9hZENvdW50ID09IGxldmVscy5sZW5ndGgpe1xuICAgICAgcmV0dXJuO1xuICAgIH1lbHNle1xuICAgICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgICAgLmxvYWRMZXZlbEltYWdlcyh0aGlzLmxldGxvYWRDb3VudCkudGhlbigoKT0+e1xuICAgICAgICB0aGlzLmxldGxvYWRDb3VudCsrO1xuICAgICAgICB0aGlzLnN0YXJ0SW1hZ2VMb2FkaW5nKCk7XG4gICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIGxvYWRpbmcgZGF0YVwiKTtcbiAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIFxuICB9XG5cblxuICBvblJld2FyZENvbGxlY3RlZCgpe1xuICAgIGlmKCF0aGlzLmlzQWZ0ZXJUZXJtcyl7XG4gICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cbiAgIFxuICB9XG5cblxub3BlblRlcm1BbmRDb25kaXRpb25zKCl7XG4gIHRoaXMucHJpdmFjeVBvbGljeS5hY3RpdmUgPSB0cnVlO1xuICB0aGlzLnByaXZhY3lQb2xpY3kuZ2V0Q29tcG9uZW50KFwicG9saWN5XCIpLnNldFRlcm0odGhpcy5sb2FkZXIpO1xuXG4gIFxufVxuXG5cbm9wZW5Qcml2YWN5UG9saWN5KCl7XG4gXG4gIHRoaXMucHJpdmFjeVBvbGljeS5hY3RpdmUgPSB0cnVlO1xuICB0aGlzLnByaXZhY3lQb2xpY3kuZ2V0Q29tcG9uZW50KFwicG9saWN5XCIpLnNldFByaXZhY3kodGhpcy5sb2FkZXIpO1xuIFxuICBcbn1cblxuc2hvd0xhc3RTZWNvbmRzUG9wVXAoKXtcblxuICBjb25zb2xlLmxvZyhcImluc2lkZSB0aGlzIHdlIGFyZSAgbm90IGdvaW5nIGFueXdoZXJlXCIsIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3RUZW5TZWNvbmRzXCIpKTtcbiAgdGhpcy5sYXN0VGVuU2Vjb25kcy5hY3RpdmUgPSB0cnVlO1xuICAvLyBpZighY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdFRlblNlY29uZHNcIikpe1xuICAgXG4gIC8vICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdFRlblNlY29uZHNcIiwgdHJ1ZSk7XG4gICAgXG4gIC8vIH1cbiBcbn1cblxuXG5oaWRlTGFzdFNlY29uZHNQb3BVcCgpe1xuICBjb25zb2xlLmxvZyhcImluc2lkZSB0aGlzIGxhc3Qgc2Vjb25kcyBlcmUgYXJlIGhlcmUgXCIpO1xuICB0aGlzLmxhc3RUZW5TZWNvbmRzLmFjdGl2ZSA9IGZhbHNlO1xufVxuXG5cblxufVxuIl19