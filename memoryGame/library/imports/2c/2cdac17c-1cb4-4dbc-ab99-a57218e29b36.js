"use strict";
cc._RF.push(module, '2cdacF8HLRNvKuZpXIY4ps2', 'gameEnd');
// scripts/gameplay/gameEnd.ts

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
var constants_1 = require("../helper/constants");
var GameManager_1 = require("../managers/GameManager");
var SoundManager_1 = require("../managers/SoundManager");
var AdManager_1 = require("../managers/AdManager");
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameEnd = /** @class */ (function (_super) {
    __extends(GameEnd, _super);
    function GameEnd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showingAdFromGp = false;
        _this._delegate = null;
        _this.remarks = null;
        _this.comments = null;
        _this.newRecord = null;
        _this.timesUp = null;
        _this.hintLayer = null;
        _this.adButtons = null;
        _this.wantHint = null;
        _this.buttonPressed = null;
        _this.powerUpTitle = null;
        _this.powerUpCover = null;
        _this.isForClue = false;
        return _this;
    }
    GameEnd.prototype.start = function () {
    };
    GameEnd.prototype.setProperties = function (delegate, gameMode) {
        this._delegate = delegate;
        // this.mode = gameMode.toUpper();
    };
    GameEnd.prototype.onAccept = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this._delegate.gameEnded();
    };
    GameEnd.prototype.onPlayAgain = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this._delegate.onPlayAgain();
    };
    GameEnd.prototype.onCancel = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this._delegate.onPlayAgainCancel();
    };
    GameEnd.prototype.showPopUpFor = function (type, level) {
        this.newRecord.active = false;
        this.timesUp.active = false;
        this.hintLayer.active = false;
        this.remarks.string = GameManager_1.GameManager.getInstance().getString('newRecord');
        // console.log("is ad present", AdManager.getInstance().isAdAvailable());
        switch (type) {
            case constants_1.END_POP_UP.CLEARD:
                this.remarks.string = GameManager_1.GameManager.getInstance().getString('congratulations');
            case constants_1.END_POP_UP.NEW_RECORD:
                this.adButtons.interactable = AdManager_1.default.getInstance().isAdAvailable();
                this.newRecord.active = true;
                break;
            case constants_1.END_POP_UP.FAILED:
                this.timesUp.active = true;
                break;
            case constants_1.END_POP_UP.FOR_CLUE:
                this.hintLayer.active = true;
                this.isForClue = true;
                this.updatePowerUpTitle();
                break;
            case constants_1.END_POP_UP.FOR_HIT:
                this.hintLayer.active = true;
                this.isForClue = false;
                this.updatePowerUpTitle();
                break;
        }
    };
    GameEnd.prototype.showAds = function () {
        if (!cc.sys.isBrowser) {
            if (!AdManager_1.default.getInstance().showInterstital(this)) {
                this.adHasbeenShown();
                console.log("no ad avilable right now");
            }
            ;
        }
    };
    GameEnd.prototype.adHasbeenShown = function () {
        if (this.isForClue) {
            var clueCount = JSON.parse(cc.sys.localStorage.getItem("clue"));
            clueCount += 1; // for now will add new once done
            cc.sys.localStorage.setItem("clue", clueCount);
        }
        else {
            var hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
            console.log("hint count before", hintCount);
            hintCount += 3; // for now will add new once done
            console.log("hint count after", hintCount);
            cc.sys.localStorage.setItem("hint", hintCount);
        }
        this.isForClue = false;
        if (this.showingAdFromGp) {
            console.log("remove ads");
            this._delegate.removeHintPopUp();
        }
        else {
            // this.adButtons.interactable = false
        }
    };
    GameEnd.prototype.watchAd = function () {
        this.showingAdFromGp = true;
        this.showAds();
    };
    GameEnd.prototype.cancelAd = function () {
        this._delegate.removeHintPopUp();
    };
    GameEnd.prototype.updatePowerUpTitle = function () {
        var key = !this.isForClue ? "noMoreHints" : "noMoreClue";
        var key2 = !this.isForClue ? "WatchAdsForHint" : "WatchAdsForClues";
        this.powerUpTitle.string = GameManager_1.GameManager.getInstance().getString(key);
        this.powerUpCover.string = GameManager_1.GameManager.getInstance().getString(key2);
    };
    __decorate([
        property(cc.Label)
    ], GameEnd.prototype, "remarks", void 0);
    __decorate([
        property(cc.Label)
    ], GameEnd.prototype, "comments", void 0);
    __decorate([
        property(cc.Node)
    ], GameEnd.prototype, "newRecord", void 0);
    __decorate([
        property(cc.Node)
    ], GameEnd.prototype, "timesUp", void 0);
    __decorate([
        property(cc.Node)
    ], GameEnd.prototype, "hintLayer", void 0);
    __decorate([
        property(cc.Button)
    ], GameEnd.prototype, "adButtons", void 0);
    __decorate([
        property(cc.Button)
    ], GameEnd.prototype, "wantHint", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameEnd.prototype, "buttonPressed", void 0);
    __decorate([
        property(cc.Label)
    ], GameEnd.prototype, "powerUpTitle", void 0);
    __decorate([
        property(cc.Label)
    ], GameEnd.prototype, "powerUpCover", void 0);
    GameEnd = __decorate([
        ccclass
    ], GameEnd);
    return GameEnd;
}(cc.Component));
exports.default = GameEnd;

cc._RF.pop();