"use strict";
cc._RF.push(module, 'b088aAKCUxN6IbB3yHKE9T3', 'levelUIManager');
// scripts/level/levelUIManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelUIManager = /** @class */ (function (_super) {
    __extends(LevelUIManager, _super);
    function LevelUIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelSelectionButton = null;
        _this.unlocked = null;
        _this.locked = null;
        _this.layout = null;
        _this.title = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    LevelUIManager.prototype.start = function () {
    };
    LevelUIManager.prototype.setDelegateComponent = function (delgate) {
        this._delagate = delgate;
    };
    LevelUIManager.prototype.populateLevels = function (startIndex) {
        var levelInfo = GameManager_1.GameManager.getInstance().getLevelData(startIndex);
        this.setLeveltitle(levelInfo.gameType, levelInfo.groupOf);
        this.layout.node.removeAllChildren();
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        var levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var levelsInfoForMode = JSON.parse(levelsInfo.level);
        var endIndex = (startIndex + 10) > levels.length ? levels.length : (startIndex + 10);
        for (var i = startIndex; i < endIndex; i++) {
            var button = cc.instantiate(this.levelSelectionButton);
            button.name = i.toString();
            button.getChildByName("Background").getChildByName("title")
                .getComponent(cc.Label).getComponent("localiser").replaceValue("" + (i + 1));
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = "levelUIManager";
            clickEventHandler.handler = "onLevelSelect";
            clickEventHandler.customEventData = i.toString();
            button.getComponent(cc.Button).clickEvents.push(clickEventHandler);
            if (levelsInfoForMode[i].isUnlock) {
                button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.unlocked;
                button.getChildByName("lock").active = false;
                button.getComponent(cc.Button).interactable = true;
            }
            else {
                button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.locked;
                button.getChildByName("lock").active = true;
                button.getComponent(cc.Button).interactable = false;
            }
            this.layout.node.addChild(button);
        }
    };
    LevelUIManager.prototype.updateLevels = function (startIndex) {
        var levelInfo = GameManager_1.GameManager.getInstance().getLevelData(startIndex);
        this.setLeveltitle(levelInfo.gameType, levelInfo.groupOf);
        var levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        var endIndex = (startIndex + 10) > levels.length ? levels.length : (startIndex + 10);
        var levelsInfoForMode = JSON.parse(levelsInfo.level);
        for (var i = startIndex; i < endIndex; i++) {
            var button = cc.instantiate(this.levelSelectionButton);
            if (levelsInfoForMode[i].isUnlock) {
                button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.unlocked;
                button.getChildByName("lock").active = false;
                button.getComponent(cc.Button).interactable = true;
            }
            else {
                button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.locked;
                button.getChildByName("lock").active = true;
                button.getComponent(cc.Button).interactable = false;
            }
            this.layout.node.addChild(button);
        }
    };
    LevelUIManager.prototype.setLeveltitle = function (gameType, groupof) {
        var keyString = "";
        switch (gameType) {
            case constants_1.GAME_TYPE.FIND:
                keyString = "find";
                break;
            case constants_1.GAME_TYPE.MIRROR:
                keyString = "mirror";
                break;
        }
        this.title.node.getComponent("localiser").key = keyString;
        console.log('keyString', keyString);
        this.title.node.getComponent("localiser").replaceValue("" + groupof);
        this.title.node.getComponent("localiser").setStringForKey();
    };
    LevelUIManager.prototype.onLevelSelect = function (event, level) {
        this._delagate.onLevelSelect(level);
    };
    LevelUIManager.prototype.openLocalisation = function () {
        this._delagate.openLocalisationPopUp();
    };
    __decorate([
        property(cc.Prefab)
    ], LevelUIManager.prototype, "levelSelectionButton", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LevelUIManager.prototype, "unlocked", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LevelUIManager.prototype, "locked", void 0);
    __decorate([
        property(cc.Layout)
    ], LevelUIManager.prototype, "layout", void 0);
    __decorate([
        property(cc.Label)
    ], LevelUIManager.prototype, "title", void 0);
    LevelUIManager = __decorate([
        ccclass
    ], LevelUIManager);
    return LevelUIManager;
}(cc.Component));
exports.default = LevelUIManager;

cc._RF.pop();