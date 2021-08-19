"use strict";
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