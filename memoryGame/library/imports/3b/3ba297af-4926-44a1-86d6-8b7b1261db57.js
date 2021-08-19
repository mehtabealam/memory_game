"use strict";
cc._RF.push(module, '3ba29evSSZEoYbWi3sSYdtX', 'gameStart');
// scripts/gameplay/gameStart.ts

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
var SoundManager_1 = require("../managers/SoundManager");
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameStart = /** @class */ (function (_super) {
    __extends(GameStart, _super);
    function GameStart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._delegate = null;
        _this.gameName = null;
        _this.prize = null;
        _this.instraction = null;
        _this.accept = null;
        _this.buttonPressed = null;
        return _this;
        // update (dt) {}
    }
    GameStart.prototype.start = function () {
    };
    GameStart.prototype.setProperties = function (delegate, gameType, groupof) {
        var keyString = "";
        switch (gameType) {
            case constants_1.GAME_TYPE.FIND:
                keyString = "find";
                break;
            case constants_1.GAME_TYPE.MIRROR:
                keyString = "mirror";
                break;
        }
        this.gameName.node.getComponent("localiser").key = keyString;
        console.log('keyString', keyString);
        this.gameName.node.getComponent("localiser").replaceValue("" + groupof);
        this._delegate = delegate;
        // console.log("key is", `instructionsFor${ keyString}${groupof}`, this.instraction.string);
        this.instraction.getComponent('localiser').key = "instructionsFor" + keyString + groupof;
        this.instraction.getComponent('localiser').setStringForKey();
    };
    GameStart.prototype.onAccept = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this._delegate.stopTutorials();
    };
    __decorate([
        property(cc.Label)
    ], GameStart.prototype, "gameName", void 0);
    __decorate([
        property(cc.Label)
    ], GameStart.prototype, "prize", void 0);
    __decorate([
        property(cc.Label)
    ], GameStart.prototype, "instraction", void 0);
    __decorate([
        property(cc.Button)
    ], GameStart.prototype, "accept", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameStart.prototype, "buttonPressed", void 0);
    GameStart = __decorate([
        ccclass
    ], GameStart);
    return GameStart;
}(cc.Component));
exports.default = GameStart;

cc._RF.pop();