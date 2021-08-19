
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameplay/cards.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L2NhcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFvRDtBQUNwRCx5REFBb0Q7QUFFOUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFrSUM7UUFoSVcsZUFBUyxHQUFZLEVBQUUsQ0FBQztRQUN4QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBQ3pCLHFCQUFlLEdBQWtCLElBQUksQ0FBQztRQUc5QyxXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBSTlCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7O1FBMEd4QixpQkFBaUI7SUFDckIsQ0FBQztJQWhHRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMEJBQVcsR0FBWCxVQUFZLFFBQXFCO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQkFBTyxHQUFQLFVBQVMsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZTtRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNoQyw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUUseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7UUFDekMs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QUM7UUFDckYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBR0QsNEJBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUUvQixDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUVoQyxDQUFDO0lBRUQscUJBQU0sR0FBTjtRQUNJLHVDQUF1QztRQUN2QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQXhIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1k7SUFJOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MENBQ0U7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDTTtJQXZCUCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBa0l4QjtJQUFELFdBQUM7Q0FsSUQsQUFrSUMsQ0FsSWlDLEVBQUUsQ0FBQyxTQUFTLEdBa0k3QztrQkFsSW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dhbWVNYW5hZ2VyfSBmcm9tIFwiLi4vbWFuYWdlcnMvR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJzL1NvdW5kTWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBfY2FyZE5hbWUgOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgX2lzT3BlbiA6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX2RlbGFnYXRlU2NyaXB0IDogY2MuQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaW1hZ2U6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhbmltYXRpb25Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBiYWNrOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBmcm9udDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgY2FyZEZsaXA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3ZlckxheTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBcblxuXG4gIFxuXG5cblxuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgc2V0RGVsZWdhdGUoZGVsZWdhdGU6Y2MuQ29tcG9uZW50KXtcbiAgICAgICAgdGhpcy5fZGVsYWdhdGVTY3JpcHQgPSBkZWxlZ2F0ZTtcbiAgICB9XG5cbiAgICBzZXRVcFVJIChzcHJpdGVGcmFtZUtleSwgbGV2ZWwsIG1vZGUsIGNhcmRTcHJpdGVGcmFtZSkge1xuICAgICAgICB0aGlzLl9jYXJkTmFtZSA9IHNwcml0ZUZyYW1lS2V5O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhcmQgbmFtZVwiLCBzcHJpdGVGcmFtZUtleSwgY2FyZFNwcml0ZUZyYW1lKTtcbiAgICAgICAgdGhpcy5pbWFnZS5zcHJpdGVGcmFtZT0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTcHJpdGVGcmFtZShtb2RlLCBsZXZlbCwgc3ByaXRlRnJhbWVLZXkpO1xuICAgICAgICB0aGlzLmZyb250LnNwcml0ZUZyYW1lID0gY2FyZFNwcml0ZUZyYW1lO1xuICAgICAgICB0aGlzLmJhY2suc3ByaXRlRnJhbWUgPSBjYXJkU3ByaXRlRnJhbWU7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTm9kZS5zZXRDb250ZW50U2l6ZShjYXJkU3ByaXRlRnJhbWUuX29yaWdpbmFsU2l6ZSk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYXJkU3ByaXRlRnJhbWUuX29yaWdpbmFsU2l6ZSk7XG4gICAgfVxuXG5cbiAgICBzdGFydEFuaW1hdGlvbigpe1xuXG4gICAgfVxuXG4gICAgZ2V0Q2FyZE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcmROYW1lO1xuICAgIH1cblxuICAgIG9uQ2FyZENsaWNrZWQoKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaG93Y2FyZHNcIik7XG4gICAgICAgIGlmKCF0aGlzLl9pc09wZW4pe1xuICAgICAgICAgICAgdGhpcy5fZGVsYWdhdGVTY3JpcHQuc2hvd0NhcmQodGhpcy5ub2RlKTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIHRoaXMucmV2ZWFsKCk7XG4gICAgfVxuXG5cbiAgIHNldEZhY2VVcChzaG93RmFjZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmJhY2subm9kZS5hY3RpdmUgPSAhc2hvd0ZhY2U7XG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHNob3dGYWNlO1xuICAgIH1cblxuICAgIHJldmVhbCggKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuX2lzT3Blbil7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuY2FyZEZsaXAsZmFsc2UpO1xuICAgICAgICBsZXQgY2FsbEZ1bmMxID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRGYWNlVXAodHJ1ZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBsZXQgY2FsbEZ1bmMyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gY2FsbEZ1bmMoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGxldCBpbml0aWFsU2NhbGUgPSAxO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluaXRpYWxTY2FsZVwiLCBpbml0aWFsU2NhbGUpO1xuICAgICAgICBsZXQgcmV2ZWFsQWN0aW9uID0gY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjEsIDAsIHRoaXMubm9kZS5zY2FsZSksIGNhbGxGdW5jMSwgY2Muc2NhbGVUbygwLjEsIGluaXRpYWxTY2FsZSwgaW5pdGlhbFNjYWxlKSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTm9kZS5ydW5BY3Rpb24ocmV2ZWFsQWN0aW9uKTtcbiAgICB9XG5cblxuICAgIHVucmV2ZWFsICggKSB7XG4gICAgICAgIGxldCBjYWxsRnVuYzEgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZhY2VVcChmYWxzZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBsZXQgdW5yZXZlYWxBY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMSwgMCwgMSksIGNhbGxGdW5jMSwgY2Muc2NhbGVUbygwLjEsIDEsIDEpKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25Ob2RlLnJ1bkFjdGlvbih1bnJldmVhbEFjdGlvbik7XG4gICAgfVxuXG4gICAgcGxheUNvcnJlY3RBbmltYXRpb24oKXtcbiAgICAgICAgbGV0IGJvdW5jZSA9IGNjLnNjYWxlVG8oMC4xLCAwLjksMC45KS5lYXNpbmcoY2MuZWFzZUJvdW5jZUluT3V0KCkpO1xuICAgICAgICBsZXQgY29ycmVjdEFuaW1hdGlvbiA9IGNjLnNlcXVlbmNlKGJvdW5jZSwgY2MuZGVsYXlUaW1lKDAuMiksIGNjLnNjYWxlVG8oMC4xLCAxLCAxKSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTm9kZS5ydW5BY3Rpb24oY29ycmVjdEFuaW1hdGlvbik7XG4gICAgfVxuXG5cbiAgICBlbmFibGVPdmVybGF5KCl7XG4gICAgICAgIHRoaXMub3ZlckxheS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgfVxuXG4gICAgZGlzYWJsZU92ZXJsYXkoKXtcbiAgICAgICAgdGhpcy5vdmVyTGF5LmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgfVxuXG4gICAgaXNPcGVuKCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXNvcGVuXCIsIHRoaXMuX2lzT3Blbik7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==