
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Localisation/LanguageChanger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ee636OXbJBvYK1VBBbBSx6', 'LanguageChanger');
// scripts/Localisation/LanguageChanger.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LangueChanger = /** @class */ (function (_super) {
    __extends(LangueChanger, _super);
    function LangueChanger() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.buttonPressed = null;
        return _this;
        // update (dt) {}
    }
    LangueChanger.prototype.start = function () {
    };
    LangueChanger.prototype.onLanguageChange = function (Event, selected) {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        console.log("slected languaue", selected, constants_1.LANGUAGES[selected], constants_1.LANGUAGES[selected]);
        cc.sys.localStorage.setItem("Language", constants_1.LANGUAGES[selected]);
        GameManager_1.GameManager.getInstance().changeCurrentLanguage();
        cc.game.emit("onLanguageChanged");
        this.node.active = false;
    };
    __decorate([
        property(cc.AudioClip)
    ], LangueChanger.prototype, "buttonPressed", void 0);
    LangueChanger = __decorate([
        ccclass
    ], LangueChanger);
    return LangueChanger;
}(cc.Component));
exports.default = LangueChanger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0xvY2FsaXNhdGlvbi9MYW5ndWFnZUNoYW5nZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaURBQTZDO0FBQzdDLHVEQUFzRDtBQUN0RCx5REFBb0Q7QUFDOUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFFSSx3QkFBd0I7UUFGNUIscUVBc0JDO1FBbEJHLGVBQWU7UUFFZixtQkFBYSxHQUFZLElBQUksQ0FBQzs7UUFlOUIsaUJBQWlCO0lBQ3JCLENBQUM7SUFkRyw2QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHdDQUFnQixHQUFoQixVQUFpQixLQUFhLEVBQUUsUUFBUTtRQUNwQyxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzdELHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNsRCxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBYkg7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3REFDTztJQU5iLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FzQmpDO0lBQUQsb0JBQUM7Q0F0QkQsQUFzQkMsQ0F0QjBDLEVBQUUsQ0FBQyxTQUFTLEdBc0J0RDtrQkF0Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHtMQU5HVUFHRVN9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCJcbmltcG9ydCB7IEdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXJzL0dhbWVNYW5hZ2VyXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXJcIjtcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmd1ZUNoYW5nZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGJ1dHRvblByZXNzZWQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIG9uTGFuZ3VhZ2VDaGFuZ2UoRXZlbnQgOiBFdmVudCwgc2VsZWN0ZWQpe1xuICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uUHJlc3NlZCwgZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNsZWN0ZWQgbGFuZ3VhdWVcIiwgc2VsZWN0ZWQsIExBTkdVQUdFU1tzZWxlY3RlZF0sIExBTkdVQUdFU1tzZWxlY3RlZF0pO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMYW5ndWFnZVwiLCBMQU5HVUFHRVNbc2VsZWN0ZWRdKTtcbiAgICAgICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGFuZ2VDdXJyZW50TGFuZ3VhZ2UoKTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwib25MYW5ndWFnZUNoYW5nZWRcIik7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=