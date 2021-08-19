"use strict";
cc._RF.push(module, 'd5cdepIQH5PSpwNpwXvLSJg', 'tutorials');
// scripts/gameplay/tutorials.ts

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
var SoundManager_1 = require("../managers/SoundManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tutorial = /** @class */ (function (_super) {
    __extends(Tutorial, _super);
    function Tutorial() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.button = null;
        _this.accept = null;
        _this.bgSpriteFrame = null;
        _this.bg = null;
        _this.timePu = null;
        _this.flipPu = null;
        _this.audioClip = null;
        _this.tutorialTexts = [];
        _this.slideIndex = 0;
        _this.delegate = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Tutorial.prototype.start = function () {
    };
    Tutorial.prototype.showMemoriseTime = function (time) {
        this.tutorialTexts = GameManager_1.GameManager.getInstance().getString("tutorials");
        console.log("tutorial text length is ", this.tutorialTexts);
        var string = this.tutorialTexts[this.slideIndex]["slide" + (this.slideIndex + 1)];
        this.content.string = string.replace("%s", time);
    };
    Tutorial.prototype.onAccept = function () {
        SoundManager_1.default.getInstance().playEffect(this.audioClip, false);
        this.moveToNextSlide();
    };
    Tutorial.prototype.setDelegate = function (delegate) {
        this.delegate = delegate;
    };
    Tutorial.prototype.moveToNextSlide = function () {
        switch (this.slideIndex) {
            case 0:
                this.node.active = false;
                this.slideIndex++;
                this.delegate.startGame();
                return;
            case 1:
                break;
            case 2:
                this.showPowerUp();
                this.delegate.moveTudHandsOnHints(true);
                break;
            case 3:
                this.showPowerUp();
                this.delegate.moveTudHandsOnHints(false);
                this.updateUI();
                break;
            default:
                this.delegate.showGameInstructionPopUp();
                this.node.removeFromParent(true);
                return;
        }
        this.updateTutorialText();
        this.slideIndex++;
    };
    Tutorial.prototype.updateUI = function () {
        this.bg.spriteFrame = this.bgSpriteFrame;
        this.button.node.active = true;
        this.accept.node.active = false;
    };
    Tutorial.prototype.updateTutorialText = function () {
        console.log("slide index", this.slideIndex);
        this.content.string = this.tutorialTexts[this.slideIndex]["slide" + (this.slideIndex + 1)];
    };
    Tutorial.prototype.showTutorials = function () {
    };
    Tutorial.prototype.showPowerUp = function () {
        if (this.slideIndex == 2) {
            this.timePu.active = false;
            this.flipPu.active = true;
        }
        else {
            this.timePu.active = true;
            this.flipPu.active = false;
        }
    };
    __decorate([
        property(cc.Label)
    ], Tutorial.prototype, "content", void 0);
    __decorate([
        property(cc.Button)
    ], Tutorial.prototype, "button", void 0);
    __decorate([
        property(cc.Button)
    ], Tutorial.prototype, "accept", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Tutorial.prototype, "bgSpriteFrame", void 0);
    __decorate([
        property(cc.Sprite)
    ], Tutorial.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], Tutorial.prototype, "timePu", void 0);
    __decorate([
        property(cc.Node)
    ], Tutorial.prototype, "flipPu", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Tutorial.prototype, "audioClip", void 0);
    Tutorial = __decorate([
        ccclass
    ], Tutorial);
    return Tutorial;
}(cc.Component));
exports.default = Tutorial;

cc._RF.pop();