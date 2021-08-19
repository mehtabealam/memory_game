"use strict";
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