
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1ByaXZhY3lQb2xpY3kvcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHVEQUFzRDtBQUN0RCx5REFBb0Q7QUFFOUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUErRUM7UUE1RUcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUl4QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBSXhCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFhLEtBQUssQ0FBQztRQUV6QixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUc3QixtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUE2RGhDLENBQUM7SUEzREcsd0JBQXdCO0lBRXhCLDhCQUFNLEdBQU47UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBS0QsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBR0EsK0JBQU8sR0FBUCxVQUFRLE1BQU07UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQzdFLElBQUksQ0FBQyxXQUFXLEdBQUUseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFHM0IsQ0FBQztJQUdELGtDQUFVLEdBQVYsVUFBVyxNQUFNO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUMvRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFFLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUlELHlDQUFpQixHQUFqQjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBQyxDQUFDLEVBQUgsQ0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBR0YsMENBQWtCLEdBQWxCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNHLElBQUksR0FBRyxHQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHNGQUFzRixDQUFBLENBQUM7WUFDL0csNkdBQTZHLENBQUE7UUFDN0csRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQTNFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNLO0lBSXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ0s7SUFJeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDSztJQU8xQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3dEQUNPO0lBbEJYLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0ErRWpDO0lBQUQsb0JBQUM7Q0EvRUQsQUErRUMsQ0EvRTBDLEVBQUUsQ0FBQyxTQUFTLEdBK0V0RDtrQkEvRW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vbWFuYWdlcnMvR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJzL1NvdW5kTWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXZhY3lQb2xpY3kgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGF5b3V0OiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBoZWFkZXI6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIGlzVGVybSA6Ym9vbGVhbiA9ICBmYWxzZTtcblxuICAgIHN0cmluZ0FycmF5OiBzdHJpbmdbXSA9IFtdO1xuICAgIFxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBidXR0b25QcmVzc2VkOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uIGxvYWQgaXMgY2FsbGVkXCIpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbiBzdGFydCBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKXtcbiAgICAgICBcbiAgICB9XG5cblxuXG5cbiAgICBvbkJhY2soKXtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgIHNldFRlcm0obG9hZGVyKXtcbiAgICAgICAgdGhpcy5pc1Rlcm0gPSB0cnVlO1xuICAgICAgICB0aGlzLmhlYWRlci5zdHJpbmcgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0cmluZyhcInRlcm1BbmRDb25kaXRpb25zXCIpXG4gICAgICAgIHRoaXMuc3RyaW5nQXJyYXk9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RyaW5nKFwidGVybXNcIik7XG4gICAgICAgIHRoaXMuYWRkUmVtYWluaW5nTGFiZWwoKVxuICAgICAgIFxuXG4gICAgIH1cblxuICAgICBcbiAgICAgc2V0UHJpdmFjeShsb2FkZXIpe1xuICAgICAgICAgdGhpcy5oZWFkZXIuc3RyaW5nID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdHJpbmcoXCJwcml2YWN5UG9saWN5VGl0bGVcIilcbiAgICAgICAgdGhpcy5pc1Rlcm0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdHJpbmdBcnJheT0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdHJpbmcoXCJwcml2YWN5SW5mb3JtYXRpb25cIik7XG4gICAgICAgIHRoaXMuYWRkUmVtYWluaW5nTGFiZWwoKVxuICAgICB9XG5cblxuXG4gICAgIGFkZFJlbWFpbmluZ0xhYmVsKCl7XG4gICAgICAgIHRoaXMucExhYmVsLnN0cmluZyA9IHRoaXMuc3RyaW5nQXJyYXkucmVkdWNlKChhLGIpID0+IGErYiwgXCJcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3JldGluZ1wiLCB0aGlzLnN0cmluZ0FycmF5KTtcbiAgICAgfVxuXG5cbiAgICBvbkJhY2tBbmltYXRpb25FbmQoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZWRcIik7XG4gICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5idXR0b25QcmVzc2VkLCBmYWxzZSk7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTsgICAgXG4gICAgfVxuXG4gICAgb3BlbkxpbmsgKCl7XG4gICAgICAgbGV0IHVybCA9ICB0aGlzLmlzVGVybSA/IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xMlJKZDgxVllQRkV5TnpxRXlnMWc1RW1HbEpHQXhlbkVpQzNscy1tbHRWUS9lZGl0XCI6XG4gICAgICAgIFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xY0U5NjFjZmszR0o3MEJmV21zd1ZkNVNwbF83MFhkdVdvWlRNUDlqdml6ay9lZGl0I2hlYWRpbmc9aC40b3g4ZnF0cncwOHhcIlxuICAgICAgICBjYy5zeXMub3BlblVSTCh1cmwpO1xuICAgIH1cbn1cbiJdfQ==