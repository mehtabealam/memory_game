"use strict";
cc._RF.push(module, '02bb0NjDmpAVZy2mmjEJ4iG', 'settings');
// scripts/settings/settings.ts

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
var SoundManager_1 = require("../managers/SoundManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.languagePopUp = null;
        _this.buttonPressed = null;
        _this.delegatScript = null;
        return _this;
        // update (dt) {}
    }
    Settings.prototype.start = function () {
    };
    Settings.prototype.init = function (delegate) {
        this.delegatScript = delegate;
    };
    Settings.prototype.openLocalisationPopUp = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.languagePopUp.active = true;
    };
    Settings.prototype.openTermAndConditions = function () {
        this.delegatScript.openTermAndConditions();
    };
    Settings.prototype.openPrivacyPolicy = function () {
        this.delegatScript.openPrivacyPolicy();
    };
    Settings.prototype.onShare = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.delegatScript.onShare();
    };
    Settings.prototype.closeAllPopUps = function () {
        this.languagePopUp.active = false;
    };
    __decorate([
        property(cc.Node)
    ], Settings.prototype, "languagePopUp", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Settings.prototype, "buttonPressed", void 0);
    Settings = __decorate([
        ccclass
    ], Settings);
    return Settings;
}(cc.Component));
exports.default = Settings;

cc._RF.pop();