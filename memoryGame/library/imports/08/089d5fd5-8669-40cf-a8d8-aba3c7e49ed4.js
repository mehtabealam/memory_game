"use strict";
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
        _this.pLabel = null;
        _this.layout = null;
        _this.header = null;
        _this.isTerm = false;
        _this.stringArray = [];
        _this.buttonPressed = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    PrivacyPolicy.prototype.onLoad = function () {
        console.log("on load is called");
    };
    PrivacyPolicy.prototype.start = function () {
        console.log("on start called");
    };
    PrivacyPolicy.prototype.onEnable = function () {
    };
    PrivacyPolicy.prototype.onBack = function () {
        this.node.active = false;
    };
    PrivacyPolicy.prototype.setTerm = function (loader) {
        this.isTerm = true;
        this.header.string = GameManager_1.GameManager.getInstance().getString("termAndConditions");
        this.stringArray = GameManager_1.GameManager.getInstance().getString("terms");
        this.addRemainingLabel();
    };
    PrivacyPolicy.prototype.setPrivacy = function (loader) {
        this.header.string = GameManager_1.GameManager.getInstance().getString("privacyPolicyTitle");
        this.isTerm = false;
        this.stringArray = GameManager_1.GameManager.getInstance().getString("privacyInformation");
        this.addRemainingLabel();
    };
    PrivacyPolicy.prototype.addRemainingLabel = function () {
        this.pLabel.string = this.stringArray.reduce(function (a, b) { return a + b; }, "");
        console.log("sreting", this.stringArray);
    };
    PrivacyPolicy.prototype.onBackAnimationEnd = function () {
        console.log("called");
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.node.active = false;
    };
    PrivacyPolicy.prototype.openLink = function () {
        var url = this.isTerm ? "https://docs.google.com/document/d/12RJd81VYPFEyNzqEyg1g5EmGlJGAxenEiC3ls-mltVQ/edit" :
            "https://docs.google.com/document/d/1cE961cfk3GJ70BfWmswVd5Spl_70XduWoZTMP9jvizk/edit#heading=h.4ox8fqtrw08x";
        cc.sys.openURL(url);
    };
    __decorate([
        property(cc.Label)
    ], PrivacyPolicy.prototype, "pLabel", void 0);
    __decorate([
        property(cc.Label)
    ], PrivacyPolicy.prototype, "layout", void 0);
    __decorate([
        property(cc.Label)
    ], PrivacyPolicy.prototype, "header", void 0);
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