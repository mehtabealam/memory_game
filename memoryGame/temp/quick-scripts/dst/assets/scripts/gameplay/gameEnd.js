
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameplay/gameEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L2dhbWVFbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTREO0FBQzVELHVEQUFzRDtBQUN0RCx5REFBb0Q7QUFDcEQsbURBQThDO0FBQzlDLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGO0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBZ0tDO1FBOUpHLHFCQUFlLEdBQUUsS0FBSyxDQUFDO1FBRWYsZUFBUyxHQUFHLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBSXpCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFJM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFlLElBQUksQ0FBQztRQUc3QixjQUFRLEdBQWUsSUFBSSxDQUFDO1FBSTVCLG1CQUFhLEdBQWtCLElBQUksQ0FBQztRQUtwQyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUk5QixlQUFTLEdBQWEsS0FBSyxDQUFDOztJQXNIaEMsQ0FBQztJQXJIRyx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELCtCQUFhLEdBQWIsVUFBYyxRQUFRLEVBQUUsUUFBUTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixrQ0FBa0M7SUFDdEMsQ0FBQztJQUlELDBCQUFRLEdBQVI7UUFDSSxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMs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LENBQUMsa0JBQWtCLENBQUE7UUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUkseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUkseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFHMUUsQ0FBQztJQXhKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNNO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ1E7SUFJM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNRO0lBSTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ2E7SUFLcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNXO0lBdENiLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FnSzNCO0lBQUQsY0FBQztDQWhLRCxBQWdLQyxDQWhLb0MsRUFBRSxDQUFDLFNBQVMsR0FnS2hEO2tCQWhLb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdBTUVfTU9ERSwgRU5EX1BPUF9VUCB9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlcnMvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgQWRNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2Vycy9BZE1hbmFnZXJcIjtcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVFbmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc2hvd2luZ0FkRnJvbUdwID1mYWxzZTtcblxuICAgIHByaXZhdGUgX2RlbGVnYXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcmVtYXJrczogY2MuTGFiZWwgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgY29tbWVudHMgOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5ld1JlY29yZCA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGltZXNVcCA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGludExheWVyIDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGFkQnV0dG9ucyA6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHdhbnRIaW50IDogY2MuQnV0dG9uID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBidXR0b25QcmVzc2VkIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcG93ZXJVcFRpdGxlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcG93ZXJVcENvdmVyOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuXG4gICAgaXNGb3JDbHVlIDpib29sZWFuID0gIGZhbHNlO1xuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHNldFByb3BlcnRpZXMoZGVsZWdhdGUsIGdhbWVNb2RlICl7XG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIC8vIHRoaXMubW9kZSA9IGdhbWVNb2RlLnRvVXBwZXIoKTtcbiAgICB9XG5cblxuXG4gICAgb25BY2NlcHQoKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvblByZXNzZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUuZ2FtZUVuZGVkKCk7XG5cbiAgICB9XG5cbiAgICBvblBsYXlBZ2FpbiAoKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvblByZXNzZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUub25QbGF5QWdhaW4oKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpe1xuICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uUHJlc3NlZCwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5vblBsYXlBZ2FpbkNhbmNlbCgpO1xuICAgIH1cblxuICAgIHNob3dQb3BVcEZvcih0eXBlIDogRU5EX1BPUF9VUCwgbGV2ZWwpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5uZXdSZWNvcmQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZXNVcC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaW50TGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVtYXJrcy5zdHJpbmcgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0cmluZygnbmV3UmVjb3JkJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXMgYWQgcHJlc2VudFwiLCBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pc0FkQXZhaWxhYmxlKCkpO1xuICAgICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgICAgICBjYXNlIEVORF9QT1BfVVAuQ0xFQVJEOiBcbiAgICAgICAgICAgICAgICAgdGhpcy5yZW1hcmtzLnN0cmluZyA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RyaW5nKCdjb25ncmF0dWxhdGlvbnMnKTtcbiAgICAgICAgICAgIGNhc2UgRU5EX1BPUF9VUC5ORVdfUkVDT1JEOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRCdXR0b25zLmludGVyYWN0YWJsZSA9IEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmlzQWRBdmFpbGFibGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1JlY29yZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBFTkRfUE9QX1VQLkZBSUxFRDpcbiAgICAgICAgICAgICAgICAgdGhpcy50aW1lc1VwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFTkRfUE9QX1VQLkZPUl9DTFVFOlxuICAgICAgICAgICAgICB0aGlzLmhpbnRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLmlzRm9yQ2x1ZSA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlUG93ZXJVcFRpdGxlKClcbiAgICAgICAgICAgICAgYnJlYWs7ICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgRU5EX1BPUF9VUC5GT1JfSElUOlxuICAgICAgICAgICAgICAgdGhpcy5oaW50TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgIHRoaXMuaXNGb3JDbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvd2VyVXBUaXRsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgc2hvd0Fkcygpe1xuICAgICAgICBpZighY2Muc3lzLmlzQnJvd3Nlcil7XG4gICAgICAgICAgICBpZighQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2hvd0ludGVyc3RpdGFsKHRoaXMpKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFkSGFzYmVlblNob3duKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBhZCBhdmlsYWJsZSByaWdodCBub3dcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRIYXNiZWVuU2hvd24oKXtcbiAgICAgICAgaWYoICB0aGlzLmlzRm9yQ2x1ZSl7XG4gICAgICAgICAgICBsZXQgIGNsdWVDb3VudCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2x1ZVwiKSk7XG4gICAgICAgICAgICBjbHVlQ291bnQgKz0xOyAvLyBmb3Igbm93IHdpbGwgYWRkIG5ldyBvbmNlIGRvbmVcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNsdWVcIiwgY2x1ZUNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0ICBoaW50Q291bnQgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpbnRcIikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaW50IGNvdW50IGJlZm9yZVwiLCBoaW50Q291bnQpO1xuICAgICAgICAgICAgaGludENvdW50ICs9MzsgLy8gZm9yIG5vdyB3aWxsIGFkZCBuZXcgb25jZSBkb25lXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpbnQgY291bnQgYWZ0ZXJcIiwgaGludENvdW50KTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpbnRcIiwgaGludENvdW50KTtcbiAgICAgICAgfVxuICAgIFxuXG4gICAgICAgIHRoaXMuaXNGb3JDbHVlID0gZmFsc2U7XG4gICAgICAgIGlmKCB0aGlzLnNob3dpbmdBZEZyb21HcCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZSBhZHNcIik7XG4gICAgICAgICAgICAgdGhpcy5fZGVsZWdhdGUucmVtb3ZlSGludFBvcFVwKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy8gdGhpcy5hZEJ1dHRvbnMuaW50ZXJhY3RhYmxlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cblxuXG4gICAgd2F0Y2hBZCgpe1xuICAgICAgICB0aGlzLnNob3dpbmdBZEZyb21HcCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd0FkcygpO1xuICAgICAgIFxuICAgIH1cblxuXG4gICAgY2FuY2VsQWQoKXtcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUucmVtb3ZlSGludFBvcFVwKCk7XG4gICAgfVxuICBcblxuICAgIHVwZGF0ZVBvd2VyVXBUaXRsZSgpe1xuICAgICAgICBsZXQga2V5ID0gIXRoaXMuaXNGb3JDbHVlPyBcIm5vTW9yZUhpbnRzXCIgOiBcIm5vTW9yZUNsdWVcIiBcbiAgICAgICAgbGV0IGtleTIgPSAhdGhpcy5pc0ZvckNsdWU/IFwiV2F0Y2hBZHNGb3JIaW50XCIgOiBcIldhdGNoQWRzRm9yQ2x1ZXNcIlxuICAgICAgICB0aGlzLnBvd2VyVXBUaXRsZS5zdHJpbmcgPSAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdHJpbmcoa2V5KTtcbiAgICAgICAgdGhpcy5wb3dlclVwQ292ZXIuc3RyaW5nID0gIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RyaW5nKGtleTIpO1xuXG5cbiAgICB9XG5cbn1cbiJdfQ==