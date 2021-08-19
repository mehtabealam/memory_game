"use strict";
cc._RF.push(module, 'c598c1Sj7hASYtBD+PBTY4r', 'cards');
// scripts/gameplay/cards.ts

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
var SoundManager_1 = require("../managers/SoundManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cardName = "";
        _this._isOpen = true;
        _this._delagateScript = null;
        _this.image = null;
        _this.animationNode = null;
        _this.back = null;
        _this.front = null;
        _this.cardFlip = null;
        _this.overLay = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Card.prototype.start = function () {
    };
    Card.prototype.setDelegate = function (delegate) {
        this._delagateScript = delegate;
    };
    Card.prototype.setUpUI = function (spriteFrameKey, level, mode, cardSpriteFrame) {
        this._cardName = spriteFrameKey;
        // console.log("card name", spriteFrameKey, cardSpriteFrame);
        this.image.spriteFrame = GameManager_1.GameManager.getInstance().getSpriteFrame(mode, level, spriteFrameKey);
        this.front.spriteFrame = cardSpriteFrame;
        this.back.spriteFrame = cardSpriteFrame;
        this.animationNode.setContentSize(cardSpriteFrame._originalSize);
        this.node.setContentSize(cardSpriteFrame._originalSize);
    };
    Card.prototype.startAnimation = function () {
    };
    Card.prototype.getCardName = function () {
        return this._cardName;
    };
    Card.prototype.onCardClicked = function () {
        // console.log("showcards");
        if (!this._isOpen) {
            this._delagateScript.showCard(this.node);
        }
        // this.reveal();
    };
    Card.prototype.setFaceUp = function (showFace) {
        this.back.node.active = !showFace;
        this._isOpen = showFace;
    };
    Card.prototype.reveal = function () {
        if (this._isOpen) {
            return;
        }
        SoundManager_1.default.getInstance().playEffect(this.cardFlip, false);
        var callFunc1 = cc.callFunc(function () {
            this.setFaceUp(true);
        }, this);
        var callFunc2 = cc.callFunc(function () {
            // callFunc();
        }, this);
        var initialScale = 1;
        // console.log("initialScale", initialScale);
        var revealAction = cc.sequence(cc.scaleTo(0.1, 0, this.node.scale), callFunc1, cc.scaleTo(0.1, initialScale, initialScale));
        this.animationNode.runAction(revealAction);
    };
    Card.prototype.unreveal = function () {
        var callFunc1 = cc.callFunc(function () {
            this.setFaceUp(false);
        }, this);
        var unrevealAction = cc.sequence(cc.scaleTo(0.1, 0, 1), callFunc1, cc.scaleTo(0.1, 1, 1));
        this.animationNode.runAction(unrevealAction);
    };
    Card.prototype.playCorrectAnimation = function () {
        var bounce = cc.scaleTo(0.1, 0.9, 0.9).easing(cc.easeBounceInOut());
        var correctAnimation = cc.sequence(bounce, cc.delayTime(0.2), cc.scaleTo(0.1, 1, 1));
        this.animationNode.runAction(correctAnimation);
    };
    Card.prototype.enableOverlay = function () {
        this.overLay.active = true;
    };
    Card.prototype.disableOverlay = function () {
        this.overLay.active = false;
    };
    Card.prototype.isOpen = function () {
        // console.log("isopen", this._isOpen);
        return this._isOpen;
    };
    __decorate([
        property(cc.Sprite)
    ], Card.prototype, "image", void 0);
    __decorate([
        property(cc.Node)
    ], Card.prototype, "animationNode", void 0);
    __decorate([
        property(cc.Sprite)
    ], Card.prototype, "back", void 0);
    __decorate([
        property(cc.Sprite)
    ], Card.prototype, "front", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Card.prototype, "cardFlip", void 0);
    __decorate([
        property(cc.Node)
    ], Card.prototype, "overLay", void 0);
    Card = __decorate([
        ccclass
    ], Card);
    return Card;
}(cc.Component));
exports.default = Card;

cc._RF.pop();