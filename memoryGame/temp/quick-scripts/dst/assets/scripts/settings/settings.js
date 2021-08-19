
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/settings/settings.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NldHRpbmdzL3NldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHlEQUFvRDtBQUU5QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXlEQztRQXRERyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUs5QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFHbkMsbUJBQWEsR0FBRyxJQUFJLENBQUM7O1FBNkNyQixpQkFBaUI7SUFDckIsQ0FBQztJQTVDRyx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUdELHVCQUFJLEdBQUosVUFBSyxRQUFRO1FBQ1QsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUdELHdDQUFxQixHQUFyQjtRQUNJLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFHRCx3Q0FBcUIsR0FBckI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUdELG9DQUFpQixHQUFqQjtRQUVJLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUUzQyxDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUNJLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBNUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFLOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzttREFDWTtJQVJsQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUQ1QjtJQUFELGVBQUM7Q0F6REQsQUF5REMsQ0F6RHFDLEVBQUUsQ0FBQyxTQUFTLEdBeURqRDtrQkF6RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlcnMvU291bmRNYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGFuZ3VhZ2VQb3BVcDogY2MuTm9kZSA9IG51bGw7XG5cblxuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBidXR0b25QcmVzc2VkOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG5cbiAgICBkZWxlZ2F0U2NyaXB0ID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIFxuICAgIGluaXQoZGVsZWdhdGUpe1xuICAgICAgICB0aGlzLmRlbGVnYXRTY3JpcHQgPSBkZWxlZ2F0ZTtcbiAgICB9XG5cblxuICAgIG9wZW5Mb2NhbGlzYXRpb25Qb3BVcCgpe1xuICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uUHJlc3NlZCwgZmFsc2UpO1xuICAgICAgICAgdGhpcy5sYW5ndWFnZVBvcFVwLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBvcGVuVGVybUFuZENvbmRpdGlvbnMoKXtcbiAgICAgICAgdGhpcy5kZWxlZ2F0U2NyaXB0Lm9wZW5UZXJtQW5kQ29uZGl0aW9ucygpO1xuICAgIH1cblxuXG4gICAgb3BlblByaXZhY3lQb2xpY3koKXtcblxuICAgICAgICB0aGlzLmRlbGVnYXRTY3JpcHQub3BlblByaXZhY3lQb2xpY3koKTtcblxuICAgIH1cblxuICAgIG9uU2hhcmUoKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvblByZXNzZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0U2NyaXB0Lm9uU2hhcmUoKTtcbiAgICB9XG5cbiAgICBjbG9zZUFsbFBvcFVwcygpe1xuICAgICAgICB0aGlzLmxhbmd1YWdlUG9wVXAuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG5cblxuXG5cblxuXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19