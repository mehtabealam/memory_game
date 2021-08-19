
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameplay/tutorials.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L3R1dG9yaWFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix1REFBc0Q7QUFDdEQseURBQW9EO0FBRTlDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBSTFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUhDO1FBbEhHLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFJMUIsWUFBTSxHQUFlLElBQUksQ0FBQztRQUcxQixZQUFNLEdBQWUsSUFBSSxDQUFDO1FBSTFCLG1CQUFhLEdBQW9CLElBQUksQ0FBQztRQUl0QyxRQUFFLEdBQWUsSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixtQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixnQkFBVSxHQUFZLENBQUMsQ0FBQztRQUN4QixjQUFRLEdBQWtCLElBQUksQ0FBQzs7UUFxRi9CLGlCQUFpQjtJQUNyQixDQUFDO0lBbkZHLHdCQUF3QjtJQUV4QixlQUFlO0lBQ2Qsd0JBQUssR0FBTDtJQUNELENBQUM7SUFDRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxh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QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ007SUFJMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDYTtJQUl0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNFO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNRO0lBM0JkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxSDVCO0lBQUQsZUFBQztDQXJIRCxBQXFIQyxDQXJIcUMsRUFBRSxDQUFDLFNBQVMsR0FxSGpEO2tCQXJIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlcnMvU291bmRNYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdXRvcmlhbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgY29udGVudCA6IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidXR0b24gOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBhY2NlcHQgOiBjYy5CdXR0b24gPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgYmdTcHJpdGVGcmFtZSA6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBiZyA6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aW1lUHUgOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZsaXBQdTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGF1ZGlvQ2xpcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHR1dG9yaWFsVGV4dHMgOiBzdHJpbmdbXSA9W107XG4gICAgc2xpZGVJbmRleCA6IG51bWJlciA9IDA7XG4gICAgZGVsZWdhdGUgOiBjYy5Db21wb25lbnQgPSBudWxsO1xuICAgIFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICAgc3RhcnQgKCkge1xuICAgIH1cbiAgICBzaG93TWVtb3Jpc2VUaW1lKHRpbWUpe1xuICAgICAgICB0aGlzLnR1dG9yaWFsVGV4dHMgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0cmluZyhcInR1dG9yaWFsc1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0dXRvcmlhbCB0ZXh0IGxlbmd0aCBpcyBcIiwgdGhpcy50dXRvcmlhbFRleHRzKTtcbiAgICAgICAgbGV0IHN0cmluZyA9IHRoaXMudHV0b3JpYWxUZXh0c1t0aGlzLnNsaWRlSW5kZXhdW2BzbGlkZSR7dGhpcy5zbGlkZUluZGV4ICsgMX1gXTtcbiAgICAgICAgdGhpcy5jb250ZW50LnN0cmluZyA9IHN0cmluZy5yZXBsYWNlKFwiJXNcIiwgdGltZSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBvbkFjY2VwdCAoKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmF1ZGlvQ2xpcCwgZmFsc2UpO1xuICAgICAgICB0aGlzLm1vdmVUb05leHRTbGlkZSgpO1xuICAgIH1cbiAgICBzZXREZWxlZ2F0ZShkZWxlZ2F0ZSA6IGNjLkNvbXBvbmVudCl7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICB9XG4gICAgbW92ZVRvTmV4dFNsaWRlKCl7XG4gICAgICAgIHN3aXRjaCh0aGlzLnNsaWRlSW5kZXgpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlSW5kZXgrKyA7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG93ZXJVcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUubW92ZVR1ZEhhbmRzT25IaW50cyh0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Bvd2VyVXAoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlLm1vdmVUdWRIYW5kc09uSGludHMoZmFsc2UpOyBcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zaG93R2FtZUluc3RydWN0aW9uUG9wVXAoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZVR1dG9yaWFsVGV4dCgpO1xuICAgICAgICB0aGlzLnNsaWRlSW5kZXgrKyA7XG5cbiAgICBcbiAgICB9XG4gICAgdXBkYXRlVUkoKXtcbiAgICAgICAgdGhpcy5iZy5zcHJpdGVGcmFtZSA9IHRoaXMuYmdTcHJpdGVGcmFtZTtcbiAgICAgICAgdGhpcy5idXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjY2VwdC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIFxuICAgIH1cbiAgICB1cGRhdGVUdXRvcmlhbFRleHQoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzbGlkZSBpbmRleFwiLHRoaXMuc2xpZGVJbmRleCApO1xuICAgICAgICB0aGlzLmNvbnRlbnQuc3RyaW5nID0gdGhpcy50dXRvcmlhbFRleHRzW3RoaXMuc2xpZGVJbmRleF1bYHNsaWRlJHt0aGlzLnNsaWRlSW5kZXggKyAxfWBdO1xuICAgIH1cblxuICAgIHNob3dUdXRvcmlhbHMoKXtcblxuICAgIH1cbiAgICBzaG93UG93ZXJVcCgpe1xuICAgICAgICBpZih0aGlzLnNsaWRlSW5kZXggPT0gMil7XG4gICAgICAgICAgICB0aGlzLnRpbWVQdS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZmxpcFB1LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy50aW1lUHUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZmxpcFB1LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIFxuXG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=