"use strict";
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