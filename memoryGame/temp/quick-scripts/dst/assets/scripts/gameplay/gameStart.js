
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameplay/gameStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L2dhbWVTdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBMkQ7QUFFM0QseURBQW9EO0FBRXBELG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGO0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0RDO1FBakRXLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBZSxJQUFJLENBQUE7UUFJekIsbUJBQWEsR0FBa0IsSUFBSSxDQUFDOztRQWlDcEMsaUJBQWlCO0lBQ3JCLENBQUM7SUFoQ0cseUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxpQ0FBYSxHQUFiLFVBQWMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPO1FBQ3JDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixRQUFPLFFBQVEsRUFBQztZQUNaLEtBQUsscUJBQVMsQ0FBQyxJQUFJO2dCQUNmLFNBQVMsR0FBRyxNQUFNLENBQUM7Z0JBQ25CLE1BQU07WUFDVixLQUFLLHFCQUFTLENBQUMsTUFBTTtnQkFDakIsU0FBUyxHQUFHLFFBQVEsQ0FBQztnQkFDckIsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFHLE9BQVMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLDRGQUE0RjtRQUM1RixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsb0JBQW1CLFNBQVMsR0FBRyxPQUFTLENBQUE7UUFDekYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDakUsQ0FBQztJQUdELDRCQUFRLEdBQVI7UUFDSSxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7SUFFbkMsQ0FBQztJQTNDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2E7SUFsQm5CLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FvRDdCO0lBQUQsZ0JBQUM7Q0FwREQsQUFvREMsQ0FwRHNDLEVBQUUsQ0FBQyxTQUFTLEdBb0RsRDtrQkFwRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHQU1FX01PREUgLCBHQU1FX1RZUEV9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlcnMvU291bmRNYW5hZ2VyXCI7XG5cbi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGFydCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIHByaXZhdGUgX2RlbGVnYXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZ2FtZU5hbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml6ZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGluc3RyYWN0aW9uIDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBhY2NlcHQgOiBjYy5CdXR0b24gPSBudWxsXG5cblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYnV0dG9uUHJlc3NlZCA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBzZXRQcm9wZXJ0aWVzKGRlbGVnYXRlLCBnYW1lVHlwZSwgZ3JvdXBvZil7XG4gICAgICAgIGxldCBrZXlTdHJpbmcgPSBcIlwiO1xuICAgICAgICBzd2l0Y2goZ2FtZVR5cGUpe1xuICAgICAgICAgICAgY2FzZSBHQU1FX1RZUEUuRklORDpcbiAgICAgICAgICAgICAgICBrZXlTdHJpbmcgPSBcImZpbmRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR0FNRV9UWVBFLk1JUlJPUjpcbiAgICAgICAgICAgICAgICBrZXlTdHJpbmcgPSBcIm1pcnJvclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWVOYW1lLm5vZGUuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLmtleSA9IGtleVN0cmluZztcbiAgICAgICAgY29uc29sZS5sb2coJ2tleVN0cmluZycsIGtleVN0cmluZyk7XG4gICAgICAgIHRoaXMuZ2FtZU5hbWUubm9kZS5nZXRDb21wb25lbnQoXCJsb2NhbGlzZXJcIikucmVwbGFjZVZhbHVlKGAke2dyb3Vwb2Z9YCk7XG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5IGlzXCIsIGBpbnN0cnVjdGlvbnNGb3IkeyBrZXlTdHJpbmd9JHtncm91cG9mfWAsIHRoaXMuaW5zdHJhY3Rpb24uc3RyaW5nKTtcbiAgICAgICAgdGhpcy5pbnN0cmFjdGlvbi5nZXRDb21wb25lbnQoJ2xvY2FsaXNlcicpLmtleSA9IGBpbnN0cnVjdGlvbnNGb3IkeyBrZXlTdHJpbmd9JHtncm91cG9mfWBcbiAgICAgICAgdGhpcy5pbnN0cmFjdGlvbi5nZXRDb21wb25lbnQoJ2xvY2FsaXNlcicpLnNldFN0cmluZ0ZvcktleSgpO1xuICAgIH1cblxuXG4gICAgb25BY2NlcHQoKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvblByZXNzZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUuc3RvcFR1dG9yaWFscygpO1xuXG4gICAgfVxuXG4gIFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=