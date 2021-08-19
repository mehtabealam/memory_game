"use strict";
cc._RF.push(module, '2de04PwIi1Ev6FlzpPCOS29', 'options');
// scripts/HUD/options.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var constants_1 = require("../helper/constants");
var GameManager_1 = require("../managers/GameManager");
var Options = /** @class */ (function (_super) {
    __extends(Options, _super);
    function Options() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timer = null;
        _this.gameMode = null;
        _this.hint = null;
        _this.clues = null;
        _this.clueButton = null;
        _this.hintButton = null;
        return _this;
        // update (dt) {}
    }
    Options.prototype.start = function () {
    };
    Options.prototype.setDelegate = function (delegate) {
        this._delegateScript = delegate;
        this.updateHindText();
    };
    Options.prototype.updateHindText = function () {
        var hintCount = cc.sys.localStorage.getItem("hint");
        this.hint.string = "" + hintCount;
        var clueCount = cc.sys.localStorage.getItem("clue");
        this.clues.string = "" + clueCount;
        this.clueButton.interactable = true;
    };
    Options.prototype.setUpUI = function (screen, gameMode) {
        console.log("options", screen, gameMode);
        var mode = GameManager_1.GameManager.getInstance().getString(gameMode);
        this.gameMode.string = mode;
        this.deactiveAllNodes();
        switch (screen) {
            case constants_1.GAME_SCREEN.HOME:
                // this.more.node.active = false;
                break;
            case constants_1.GAME_SCREEN.LEVEL_SELECTION:
                break;
            case constants_1.GAME_SCREEN.GAME_PLAY:
                this.timer.node.active = true;
                this.gameMode.node.active = true;
                break;
        }
    };
    Options.prototype.deactiveAllNodes = function () {
        this.timer.node.active = false;
        this.gameMode.node.active = false;
        // this.more.node.active = false;
    };
    Options.prototype.updateTimer = function (time, totalTime) {
        var timeString = GameManager_1.GameManager.getInstance().getString("time");
        timeString = timeString.replace("%s", "");
        this.timer.string = "" + timeString + time + "/" + totalTime;
    };
    Options.prototype.onHint = function () {
        if (this._delegateScript.isTutorialPlaying()) {
            return;
        }
        var hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
        console.log("hint", hintCount);
        if (hintCount > 0) {
            this._delegateScript.playBounsAnimation(true);
            cc.sys.localStorage.setItem("hint", hintCount - 1);
            this.hint.string = "" + (hintCount - 1);
        }
        else {
            this._delegateScript.showHintPopUP(constants_1.END_POP_UP.FOR_HIT);
        }
    };
    Options.prototype.onClue = function () {
        var _this = this;
        if (this._delegateScript.isTutorialPlaying()) {
            return;
        }
        var clueCount = JSON.parse(cc.sys.localStorage.getItem("clue"));
        if (clueCount > 0) {
            cc.sys.localStorage.setItem("clue", clueCount - 1);
            this.clues.string = "" + (clueCount - 1);
            this.clueButton.interactable = false;
            this._delegateScript.openPairCards();
            this.clueButton.node.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(function () {
                _this.clueButton.interactable = true;
            })));
        }
        else {
            this._delegateScript.showHintPopUP(constants_1.END_POP_UP.FOR_CLUE);
        }
    };
    Options.prototype.getChildrenPosition = function (isClue) {
        var targetNode = isClue ? this.clueButton.node : this.hintButton.node;
        return targetNode.getPosition();
    };
    Options.prototype.hideIcon = function (isClue, parent) {
        if (isClue) {
            this.clueButton.node.active = false;
            this.hintButton.node.active = true;
        }
        else {
            this.clueButton.node.active = true;
            this.hintButton.node.active = false;
        }
        if (parent == null) {
            this.clueButton.node.active = true;
            this.hintButton.node.active = true;
        }
        // let targetNode = isClue ? this.clueButton.node: this.hintButton.node;
    };
    // play animtion after enabling the button
    Options.prototype.enableClockButton = function () {
        this.hintButton.getComponent(cc.Animation).play();
    };
    // disable the button and also stop the animation
    Options.prototype.disableClockButton = function () {
        this.hintButton.getComponent(cc.Animation).stop();
        this.hintButton.node.scale = 1;
    };
    __decorate([
        property(cc.Label)
    ], Options.prototype, "timer", void 0);
    __decorate([
        property(cc.Label)
    ], Options.prototype, "gameMode", void 0);
    __decorate([
        property(cc.Label)
    ], Options.prototype, "hint", void 0);
    __decorate([
        property(cc.Label)
    ], Options.prototype, "clues", void 0);
    __decorate([
        property(cc.Button)
    ], Options.prototype, "clueButton", void 0);
    __decorate([
        property(cc.Button)
    ], Options.prototype, "hintButton", void 0);
    Options = __decorate([
        ccclass
    ], Options);
    return Options;
}(cc.Component));
exports.default = Options;

cc._RF.pop();