
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/helper/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7aa9baqp45Cz4gRhMRED/OS', 'constants');
// scripts/helper/constants.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.GAME_TYPE = exports.GAME_LINK = exports.LANGUAGES = exports.END_POP_UP = exports.GAME_MODE = exports.GAME_SCREEN = void 0;
var GAME_SCREEN;
(function (GAME_SCREEN) {
    GAME_SCREEN[GAME_SCREEN["HOME"] = 1] = "HOME";
    GAME_SCREEN[GAME_SCREEN["LEVEL_SELECTION"] = 2] = "LEVEL_SELECTION";
    GAME_SCREEN[GAME_SCREEN["GAME_PLAY"] = 3] = "GAME_PLAY";
    GAME_SCREEN[GAME_SCREEN["SETTINGS"] = 4] = "SETTINGS";
    GAME_SCREEN[GAME_SCREEN["FUTURE_ANNOCMENTS"] = 5] = "FUTURE_ANNOCMENTS";
})(GAME_SCREEN = exports.GAME_SCREEN || (exports.GAME_SCREEN = {}));
exports.GAME_MODE = {
    PRACTICE: "practice",
    NORMAL: "normal",
    MEDIUM: "medium",
    HARD: "hard"
};
var END_POP_UP;
(function (END_POP_UP) {
    END_POP_UP[END_POP_UP["NEW_RECORD"] = 1] = "NEW_RECORD";
    END_POP_UP[END_POP_UP["CLEARD"] = 2] = "CLEARD";
    END_POP_UP[END_POP_UP["FAILED"] = 3] = "FAILED";
})(END_POP_UP = exports.END_POP_UP || (exports.END_POP_UP = {}));
exports.LANGUAGES = {
    ENGLISH: "EN",
    SPANISH: "ES"
};
exports.GAME_LINK = {
    URL: "https://play.google.com/store/apps/details?id=com.no.color 6"
};
exports.GAME_TYPE = {
    FIND: 1,
    MIRROR: 2
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hlbHBlci9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7QUFHbEYsSUFBa0IsV0FNakI7QUFORCxXQUFrQixXQUFXO0lBQ3pCLDZDQUFRLENBQUE7SUFDUixtRUFBZSxDQUFBO0lBQ2YsdURBQVMsQ0FBQTtJQUNULHFEQUFRLENBQUE7SUFDUix1RUFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBTmlCLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBTTVCO0FBR2EsUUFBQSxTQUFTLEdBQUc7SUFDckIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsTUFBTSxFQUFHLFFBQVE7SUFDakIsTUFBTSxFQUFHLFFBQVE7SUFDakIsSUFBSSxFQUFHLE1BQU07Q0FDakIsQ0FBQTtBQUVELElBQWtCLFVBSWpCO0FBSkQsV0FBa0IsVUFBVTtJQUN4Qix1REFBYyxDQUFBO0lBQ2QsK0NBQU0sQ0FBQTtJQUNOLCtDQUFNLENBQUE7QUFDVixDQUFDLEVBSmlCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBSTNCO0FBRVksUUFBQSxTQUFTLEdBQUc7SUFDckIsT0FBTyxFQUFHLElBQUk7SUFDZCxPQUFPLEVBQUcsSUFBSTtDQUNqQixDQUFBO0FBRVksUUFBQSxTQUFTLEdBQUU7SUFDcEIsR0FBRyxFQUFHLDhEQUE4RDtDQUN2RSxDQUFBO0FBR1ksUUFBQSxTQUFTLEdBQUU7SUFDcEIsSUFBSSxFQUFHLENBQUM7SUFDUixNQUFNLEVBQUcsQ0FBQztDQUNiLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuXG5leHBvcnQgY29uc3QgZW51bSBHQU1FX1NDUkVFTiB7XG4gICAgSE9NRSA9IDEsXG4gICAgTEVWRUxfU0VMRUNUSU9OLFxuICAgIEdBTUVfUExBWSxcbiAgICBTRVRUSU5HUyxcbiAgICBGVVRVUkVfQU5OT0NNRU5UU1xufVxuXG5cbmV4cG9ydCBjb25zdCAgR0FNRV9NT0RFID0ge1xuICAgICBQUkFDVElDRSA6XCJwcmFjdGljZVwiLFxuICAgICBOT1JNQUwgOiBcIm5vcm1hbFwiLFxuICAgICBNRURJVU0gOiBcIm1lZGl1bVwiLFxuICAgICBIQVJEIDogXCJoYXJkXCJcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gRU5EX1BPUF9VUCB7XG4gICAgTkVXX1JFQ09SRCA9IDEsXG4gICAgQ0xFQVJELFxuICAgIEZBSUxFRFxufVxuXG5leHBvcnQgY29uc3QgTEFOR1VBR0VTID0ge1xuICAgIEVOR0xJU0ggOiBcIkVOXCIsXG4gICAgU1BBTklTSCA6IFwiRVNcIlxufVxuXG5leHBvcnQgY29uc3QgR0FNRV9MSU5LID17XG4gICAgVVJMIDogXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLm5vLmNvbG9yIDZcIlxufVxuXG5cbmV4cG9ydCBjb25zdCBHQU1FX1RZUEUgPXtcbiAgICBGSU5EIDogMSxcbiAgICBNSVJST1IgOiAyIFxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PrivacyPolicy/policy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '089d5/VhmlAz6jYq6PH5J7U', 'policy');
// scripts/PrivacyPolicy/policy.ts

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
var PrivacyPolicy = /** @class */ (function (_super) {
    __extends(PrivacyPolicy, _super);
    function PrivacyPolicy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.buttonPressed = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PrivacyPolicy.prototype.start = function () {
        console.log("on start called");
    };
    PrivacyPolicy.prototype.onEnable = function () {
        var _this = this;
        this.node.getComponent(cc.Animation).play("moveIn");
        this.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function () {
            _this.setString();
        })));
        // let ans = "";
        // for(let item of stringArray){
        //     ans += item;
        // }
    };
    PrivacyPolicy.prototype.onInAnimationEnd = function () {
    };
    PrivacyPolicy.prototype.setString = function () {
        var stringArray = GameManager_1.GameManager.getInstance().getString("privacyInformation");
        this.label.string = stringArray;
    };
    PrivacyPolicy.prototype.onBack = function () {
        this.node.getComponent(cc.Animation).play("privacyPloicyMoveOut");
    };
    PrivacyPolicy.prototype.onBackAnimationEnd = function () {
        console.log("called");
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], PrivacyPolicy.prototype, "label", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PrivacyPolicy.prototype, "buttonPressed", void 0);
    PrivacyPolicy = __decorate([
        ccclass
    ], PrivacyPolicy);
    return PrivacyPolicy;
}(cc.Component));
exports.default = PrivacyPolicy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1ByaXZhY3lQb2xpY3kvcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHVEQUFzRDtBQUN0RCx5REFBb0Q7QUFFOUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUF3REM7UUFyREcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUl6QixtQkFBYSxHQUFZLElBQUksQ0FBQzs7UUFnRDVCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0NHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsNkJBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUduQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN4RCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFckIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRUosZ0JBQWdCO1FBQ2hCLGdDQUFnQztRQUNoQyxtQkFBbUI7UUFDbkIsSUFBSTtJQUVSLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7SUFFQSxDQUFDO0lBR0QsaUNBQVMsR0FBVDtRQUNJLElBQU0sV0FBVyxHQUFFLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0lBQ3BDLENBQUM7SUFJRCw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFHRCwwQ0FBa0IsR0FBbEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDSTtJQUl6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3dEQUNPO0lBUFgsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXdEakM7SUFBRCxvQkFBQztDQXhERCxBQXdEQyxDQXhEMEMsRUFBRSxDQUFDLFNBQVMsR0F3RHREO2tCQXhEb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlcnMvU291bmRNYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpdmFjeVBvbGljeSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIFxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBidXR0b25QcmVzc2VkOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gc3RhcnQgY2FsbGVkXCIpO1xuXG5cbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIm1vdmVJblwiKTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMCksY2MuY2FsbEZ1bmMoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5nKCk7XG4gICAgICAgICAgIFxuICAgICAgICB9KSkpXG4gICAgICAgIFxuICAgICAgICAvLyBsZXQgYW5zID0gXCJcIjtcbiAgICAgICAgLy8gZm9yKGxldCBpdGVtIG9mIHN0cmluZ0FycmF5KXtcbiAgICAgICAgLy8gICAgIGFucyArPSBpdGVtO1xuICAgICAgICAvLyB9XG5cbiAgICB9XG5cbiAgICBvbkluQW5pbWF0aW9uRW5kKCl7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgc2V0U3RyaW5nKCl7XG4gICAgICAgIGxldCAgIHN0cmluZ0FycmF5PSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0cmluZyhcInByaXZhY3lJbmZvcm1hdGlvblwiKTtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBzdHJpbmdBcnJheTsgICAgICBcbiAgICB9XG5cblxuXG4gICAgb25CYWNrKCl7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwicHJpdmFjeVBsb2ljeU1vdmVPdXRcIik7XG4gICAgfVxuXG5cbiAgICBvbkJhY2tBbmltYXRpb25FbmQoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZWRcIik7XG4gICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5idXR0b25QcmVzc2VkLCBmYWxzZSk7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameplay/gamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6979/ZWV5IDKJN8bhNrScU', 'gamePlay');
// scripts/gameplay/gamePlay.ts

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
var constants_1 = require("../helper/constants");
var SoundManager_1 = require("../managers/SoundManager");
var AdManager_1 = require("../managers/AdManager");
var cardIndex = {
    GROUP_3_4: 0,
    GROUP_4_4: 1,
    GROUP_4_5: 2,
    GROUP_4_6: 3,
    GROUP_4_7: 4
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cards = [];
        _this._gridInfo = null;
        _this._level = 0;
        _this._timer = null;
        _this.OpenCards = [];
        _this.cardsInPair = [];
        _this.tutorialCards = [];
        _this.tutCardName = 0;
        _this.isTutoiral = false;
        _this.levelData = null;
        _this.interval = null;
        _this.isTouchBlocked = false;
        _this.totalTime = 0;
        _this.groupOf = 2;
        _this.progresser = null;
        _this.gameMode = '';
        _this.gameStartAlert = null;
        _this.gameEndAlert = null;
        _this.optionLayer = null;
        _this.cardPrefab = null;
        _this.options = null;
        _this.timerBar = null;
        _this.gameLayout = null;
        _this.bouns = null;
        _this.startPopUp = null;
        _this.gameEndPopUp = null;
        _this.containerNode = null;
        _this.correctAnswerAudio = null;
        _this.wrongAnswerAudiodFlip = null;
        _this.last5Sec = null;
        _this.clapping = null;
        _this.timesUp = null;
        _this.cardsSpriteFrames = [];
        _this.hand = null;
        _this.gameInstructions = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.hand.zIndex = 20;
        this.progresser = this.timerBar.node.getChildByName("bar");
        var animationClips = this.bouns.node.getComponent(cc.Animation);
        animationClips.on('finished', this.bounsAnimationCompleted, this);
        this.setOptions();
    };
    GamePlay.prototype.onDisable = function () {
        clearInterval(this.interval);
        this.OpenCards.length = 0;
        this.cardsInPair.length = 0;
        this.bouns.node.active = false;
        this.tutorialCards.length = 0;
    };
    GamePlay.prototype.onEnable = function () {
        if (this.optionLayer) {
            this.optionLayer
                .getComponent("options").updateHindText();
        }
    };
    GamePlay.prototype.setOptions = function () {
        this.optionLayer = cc.instantiate(this.options);
        this.optionLayer
            .getComponent("options").setDelegate(this);
        this.optionLayer;
        this.node.addChild(this.optionLayer);
        this.optionLayer.zIndex = 5;
    };
    // SETTING UP UI
    GamePlay.prototype.setUpUI = function (level, gameMode) {
        this.gameLayout.node.active = false;
        this.gameMode = gameMode;
        this._level = level;
        this.levelData = GameManager_1.GameManager.getInstance().getLevelData(this._level, this.gameMode);
        console.log("called 1000 times", this.levelData, this._level);
        this.setUpAlerts();
        this.loadLevelImages();
    };
    GamePlay.prototype.loadLevelImages = function () {
        var _this = this;
        GameManager_1.GameManager.getInstance()
            .loadLevelImages(this._level)
            .then(function (data) {
            _this.groupOf = _this.levelData.groupOf;
            _this.createAndShuffelCards();
            _this._gridInfo = _this.levelData.grid;
            _this.setGrid();
            _this.startGame();
            _this.bouns.node.getChildByName("bonus").string = _this.levelData.timer.bounsTime;
        })
            .catch(function (error) {
            console.log("erorr", error);
        });
    };
    GamePlay.prototype.setUpAlerts = function () {
        this.gameStartAlert = cc.instantiate(this.startPopUp);
        var timerTitle = this.levelData.timer.totalTime + "s";
        var levelInfo = GameManager_1.GameManager.getInstance().getLevelData(this._level);
        this.gameStartAlert.getComponent("gameStart").setProperties(this, levelInfo.gameType, levelInfo.groupOf);
        this.gameEndAlert = cc.instantiate(this.gameEndPopUp);
        this.gameEndAlert.getComponent("gameEnd").setProperties(this, this.gameMode);
        this.node.parent.addChild(this.gameStartAlert, 10);
        this.node.parent.addChild(this.gameEndAlert, 10);
        this.gameEndAlert.active = false;
        this.gameStartAlert.active = false;
    };
    GamePlay.prototype.setGrid = function () {
        console.log("set Grid dude");
        this.gameLayout.getComponent(cc.Widget).updateAlignment();
        this.containerNode.getComponent(cc.Widget).updateAlignment();
        this.gameLayout.node.removeAllChildren();
        var index = cardIndex["GROUP_" + this._gridInfo.col + "_" + this._gridInfo.row];
        var totalHeight = (this.containerNode.height - (this.gameLayout.spacingX * this._gridInfo.row));
        var spacing = this.gameLayout.spacingX * this._gridInfo.col;
        var width = this.containerNode.width - spacing;
        var scale = 1;
        var dummyWidth = 1;
        for (var i = 0; i < this._cards.length; i++) {
            var card = cc.instantiate(this.cardPrefab);
            card.getComponent("cards").setDelegate(this);
            card.getComponent("cards").setUpUI(this._cards[i].name, this._level, this.gameMode, this.cardsSpriteFrames[index]);
            var blockSize = width / this._gridInfo.col;
            var height = totalHeight / this._gridInfo.row;
            card.setScale(Math.min(blockSize / card.width, height / card.height));
            scale = card.scale;
            dummyWidth = card.width;
            this.gameLayout.node.addChild(card);
        }
        this.gameLayout.node.width = this._gridInfo.col * (scale * dummyWidth) + spacing;
        this.optionLayer.active = false;
    };
    GamePlay.prototype.createAndShuffelCards = function () {
        var _a;
        this._cards.length = 0;
        for (var i = 0; i < this.groupOf; i++) {
            (_a = this._cards).push.apply(_a, this.levelData.cards);
        }
        console.log("cards", this._cards, this._level);
        for (var index = this._cards.length - 1; index >= 0; index--) {
            var randomIndex = Math.floor(Math.random() * (index - 0) + 0);
            var swapElement = this._cards[randomIndex];
            var currentElement = this._cards[index];
            this._cards[index] = swapElement;
            this._cards[randomIndex] = currentElement;
        }
        if ((this._level + 1) % 10 == 1) {
            this.tutCardName = this._cards[Math.floor(Math.random() * (this._cards.length - 1) + 0)].name;
        }
    };
    GamePlay.prototype.FlipAllCards = function () {
        var _this = this;
        for (var _i = 0, _a = this.gameLayout.node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.getComponent("cards").unreveal();
            if ((this._level + 1) % 10 != 1) {
                child.getComponent('cards').disableOverlay();
            }
        }
        if ((this._level + 1) % 10 == 1) {
            this.tutorialCards = this.gameLayout.node.children.filter(function (item) { return item.getComponent('cards').getCardName() == _this.tutCardName; });
            console.log("tutorial cards", this.tutorialCards);
            // this.this.gameLayout.node.children
            this.isTutoiral = true;
            this.moveTutHand();
        }
    };
    GamePlay.prototype.moveTutHand = function () {
        var card = this.tutorialCards.shift();
        if (!card)
            return;
        card.parent.getComponent(cc.Widget).updateAlignment();
        card.getComponent('cards').disableOverlay();
        this.hand.active = true;
        var worldSpace = this.containerNode.convertToWorldSpace(card.getPosition());
        var nodeSpace = this.hand.parent.convertToNodeSpace(worldSpace);
        console.log("node space", card.getPosition(), worldSpace, card.parent);
        this.hand.y = nodeSpace.y - (card.height * card.scale);
        this.hand.x = nodeSpace.x;
        this.hand.runAction(cc.sequence(cc.moveBy(.5, 0, 50), cc.moveBy(.5, 0, -50)).repeat(200));
    };
    GamePlay.prototype.startGameTimer = function () {
        var _this = this;
        if (this.gameMode != constants_1.GAME_MODE.PRACTICE) {
            this.progresser.width = 0;
            this.timerBar.progress = 0;
            this.timerBar.totalLength = this.timerBar.node.width;
        }
        this._timer = 0;
        var target = this;
        this.totalTime = this.levelData.timer.totalTime;
        console.log("total length", this.timerBar.totalLength, this.levelData.timer.totalTime);
        this.interval = setInterval(function () {
            _this._timer++;
            target.optionLayer.getComponent("options").updateTimer(_this._timer, _this.totalTime);
            if (_this.gameMode != constants_1.GAME_MODE.PRACTICE) {
                _this.timerBar.progress = _this._timer / _this.totalTime;
                Math.abs(_this._timer - _this.totalTime) == 5
                    &&
                        SoundManager_1.default.getInstance().playEffect(_this.last5Sec, false);
                if (_this._timer == _this.totalTime) {
                    _this.isTouchBlocked = true;
                    clearInterval(_this.interval);
                    _this.endGame(false);
                }
            }
        }, 1000);
    };
    GamePlay.prototype.showCard = function (card) {
        console.log("shoow card of the game play", card);
        if (this.cardsInPair.length >= this.groupOf || this.isTouchBlocked) {
            return;
        }
        card.getComponent("cards").reveal();
        this.cardsInPair.push(card);
        this.isTutoiral && this.moveTutHand();
        this.cardsInPair.length > 1 && this.isPair();
        // this.isTutoiral 
    };
    GamePlay.prototype.isPair = function () {
        var _this = this;
        var cards = [];
        cards.length = 0;
        for (var i = 0; i < this.cardsInPair.length; i++) {
            cards.push(this.cardsInPair[i].getComponent('cards'));
        }
        var isMatch = true;
        for (var i = 0; i < cards.length - 1; i++) {
            if (cards[i].getCardName() !== cards[i + 1].getCardName()) {
                isMatch = false;
                break;
            }
        }
        console.log("isMatch", isMatch);
        if (isMatch) {
            console.log("inside this");
            if (this.cardsInPair.length != this.groupOf) {
                return;
            }
            this.isTouchBlocked = true;
            this.node.runAction(cc.sequence(cc.delayTime(0.2), cc.callFunc(function () {
                for (var _i = 0, cards_2 = cards; _i < cards_2.length; _i++) {
                    var cardScipt = cards_2[_i];
                    cardScipt.playCorrectAnimation();
                }
                _this.isTouchBlocked = false;
            })));
            for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
                var cardScipt = cards_1[_i];
                this.OpenCards.push(cardScipt.getCardName());
            }
            this.cardsInPair.length = 0;
            if (this.OpenCards.length == this._cards.length) {
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                    _this.endGame(true);
                })));
            }
            if (this.isTutoiral) {
                this.node.runAction(cc.sequence(cc.callFunc(function () {
                    _this.showGameInstructionPopUp();
                }), cc.delayTime(2), cc.callFunc(function () {
                    _this.stopTutorials();
                })));
                // show game pop up and then end the message 
                // loading 
            }
        }
        else {
            var target = this;
            this.isTouchBlocked = true;
            this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                for (var _i = 0, cards_3 = cards; _i < cards_3.length; _i++) {
                    var cardScipt = cards_3[_i];
                    cardScipt.unreveal();
                    _this.isTouchBlocked = false;
                }
                _this.cardsInPair.length = 0;
            })));
        }
        console.log("play sound", this.correctAnswerAudio, isMatch);
        this.node.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(function () {
            var clip = isMatch ? _this.correctAnswerAudio : _this.wrongAnswerAudiodFlip;
            SoundManager_1.default.getInstance().playEffect(clip, false);
        })));
    };
    GamePlay.prototype.endGame = function (isWon) {
        var _this = this;
        SoundManager_1.default.getInstance().stopAllSounds();
        clearInterval(this.interval);
        if (isWon) {
            var isNewRecord = false;
            var levelInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
            var levels = JSON.parse(levelInfo.level);
            // SoundManager.getInstance().playEffect(this.clapping, false);
            if (levels[this._level].time > this._timer) {
                levels[this._level].time = this._timer;
                if (this._level < levels.length - 1) {
                    levels[this._level + 1].isUnlock = true;
                }
                console.log("current level infp", levels[this._level].time, this._timer, JSON.parse(levelInfo.level)[this._level].time);
                levelInfo.level = JSON.stringify(levels);
                cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(levelInfo));
                isNewRecord = true;
            }
            this.gameEndAlert.getComponent("gameEnd").showPopUpFor(isNewRecord ? constants_1.END_POP_UP.NEW_RECORD : constants_1.END_POP_UP.CLEARD, this._level);
            this.gameEndAlert.active = true;
        }
        else {
            // SoundManager.getInstance().playEffect(this.timesUp, false);
            this.gameEndAlert.getComponent("gameEnd").showPopUpFor(constants_1.END_POP_UP.FAILED, this._level);
            this.gameEndAlert.active = true;
        }
        this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
            var clip = isWon ? _this.clapping : _this.timesUp;
            SoundManager_1.default.getInstance().playEffect(clip, false);
        })));
    };
    // pop ups DELEGATE METHODS 
    GamePlay.prototype.onPlayAgain = function () {
        this.gameEndAlert.active = false;
        if (!cc.sys.isBrowser) {
            AdManager_1.default.getInstance().showInterstital(this);
        }
        //MARK : TO DO CHECK WORK AFTER ADS COMES
        this.node.parent.getComponent("home").onBack();
        this.node.parent.getComponent("home").startGame();
    };
    GamePlay.prototype.startGame = function () {
        var _this = this;
        this.progresser.width = this.timerBar.node.width;
        this.timerBar.progress = 1;
        var target = this;
        var time = this.levelData.timer.memorizeTime;
        // this.gameStartAlert.removeFromParent();
        target.optionLayer.getComponent("options").updateTimer(time, this.levelData.timer.totalTime);
        target.optionLayer.active = true;
        this.gameLayout.node.active = true;
        this.isTouchBlocked = true;
        this.interval = setInterval(function () {
            target.optionLayer.getComponent("options").updateTimer(time, _this.levelData.timer.totalTime);
            time--;
            _this.timerBar.progress = time / _this.levelData.timer.memorizeTime;
            if (time === -1) {
                clearInterval(_this.interval);
                target.isTouchBlocked = false;
                target.FlipAllCards();
                if (!_this.isTutoiral) {
                    _this.startGameTimer();
                }
            }
        }, 1000);
    };
    GamePlay.prototype.onPlayAgainCancel = function () {
        this.gameEndAlert.active = false;
        this.gameEndAlert.removeFromParent();
        this.node.parent.getComponent("home").onBack();
    };
    GamePlay.prototype.gameEnded = function () {
        this.gameEndAlert.removeFromParent();
        var level = GameManager_1.GameManager.getInstance().getCurrentLevel();
        var totalLevelInMode = GameManager_1.GameManager.getInstance().getLevelInfo(this.gameMode);
        console.log("level", level == totalLevelInMode.length - 1);
        if (level == totalLevelInMode.length - 1) {
            this.node.parent.getComponent("home").showFutureDetailsScreen();
            GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.FUTURE_ANNOCMENTS);
        }
        else {
            cc.sys.localStorage.setItem("lastPlayedLevel", this._level + 1);
            this.node.parent.getComponent("home").onBack();
            this.node.parent.getComponent("home").startGame();
        }
    };
    // ANIMATION CALLBACKS :
    GamePlay.prototype.playBounsAnimation = function () {
        console.log("inside this play bouns animation");
        this.bouns.node.active = true;
        this.bouns.node.position = new cc.Vec2(0, 0);
        this.bouns.node.scale = 2;
        this.bouns.node.opacity = 255;
        this.bouns.node.getComponent(cc.Animation).play();
    };
    GamePlay.prototype.bounsAnimationCompleted = function () {
        this.bouns.node.active = false;
        this.totalTime += this.levelData.timer.bounsTime;
        console.log("bonys", this.levelData.timer, this.totalTime);
        this.optionLayer.getComponent("options").updateTimer(this._timer, this.totalTime);
        this.isTouchBlocked = false;
    };
    GamePlay.prototype.showGameInstructionPopUp = function () {
        this.gameStartAlert.active = true;
        this.hand.active = false;
    };
    GamePlay.prototype.stopTutorials = function () {
        this.isTutoiral = false;
        this.tutorialCards.length = 0;
        this.gameStartAlert.removeFromParent();
        for (var _i = 0, _a = this.gameLayout.node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.getComponent('cards').disableOverlay();
        }
        this.startGameTimer();
    };
    GamePlay.prototype.adHasbeenShown = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], GamePlay.prototype, "cardPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GamePlay.prototype, "options", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GamePlay.prototype, "timerBar", void 0);
    __decorate([
        property(cc.Layout)
    ], GamePlay.prototype, "gameLayout", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamePlay.prototype, "bouns", void 0);
    __decorate([
        property(cc.Prefab)
    ], GamePlay.prototype, "startPopUp", void 0);
    __decorate([
        property(cc.Prefab)
    ], GamePlay.prototype, "gameEndPopUp", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "containerNode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "correctAnswerAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "wrongAnswerAudiodFlip", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "last5Sec", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "clapping", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamePlay.prototype, "timesUp", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], GamePlay.prototype, "cardsSpriteFrames", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "gameInstructions", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L2dhbWVQbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFtRDtBQUNuRCxpREFBeUU7QUFDekUseURBQW9EO0FBQ3BELG1EQUE4QztBQUc5QyxJQUFRLFNBQVMsR0FBRztJQUNmLFNBQVMsRUFBRyxDQUFDO0lBQ2IsU0FBUyxFQUFHLENBQUM7SUFDYixTQUFTLEVBQUcsQ0FBQztJQUNiLFNBQVMsRUFBRyxDQUFDO0lBQ2IsU0FBUyxFQUFHLENBQUM7Q0FDakIsQ0FBQTtBQUdLLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeWZDO1FBdmZXLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFlBQU0sR0FBSyxDQUFDLENBQUM7UUFDYixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsZUFBUyxHQUFFLEVBQUUsQ0FBQztRQUNkLGlCQUFXLEdBQUUsRUFBRSxDQUFDO1FBQ2hCLG1CQUFhLEdBQUUsRUFBRSxDQUFDO1FBQ2xCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzFCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixpQkFBVyxHQUFHLElBQUks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LENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ25CLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUUsR0FBRyxPQUFPLENBQUM7UUFDcEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx3Q0FBcUIsR0FBckI7O1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDO1FBQ3RCLEtBQUksSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQzlCLENBQUEsS0FBQSxJQUFJLENBQUMsTUFBTSxDQUFBLENBQUMsSUFBSSxXQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO1NBQzdDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDaEQsS0FBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQztZQUNyRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FB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QUFDO3NEQUNlO0lBckVoQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeWY1QjtJQUFELGVBQUM7Q0F6ZkQsQUF5ZkMsQ0F6ZnFDLEVBQUUsQ0FBQyxTQUFTLEdBeWZqRDtrQkF6Zm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7R2FtZU1hbmFnZXJ9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiXG5pbXBvcnQgeyBHQU1FX01PREUsIEVORF9QT1BfVVAsIEdBTUVfU0NSRUVOIH0gZnJvbSBcIi4uL2hlbHBlci9jb25zdGFudHNcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJzL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlcnMvQWRNYW5hZ2VyXCI7XG5cblxuY29uc3QgICBjYXJkSW5kZXggPSB7XG4gICAgIEdST1VQXzNfNCA6IDAsXG4gICAgIEdST1VQXzRfNCA6IDEsXG4gICAgIEdST1VQXzRfNSA6IDIsXG4gICAgIEdST1VQXzRfNiA6IDMsXG4gICAgIEdST1VQXzRfNyA6IDRcbn1cblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgX2NhcmRzID0gW107XG4gICAgcHJpdmF0ZSBfZ3JpZEluZm8gPSBudWxsO1xuICAgIHByaXZhdGUgX2xldmVsICA9ICAwO1xuICAgIHByaXZhdGUgX3RpbWVyID0gbnVsbDtcbiAgICBwcml2YXRlIE9wZW5DYXJkcyA9W107XG4gICAgcHJpdmF0ZSBjYXJkc0luUGFpciA9W107XG4gICAgcHJpdmF0ZSB0dXRvcmlhbENhcmRzID1bXTtcbiAgICBwcml2YXRlIHR1dENhcmROYW1lID0gMDtcbiAgICBwcml2YXRlIGlzVHV0b2lyYWwgPSBmYWxzZTsgXG4gICAgcHJpdmF0ZSBsZXZlbERhdGEgPSBudWxsO1xuICAgIHByaXZhdGUgaW50ZXJ2YWwgPSBudWxsO1xuICAgIHByaXZhdGUgaXNUb3VjaEJsb2NrZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIHRvdGFsVGltZSA9IDA7XG4gICAgcHJpdmF0ZSBncm91cE9mID0gMjtcbiAgICBwcml2YXRlIHByb2dyZXNzZXIgPSBudWxsO1xuICAgIGdhbWVNb2RlID0gJyc7XG4gICAgZ2FtZVN0YXJ0QWxlcnQgPSBudWxsO1xuICAgIGdhbWVFbmRBbGVydCA9IG51bGw7XG4gICAgb3B0aW9uTGF5ZXIgPSBudWxsO1xuICAgIFxuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBjYXJkUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBvcHRpb25zOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIHRpbWVyQmFyIDogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxheW91dClcbiAgICBnYW1lTGF5b3V0IDogY2MuTGF5b3V0ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgYm91bnMgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBzdGFydFBvcFVwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ2FtZUVuZFBvcFVwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRhaW5lck5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBjb3JyZWN0QW5zd2VyQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHdyb25nQW5zd2VyQXVkaW9kRmxpcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGxhc3Q1U2VjOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBjbGFwcGluZzogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgdGltZXNVcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGNhcmRzU3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ2FtZUluc3RydWN0aW9uczogY2MuTm9kZSA9IG51bGw7XG5cbiAgIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgIG9uTG9hZCAoKSB7XG5cbiAgICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmhhbmQuekluZGV4ID0gMjA7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NlciA9IHRoaXMudGltZXJCYXIubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKTtcbiAgICAgICAgdmFyIGFuaW1hdGlvbkNsaXBzID0gdGhpcy5ib3Vucy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICBhbmltYXRpb25DbGlwcy5vbignZmluaXNoZWQnLCB0aGlzLmJvdW5zQW5pbWF0aW9uQ29tcGxldGVkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCl7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpICA7XG4gICAgICB0aGlzLk9wZW5DYXJkcy5sZW5ndGggPTA7XG4gICAgICB0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aCA9MDtcbiAgICAgIHRoaXMuYm91bnMubm9kZS5hY3RpdmUgPSBmYWxzZTsgXG4gICAgICB0aGlzLnR1dG9yaWFsQ2FyZHMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICBpZih0aGlzLm9wdGlvbkxheWVyKXtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uTGF5ZXJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoXCJvcHRpb25zXCIpLnVwZGF0ZUhpbmRUZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2V0T3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5vcHRpb25MYXllciA9IGNjLmluc3RhbnRpYXRlKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMub3B0aW9uTGF5ZXJcbiAgICAgICAgLmdldENvbXBvbmVudChcIm9wdGlvbnNcIikuc2V0RGVsZWdhdGUodGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9uTGF5ZXJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMub3B0aW9uTGF5ZXIpO1xuICAgICAgICB0aGlzLm9wdGlvbkxheWVyLnpJbmRleCA9IDU7XG4gICAgICB9XG5cbiAgICAvLyBTRVRUSU5HIFVQIFVJXG5cbiAgICBzZXRVcFVJKGxldmVsIDogbnVtYmVyLCBnYW1lTW9kZTpzdHJpbmcpe1xuICAgICAgICB0aGlzLmdhbWVMYXlvdXQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1lTW9kZSA9IGdhbWVNb2RlO1xuICAgICAgICB0aGlzLl9sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxEYXRhKHRoaXMuX2xldmVsICwgdGhpcy5nYW1lTW9kZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGVkIDEwMDAgdGltZXNcIiwgdGhpcy5sZXZlbERhdGEgLCB0aGlzLl9sZXZlbCApO1xuICAgICAgICB0aGlzLnNldFVwQWxlcnRzKCk7XG4gICAgICAgIHRoaXMubG9hZExldmVsSW1hZ2VzKCk7XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgIGxvYWRMZXZlbEltYWdlcygpe1xuICAgICAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgICAgIC5sb2FkTGV2ZWxJbWFnZXModGhpcy5fbGV2ZWwpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5ncm91cE9mID0gIHRoaXMubGV2ZWxEYXRhLmdyb3VwT2Y7XG4gICAgICAgICAgdGhpcy5jcmVhdGVBbmRTaHVmZmVsQ2FyZHMoKTtcbiAgICAgICAgICB0aGlzLl9ncmlkSW5mbyA9IHRoaXMubGV2ZWxEYXRhLmdyaWQ7XG4gICAgICAgICAgdGhpcy5zZXRHcmlkKCk7XG4gICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgICB0aGlzLmJvdW5zLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib251c1wiKS5zdHJpbmcgPSB0aGlzLmxldmVsRGF0YS50aW1lci5ib3Vuc1RpbWU7XG4gICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVyb3JyXCIsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgIH1cbiAgICBzZXRVcEFsZXJ0cyAoKXtcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRBbGVydCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhcnRQb3BVcCk7XG4gICAgICAgIGxldCB0aW1lclRpdGxlID0gYCR7dGhpcy5sZXZlbERhdGEudGltZXIudG90YWxUaW1lfXNgO1xuICAgICAgICBsZXQgbGV2ZWxJbmZvID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbERhdGEodGhpcy5fbGV2ZWwpO1xuICAgICAgICB0aGlzLmdhbWVTdGFydEFsZXJ0LmdldENvbXBvbmVudChcImdhbWVTdGFydFwiKS5zZXRQcm9wZXJ0aWVzKHRoaXMsIGxldmVsSW5mby5nYW1lVHlwZSwgbGV2ZWxJbmZvLmdyb3VwT2YpO1xuICAgICAgICB0aGlzLmdhbWVFbmRBbGVydCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVuZFBvcFVwKTtcbiAgICAgICAgdGhpcy5nYW1lRW5kQWxlcnQuZ2V0Q29tcG9uZW50KFwiZ2FtZUVuZFwiKS5zZXRQcm9wZXJ0aWVzKHRoaXMsIHRoaXMuZ2FtZU1vZGUpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHRoaXMuZ2FtZVN0YXJ0QWxlcnQsMTApO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHRoaXMuZ2FtZUVuZEFsZXJ0LDEwKTtcbiAgICAgICAgdGhpcy5nYW1lRW5kQWxlcnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0QWxlcnQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0R3JpZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXQgR3JpZCBkdWRlXCIpO1xuICAgICAgICB0aGlzLmdhbWVMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyTm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5nYW1lTGF5b3V0Lm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgbGV0IGluZGV4ID0gY2FyZEluZGV4W2BHUk9VUF8ke3RoaXMuX2dyaWRJbmZvLmNvbH1fJHt0aGlzLl9ncmlkSW5mby5yb3d9YF07XG4gICAgICAgIGxldCB0b3RhbEhlaWdodCA9ICh0aGlzLmNvbnRhaW5lck5vZGUuaGVpZ2h0IC0gKHRoaXMuZ2FtZUxheW91dC5zcGFjaW5nWCp0aGlzLl9ncmlkSW5mby5yb3cpKTtcbiAgICAgICAgbGV0IHNwYWNpbmcgPSB0aGlzLmdhbWVMYXlvdXQuc3BhY2luZ1ggKiB0aGlzLl9ncmlkSW5mby5jb2w7XG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMuY29udGFpbmVyTm9kZS53aWR0aCAtIHNwYWNpbmc7XG4gICAgICAgIGxldCBzY2FsZSA9IDE7XG4gICAgICAgIGxldCBkdW1teVdpZHRoID0gMTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuX2NhcmRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkUHJlZmFiKTtcbiAgICAgICAgICAgIGNhcmQuZ2V0Q29tcG9uZW50KFwiY2FyZHNcIikuc2V0RGVsZWdhdGUodGhpcyk7XG4gICAgICAgICAgICBjYXJkLmdldENvbXBvbmVudChcImNhcmRzXCIpLnNldFVwVUkodGhpcy5fY2FyZHNbaV0ubmFtZSwgdGhpcy5fbGV2ZWwsIHRoaXMuZ2FtZU1vZGUsIHRoaXMuY2FyZHNTcHJpdGVGcmFtZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIGxldCBibG9ja1NpemUgPSB3aWR0aCAvIHRoaXMuX2dyaWRJbmZvLmNvbDtcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0b3RhbEhlaWdodC8gdGhpcy5fZ3JpZEluZm8ucm93O1xuICAgICAgICAgICAgY2FyZC5zZXRTY2FsZShNYXRoLm1pbihibG9ja1NpemUvY2FyZC53aWR0aCwgaGVpZ2h0L2NhcmQuaGVpZ2h0KSk7XG4gICAgICAgICAgICBzY2FsZSA9IGNhcmQuc2NhbGU7XG4gICAgICAgICAgICBkdW1teVdpZHRoID0gY2FyZC53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUxheW91dC5ub2RlLmFkZENoaWxkKGNhcmQpO1xuICAgICAgICB9ICBcbiAgICAgICAgdGhpcy5nYW1lTGF5b3V0Lm5vZGUud2lkdGggPSAgIHRoaXMuX2dyaWRJbmZvLmNvbCAqIChzY2FsZSAqIGR1bW15V2lkdGggKSArIHNwYWNpbmc7XG4gICAgICAgIHRoaXMub3B0aW9uTGF5ZXIuYWN0aXZlID0gZmFsc2U7ICAgIFxuICAgIH1cblxuICAgIGNyZWF0ZUFuZFNodWZmZWxDYXJkcygpe1xuICAgICAgICB0aGlzLl9jYXJkcy5sZW5ndGggPTA7XG4gICAgICAgIGZvcihsZXQgaSA9MDsgaTx0aGlzLmdyb3VwT2Y7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLl9jYXJkcy5wdXNoKC4uLnRoaXMubGV2ZWxEYXRhLmNhcmRzKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcImNhcmRzXCIsIHRoaXMuX2NhcmRzLCB0aGlzLl9sZXZlbCApO1xuICAgICAgICBmb3IobGV0IGluZGV4ID0gdGhpcy5fY2FyZHMubGVuZ3RoLTE7IGluZGV4Pj0gMDsgaW5kZXgtLSl7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaW5kZXggLSAwKSArIDApO1xuICAgICAgICAgICAgbGV0IHN3YXBFbGVtZW50ID0gdGhpcy5fY2FyZHNbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gdGhpcy5fY2FyZHNbaW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5fY2FyZHNbaW5kZXhdID0gc3dhcEVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLl9jYXJkc1tyYW5kb21JbmRleF0gPSBjdXJyZW50RWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCh0aGlzLl9sZXZlbCArMSklIDEwID09IDEpe1xuICAgICAgICAgICB0aGlzLnR1dENhcmROYW1lID0gdGhpcy5fY2FyZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuX2NhcmRzLmxlbmd0aCAtIDEpICsgMCldLm5hbWU7XG4gICAgICAgICAgXG4gICAgICAgIH1cblxuXG5cbiAgICB9XG5cbiAgICBGbGlwQWxsQ2FyZHMoKXtcbiAgICAgICAgZm9yKGxldCBjaGlsZCBvZiB0aGlzLmdhbWVMYXlvdXQubm9kZS5jaGlsZHJlbil7XG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoXCJjYXJkc1wiKS51bnJldmVhbCgpO1xuICAgICAgICAgICAgaWYoKHRoaXMuX2xldmVsKzEpICUgMTAgIT0gMSl7XG4gICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudCgnY2FyZHMnKS5kaXNhYmxlT3ZlcmxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoKHRoaXMuX2xldmVsKzEpICUgMTAgPT0gMSl7XG4gICAgICAgICAgICB0aGlzLnR1dG9yaWFsQ2FyZHMgPSB0aGlzLmdhbWVMYXlvdXQubm9kZS5jaGlsZHJlbi5maWx0ZXIoaXRlbSA9PiAgaXRlbS5nZXRDb21wb25lbnQoJ2NhcmRzJykuZ2V0Q2FyZE5hbWUoKSA9PSB0aGlzLnR1dENhcmROYW1lKTsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInR1dG9yaWFsIGNhcmRzXCIsICB0aGlzLnR1dG9yaWFsQ2FyZHMpO1xuICAgICAgICAgICAgLy8gdGhpcy50aGlzLmdhbWVMYXlvdXQubm9kZS5jaGlsZHJlblxuICAgICAgICAgICAgdGhpcy5pc1R1dG9pcmFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubW92ZVR1dEhhbmQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG4gICAgbW92ZVR1dEhhbmQoKXtcbiAgICAgICAgbGV0IGNhcmQgPSB0aGlzLnR1dG9yaWFsQ2FyZHMuc2hpZnQoKTtcbiAgICAgICAgaWYoIWNhcmQpIHJldHVybjtcbiAgICAgICAgY2FyZC5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgIGNhcmQuZ2V0Q29tcG9uZW50KCdjYXJkcycpLmRpc2FibGVPdmVybGF5KCk7XG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgd29ybGRTcGFjZSA9IHRoaXMuY29udGFpbmVyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlKGNhcmQuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGxldCBub2RlU3BhY2UgPSB0aGlzLmhhbmQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZSh3b3JsZFNwYWNlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJub2RlIHNwYWNlXCIsIGNhcmQuZ2V0UG9zaXRpb24oKSwgd29ybGRTcGFjZSwgY2FyZC5wYXJlbnQpO1xuICAgICAgICB0aGlzLmhhbmQueSA9IG5vZGVTcGFjZS55IC0gKGNhcmQuaGVpZ2h0ICAqIGNhcmQuc2NhbGUpO1xuICAgICAgICB0aGlzLmhhbmQueCA9IG5vZGVTcGFjZS54O1xuICAgICAgICB0aGlzLmhhbmQucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSguNSwgIDAgLCA1MCksIGNjLm1vdmVCeSguNSwgMCwgLTUwKSkucmVwZWF0KDIwMCkpO1xuICAgIH1cblxuXG4gICAgc3RhcnRHYW1lVGltZXIgKCl7XG4gICAgICAgIGlmKHRoaXMuZ2FtZU1vZGUgIT0gR0FNRV9NT0RFLlBSQUNUSUNFKXtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Nlci53aWR0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLnRpbWVyQmFyLnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIHRoaXMudGltZXJCYXIudG90YWxMZW5ndGggPSB0aGlzLnRpbWVyQmFyLm5vZGUud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgdGhpcy5fdGltZXIgPSAwO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgPSB0aGlzLmxldmVsRGF0YS50aW1lci50b3RhbFRpbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG90YWwgbGVuZ3RoXCIsIHRoaXMudGltZXJCYXIudG90YWxMZW5ndGgsIHRoaXMubGV2ZWxEYXRhLnRpbWVyLnRvdGFsVGltZSk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5fdGltZXIrKztcbiAgICAgICAgICAgIHRhcmdldC5vcHRpb25MYXllci5nZXRDb21wb25lbnQoXCJvcHRpb25zXCIpLnVwZGF0ZVRpbWVyKHRoaXMuX3RpbWVyICwgdGhpcy50b3RhbFRpbWUpXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVNb2RlICE9IEdBTUVfTU9ERS5QUkFDVElDRSl7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lckJhci5wcm9ncmVzcyAgPSB0aGlzLl90aW1lciAgLyB0aGlzLnRvdGFsVGltZTtcbiAgICAgICAgICAgICAgICBNYXRoLmFicyh0aGlzLl90aW1lciAgLSB0aGlzLnRvdGFsVGltZSkgPT0gNVxuICAgICAgICAgICAgICAgICAmJiBcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMubGFzdDVTZWMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl90aW1lciAgPT0gdGhpcy50b3RhbFRpbWUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVG91Y2hCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTsgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEdhbWUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cblxuICAgIHNob3dDYXJkKGNhcmQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNob293IGNhcmQgb2YgdGhlIGdhbWUgcGxheVwiLCBjYXJkKTtcbiAgICAgICAgaWYodGhpcy5jYXJkc0luUGFpci5sZW5ndGggPj0gdGhpcy5ncm91cE9mIHx8IHRoaXMuaXNUb3VjaEJsb2NrZWQpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNhcmQuZ2V0Q29tcG9uZW50KFwiY2FyZHNcIikucmV2ZWFsKCk7XG4gICAgICAgIHRoaXMuY2FyZHNJblBhaXIucHVzaChjYXJkKTtcbiAgICAgICAgdGhpcy5pc1R1dG9pcmFsICYmIHRoaXMubW92ZVR1dEhhbmQoKTtcbiAgICAgICAgdGhpcy5jYXJkc0luUGFpci5sZW5ndGggPiAxICYmIHRoaXMuaXNQYWlyKCk7XG4gICAgICAgXG4gICAgICAgXG4gICAgICAgIC8vIHRoaXMuaXNUdXRvaXJhbCBcbiAgICB9XG5cbiAgICBcbiAgICBpc1BhaXIoKXtcbiAgICAgICAgbGV0IGNhcmRzID0gW107XG4gICAgICAgIGNhcmRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPCB0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNhcmRzLnB1c2godGhpcy5jYXJkc0luUGFpcltpXS5nZXRDb21wb25lbnQoJ2NhcmRzJykpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNNYXRjaCAgPSB0cnVlO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoIC0gMTsgaSsrICl7XG4gICAgICAgICAgICBpZihjYXJkc1tpXS5nZXRDYXJkTmFtZSgpICE9PSBjYXJkc1tpKzFdLmdldENhcmROYW1lKCkpe1xuICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXNNYXRjaFwiLCBpc01hdGNoKTtcbiAgICAgICAgaWYoIGlzTWF0Y2ggKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHRoaXNcIik7XG4gICAgICAgICAgICBpZih0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aCAhPSB0aGlzLmdyb3VwT2Ype1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICB0aGlzLmlzVG91Y2hCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuMiksIGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICBmb3IobGV0IGNhcmRTY2lwdCBvZiBjYXJkcyl7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRTY2lwdC5wbGF5Q29ycmVjdEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc1RvdWNoQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgIGZvcihsZXQgY2FyZFNjaXB0IG9mIGNhcmRzKXtcbiAgICAgICAgICAgICAgICB0aGlzLk9wZW5DYXJkcy5wdXNoKGNhcmRTY2lwdC5nZXRDYXJkTmFtZSgpKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FyZHNJblBhaXIubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGlmKHRoaXMuT3BlbkNhcmRzLmxlbmd0aCA9PSB0aGlzLl9jYXJkcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksIGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRHYW1lKHRydWUpO1xuICAgICAgICAgICAgICAgfSkpKTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuaXNUdXRvaXJhbCl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKCBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dHYW1lSW5zdHJ1Y3Rpb25Qb3BVcCgpO1xuICAgICAgICAgICAgICAgICAgIH0pLCBjYy5kZWxheVRpbWUoMiksIGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcFR1dG9yaWFscygpO1xuICAgICAgICAgICAgICAgICAgIH0pKSk7IFxuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLyBzaG93IGdhbWUgcG9wIHVwIGFuZCB0aGVuIGVuZCB0aGUgbWVzc2FnZSBcbiAgICAgICAgICAgICAgICAvLyBsb2FkaW5nIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmlzVG91Y2hCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLCBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgIGZvcihsZXQgY2FyZFNjaXB0IG9mIGNhcmRzKXtcbiAgICAgICAgICAgICAgICAgICAgY2FyZFNjaXB0LnVucmV2ZWFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUb3VjaEJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkc0luUGFpci5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheSBzb3VuZFwiLCB0aGlzLmNvcnJlY3RBbnN3ZXJBdWRpbywgaXNNYXRjaCk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuMyksIGNjLmNhbGxGdW5jKCAoKT0+e1xuICAgICAgICAgICAgbGV0IGNsaXAgPSBpc01hdGNoID8gdGhpcy5jb3JyZWN0QW5zd2VyQXVkaW8gOiB0aGlzLndyb25nQW5zd2VyQXVkaW9kRmxpcDtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xuICAgICAgICB9KSkpO1xuICAgIH1cblxuXG4gICAgZW5kR2FtZSAoaXNXb24pIHtcbiAgICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnN0b3BBbGxTb3VuZHMoKTtcbiAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIGlmKGlzV29uKXtcbiAgICAgICAgICAgIGxldCBpc05ld1JlY29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGxldmVsSW5mbyA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTGV2ZWxJbmZvXCIpKTtcbiAgICAgICAgICAgIGxldCBsZXZlbHMgPSAgSlNPTi5wYXJzZShsZXZlbEluZm8ubGV2ZWwpO1xuICAgICAgICAgICAgLy8gU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmNsYXBwaW5nLCBmYWxzZSk7XG4gICAgICAgICAgICBpZihsZXZlbHNbdGhpcy5fbGV2ZWxdLnRpbWUgPiB0aGlzLl90aW1lcil7XG4gICAgICAgICAgICAgICAgbGV2ZWxzW3RoaXMuX2xldmVsXS50aW1lID0gdGhpcy5fdGltZXI7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fbGV2ZWwgPCBsZXZlbHMubGVuZ3RoLTEpe1xuICAgICAgICAgICAgICAgICAgICBsZXZlbHNbdGhpcy5fbGV2ZWwrMV0uaXNVbmxvY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgbGV2ZWwgaW5mcFwiLCBsZXZlbHNbdGhpcy5fbGV2ZWxdLnRpbWUsIHRoaXMuX3RpbWVyLCBKU09OLnBhcnNlKGxldmVsSW5mby5sZXZlbClbdGhpcy5fbGV2ZWxdLnRpbWUpO1xuICAgICAgICAgICAgICAgIGxldmVsSW5mby5sZXZlbCA9IEpTT04uc3RyaW5naWZ5KGxldmVscyk7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTGV2ZWxJbmZvXCIsIEpTT04uc3RyaW5naWZ5KGxldmVsSW5mbykpO1xuICAgICAgICAgICAgICAgIGlzTmV3UmVjb3JkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2FtZUVuZEFsZXJ0LmdldENvbXBvbmVudChcImdhbWVFbmRcIikuc2hvd1BvcFVwRm9yKGlzTmV3UmVjb3JkID8gRU5EX1BPUF9VUC5ORVdfUkVDT1JEOiBFTkRfUE9QX1VQLkNMRUFSRCwgdGhpcy5fbGV2ZWwpO1xuICAgICAgICAgICAgdGhpcy5nYW1lRW5kQWxlcnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMudGltZXNVcCwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5nYW1lRW5kQWxlcnQuZ2V0Q29tcG9uZW50KFwiZ2FtZUVuZFwiKS5zaG93UG9wVXBGb3IoRU5EX1BPUF9VUC5GQUlMRUQsdGhpcy5fbGV2ZWwpO1xuICAgICAgICAgICAgdGhpcy5nYW1lRW5kQWxlcnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuNSksIGNjLmNhbGxGdW5jKCAoKT0+e1xuICAgICAgICAgICAgbGV0IGNsaXAgPSBpc1dvbiA/IHRoaXMuY2xhcHBpbmcgOiB0aGlzLnRpbWVzVXA7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcbiAgICAgICAgfSkpKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gcG9wIHVwcyBERUxFR0FURSBNRVRIT0RTIFxuICAgIG9uUGxheUFnYWluICgpe1xuICAgICAgICB0aGlzLmdhbWVFbmRBbGVydC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYoIWNjLnN5cy5pc0Jyb3dzZXIpe1xuICAgICAgICAgICAgICAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zaG93SW50ZXJzdGl0YWwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy9NQVJLIDogVE8gRE8gQ0hFQ0sgV09SSyBBRlRFUiBBRFMgQ09NRVNcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJob21lXCIpLm9uQmFjaygpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgXG4gICAgc3RhcnRHYW1lKCl7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3Nlci53aWR0aCA9IHRoaXMudGltZXJCYXIubm9kZS53aWR0aDsgICBcbiAgICAgICAgdGhpcy50aW1lckJhci5wcm9ncmVzcyA9IDE7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMubGV2ZWxEYXRhLnRpbWVyLm1lbW9yaXplVGltZTtcbiAgICAgICAgLy8gdGhpcy5nYW1lU3RhcnRBbGVydC5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIHRhcmdldC5vcHRpb25MYXllci5nZXRDb21wb25lbnQoXCJvcHRpb25zXCIpLnVwZGF0ZVRpbWVyKHRpbWUsIHRoaXMubGV2ZWxEYXRhLnRpbWVyLnRvdGFsVGltZSlcbiAgICAgICAgdGFyZ2V0Lm9wdGlvbkxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZUxheW91dC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNUb3VjaEJsb2NrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgIHRhcmdldC5vcHRpb25MYXllci5nZXRDb21wb25lbnQoXCJvcHRpb25zXCIpLnVwZGF0ZVRpbWVyKHRpbWUsIHRoaXMubGV2ZWxEYXRhLnRpbWVyLnRvdGFsVGltZSlcbiAgICAgICAgICAgIHRpbWUtLTtcbiAgICAgICAgICAgIHRoaXMudGltZXJCYXIucHJvZ3Jlc3MgPSB0aW1lL3RoaXMubGV2ZWxEYXRhLnRpbWVyLm1lbW9yaXplVGltZTtcbiAgICAgICAgICAgIGlmKHRpbWUgPT09IC0xKXtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5pc1RvdWNoQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRhcmdldC5GbGlwQWxsQ2FyZHMoKTtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5pc1R1dG9pcmFsKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWVUaW1lcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG5cbiAgICBvblBsYXlBZ2FpbkNhbmNlbCgpe1xuXG4gICAgICAgIHRoaXMuZ2FtZUVuZEFsZXJ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVFbmRBbGVydC5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiaG9tZVwiKS5vbkJhY2soKTtcblxuICAgIH1cblxuICAgIGdhbWVFbmRlZCAoKXtcbiAgICAgICAgdGhpcy5nYW1lRW5kQWxlcnQucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICBsZXQgbGV2ZWwgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRMZXZlbCgpO1xuICAgICAgICBsZXQgdG90YWxMZXZlbEluTW9kZSA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJbmZvKHRoaXMuZ2FtZU1vZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsXCIsIGxldmVsID09IHRvdGFsTGV2ZWxJbk1vZGUubGVuZ3RoIC0xIClcbiAgICAgICAgaWYobGV2ZWwgPT0gdG90YWxMZXZlbEluTW9kZS5sZW5ndGggLTEpe1xuICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiaG9tZVwiKS5zaG93RnV0dXJlRGV0YWlsc1NjcmVlbigpO1xuICAgICAgICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFNjZW5lKEdBTUVfU0NSRUVOLkZVVFVSRV9BTk5PQ01FTlRTKTsgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdFBsYXllZExldmVsXCIsIHRoaXMuX2xldmVsICsgMSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikub25CYWNrKCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikuc3RhcnRHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG5cbiAgICAvLyBBTklNQVRJT04gQ0FMTEJBQ0tTIDpcblxuICAgIHBsYXlCb3Vuc0FuaW1hdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImluc2lkZSB0aGlzIHBsYXkgYm91bnMgYW5pbWF0aW9uXCIpO1xuICAgICAgICB0aGlzLmJvdW5zLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ib3Vucy5ub2RlLnBvc2l0aW9uICA9IG5ldyBjYy5WZWMyKDAsMCk7XG4gICAgICAgIHRoaXMuYm91bnMubm9kZS5zY2FsZSA9IDI7XG4gICAgICAgIHRoaXMuYm91bnMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLmJvdW5zLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuXG4gICAgfVxuXG4gICAgYm91bnNBbmltYXRpb25Db21wbGV0ZWQgKCl7XG4gICAgICAgIHRoaXMuYm91bnMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgKz0gdGhpcy5sZXZlbERhdGEudGltZXIuYm91bnNUaW1lO1xuICAgICAgICBjb25zb2xlLmxvZyhcImJvbnlzXCIsdGhpcy5sZXZlbERhdGEudGltZXIsIHRoaXMudG90YWxUaW1lICk7XG4gICAgICAgIHRoaXMub3B0aW9uTGF5ZXIuZ2V0Q29tcG9uZW50KFwib3B0aW9uc1wiKS51cGRhdGVUaW1lcih0aGlzLl90aW1lciwgIHRoaXMudG90YWxUaW1lKTtcbiAgICAgICAgdGhpcy5pc1RvdWNoQmxvY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNob3dHYW1lSW5zdHJ1Y3Rpb25Qb3BVcCgpe1xuICAgICAgICB0aGlzLmdhbWVTdGFydEFsZXJ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdG9wVHV0b3JpYWxzKCl7XG4gICAgICAgIHRoaXMuaXNUdXRvaXJhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR1dG9yaWFsQ2FyZHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRBbGVydC5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIGZvcihsZXQgY2hpbGQgb2YgdGhpcy5nYW1lTGF5b3V0Lm5vZGUuY2hpbGRyZW4pe1xuICAgICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoJ2NhcmRzJykuZGlzYWJsZU92ZXJsYXkoKTtcbiAgICAgICAgIH1cbiAgICAgICAgIHRoaXMuc3RhcnRHYW1lVGltZXIoKTtcbiAgIH1cbiAgICBcblxuXG4gICBhZEhhc2JlZW5TaG93bigpe1xuXG4gICB9XG5cblxuXG5cbiAgICBcblxuXG5cblxuXG5cblxuICAgXG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/home/home.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3fe01+rSGFEx4cPC5mf1sQK', 'home');
// scripts/home/home.ts

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
var constants_1 = require("../helper/constants");
var SoundManager_1 = require("../managers/SoundManager");
var AdManager_1 = require("../managers/AdManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameScreen = constants_1.GAME_SCREEN.HOME;
        _this.gameMode = "";
        _this.letloadCount = 0;
        _this.modeLayout = null;
        _this.hud = null;
        _this.howToPlayPopUp = null;
        _this.modeSelectionNode = null;
        _this.levelSelectionNode = null;
        _this.gameplayNode = null;
        _this.scrollViewLayout = null;
        _this.levelHolderPrefab = null;
        _this.scrollView = null;
        _this.musicClip = null;
        _this.moreInfo = null;
        _this.privacyPolicy = null;
        _this.buttonPressed = null;
        _this.bottomBar = null;
        _this.futureDetailsPrefab = null;
        _this.settings = null;
        _this.terms = null;
        _this.dailyRewards = null;
        return _this;
    }
    Home.prototype.onLoad = function () {
    };
    Home.prototype.start = function () {
        var _this = this;
        console.log("start", constants_1.GAME_SCREEN.HOME);
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.HOME);
        this.terms.zIndex = 10;
        this.dailyRewards.zIndex = 9;
        this.settings.zIndex = 7;
        this.settings.getComponent("settings").init(this);
        this.howToPlayPopUp.zIndex = 7;
        this.moreInfo.zIndex = 7;
        this.privacyPolicy.zIndex = 7;
        this.terms.active = !JSON.parse(cc.sys.localStorage.getItem("hasTermAccepted"));
        console.log("active", this.terms.active, cc.sys.localStorage.getItem("hasTermAccepted"));
        cc.game.emit("onLanguageChanged");
        this.setupUI();
        this.setLevelInfoInLS();
        this.startImageLoading();
        // GameManager.getInstance()
        // .loadGameConfig()
        // .then((data) => {
        //   console.log("data loded successfully", data);
        //   GameManager.getInstance()
        //     .loadLevels()
        //     .then((data) => {
        //       GameManager.getInstance().loadLanaguge().then((data)=>{
        //         GameManager.getInstance().changeCurrentLanguage();
        //       }).catch((error)=>{
        //         console.log("error", error);
        //       })
        //     })
        //     .catch((error) => {
        //       console.log("erorr", error);
        //     });
        // })
        // .catch((error) => {
        //   console.log("error while loading resources");
        // });
        cc.debug.setDisplayStats(false);
        SoundManager_1.default.getInstance().init(this.musicClip);
        if (!cc.sys.localStorage.getItem("Sound")) {
            cc.sys.localStorage.setItem("Sound", false);
        }
        if (cc.sys.isMobile) {
            console.log("inside this event handel");
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (ev) {
                console.log("inSide this 120  line number", ev.keyCode);
                if (ev.keyCode === cc.macro.KEY.back) {
                    _this.onBack();
                }
            });
        }
    };
    Home.prototype.setupUI = function () {
        this.setHud();
        // this.dailyRewards.active = true;
        this.modeSelectionNode.zIndex = 5;
        this.levelSelectionNode.zIndex = 6;
        this.futureDetails = cc.instantiate(this.futureDetailsPrefab);
        this.futureDetails.zIndex = 6;
        this.futureDetails.active = false;
        this.futureDetails.getComponent("gameFutureDetails").setDelegatScript(this);
        this.node.addChild(this.futureDetails);
        // MARK: SHOWING BANNER ADS
        if (cc.sys.isMobile) {
            sdkbox.PluginShare.init();
            AdManager_1.default.getInstance().init();
            AdManager_1.default.getInstance().setTestDevice('38311228FC168567547515520CBFCF53');
            AdManager_1.default.getInstance().cacheAds('gameover');
            // AdManager.getInstance().cacheAds('banner');
        }
    };
    Home.prototype.onAnimationEnd = function () {
        console.log("animation ended");
    };
    Home.prototype.setHud = function () {
        this.hudLayer = cc.instantiate(this.hud);
        this.node.addChild(this.hudLayer);
        this.hudLayer.getComponent("hud").setDelegate(this);
        this.hudLayer.zIndex = 1;
        this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
    };
    Home.prototype.showDailyRewards = function () {
        this.dailyRewards.active = true;
    };
    Home.prototype.showLevelSelection = function () {
        if (this.levelSelectionNode.active) {
            return;
        }
        this.levelSelectionNode.active = true;
        this.setLevelSelectionScreen();
        this.gameScreen == constants_1.GAME_SCREEN.SETTINGS && GameManager_1.GameManager.getInstance().popScene();
        this.gameScreen == constants_1.GAME_SCREEN.GAME_PLAY && GameManager_1.GameManager.getInstance().popScene();
        this.changeSceneVisiblity(this.gameScreen, false);
        this.gameScreen = constants_1.GAME_SCREEN.LEVEL_SELECTION;
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.LEVEL_SELECTION);
        this.enabledMoreGamesButton(GameManager_1.GameManager.getInstance().getGameConfiguration().isMoreGameAvilable);
        // this.levelSelectionNode.getComponent(cc.Animation).play("moveIn");
    };
    //button callbacks:
    Home.prototype.showHowToPlayPopUp = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.howToPlayPopUp.active = true;
        this.howToPlayPopUp.getChildByName("Post").getComponent(cc.Animation).play();
    };
    Home.prototype.removeHowToPlayPopUp = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.howToPlayPopUp.active = false;
    };
    Home.prototype.setLevelSelectionScreen = function () {
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        this.scrollViewLayout.node.removeAllChildren();
        var totalFrame = Math.ceil(levels.length / 10);
        for (var i = 0; i < totalFrame; i++) {
            var levelHolder = cc.instantiate(this.levelHolderPrefab);
            levelHolder.getComponent("levelUIManager").setDelegateComponent(this);
            levelHolder.getComponent("levelUIManager").populateLevels(i * 10);
            this.scrollViewLayout.node.addChild(levelHolder);
        }
        if (totalFrame == 1) {
            this.scrollViewLayout.node.children[0].width = 1000;
            this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = true;
            this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
            this.scrollViewLayout.updateLayout();
        }
        else {
            this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = false;
            this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
        }
        var levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var levelsInfoForMode = JSON.parse(levelsInfo.level);
        var lastUnlockedLevel = 0;
        for (var _i = 0, levelsInfoForMode_1 = levelsInfoForMode; _i < levelsInfoForMode_1.length; _i++) {
            var item = levelsInfoForMode_1[_i];
            if (!item.isUnlock) {
                break;
            }
            lastUnlockedLevel++;
        }
        var frame = Math.ceil(lastUnlockedLevel / 10);
        var offset = this.scrollView.getScrollOffset();
        var offsetPercent = (frame - 1) * (1 / (this.scrollViewLayout.node.childrenCount - 1));
        this.levelSelectionNode.getComponent(cc.Animation).play("moveIn");
    };
    Home.prototype.onBack = function () {
        var currentScene = GameManager_1.GameManager.getInstance().popScene();
        var lastScene = GameManager_1.GameManager.getInstance().popScene();
        console.log("curerntScene", currentScene, lastScene);
        if (currentScene == constants_1.GAME_SCREEN.HOME) {
            cc.game.end();
            return;
        }
        else if (currentScene == constants_1.GAME_SCREEN.FUTURE_ANNOCMENTS) {
            GameManager_1.GameManager.getInstance().removeAllScene();
            this.levelSelectionNode.active = false;
            this.settings.active = false;
            this.gameplayNode.active = false;
            this.modeSelectionNode.active = true;
            this.gameScreen = constants_1.GAME_SCREEN.HOME;
            GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.HOME);
            return;
        }
        this.gameScreen = lastScene;
        this.changeSceneVisiblity(currentScene, false);
        this.changeSceneVisiblity(lastScene, true);
        GameManager_1.GameManager.getInstance().pushScene(lastScene);
        console.log("scene arra", GameManager_1.GameManager.getInstance().screen);
    };
    Home.prototype.changeSceneVisiblity = function (currentScene, isActive) {
        console.log("scnenes", currentScene, isActive);
        switch (currentScene) {
            case constants_1.GAME_SCREEN.LEVEL_SELECTION:
                this.levelSelectionNode.active = isActive;
                isActive && this.setLevelSelectionScreen();
                break;
            case constants_1.GAME_SCREEN.SETTINGS:
                this.settings.getComponent('settings').closeAllPopUps();
                this.settings.active = isActive;
                break;
            case constants_1.GAME_SCREEN.GAME_PLAY:
                this.gameplayNode.active = isActive;
                break;
            case constants_1.GAME_SCREEN.HOME:
                this.modeSelectionNode.active = isActive;
                break;
        }
    };
    Home.prototype.startGame = function () {
        // disable the last scne pushed 
        var lastPlayedLevel = cc.sys.localStorage.getItem("lastPlayedLevel");
        this.onLevelSelect(lastPlayedLevel);
    };
    Home.prototype.onLevelSelect = function (level) {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        GameManager_1.GameManager.getInstance().setCurrentLevel(parseInt(level));
        this.changeSceneVisiblity(this.gameScreen, false);
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.GAME_PLAY);
        this.gameScreen = constants_1.GAME_SCREEN.GAME_PLAY;
        this.levelSelectionNode.active = false;
        this.modeSelectionNode.active = false;
        this.gameplayNode.active = true;
        this.gameplayNode
            .getComponent("gamePlay")
            .setUpUI(GameManager_1.GameManager.getInstance().getCurrentLevel());
    };
    Home.prototype.onLevelAnimationCompleted = function () {
        if (this.gameScreen == constants_1.GAME_SCREEN.GAME_PLAY) {
        }
    };
    /**
     *
     *
     * data is stored in this mannor in the local storage
     * LevelInfo = {
     * "levels" :[{time :100, isUnlock : true} , ... ]
     *
     *  * }
     *
     */
    Home.prototype.setLevelInfoInLS = function () {
        if (!cc.sys.localStorage.getItem("LevelInfo")) {
            cc.sys.localStorage.setItem("LevelInfo", JSON.stringify({}));
        }
        var levelInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var totalLevels = GameManager_1.GameManager.getInstance().getLevelInfo().length;
        var levelObj = { time: 500, isUnlock: true };
        if (!levelInfo.level) {
            var levelObjectArray = [];
            for (var i = 0; i < totalLevels; i++) {
                levelObjectArray[i] = Object.assign({ id: i }, levelObj);
            }
            levelObjectArray[0].isUnlock = true;
            console.log(levelObjectArray[0] === levelObjectArray[1]);
            levelInfo["level"] = JSON.stringify(levelObjectArray);
        }
        else {
            // New Level added in the json file
            var levelArray_1 = JSON.parse(levelInfo.level);
            if (levelArray_1.length < totalLevels) {
                var difference = GameManager_1.GameManager.getInstance().getLevelInfo().filter(function (item) { return !levelArray_1.some(function (data) { return data.id == item.id; }); });
                var timeArray = [];
                for (var i = 0; i < difference.length; i++) {
                    timeArray[i] = Object.assign({ id: difference[i].id }, levelObj);
                }
                console.log("time ArraY", timeArray);
                levelArray_1.push.apply(levelArray_1, timeArray);
                console.log("time ArraY", levelArray_1);
            }
            else {
                // OLD Level removed from the json file
                var difference_1 = levelArray_1.filter(function (item) { return !GameManager_1.GameManager.getInstance().getLevelInfo().some(function (data) { return data.id == item.id; }); });
                console.log("difference", difference_1);
                var _loop_1 = function (i) {
                    var index = levelArray_1.findIndex(function (item) { return item.id == difference_1[i].id; });
                    console.log("index", index);
                    if (index != -1) {
                        levelArray_1.splice(index, 1);
                    }
                };
                for (var i = 0; i < difference_1.length; i++) {
                    _loop_1(i);
                }
            }
            console.log("level Daata", levelArray_1);
            levelArray_1[0].isUnlock = true;
            levelInfo["level"] = JSON.stringify(levelArray_1);
        }
        cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(levelInfo));
    };
    Home.prototype.onShare = function () {
        if (cc.sys.isBrowser) {
            return;
        }
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        var shareInfo = {};
        shareInfo.text = GameManager_1.GameManager.getInstance().getString("textToShare");
        shareInfo.title = GameManager_1.GameManager.getInstance().getString("titleOfShare");
        //shareInfo.image = "path/to/image"
        shareInfo.link = constants_1.GAME_LINK.URL; // link of game
        sdkbox.PluginShare.nativeShare(shareInfo);
    };
    Home.prototype.onMoreGames = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        cc.sys.openURL(constants_1.GAME_LINK.URL);
    };
    Home.prototype.showPrivacyPolicy = function () {
        // this.playLoader();
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.moreInfo.active = false;
        this.privacyPolicy.active = true;
    };
    Home.prototype.enabledMoreGamesButton = function (isActive) {
        this.moreInfo.getChildByName("Background").getChildByName("buttonLayout").getChildByName("moreGames").active = isActive;
        this.bottomBar.getChildByName("moreGames").active = isActive;
    };
    Home.prototype.showFutureDetailsScreen = function () {
        this.futureDetails.active = true;
    };
    Home.prototype.openSettings = function () {
        if (this.settings.active) {
            return;
        }
        this.gameScreen == constants_1.GAME_SCREEN.LEVEL_SELECTION && GameManager_1.GameManager.getInstance().popScene();
        this.changeSceneVisiblity(this.gameScreen, false);
        this.gameScreen = constants_1.GAME_SCREEN.SETTINGS;
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.SETTINGS);
        this.settings.active = true;
        console.log(GameManager_1.GameManager.getInstance().screen);
    };
    Home.prototype.onTermsAccept = function () {
        this.terms.active = false;
        cc.sys.localStorage.setItem("hasTermAccepted", true);
    };
    Home.prototype.startImageLoading = function () {
        var _this = this;
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        // console.log("eleves", )
        if (this.letloadCount == levels.length) {
            return;
        }
        else {
            GameManager_1.GameManager.getInstance()
                .loadLevelImages(this.letloadCount).then(function () {
                _this.letloadCount++;
                console.log("load level images for", _this.letloadCount);
                _this.startImageLoading();
            }).catch(function () {
                console.log("error while loading data");
            });
        }
    };
    __decorate([
        property(cc.Layout)
    ], Home.prototype, "modeLayout", void 0);
    __decorate([
        property(cc.Prefab)
    ], Home.prototype, "hud", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "howToPlayPopUp", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "modeSelectionNode", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "levelSelectionNode", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "gameplayNode", void 0);
    __decorate([
        property(cc.Layout)
    ], Home.prototype, "scrollViewLayout", void 0);
    __decorate([
        property(cc.Prefab)
    ], Home.prototype, "levelHolderPrefab", void 0);
    __decorate([
        property(cc.ScrollView)
    ], Home.prototype, "scrollView", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Home.prototype, "musicClip", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "moreInfo", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "privacyPolicy", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Home.prototype, "buttonPressed", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "bottomBar", void 0);
    __decorate([
        property(cc.Prefab)
    ], Home.prototype, "futureDetailsPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "settings", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "terms", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "dailyRewards", void 0);
    Home = __decorate([
        ccclass
    ], Home);
    return Home;
}(cc.Component));
exports.default = Home;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hvbWUvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsaURBQXdFO0FBQ3hFLHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF3ZEM7UUF2ZEMsZ0JBQVUsR0FBZ0IsdUJBQVcsQ0FBQyxJQUFJLENBQUM7UUFFM0MsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUdqQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUk3QixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBR3RCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUdsQyx3QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFHbkMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0Isc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBR25DLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUdwQyxnQkFBVSxHQUFrQixJQUFJLENBQUM7UUFHakMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUl6QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUl0QyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBSXpCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFJdEIsa0JBQVksR0FBWSxJQUFJLENBQUM7O0lBdVovQixDQUFDO0lBcFpDLHFCQUFNLEdBQU47SUFLQSxDQUFDO0lBQ0Qsb0JBQUss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Q2U7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDZ0I7SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQzs0Q0FDUztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzJDQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ087SUFJekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNPO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDa0I7SUFJdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTztJQUl6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNJO0lBSXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1c7SUFqRVYsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXdkeEI7SUFBRCxXQUFDO0NBeGRELEFBd2RDLENBeGRpQyxFQUFFLENBQUMsU0FBUyxHQXdkN0M7a0JBeGRvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vbWFuYWdlcnMvR2FtZU1hbmFnZXJcIjtcbmltcG9ydCB7IEdBTUVfTU9ERSwgR0FNRV9TQ1JFRU4sIEdBTUVfTElOSyB9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXJcIjtcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJzL0FkTWFuYWdlclwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBnYW1lU2NyZWVuOiBHQU1FX1NDUkVFTiA9IEdBTUVfU0NSRUVOLkhPTUU7XG4gIGh1ZExheWVyOiBjYy5Ob2RlO1xuICBnYW1lTW9kZTogc3RyaW5nID0gXCJcIjtcbiAgZnV0dXJlRGV0YWlscyA6IGNjLk5vZGU7XG5cbiAgbGV0bG9hZENvdW50ID0gMDtcblxuICBAcHJvcGVydHkoY2MuTGF5b3V0KVxuICBtb2RlTGF5b3V0OiBjYy5MYXlvdXQgPSBudWxsO1xuXG5cbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgaHVkOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBob3dUb1BsYXlQb3BVcDogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG1vZGVTZWxlY3Rpb25Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbGV2ZWxTZWxlY3Rpb25Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZ2FtZXBsYXlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTGF5b3V0KVxuICBzY3JvbGxWaWV3TGF5b3V0OiBjYy5MYXlvdXQgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGxldmVsSG9sZGVyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBtdXNpY0NsaXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG1vcmVJbmZvOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBwcml2YWN5UG9saWN5OiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBidXR0b25QcmVzc2VkOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgYm90dG9tQmFyOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBmdXR1cmVEZXRhaWxzUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHNldHRpbmdzOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICB0ZXJtczogY2MuTm9kZSA9IG51bGw7XG5cblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZGFpbHlSZXdhcmRzOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gIG9uTG9hZCgpIHtcblxuXG4gICAgXG5cbiAgfVxuICBzdGFydCgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwic3RhcnRcIixHQU1FX1NDUkVFTi5IT01FKTtcbiAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hTY2VuZShHQU1FX1NDUkVFTi5IT01FKTtcbiAgICB0aGlzLnRlcm1zLnpJbmRleCA9IDEwO1xuICAgIHRoaXMuZGFpbHlSZXdhcmRzLnpJbmRleCA9IDk7XG4gICAgdGhpcy5zZXR0aW5ncy56SW5kZXggPSA3O1xuICAgIHRoaXMuc2V0dGluZ3MuZ2V0Q29tcG9uZW50KFwic2V0dGluZ3NcIikuaW5pdCh0aGlzKTtcbiAgICB0aGlzLmhvd1RvUGxheVBvcFVwLnpJbmRleCA9NztcbiAgICB0aGlzLm1vcmVJbmZvLnpJbmRleCA9NztcbiAgICB0aGlzLnByaXZhY3lQb2xpY3kuekluZGV4ID0gNztcbiAgICB0aGlzLnRlcm1zLmFjdGl2ZSA9ICFKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhhc1Rlcm1BY2NlcHRlZFwiKSk7XG4gICAgY29uc29sZS5sb2coXCJhY3RpdmVcIiwgdGhpcy50ZXJtcy5hY3RpdmUsIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhhc1Rlcm1BY2NlcHRlZFwiKSk7XG4gICAgXG5cbiAgICBjYy5nYW1lLmVtaXQoXCJvbkxhbmd1YWdlQ2hhbmdlZFwiKTtcbiAgICB0aGlzLnNldHVwVUkoKTtcbiAgICB0aGlzLnNldExldmVsSW5mb0luTFMoKTtcbiAgICB0aGlzLnN0YXJ0SW1hZ2VMb2FkaW5nKCk7XG4gICAgLy8gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgIC8vIC5sb2FkR2FtZUNvbmZpZygpXG4gICAgLy8gLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiZGF0YSBsb2RlZCBzdWNjZXNzZnVsbHlcIiwgZGF0YSk7XG4gICAgLy8gICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgLy8gICAgIC5sb2FkTGV2ZWxzKClcbiAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmxvYWRMYW5hZ3VnZSgpLnRoZW4oKGRhdGEpPT57XG4gICAgLy8gICAgICAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoYW5nZUN1cnJlbnRMYW5ndWFnZSgpO1xuICAgICAgICAgICBcbiAgICAvLyAgICAgICB9KS5jYXRjaCgoZXJyb3IpPT57XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAvLyAgICAgICB9KVxuICAgICAgICAgXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcImVyb3JyXCIsIGVycm9yKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSlcbiAgICAvLyAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIGxvYWRpbmcgcmVzb3VyY2VzXCIpO1xuICAgIC8vIH0pO1xuXG5cbiAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkuaW5pdCh0aGlzLm11c2ljQ2xpcCk7XG4gICAgaWYgKCFjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJTb3VuZFwiKSkge1xuICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiU291bmRcIiwgZmFsc2UpO1xuICAgIH0gXG5cblxuICAgIGlmKGNjLnN5cy5pc01vYmlsZSl7XG4gICAgICBjb25zb2xlLmxvZyhcImluc2lkZSB0aGlzIGV2ZW50IGhhbmRlbFwiKTtcbiAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIChldikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluU2lkZSB0aGlzIDEyMCAgbGluZSBudW1iZXJcIiwgZXYua2V5Q29kZSk7XG4gICAgICAgIGlmIChldi5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuYmFjaykge1xuICAgICAgICAgICB0aGlzLm9uQmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cbiAgc2V0dXBVSSgpIHtcbiAgICB0aGlzLnNldEh1ZCgpO1xuICAgIC8vIHRoaXMuZGFpbHlSZXdhcmRzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5tb2RlU2VsZWN0aW9uTm9kZS56SW5kZXggPSA1O1xuICAgIHRoaXMubGV2ZWxTZWxlY3Rpb25Ob2RlLnpJbmRleCA9IDY7XG4gICAgdGhpcy5mdXR1cmVEZXRhaWxzID0gY2MuaW5zdGFudGlhdGUodGhpcy5mdXR1cmVEZXRhaWxzUHJlZmFiKTtcbiAgICB0aGlzLmZ1dHVyZURldGFpbHMuekluZGV4ID0gNjtcbiAgICB0aGlzLmZ1dHVyZURldGFpbHMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5mdXR1cmVEZXRhaWxzLmdldENvbXBvbmVudChcImdhbWVGdXR1cmVEZXRhaWxzXCIpLnNldERlbGVnYXRTY3JpcHQodGhpcyk7XG4gICAgdGhpcy5ub2RlLmFkZENoaWxkKCB0aGlzLmZ1dHVyZURldGFpbHMpXG4gIFxuXG4gICAgLy8gTUFSSzogU0hPV0lORyBCQU5ORVIgQURTXG4gICAgaWYoY2Muc3lzLmlzTW9iaWxlKXtcbiAgICAgIHNka2JveC5QbHVnaW5TaGFyZS5pbml0KCk7XG4gICAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pbml0KCk7XG4gICAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZXRUZXN0RGV2aWNlKCczODMxMTIyOEZDMTY4NTY3NTQ3NTE1NTIwQ0JGQ0Y1MycpO1xuICAgICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FjaGVBZHMoJ2dhbWVvdmVyJyk7XG4gICAgICAvLyBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYWNoZUFkcygnYmFubmVyJyk7XG4gICAgICBcblxuICAgIH1cbiAgfVxuXG4gIG9uQW5pbWF0aW9uRW5kICgpe1xuICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0aW9uIGVuZGVkXCIpO1xuICB9XG4gXG5cbiAgc2V0SHVkKCkge1xuICAgIHRoaXMuaHVkTGF5ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmh1ZCk7XG4gICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMuaHVkTGF5ZXIpO1xuICAgIHRoaXMuaHVkTGF5ZXIuZ2V0Q29tcG9uZW50KFwiaHVkXCIpLnNldERlbGVnYXRlKHRoaXMpO1xuICAgIHRoaXMuaHVkTGF5ZXIuekluZGV4ID0gMTtcbiAgICB0aGlzLmh1ZExheWVyLmdldENvbXBvbmVudChcImh1ZFwiKS5zZXRWaXNpYmxpdHkodGhpcy5nYW1lU2NyZWVuKTtcbiAgfVxuXG4gIHNob3dEYWlseVJld2FyZHMoKXtcbiAgICB0aGlzLmRhaWx5UmV3YXJkcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgc2hvd0xldmVsU2VsZWN0aW9uKCl7XG4gICAgaWYodGhpcy5sZXZlbFNlbGVjdGlvbk5vZGUuYWN0aXZlKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5sZXZlbFNlbGVjdGlvbk5vZGUuYWN0aXZlID0gdHJ1ZTsgIFxuICAgIHRoaXMuc2V0TGV2ZWxTZWxlY3Rpb25TY3JlZW4oKTtcbiAgICB0aGlzLmdhbWVTY3JlZW4gPT0gR0FNRV9TQ1JFRU4uU0VUVElOR1MgJiYgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wb3BTY2VuZSgpO1xuICAgIHRoaXMuZ2FtZVNjcmVlbiA9PSBHQU1FX1NDUkVFTi5HQU1FX1BMQVkgJiYgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wb3BTY2VuZSgpO1xuICAgIHRoaXMuY2hhbmdlU2NlbmVWaXNpYmxpdHkodGhpcy5nYW1lU2NyZWVuLCBmYWxzZSk7XG4gICAgdGhpcy5nYW1lU2NyZWVuID0gR0FNRV9TQ1JFRU4uTEVWRUxfU0VMRUNUSU9OO1xuICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFNjZW5lKEdBTUVfU0NSRUVOLkxFVkVMX1NFTEVDVElPTilcbiAgICB0aGlzLmVuYWJsZWRNb3JlR2FtZXNCdXR0b24oICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEdhbWVDb25maWd1cmF0aW9uKCkuaXNNb3JlR2FtZUF2aWxhYmxlKTtcbiAgICAvLyB0aGlzLmxldmVsU2VsZWN0aW9uTm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwibW92ZUluXCIpO1xuIFxuICB9XG5cblxuIFxuXG4gIC8vYnV0dG9uIGNhbGxiYWNrczpcbiAgc2hvd0hvd1RvUGxheVBvcFVwKCkge1xuICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5idXR0b25QcmVzc2VkLCBmYWxzZSk7XG4gICAgdGhpcy5ob3dUb1BsYXlQb3BVcC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuaG93VG9QbGF5UG9wVXAuZ2V0Q2hpbGRCeU5hbWUoXCJQb3N0XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgfVxuXG4gIHJlbW92ZUhvd1RvUGxheVBvcFVwKCkge1xuICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5idXR0b25QcmVzc2VkLCBmYWxzZSk7XG4gICAgdGhpcy5ob3dUb1BsYXlQb3BVcC5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHNldExldmVsU2VsZWN0aW9uU2NyZWVuKCkge1xuICAgIGxldCBsZXZlbHMgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsSW5mbygpO1xuICAgIHRoaXMuc2Nyb2xsVmlld0xheW91dC5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICBsZXQgdG90YWxGcmFtZSA9IE1hdGguY2VpbChsZXZlbHMubGVuZ3RoIC8gMTApO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAgdG90YWxGcmFtZTsgaSsrKXtcbiAgICAgIGxldCBsZXZlbEhvbGRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxIb2xkZXJQcmVmYWIpO1xuICAgICAgbGV2ZWxIb2xkZXIuZ2V0Q29tcG9uZW50KFwibGV2ZWxVSU1hbmFnZXJcIikuc2V0RGVsZWdhdGVDb21wb25lbnQodGhpcyk7XG4gICAgICBsZXZlbEhvbGRlci5nZXRDb21wb25lbnQoXCJsZXZlbFVJTWFuYWdlclwiKS5wb3B1bGF0ZUxldmVscyhpICogMTApO1xuICAgICAgdGhpcy5zY3JvbGxWaWV3TGF5b3V0Lm5vZGUuYWRkQ2hpbGQobGV2ZWxIb2xkZXIpO1xuICAgIH1cblxuICAgIGlmKHRvdGFsRnJhbWUgPT0gMSl7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5jaGlsZHJlblswXS53aWR0aCA9IDEwMDA7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IHRydWU7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQudXBkYXRlTGF5b3V0KCk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5zY3JvbGxWaWV3TGF5b3V0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgIH1cblxuICAgIGxldCBsZXZlbHNJbmZvID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMZXZlbEluZm9cIikpO1xuICAgIGxldCBsZXZlbHNJbmZvRm9yTW9kZSA9IEpTT04ucGFyc2UobGV2ZWxzSW5mby5sZXZlbCk7XG5cbiAgICBsZXQgbGFzdFVubG9ja2VkTGV2ZWwgPSAwO1xuICAgIGZvcihsZXQgaXRlbSBvZiBsZXZlbHNJbmZvRm9yTW9kZSl7XG4gICAgICBpZighaXRlbS5pc1VubG9jayl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbGFzdFVubG9ja2VkTGV2ZWwrKztcbiAgICB9XG5cblxuICAgXG4gICAgbGV0IGZyYW1lID0gTWF0aC5jZWlsKGxhc3RVbmxvY2tlZExldmVsLzEwKTtcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpO1xuICAgIGxldCBvZmZzZXRQZXJjZW50ID0gKGZyYW1lIC0gMSkgKiAoMSAvICh0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5jaGlsZHJlbkNvdW50IC0gMSkpOyAgIFxuICAgIHRoaXMubGV2ZWxTZWxlY3Rpb25Ob2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtb3ZlSW5cIik7XG5cbiAgfVxuXG4gIG9uQmFjaygpIHtcbiAgICBsZXQgY3VycmVudFNjZW5lID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wb3BTY2VuZSgpO1xuICAgIGxldCBsYXN0U2NlbmUgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBvcFNjZW5lKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImN1cmVybnRTY2VuZVwiLCBjdXJyZW50U2NlbmUsIGxhc3RTY2VuZSk7XG4gICAgaWYoY3VycmVudFNjZW5lID09IEdBTUVfU0NSRUVOLkhPTUUpe1xuICAgICAgY2MuZ2FtZS5lbmQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZihjdXJyZW50U2NlbmUgPT0gR0FNRV9TQ1JFRU4uRlVUVVJFX0FOTk9DTUVOVFMpe1xuICAgICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZW1vdmVBbGxTY2VuZSgpO1xuICAgICAgdGhpcy5sZXZlbFNlbGVjdGlvbk5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5nYW1lcGxheU5vZGUuYWN0aXZlID0gZmFsc2U7ICBcbiAgICAgIHRoaXMubW9kZVNlbGVjdGlvbk5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2FtZVNjcmVlbiA9IEdBTUVfU0NSRUVOLkhPTUU7XG4gICAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hTY2VuZShHQU1FX1NDUkVFTi5IT01FKTtcbiAgICAgIHJldHVybjtcblxuICAgIH1cbiAgICB0aGlzLmdhbWVTY3JlZW4gPSBsYXN0U2NlbmU7XG4gICAgdGhpcy5jaGFuZ2VTY2VuZVZpc2libGl0eShjdXJyZW50U2NlbmUsIGZhbHNlKTtcbiAgICB0aGlzLmNoYW5nZVNjZW5lVmlzaWJsaXR5KGxhc3RTY2VuZSwgdHJ1ZSk7XG4gICAgXG4gICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoU2NlbmUobGFzdFNjZW5lKTtcbiAgICBjb25zb2xlLmxvZyhcInNjZW5lIGFycmFcIixHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNjcmVlbiApXG4gIH1cblxuICBjaGFuZ2VTY2VuZVZpc2libGl0eShjdXJyZW50U2NlbmUsIGlzQWN0aXZlKXtcbiAgICBjb25zb2xlLmxvZyhcInNjbmVuZXNcIixjdXJyZW50U2NlbmUsIGlzQWN0aXZlKVxuICAgIHN3aXRjaChjdXJyZW50U2NlbmUpe1xuICAgICAgY2FzZSBHQU1FX1NDUkVFTi5MRVZFTF9TRUxFQ1RJT046XG4gICAgICAgIHRoaXMubGV2ZWxTZWxlY3Rpb25Ob2RlLmFjdGl2ZSA9IGlzQWN0aXZlO1xuICAgICAgICBpc0FjdGl2ZSAmJiB0aGlzLnNldExldmVsU2VsZWN0aW9uU2NyZWVuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBHQU1FX1NDUkVFTi5TRVRUSU5HUzpcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5nZXRDb21wb25lbnQoJ3NldHRpbmdzJykuY2xvc2VBbGxQb3BVcHMoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEdBTUVfU0NSRUVOLkdBTUVfUExBWTpcbiAgICAgICAgIHRoaXMuZ2FtZXBsYXlOb2RlLmFjdGl2ZSA9IGlzQWN0aXZlOyAgXG4gICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgR0FNRV9TQ1JFRU4uSE9NRTpcbiAgICAgICAgdGhpcy5tb2RlU2VsZWN0aW9uTm9kZS5hY3RpdmUgPSBpc0FjdGl2ZTsgICBcbiAgICAgICAgICBicmVhazsgIFxuXG4gICAgICBcbiAgICB9XG4gIH1cblxuXG5cbiAgc3RhcnRHYW1lKCl7XG4gICAgLy8gZGlzYWJsZSB0aGUgbGFzdCBzY25lIHB1c2hlZCBcblxuICAgIFxuICAgIGxldCBsYXN0UGxheWVkTGV2ZWwgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXN0UGxheWVkTGV2ZWxcIilcbiAgICB0aGlzLm9uTGV2ZWxTZWxlY3QobGFzdFBsYXllZExldmVsKTtcbiAgfVxuXG4gIG9uTGV2ZWxTZWxlY3QoIGxldmVsOiBzdHJpbmcpIHtcbiAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uUHJlc3NlZCwgZmFsc2UpO1xuICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2V0Q3VycmVudExldmVsKHBhcnNlSW50KGxldmVsKSk7XG4gICAgdGhpcy5jaGFuZ2VTY2VuZVZpc2libGl0eSh0aGlzLmdhbWVTY3JlZW4gLCBmYWxzZSk7XG4gICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoU2NlbmUoR0FNRV9TQ1JFRU4uR0FNRV9QTEFZKTtcbiAgICB0aGlzLmdhbWVTY3JlZW4gPSBHQU1FX1NDUkVFTi5HQU1FX1BMQVk7XG4gICAgdGhpcy5sZXZlbFNlbGVjdGlvbk5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5tb2RlU2VsZWN0aW9uTm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgIHRoaXMuZ2FtZXBsYXlOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5nYW1lcGxheU5vZGVcbiAgICAuZ2V0Q29tcG9uZW50KFwiZ2FtZVBsYXlcIilcbiAgICAuc2V0VXBVSSggR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50TGV2ZWwoKSk7XG4gIH1cblxuXG4gIG9uTGV2ZWxBbmltYXRpb25Db21wbGV0ZWQoKXtcbiAgICBpZih0aGlzLmdhbWVTY3JlZW4gPT0gR0FNRV9TQ1JFRU4uR0FNRV9QTEFZKXtcbiAgIFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogXG4gICAqIGRhdGEgaXMgc3RvcmVkIGluIHRoaXMgbWFubm9yIGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAqIExldmVsSW5mbyA9IHtcbiAgICogXCJsZXZlbHNcIiA6W3t0aW1lIDoxMDAsIGlzVW5sb2NrIDogdHJ1ZX0gLCAuLi4gXSAgXG4gICAqIFxuICAgKiAgKiB9XG4gICAqIFxuICAgKi9cblxuICBzZXRMZXZlbEluZm9JbkxTKCl7XG5cblxuICAgIGlmICghY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTGV2ZWxJbmZvXCIpKSB7XG4gICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMZXZlbEluZm9cIiwgSlNPTi5zdHJpbmdpZnkoe30pKTtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWxJbmZvID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMZXZlbEluZm9cIikpO1xuICAgIFxuICAgIGxldCB0b3RhbExldmVscyA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJbmZvKCkubGVuZ3RoO1xuICAgICAgICBsZXQgbGV2ZWxPYmogPSB7dGltZSA6NTAwLCBpc1VubG9jayA6IHRydWV9XG4gICAgICAgaWYoIWxldmVsSW5mby5sZXZlbCkge1xuICAgICAgICBsZXQgbGV2ZWxPYmplY3RBcnJheSA9W107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IHRvdGFsTGV2ZWxzOyBpKyspe1xuICAgICAgICAgIGxldmVsT2JqZWN0QXJyYXlbaV0gPSBPYmplY3QuYXNzaWduKHtpZDogaX0sIGxldmVsT2JqKTtcbiAgICAgICAgfVxuICAgICAgICAgbGV2ZWxPYmplY3RBcnJheVswXS5pc1VubG9jayA9IHRydWU7XG4gICAgICAgICBjb25zb2xlLmxvZyhsZXZlbE9iamVjdEFycmF5WzBdPT09bGV2ZWxPYmplY3RBcnJheVsxXSk7XG4gICAgICAgICBsZXZlbEluZm9bXCJsZXZlbFwiXSA9IEpTT04uc3RyaW5naWZ5KGxldmVsT2JqZWN0QXJyYXkpOyBcbiAgICAgICB9ZWxzZXtcblxuICAgICAgICAvLyBOZXcgTGV2ZWwgYWRkZWQgaW4gdGhlIGpzb24gZmlsZVxuICAgICAgICAgbGV0IGxldmVsQXJyYXkgPSBKU09OLnBhcnNlKGxldmVsSW5mby5sZXZlbCk7XG4gICAgICAgICBpZihsZXZlbEFycmF5Lmxlbmd0aCA8IHRvdGFsTGV2ZWxzKXtcbiAgICAgICAgICBsZXQgZGlmZmVyZW5jZSA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJbmZvKCkuZmlsdGVyKGl0ZW0gPT4gISBsZXZlbEFycmF5LnNvbWUoZGF0YSA9PiBkYXRhLmlkID09IGl0ZW0uaWQpKTtcbiAgICAgICAgICBsZXQgdGltZUFycmF5ID0gW107XG4gICAgICAgICAgZm9yKGxldCBpID0wOyBpPCBkaWZmZXJlbmNlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgdGltZUFycmF5W2ldID0gT2JqZWN0LmFzc2lnbih7aWQgOmRpZmZlcmVuY2VbaV0uaWQgfSwgbGV2ZWxPYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhcInRpbWUgQXJyYVlcIiwgdGltZUFycmF5KTtcbiAgICAgICAgICBsZXZlbEFycmF5LnB1c2goLi4udGltZUFycmF5KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInRpbWUgQXJyYVlcIiwgbGV2ZWxBcnJheSk7XG4gICAgICAgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIC8vIE9MRCBMZXZlbCByZW1vdmVkIGZyb20gdGhlIGpzb24gZmlsZVxuICAgICAgICAgIGxldCBkaWZmZXJlbmNlID0gbGV2ZWxBcnJheS5maWx0ZXIoaXRlbSA9PiAhIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJbmZvKCkuc29tZShkYXRhID0+IGRhdGEuaWQgPT0gaXRlbS5pZCkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlmZmVyZW5jZVwiLCBkaWZmZXJlbmNlKTtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPCBkaWZmZXJlbmNlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGxldmVsQXJyYXkuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PSBkaWZmZXJlbmNlW2ldLmlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICAgICAgaWYoaW5kZXggIT0tMSl7XG4gICAgICAgICAgICAgICBsZXZlbEFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsIERhYXRhXCIsIGxldmVsQXJyYXkpO1xuICAgICAgICAgIGxldmVsQXJyYXlbMF0uaXNVbmxvY2sgPSB0cnVlO1xuICAgICAgICAgIGxldmVsSW5mb1tcImxldmVsXCJdID0gSlNPTi5zdHJpbmdpZnkobGV2ZWxBcnJheSk7XG4gICAgICB9XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkxldmVsSW5mb1wiLCBKU09OLnN0cmluZ2lmeShsZXZlbEluZm8pKTtcbiAgfVxuXG5cbiAgb25TaGFyZSgpe1xuICAgIGlmKGNjLnN5cy5pc0Jyb3dzZXIpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uUHJlc3NlZCwgZmFsc2UpO1xuICAgIHZhciBzaGFyZUluZm8gPSB7fTtcbiAgICBzaGFyZUluZm8udGV4dCA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RyaW5nKFwidGV4dFRvU2hhcmVcIik7XG4gICAgc2hhcmVJbmZvLnRpdGxlID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdHJpbmcoXCJ0aXRsZU9mU2hhcmVcIik7XG4gICAgLy9zaGFyZUluZm8uaW1hZ2UgPSBcInBhdGgvdG8vaW1hZ2VcIlxuICAgc2hhcmVJbmZvLmxpbmsgPSBHQU1FX0xJTksuVVJMIDsgIC8vIGxpbmsgb2YgZ2FtZVxuICAgc2RrYm94LlBsdWdpblNoYXJlLm5hdGl2ZVNoYXJlKHNoYXJlSW5mbyk7ICBcblxuICB9XG5cbiAgb25Nb3JlR2FtZXMoKXtcbiAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uUHJlc3NlZCwgZmFsc2UpO1xuICAgIGNjLnN5cy5vcGVuVVJMKEdBTUVfTElOSy5VUkwpO1xuICB9XG5cblxuICBzaG93UHJpdmFjeVBvbGljeSgpe1xuICAgIC8vIHRoaXMucGxheUxvYWRlcigpO1xuICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5idXR0b25QcmVzc2VkLCBmYWxzZSk7XG4gICAgdGhpcy5tb3JlSW5mby5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnByaXZhY3lQb2xpY3kuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGVuYWJsZWRNb3JlR2FtZXNCdXR0b24oaXNBY3RpdmUpe1xuICAgIHRoaXMubW9yZUluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiYnV0dG9uTGF5b3V0XCIpLmdldENoaWxkQnlOYW1lKFwibW9yZUdhbWVzXCIpLmFjdGl2ZSA9IGlzQWN0aXZlO1xuICAgIHRoaXMuYm90dG9tQmFyLmdldENoaWxkQnlOYW1lKFwibW9yZUdhbWVzXCIpLmFjdGl2ZSA9IGlzQWN0aXZlO1xuICB9XG5cblxuICBzaG93RnV0dXJlRGV0YWlsc1NjcmVlbigpe1xuICAgIHRoaXMuZnV0dXJlRGV0YWlscy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cblxuICBvcGVuU2V0dGluZ3MoKXtcbiAgICBpZih0aGlzLnNldHRpbmdzLmFjdGl2ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ2FtZVNjcmVlbiA9PSBHQU1FX1NDUkVFTi5MRVZFTF9TRUxFQ1RJT04gJiYgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wb3BTY2VuZSgpO1xuICAgIHRoaXMuY2hhbmdlU2NlbmVWaXNpYmxpdHkodGhpcy5nYW1lU2NyZWVuLCBmYWxzZSk7XG4gICAgdGhpcy5nYW1lU2NyZWVuID0gR0FNRV9TQ1JFRU4uU0VUVElOR1M7XG4gICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoU2NlbmUoR0FNRV9TQ1JFRU4uU0VUVElOR1MpO1xuICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNjcmVlbik7XG4gIH1cblxuICBvblRlcm1zQWNjZXB0KCl7XG4gICAgdGhpcy50ZXJtcy5hY3RpdmUgPSBmYWxzZTtcbiAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoYXNUZXJtQWNjZXB0ZWRcIiwgdHJ1ZSk7XG5cbiAgfVxuXG4gIHN0YXJ0SW1hZ2VMb2FkaW5nKCl7XG4gICAgbGV0IGxldmVscyA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJbmZvKCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJlbGV2ZXNcIiwgKVxuICAgIGlmKHRoaXMubGV0bG9hZENvdW50ID09IGxldmVscy5sZW5ndGgpe1xuICAgICAgcmV0dXJuO1xuICAgIH1lbHNle1xuICAgICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgICAgLmxvYWRMZXZlbEltYWdlcyh0aGlzLmxldGxvYWRDb3VudCkudGhlbigoKT0+e1xuICAgICAgICB0aGlzLmxldGxvYWRDb3VudCsrO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgbGV2ZWwgaW1hZ2VzIGZvclwiLCB0aGlzLmxldGxvYWRDb3VudCApO1xuICAgICAgICB0aGlzLnN0YXJ0SW1hZ2VMb2FkaW5nKCk7XG4gICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIGxvYWRpbmcgZGF0YVwiKTtcbiAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIFxuICB9XG5cblxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/level/levelUIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b088aAKCUxN6IbB3yHKE9T3', 'levelUIManager');
// scripts/level/levelUIManager.ts

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
var constants_1 = require("../helper/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelUIManager = /** @class */ (function (_super) {
    __extends(LevelUIManager, _super);
    function LevelUIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelSelectionButton = null;
        _this.unlocked = null;
        _this.locked = null;
        _this.layout = null;
        _this.title = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    LevelUIManager.prototype.start = function () {
    };
    LevelUIManager.prototype.setDelegateComponent = function (delgate) {
        this._delagate = delgate;
    };
    LevelUIManager.prototype.populateLevels = function (startIndex) {
        var levelInfo = GameManager_1.GameManager.getInstance().getLevelData(startIndex);
        console.log("level info", levelInfo);
        this.setLeveltitle(levelInfo.gameType, levelInfo.groupOf);
        this.layout.node.removeAllChildren();
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        var levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var levelsInfoForMode = JSON.parse(levelsInfo.level);
        var endIndex = (startIndex + 10) > levels.length ? levels.length : (startIndex + 10);
        for (var i = startIndex; i < endIndex; i++) {
            var button = cc.instantiate(this.levelSelectionButton);
            button.getChildByName("Background").getChildByName("title")
                .getComponent(cc.Label).getComponent("localiser").replaceValue("" + (i + 1));
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = "levelUIManager";
            clickEventHandler.handler = "onLevelSelect";
            clickEventHandler.customEventData = i.toString();
            button.getComponent(cc.Button).clickEvents.push(clickEventHandler);
            if (levelsInfoForMode[i].isUnlock) {
                button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.unlocked;
                button.getChildByName("lock").active = false;
                button.getComponent(cc.Button).interactable = true;
            }
            else {
                button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.locked;
                button.getChildByName("lock").active = true;
                button.getComponent(cc.Button).interactable = false;
            }
            this.layout.node.addChild(button);
        }
    };
    LevelUIManager.prototype.setLeveltitle = function (gameType, groupof) {
        var keyString = "";
        switch (gameType) {
            case constants_1.GAME_TYPE.FIND:
                keyString = "find";
                break;
            case constants_1.GAME_TYPE.MIRROR:
                keyString = "mirror";
                break;
        }
        this.title.node.getComponent("localiser").key = keyString;
        console.log('keyString', keyString);
        this.title.node.getComponent("localiser").replaceValue("" + groupof);
        this.title.node.getComponent("localiser").setStringForKey();
    };
    LevelUIManager.prototype.onLevelSelect = function (event, level) {
        this._delagate.onLevelSelect(level);
    };
    LevelUIManager.prototype.openLocalisation = function () {
        this._delagate.openLocalisationPopUp();
    };
    __decorate([
        property(cc.Prefab)
    ], LevelUIManager.prototype, "levelSelectionButton", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LevelUIManager.prototype, "unlocked", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LevelUIManager.prototype, "locked", void 0);
    __decorate([
        property(cc.Layout)
    ], LevelUIManager.prototype, "layout", void 0);
    __decorate([
        property(cc.Label)
    ], LevelUIManager.prototype, "title", void 0);
    LevelUIManager = __decorate([
        ccclass
    ], LevelUIManager);
    return LevelUIManager;
}(cc.Component));
exports.default = LevelUIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xldmVsL2xldmVsVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHVEQUFzRDtBQUN0RCxpREFBZ0Q7QUFFMUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUErRkM7UUEzRkcsMEJBQW9CLEdBQWUsSUFBSSxDQUFDO1FBR3hDLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFHNUIsWUFBTSxHQUFlLElBQUksQ0FBQztRQUkxQixZQUFNLEdBQWUsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBYyxJQUFJLENBQUM7O1FBNkV4QixpQkFBaUI7SUFDckIsQ0FBQztJQTVFRyxlQUFlO0lBRWYsOEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw2Q0FBb0IsR0FBcEIsVUFBcUIsT0FBTztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFJLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBR0QsdUNBQWMsR0FBZCxVQUFlLFVBQVU7UUFDckIsSUFBSSxTQUFTLEdBQUcseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUl6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JDLElBQUksTUFBTSxHQUFHLHlC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OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vbWFuYWdlcnMvR2FtZU1hbmFnZXJcIjtcbmltcG9ydCB7IEdBTUVfVFlQRSB9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgX2RlbGFnYXRlIDogbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGxldmVsU2VsZWN0aW9uQnV0dG9uIDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICB1bmxvY2tlZCA6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgbG9ja2VkIDogY2MuUHJlZmFiID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkxheW91dClcbiAgICBsYXlvdXQgOiBjYy5MYXlvdXQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpdGxlIDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBzZXREZWxlZ2F0ZUNvbXBvbmVudChkZWxnYXRlKXtcbiAgICAgICAgdGhpcy5fZGVsYWdhdGUgPSAgZGVsZ2F0ZTtcbiAgICB9XG5cblxuICAgIHBvcHVsYXRlTGV2ZWxzKHN0YXJ0SW5kZXgpe1xuICAgICAgICBsZXQgbGV2ZWxJbmZvID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbERhdGEoc3RhcnRJbmRleCk7XG4gXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWwgaW5mb1wiLCBsZXZlbEluZm8pO1xuICAgICAgICB0aGlzLnNldExldmVsdGl0bGUobGV2ZWxJbmZvLmdhbWVUeXBlLCBsZXZlbEluZm8uZ3JvdXBPZilcblxuXG5cbiAgICAgICAgdGhpcy5sYXlvdXQubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBsZXQgbGV2ZWxzID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbEluZm8oKTtcbiAgICAgICAgbGV0IGxldmVsc0luZm8gPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxldmVsSW5mb1wiKSk7XG4gICAgICAgIGxldCBsZXZlbHNJbmZvRm9yTW9kZSA9IEpTT04ucGFyc2UobGV2ZWxzSW5mby5sZXZlbCk7XG4gICAgICAgIGxldCBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMTApID4gbGV2ZWxzLmxlbmd0aCA/IGxldmVscy5sZW5ndGggOiAoc3RhcnRJbmRleCArMTApO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxldmVsU2VsZWN0aW9uQnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLnJlcGxhY2VWYWx1ZShgJHtpKzF9YCk7XG4gICAgICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJsZXZlbFVJTWFuYWdlclwiO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25MZXZlbFNlbGVjdFwiO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaS50b1N0cmluZygpO1xuICAgICAgICAgICAgYnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgaWYobGV2ZWxzSW5mb0Zvck1vZGVbaV0uaXNVbmxvY2spe1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q29tcG9uZW50KFwiY2MuU3ByaXRlXCIpLnNwcml0ZUZyYW1lID0gdGhpcy51bmxvY2tlZDtcbiAgICAgICAgICAgICAgICBidXR0b24uZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDb21wb25lbnQoXCJjYy5TcHJpdGVcIikuc3ByaXRlRnJhbWUgPSB0aGlzLmxvY2tlZDtcbiAgICAgICAgICAgICAgICBidXR0b24uZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXlvdXQubm9kZS5hZGRDaGlsZChidXR0b24pO1xuICAgICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNldExldmVsdGl0bGUoZ2FtZVR5cGUsIGdyb3Vwb2Ype1xuXG4gICAgICAgIGxldCBrZXlTdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIHN3aXRjaChnYW1lVHlwZSl7XG4gICAgICAgICAgICBjYXNlIEdBTUVfVFlQRS5GSU5EOlxuICAgICAgICAgICAgICAgIGtleVN0cmluZyA9IFwiZmluZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHQU1FX1RZUEUuTUlSUk9SOlxuICAgICAgICAgICAgICAgIGtleVN0cmluZyA9IFwibWlycm9yXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGl0bGUubm9kZS5nZXRDb21wb25lbnQoXCJsb2NhbGlzZXJcIikua2V5ID0ga2V5U3RyaW5nO1xuICAgICAgICBjb25zb2xlLmxvZygna2V5U3RyaW5nJywga2V5U3RyaW5nKTtcbiAgICAgICAgdGhpcy50aXRsZS5ub2RlLmdldENvbXBvbmVudChcImxvY2FsaXNlclwiKS5yZXBsYWNlVmFsdWUoYCR7Z3JvdXBvZn1gKTtcbiAgICAgICAgdGhpcy50aXRsZS5ub2RlLmdldENvbXBvbmVudChcImxvY2FsaXNlclwiKS5zZXRTdHJpbmdGb3JLZXkoKTtcbiAgICB9XG5cbiAgICBvbkxldmVsU2VsZWN0KGV2ZW50OiBFdmVudCwgbGV2ZWw6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuX2RlbGFnYXRlLm9uTGV2ZWxTZWxlY3QobGV2ZWwpO1xuICAgIH1cblxuXG4gICAgb3BlbkxvY2FsaXNhdGlvbigpe1xuICAgICAgICB0aGlzLl9kZWxhZ2F0ZS5vcGVuTG9jYWxpc2F0aW9uUG9wVXAoKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/managers/FacebookAudiance.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7156emC5pEy6IYXQVsNTaS', 'FacebookAudiance');
// scripts/managers/FacebookAudiance.js

"use strict";

var LIVE_STATUS = {
  UNKNOWN: 0,
  INITIALIZING: 1,
  RUNNING: 2,
  PAUSED: 3,
  STOPPED: 4,
  COMPLETED: 5
};
var PLACEMENT_IDS = {
  ANDROID: {
    BANNER: "854006105330177_900427447354709",
    INTERSTITIAL: '854006105330177_898749927522461',
    REWARDEDVIDEO: 'YOUR_PLACEMENT_ID'
  },
  IOS: {
    BANNER: "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
    INTERSTITIAL: 'IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID',
    REWARDEDVIDEO: 'YOUR_PLACEMENT_ID'
  }
};
cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    //skip ads on browsers
    if (cc.sys.isBrowser) return;
    this.placementId = PLACEMENT_IDS.ANDROID;
    cc.log("platform is ", cc.sys.platform, cc.sys.IPAD);

    if (cc.sys.platform === cc.sys.IPHONE || cc.sys.platform === cc.sys.IPAD) {
      this.placementId = PLACEMENT_IDS.IOS;
    }

    this.schedule(this.loadInterstitial, 5, cc.macro.REPEAT_FOREVER, 0);
  },
  showBanner: function showBanner(event) {
    //skip ads on browsers
    if (cc.sys.isBrowser) return;
    var banner = new cc.Ads.Banner(this.placementId.BANNER, cc.Ads.BANNER_POSITION.ALIGN_PARENT_BOTTOM);
    this.banner = banner;
    banner.on("onAdLoaded", function () {
      cc.log("banner onAdLoaded");
    }, this.node);
    banner.on("onError", function (eCode) {
      console.log("banner onError", eCode);
    }, this.node);
    banner.on("onAdClicked", function () {
      cc.log("banner onAdClicked");
    }, this.node);
    banner.show().then(function () {
      cc.log("banner show-------");
    })["catch"](function (e) {
      cc.log("banner reject ", e);
    });
  },
  destryBanner: function destryBanner() {
    this.banner.destroy();
  },
  loadInterstitial: function loadInterstitial() {
    var _this = this;

    this.interstital = new cc.Ads.Interstitial(this.placementId.INTERSTITIAL);
    this.interstital.on("onInterstitialDisplayed", function () {
      cc.log("interstital onInterstitialDisplayed");
    });
    this.interstital.on("onInterstitialDismissed", function () {
      cc.log("interstital onInterstitialDismissed");
    });
    this.interstital.on("onAdClicked", function () {
      cc.log("interstital onAdClicked");
    });
    this.interstital.on("onError", function (error) {
      console.log("interstital Error:", error);
    });
    this.interstital.loadAd().then(function () {
      _this.isInterstitialLoaded = true;
    })["catch"](function (e) {
      cc.log("interstital catch", e);
    });
  },
  showInterstital: function showInterstital() {
    //skip ads on browsers
    if (cc.sys.isBrowser) return;

    if (this.isInterstitialLoaded) {
      this.interstital.show();
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXJzL0ZhY2Vib29rQXVkaWFuY2UuanMiXSwibmFtZXMiOlsiTElWRV9TVEFUVVMiLCJVTktOT1dOIiwiSU5JVElBTElaSU5HIiwiUlVOTklORyIsIlBBVVNFRCIsIlNUT1BQRUQiLCJDT01QTEVURUQiLCJQTEFDRU1FTlRfSURTIiwiQU5EUk9JRCIsIkJBTk5FUiIsIklOVEVSU1RJVElBTCIsIlJFV0FSREVEVklERU8iLCJJT1MiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwic3lzIiwiaXNCcm93c2VyIiwicGxhY2VtZW50SWQiLCJsb2ciLCJwbGF0Zm9ybSIsIklQQUQiLCJJUEhPTkUiLCJzY2hlZHVsZSIsImxvYWRJbnRlcnN0aXRpYWwiLCJtYWNybyIsIlJFUEVBVF9GT1JFVkVSIiwic2hvd0Jhbm5lciIsImV2ZW50IiwiYmFubmVyIiwiQWRzIiwiQmFubmVyIiwiQkFOTkVSX1BPU0lUSU9OIiwiQUxJR05fUEFSRU5UX0JPVFRPTSIsIm9uIiwibm9kZSIsImVDb2RlIiwiY29uc29sZSIsInNob3ciLCJ0aGVuIiwiZSIsImRlc3RyeUJhbm5lciIsImRlc3Ryb3kiLCJpbnRlcnN0aXRhbCIsIkludGVyc3RpdGlhbCIsImVycm9yIiwibG9hZEFkIiwiaXNJbnRlcnN0aXRpYWxMb2FkZWQiLCJzaG93SW50ZXJzdGl0YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsV0FBVyxHQUFHO0FBQ2RDLEVBQUFBLE9BQU8sRUFBRSxDQURLO0FBRWRDLEVBQUFBLFlBQVksRUFBRSxDQUZBO0FBR2RDLEVBQUFBLE9BQU8sRUFBRSxDQUhLO0FBSWRDLEVBQUFBLE1BQU0sRUFBRSxDQUpNO0FBS2RDLEVBQUFBLE9BQU8sRUFBRSxDQUxLO0FBTWRDLEVBQUFBLFNBQVMsRUFBRTtBQU5HLENBQWxCO0FBU0EsSUFBSUMsYUFBYSxHQUFHO0FBQ2hCQyxFQUFBQSxPQUFPLEVBQUU7QUFDTEMs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S2tDLFdBQUwsQ0FBaUJULEVBQWpCLENBQW9CLHlCQUFwQixFQUErQyxZQUFNO0FBQ2pEdEIsTUFBQUEsRUFBRSxDQUFDTyxHQUFILENBQU8scUNBQVA7QUFDSCxLQUZEO0FBSUEsU0FBS3dCLFdBQUwsQ0FBaUJULEVBQWpCLENBQW9CLHlCQUFwQixFQUErQyxZQUFNO0FBQ2pEdEIsTUFBQUEsRUFBRSxDQUFDTyxHQUFILENBQU8scUNBQVA7QUFDSCxLQUZEO0FBSUEsU0FBS3dCLFdBQUwsQ0FBaUJULEVBQWpCLENBQW9CLGFBQXBCLEVBQW1DLFlBQU07QUFDckN0QixNQUFBQSxFQUFFLENBQUNPLEdBQUgsQ0FBTyx5QkFBUDtBQUNILEtBRkQ7QUFJQSxTQUFLd0IsV0FBTCxDQUFpQlQsRUFBakIsQ0FBb0IsU0FBcEIsRUFBOEIsVUFBQ1csS0FBRCxFQUFTO0FBQ25DUixNQUFBQSxPQUFPLENBQUNsQixHQUFSLENBQVksb0JBQVosRUFBaUMwQixLQUFqQztBQUNILEtBRkQ7QUFJQSxTQUFLRixXQUFMLENBQWlCRyxNQUFqQixHQUEwQlAsSUFBMUIsQ0FBK0IsWUFBTTtBQUNqQyxNQUFBLEtBQUksQ0FBQ1Esb0JBQUwsR0FBNEIsSUFBNUI7QUFDSCxLQUZELFdBRVMsVUFBQ1AsQ0FBRCxFQUFPO0FBQ1o1QixNQUFBQSxFQUFFLENBQUNPLEdBQUgsQ0FBTyxtQkFBUCxFQUE0QnFCLENBQTVCO0FBQ0gsS0FKRDtBQUtILEdBckVJO0FBdUVMUSxFQUFBQSxlQXZFSyw2QkF1RVk7QUFDYjtBQUNBLFFBQUdwQyxFQUFFLENBQUNJLEdBQUgsQ0FBT0MsU0FBVixFQUNJOztBQUNKLFFBQUcsS0FBSzhCLG9CQUFSLEVBQTZCO0FBQ3pCLFdBQUtKLFdBQUwsQ0FBaUJMLElBQWpCO0FBQ0g7QUFDSjtBQTlFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgTElWRV9TVEFUVVMgPSB7XG4gICAgVU5LTk9XTjogMCxcbiAgICBJTklUSUFMSVpJTkc6IDEsXG4gICAgUlVOTklORzogMixcbiAgICBQQVVTRUQ6IDMsXG4gICAgU1RPUFBFRDogNCxcbiAgICBDT01QTEVURUQ6IDUsXG59O1xuXG5sZXQgUExBQ0VNRU5UX0lEUyA9IHtcbiAgICBBTkRST0lEOiB7XG4gICAgICAgIEJBTk5FUjogXCI4NTQwMDYxMDUzMzAxNzdfOTAwNDI3NDQ3MzU0NzA5XCIsXG4gICAgICAgIElOVEVSU1RJVElBTDogJzg1NDAwNjEwNTMzMDE3N184OTg3NDk5Mjc1MjI0NjEnLFxuICAgICAgICBSRVdBUkRFRFZJREVPOiAnWU9VUl9QTEFDRU1FTlRfSUQnXG4gICAgfSxcbiAgICBJT1M6IHtcbiAgICAgICAgQkFOTkVSOiBcIklNR18xNl85X0FQUF9JTlNUQUxMI1lPVVJfUExBQ0VNRU5UX0lEXCIsXG4gICAgICAgIElOVEVSU1RJVElBTDogJ0lNR18xNl85X0FQUF9JTlNUQUxMI1lPVVJfUExBQ0VNRU5UX0lEJyxcbiAgICAgICAgUkVXQVJERURWSURFTzogJ1lPVVJfUExBQ0VNRU5UX0lEJ1xuICAgIH1cbn07XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIC8vc2tpcCBhZHMgb24gYnJvd3NlcnNcbiAgICAgICAgaWYoY2Muc3lzLmlzQnJvd3NlcilcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0aGlzLnBsYWNlbWVudElkID0gUExBQ0VNRU5UX0lEUy5BTkRST0lEO1xuXG4gICAgICAgIGNjLmxvZyhcInBsYXRmb3JtIGlzIFwiLGNjLnN5cy5wbGF0Zm9ybSxjYy5zeXMuSVBBRCk7XG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5JUEhPTkUgfHwgY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuSVBBRCkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZW1lbnRJZCA9IFBMQUNFTUVOVF9JRFMuSU9TO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5sb2FkSW50ZXJzdGl0aWFsLCA1LCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMCk7XG4gICAgfSxcblxuICAgIHNob3dCYW5uZXIoZXZlbnQpe1xuICAgICAgICAvL3NraXAgYWRzIG9uIGJyb3dzZXJzXG4gICAgICAgIGlmKGNjLnN5cy5pc0Jyb3dzZXIpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IGJhbm5lciA9IG5ldyBjYy5BZHMuQmFubmVyKHRoaXMucGxhY2VtZW50SWQuQkFOTkVSLGNjLkFkcy5CQU5ORVJfUE9TSVRJT04uQUxJR05fUEFSRU5UX0JPVFRPTSk7XG4gICAgICAgIHRoaXMuYmFubmVyID0gYmFubmVyO1xuICAgICAgICBiYW5uZXIub24oXCJvbkFkTG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNjLmxvZyhcImJhbm5lciBvbkFkTG9hZGVkXCIpO1xuICAgICAgICB9LCB0aGlzLm5vZGUpO1xuXG4gICAgICAgIGJhbm5lci5vbihcIm9uRXJyb3JcIiwgKGVDb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhbm5lciBvbkVycm9yXCIsIGVDb2RlKTtcbiAgICAgICAgfSwgdGhpcy5ub2RlKTtcblxuICAgICAgICBiYW5uZXIub24oXCJvbkFkQ2xpY2tlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coXCJiYW5uZXIgb25BZENsaWNrZWRcIik7XG4gICAgICAgIH0sIHRoaXMubm9kZSk7XG5cbiAgICAgICAgYmFubmVyLnNob3coKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNjLmxvZyhcImJhbm5lciBzaG93LS0tLS0tLVwiKTtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGNjLmxvZyhcImJhbm5lciByZWplY3QgXCIsIGUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZGVzdHJ5QmFubmVyKCl7XG4gICAgICAgIHRoaXMuYmFubmVyLmRlc3Ryb3koKTtcbiAgICB9LFxuXG4gICAgbG9hZEludGVyc3RpdGlhbCgpe1xuICAgICAgICB0aGlzLmludGVyc3RpdGFsID0gbmV3IGNjLkFkcy5JbnRlcnN0aXRpYWwodGhpcy5wbGFjZW1lbnRJZC5JTlRFUlNUSVRJQUwpO1xuICAgICAgICB0aGlzLmludGVyc3RpdGFsLm9uKFwib25JbnRlcnN0aXRpYWxEaXNwbGF5ZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY2MubG9nKFwiaW50ZXJzdGl0YWwgb25JbnRlcnN0aXRpYWxEaXNwbGF5ZWRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW50ZXJzdGl0YWwub24oXCJvbkludGVyc3RpdGlhbERpc21pc3NlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coXCJpbnRlcnN0aXRhbCBvbkludGVyc3RpdGlhbERpc21pc3NlZFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbnRlcnN0aXRhbC5vbihcIm9uQWRDbGlja2VkXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNjLmxvZyhcImludGVyc3RpdGFsIG9uQWRDbGlja2VkXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmludGVyc3RpdGFsLm9uKFwib25FcnJvclwiLChlcnJvcik9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW50ZXJzdGl0YWwgRXJyb3I6XCIsZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmludGVyc3RpdGFsLmxvYWRBZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0ludGVyc3RpdGlhbExvYWRlZCA9IHRydWU7XG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coXCJpbnRlcnN0aXRhbCBjYXRjaFwiLCBlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNob3dJbnRlcnN0aXRhbCgpe1xuICAgICAgICAvL3NraXAgYWRzIG9uIGJyb3dzZXJzXG4gICAgICAgIGlmKGNjLnN5cy5pc0Jyb3dzZXIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmKHRoaXMuaXNJbnRlcnN0aXRpYWxMb2FkZWQpeyAgICAgXG4gICAgICAgICAgICB0aGlzLmludGVyc3RpdGFsLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/HUD/hud.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6713aGUdqRLHbdo1jB5MW+H', 'hud');
// scripts/HUD/hud.ts

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
var SoundManager_1 = require("../managers/SoundManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HUD = /** @class */ (function (_super) {
    __extends(HUD, _super);
    function HUD() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.volumeUp = null;
        _this.volumeDown = null;
        _this.volume = null;
        _this.selectMode = null;
        _this.back = null;
        _this.setting = null;
        _this.level = null;
        _this.backButtonAudio = null;
        _this.buttonAudio = null;
        return _this;
    }
    HUD.prototype.start = function () {
        this.updateVolumeIcon();
    };
    HUD.prototype.setDelegate = function (delegate) {
        console.log("delegate", delegate);
        this.delegate = delegate;
    };
    HUD.prototype.onBack = function () {
        SoundManager_1.default.getInstance().playEffect(this.backButtonAudio, false);
        this.delegate.onBack();
    };
    HUD.prototype.changeVolume = function (event) {
        if (JSON.parse(cc.sys.localStorage.getItem("Sound"))) {
            SoundManager_1.default.getInstance().stopAllSounds();
            cc.sys.localStorage.setItem("Sound", false);
        }
        else {
            //  SoundManager.getInstance().playMusic(true);
            cc.sys.localStorage.setItem("Sound", true);
        }
        this.updateVolumeIcon();
    };
    HUD.prototype.setVisiblity = function (gameScreen) {
        this.volume.node.active = true;
        this.setting.node.active = true;
        this.level.node.active = true;
        // switch(gameScreen){
        //     case GAME_SCREEN.HOME:
        //         this.back.node.active = false;
        //         break;
        //     case GAME_SCREEN.LEVEL_SELECTION:
        //     case GAME_SCREEN.GAME_PLAY:
        //         this.back.node.active = true;
        //         break;
        //     default:
        //         console.log("option error in setVisibility");    
        // }
    };
    HUD.prototype.updateVolumeIcon = function () {
        var sprite = this.volume.node.getChildByName("Background").getComponent(cc.Sprite);
        sprite.spriteFrame = JSON.parse(cc.sys.localStorage.getItem("Sound")) ? this.volumeUp : this.volumeDown;
    };
    HUD.prototype.onSetting = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonAudio, false);
        this.delegate.openSettings();
    };
    HUD.prototype.onLevelSelection = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonAudio, false);
        this.delegate.showLevelSelection();
    };
    __decorate([
        property(cc.SpriteFrame)
    ], HUD.prototype, "volumeUp", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], HUD.prototype, "volumeDown", void 0);
    __decorate([
        property(cc.Button)
    ], HUD.prototype, "volume", void 0);
    __decorate([
        property(cc.Label)
    ], HUD.prototype, "selectMode", void 0);
    __decorate([
        property(cc.Button)
    ], HUD.prototype, "back", void 0);
    __decorate([
        property(cc.Button)
    ], HUD.prototype, "setting", void 0);
    __decorate([
        property(cc.Button)
    ], HUD.prototype, "level", void 0);
    __decorate([
        property(cc.AudioClip)
    ], HUD.prototype, "backButtonAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], HUD.prototype, "buttonAudio", void 0);
    HUD = __decorate([
        ccclass
    ], HUD);
    return HUD;
}(cc.Component));
exports.default = HUD;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0hVRC9odWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQW9EO0FBSzlDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBZ0dDO1FBN0ZHLGNBQVEsR0FBb0IsSUFBSSxDQUFDO1FBR2pDLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUduQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLHFCQUFlLEdBQWtCLElBQUksQ0FBQztRQUd0QyxpQkFBVyxHQUFrQixJQUFJLENBQUM7O0lBcUV0QyxDQUFDO0lBL0RHLG1CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QseUJBQVcsR0FBWCxVQUFhLFFBQVE7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVELG9CQUFNLEdBQU47UUFDSSxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUdELDBCQUFZLEdBQVosVUFBYSxLQUFhO1FBQ3RCLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxP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IjpbImltcG9ydCB7IEdBTUVfU0NSRUVOIH0gZnJvbSBcIi4uL2hlbHBlci9jb25zdGFudHNcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJzL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vbWFuYWdlcnMvR2FtZU1hbmFnZXJcIjtcblxuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFVEIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICB2b2x1bWVVcCA6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICB2b2x1bWVEb3duIDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICB2b2x1bWU6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgc2VsZWN0TW9kZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBiYWNrOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBzZXR0aW5nOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBsZXZlbDogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYmFja0J1dHRvbkF1ZGlvIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYnV0dG9uQXVkaW8gOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIGRlbGVnYXRlO1xuXG5cbiAgICBzdGFydCgpe1xuICAgICAgICB0aGlzLnVwZGF0ZVZvbHVtZUljb24oKTtcbiAgICB9XG4gICAgc2V0RGVsZWdhdGUgKGRlbGVnYXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZWdhdGVcIiwgZGVsZWdhdGUpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgfVxuXG4gICAgb25CYWNrKCl7XG4gICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5iYWNrQnV0dG9uQXVkaW8sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5vbkJhY2soKTtcbiAgICB9XG5cblxuICAgIGNoYW5nZVZvbHVtZShldmVudCA6IEV2ZW50KXtcbiAgICAgICAgaWYoSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJTb3VuZFwiKSkpe1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkuc3RvcEFsbFNvdW5kcygpO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiU291bmRcIiwgZmFsc2UpOyAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5TXVzaWModHJ1ZSk7XG4gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiU291bmRcIiwgdHJ1ZSlcbiAgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVm9sdW1lSWNvbigpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRWaXNpYmxpdHkoZ2FtZVNjcmVlbiA6IEdBTUVfU0NSRUVOKXtcbiAgICAgICAgdGhpcy52b2x1bWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmcubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxldmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gc3dpdGNoKGdhbWVTY3JlZW4pe1xuICAgICAgICAvLyAgICAgY2FzZSBHQU1FX1NDUkVFTi5IT01FOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmFjay5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBHQU1FX1NDUkVFTi5MRVZFTF9TRUxFQ1RJT046XG4gICAgICAgIC8vICAgICBjYXNlIEdBTUVfU0NSRUVOLkdBTUVfUExBWTpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJhY2subm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIm9wdGlvbiBlcnJvciBpbiBzZXRWaXNpYmlsaXR5XCIpOyAgICBcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHVwZGF0ZVZvbHVtZUljb24oKXtcbiAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMudm9sdW1lLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlNvdW5kXCIpKSA/IHRoaXMudm9sdW1lVXA6IHRoaXMudm9sdW1lRG93bjtcbiAgICB9XG5cbiAgICBvblNldHRpbmcoKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvbkF1ZGlvLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUub3BlblNldHRpbmdzKCk7XG5cbiAgICB9XG5cbiAgICBvbkxldmVsU2VsZWN0aW9uKCl7XG4gICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5idXR0b25BdWRpbywgZmFsc2UpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLnNob3dMZXZlbFNlbGVjdGlvbigpO1xuICAgIH1cblxuXG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
        this._delegate.startGame();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L2dhbWVTdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBMkQ7QUFFM0QseURBQW9EO0FBRXBELG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGO0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0RDO1FBakRXLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBZSxJQUFJLENBQUE7UUFJekIsbUJBQWEsR0FBa0IsSUFBSSxDQUFDOztRQWlDcEMsaUJBQWlCO0lBQ3JCLENBQUM7SUFoQ0cseUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxpQ0FBYSxHQUFiLFVBQWMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPO1FBQ3JDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixRQUFPLFFBQVEsRUFBQztZQUNaLEtBQUsscUJBQVMsQ0FBQyxJQUFJO2dCQUNmLFNBQVMsR0FBRyxNQUFNLENBQUM7Z0JBQ25CLE1BQU07WUFDVixLQUFLLHFCQUFTLENBQUMsTUFBTTtnQkFDakIsU0FBUyxHQUFHLFFBQVEsQ0FBQztnQkFDckIsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFHLE9BQVMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLDRGQUE0RjtRQUM1RixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEdBQUcsb0JBQW1CLFNBQVMsR0FBRyxPQUFTLENBQUE7UUFDekYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDakUsQ0FBQztJQUdELDRCQUFRLEdBQVI7UUFDSSxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFL0IsQ0FBQztJQTNDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2E7SUFsQm5CLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FvRDdCO0lBQUQsZ0JBQUM7Q0FwREQsQUFvREMsQ0FwRHNDLEVBQUUsQ0FBQyxTQUFTLEdBb0RsRDtrQkFwRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHQU1FX01PREUgLCBHQU1FX1RZUEV9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlcnMvU291bmRNYW5hZ2VyXCI7XG5cbi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGFydCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIHByaXZhdGUgX2RlbGVnYXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZ2FtZU5hbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml6ZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGluc3RyYWN0aW9uIDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBhY2NlcHQgOiBjYy5CdXR0b24gPSBudWxsXG5cblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYnV0dG9uUHJlc3NlZCA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBzZXRQcm9wZXJ0aWVzKGRlbGVnYXRlLCBnYW1lVHlwZSwgZ3JvdXBvZil7XG4gICAgICAgIGxldCBrZXlTdHJpbmcgPSBcIlwiO1xuICAgICAgICBzd2l0Y2goZ2FtZVR5cGUpe1xuICAgICAgICAgICAgY2FzZSBHQU1FX1RZUEUuRklORDpcbiAgICAgICAgICAgICAgICBrZXlTdHJpbmcgPSBcImZpbmRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR0FNRV9UWVBFLk1JUlJPUjpcbiAgICAgICAgICAgICAgICBrZXlTdHJpbmcgPSBcIm1pcnJvclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWVOYW1lLm5vZGUuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLmtleSA9IGtleVN0cmluZztcbiAgICAgICAgY29uc29sZS5sb2coJ2tleVN0cmluZycsIGtleVN0cmluZyk7XG4gICAgICAgIHRoaXMuZ2FtZU5hbWUubm9kZS5nZXRDb21wb25lbnQoXCJsb2NhbGlzZXJcIikucmVwbGFjZVZhbHVlKGAke2dyb3Vwb2Z9YCk7XG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5IGlzXCIsIGBpbnN0cnVjdGlvbnNGb3IkeyBrZXlTdHJpbmd9JHtncm91cG9mfWAsIHRoaXMuaW5zdHJhY3Rpb24uc3RyaW5nKTtcbiAgICAgICAgdGhpcy5pbnN0cmFjdGlvbi5nZXRDb21wb25lbnQoJ2xvY2FsaXNlcicpLmtleSA9IGBpbnN0cnVjdGlvbnNGb3IkeyBrZXlTdHJpbmd9JHtncm91cG9mfWBcbiAgICAgICAgdGhpcy5pbnN0cmFjdGlvbi5nZXRDb21wb25lbnQoJ2xvY2FsaXNlcicpLnNldFN0cmluZ0ZvcktleSgpO1xuICAgIH1cblxuXG4gICAgb25BY2NlcHQoKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvblByZXNzZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUuc3RhcnRHYW1lKCk7XG5cbiAgICB9XG5cbiAgXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
        _this._delegate = null;
        _this.remarks = null;
        _this.comments = null;
        _this.newRecord = null;
        _this.timesUp = null;
        _this.adButtons = null;
        _this.buttonPressed = null;
        return _this;
        // update (dt) {}
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
        this.remarks.string = GameManager_1.GameManager.getInstance().getString('newRecord');
        switch (type) {
            case constants_1.END_POP_UP.CLEARD:
                this.remarks.string = GameManager_1.GameManager.getInstance().getString('congratulations');
            case constants_1.END_POP_UP.NEW_RECORD:
                this.newRecord.active = true;
                break;
            case constants_1.END_POP_UP.FAILED:
                this.timesUp.active = true;
                break;
        }
    };
    GameEnd.prototype.showAds = function () {
        if (!cc.sys.isBrowser) {
            AdManager_1.default.getInstance().showInterstital(this);
        }
    };
    GameEnd.prototype.adHasbeenShown = function () {
        var hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
        hintCount += 3; // for now will add new once done
        cc.sys.localStorage.setItem("hint", JSON.stringify(hintCount));
        this.adButtons.interactable = false;
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
        property(cc.Button)
    ], GameEnd.prototype, "adButtons", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameEnd.prototype, "buttonPressed", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L2dhbWVFbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTREO0FBQzVELHVEQUFzRDtBQUN0RCx5REFBb0Q7QUFDcEQsbURBQThDO0FBQzlDLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGO0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBeUZDO1FBdEZXLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUl6QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBSTNCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQWUsSUFBSSxDQUFDO1FBSzdCLG1CQUFhLEdBQWtCLElBQUksQ0FBQzs7UUFnRXBDLGlCQUFpQjtJQUNyQixDQUFDO0lBOURHLHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLFFBQVEsRUFBRSxRQUFRO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLGtDQUFrQztJQUN0QyxDQUFDO0lBSUQsMEJBQVEsR0FBUjtRQUNJLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUUvQixDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUNJLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMEJBQVEsR0FBUjtRQUNJLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw4QkFBWSxHQUFaLFVBQWEsSUFBaUIsRUFBRSxLQUFLO1FBRWpDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkUsUUFBTyxJQUFJLEVBQUM7WUFDUixLQUFLLHNCQUFVLENBQUMsTUFBTTtnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNsRixLQUFLLHNCQUFVLENBQUMsVUFBVTtnQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxzQkFBVSxDQUFDLE1BQU07Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDM0IsTUFBTTtTQUVkO0lBRUwsQ0FBQztJQUdELHlCQUFPLEdBQVA7UUFDSSxJQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUM7WUFDakIsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakQ7SUFDTCxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLElBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDakUsU0FBUyxJQUFHLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztRQUNoRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQWhGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNNO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ1E7SUFJM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1M7SUFLN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDYTtJQXhCbkIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXlGM0I7SUFBRCxjQUFDO0NBekZELEFBeUZDLENBekZvQyxFQUFFLENBQUMsU0FBUyxHQXlGaEQ7a0JBekZvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0FNRV9NT0RFLCBFTkRfUE9QX1VQIH0gZnJvbSBcIi4uL2hlbHBlci9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXJzL0dhbWVNYW5hZ2VyXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXJcIjtcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJzL0FkTWFuYWdlclwiO1xuLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUVuZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIHByaXZhdGUgX2RlbGVnYXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcmVtYXJrczogY2MuTGFiZWwgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgY29tbWVudHMgOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5ld1JlY29yZCA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGltZXNVcCA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBhZEJ1dHRvbnMgOiBjYy5CdXR0b24gPSBudWxsO1xuXG5cblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYnV0dG9uUHJlc3NlZCA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHNldFByb3BlcnRpZXMoZGVsZWdhdGUsIGdhbWVNb2RlICl7XG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIC8vIHRoaXMubW9kZSA9IGdhbWVNb2RlLnRvVXBwZXIoKTtcbiAgICB9XG5cblxuXG4gICAgb25BY2NlcHQoKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvblByZXNzZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUuZ2FtZUVuZGVkKCk7XG5cbiAgICB9XG5cbiAgICBvblBsYXlBZ2FpbiAoKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvblByZXNzZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUub25QbGF5QWdhaW4oKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpe1xuICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uUHJlc3NlZCwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5vblBsYXlBZ2FpbkNhbmNlbCgpO1xuICAgIH1cblxuICAgIHNob3dQb3BVcEZvcih0eXBlIDogRU5EX1BPUF9VUCwgbGV2ZWwpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5uZXdSZWNvcmQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZXNVcC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW1hcmtzLnN0cmluZyA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RyaW5nKCduZXdSZWNvcmQnKTtcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICAgICAgY2FzZSBFTkRfUE9QX1VQLkNMRUFSRDogXG4gICAgICAgICAgICAgICAgIHRoaXMucmVtYXJrcy5zdHJpbmcgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0cmluZygnY29uZ3JhdHVsYXRpb25zJyk7XG4gICAgICAgICAgICBjYXNlIEVORF9QT1BfVVAuTkVXX1JFQ09SRDpcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1JlY29yZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBFTkRfUE9QX1VQLkZBSUxFRDpcbiAgICAgICAgICAgICAgICAgdGhpcy50aW1lc1VwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgc2hvd0Fkcygpe1xuICAgICAgICBpZighY2Muc3lzLmlzQnJvd3Nlcil7XG4gICAgICAgICAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zaG93SW50ZXJzdGl0YWwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZEhhc2JlZW5TaG93bigpe1xuICAgICAgICBsZXQgIGhpbnRDb3VudCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGludFwiKSk7XG4gICAgICAgIGhpbnRDb3VudCArPTM7IC8vIGZvciBub3cgd2lsbCBhZGQgbmV3IG9uY2UgZG9uZVxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaW50XCIsIEpTT04uc3RyaW5naWZ5KGhpbnRDb3VudCkpO1xuICAgICAgICB0aGlzLmFkQnV0dG9ucy5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L2NhcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFvRDtBQUNwRCx5REFBb0Q7QUFFOUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE2SEM7UUEzSFcsZUFBUyxHQUFZLEVBQUUsQ0FBQztRQUN4QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBQ3pCLHFCQUFlLEdBQWtCLElBQUksQ0FBQztRQUc5QyxXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBSTlCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7O1FBcUd4QixpQkFBaUI7SUFDckIsQ0FBQztJQTNGRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMEJBQVcsR0FBWCxVQUFZLFFBQXFCO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQkFBTyxHQUFQLFVBQVMsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZTtRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNoQyw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUUseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7UUFDekMs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QUM7UUFDckYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBR0QsNEJBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUUvQixDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUVoQyxDQUFDO0lBbkhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dUNBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDWTtJQUk5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dUNBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDRTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNNO0lBdkJQLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E2SHhCO0lBQUQsV0FBQztDQTdIRCxBQTZIQyxDQTdIaUMsRUFBRSxDQUFDLFNBQVMsR0E2SDdDO2tCQTdIb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZU1hbmFnZXJ9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlcnMvU291bmRNYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIF9jYXJkTmFtZSA6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBfaXNPcGVuIDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBfZGVsYWdhdGVTY3JpcHQgOiBjYy5Db21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpbWFnZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFuaW1hdGlvbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJhY2s6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGZyb250OiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBjYXJkRmxpcDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvdmVyTGF5OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIFxuXG5cbiAgXG5cblxuXG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBzZXREZWxlZ2F0ZShkZWxlZ2F0ZTpjYy5Db21wb25lbnQpe1xuICAgICAgICB0aGlzLl9kZWxhZ2F0ZVNjcmlwdCA9IGRlbGVnYXRlO1xuICAgIH1cblxuICAgIHNldFVwVUkgKHNwcml0ZUZyYW1lS2V5LCBsZXZlbCwgbW9kZSwgY2FyZFNwcml0ZUZyYW1lKSB7XG4gICAgICAgIHRoaXMuX2NhcmROYW1lID0gc3ByaXRlRnJhbWVLZXk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FyZCBuYW1lXCIsIHNwcml0ZUZyYW1lS2V5LCBjYXJkU3ByaXRlRnJhbWUpO1xuICAgICAgICB0aGlzLmltYWdlLnNwcml0ZUZyYW1lPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFNwcml0ZUZyYW1lKG1vZGUsIGxldmVsLCBzcHJpdGVGcmFtZUtleSk7XG4gICAgICAgIHRoaXMuZnJvbnQuc3ByaXRlRnJhbWUgPSBjYXJkU3ByaXRlRnJhbWU7XG4gICAgICAgIHRoaXMuYmFjay5zcHJpdGVGcmFtZSA9IGNhcmRTcHJpdGVGcmFtZTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25Ob2RlLnNldENvbnRlbnRTaXplKGNhcmRTcHJpdGVGcmFtZS5fb3JpZ2luYWxTaXplKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKGNhcmRTcHJpdGVGcmFtZS5fb3JpZ2luYWxTaXplKTtcbiAgICB9XG5cblxuICAgIHN0YXJ0QW5pbWF0aW9uKCl7XG5cbiAgICB9XG5cbiAgICBnZXRDYXJkTmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyZE5hbWU7XG4gICAgfVxuXG4gICAgb25DYXJkQ2xpY2tlZCgpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNob3djYXJkc1wiKTtcbiAgICAgICAgaWYoIXRoaXMuX2lzT3Blbil7XG4gICAgICAgICAgICB0aGlzLl9kZWxhZ2F0ZVNjcmlwdC5zaG93Q2FyZCh0aGlzLm5vZGUpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gdGhpcy5yZXZlYWwoKTtcbiAgICB9XG5cblxuICAgc2V0RmFjZVVwKHNob3dGYWNlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFjay5ub2RlLmFjdGl2ZSA9ICFzaG93RmFjZTtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gc2hvd0ZhY2U7XG4gICAgfVxuXG4gICAgcmV2ZWFsKCApOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5faXNPcGVuKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5jYXJkRmxpcCxmYWxzZSk7XG4gICAgICAgIGxldCBjYWxsRnVuYzEgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZhY2VVcCh0cnVlKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGxldCBjYWxsRnVuYzIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBjYWxsRnVuYygpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgbGV0IGluaXRpYWxTY2FsZSA9IDE7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pdGlhbFNjYWxlXCIsIGluaXRpYWxTY2FsZSk7XG4gICAgICAgIGxldCByZXZlYWxBY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMSwgMCwgdGhpcy5ub2RlLnNjYWxlKSwgY2FsbEZ1bmMxLCBjYy5zY2FsZVRvKDAuMSwgaW5pdGlhbFNjYWxlLCBpbml0aWFsU2NhbGUpKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25Ob2RlLnJ1bkFjdGlvbihyZXZlYWxBY3Rpb24pO1xuICAgIH1cblxuXG4gICAgdW5yZXZlYWwgKCApIHtcbiAgICAgICAgbGV0IGNhbGxGdW5jMSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjZVVwKGZhbHNlKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGxldCB1bnJldmVhbEFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC4xLCAwLCAxKSwgY2FsbEZ1bmMxLCBjYy5zY2FsZVRvKDAuMSwgMSwgMSkpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbk5vZGUucnVuQWN0aW9uKHVucmV2ZWFsQWN0aW9uKTtcbiAgICB9XG5cbiAgICBwbGF5Q29ycmVjdEFuaW1hdGlvbigpe1xuICAgICAgICBsZXQgYm91bmNlID0gY2Muc2NhbGVUbygwLjEsIDAuOSwwLjkpLmVhc2luZyhjYy5lYXNlQm91bmNlSW5PdXQoKSk7XG4gICAgICAgIGxldCBjb3JyZWN0QW5pbWF0aW9uID0gY2Muc2VxdWVuY2UoYm91bmNlLCBjYy5kZWxheVRpbWUoMC4yKSwgY2Muc2NhbGVUbygwLjEsIDEsIDEpKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25Ob2RlLnJ1bkFjdGlvbihjb3JyZWN0QW5pbWF0aW9uKTtcbiAgICB9XG5cblxuICAgIGVuYWJsZU92ZXJsYXkoKXtcbiAgICAgICAgdGhpcy5vdmVyTGF5LmFjdGl2ZSA9IHRydWU7XG5cbiAgICB9XG5cbiAgICBkaXNhYmxlT3ZlcmxheSgpe1xuICAgICAgICB0aGlzLm92ZXJMYXkuYWN0aXZlID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Localisation/localiser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b77f6olltHtKmH955sWIoh', 'localiser');
// scripts/Localisation/localiser.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Localiser = /** @class */ (function (_super) {
    __extends(Localiser, _super);
    function Localiser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._replaceValue = "";
        _this.key = "";
        return _this;
    }
    Localiser.prototype.onLoad = function () {
        var _this = this;
        // console.log("on start", this.key);
        cc.game.on('onLanguageChanged', function () {
            // console.log("language has changed");
            _this.setStringForKey();
        });
        this.setStringForKey();
    };
    Localiser.prototype.replaceValue = function (value) {
        // console.log("value to replace", value,this.key);
        this._replaceValue = value;
    };
    Localiser.prototype.setStringForKey = function () {
        // console.log("ke11y", this.key,  GameManager.getInstance().getString(this.key),this._replaceValue);
        this.node.getComponent(cc.Label).string = GameManager_1.GameManager.getInstance().getString(this.key);
        if (this._replaceValue.length > 0) {
            var tempString = this.node.getComponent(cc.Label).string.replace("%s", this._replaceValue);
            this.node.getComponent(cc.Label).string = tempString;
        }
    };
    __decorate([
        property({ type: String, tooltip: "key of string that to be localise" })
    ], Localiser.prototype, "key", void 0);
    Localiser = __decorate([
        ccclass
    ], Localiser);
    return Localiser;
}(cc.Component));
exports.default = Localiser;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0xvY2FsaXNhdGlvbi9sb2NhbGlzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdURBQXNEO0FBRWhELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMkJDO1FBMUJXLG1CQUFhLEdBQVksRUFBRSxDQUFDO1FBRXBDLFNBQUcsR0FBRyxFQUFFLENBQUM7O0lBd0JiLENBQUM7SUF0QkcsMEJBQU0sR0FBTjtRQUFBLGlCQU9DO1FBTkcscUNBQXFDO1FBQ3JDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLHVDQUF1QztZQUN2QyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFFLENBQUE7UUFDSCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGdDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2QsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCxtQ0FBZSxHQUFmO1FBQ0kscUdBQXFHO1FBQ3JHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hGLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQzdCLElBQUksVUFBVSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsYUFBYSxDQUFFLENBQUM7WUFDNUYsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7U0FDeEQ7SUFDTCxDQUFDO0lBdkJEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUMsQ0FBQzswQ0FDL0Q7SUFIUSxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMkI3QjtJQUFELGdCQUFDO0NBM0JELEFBMkJDLENBM0JzQyxFQUFFLENBQUMsU0FBUyxHQTJCbEQ7a0JBM0JvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0FNRV9NT0RFIH0gZnJvbSBcIi4uL2hlbHBlci9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXJzL0dhbWVNYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxpc2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9yZXBsYWNlVmFsdWUgOiBzdHJpbmcgPSBcIlwiO1xuICAgIEBwcm9wZXJ0eSh7dHlwZSA6U3RyaW5nLCB0b29sdGlwIDogXCJrZXkgb2Ygc3RyaW5nIHRoYXQgdG8gYmUgbG9jYWxpc2VcIn0pXG4gICAga2V5ID0gXCJcIjtcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uIHN0YXJ0XCIsIHRoaXMua2V5KTtcbiAgICAgICAgY2MuZ2FtZS5vbignb25MYW5ndWFnZUNoYW5nZWQnLCAoKT0+e1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsYW5ndWFnZSBoYXMgY2hhbmdlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5nRm9yS2V5KCk7XG4gICAgICAgIH0gKVxuICAgICAgICB0aGlzLnNldFN0cmluZ0ZvcktleSgpO1xuICAgIH1cblxuICAgIHJlcGxhY2VWYWx1ZSh2YWx1ZSl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidmFsdWUgdG8gcmVwbGFjZVwiLCB2YWx1ZSx0aGlzLmtleSk7XG4gICAgICAgIHRoaXMuX3JlcGxhY2VWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldFN0cmluZ0ZvcktleSgpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImtlMTF5XCIsIHRoaXMua2V5LCAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdHJpbmcodGhpcy5rZXkpLHRoaXMuX3JlcGxhY2VWYWx1ZSk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RyaW5nKHRoaXMua2V5KTtcbiAgICAgICAgaWYodGhpcy5fcmVwbGFjZVZhbHVlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbGV0IHRlbXBTdHJpbmcgPSAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nLnJlcGxhY2UoXCIlc1wiLHRoaXMuX3JlcGxhY2VWYWx1ZSApO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGVtcFN0cmluZztcbiAgICAgICAgfSAgXG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameplay/gameFutureDetails.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f17601zSpVE0Z/yUYzz7jaT', 'gameFutureDetails');
// scripts/gameplay/gameFutureDetails.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.setDelegatScript = function (delegate) {
        this._delagateScript = delegate;
    };
    NewClass.prototype.onAccept = function () {
        this.node.active = false;
        this._delagateScript.onBack();
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L2dhbWVGdXR1cmVEZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQXlCQSxDQUFDO0lBckJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsUUFBUTtRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFFLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWxDLENBQUM7SUFwQmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5QjVCO0lBQUQsZUFBQztDQXpCRCxBQXlCQyxDQXpCcUMsRUFBRSxDQUFDLFNBQVMsR0F5QmpEO2tCQXpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgX2RlbGFnYXRlU2NyaXB0IDogbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgXG4gICAgc2V0RGVsZWdhdFNjcmlwdChkZWxlZ2F0ZSl7XG4gICAgICAgIHRoaXMuX2RlbGFnYXRlU2NyaXB0ID1kZWxlZ2F0ZTtcbiAgICB9XG5cbiAgICBvbkFjY2VwdCgpe1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2RlbGFnYXRlU2NyaXB0Lm9uQmFjaygpOyBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/managers/LanguageManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c51ecOCHChPU47xYzdNwnjx', 'LanguageManager');
// scripts/managers/LanguageManager.ts



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXJzL0xhbmd1YWdlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/managers/AdManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e467f0M6xdMGLGFJO5bBh4e', 'AdManager');
// scripts/managers/AdManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AdManager = /** @class */ (function (_super) {
    __extends(AdManager, _super);
    function AdManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdManager_1 = AdManager;
    AdManager.getInstance = function () {
        if (!AdManager_1._instance) {
            AdManager_1._instance = new AdManager_1();
        }
        return AdManager_1._instance;
    };
    AdManager.prototype.init = function () {
        sdkbox.PluginAdMob.init();
        sdkbox.PluginAdMob.setListener(this);
        var target = this;
        sdkbox.PluginAdMob.setListener({
            adViewDidReceiveAd: function (name) {
                console.log("add has been loaded", name);
                // if(name == 'banner'){
                //     target.showBanner();
                // }
            },
            adViewDidFailToReceiveAdWithError: function (name, msg) {
                // target.showInfo('adViewDidFailToReceiveAdWithError name=' + name + ' msg=' + msg);
            },
            adViewWillPresentScreen: function (name) {
                console.log("adViewWillPresentScreen game ", name);
            },
            adViewDidDismissScreen: function (name) {
                console.log("adViewDidDismissScreen game ", name);
                target.delegate.adHasbeenShown();
                // target.showInfo('adViewDidDismissScreen name=' + name);
            },
            adViewWillDismissScreen: function (name) {
                console.log("back game ", name);
                // target.showInfo('adViewWillDismissScreen=' + name);
            },
            adViewWillLeaveApplication: function (name) {
                console.log("adViewWillLeaveApplication game ", name);
            }
        });
    };
    AdManager.prototype.cacheAds = function (adName) {
        sdkbox.PluginAdMob.cache(adName);
    };
    AdManager.prototype.setTestDevice = function (device) {
        sdkbox.PluginAdMob.setTestDevices(device);
    };
    AdManager.prototype.showBanner = function () {
        console.log("show banner ads");
        if (sdkbox.PluginAdMob.isAvailable('banner')) {
            sdkbox.PluginAdMob.show('banner');
            console.log("show banner ads");
        }
        else {
            console.log("not avilable banner ads");
            sdkbox.PluginAdMob.cache('banner');
        }
    };
    AdManager.prototype.showInterstital = function (inforeToNode) {
        this.delegate = inforeToNode;
        if (sdkbox.PluginAdMob.isAvailable('gameover')) {
            sdkbox.PluginAdMob.show('gameover');
            console.log("show ads");
        }
        else {
            console.log("chacheing add");
            sdkbox.PluginAdMob.cache('gameover');
        }
    };
    var AdManager_1;
    AdManager._instance = null;
    AdManager = AdManager_1 = __decorate([
        ccclass
    ], AdManager);
    return AdManager;
}(cc.Component));
exports.default = AdManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXJzL0FkTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDs7SUErRUEsQ0FBQztrQkEvRW9CLFNBQVM7SUFLWixxQkFBVyxHQUF6QjtRQUNJLElBQUcsQ0FBQyxXQUFTLENBQUMsU0FBUyxFQUFDO1lBQ3BCLFdBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFTLEVBQUUsQ0FBQztTQUN6QztRQUNELE9BQU8sV0FBUyxDQUFDLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBR00sd0JBQUksR0FBWDtRQUNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQzdCLGtCQUFrQixFQUFFLFVBQVMsSUFBSTtnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDeEMsd0JBQXdCO2dCQUN4QiwyQkFBMkI7Z0JBQzNCLElBQUk7WUFDUixDQUFDO1lBQ0QsaUNBQWlDLEVBQUUsVUFBUyxJQUFJLEVBQUUsR0FBRztnQkFDakQscUZBQXFGO1lBQ3pGLENBQUM7WUFDRCx1QkFBdUIsRUFBRSxVQUFTLElBQUk7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDdEQsQ0FBQztZQUNELHNCQUFzQixFQUFFLFVBQVMsSUFBSTtnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDakQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDakMsMERBQTBEO1lBQzlELENBQUM7WUFDRCx1QkFBdUIsRUFBRSxVQUFTLElBQUk7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUMvQixzREFBc0Q7WUFDMUQsQ0FBQztZQUNELDBCQUEwQixFQUFFLFVBQVMsSUFBSTtnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUN6RCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBRUgsQ0FBQztJQUNNLDRCQUFRLEdBQWYsVUFBZ0IsTUFBTTtRQUNsQixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0saUNBQWEsR0FBcEIsVUFBcUIsTUFBYztRQUMvQixNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sOEJBQVUsR0FBakI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEMsSUFBRyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBQztZQUMzQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDL0I7YUFBSTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuQztJQUdKLENBQUM7SUFFTSxtQ0FBZSxHQUF0QixVQUF1QixZQUFZO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzdCLElBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUM7WUFDMUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QjthQUFJO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QztJQUVSLENBQUM7O0lBeEVjLG1CQUFTLEdBQWUsSUFBSyxDQUFDO0lBSjVCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0ErRTdCO0lBQUQsZ0JBQUM7Q0EvRUQsQUErRUMsQ0EvRXNDLEVBQUUsQ0FBQyxTQUFTLEdBK0VsRDtrQkEvRW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuXG5cblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGRlbGVnYXRlIDogbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZSA6IEFkTWFuYWdlciA9IG51bGwhO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcbiAgICAgICAgaWYoIUFkTWFuYWdlci5faW5zdGFuY2Upe1xuICAgICAgICAgICAgQWRNYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBBZE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQWRNYW5hZ2VyLl9pbnN0YW5jZTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBpbml0KCl7ICBcbiAgICAgIHNka2JveC5QbHVnaW5BZE1vYi5pbml0KCk7XG4gICAgICBzZGtib3guUGx1Z2luQWRNb2Iuc2V0TGlzdGVuZXIodGhpcyk7XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcztcbiAgICAgIHNka2JveC5QbHVnaW5BZE1vYi5zZXRMaXN0ZW5lcih7XG4gICAgICAgIGFkVmlld0RpZFJlY2VpdmVBZDogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgaGFzIGJlZW4gbG9hZGVkXCIsIG5hbWUpXG4gICAgICAgICAgICAvLyBpZihuYW1lID09ICdiYW5uZXInKXtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9LFxuICAgICAgICBhZFZpZXdEaWRGYWlsVG9SZWNlaXZlQWRXaXRoRXJyb3I6IGZ1bmN0aW9uKG5hbWUsIG1zZykge1xuICAgICAgICAgICAgLy8gdGFyZ2V0LnNob3dJbmZvKCdhZFZpZXdEaWRGYWlsVG9SZWNlaXZlQWRXaXRoRXJyb3IgbmFtZT0nICsgbmFtZSArICcgbXNnPScgKyBtc2cpO1xuICAgICAgICB9LFxuICAgICAgICBhZFZpZXdXaWxsUHJlc2VudFNjcmVlbjogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZFZpZXdXaWxsUHJlc2VudFNjcmVlbiBnYW1lIFwiLCBuYW1lKVxuICAgICAgICB9LFxuICAgICAgICBhZFZpZXdEaWREaXNtaXNzU2NyZWVuOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkVmlld0RpZERpc21pc3NTY3JlZW4gZ2FtZSBcIiwgbmFtZSlcbiAgICAgICAgICAgIHRhcmdldC5kZWxlZ2F0ZS5hZEhhc2JlZW5TaG93bigpO1xuICAgICAgICAgICAgLy8gdGFyZ2V0LnNob3dJbmZvKCdhZFZpZXdEaWREaXNtaXNzU2NyZWVuIG5hbWU9JyArIG5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBhZFZpZXdXaWxsRGlzbWlzc1NjcmVlbjogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWNrIGdhbWUgXCIsIG5hbWUpXG4gICAgICAgICAgICAvLyB0YXJnZXQuc2hvd0luZm8oJ2FkVmlld1dpbGxEaXNtaXNzU2NyZWVuPScgKyBuYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRWaWV3V2lsbExlYXZlQXBwbGljYXRpb246IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRWaWV3V2lsbExlYXZlQXBwbGljYXRpb24gZ2FtZSBcIiwgbmFtZSlcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgfVxuICAgIHB1YmxpYyBjYWNoZUFkcyhhZE5hbWUpe1xuICAgICAgICBzZGtib3guUGx1Z2luQWRNb2IuY2FjaGUoYWROYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VGVzdERldmljZShkZXZpY2UgOnN0cmluZyl7XG4gICAgICAgIHNka2JveC5QbHVnaW5BZE1vYi5zZXRUZXN0RGV2aWNlcyhkZXZpY2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93QmFubmVyKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBiYW5uZXIgYWRzXCIpO1xuICAgICAgIGlmKHNka2JveC5QbHVnaW5BZE1vYi5pc0F2YWlsYWJsZSgnYmFubmVyJykpe1xuICAgICAgICBzZGtib3guUGx1Z2luQWRNb2Iuc2hvdygnYmFubmVyJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBiYW5uZXIgYWRzXCIpO1xuICAgICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBhdmlsYWJsZSBiYW5uZXIgYWRzXCIpO1xuICAgICAgICBzZGtib3guUGx1Z2luQWRNb2IuY2FjaGUoJ2Jhbm5lcicpO1xuICAgICAgIH0gXG4gICAgICAgXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0ludGVyc3RpdGFsKGluZm9yZVRvTm9kZSl7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBpbmZvcmVUb05vZGU7XG4gICAgICAgIGlmKHNka2JveC5QbHVnaW5BZE1vYi5pc0F2YWlsYWJsZSgnZ2FtZW92ZXInKSl7XG4gICAgICAgICAgICBzZGtib3guUGx1Z2luQWRNb2Iuc2hvdygnZ2FtZW92ZXInKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBhZHNcIik7XG4gICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFjaGVpbmcgYWRkXCIpO1xuICAgICAgICAgICAgICAgc2RrYm94LlBsdWdpbkFkTW9iLmNhY2hlKCdnYW1lb3ZlcicpO1xuICAgICAgICAgICB9IFxuICAgICAgIFxuICAgIH1cblxuICAgXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
        _this.more = null;
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
    };
    Options.prototype.setUpUI = function (screen, gameMode) {
        console.log("options", screen, gameMode);
        var mode = GameManager_1.GameManager.getInstance().getString(gameMode);
        this.gameMode.string = mode;
        this.deactiveAllNodes();
        switch (screen) {
            case constants_1.GAME_SCREEN.HOME:
                this.more.node.active = false;
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
        this.more.node.active = false;
    };
    Options.prototype.updateTimer = function (time, totalTime) {
        var timeString = GameManager_1.GameManager.getInstance().getString("time");
        timeString = timeString.replace("%s", "");
        this.timer.string = "" + timeString + time + "/" + totalTime;
    };
    Options.prototype.onHint = function () {
        // add extra five time and update local storage 
        var hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
        if (hintCount > 0) {
            this._delegateScript.playBounsAnimation();
            cc.sys.localStorage.setItem("hint", hintCount - 1);
            this.hint.string = "" + (hintCount - 1);
        }
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
        property(cc.Button)
    ], Options.prototype, "more", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0hVRC9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLGlEQUErQztBQUMvQyx1REFBc0Q7QUFFdEQ7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUE0RkM7UUF2RkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBSTFCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFJdEIsVUFBSSxHQUFjLElBQUksQ0FBQzs7UUEyRXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBeEVHLHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQVcsR0FBWCxVQUFhLFFBQVE7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRTFCLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0ksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUcsU0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx5QkFBTyxHQUFQLFVBQVMsTUFBb0IsRUFBRSxRQUFnQjtRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxJQUFJLEdBQUcseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBR3hCLFFBQU8sTUFBTSxFQUFDO1lBQ1YsS0FBSyx1QkFBVyxDQUFDLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzlCLE1BQU07WUFDVixLQUFLLHVCQUFXLENBQUMsZUFBZTtnQkFDNUIsTUFBTTtZQUNYLEtBQUssdUJBQVcsQ0FBQyxTQUFTO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxNQUFNO1NBQ2Q7SUFDTCxDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUdELDZCQUFXLEdBQVgsVUFBWSxJQUFJLEVBQUUsU0FBUztRQUN2QixJQUFJLFVBQVUsR0FBRyx5QkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM1RCxVQUFVLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBRyxVQUFVLEdBQUcsSUFBSSxTQUFJLFNBQVcsQ0FBQztJQUM1RCxDQUFDO0lBR0Qsd0JBQU0sR0FBTjtRQUVJLGdEQUFnRDtRQUNoRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUcsU0FBUyxHQUFHLENBQUMsRUFBQztZQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsR0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFHLFNBQVMsR0FBQyxDQUFDLENBQUUsQ0FBQztTQUN2QztJQUVMLENBQUM7SUExRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNPO0lBSTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ0c7SUFJdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDRztJQWhCTixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBNEYzQjtJQUFELGNBQUM7Q0E1RkQsQUE0RkMsQ0E1Rm9DLEVBQUUsQ0FBQyxTQUFTLEdBNEZoRDtrQkE1Rm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmltcG9ydCB7R0FNRV9TQ1JFRU59IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCJcbmltcG9ydCB7IEdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXJzL0dhbWVNYW5hZ2VyXCI7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIF9kZWxlZ2F0ZVNjcmlwdCA6IG51bGw7XG4gIFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aW1lcjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGdhbWVNb2RlOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBoaW50OiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgbW9yZTogY2MuQnV0dG9uID0gbnVsbDtcblxuXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBzZXREZWxlZ2F0ZSAoZGVsZWdhdGUpIHtcbiAgICAgICAgdGhpcy5fZGVsZWdhdGVTY3JpcHQgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy51cGRhdGVIaW5kVGV4dCgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGVIaW5kVGV4dCgpe1xuICAgICAgICBsZXQgaGludENvdW50ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGludFwiKTtcbiAgICAgICAgdGhpcy5oaW50LnN0cmluZyA9IGAke2hpbnRDb3VudH1gO1xuICAgIH1cblxuICAgIHNldFVwVUkgKHNjcmVlbiA6IEdBTUVfU0NSRUVOLCBnYW1lTW9kZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib3B0aW9uc1wiLCBzY3JlZW4sIGdhbWVNb2RlKTtcbiAgICAgICAgbGV0IG1vZGUgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0cmluZyhnYW1lTW9kZSk7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGUuc3RyaW5nID0gbW9kZTtcbiAgICAgICAgdGhpcy5kZWFjdGl2ZUFsbE5vZGVzKCk7XG4gICAgICAgXG5cbiAgICAgICAgc3dpdGNoKHNjcmVlbil7XG4gICAgICAgICAgICBjYXNlIEdBTUVfU0NSRUVOLkhPTUU6XG4gICAgICAgICAgICAgICAgdGhpcy5tb3JlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdBTUVfU0NSRUVOLkxFVkVMX1NFTEVDVElPTjpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgY2FzZSBHQU1FX1NDUkVFTi5HQU1FX1BMQVk6XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lci5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTW9kZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVhY3RpdmVBbGxOb2RlcyAoKXtcbiAgICAgICAgdGhpcy50aW1lci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVNb2RlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW9yZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgdXBkYXRlVGltZXIodGltZSwgdG90YWxUaW1lKXtcbiAgICAgICAgbGV0IHRpbWVTdHJpbmcgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0cmluZyhcInRpbWVcIilcbiAgICAgICAgdGltZVN0cmluZyA9IHRpbWVTdHJpbmcucmVwbGFjZShcIiVzXCIsIFwiXCIpO1xuICAgICAgICB0aGlzLnRpbWVyLnN0cmluZyA9IGAke3RpbWVTdHJpbmd9JHt0aW1lfS8ke3RvdGFsVGltZX1gO1xuICAgIH1cblxuXG4gICAgb25IaW50KCl7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgZXh0cmEgZml2ZSB0aW1lIGFuZCB1cGRhdGUgbG9jYWwgc3RvcmFnZSBcbiAgICAgICAgbGV0IGhpbnRDb3VudCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGludFwiKSk7XG4gICAgICAgIGlmKGhpbnRDb3VudCA+IDApe1xuICAgICAgICAgICAgdGhpcy5fZGVsZWdhdGVTY3JpcHQucGxheUJvdW5zQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaW50XCIsIGhpbnRDb3VudC0xKTtcbiAgICAgICAgICAgIHRoaXMuaGludC5zdHJpbmcgPSBgJHtoaW50Q291bnQtMX1gO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIFxuXG4gIFxuXG5cbiAgIFxuICAgIFxuICBcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/managers/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93b17C0LKhBYoFHZElu/iWc', 'SoundManager');
// scripts/managers/SoundManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoundManager = /** @class */ (function () {
    function SoundManager() {
        this._musicClip = null;
    }
    SoundManager.getInstance = function () {
        if (!SoundManager.instance) {
            SoundManager.instance = new SoundManager();
        }
        return SoundManager.instance;
    };
    SoundManager.prototype.init = function (musicClip) {
        this._musicClip = musicClip;
    };
    SoundManager.prototype.playMusic = function (loop) {
        console.log("play music", this._musicClip);
        cc.audioEngine.playMusic(this._musicClip, loop);
        cc.audioEngine.setMusicVolume(0.6);
    };
    SoundManager.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    SoundManager.prototype.playEffect = function (clipName, loop) {
        console.log("play clip", cc.sys.localStorage.getItem("Sound"));
        if (JSON.parse(cc.sys.localStorage.getItem("Sound"))) {
            var audioNo = cc.audioEngine.play(clipName, loop, 1);
            return audioNo;
        }
    };
    SoundManager.prototype.stopAllSounds = function () {
        cc.audioEngine.stopAllEffects();
    };
    return SoundManager;
}());
exports.default = SoundManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXJzL1NvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7UUFHSSxlQUFVLEdBQWtCLElBQUksQ0FBQztJQXVDckMsQ0FBQztJQXRDVSx3QkFBVyxHQUFsQjtRQUNJLElBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUM5QztRQUNELE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLFNBQVM7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLElBQVk7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFeEMsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRS9CLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsUUFBUSxFQUFFLElBQUk7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDO1lBQ2hELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbkQsT0FBTyxPQUFPLENBQUM7U0FFbEI7SUFFTCxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFcEMsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWFuYWdlcntcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZSA6ICAgU291bmRNYW5hZ2VyOyBcbiAgIFxuICAgIF9tdXNpY0NsaXAgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIDogU291bmRNYW5hZ2VyIHtcbiAgICAgICAgaWYoIVNvdW5kTWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlID0gbmV3IFNvdW5kTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTb3VuZE1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5pdChtdXNpY0NsaXApe1xuICAgICAgICB0aGlzLl9tdXNpY0NsaXAgPSBtdXNpY0NsaXA7XG4gICAgfVxuXG4gICAgcGxheU11c2ljKGxvb3A6Ym9vbGVhbil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheSBtdXNpY1wiLCB0aGlzLl9tdXNpY0NsaXApO1xuICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuX211c2ljQ2xpcCwgbG9vcCk7XG4gICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwLjYpO1xuICAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHN0b3BNdXNpYygpe1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICBcbiAgICB9XG5cbiAgICBwbGF5RWZmZWN0KGNsaXBOYW1lLCBsb29wKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGF5IGNsaXBcIixjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJTb3VuZFwiKSk7XG4gICAgICAgIGlmKEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU291bmRcIikpKXtcbiAgICAgICAgICAgIHZhciBhdWRpb05vID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwTmFtZSwgbG9vcCwxKVxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvTm87XG4gICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG5cbiAgICBzdG9wQWxsU291bmRzKCl7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICAgXG4gICAgfSAgXG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/managers/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5afc22nll1PkYawyLYfZ9ZR', 'GameManager');
// scripts/managers/GameManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
var constants_1 = require("../helper/constants");
var GameManager = /** @class */ (function () {
    function GameManager() {
        this._gameConfig = null;
        this._levelsData = null;
        this._levelImages = null;
        this._currentSelectLanguage = "EN";
        this._languageData = null;
        this._selectedMode = constants_1.GAME_MODE.PRACTICE;
        this._currentLevel = 0;
        this.placementId = null;
        this.screen = [];
    }
    GameManager.getInstance = function () {
        if (!GameManager._instance) {
            GameManager._instance = new GameManager();
        }
        return GameManager._instance;
    };
    GameManager.prototype.setAdIds = function (idObj) {
        this.placementId = idObj;
    };
    GameManager.prototype.loadGameConfig = function () {
        var target = this;
        return new Promise(function (resolve, reject) {
            if (target._gameConfig) {
                resolve(target._gameConfig);
            }
            else {
                cc.resources.load("GameMode/gameConfig", function (error, level) {
                    if (error) {
                        console.log("error while loading json");
                        reject(error);
                    }
                    else {
                        target._gameConfig = level["json"];
                        // console.log("data loadded", target._gameConfig);
                        resolve(target._gameConfig);
                    }
                });
            }
        });
    };
    GameManager.prototype.loadLevels = function () {
        var target = this;
        return new Promise(function (resolve, reject) {
            if (target._levelsData) {
                resolve(target._levelsData);
            }
            else {
                cc.resources.load("Levels/levels", function (error, level) {
                    if (error) {
                        console.log("error while loading json");
                        reject(error);
                    }
                    else {
                        target._levelsData = level["json"];
                        // console.log("data loadded", target._levelsData);
                        resolve(target._levelsData);
                    }
                });
            }
        });
    };
    GameManager.prototype.loadLanaguge = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._languageData) {
                resolve(_this._languageData);
            }
            else {
                cc.loader.loadResDir("Languages", cc.JsonAsset, function (err, data) {
                    if (err) {
                        reject(err);
                        cc.error("langauge data error :" + err);
                    }
                    else {
                        _this._languageData = data;
                        // console.log("langauge data", this._languageData);
                    }
                    resolve(data);
                });
            }
        });
    };
    // data is in form  ,this._levelImages = {level [images]}
    GameManager.prototype.loadLevelImages = function (levelNo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._levelImages && _this._levelImages.mode && _this._levelImages.mode.level[levelNo]) {
                resolve(_this._levelImages.level[levelNo]);
            }
            else {
                cc.loader.loadResDir("Levels/Images/LEVEL" + (levelNo + 1), cc.SpriteFrame, function (err, data) {
                    if (err) {
                        reject(err);
                        cc.error("loadLevelImages :" + err);
                    }
                    else {
                        if (!_this._levelImages) {
                            _this._levelImages = {};
                            _this._levelImages.level = [];
                        }
                        _this._levelImages.level[levelNo] = data;
                        // console.log("level images", this._levelImages, data);
                    }
                    resolve(_this._levelImages.level[levelNo]);
                });
            }
        });
    };
    GameManager.prototype.getSpriteFrame = function (mode, levelNo, name) {
        if (this._levelImages) {
            var images = this._levelImages.level[levelNo];
            // console.log("images",images );
            var spriteFrame = images.find(function (item) { return item.name == name; });
            // console.log("spriteFrames",spriteFrame, name );
            return spriteFrame;
        }
    };
    GameManager.prototype.getGameConfiguration = function () {
        if (this._gameConfig) {
            return this._gameConfig;
        }
    };
    GameManager.prototype.getModesInfo = function () {
        if (this._gameConfig) {
            return this._gameConfig["gameMode"];
        }
    };
    GameManager.prototype.getModeInfo = function (modeName) {
        if (this._gameConfig) {
            return this._gameConfig["gameMode"].find(function (mode) { return mode.key == modeName; });
        }
    };
    GameManager.prototype.getLevelInfo = function () {
        if (this._levelsData) {
            return this._levelsData["levels"];
        }
    };
    GameManager.prototype.getLevelData = function (levelNo) {
        if (this._levelsData) {
            return this._levelsData["levels"][levelNo];
        }
    };
    GameManager.prototype.isImagesLoaded = function () {
        return this._levelsData ? true : false;
    };
    GameManager.prototype.getString = function (key) {
        var _this = this;
        if (this._languageData) {
            var language = this._languageData.find(function (item) { return item.name == _this._currentSelectLanguage; });
            // console.log("key", key, language);
            return language.json[key];
        }
        else {
            return "";
        }
    };
    GameManager.prototype.changeCurrentLanguage = function () {
        this._currentSelectLanguage = cc.sys.localStorage.getItem("Language");
        console.log("change current Language", this._currentSelectLanguage);
    };
    GameManager.prototype.setGameMode = function (mode) {
        this._selectedMode = mode;
    };
    GameManager.prototype.getSelectedMode = function () {
        return this._selectedMode;
    };
    GameManager.prototype.setCurrentLevel = function (level) {
        this._currentLevel = level;
    };
    GameManager.prototype.getCurrentLevel = function () {
        return this._currentLevel;
    };
    GameManager.prototype.pushScene = function (scene) {
        console.log("scnee", scene);
        this.screen.push(scene);
    };
    GameManager.prototype.popScene = function () {
        return this.screen.pop();
    };
    GameManager.prototype.removeAllScene = function () {
        this.screen.length = 0;
    };
    GameManager._instance = null;
    return GameManager;
}());
exports.GameManager = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXJzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUErQztBQUU5QztJQUFBO1FBRVcsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFcEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQTRNdkIsQ0FBQztJQTFNVSx1QkFBVyxHQUFsQjtRQUNJLElBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFDO1lBQ3ZCLFdBQVcsQ0FBRSxTQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUM3QztRQUNELE9BQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLEtBQUs7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDOUIsSUFBRyxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUNuQixPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQy9CO2lCQUFLO2dCQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFVBQVMsS0FBSyxFQUFFLEtBQUs7b0JBQzFELElBQUcsS0FBSyxFQUFDO3dCQUNMLE9BQU8sQ0FBQyxHQUFH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Q0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUV4RSxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLENBQUMsYUFBYSxHQUFJLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNJLE9BQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQWUsR0FBZixVQUFnQixLQUFLO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFLQSwrQkFBUyxHQUFULFVBQVUsS0FBSztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0csT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUE5TWMscUJBQVMsR0FBRyxJQUFJLENBQUM7SUFzTnJDLGtCQUFDO0NBdk5BLEFBdU5BLElBQUE7QUF2TmEsa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHQU1FX01PREV9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCI7XG5cbiBleHBvcnQgY2xhc3MgR2FtZU1hbmFnZXJ7XG4gICAgcHJpdmF0ZSBzdGF0aWMgIF9pbnN0YW5jZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZ2FtZUNvbmZpZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbGV2ZWxzRGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbGV2ZWxJbWFnZXMgPSBudWxsO1xuICAgIHByaXZhdGUgX2N1cnJlbnRTZWxlY3RMYW5ndWFnZSA9IFwiRU5cIjsgXG4gICAgcHJpdmF0ZSBfbGFuZ3VhZ2VEYXRhID0gbnVsbDtcbiAgICBwcml2YXRlIF9zZWxlY3RlZE1vZGUgPSBHQU1FX01PREUuUFJBQ1RJQ0U7XG4gICAgcHJpdmF0ZSBfY3VycmVudExldmVsID0gMDtcbiAgICBwcml2YXRlIHBsYWNlbWVudElkID0gbnVsbDtcblxuICAgIHB1YmxpYyBzY3JlZW4gPSBbXTtcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xuICAgICAgICBpZighR2FtZU1hbmFnZXIuX2luc3RhbmNlKXtcbiAgICAgICAgICAgR2FtZU1hbmFnZXIuIF9pbnN0YW5jZSA9IG5ldyBHYW1lTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBHYW1lTWFuYWdlci5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc2V0QWRJZHMoaWRPYmope1xuICAgICAgICB0aGlzLnBsYWNlbWVudElkID0gaWRPYmo7XG4gICAgfVxuXG4gICAgbG9hZEdhbWVDb25maWcoKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+IHtcbiAgICAgICAgICAgIGlmKHRhcmdldC5fZ2FtZUNvbmZpZykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0Ll9nYW1lQ29uZmlnKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcIkdhbWVNb2RlL2dhbWVDb25maWdcIiwgZnVuY3Rpb24oZXJyb3IsIGxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igd2hpbGUgbG9hZGluZyBqc29uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuX2dhbWVDb25maWcgICAgICAgID0gICBsZXZlbFtcImpzb25cIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRhdGEgbG9hZGRlZFwiLCB0YXJnZXQuX2dhbWVDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0YXJnZXQuX2dhbWVDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBsb2FkTGV2ZWxzICgpe1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XG4gICAgICAgICAgICBpZih0YXJnZXQuX2xldmVsc0RhdGEpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRhcmdldC5fbGV2ZWxzRGF0YSk7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJMZXZlbHMvbGV2ZWxzXCIsIGZ1bmN0aW9uKGVycm9yLCBsZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIGxvYWRpbmcganNvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Ll9sZXZlbHNEYXRhICAgICAgICA9ICAgbGV2ZWxbXCJqc29uXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkYXRhIGxvYWRkZWRcIiwgdGFyZ2V0Ll9sZXZlbHNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0Ll9sZXZlbHNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgbG9hZExhbmFndWdlKCl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGFuZ3VhZ2VEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9sYW5ndWFnZURhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihcIkxhbmd1YWdlc1wiICwgY2MuSnNvbkFzc2V0LCAoZXJyOiBFcnJvciwgZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJsYW5nYXVnZSBkYXRhIGVycm9yIDpcIiArIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFuZ3VhZ2VEYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGFuZ2F1Z2UgZGF0YVwiLCB0aGlzLl9sYW5ndWFnZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGRhdGEgaXMgaW4gZm9ybSAgLHRoaXMuX2xldmVsSW1hZ2VzID0ge2xldmVsIFtpbWFnZXNdfVxuICAgIGxvYWRMZXZlbEltYWdlcyggbGV2ZWxObyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGV2ZWxJbWFnZXMgJiYgdGhpcy5fbGV2ZWxJbWFnZXMubW9kZSAmJiB0aGlzLl9sZXZlbEltYWdlcy5tb2RlLmxldmVsW2xldmVsTm9dKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9sZXZlbEltYWdlcy5sZXZlbFtsZXZlbE5vXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKGBMZXZlbHMvSW1hZ2VzL0xFVkVMJHtsZXZlbE5vICsgMX1gICwgY2MuU3ByaXRlRnJhbWUsIChlcnI6IEVycm9yLCBkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihcImxvYWRMZXZlbEltYWdlcyA6XCIgKyBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLl9sZXZlbEltYWdlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGV2ZWxJbWFnZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sZXZlbEltYWdlcy5sZXZlbCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sZXZlbEltYWdlcy5sZXZlbFtsZXZlbE5vXSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGV2ZWwgaW1hZ2VzXCIsIHRoaXMuX2xldmVsSW1hZ2VzLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX2xldmVsSW1hZ2VzLmxldmVsW2xldmVsTm9dKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0U3ByaXRlRnJhbWUobW9kZSwgbGV2ZWxObywgbmFtZSkge1xuICAgICAgICBpZih0aGlzLl9sZXZlbEltYWdlcyl7XG4gICAgICAgICAgICBsZXQgaW1hZ2VzID0gdGhpcy5fbGV2ZWxJbWFnZXMubGV2ZWxbbGV2ZWxOb107XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImltYWdlc1wiLGltYWdlcyApO1xuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBpbWFnZXMuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PSBuYW1lKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3ByaXRlRnJhbWVzXCIsc3ByaXRlRnJhbWUsIG5hbWUgKTtcbiAgICAgICAgICAgIHJldHVybiBzcHJpdGVGcmFtZTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRHYW1lQ29uZmlndXJhdGlvbigpe1xuICAgICAgICBpZih0aGlzLl9nYW1lQ29uZmlnKXsgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVDb25maWc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TW9kZXNJbmZvICgpIHtcbiAgICAgICAgaWYodGhpcy5fZ2FtZUNvbmZpZyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZUNvbmZpZ1tcImdhbWVNb2RlXCJdO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRNb2RlSW5mbyAobW9kZU5hbWUpIHtcbiAgICAgICAgaWYodGhpcy5fZ2FtZUNvbmZpZyl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZUNvbmZpZ1tcImdhbWVNb2RlXCJdLmZpbmQobW9kZSA9PiBtb2RlLmtleSA9PSBtb2RlTmFtZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldExldmVsSW5mbygpe1xuICAgICAgICBpZih0aGlzLl9sZXZlbHNEYXRhKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sZXZlbHNEYXRhW1wibGV2ZWxzXCJdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGV2ZWxEYXRhKGxldmVsTm86IG51bWJlcil7XG4gICAgICAgIGlmKHRoaXMuX2xldmVsc0RhdGEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xldmVsc0RhdGFbXCJsZXZlbHNcIl1bbGV2ZWxOb107XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGlzSW1hZ2VzTG9hZGVkICgpIDpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xldmVsc0RhdGE/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRTdHJpbmcoa2V5OnN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmKHRoaXMuX2xhbmd1YWdlRGF0YSl7XG4gICAgICAgICAgICBsZXQgbGFuZ3VhZ2UgPSB0aGlzLl9sYW5ndWFnZURhdGEuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PSB0aGlzLl9jdXJyZW50U2VsZWN0TGFuZ3VhZ2UpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJrZXlcIiwga2V5LCBsYW5ndWFnZSk7XG4gICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2UuanNvbltrZXldO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlQ3VycmVudExhbmd1YWdlKCl7XG4gICAgICAgXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTZWxlY3RMYW5ndWFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxhbmd1YWdlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBjdXJyZW50IExhbmd1YWdlXCIsIHRoaXMuX2N1cnJlbnRTZWxlY3RMYW5ndWFnZSk7XG5cbiAgICB9XG5cbiAgICBzZXRHYW1lTW9kZShtb2RlKXtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb2RlICA9IG1vZGU7XG4gICAgfVxuICAgIFxuICAgIGdldFNlbGVjdGVkTW9kZSgpe1xuICAgICAgICByZXR1cm4gIHRoaXMuX3NlbGVjdGVkTW9kZTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50TGV2ZWwobGV2ZWwpe1xuICAgICB0aGlzLl9jdXJyZW50TGV2ZWwgPSBsZXZlbDtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50TGV2ZWwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMZXZlbDtcbiAgICB9XG5cblxuICAgIFxuXG4gICAgIHB1c2hTY2VuZShzY2VuZSl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcInNjbmVlXCIsIHNjZW5lKTtcbiAgICAgICAgIHRoaXMuc2NyZWVuLnB1c2goc2NlbmUpO1xuICAgICB9XG5cbiAgICAgcG9wU2NlbmUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NyZWVuLnBvcCgpO1xuICAgICB9XG5cbiAgICAgcmVtb3ZlQWxsU2NlbmUoKXtcbiAgICAgICAgIHRoaXMuc2NyZWVuLmxlbmd0aCA9IDA7XG4gICAgIH1cbiAgICBcbiAgICAgICBcbiAgICBcblxuXG5cbiAgICBcbn0iXX0=
//------QC-SOURCE-SPLIT------
