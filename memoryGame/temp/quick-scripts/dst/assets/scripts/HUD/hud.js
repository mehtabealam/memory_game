
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0hVRC9odWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQW9EO0FBSzlDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBc0ZDO1FBbkZHLGNBQVEsR0FBb0IsSUFBSSxDQUFDO1FBR2pDLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUduQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLHFCQUFlLEdBQWtCLElBQUksQ0FBQztRQUd0QyxpQkFBVyxHQUFrQixJQUFJLENBQUM7O0lBMkR0QyxDQUFDO0lBckRHLG1CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QseUJBQVcsR0FBWCxVQUFhLFFBQVE7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVELG9CQUFNLEdBQU47UUFDSSxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUdELDBCQUFZLEdBQVosVUFBYSxLQUFhO1FBQ3RCLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQztZQUNoRCxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0M7YUFBSTtZQUNELCtDQUErQztZQUM5QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1NBRTlDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFFNUIsQ0FBQztJQUVELDBCQUFZLEdBQVosVUFBYSxVQUF3QjtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsOEJBQWdCLEdBQWhCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkYsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNHLENBQUM7SUFFRCx1QkFBUyxHQUFUO1FBQ0ksc0JBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRWpDLENBQUM7SUFFRCw4QkFBZ0IsR0FBaEI7UUFDSSxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBOUVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7eUNBQ1E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDVTtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VDQUNLO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0NBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDZTtJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNXO0lBM0JqQixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBc0Z2QjtJQUFELFVBQUM7Q0F0RkQsQUFzRkMsQ0F0RmdDLEVBQUUsQ0FBQyxTQUFTLEdBc0Y1QztrQkF0Rm9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHQU1FX1NDUkVFTiB9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXJcIjtcbmltcG9ydCB7IEdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXJzL0dhbWVNYW5hZ2VyXCI7XG5cblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhVRCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgdm9sdW1lVXAgOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgdm9sdW1lRG93biA6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgdm9sdW1lOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHNlbGVjdE1vZGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYmFjazogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgc2V0dGluZzogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgbGV2ZWw6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGJhY2tCdXR0b25BdWRpbyA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGJ1dHRvbkF1ZGlvIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuXG4gICAgcHJpdmF0ZSBkZWxlZ2F0ZTtcblxuXG4gICAgc3RhcnQoKXtcbiAgICAgICAgdGhpcy51cGRhdGVWb2x1bWVJY29uKCk7XG4gICAgfVxuICAgIHNldERlbGVnYXRlIChkZWxlZ2F0ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlbGVnYXRlXCIsIGRlbGVnYXRlKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgIH1cblxuICAgIG9uQmFjaygpe1xuICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYmFja0J1dHRvbkF1ZGlvLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUub25CYWNrKCk7XG4gICAgfVxuXG5cbiAgICBjaGFuZ2VWb2x1bWUoZXZlbnQgOiBFdmVudCl7XG4gICAgICAgIGlmKEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU291bmRcIikpKXtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnN0b3BBbGxTb3VuZHMoKTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlNvdW5kXCIsIGZhbHNlKTsgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheU11c2ljKHRydWUpO1xuICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlNvdW5kXCIsIHRydWUpXG4gICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVZvbHVtZUljb24oKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2V0VmlzaWJsaXR5KGdhbWVTY3JlZW4gOiBHQU1FX1NDUkVFTil7XG4gICAgICAgIHRoaXMudm9sdW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5nLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZXZlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlVm9sdW1lSWNvbigpe1xuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy52b2x1bWUubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU291bmRcIikpID8gdGhpcy52b2x1bWVVcDogdGhpcy52b2x1bWVEb3duO1xuICAgIH1cblxuICAgIG9uU2V0dGluZygpe1xuICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uQXVkaW8sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5vcGVuU2V0dGluZ3MoKTtcblxuICAgIH1cblxuICAgIG9uTGV2ZWxTZWxlY3Rpb24oKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvbkF1ZGlvLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuc2hvd0xldmVsU2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgXG5cblxufVxuIl19