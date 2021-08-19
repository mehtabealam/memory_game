
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/HUD/options.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0hVRC9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLGlEQUEyRDtBQUMzRCx1REFBc0Q7QUFFdEQ7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUF3S0M7UUFuS0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBSTFCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUk3QixnQkFBVSxHQUFjLElBQUksQ0FBQzs7UUFpSjdCLGlCQUFpQjtJQUNyQixDQUFDO0lBaEpHLHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQVcsR0FBWCxVQUFhLFFBQVE7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRTFCLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0ksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUcsU0FBVyxDQUFDO1FBRWxDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFHLFNBQVcsQ0FBQztRQUVuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELHlCQUFPLEdB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cHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuaW1wb3J0IHtFTkRfUE9QX1VQLCBHQU1FX1NDUkVFTn0gZnJvbSBcIi4uL2hlbHBlci9jb25zdGFudHNcIlxuaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vbWFuYWdlcnMvR2FtZU1hbmFnZXJcIjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgX2RlbGVnYXRlU2NyaXB0IDogbnVsbDtcbiAgXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpbWVyOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZ2FtZU1vZGU6IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGhpbnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBjbHVlczogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBjbHVlQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGhpbnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7ICBcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHNldERlbGVnYXRlIChkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLl9kZWxlZ2F0ZVNjcmlwdCA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLnVwZGF0ZUhpbmRUZXh0KCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZUhpbmRUZXh0KCl7XG4gICAgICAgIGxldCBoaW50Q291bnQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaW50XCIpO1xuICAgICAgICB0aGlzLmhpbnQuc3RyaW5nID0gYCR7aGludENvdW50fWA7XG5cbiAgICAgICAgbGV0IGNsdWVDb3VudCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNsdWVcIik7XG4gICAgICAgIHRoaXMuY2x1ZXMuc3RyaW5nID0gYCR7Y2x1ZUNvdW50fWA7XG5cbiAgICAgICAgdGhpcy5jbHVlQnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0VXBVSSAoc2NyZWVuIDogR0FNRV9TQ1JFRU4sIGdhbWVNb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvcHRpb25zXCIsIHNjcmVlbiwgZ2FtZU1vZGUpO1xuICAgICAgICBsZXQgbW9kZSA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RyaW5nKGdhbWVNb2RlKTtcbiAgICAgICAgdGhpcy5nYW1lTW9kZS5zdHJpbmcgPSBtb2RlO1xuICAgICAgICB0aGlzLmRlYWN0aXZlQWxsTm9kZXMoKTtcbiAgICAgICBcblxuICAgICAgICBzd2l0Y2goc2NyZWVuKXtcbiAgICAgICAgICAgIGNhc2UgR0FNRV9TQ1JFRU4uSE9NRTpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1vcmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR0FNRV9TQ1JFRU4uTEVWRUxfU0VMRUNUSU9OOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICBjYXNlIEdBTUVfU0NSRUVOLkdBTUVfUExBWTpcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNb2RlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWFjdGl2ZUFsbE5vZGVzICgpe1xuICAgICAgICB0aGlzLnRpbWVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5tb3JlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgICB1cGRhdGVUaW1lcih0aW1lLCB0b3RhbFRpbWUpe1xuICAgICAgICBsZXQgdGltZVN0cmluZyA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RyaW5nKFwidGltZVwiKVxuICAgICAgICB0aW1lU3RyaW5nID0gdGltZVN0cmluZy5yZXBsYWNlKFwiJXNcIiwgXCJcIik7XG4gICAgICAgIHRoaXMudGltZXIuc3RyaW5nID0gYCR7dGltZVN0cmluZ30ke3RpbWV9LyR7dG90YWxUaW1lfWA7XG4gICAgfVxuXG5cbiAgICBvbkhpbnQoKXtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX2RlbGVnYXRlU2NyaXB0LmlzVHV0b3JpYWxQbGF5aW5nKCkpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBoaW50Q291bnQgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpbnRcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhpbnRcIiwgaGludENvdW50KTtcbiAgICAgICAgaWYoaGludENvdW50ID4gMCApe1xuICAgICAgICAgICAgdGhpcy5fZGVsZWdhdGVTY3JpcHQucGxheUJvdW5zQW5pbWF0aW9uKHRydWUpO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGludFwiLCBoaW50Q291bnQtMSk7XG4gICAgICAgICAgICB0aGlzLmhpbnQuc3RyaW5nID0gYCR7aGludENvdW50LTF9YDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLl9kZWxlZ2F0ZVNjcmlwdC5zaG93SGludFBvcFVQKEVORF9QT1BfVVAuRk9SX0hJVCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uQ2x1ZSgpe1xuICAgICAgICBpZih0aGlzLl9kZWxlZ2F0ZVNjcmlwdC5pc1R1dG9yaWFsUGxheWluZygpKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2x1ZUNvdW50ID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbHVlXCIpKTtcbiAgICAgICAgaWYoY2x1ZUNvdW50ID4gMCApe1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2x1ZVwiLCBjbHVlQ291bnQtMSk7XG4gICAgICAgICAgICB0aGlzLmNsdWVzLnN0cmluZyA9IGAke2NsdWVDb3VudC0xfWA7XG4gICAgICAgICAgICB0aGlzLmNsdWVCdXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9kZWxlZ2F0ZVNjcmlwdC5vcGVuUGFpckNhcmRzKCk7XG4gICAgICAgICAgICB0aGlzLmNsdWVCdXR0b24ubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuMyksIGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5jbHVlQnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9KSkpO1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5fZGVsZWdhdGVTY3JpcHQuc2hvd0hpbnRQb3BVUChFTkRfUE9QX1VQLkZPUl9DTFVFKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBnZXRDaGlsZHJlblBvc2l0aW9uKGlzQ2x1ZSl7XG5cbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBpc0NsdWUgPyB0aGlzLmNsdWVCdXR0b24ubm9kZTogdGhpcy5oaW50QnV0dG9uLm5vZGU7XG4gICAgICAgIHJldHVybiB0YXJnZXROb2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgaGlkZUljb24oaXNDbHVlLCBwYXJlbnQpe1xuICAgICAgICBpZihpc0NsdWUpe1xuICAgICAgICB0aGlzLmNsdWVCdXR0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaW50QnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNsdWVCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaW50QnV0dG9uLm5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZihwYXJlbnQgPT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLmNsdWVCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaW50QnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCB0YXJnZXROb2RlID0gaXNDbHVlID8gdGhpcy5jbHVlQnV0dG9uLm5vZGU6IHRoaXMuaGludEJ1dHRvbi5ub2RlO1xuICAgIH1cblxuICAgIC8vIHBsYXkgYW5pbXRpb24gYWZ0ZXIgZW5hYmxpbmcgdGhlIGJ1dHRvblxuICAgIGVuYWJsZUNsb2NrQnV0dG9uKCl7ICBcbiAgICAgICAgdGhpcy5oaW50QnV0dG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICB9XG5cblxuICAgICAvLyBkaXNhYmxlIHRoZSBidXR0b24gYW5kIGFsc28gc3RvcCB0aGUgYW5pbWF0aW9uXG4gICAgZGlzYWJsZUNsb2NrQnV0dG9uKCl7XG4gICAgICAgIHRoaXMuaGludEJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XG4gICAgICAgIHRoaXMuaGludEJ1dHRvbi5ub2RlLnNjYWxlID0gMTtcblxuICAgIH1cblxuXG4gICAgXG5cbiAgXG5cbiAgICBcblxuICBcblxuXG4gICBcbiAgICBcbiAgXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19