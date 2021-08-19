
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/dailyRewards/dailyRewards.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b67fbaoY1pBFYc1exQjbqhk', 'dailyRewards');
// scripts/dailyRewards/dailyRewards.ts

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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var GameManager_1 = require("../managers/GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DailyRewards = /** @class */ (function (_super) {
    __extends(DailyRewards, _super);
    function DailyRewards() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.giftLabel = null;
        _this.clue = null;
        _this.wrappedNode = null;
        _this.claimNode = null;
        _this.delgateScript = null;
        _this.dailyRewards = [
            { hints: 3, clue: 2 },
            { hints: 5, clue: 1 },
            { hints: 4, clue: 2 },
            { hints: 3, clue: 1 },
            { hints: 4, clue: 1 },
            { hints: 1, clue: 4 },
            { hints: 4, clue: 2 },
            { hints: 1, clue: 3 },
            { hints: 3, clue: 1 },
            { hints: 2, clue: 3 },
        ];
        _this.reward = _this.dailyRewards[0];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DailyRewards.prototype.start = function () {
        console.log("date", GameManager_1.GameManager.getInstance().getCurrentDate());
        var date = GameManager_1.GameManager.getInstance().getCurrentDate().split("-");
        if (date.length == 3) {
            var index = parseInt(date[2]) % 10;
            this.reward = this.dailyRewards[index];
            console.log("reward is", this.reward, index);
        }
    };
    DailyRewards.prototype.setDelegate = function (delegate) {
        this.delgateScript = delegate;
    };
    DailyRewards.prototype.onRewardPicked = function () {
        this.wrappedNode.active = false;
        this.claimNode.active = true;
        this.giftLabel.string = "+ " + this.reward.hints;
        this.clue.string = "+ " + this.reward.clue;
    };
    DailyRewards.prototype.onAccept = function () {
        var hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
        console.log("hint count before calucalytion", hintCount);
        hintCount += this.reward.hints; // for now will add new once done
        cc.sys.localStorage.setItem("hint", JSON.stringify(hintCount));
        console.log("hint count after calucalytion", hintCount);
        cc.sys.localStorage.setItem("rewardClaimDate", GameManager_1.GameManager.getInstance().getCurrentDate());
        var clueCount = JSON.parse(cc.sys.localStorage.getItem("clue"));
        clueCount += this.reward.clue;
        cc.sys.localStorage.setItem("clue", JSON.stringify(hintCount));
        this.delgateScript.onRewardCollected();
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], DailyRewards.prototype, "giftLabel", void 0);
    __decorate([
        property(cc.Label)
    ], DailyRewards.prototype, "clue", void 0);
    __decorate([
        property(cc.Node)
    ], DailyRewards.prototype, "wrappedNode", void 0);
    __decorate([
        property(cc.Node)
    ], DailyRewards.prototype, "claimNode", void 0);
    DailyRewards = __decorate([
        ccclass
    ], DailyRewards);
    return DailyRewards;
}(cc.Component));
exports.default = DailyRewards;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhaWx5UmV3YXJkcy9kYWlseVJld2FyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEYsdURBQW9EO0FBRTlDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBSTFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBMkVDO1FBeEVHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFJM0IsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBSXJCLGtCQUFZLEdBQUc7WUFDWCxFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFB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UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDUTtJQUkzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUTtJQWJULFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EyRWhDO0lBQUQsbUJBQUM7Q0EzRUQsQUEyRUMsQ0EzRXlDLEVBQUUsQ0FBQyxTQUFTLEdBMkVyRDtrQkEzRW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbmltcG9ydCB7R2FtZU1hbmFnZXJ9ICBmcm9tICcuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlcidcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5UmV3YXJkcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGdpZnRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgY2x1ZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgd3JhcHBlZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2xhaW1Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBkZWxnYXRlU2NyaXB0ID0gbnVsbDtcblxuXG5cbiAgICBkYWlseVJld2FyZHMgPSBbXG4gICAgICAgIHtoaW50cyA6IDMsIGNsdWUgOjJ9LFxuICAgICAgICB7aGludHMgOiA1LCBjbHVlIDoxfSxcbiAgICAgICAge2hpbnRzIDogNCwgY2x1ZSA6Mn0sXG4gICAgICAgIHtoaW50cyA6IDMsIGNsdWUgOjF9LFxuICAgICAgICB7aGludHMgOiA0LCBjbHVlIDoxfSxcbiAgICAgICAge2hpbnRzIDogMSwgY2x1ZSA6NH0sXG4gICAgICAgIHtoaW50cyA6IDQsIGNsdWUgOjJ9LFxuICAgICAgICB7aGludHMgOiAxLCBjbHVlIDozfSxcbiAgICAgICAge2hpbnRzIDogMywgY2x1ZSA6MX0sXG4gICAgICAgIHtoaW50cyA6IDIsIGNsdWUgOjN9LFxuICAgICAgXG5cbiAgICBdO1xuXG4gICAgcmV3YXJkID0gdGhpcy5kYWlseVJld2FyZHNbMF07XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGVcIiwgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50RGF0ZSgpKTtcbiAgICAgICAgbGV0IGRhdGUgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnREYXRlKCkuc3BsaXQoXCItXCIpO1xuICAgICAgICBpZihkYXRlLmxlbmd0aCA9PSAzKXtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHBhcnNlSW50KGRhdGVbMl0pJTEwO1xuICAgICAgICAgICAgdGhpcy5yZXdhcmQgPSB0aGlzLmRhaWx5UmV3YXJkc1tpbmRleF1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV3YXJkIGlzXCIsIHRoaXMucmV3YXJkLCBpbmRleCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERlbGVnYXRlKGRlbGVnYXRlKXtcbiAgICAgICAgdGhpcy5kZWxnYXRlU2NyaXB0ID0gZGVsZWdhdGU7XG4gICAgfVxuXG4gICAgb25SZXdhcmRQaWNrZWQoKXtcbiAgICAgICAgdGhpcy53cmFwcGVkTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbGFpbU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5naWZ0TGFiZWwuc3RyaW5nID0gYCsgJHt0aGlzLnJld2FyZC5oaW50c31gOyAgIFxuICAgICAgICB0aGlzLmNsdWUuc3RyaW5nID0gYCsgJHt0aGlzLnJld2FyZC5jbHVlfWA7ICAgXG4gICAgfVxuXG4gICAgb25BY2NlcHQoKXtcbiAgICAgICAgbGV0ICBoaW50Q291bnQgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpbnRcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhpbnQgY291bnQgYmVmb3JlIGNhbHVjYWx5dGlvblwiLCBoaW50Q291bnQpO1xuICAgICAgICBoaW50Q291bnQgKz0gdGhpcy5yZXdhcmQuaGludHM7IC8vIGZvciBub3cgd2lsbCBhZGQgbmV3IG9uY2UgZG9uZVxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaW50XCIsIEpTT04uc3RyaW5naWZ5KGhpbnRDb3VudCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhpbnQgY291bnQgYWZ0ZXIgY2FsdWNhbHl0aW9uXCIsIGhpbnRDb3VudCk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJld2FyZENsYWltRGF0ZVwiLCBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnREYXRlKCkpO1xuICAgICAgICBsZXQgIGNsdWVDb3VudCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2x1ZVwiKSk7XG4gICAgICAgIGNsdWVDb3VudCArPSB0aGlzLnJld2FyZC5jbHVlO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjbHVlXCIsIEpTT04uc3RyaW5naWZ5KGhpbnRDb3VudCkpO1xuICAgICAgICB0aGlzLmRlbGdhdGVTY3JpcHQub25SZXdhcmRDb2xsZWN0ZWQoKVxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=