
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
require('./assets/scripts/HUD/hud');
require('./assets/scripts/HUD/options');
require('./assets/scripts/Localisation/LanguageChanger');
require('./assets/scripts/Localisation/localiser');
require('./assets/scripts/PrivacyPolicy/policy');
require('./assets/scripts/dailyRewards/dailyRewards');
require('./assets/scripts/gameplay/cards');
require('./assets/scripts/gameplay/gameEnd');
require('./assets/scripts/gameplay/gameFutureDetails');
require('./assets/scripts/gameplay/gamePlay');
require('./assets/scripts/gameplay/gameStart');
require('./assets/scripts/gameplay/tutorials');
require('./assets/scripts/helper/constants');
require('./assets/scripts/home/home');
require('./assets/scripts/laoding/Loading');
require('./assets/scripts/laoding/tempCodeRunnerFile');
require('./assets/scripts/level/levelUIManager');
require('./assets/scripts/managers/AdManager');
require('./assets/scripts/managers/FacebookAudiance');
require('./assets/scripts/managers/GameManager');
require('./assets/scripts/managers/LanguageManager');
require('./assets/scripts/managers/NetworkConfig');
require('./assets/scripts/managers/NetworkManager');
require('./assets/scripts/managers/SoundManager');
require('./assets/scripts/settings/settings');

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
    Card.prototype.isOpen = function () {
        // console.log("isopen", this._isOpen);
        return this._isOpen;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L2NhcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFvRDtBQUNwRCx5REFBb0Q7QUFFOUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFrSUM7UUFoSVcsZUFBUyxHQUFZLEVBQUUsQ0FBQztRQUN4QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBQ3pCLHFCQUFlLEdBQWtCLElBQUksQ0FBQztRQUc5QyxXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBSTlCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7O1FBMEd4QixpQkFBaUI7SUFDckIsQ0FBQztJQWhHRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMEJBQVcsR0FBWCxVQUFZLFFBQXFCO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQkFBTyxHQUFQLFVBQVMsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZTtRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNoQyw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUUseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7UUFDekMs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QUM7UUFDckYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBR0QsNEJBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUUvQixDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUVoQyxDQUFDO0lBRUQscUJBQU0sR0FBTjtRQUNJLHVDQUF1QztRQUN2QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQXhIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1k7SUFJOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MENBQ0U7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDTTtJQXZCUCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBa0l4QjtJQUFELFdBQUM7Q0FsSUQsQUFrSUMsQ0FsSWlDLEVBQUUsQ0FBQyxTQUFTLEdBa0k3QztrQkFsSW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dhbWVNYW5hZ2VyfSBmcm9tIFwiLi4vbWFuYWdlcnMvR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJzL1NvdW5kTWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBfY2FyZE5hbWUgOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgX2lzT3BlbiA6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX2RlbGFnYXRlU2NyaXB0IDogY2MuQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaW1hZ2U6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhbmltYXRpb25Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBiYWNrOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBmcm9udDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgY2FyZEZsaXA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3ZlckxheTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBcblxuXG4gIFxuXG5cblxuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgc2V0RGVsZWdhdGUoZGVsZWdhdGU6Y2MuQ29tcG9uZW50KXtcbiAgICAgICAgdGhpcy5fZGVsYWdhdGVTY3JpcHQgPSBkZWxlZ2F0ZTtcbiAgICB9XG5cbiAgICBzZXRVcFVJIChzcHJpdGVGcmFtZUtleSwgbGV2ZWwsIG1vZGUsIGNhcmRTcHJpdGVGcmFtZSkge1xuICAgICAgICB0aGlzLl9jYXJkTmFtZSA9IHNwcml0ZUZyYW1lS2V5O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhcmQgbmFtZVwiLCBzcHJpdGVGcmFtZUtleSwgY2FyZFNwcml0ZUZyYW1lKTtcbiAgICAgICAgdGhpcy5pbWFnZS5zcHJpdGVGcmFtZT0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTcHJpdGVGcmFtZShtb2RlLCBsZXZlbCwgc3ByaXRlRnJhbWVLZXkpO1xuICAgICAgICB0aGlzLmZyb250LnNwcml0ZUZyYW1lID0gY2FyZFNwcml0ZUZyYW1lO1xuICAgICAgICB0aGlzLmJhY2suc3ByaXRlRnJhbWUgPSBjYXJkU3ByaXRlRnJhbWU7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTm9kZS5zZXRDb250ZW50U2l6ZShjYXJkU3ByaXRlRnJhbWUuX29yaWdpbmFsU2l6ZSk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYXJkU3ByaXRlRnJhbWUuX29yaWdpbmFsU2l6ZSk7XG4gICAgfVxuXG5cbiAgICBzdGFydEFuaW1hdGlvbigpe1xuXG4gICAgfVxuXG4gICAgZ2V0Q2FyZE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcmROYW1lO1xuICAgIH1cblxuICAgIG9uQ2FyZENsaWNrZWQoKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaG93Y2FyZHNcIik7XG4gICAgICAgIGlmKCF0aGlzLl9pc09wZW4pe1xuICAgICAgICAgICAgdGhpcy5fZGVsYWdhdGVTY3JpcHQuc2hvd0NhcmQodGhpcy5ub2RlKTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIHRoaXMucmV2ZWFsKCk7XG4gICAgfVxuXG5cbiAgIHNldEZhY2VVcChzaG93RmFjZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmJhY2subm9kZS5hY3RpdmUgPSAhc2hvd0ZhY2U7XG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHNob3dGYWNlO1xuICAgIH1cblxuICAgIHJldmVhbCggKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuX2lzT3Blbil7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuY2FyZEZsaXAsZmFsc2UpO1xuICAgICAgICBsZXQgY2FsbEZ1bmMxID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRGYWNlVXAodHJ1ZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBsZXQgY2FsbEZ1bmMyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gY2FsbEZ1bmMoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGxldCBpbml0aWFsU2NhbGUgPSAxO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluaXRpYWxTY2FsZVwiLCBpbml0aWFsU2NhbGUpO1xuICAgICAgICBsZXQgcmV2ZWFsQWN0aW9uID0gY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjEsIDAsIHRoaXMubm9kZS5zY2FsZSksIGNhbGxGdW5jMSwgY2Muc2NhbGVUbygwLjEsIGluaXRpYWxTY2FsZSwgaW5pdGlhbFNjYWxlKSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTm9kZS5ydW5BY3Rpb24ocmV2ZWFsQWN0aW9uKTtcbiAgICB9XG5cblxuICAgIHVucmV2ZWFsICggKSB7XG4gICAgICAgIGxldCBjYWxsRnVuYzEgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZhY2VVcChmYWxzZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBsZXQgdW5yZXZlYWxBY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMSwgMCwgMSksIGNhbGxGdW5jMSwgY2Muc2NhbGVUbygwLjEsIDEsIDEpKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25Ob2RlLnJ1bkFjdGlvbih1bnJldmVhbEFjdGlvbik7XG4gICAgfVxuXG4gICAgcGxheUNvcnJlY3RBbmltYXRpb24oKXtcbiAgICAgICAgbGV0IGJvdW5jZSA9IGNjLnNjYWxlVG8oMC4xLCAwLjksMC45KS5lYXNpbmcoY2MuZWFzZUJvdW5jZUluT3V0KCkpO1xuICAgICAgICBsZXQgY29ycmVjdEFuaW1hdGlvbiA9IGNjLnNlcXVlbmNlKGJvdW5jZSwgY2MuZGVsYXlUaW1lKDAuMiksIGNjLnNjYWxlVG8oMC4xLCAxLCAxKSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTm9kZS5ydW5BY3Rpb24oY29ycmVjdEFuaW1hdGlvbik7XG4gICAgfVxuXG5cbiAgICBlbmFibGVPdmVybGF5KCl7XG4gICAgICAgIHRoaXMub3ZlckxheS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgfVxuXG4gICAgZGlzYWJsZU92ZXJsYXkoKXtcbiAgICAgICAgdGhpcy5vdmVyTGF5LmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgfVxuXG4gICAgaXNPcGVuKCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXNvcGVuXCIsIHRoaXMuX2lzT3Blbik7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/dailyRewards/dailyRewards.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b67fbaoY1pBFYc1exQjbqhk', 'dailyRewards');
// scripts/dailyRewards/dailyRewards.ts

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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var GameManager_1 = require("../managers/GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DailyRewards = /** @class */ (function (_super) {
    __extends(DailyRewards, _super);
    function DailyRewards() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.giftLabel = null;
        _this.clue = null;
        _this.wrappedNode = null;
        _this.claimNode = null;
        _this.delgateScript = null;
        _this.dailyRewards = [
            { hints: 3, clue: 2 },
            { hints: 5, clue: 1 },
            { hints: 4, clue: 2 },
            { hints: 3, clue: 1 },
            { hints: 4, clue: 1 },
            { hints: 1, clue: 4 },
            { hints: 4, clue: 2 },
            { hints: 1, clue: 3 },
            { hints: 3, clue: 1 },
            { hints: 2, clue: 3 },
        ];
        _this.reward = _this.dailyRewards[0];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    DailyRewards.prototype.start = function () {
        console.log("date", GameManager_1.GameManager.getInstance().getCurrentDate());
        var date = GameManager_1.GameManager.getInstance().getCurrentDate().split("-");
        if (date.length == 3) {
            var index = parseInt(date[2]) % 10;
            this.reward = this.dailyRewards[index];
            console.log("reward is", this.reward, index);
        }
    };
    DailyRewards.prototype.setDelegate = function (delegate) {
        this.delgateScript = delegate;
    };
    DailyRewards.prototype.onRewardPicked = function () {
        this.wrappedNode.active = false;
        this.claimNode.active = true;
        this.giftLabel.string = "+ " + this.reward.hints;
        this.clue.string = "+ " + this.reward.clue;
    };
    DailyRewards.prototype.onAccept = function () {
        var hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
        console.log("hint count before calucalytion", hintCount);
        hintCount += this.reward.hints; // for now will add new once done
        cc.sys.localStorage.setItem("hint", JSON.stringify(hintCount));
        console.log("hint count after calucalytion", hintCount);
        cc.sys.localStorage.setItem("rewardClaimDate", GameManager_1.GameManager.getInstance().getCurrentDate());
        var clueCount = JSON.parse(cc.sys.localStorage.getItem("clue"));
        clueCount += this.reward.clue;
        cc.sys.localStorage.setItem("clue", JSON.stringify(hintCount));
        this.delgateScript.onRewardCollected();
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], DailyRewards.prototype, "giftLabel", void 0);
    __decorate([
        property(cc.Label)
    ], DailyRewards.prototype, "clue", void 0);
    __decorate([
        property(cc.Node)
    ], DailyRewards.prototype, "wrappedNode", void 0);
    __decorate([
        property(cc.Node)
    ], DailyRewards.prototype, "claimNode", void 0);
    DailyRewards = __decorate([
        ccclass
    ], DailyRewards);
    return DailyRewards;
}(cc.Component));
exports.default = DailyRewards;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhaWx5UmV3YXJkcy9kYWlseVJld2FyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEYsdURBQW9EO0FBRTlDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBSTFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBMkVDO1FBeEVHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFJM0IsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBSXJCLGtCQUFZLEdBQUc7WUFDWCxFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUNwQixFQUFDLEtBQUssRUFB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UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDUTtJQUkzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUTtJQWJULFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EyRWhDO0lBQUQsbUJBQUM7Q0EzRUQsQUEyRUMsQ0EzRXlDLEVBQUUsQ0FBQyxTQUFTLEdBMkVyRDtrQkEzRW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbmltcG9ydCB7R2FtZU1hbmFnZXJ9ICBmcm9tICcuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlcidcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5UmV3YXJkcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGdpZnRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgY2x1ZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgd3JhcHBlZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2xhaW1Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBkZWxnYXRlU2NyaXB0ID0gbnVsbDtcblxuXG5cbiAgICBkYWlseVJld2FyZHMgPSBbXG4gICAgICAgIHtoaW50cyA6IDMsIGNsdWUgOjJ9LFxuICAgICAgICB7aGludHMgOiA1LCBjbHVlIDoxfSxcbiAgICAgICAge2hpbnRzIDogNCwgY2x1ZSA6Mn0sXG4gICAgICAgIHtoaW50cyA6IDMsIGNsdWUgOjF9LFxuICAgICAgICB7aGludHMgOiA0LCBjbHVlIDoxfSxcbiAgICAgICAge2hpbnRzIDogMSwgY2x1ZSA6NH0sXG4gICAgICAgIHtoaW50cyA6IDQsIGNsdWUgOjJ9LFxuICAgICAgICB7aGludHMgOiAxLCBjbHVlIDozfSxcbiAgICAgICAge2hpbnRzIDogMywgY2x1ZSA6MX0sXG4gICAgICAgIHtoaW50cyA6IDIsIGNsdWUgOjN9LFxuICAgICAgXG5cbiAgICBdO1xuXG4gICAgcmV3YXJkID0gdGhpcy5kYWlseVJld2FyZHNbMF07XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGVcIiwgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50RGF0ZSgpKTtcbiAgICAgICAgbGV0IGRhdGUgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnREYXRlKCkuc3BsaXQoXCItXCIpO1xuICAgICAgICBpZihkYXRlLmxlbmd0aCA9PSAzKXtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHBhcnNlSW50KGRhdGVbMl0pJTEwO1xuICAgICAgICAgICAgdGhpcy5yZXdhcmQgPSB0aGlzLmRhaWx5UmV3YXJkc1tpbmRleF1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV3YXJkIGlzXCIsIHRoaXMucmV3YXJkLCBpbmRleCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERlbGVnYXRlKGRlbGVnYXRlKXtcbiAgICAgICAgdGhpcy5kZWxnYXRlU2NyaXB0ID0gZGVsZWdhdGU7XG4gICAgfVxuXG4gICAgb25SZXdhcmRQaWNrZWQoKXtcbiAgICAgICAgdGhpcy53cmFwcGVkTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbGFpbU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5naWZ0TGFiZWwuc3RyaW5nID0gYCsgJHt0aGlzLnJld2FyZC5oaW50c31gOyAgIFxuICAgICAgICB0aGlzLmNsdWUuc3RyaW5nID0gYCsgJHt0aGlzLnJld2FyZC5jbHVlfWA7ICAgXG4gICAgfVxuXG4gICAgb25BY2NlcHQoKXtcbiAgICAgICAgbGV0ICBoaW50Q291bnQgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpbnRcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhpbnQgY291bnQgYmVmb3JlIGNhbHVjYWx5dGlvblwiLCBoaW50Q291bnQpO1xuICAgICAgICBoaW50Q291bnQgKz0gdGhpcy5yZXdhcmQuaGludHM7IC8vIGZvciBub3cgd2lsbCBhZGQgbmV3IG9uY2UgZG9uZVxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaW50XCIsIEpTT04uc3RyaW5naWZ5KGhpbnRDb3VudCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhpbnQgY291bnQgYWZ0ZXIgY2FsdWNhbHl0aW9uXCIsIGhpbnRDb3VudCk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJld2FyZENsYWltRGF0ZVwiLCBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnREYXRlKCkpO1xuICAgICAgICBsZXQgIGNsdWVDb3VudCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2x1ZVwiKSk7XG4gICAgICAgIGNsdWVDb3VudCArPSB0aGlzLnJld2FyZC5jbHVlO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjbHVlXCIsIEpTT04uc3RyaW5naWZ5KGhpbnRDb3VudCkpO1xuICAgICAgICB0aGlzLmRlbGdhdGVTY3JpcHQub25SZXdhcmRDb2xsZWN0ZWQoKVxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
        _this.isAfterTerms = false;
        _this.isforSetting = false;
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
        _this.privacyPolicy = null;
        _this.buttonPressed = null;
        _this.bottomBar = null;
        _this.futureDetailsPrefab = null;
        _this.settings = null;
        _this.terms = null;
        _this.dailyRewards = null;
        _this.loader = null;
        _this.lastTenSeconds = null;
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
        this.settings.zIndex = 9;
        this.settings.getComponent("settings").init(this);
        this.howToPlayPopUp.zIndex = 7;
        // this.moreInfo.zIndex =7;
        this.loader.zIndex = 12;
        this.privacyPolicy.zIndex = 50;
        this.lastTenSeconds.zIndex = 60;
        // this.privacyPolicy.getComponent("policy").setTerm();
        // this.privacyPolicy.getComponent("policy").setPrivacy();
        this.terms.active = !JSON.parse(cc.sys.localStorage.getItem("hasTermAccepted"));
        console.log("active", this.terms.active, cc.sys.localStorage.getItem("hasTermAccepted"));
        cc.game.emit("onLanguageChanged");
        this.setupUI();
        this.setLevelInfoInLS();
        this.startImageLoading();
        cc.debug.setDisplayStats(false);
        SoundManager_1.default.getInstance().init(this.musicClip);
        if (!cc.sys.localStorage.getItem("Sound")) {
            cc.sys.localStorage.setItem("Sound", false);
        }
        if (cc.sys.isMobile) {
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (ev) {
                if (ev.keyCode === cc.macro.KEY.back) {
                    _this.onBack();
                }
            });
        }
    };
    Home.prototype.setupUI = function () {
        this.setHud();
        this.modeSelectionNode.zIndex = 5;
        this.levelSelectionNode.zIndex = 6;
        this.futureDetails = cc.instantiate(this.futureDetailsPrefab);
        this.futureDetails.zIndex = 6;
        this.futureDetails.active = false;
        this.futureDetails.getComponent("gameFutureDetails").setDelegatScript(this);
        this.dailyRewards.getComponent("dailyRewards").setDelegate(this);
        this.node.addChild(this.futureDetails);
        // this.addLevelsInLevelSelection();
        // MARK: SHOWING BANNER ADS
        if (cc.sys.isMobile) {
            // sdkbox.PluginShare.init();
            AdManager_1.default.getInstance().init();
            AdManager_1.default.getInstance().setTestDevice('12FA347A3FF2FE36F7A2E2AB230AC410');
            AdManager_1.default.getInstance().cacheAds('gameover');
            // AdManager.getInstance().cacheAds('banner');
        }
        if (!this.terms.active) {
            // check the last time daily reward wag given 
            var rewardGivenAt = cc.sys.localStorage.getItem("rewardClaimDate");
            var today = GameManager_1.GameManager.getInstance().getCurrentDate();
            console.log("today", today, rewardGivenAt);
            if (rewardGivenAt != today) {
                console.log("show daily reward pop up");
                this.dailyRewards.active = true;
            }
            else {
                this.startGame();
            }
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
    Home.prototype.addLevelsInLevelSelection = function () {
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        this.scrollViewLayout.node.removeAllChildren();
        var totalFrame = Math.ceil(levels.length / 10);
        for (var i = 0; i < totalFrame; i++) {
            var levelHolder = cc.instantiate(this.levelHolderPrefab);
            levelHolder.getComponent("levelUIManager").setDelegateComponent(this);
            levelHolder.getComponent("levelUIManager").populateLevels(i * 10);
            this.scrollViewLayout.node.addChild(levelHolder);
        }
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
        this.hudLayer.zIndex = 1;
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
                this.isforSetting = isActive;
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
        console.log("last played level", lastPlayedLevel);
        this.onLevelSelect(lastPlayedLevel);
    };
    Home.prototype.onLevelSelect = function (level) {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        GameManager_1.GameManager.getInstance().setCurrentLevel(parseInt(level));
        cc.sys.localStorage.setItem("lastPlayedLevel", parseInt(level));
        this.changeSceneVisiblity(this.gameScreen, false);
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.GAME_PLAY);
        console.log("we have pushed game scene", GameManager_1.GameManager.getInstance().screen);
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
        var levelObj = { time: 500, isUnlock: false };
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
            // console.log("level Daata", levelArray);
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
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shareApp", "(Ljava/lang/String;)V", "Hey I have been playing this amazing game, let's connect there. " + constants_1.GAME_LINK.URL);
    };
    Home.prototype.onMoreGames = function () {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        cc.sys.openURL(constants_1.GAME_LINK.URL);
    };
    Home.prototype.showPrivacyPolicy = function () {
        // this.playLoader();
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        // this.moreInfo.active = false;
        this.privacyPolicy.active = true;
        console.log("show privact plicty");
    };
    Home.prototype.enabledMoreGamesButton = function (isActive) {
        // this.moreInfo.getChildByName("Background").getChildByName("buttonLayout").getChildByName("moreGames").active = isActive;
        this.bottomBar.getChildByName("moreGames").active = isActive;
    };
    Home.prototype.showFutureDetailsScreen = function () {
        this.futureDetails.active = true;
    };
    Home.prototype.openSettings = function () {
        if (this.settings.active) {
            return;
        }
        this.isforSetting = true;
        this.gameScreen == constants_1.GAME_SCREEN.LEVEL_SELECTION && GameManager_1.GameManager.getInstance().popScene();
        this.changeSceneVisiblity(this.gameScreen, false);
        this.gameScreen = constants_1.GAME_SCREEN.SETTINGS;
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.SETTINGS);
        this.settings.active = true;
        this.hudLayer.zIndex = 8;
        console.log(GameManager_1.GameManager.getInstance().screen);
    };
    Home.prototype.onTermsAccept = function () {
        this.terms.active = false;
        this.isAfterTerms = true;
        cc.sys.localStorage.setItem("hasTermAccepted", true);
        this.dailyRewards.active = true;
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
                _this.startImageLoading();
            }).catch(function () {
                console.log("error while loading data");
            });
        }
    };
    Home.prototype.onRewardCollected = function () {
        if (!this.isAfterTerms) {
            this.startGame();
        }
    };
    Home.prototype.openTermAndConditions = function () {
        this.privacyPolicy.active = true;
        this.privacyPolicy.getComponent("policy").setTerm(this.loader);
    };
    Home.prototype.openPrivacyPolicy = function () {
        this.privacyPolicy.active = true;
        this.privacyPolicy.getComponent("policy").setPrivacy(this.loader);
    };
    Home.prototype.showLastSecondsPopUp = function () {
        console.log("inside this we are  not going anywhere", cc.sys.localStorage.getItem("lastTenSeconds"));
        this.lastTenSeconds.active = true;
        // if(!cc.sys.localStorage.getItem("lastTenSeconds")){
        //   cc.sys.localStorage.setItem("lastTenSeconds", true);
        // }
    };
    Home.prototype.hideLastSecondsPopUp = function () {
        console.log("inside this last seconds ere are here ");
        this.lastTenSeconds.active = false;
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
    __decorate([
        property(cc.Node)
    ], Home.prototype, "loader", void 0);
    __decorate([
        property(cc.Node)
    ], Home.prototype, "lastTenSeconds", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hvbWUvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsaURBQXdFO0FBQ3hFLHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFpaEJDO1FBaGhCQyxnQkFBVSxHQUFnQix1QkFBVyxDQUFDLElBQUksQ0FBQztRQUUzQyxjQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBR3JCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBSTdCLFNBQUcsR0FBYyxJQUFJLENBQUM7UUFHdEIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsdUJBQWlCLEdBQVksSUFBSSxDQUFDO1FBR2xDLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUduQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFHbkMsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBR3BDLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUdqQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUsvQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUl0QyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBSXpCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFJdEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsWUFBTSxHQUFZLElBQUks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RUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDTztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ2tCO0lBSXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ087SUFJekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUl0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYTtJQXRFWixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBaWhCeEI7SUFBRCxXQUFDO0NBamhCRCxBQWloQkMsQ0FqaEJpQyxFQUFFLENBQUMsU0FBUyxHQWloQjdDO2tCQWpoQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IHsgR0FNRV9NT0RFLCBHQU1FX1NDUkVFTiwgR0FNRV9MSU5LIH0gZnJvbSBcIi4uL2hlbHBlci9jb25zdGFudHNcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJzL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlcnMvQWRNYW5hZ2VyXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIGdhbWVTY3JlZW46IEdBTUVfU0NSRUVOID0gR0FNRV9TQ1JFRU4uSE9NRTtcbiAgaHVkTGF5ZXI6IGNjLk5vZGU7XG4gIGdhbWVNb2RlOiBzdHJpbmcgPSBcIlwiO1xuICBmdXR1cmVEZXRhaWxzIDogY2MuTm9kZTtcbiAgbGV0bG9hZENvdW50ID0gMDtcbiAgaXNBZnRlclRlcm1zID0gZmFsc2U7XG4gIGlzZm9yU2V0dGluZyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eShjYy5MYXlvdXQpXG4gIG1vZGVMYXlvdXQ6IGNjLkxheW91dCA9IG51bGw7XG5cblxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBodWQ6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGhvd1RvUGxheVBvcFVwOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbW9kZVNlbGVjdGlvbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBsZXZlbFNlbGVjdGlvbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBnYW1lcGxheU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5MYXlvdXQpXG4gIHNjcm9sbFZpZXdMYXlvdXQ6IGNjLkxheW91dCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgbGV2ZWxIb2xkZXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIG11c2ljQ2xpcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuXG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHByaXZhY3lQb2xpY3k6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGJ1dHRvblByZXNzZWQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBib3R0b21CYXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGZ1dHVyZURldGFpbHNQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgc2V0dGluZ3M6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHRlcm1zOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBkYWlseVJld2FyZHM6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBsb2FkZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBsYXN0VGVuU2Vjb25kczogY2MuTm9kZSA9IG51bGw7XG5cbiBcbiAgb25Mb2FkKCkge1xuXG5cbiAgICBcblxuICB9XG4gIHN0YXJ0KCkge1xuXG4gICAgY29uc29sZS5sb2coXCJzdGFydFwiLEdBTUVfU0NSRUVOLkhPTUUpO1xuICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFNjZW5lKEdBTUVfU0NSRUVOLkhPTUUpO1xuICAgIHRoaXMudGVybXMuekluZGV4ID0gMTA7XG4gICAgdGhpcy5kYWlseVJld2FyZHMuekluZGV4ID0gOTtcbiAgICB0aGlzLnNldHRpbmdzLnpJbmRleCA9IDk7XG4gICAgdGhpcy5zZXR0aW5ncy5nZXRDb21wb25lbnQoXCJzZXR0aW5nc1wiKS5pbml0KHRoaXMpO1xuICAgIHRoaXMuaG93VG9QbGF5UG9wVXAuekluZGV4ID03O1xuICAgIC8vIHRoaXMubW9yZUluZm8uekluZGV4ID03O1xuICAgIHRoaXMubG9hZGVyLnpJbmRleCA9IDEyO1xuICAgIHRoaXMucHJpdmFjeVBvbGljeS56SW5kZXggPSA1MDtcbiAgICB0aGlzLmxhc3RUZW5TZWNvbmRzLnpJbmRleCA9IDYwO1xuICAgIC8vIHRoaXMucHJpdmFjeVBvbGljeS5nZXRDb21wb25lbnQoXCJwb2xpY3lcIikuc2V0VGVybSgpO1xuICAgIC8vIHRoaXMucHJpdmFjeVBvbGljeS5nZXRDb21wb25lbnQoXCJwb2xpY3lcIikuc2V0UHJpdmFjeSgpO1xuXG4gICAgdGhpcy50ZXJtcy5hY3RpdmUgPSAhSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoYXNUZXJtQWNjZXB0ZWRcIikpO1xuICAgIGNvbnNvbGUubG9nKFwiYWN0aXZlXCIsIHRoaXMudGVybXMuYWN0aXZlLCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoYXNUZXJtQWNjZXB0ZWRcIikpO1xuICAgIFxuXG4gICAgY2MuZ2FtZS5lbWl0KFwib25MYW5ndWFnZUNoYW5nZWRcIik7XG4gICAgdGhpcy5zZXR1cFVJKCk7XG4gICAgdGhpcy5zZXRMZXZlbEluZm9JbkxTKCk7XG4gICAgdGhpcy5zdGFydEltYWdlTG9hZGluZygpO1xuXG4gICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcbiAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLmluaXQodGhpcy5tdXNpY0NsaXApO1xuICAgIGlmICghY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU291bmRcIikpIHtcbiAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlNvdW5kXCIsIGZhbHNlKTtcbiAgICB9IFxuXG5cbiAgICBpZihjYy5zeXMuaXNNb2JpbGUpe1xuICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgKGV2KSA9PiB7XG4gICAgICAgIGlmIChldi5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuYmFjaykge1xuICAgICAgICAgICB0aGlzLm9uQmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNldHVwVUkoKSB7XG4gICAgdGhpcy5zZXRIdWQoKTtcbiAgICB0aGlzLm1vZGVTZWxlY3Rpb25Ob2RlLnpJbmRleCA9IDU7XG4gICAgdGhpcy5sZXZlbFNlbGVjdGlvbk5vZGUuekluZGV4ID0gNjtcbiAgICB0aGlzLmZ1dHVyZURldGFpbHMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZ1dHVyZURldGFpbHNQcmVmYWIpO1xuICAgIHRoaXMuZnV0dXJlRGV0YWlscy56SW5kZXggPSA2O1xuICAgIHRoaXMuZnV0dXJlRGV0YWlscy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmZ1dHVyZURldGFpbHMuZ2V0Q29tcG9uZW50KFwiZ2FtZUZ1dHVyZURldGFpbHNcIikuc2V0RGVsZWdhdFNjcmlwdCh0aGlzKTtcbiAgICB0aGlzLmRhaWx5UmV3YXJkcy5nZXRDb21wb25lbnQoXCJkYWlseVJld2FyZHNcIikuc2V0RGVsZWdhdGUodGhpcyk7XG4gICAgdGhpcy5ub2RlLmFkZENoaWxkKCB0aGlzLmZ1dHVyZURldGFpbHMpXG4gICAgLy8gdGhpcy5hZGRMZXZlbHNJbkxldmVsU2VsZWN0aW9uKCk7XG4gIFxuXG4gICAgLy8gTUFSSzogU0hPV0lORyBCQU5ORVIgQURTXG4gICAgaWYoY2Muc3lzLmlzTW9iaWxlKXtcbiAgICAgIC8vIHNka2JveC5QbHVnaW5TaGFyZS5pbml0KCk7XG4gICAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pbml0KCk7XG4gICAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZXRUZXN0RGV2aWNlKCcxMkZBMzQ3QTNGRjJGRTM2RjdBMkUyQUIyMzBBQzQxMCcpO1xuICAgICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2FjaGVBZHMoJ2dhbWVvdmVyJyk7XG4gICAgICAvLyBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jYWNoZUFkcygnYmFubmVyJyk7XG4gICAgfVxuXG5cblxuICAgIGlmKCF0aGlzLnRlcm1zLmFjdGl2ZSl7XG4gICAgICAvLyBjaGVjayB0aGUgbGFzdCB0aW1lIGRhaWx5IHJld2FyZCB3YWcgZ2l2ZW4gXG4gICAgICBsZXQgcmV3YXJkR2l2ZW5BdCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJld2FyZENsYWltRGF0ZVwiKTtcbiAgICAgIGxldCB0b2RheSA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudERhdGUoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidG9kYXlcIiwgdG9kYXkscmV3YXJkR2l2ZW5BdCApO1xuICAgICAgaWYocmV3YXJkR2l2ZW5BdCAhPSB0b2RheSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBkYWlseSByZXdhcmQgcG9wIHVwXCIpXG4gICAgICAgIHRoaXMuZGFpbHlSZXdhcmRzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuXG4gIH1cblxuICBvbkFuaW1hdGlvbkVuZCAoKXtcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hdGlvbiBlbmRlZFwiKTtcbiAgfVxuIFxuXG4gIHNldEh1ZCgpIHtcbiAgICB0aGlzLmh1ZExheWVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5odWQpO1xuICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLmh1ZExheWVyKTtcbiAgICB0aGlzLmh1ZExheWVyLmdldENvbXBvbmVudChcImh1ZFwiKS5zZXREZWxlZ2F0ZSh0aGlzKTtcbiAgICB0aGlzLmh1ZExheWVyLnpJbmRleCA9IDE7XG4gICAgdGhpcy5odWRMYXllci5nZXRDb21wb25lbnQoXCJodWRcIikuc2V0VmlzaWJsaXR5KHRoaXMuZ2FtZVNjcmVlbik7XG4gIH1cblxuICBzaG93RGFpbHlSZXdhcmRzKCl7XG4gICAgdGhpcy5kYWlseVJld2FyZHMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHNob3dMZXZlbFNlbGVjdGlvbigpe1xuICAgIGlmKHRoaXMubGV2ZWxTZWxlY3Rpb25Ob2RlLmFjdGl2ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgXG4gICAgdGhpcy5sZXZlbFNlbGVjdGlvbk5vZGUuYWN0aXZlID0gdHJ1ZTsgIFxuICAgIHRoaXMuc2V0TGV2ZWxTZWxlY3Rpb25TY3JlZW4oKTtcbiAgICB0aGlzLmdhbWVTY3JlZW4gPT0gR0FNRV9TQ1JFRU4uU0VUVElOR1MgJiYgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wb3BTY2VuZSgpO1xuICAgIHRoaXMuZ2FtZVNjcmVlbiA9PSBHQU1FX1NDUkVFTi5HQU1FX1BMQVkgJiYgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wb3BTY2VuZSgpO1xuICAgIHRoaXMuY2hhbmdlU2NlbmVWaXNpYmxpdHkodGhpcy5nYW1lU2NyZWVuLCBmYWxzZSk7XG4gICAgdGhpcy5nYW1lU2NyZWVuID0gR0FNRV9TQ1JFRU4uTEVWRUxfU0VMRUNUSU9OO1xuICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFNjZW5lKEdBTUVfU0NSRUVOLkxFVkVMX1NFTEVDVElPTik7XG4gXG4gIH1cblxuXG4gIC8vYnV0dG9uIGNhbGxiYWNrczpcbiAgc2hvd0hvd1RvUGxheVBvcFVwKCkge1xuICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5idXR0b25QcmVzc2VkLCBmYWxzZSk7XG4gICAgdGhpcy5ob3dUb1BsYXlQb3BVcC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuaG93VG9QbGF5UG9wVXAuZ2V0Q2hpbGRCeU5hbWUoXCJQb3N0XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgfVxuXG4gIHJlbW92ZUhvd1RvUGxheVBvcFVwKCkge1xuICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5idXR0b25QcmVzc2VkLCBmYWxzZSk7XG4gICAgdGhpcy5ob3dUb1BsYXlQb3BVcC5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG5cbiAgYWRkTGV2ZWxzSW5MZXZlbFNlbGVjdGlvbigpe1xuICAgIGxldCBsZXZlbHMgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsSW5mbygpO1xuICAgIHRoaXMuc2Nyb2xsVmlld0xheW91dC5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgbGV0IHRvdGFsRnJhbWUgPSBNYXRoLmNlaWwobGV2ZWxzLmxlbmd0aCAvIDEwKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgIHRvdGFsRnJhbWU7IGkrKyl7XG4gICAgICBsZXQgbGV2ZWxIb2xkZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxldmVsSG9sZGVyUHJlZmFiKTtcbiAgICAgIGxldmVsSG9sZGVyLmdldENvbXBvbmVudChcImxldmVsVUlNYW5hZ2VyXCIpLnNldERlbGVnYXRlQ29tcG9uZW50KHRoaXMpO1xuICAgICAgbGV2ZWxIb2xkZXIuZ2V0Q29tcG9uZW50KFwibGV2ZWxVSU1hbmFnZXJcIikucG9wdWxhdGVMZXZlbHMoaSAqIDEwKTtcbiAgICAgIHRoaXMuc2Nyb2xsVmlld0xheW91dC5ub2RlLmFkZENoaWxkKGxldmVsSG9sZGVyKTtcbiAgICB9XG4gIH1cblxuICBzZXRMZXZlbFNlbGVjdGlvblNjcmVlbigpIHtcbiAgICBsZXQgbGV2ZWxzID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbEluZm8oKTtcbiAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIGxldCB0b3RhbEZyYW1lID0gTWF0aC5jZWlsKGxldmVscy5sZW5ndGggLyAxMCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8ICB0b3RhbEZyYW1lOyBpKyspe1xuICAgICAgbGV0IGxldmVsSG9sZGVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbEhvbGRlclByZWZhYik7XG4gICAgICBsZXZlbEhvbGRlci5nZXRDb21wb25lbnQoXCJsZXZlbFVJTWFuYWdlclwiKS5zZXREZWxlZ2F0ZUNvbXBvbmVudCh0aGlzKTtcbiAgICAgIGxldmVsSG9sZGVyLmdldENvbXBvbmVudChcImxldmVsVUlNYW5hZ2VyXCIpLnBvcHVsYXRlTGV2ZWxzKGkgKiAxMCk7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5hZGRDaGlsZChsZXZlbEhvbGRlcik7XG4gICAgfVxuICAgIGlmKHRvdGFsRnJhbWUgPT0gMSl7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5jaGlsZHJlblswXS53aWR0aCA9IDEwMDA7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IHRydWU7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQudXBkYXRlTGF5b3V0KCk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduSG9yaXpvbnRhbENlbnRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5zY3JvbGxWaWV3TGF5b3V0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgIH1cblxuICAgIGxldCBsZXZlbHNJbmZvID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMZXZlbEluZm9cIikpO1xuICAgIGxldCBsZXZlbHNJbmZvRm9yTW9kZSA9IEpTT04ucGFyc2UobGV2ZWxzSW5mby5sZXZlbCk7XG5cbiAgICBsZXQgbGFzdFVubG9ja2VkTGV2ZWwgPSAwO1xuICAgIGZvcihsZXQgaXRlbSBvZiBsZXZlbHNJbmZvRm9yTW9kZSl7XG4gICAgICBpZighaXRlbS5pc1VubG9jayl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbGFzdFVubG9ja2VkTGV2ZWwrKztcbiAgICB9XG5cblxuICAgXG4gICAgbGV0IGZyYW1lID0gTWF0aC5jZWlsKGxhc3RVbmxvY2tlZExldmVsLzEwKTtcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpO1xuICAgIGxldCBvZmZzZXRQZXJjZW50ID0gKGZyYW1lIC0gMSkgKiAoMSAvICh0aGlzLnNjcm9sbFZpZXdMYXlvdXQubm9kZS5jaGlsZHJlbkNvdW50IC0gMSkpOyAgIFxuICAgIHRoaXMubGV2ZWxTZWxlY3Rpb25Ob2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJtb3ZlSW5cIik7XG5cbiAgfVxuXG4gIG9uQmFjaygpIHtcbiAgICBsZXQgY3VycmVudFNjZW5lID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wb3BTY2VuZSgpO1xuICAgIGxldCBsYXN0U2NlbmUgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBvcFNjZW5lKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImN1cmVybnRTY2VuZVwiLCBjdXJyZW50U2NlbmUsIGxhc3RTY2VuZSk7XG4gICAgaWYoY3VycmVudFNjZW5lID09IEdBTUVfU0NSRUVOLkhPTUUpe1xuICAgICAgY2MuZ2FtZS5lbmQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZihjdXJyZW50U2NlbmUgPT0gR0FNRV9TQ1JFRU4uRlVUVVJFX0FOTk9DTUVOVFMpe1xuICAgICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZW1vdmVBbGxTY2VuZSgpO1xuICAgICAgdGhpcy5sZXZlbFNlbGVjdGlvbk5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5nYW1lcGxheU5vZGUuYWN0aXZlID0gZmFsc2U7ICBcbiAgICAgIHRoaXMubW9kZVNlbGVjdGlvbk5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2FtZVNjcmVlbiA9IEdBTUVfU0NSRUVOLkhPTUU7XG4gICAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hTY2VuZShHQU1FX1NDUkVFTi5IT01FKTtcbiAgICAgIHJldHVybjtcblxuICAgIH1cbiAgICB0aGlzLmh1ZExheWVyLnpJbmRleCA9IDE7XG4gICAgdGhpcy5nYW1lU2NyZWVuID0gbGFzdFNjZW5lO1xuICAgIHRoaXMuY2hhbmdlU2NlbmVWaXNpYmxpdHkoY3VycmVudFNjZW5lLCBmYWxzZSk7XG4gICAgdGhpcy5jaGFuZ2VTY2VuZVZpc2libGl0eShsYXN0U2NlbmUsIHRydWUpO1xuICAgIFxuICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFNjZW5lKGxhc3RTY2VuZSk7XG4gICAgY29uc29sZS5sb2coXCJzY2VuZSBhcnJhXCIsR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zY3JlZW4gKVxuICB9XG5cbiAgY2hhbmdlU2NlbmVWaXNpYmxpdHkoY3VycmVudFNjZW5lLCBpc0FjdGl2ZSl7XG4gICAgY29uc29sZS5sb2coXCJzY25lbmVzXCIsY3VycmVudFNjZW5lLCBpc0FjdGl2ZSlcbiAgICBzd2l0Y2goY3VycmVudFNjZW5lKXtcbiAgICAgIGNhc2UgR0FNRV9TQ1JFRU4uTEVWRUxfU0VMRUNUSU9OOlxuICAgICAgICB0aGlzLmxldmVsU2VsZWN0aW9uTm9kZS5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICAgICAgaXNBY3RpdmUgJiYgdGhpcy5zZXRMZXZlbFNlbGVjdGlvblNjcmVlbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgR0FNRV9TQ1JFRU4uU0VUVElOR1M6XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZ2V0Q29tcG9uZW50KCdzZXR0aW5ncycpLmNsb3NlQWxsUG9wVXBzKCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICAgIHRoaXMuaXNmb3JTZXR0aW5nID0gaXNBY3RpdmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBHQU1FX1NDUkVFTi5HQU1FX1BMQVk6XG4gICAgICAgICB0aGlzLmdhbWVwbGF5Tm9kZS5hY3RpdmUgPSBpc0FjdGl2ZTsgIFxuICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEdBTUVfU0NSRUVOLkhPTUU6XG4gICAgICAgIHRoaXMubW9kZVNlbGVjdGlvbk5vZGUuYWN0aXZlID0gaXNBY3RpdmU7ICAgXG4gICAgICAgICAgYnJlYWs7ICBcblxuICAgICAgXG4gICAgfVxuICB9XG5cblxuXG4gIHN0YXJ0R2FtZSgpe1xuICAgIC8vIGRpc2FibGUgdGhlIGxhc3Qgc2NuZSBwdXNoZWQgXG4gICAgbGV0IGxhc3RQbGF5ZWRMZXZlbCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3RQbGF5ZWRMZXZlbFwiKVxuICAgIGNvbnNvbGUubG9nKFwibGFzdCBwbGF5ZWQgbGV2ZWxcIiwgbGFzdFBsYXllZExldmVsKTtcbiAgICB0aGlzLm9uTGV2ZWxTZWxlY3QobGFzdFBsYXllZExldmVsKTtcbiAgfVxuXG4gIG9uTGV2ZWxTZWxlY3QoIGxldmVsOiBzdHJpbmcpIHtcbiAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uUHJlc3NlZCwgZmFsc2UpO1xuICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2V0Q3VycmVudExldmVsKHBhcnNlSW50KGxldmVsKSk7XG4gICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdFBsYXllZExldmVsXCIsIHBhcnNlSW50KGxldmVsKSk7XG4gICAgdGhpcy5jaGFuZ2VTY2VuZVZpc2libGl0eSh0aGlzLmdhbWVTY3JlZW4gLCBmYWxzZSk7XG4gICBcbiAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hTY2VuZShHQU1FX1NDUkVFTi5HQU1FX1BMQVkpO1xuICAgIGNvbnNvbGUubG9nKFwid2UgaGF2ZSBwdXNoZWQgZ2FtZSBzY2VuZVwiLCBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNjcmVlbik7XG4gICAgdGhpcy5nYW1lU2NyZWVuID0gR0FNRV9TQ1JFRU4uR0FNRV9QTEFZO1xuICAgIHRoaXMubGV2ZWxTZWxlY3Rpb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubW9kZVNlbGVjdGlvbk5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLmdhbWVwbGF5Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZ2FtZXBsYXlOb2RlXG4gICAgLmdldENvbXBvbmVudChcImdhbWVQbGF5XCIpXG4gICAgLnNldFVwVUkoIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudExldmVsKCkpO1xuICB9XG5cblxuICBvbkxldmVsQW5pbWF0aW9uQ29tcGxldGVkKCl7XG4gICAgaWYodGhpcy5nYW1lU2NyZWVuID09IEdBTUVfU0NSRUVOLkdBTUVfUExBWSl7XG4gICBcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIFxuICAgKiBkYXRhIGlzIHN0b3JlZCBpbiB0aGlzIG1hbm5vciBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgKiBMZXZlbEluZm8gPSB7XG4gICAqIFwibGV2ZWxzXCIgOlt7dGltZSA6MTAwLCBpc1VubG9jayA6IHRydWV9ICwgLi4uIF0gIFxuICAgKiBcbiAgICogICogfVxuICAgKiBcbiAgICovXG5cbiAgc2V0TGV2ZWxJbmZvSW5MUygpe1xuXG5cbiAgICBpZiAoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxldmVsSW5mb1wiKSkge1xuICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTGV2ZWxJbmZvXCIsIEpTT04uc3RyaW5naWZ5KHt9KSk7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsSW5mbyA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTGV2ZWxJbmZvXCIpKTtcbiAgICBcbiAgICBsZXQgdG90YWxMZXZlbHMgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsSW5mbygpLmxlbmd0aDtcbiAgICAgICAgbGV0IGxldmVsT2JqID0ge3RpbWUgOjUwMCwgaXNVbmxvY2sgOiBmYWxzZX1cbiAgICAgICBpZighbGV2ZWxJbmZvLmxldmVsKSB7XG4gICAgICAgIGxldCBsZXZlbE9iamVjdEFycmF5ID1bXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTwgdG90YWxMZXZlbHM7IGkrKyl7XG4gICAgICAgICAgbGV2ZWxPYmplY3RBcnJheVtpXSA9IE9iamVjdC5hc3NpZ24oe2lkOiBpfSwgbGV2ZWxPYmopO1xuICAgICAgICB9XG4gICAgICAgICBsZXZlbE9iamVjdEFycmF5WzBdLmlzVW5sb2NrID0gdHJ1ZTtcbiAgICAgICAgIGNvbnNvbGUubG9nKGxldmVsT2JqZWN0QXJyYXlbMF09PT1sZXZlbE9iamVjdEFycmF5WzFdKTtcbiAgICAgICAgIGxldmVsSW5mb1tcImxldmVsXCJdID0gSlNPTi5zdHJpbmdpZnkobGV2ZWxPYmplY3RBcnJheSk7IFxuICAgICAgIH1lbHNle1xuXG4gICAgICAgIC8vIE5ldyBMZXZlbCBhZGRlZCBpbiB0aGUganNvbiBmaWxlXG4gICAgICAgICBsZXQgbGV2ZWxBcnJheSA9IEpTT04ucGFyc2UobGV2ZWxJbmZvLmxldmVsKTsgICBcbiAgICAgICAgIGlmKGxldmVsQXJyYXkubGVuZ3RoIDwgdG90YWxMZXZlbHMpe1xuICAgICAgICAgIGxldCBkaWZmZXJlbmNlID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbEluZm8oKS5maWx0ZXIoaXRlbSA9PiAhIGxldmVsQXJyYXkuc29tZShkYXRhID0+IGRhdGEuaWQgPT0gaXRlbS5pZCkpO1xuICAgICAgICAgIGxldCB0aW1lQXJyYXkgPSBbXTtcbiAgICAgICAgICBmb3IobGV0IGkgPTA7IGk8IGRpZmZlcmVuY2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICB0aW1lQXJyYXlbaV0gPSBPYmplY3QuYXNzaWduKHtpZCA6ZGlmZmVyZW5jZVtpXS5pZCB9LCBsZXZlbE9iaik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGltZSBBcnJhWVwiLCB0aW1lQXJyYXkpO1xuICAgICAgICAgIGxldmVsQXJyYXkucHVzaCguLi50aW1lQXJyYXkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGltZSBBcnJhWVwiLCBsZXZlbEFycmF5KTtcbiAgICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgLy8gT0xEIExldmVsIHJlbW92ZWQgZnJvbSB0aGUganNvbiBmaWxlXG4gICAgICAgICAgbGV0IGRpZmZlcmVuY2UgPSBsZXZlbEFycmF5LmZpbHRlcihpdGVtID0+ICEgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbEluZm8oKS5zb21lKGRhdGEgPT4gZGF0YS5pZCA9PSBpdGVtLmlkKSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJkaWZmZXJlbmNlXCIsIGRpZmZlcmVuY2UpO1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IGRpZmZlcmVuY2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gbGV2ZWxBcnJheS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09IGRpZmZlcmVuY2VbaV0uaWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmRleFwiLCBpbmRleCk7XG4gICAgICAgICAgICBpZihpbmRleCAhPS0xKXtcbiAgICAgICAgICAgICAgIGxldmVsQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGV2ZWwgRGFhdGFcIiwgbGV2ZWxBcnJheSk7XG4gICAgICAgICAgbGV2ZWxBcnJheVswXS5pc1VubG9jayA9IHRydWU7XG4gICAgICAgICAgbGV2ZWxJbmZvW1wibGV2ZWxcIl0gPSBKU09OLnN0cmluZ2lmeShsZXZlbEFycmF5KTtcbiAgICAgIH1cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTGV2ZWxJbmZvXCIsIEpTT04uc3RyaW5naWZ5KGxldmVsSW5mbykpO1xuICB9XG5cblxuICBvblNoYXJlKCl7XG4gICAgaWYoY2Muc3lzLmlzQnJvd3Nlcil7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5idXR0b25QcmVzc2VkLCBmYWxzZSk7XG4gICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwic2hhcmVBcHBcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgYEhleSBJIGhhdmUgYmVlbiBwbGF5aW5nIHRoaXMgYW1hemluZyBnYW1lLCBsZXQncyBjb25uZWN0IHRoZXJlLiAke0dBTUVfTElOSy5VUkx9YCk7XG5cbiAgfVxuXG4gIG9uTW9yZUdhbWVzKCl7XG4gICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvblByZXNzZWQsIGZhbHNlKTtcbiAgICBjYy5zeXMub3BlblVSTChHQU1FX0xJTksuVVJMKTtcbiAgfVxuXG5cbiAgc2hvd1ByaXZhY3lQb2xpY3koKXtcbiAgICAvLyB0aGlzLnBsYXlMb2FkZXIoKTtcbiAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uUHJlc3NlZCwgZmFsc2UpO1xuICAgIC8vIHRoaXMubW9yZUluZm8uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5wcml2YWN5UG9saWN5LmFjdGl2ZSA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJzaG93IHByaXZhY3QgcGxpY3R5XCIpO1xuXG4gIH1cblxuICBlbmFibGVkTW9yZUdhbWVzQnV0dG9uKGlzQWN0aXZlKXtcbiAgICAvLyB0aGlzLm1vcmVJbmZvLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcImJ1dHRvbkxheW91dFwiKS5nZXRDaGlsZEJ5TmFtZShcIm1vcmVHYW1lc1wiKS5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICB0aGlzLmJvdHRvbUJhci5nZXRDaGlsZEJ5TmFtZShcIm1vcmVHYW1lc1wiKS5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgfVxuXG5cbiAgc2hvd0Z1dHVyZURldGFpbHNTY3JlZW4oKXtcbiAgICB0aGlzLmZ1dHVyZURldGFpbHMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG5cbiAgb3BlblNldHRpbmdzKCl7XG4gICAgaWYodGhpcy5zZXR0aW5ncy5hY3RpdmUpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzZm9yU2V0dGluZyA9IHRydWU7XG4gICAgdGhpcy5nYW1lU2NyZWVuID09IEdBTUVfU0NSRUVOLkxFVkVMX1NFTEVDVElPTiAmJiBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBvcFNjZW5lKCk7XG4gICAgdGhpcy5jaGFuZ2VTY2VuZVZpc2libGl0eSh0aGlzLmdhbWVTY3JlZW4sIGZhbHNlKTtcbiAgICB0aGlzLmdhbWVTY3JlZW4gPSBHQU1FX1NDUkVFTi5TRVRUSU5HUztcbiAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hTY2VuZShHQU1FX1NDUkVFTi5TRVRUSU5HUyk7XG4gICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuaHVkTGF5ZXIuekluZGV4ID0gODtcbiAgICBjb25zb2xlLmxvZyhHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNjcmVlbik7XG4gIH1cblxuICBvblRlcm1zQWNjZXB0KCl7XG4gICAgdGhpcy50ZXJtcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQWZ0ZXJUZXJtcyA9IHRydWU7XG4gICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGFzVGVybUFjY2VwdGVkXCIsIHRydWUpO1xuICAgIHRoaXMuZGFpbHlSZXdhcmRzLmFjdGl2ZSA9IHRydWU7XG5cbiAgfVxuXG4gIHN0YXJ0SW1hZ2VMb2FkaW5nKCl7XG4gICAgbGV0IGxldmVscyA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJbmZvKCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJlbGV2ZXNcIiwgKVxuICAgIGlmKHRoaXMubGV0bG9hZENvdW50ID09IGxldmVscy5sZW5ndGgpe1xuICAgICAgcmV0dXJuO1xuICAgIH1lbHNle1xuICAgICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgICAgLmxvYWRMZXZlbEltYWdlcyh0aGlzLmxldGxvYWRDb3VudCkudGhlbigoKT0+e1xuICAgICAgICB0aGlzLmxldGxvYWRDb3VudCsrO1xuICAgICAgICB0aGlzLnN0YXJ0SW1hZ2VMb2FkaW5nKCk7XG4gICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIGxvYWRpbmcgZGF0YVwiKTtcbiAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIFxuICB9XG5cblxuICBvblJld2FyZENvbGxlY3RlZCgpe1xuICAgIGlmKCF0aGlzLmlzQWZ0ZXJUZXJtcyl7XG4gICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cbiAgIFxuICB9XG5cblxub3BlblRlcm1BbmRDb25kaXRpb25zKCl7XG4gIHRoaXMucHJpdmFjeVBvbGljeS5hY3RpdmUgPSB0cnVlO1xuICB0aGlzLnByaXZhY3lQb2xpY3kuZ2V0Q29tcG9uZW50KFwicG9saWN5XCIpLnNldFRlcm0odGhpcy5sb2FkZXIpO1xuXG4gIFxufVxuXG5cbm9wZW5Qcml2YWN5UG9saWN5KCl7XG4gXG4gIHRoaXMucHJpdmFjeVBvbGljeS5hY3RpdmUgPSB0cnVlO1xuICB0aGlzLnByaXZhY3lQb2xpY3kuZ2V0Q29tcG9uZW50KFwicG9saWN5XCIpLnNldFByaXZhY3kodGhpcy5sb2FkZXIpO1xuIFxuICBcbn1cblxuc2hvd0xhc3RTZWNvbmRzUG9wVXAoKXtcblxuICBjb25zb2xlLmxvZyhcImluc2lkZSB0aGlzIHdlIGFyZSAgbm90IGdvaW5nIGFueXdoZXJlXCIsIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3RUZW5TZWNvbmRzXCIpKTtcbiAgdGhpcy5sYXN0VGVuU2Vjb25kcy5hY3RpdmUgPSB0cnVlO1xuICAvLyBpZighY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdFRlblNlY29uZHNcIikpe1xuICAgXG4gIC8vICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdFRlblNlY29uZHNcIiwgdHJ1ZSk7XG4gICAgXG4gIC8vIH1cbiBcbn1cblxuXG5oaWRlTGFzdFNlY29uZHNQb3BVcCgpe1xuICBjb25zb2xlLmxvZyhcImluc2lkZSB0aGlzIGxhc3Qgc2Vjb25kcyBlcmUgYXJlIGhlcmUgXCIpO1xuICB0aGlzLmxhc3RUZW5TZWNvbmRzLmFjdGl2ZSA9IGZhbHNlO1xufVxuXG5cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/laoding/tempCodeRunnerFile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7b013T+zRKWpc+lQq9vFxV', 'tempCodeRunnerFile');
// scripts/laoding/tempCodeRunnerFile.ts



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xhb2RpbmcvdGVtcENvZGVSdW5uZXJGaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIiXX0=
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
    END_POP_UP[END_POP_UP["FOR_HIT"] = 4] = "FOR_HIT";
    END_POP_UP[END_POP_UP["FOR_CLUE"] = 5] = "FOR_CLUE";
})(END_POP_UP = exports.END_POP_UP || (exports.END_POP_UP = {}));
exports.LANGUAGES = {
    ENGLISH: "EN",
    SPANISH: "ES"
};
exports.GAME_LINK = {
    URL: "https://play.google.com/store/apps/details?id=com.game.memoramax"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hlbHBlci9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBa0IsV0FNakI7QUFORCxXQUFrQixXQUFXO0lBQ3pCLDZDQUFRLENBQUE7SUFDUixtRUFBZSxDQUFBO0lBQ2YsdURBQVMsQ0FBQTtJQUNULHFEQUFRLENBQUE7SUFDUix1RUFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBTmlCLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBTTVCO0FBR2EsUUFBQSxTQUFTLEdBQUc7SUFDckIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsTUFBTSxFQUFHLFFBQVE7SUFDakIsTUFBTSxFQUFHLFFBQVE7SUFDakIsSUFBSSxFQUFHLE1BQU07Q0FDakIsQ0FBQTtBQUVELElBQWtCLFVBTWpCO0FBTkQsV0FBa0IsVUFBVTtJQUN4Qix1REFBYyxDQUFBO0lBQ2QsK0NBQU0sQ0FBQTtJQUNOLCtDQUFNLENBQUE7SUFDTixpREFBTyxDQUFBO0lBQ1AsbURBQVEsQ0FBQTtBQUNaLENBQUMsRUFOaUIsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFNM0I7QUFFWSxRQUFBLFNBQVMsR0FBRztJQUNyQixPQUFPLEVBQUcsSUFBSTtJQUNkLE9BQU8sRUFBRyxJQUFJO0NBQ2pCLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBRTtJQUNwQixHQUFHLEVBQUcsa0VBQWtFO0NBQzNFLENBQUE7QUFHWSxRQUFBLFNBQVMsR0FBRTtJQUNwQixJQUFJLEVBQUcsQ0FBQztJQUNSLE1BQU0sRUFBRyxDQUFDO0NBQ2IsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbnVtIEdBTUVfU0NSRUVOIHtcbiAgICBIT01FID0gMSxcbiAgICBMRVZFTF9TRUxFQ1RJT04sXG4gICAgR0FNRV9QTEFZLFxuICAgIFNFVFRJTkdTLFxuICAgIEZVVFVSRV9BTk5PQ01FTlRTXG59XG5cblxuZXhwb3J0IGNvbnN0ICBHQU1FX01PREUgPSB7XG4gICAgIFBSQUNUSUNFIDpcInByYWN0aWNlXCIsXG4gICAgIE5PUk1BTCA6IFwibm9ybWFsXCIsXG4gICAgIE1FRElVTSA6IFwibWVkaXVtXCIsXG4gICAgIEhBUkQgOiBcImhhcmRcIlxufVxuXG5leHBvcnQgY29uc3QgZW51bSBFTkRfUE9QX1VQIHtcbiAgICBORVdfUkVDT1JEID0gMSxcbiAgICBDTEVBUkQsXG4gICAgRkFJTEVELFxuICAgIEZPUl9ISVQsXG4gICAgRk9SX0NMVUVcbn1cblxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IHtcbiAgICBFTkdMSVNIIDogXCJFTlwiLFxuICAgIFNQQU5JU0ggOiBcIkVTXCJcbn1cblxuZXhwb3J0IGNvbnN0IEdBTUVfTElOSyA9e1xuICAgIFVSTCA6IFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5nYW1lLm1lbW9yYW1heFwiXG59XG5cblxuZXhwb3J0IGNvbnN0IEdBTUVfVFlQRSA9e1xuICAgIEZJTkQgOiAxLFxuICAgIE1JUlJPUiA6IDIgXG59XG4iXX0=
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
        this.setLeveltitle(levelInfo.gameType, levelInfo.groupOf);
        this.layout.node.removeAllChildren();
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        var levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var levelsInfoForMode = JSON.parse(levelsInfo.level);
        var endIndex = (startIndex + 10) > levels.length ? levels.length : (startIndex + 10);
        for (var i = startIndex; i < endIndex; i++) {
            var button = cc.instantiate(this.levelSelectionButton);
            button.name = i.toString();
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
    LevelUIManager.prototype.updateLevels = function (startIndex) {
        var levelInfo = GameManager_1.GameManager.getInstance().getLevelData(startIndex);
        this.setLeveltitle(levelInfo.gameType, levelInfo.groupOf);
        var levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        var endIndex = (startIndex + 10) > levels.length ? levels.length : (startIndex + 10);
        var levelsInfoForMode = JSON.parse(levelsInfo.level);
        for (var i = startIndex; i < endIndex; i++) {
            var button = cc.instantiate(this.levelSelectionButton);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xldmVsL2xldmVsVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHVEQUFzRDtBQUN0RCxpREFBZ0Q7QUFFMUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFzSEM7UUFsSEcsMEJBQW9CLEdBQWUsSUFBSSxDQUFDO1FBR3hDLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFHNUIsWUFBTSxHQUFlLElBQUksQ0FBQztRQUkxQixZQUFNLEdBQWUsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBYyxJQUFJLENBQUM7O1FBb0d4QixpQkFBaUI7SUFDckIsQ0FBQztJQW5HRyxlQUFlO0lBRWYsOEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw2Q0FBb0IsR0FBcEIsVUFBcUIsT0FBTztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFJLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBR0QsdUNBQWMsR0FBZCxVQUFlLFVBQVU7UUFDckIsSUFBSSxTQUFTLEdBQUcseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JDLElBQUksTUFBTSxHQUFHLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEQsSUFBSSxV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QUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ29CO0lBR3hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0RBQ0c7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztrREFDQztJQUkxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ0s7SUFqQlAsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXNIbEM7SUFBRCxxQkFBQztDQXRIRCxBQXNIQyxDQXRIMkMsRUFBRSxDQUFDLFNBQVMsR0FzSHZEO2tCQXRIb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IHsgR0FNRV9UWVBFIH0gZnJvbSBcIi4uL2hlbHBlci9jb25zdGFudHNcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFVJTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBfZGVsYWdhdGUgOiBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbGV2ZWxTZWxlY3Rpb25CdXR0b24gOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHVubG9ja2VkIDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsb2NrZWQgOiBjYy5QcmVmYWIgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTGF5b3V0KVxuICAgIGxheW91dCA6IGNjLkxheW91dCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGl0bGUgOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHNldERlbGVnYXRlQ29tcG9uZW50KGRlbGdhdGUpe1xuICAgICAgICB0aGlzLl9kZWxhZ2F0ZSA9ICBkZWxnYXRlO1xuICAgIH1cblxuXG4gICAgcG9wdWxhdGVMZXZlbHMoc3RhcnRJbmRleCl7XG4gICAgICAgIGxldCBsZXZlbEluZm8gPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsRGF0YShzdGFydEluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRMZXZlbHRpdGxlKGxldmVsSW5mby5nYW1lVHlwZSwgbGV2ZWxJbmZvLmdyb3VwT2YpXG4gICAgICAgIHRoaXMubGF5b3V0Lm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgbGV0IGxldmVscyA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJbmZvKCk7XG4gICAgICAgIGxldCBsZXZlbHNJbmZvID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMZXZlbEluZm9cIikpO1xuICAgICAgICBsZXQgbGV2ZWxzSW5mb0Zvck1vZGUgPSBKU09OLnBhcnNlKGxldmVsc0luZm8ubGV2ZWwpO1xuICAgICAgICBsZXQgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEwKSA+IGxldmVscy5sZW5ndGggPyBsZXZlbHMubGVuZ3RoIDogKHN0YXJ0SW5kZXggKzEwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBlbmRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbFNlbGVjdGlvbkJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b24ubmFtZSA9IGkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJ1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLnJlcGxhY2VWYWx1ZShgJHtpKzF9YCk7XG4gICAgICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJsZXZlbFVJTWFuYWdlclwiO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25MZXZlbFNlbGVjdFwiO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaS50b1N0cmluZygpO1xuICAgICAgICAgICAgYnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgaWYobGV2ZWxzSW5mb0Zvck1vZGVbaV0uaXNVbmxvY2spe1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q29tcG9uZW50KFwiY2MuU3ByaXRlXCIpLnNwcml0ZUZyYW1lID0gdGhpcy51bmxvY2tlZDtcbiAgICAgICAgICAgICAgICBidXR0b24uZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDb21wb25lbnQoXCJjYy5TcHJpdGVcIikuc3ByaXRlRnJhbWUgPSB0aGlzLmxvY2tlZDtcbiAgICAgICAgICAgICAgICBidXR0b24uZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXlvdXQubm9kZS5hZGRDaGlsZChidXR0b24pO1xuICAgICAgIH1cblxuICAgICAgIFxuXG4gICAgfVxuXG5cbiAgICB1cGRhdGVMZXZlbHMoc3RhcnRJbmRleCl7XG4gICAgICAgIGxldCBsZXZlbEluZm8gPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsRGF0YShzdGFydEluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRMZXZlbHRpdGxlKGxldmVsSW5mby5nYW1lVHlwZSwgbGV2ZWxJbmZvLmdyb3VwT2YpXG4gICAgICAgIGxldCBsZXZlbHNJbmZvID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMZXZlbEluZm9cIikpO1xuICAgICAgICBsZXQgbGV2ZWxzID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbEluZm8oKTtcbiAgICAgICAgbGV0IGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxMCkgPiBsZXZlbHMubGVuZ3RoID8gbGV2ZWxzLmxlbmd0aCA6IChzdGFydEluZGV4ICsxMCk7XG4gICAgICAgIGxldCBsZXZlbHNJbmZvRm9yTW9kZSA9IEpTT04ucGFyc2UobGV2ZWxzSW5mby5sZXZlbCk7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgZW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxTZWxlY3Rpb25CdXR0b24pO1xuICAgICAgICAgICAgaWYobGV2ZWxzSW5mb0Zvck1vZGVbaV0uaXNVbmxvY2spe1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q29tcG9uZW50KFwiY2MuU3ByaXRlXCIpLnNwcml0ZUZyYW1lID0gdGhpcy51bmxvY2tlZDtcbiAgICAgICAgICAgICAgICBidXR0b24uZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDb21wb25lbnQoXCJjYy5TcHJpdGVcIikuc3ByaXRlRnJhbWUgPSB0aGlzLmxvY2tlZDtcbiAgICAgICAgICAgICAgICBidXR0b24uZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXlvdXQubm9kZS5hZGRDaGlsZChidXR0b24pO1xuICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgc2V0TGV2ZWx0aXRsZShnYW1lVHlwZSwgZ3JvdXBvZil7XG5cbiAgICAgICAgbGV0IGtleVN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgc3dpdGNoKGdhbWVUeXBlKXtcbiAgICAgICAgICAgIGNhc2UgR0FNRV9UWVBFLkZJTkQ6XG4gICAgICAgICAgICAgICAga2V5U3RyaW5nID0gXCJmaW5kXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdBTUVfVFlQRS5NSVJST1I6XG4gICAgICAgICAgICAgICAga2V5U3RyaW5nID0gXCJtaXJyb3JcIjtcbiAgICAgICAgICAgICAgICBicmVhazsgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aXRsZS5ub2RlLmdldENvbXBvbmVudChcImxvY2FsaXNlclwiKS5rZXkgPSBrZXlTdHJpbmc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXlTdHJpbmcnLCBrZXlTdHJpbmcpO1xuICAgICAgICB0aGlzLnRpdGxlLm5vZGUuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLnJlcGxhY2VWYWx1ZShgJHtncm91cG9mfWApO1xuICAgICAgICB0aGlzLnRpdGxlLm5vZGUuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLnNldFN0cmluZ0ZvcktleSgpO1xuICAgIH1cblxuICAgIG9uTGV2ZWxTZWxlY3QoZXZlbnQ6IEV2ZW50LCBsZXZlbDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fZGVsYWdhdGUub25MZXZlbFNlbGVjdChsZXZlbCk7XG4gICAgfVxuXG5cbiAgICBvcGVuTG9jYWxpc2F0aW9uKCl7XG4gICAgICAgIHRoaXMuX2RlbGFnYXRlLm9wZW5Mb2NhbGlzYXRpb25Qb3BVcCgpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
        _this.isTutoiral = true;
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
        _this.gameTutorials = null;
        _this.bounsPoints = 0;
        _this.isSoundPlaying = false;
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
        _this.netError = null;
        _this.levelLabel = null;
        _this.gameInstructions = null;
        _this.tutorials = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.hand.zIndex = 20;
        this.netError.zIndex = 20;
        this.progresser = this.timerBar.node.getChildByName("bar");
        var animationClips = this.bouns.node.getComponent(cc.Animation);
        animationClips.on('finished', this.bounsAnimationCompleted, this);
        this.setOptions();
        this.progresser.width = 0;
        this.timerBar.progress = 0;
        this.timerBar.totalLength = this.timerBar.node.width;
    };
    GamePlay.prototype.onDisable = function () {
        if (!this.node.parent.getComponent("home").isforSetting) {
            clearInterval(this.interval);
            this.OpenCards.length = 0;
            this.cardsInPair.length = 0;
            this.hand.parent = this.node;
            this.bouns.node.active = false;
            this.tutorialCards.length = 0;
            this.hand.active = false;
            this.isTutoiral = true;
            SoundManager_1.default.getInstance().stopAllSounds();
            this.optionLayer.getComponent("options").disableClockButton();
        }
        else {
            SoundManager_1.default.getInstance().stopAllSounds();
        }
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
        })
            .catch(function (error) {
        });
    };
    GamePlay.prototype.setUpAlerts = function () {
        this.gameStartAlert = cc.instantiate(this.startPopUp);
        var timerTitle = this.levelData.timer.totalTime + "s";
        var levelInfo = GameManager_1.GameManager.getInstance().getLevelData(this._level);
        this.gameStartAlert.getComponent("gameStart").setProperties(this, levelInfo.gameType, levelInfo.groupOf);
        this.gameEndAlert = cc.instantiate(this.gameEndPopUp);
        this.gameEndAlert.getComponent("gameEnd").setProperties(this, this.gameMode);
        this.node.parent.addChild(this.gameStartAlert, 7);
        this.node.parent.addChild(this.gameEndAlert, 7);
        this.gameEndAlert.active = false;
        this.gameStartAlert.active = false;
    };
    GamePlay.prototype.setGrid = function () {
        console.log("inside set card elements");
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
        this.gameLayout.node.active = true;
        this.levelLabel.node.parent.active = true;
        console.log("inisde this we have set the cards");
        this.updateGamePlay();
    };
    GamePlay.prototype.updateGamePlay = function () {
        var _this = this;
        this.levelLabel.getComponent("localiser").replaceValue("" + (this._level + 1));
        this.levelLabel.getComponent("localiser").setStringForKey();
        this.levelLabel.node.parent.runAction(cc.sequence(cc.scaleTo(1.5, 1), cc.delayTime(0.5), cc.callFunc(function () {
            _this.levelLabel.node.parent.active = false;
            _this.levelLabel.node.parent.scale = 0.5;
            if ((_this._level + 1) % 10 == 1) {
                _this.showTutorials();
            }
            else {
                _this.startGame();
            }
        })));
        this.totalTime = this.levelData.timer.totalTime;
        this.bouns.node.getChildByName("bonus").string = this.levelData.timer.bounsTime;
    };
    GamePlay.prototype.createAndShuffelCards = function () {
        var _a;
        this._cards.length = 0;
        for (var i = 0; i < this.groupOf; i++) {
            (_a = this._cards).push.apply(_a, this.levelData.cards);
        }
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
    GamePlay.prototype.flipAllCards = function () {
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
            this.isTutoiral = true;
            this.moveTutHand();
        }
        else {
            this.isTutoiral = false;
        }
    };
    GamePlay.prototype.moveTutHand = function () {
        console.log("move tut hand");
        var card = this.tutorialCards.shift();
        if (!card)
            return;
        card.parent.getComponent(cc.Widget).updateAlignment();
        card.getComponent('cards').disableOverlay();
        this.hand.active = true;
        var worldSpace = this.containerNode.convertToWorldSpace(card.getPosition());
        var nodeSpace = this.hand.parent.convertToNodeSpace(worldSpace);
        this.hand.y = nodeSpace.y - (card.height * card.scale);
        this.hand.x = nodeSpace.x;
        this.hand.stopAllActions();
        this.hand.runAction(cc.sequence(cc.moveBy(.5, 0, 50), cc.moveBy(.5, 0, -50)).repeat(1000));
    };
    GamePlay.prototype.moveTudHandsOnHints = function (isOnMagnifineGlass) {
        this.hand.parent = this.gameTutorials;
        var position = this.optionLayer.getComponent("options").getChildrenPosition(isOnMagnifineGlass);
        var worldSpace = this.optionLayer.parent.convertToWorldSpaceAR(position);
        var nodeSpace = this.gameTutorials.convertToNodeSpaceAR(worldSpace);
        this.hand.y = nodeSpace.y + this.node.height * 0.3;
        this.hand.x = nodeSpace.x;
    };
    GamePlay.prototype.startGameTimer = function () {
        var _this = this;
        var target = this;
        target.optionLayer.getComponent("options").updateTimer(0, this.totalTime);
        this.interval = setInterval(function () {
            _this._timer++;
            target.optionLayer.getComponent("options").updateTimer(_this._timer, _this.totalTime);
            // console.log("inside this maximum time inside this", this.totalTime);
            if (_this.gameMode != constants_1.GAME_MODE.PRACTICE) {
                _this.timerBar.progress = _this._timer / _this.totalTime;
                if (Math.abs(_this._timer - _this.totalTime) == 10 ||
                    (!_this.isSoundPlaying && Math.abs(_this._timer - _this.totalTime) < 10)) {
                    SoundManager_1.default.getInstance().playEffect(_this.last5Sec, false);
                    _this.isSoundPlaying = true;
                    _this.optionLayer.getComponent("options").enableClockButton();
                    console.log("inside thie we are here hhheheheh");
                    _this.showTenSecondsPopUp();
                }
                else if (_this.isSoundPlaying && Math.abs(_this._timer - _this.totalTime) > 10) {
                    SoundManager_1.default.getInstance().stopAllSounds();
                    _this.optionLayer.getComponent("options").disableClockButton();
                    _this.isSoundPlaying = false;
                }
                if (_this._timer == _this.totalTime) {
                    _this.isTouchBlocked = true;
                    clearInterval(_this.interval);
                    _this.endGame(false);
                }
            }
        }, 1000);
    };
    GamePlay.prototype.showCard = function (card) {
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
        if (isMatch) {
            if (this.cardsInPair.length != this.groupOf) {
                return;
            }
            this.playBounsAnimation();
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
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                    // this();
                    _this.continueTutorial();
                })));
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
        this.node.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(function () {
            var clip = isMatch ? _this.correctAnswerAudio : _this.wrongAnswerAudiodFlip;
            SoundManager_1.default.getInstance().playEffect(clip, false);
        })));
    };
    GamePlay.prototype.endGame = function (isWon) {
        var _this = this;
        this.optionLayer.getComponent("options").disableClockButton();
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
            if (AdManager_1.default.getInstance().isAdAvailable()) {
                AdManager_1.default.getInstance().showInterstital(this);
            }
            ;
        }
        cc.sys.localStorage.setItem("lastPlayedLevel", this._level);
        //MARK : TO DO CHECK WORK AFTER ADS COMES
        this.node.parent.getComponent("home").onBack();
        this.node.parent.getComponent("home").startGame();
    };
    GamePlay.prototype.startGame = function () {
        var _this = this;
        console.log("inside this");
        this.levelLabel.node.parent.active = false;
        this.progresser.width = this.timerBar.node.width;
        this.timerBar.progress = 1;
        var target = this;
        var time = this.levelData.timer.memorizeTime;
        target.optionLayer.getComponent("options").updateTimer(time, this.levelData.timer.totalTime);
        target.optionLayer.active = true;
        this.isTouchBlocked = true;
        this.interval = setInterval(function () {
            target.optionLayer.getComponent("options").updateTimer(time, _this.levelData.timer.totalTime);
            time--;
            _this.timerBar.progress = time / _this.levelData.timer.memorizeTime;
            if (time === -1) {
                clearInterval(_this.interval);
                target.isTouchBlocked = false;
                target.flipAllCards();
                if (!_this.isTutoiral) {
                    _this._timer = 0;
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
    GamePlay.prototype.playBounsAnimation = function (isFromPowerUp) {
        if (isFromPowerUp === void 0) { isFromPowerUp = false; }
        console.log("is from popwe up ", isFromPowerUp);
        var additonPoints = isFromPowerUp ? 10 : 5;
        this.bounsPoints += additonPoints;
        this.bouns.node.active = true;
        this.bouns.node.position = new cc.Vec2(0, 0);
        this.bouns.node.scale = 2;
        this.bouns.node.getComponentInChildren(cc.Label).string = "+" + additonPoints;
        this.bouns.node.opacity = 255;
        this.bouns.node.getComponent(cc.Animation).play();
    };
    GamePlay.prototype.bounsAnimationCompleted = function () {
        this.bouns.node.active = false;
        this.totalTime += this.bounsPoints; //this.levelData.timer.bounsTime;
        this.optionLayer.getComponent("options").updateTimer(this._timer, this.totalTime);
        this.isTouchBlocked = false;
        this.bounsPoints = 0;
    };
    GamePlay.prototype.showTutorials = function () {
        this.gameTutorials = cc.instantiate(this.tutorials);
        this.gameTutorials.getComponent("tutorials").setDelegate(this);
        this.gameTutorials.getComponent("tutorials").showMemoriseTime(this.levelData.timer.memorizeTime);
        this.hand.setPosition(0, 0);
        this.node.parent.addChild(this.gameTutorials, 100);
    };
    GamePlay.prototype.continueTutorial = function () {
        this.gameTutorials.active = true;
        this.gameTutorials.getComponent("tutorials").moveToNextSlide();
    };
    GamePlay.prototype.showGameInstructionPopUp = function () {
        console.log("inside this we have to see the ");
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
        this._timer = 0;
        this.startGameTimer();
    };
    GamePlay.prototype.adHasbeenShown = function () {
    };
    GamePlay.prototype.isTutorialPlaying = function () {
        return this.isTutoiral;
    };
    GamePlay.prototype.removeHintPopUp = function () {
        this.gameEndAlert.active = false;
        this.startGameTimer();
        this.optionLayer.getComponent('options').updateHindText();
    };
    GamePlay.prototype.showHintPopUP = function (type) {
        console.log("cc.sys.getNetworkType()", cc.sys.getNetworkType(), cc.sys.NetworkType.LAN, cc.sys.NetworkType.WWAN);
        if (cc.sys.getNetworkType() == cc.sys.NetworkType.LAN || cc.sys.getNetworkType() == cc.sys.NetworkType.WWAN) {
            this.gameEndAlert.getComponent("gameEnd").showPopUpFor(type, this._level);
            this.gameEndAlert.active = true;
            clearInterval(this.interval);
        }
        else {
            console.log("show error pop up", this.netError);
            this.showNetErroPopUP();
        }
    };
    GamePlay.prototype.showNetErroPopUP = function () {
        var _this = this;
        this.netError.active = true;
        this.netError.getComponentInChildren(cc.Label).string = GameManager_1.GameManager.getInstance().getString('openNet');
        cc.tween(this.netError)
            .delay(2)
            .call(function () { return _this.netError.active = false; })
            .start();
    };
    GamePlay.prototype.openPairCards = function () {
        var _this = this;
        var hiddenCards = [];
        var targetCard = null;
        if (this.cardsInPair.length == this.groupOf || this.isTouchBlocked) {
            console.log("please. return");
            return;
        }
        else if (this.cardsInPair.length != 0 && this.cardsInPair.length <= this.groupOf) {
            hiddenCards = this.cardsInPair;
        }
        else {
            // console.log("innside else");
            hiddenCards = this.gameLayout.node.children.filter(function (item) { return !item.getComponent('cards').isOpen(); });
        }
        // console.log("hidden cards hehhehe", hiddenCards, this.cardsInPair);
        if (hiddenCards.length > 0) {
            var card_1 = hiddenCards[0];
            var pairs = this.gameLayout.node.children.filter(function (item) {
                return item.getComponent('cards').getCardName() == card_1.getComponent('cards').getCardName();
            });
            //   console.log("pairs", pairs, card.getComponent('cards').getCardName());
            pairs.forEach(function (card) {
                if (!card.getComponent('cards').isOpen()) {
                    _this.showCard(card);
                }
            });
        }
    };
    GamePlay.prototype.showTenSecondsPopUp = function () {
        console.log("inside this we have to show ten seconds timer here hehe", JSON.parse(cc.sys.localStorage.getItem("lastTenSeconds")));
        if (!JSON.parse(cc.sys.localStorage.getItem("lastTenSeconds"))) {
            cc.sys.localStorage.setItem("lastTenSeconds", true);
            clearInterval(this.interval);
            this.node.parent.getComponent("home").showLastSecondsPopUp();
        }
    };
    GamePlay.prototype.hideTenSecondsPopUp = function () {
        this.node.parent.getComponent("home").hideLastSecondsPopUp();
        this.startGameTimer();
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
    ], GamePlay.prototype, "netError", void 0);
    __decorate([
        property(cc.Label)
    ], GamePlay.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "gameInstructions", void 0);
    __decorate([
        property(cc.Prefab)
    ], GamePlay.prototype, "tutorials", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L2dhbWVQbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFtRDtBQUNuRCxpREFBeUU7QUFDekUseURBQW9EO0FBQ3BELG1EQUE4QztBQUc5QyxJQUFRLFNBQVMsR0FBRztJQUNmLFNBQVMsRUFBRyxDQUFDO0lBQ2IsU0FBUyxFQUFHLENBQUM7SUFDYixTQUFTLEVBQUcsQ0FBQztJQUNiLFNBQVMsRUFBRyxDQUFDO0lBQ2IsU0FBUyxFQUFHLENBQUM7Q0FDakIsQ0FBQTtBQUdLLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeW5CQztRQXZuQlcsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsWUFBTSxHQUFLLENBQUMsQ0FBQztRQUNiLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxlQUFTLEdBQUUsRUFBRSxDQUFDO1FBQ2QsaUJBQVcsR0FBRSxFQUFFLENBQUM7UUFDaEIsbUJBQWEsR0FBRSxFQUFFLENBQUM7UUFDbEIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLG9CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDMUIsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGlCQUFXLEdBQUcsSUFB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QVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNPO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7OENBQ087SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDTTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzt1REFDYztJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFJekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUztJQUk1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNlO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1E7SUFuRlgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXluQjVCO0lBQUQsZUFBQztDQXpuQkQsQUF5bkJDLENBem5CcUMsRUFBRSxDQUFDLFNBQVMsR0F5bkJqRDtrQkF6bkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0dhbWVNYW5hZ2VyfSBmcm9tIFwiLi4vbWFuYWdlcnMvR2FtZU1hbmFnZXJcIlxuaW1wb3J0IHsgR0FNRV9NT0RFLCBFTkRfUE9QX1VQLCBHQU1FX1NDUkVFTiB9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2Vycy9Tb3VuZE1hbmFnZXJcIjtcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXJzL0FkTWFuYWdlclwiO1xuXG5cbmNvbnN0ICAgY2FyZEluZGV4ID0ge1xuICAgICBHUk9VUF8zXzQgOiAwLFxuICAgICBHUk9VUF80XzQgOiAxLFxuICAgICBHUk9VUF80XzUgOiAyLFxuICAgICBHUk9VUF80XzYgOiAzLFxuICAgICBHUk9VUF80XzcgOiA0XG59XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIF9jYXJkcyA9IFtdO1xuICAgIHByaXZhdGUgX2dyaWRJbmZvID0gbnVsbDtcbiAgICBwcml2YXRlIF9sZXZlbCAgPSAgMDtcbiAgICBwcml2YXRlIF90aW1lciA9IG51bGw7XG4gICAgcHJpdmF0ZSBPcGVuQ2FyZHMgPVtdO1xuICAgIHByaXZhdGUgY2FyZHNJblBhaXIgPVtdO1xuICAgIHByaXZhdGUgdHV0b3JpYWxDYXJkcyA9W107XG4gICAgcHJpdmF0ZSB0dXRDYXJkTmFtZSA9IDA7XG4gICAgcHJpdmF0ZSBpc1R1dG9pcmFsID0gdHJ1ZTsgXG4gICAgcHJpdmF0ZSBsZXZlbERhdGEgPSBudWxsO1xuICAgIHByaXZhdGUgaW50ZXJ2YWwgPSBudWxsO1xuICAgIHByaXZhdGUgaXNUb3VjaEJsb2NrZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIHRvdGFsVGltZSA9IDA7XG4gICAgcHJpdmF0ZSBncm91cE9mID0gMjtcbiAgICBwcml2YXRlIHByb2dyZXNzZXIgPSBudWxsO1xuICAgIGdhbWVNb2RlID0gJyc7XG4gICAgZ2FtZVN0YXJ0QWxlcnQgPSBudWxsO1xuICAgIGdhbWVFbmRBbGVydCA9IG51bGw7XG4gICAgb3B0aW9uTGF5ZXIgPSBudWxsO1xuICAgIGdhbWVUdXRvcmlhbHMgPSBudWxsO1xuXG4gICAgYm91bnNQb2ludHMgPSAwO1xuICAgIGlzU291bmRQbGF5aW5nID0gZmFsc2VcbiAgICBcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY2FyZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgb3B0aW9uczogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICB0aW1lckJhciA6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYXlvdXQpXG4gICAgZ2FtZUxheW91dCA6IGNjLkxheW91dCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJvdW5zID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc3RhcnRQb3BVcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdhbWVFbmRQb3BVcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250YWluZXJOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgY29ycmVjdEFuc3dlckF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICB3cm9uZ0Fuc3dlckF1ZGlvZEZsaXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBsYXN0NVNlYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgY2xhcHBpbmc6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHRpbWVzVXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBjYXJkc1Nwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuZXRFcnJvcjogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsZXZlbExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdhbWVJbnN0cnVjdGlvbnM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICB0dXRvcmlhbHM6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgICBvbkxvYWQgKCkge1xuXG4gICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5oYW5kLnpJbmRleCA9IDIwO1xuICAgICAgICB0aGlzLm5ldEVycm9yLnpJbmRleCA9IDIwO1xuICAgICAgICB0aGlzLnByb2dyZXNzZXIgPSB0aGlzLnRpbWVyQmFyLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIik7XG4gICAgICAgIHZhciBhbmltYXRpb25DbGlwcyA9IHRoaXMuYm91bnMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgYW5pbWF0aW9uQ2xpcHMub24oJ2ZpbmlzaGVkJywgdGhpcy5ib3Vuc0FuaW1hdGlvbkNvbXBsZXRlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucygpO1xuICAgICAgICB0aGlzLnByb2dyZXNzZXIud2lkdGggPSAwO1xuICAgICAgICB0aGlzLnRpbWVyQmFyLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy50aW1lckJhci50b3RhbExlbmd0aCA9IHRoaXMudGltZXJCYXIubm9kZS53aWR0aDtcblxuICAgIH1cbiAgICBvbkRpc2FibGUoKXtcbiAgICAgICAgaWYoICF0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikuaXNmb3JTZXR0aW5nKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCkgIDtcbiAgICAgICAgICAgIHRoaXMuT3BlbkNhcmRzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLmhhbmQucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgdGhpcy5ib3Vucy5ub2RlLmFjdGl2ZSA9IGZhbHNlOyBcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWxDYXJkcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgdGhpcy5oYW5kLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc1R1dG9pcmFsID0gdHJ1ZTtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnN0b3BBbGxTb3VuZHMoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uTGF5ZXIuZ2V0Q29tcG9uZW50KFwib3B0aW9uc1wiKS5kaXNhYmxlQ2xvY2tCdXR0b24oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zdG9wQWxsU291bmRzKCk7IFxuICAgICAgICB9XG4gICAgfVxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIGlmKHRoaXMub3B0aW9uTGF5ZXIpe1xuICAgICAgICAgICAgdGhpcy5vcHRpb25MYXllclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChcIm9wdGlvbnNcIikudXBkYXRlSGluZFRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgc2V0T3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5vcHRpb25MYXllciA9IGNjLmluc3RhbnRpYXRlKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMub3B0aW9uTGF5ZXJcbiAgICAgICAgLmdldENvbXBvbmVudChcIm9wdGlvbnNcIikuc2V0RGVsZWdhdGUodGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9uTGF5ZXJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMub3B0aW9uTGF5ZXIpO1xuICAgICAgICB0aGlzLm9wdGlvbkxheWVyLnpJbmRleCA9IDU7XG4gICAgICB9XG5cbiAgICAvLyBTRVRUSU5HIFVQIFVJXG4gICAgc2V0VXBVSShsZXZlbCA6IG51bWJlciwgZ2FtZU1vZGU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5nYW1lTGF5b3V0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGUgPSBnYW1lTW9kZTtcbiAgICAgICAgdGhpcy5fbGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsRGF0YSh0aGlzLl9sZXZlbCAsIHRoaXMuZ2FtZU1vZGUpO1xuICAgICAgICB0aGlzLnNldFVwQWxlcnRzKCk7XG4gICAgICAgIHRoaXMubG9hZExldmVsSW1hZ2VzKCk7XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgIGxvYWRMZXZlbEltYWdlcygpe1xuICAgICAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgICAgIC5sb2FkTGV2ZWxJbWFnZXModGhpcy5fbGV2ZWwpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5ncm91cE9mID0gIHRoaXMubGV2ZWxEYXRhLmdyb3VwT2Y7XG4gICAgICAgICAgdGhpcy5jcmVhdGVBbmRTaHVmZmVsQ2FyZHMoKTtcbiAgICAgICAgICB0aGlzLl9ncmlkSW5mbyA9IHRoaXMubGV2ZWxEYXRhLmdyaWQ7XG4gICAgICAgICAgdGhpcy5zZXRHcmlkKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgfSk7XG4gICAgIH1cbiAgICBzZXRVcEFsZXJ0cyAoKXtcbiAgICAgICAgdGhpcy5nYW1lU3RhcnRBbGVydCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhcnRQb3BVcCk7XG4gICAgICAgIGxldCB0aW1lclRpdGxlID0gYCR7dGhpcy5sZXZlbERhdGEudGltZXIudG90YWxUaW1lfXNgO1xuICAgICAgICBsZXQgbGV2ZWxJbmZvID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbERhdGEodGhpcy5fbGV2ZWwpO1xuICAgICAgICB0aGlzLmdhbWVTdGFydEFsZXJ0LmdldENvbXBvbmVudChcImdhbWVTdGFydFwiKS5zZXRQcm9wZXJ0aWVzKHRoaXMsIGxldmVsSW5mby5nYW1lVHlwZSwgbGV2ZWxJbmZvLmdyb3VwT2YpO1xuICAgICAgICB0aGlzLmdhbWVFbmRBbGVydCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ2FtZUVuZFBvcFVwKTtcbiAgICAgICAgdGhpcy5nYW1lRW5kQWxlcnQuZ2V0Q29tcG9uZW50KFwiZ2FtZUVuZFwiKS5zZXRQcm9wZXJ0aWVzKHRoaXMsIHRoaXMuZ2FtZU1vZGUpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHRoaXMuZ2FtZVN0YXJ0QWxlcnQsNyk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQodGhpcy5nYW1lRW5kQWxlcnQsNyk7XG4gICAgICAgIHRoaXMuZ2FtZUVuZEFsZXJ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWVTdGFydEFsZXJ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBzZXRHcmlkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBzZXQgY2FyZCBlbGVtZW50c1wiKTtcbiAgICAgICAgdGhpcy5nYW1lTGF5b3V0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lck5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgIHRoaXMuZ2FtZUxheW91dC5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGxldCBpbmRleCA9IGNhcmRJbmRleFtgR1JPVVBfJHt0aGlzLl9ncmlkSW5mby5jb2x9XyR7dGhpcy5fZ3JpZEluZm8ucm93fWBdO1xuICAgICAgICBsZXQgdG90YWxIZWlnaHQgPSAodGhpcy5jb250YWluZXJOb2RlLmhlaWdodCAtICh0aGlzLmdhbWVMYXlvdXQuc3BhY2luZ1gqdGhpcy5fZ3JpZEluZm8ucm93KSk7XG4gICAgICAgIGxldCBzcGFjaW5nID0gdGhpcy5nYW1lTGF5b3V0LnNwYWNpbmdYICogdGhpcy5fZ3JpZEluZm8uY29sO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLmNvbnRhaW5lck5vZGUud2lkdGggLSBzcGFjaW5nO1xuICAgICAgICBsZXQgc2NhbGUgPSAxO1xuICAgICAgICBsZXQgZHVtbXlXaWR0aCA9IDE7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLl9jYXJkcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgY2FyZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FyZFByZWZhYik7XG4gICAgICAgICAgICBjYXJkLmdldENvbXBvbmVudChcImNhcmRzXCIpLnNldERlbGVnYXRlKHRoaXMpO1xuICAgICAgICAgICAgY2FyZC5nZXRDb21wb25lbnQoXCJjYXJkc1wiKS5zZXRVcFVJKHRoaXMuX2NhcmRzW2ldLm5hbWUsIHRoaXMuX2xldmVsLCB0aGlzLmdhbWVNb2RlLCB0aGlzLmNhcmRzU3ByaXRlRnJhbWVzW2luZGV4XSk7XG4gICAgICAgICAgICBsZXQgYmxvY2tTaXplID0gd2lkdGggLyB0aGlzLl9ncmlkSW5mby5jb2w7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdG90YWxIZWlnaHQvIHRoaXMuX2dyaWRJbmZvLnJvdztcbiAgICAgICAgICAgIGNhcmQuc2V0U2NhbGUoTWF0aC5taW4oYmxvY2tTaXplL2NhcmQud2lkdGgsIGhlaWdodC9jYXJkLmhlaWdodCkpO1xuICAgICAgICAgICAgc2NhbGUgPSBjYXJkLnNjYWxlO1xuICAgICAgICAgICAgZHVtbXlXaWR0aCA9IGNhcmQud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmdhbWVMYXlvdXQubm9kZS5hZGRDaGlsZChjYXJkKTtcbiAgICAgICAgfSAgXG4gICAgICAgIHRoaXMuZ2FtZUxheW91dC5ub2RlLndpZHRoID0gICB0aGlzLl9ncmlkSW5mby5jb2wgKiAoc2NhbGUgKiBkdW1teVdpZHRoICkgKyBzcGFjaW5nO1xuICAgICAgICB0aGlzLm9wdGlvbkxheWVyLmFjdGl2ZSA9IGZhbHNlOyAgIFxuICAgICAgICB0aGlzLmdhbWVMYXlvdXQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxldmVsTGFiZWwubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTsgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pc2RlIHRoaXMgd2UgaGF2ZSBzZXQgdGhlIGNhcmRzXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZUdhbWVQbGF5KCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVHYW1lUGxheSgpe1xuICAgICAgICB0aGlzLmxldmVsTGFiZWwuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLnJlcGxhY2VWYWx1ZShgJHt0aGlzLl9sZXZlbCsxfWApOyBcbiAgICAgICAgICB0aGlzLmxldmVsTGFiZWwuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLnNldFN0cmluZ0ZvcktleSgpO1xuICAgICAgICAgIHRoaXMubGV2ZWxMYWJlbC5ub2RlLnBhcmVudC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygxLjUsIDEpLCBjYy5kZWxheVRpbWUoMC41KSwgY2MuY2FsbEZ1bmMoKCk9PntcbiAgICAgICAgICAgICAgdGhpcy5sZXZlbExhYmVsLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLmxldmVsTGFiZWwubm9kZS5wYXJlbnQuc2NhbGUgPSAwLjU7XG4gICAgICAgICAgICBpZigodGhpcy5fbGV2ZWwrMSkgJSAxMCA9PSAxKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUdXRvcmlhbHMoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgfSkpKTtcbiAgICAgICAgICB0aGlzLnRvdGFsVGltZSA9IHRoaXMubGV2ZWxEYXRhLnRpbWVyLnRvdGFsVGltZTtcbiAgICAgICAgICB0aGlzLmJvdW5zLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib251c1wiKS5zdHJpbmcgPSB0aGlzLmxldmVsRGF0YS50aW1lci5ib3Vuc1RpbWU7XG4gICAgfVxuICAgIGNyZWF0ZUFuZFNodWZmZWxDYXJkcygpe1xuICAgICAgICB0aGlzLl9jYXJkcy5sZW5ndGggPTA7XG4gICAgICAgIGZvcihsZXQgaSA9MDsgaSA8IHRoaXMuZ3JvdXBPZjsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuX2NhcmRzLnB1c2goLi4udGhpcy5sZXZlbERhdGEuY2FyZHMpO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaW5kZXggPSB0aGlzLl9jYXJkcy5sZW5ndGgtMTsgaW5kZXg+PSAwOyBpbmRleC0tKXtcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpbmRleCAtIDApICsgMCk7XG4gICAgICAgICAgICBsZXQgc3dhcEVsZW1lbnQgPSB0aGlzLl9jYXJkc1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSB0aGlzLl9jYXJkc1tpbmRleF07XG4gICAgICAgICAgICB0aGlzLl9jYXJkc1tpbmRleF0gPSBzd2FwRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuX2NhcmRzW3JhbmRvbUluZGV4XSA9IGN1cnJlbnRFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoKHRoaXMuX2xldmVsICsxKSUgMTAgPT0gMSl7XG4gICAgICAgICAgIHRoaXMudHV0Q2FyZE5hbWUgPSB0aGlzLl9jYXJkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5fY2FyZHMubGVuZ3RoIC0gMSkgKyAwKV0ubmFtZTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuXG5cblxuICAgIH1cbiAgICBmbGlwQWxsQ2FyZHMoKXtcbiAgICAgICAgZm9yKGxldCBjaGlsZCBvZiB0aGlzLmdhbWVMYXlvdXQubm9kZS5jaGlsZHJlbil7XG4gICAgICAgICAgICBjaGlsZC5nZXRDb21wb25lbnQoXCJjYXJkc1wiKS51bnJldmVhbCgpO1xuICAgICAgICAgICAgaWYoKHRoaXMuX2xldmVsKzEpICUgMTAgIT0gMSl7XG4gICAgICAgICAgICAgIGNoaWxkLmdldENvbXBvbmVudCgnY2FyZHMnKS5kaXNhYmxlT3ZlcmxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKCh0aGlzLl9sZXZlbCsxKSAlIDEwID09IDEpe1xuICAgICAgICAgICAgdGhpcy50dXRvcmlhbENhcmRzID0gdGhpcy5nYW1lTGF5b3V0Lm5vZGUuY2hpbGRyZW4uZmlsdGVyKGl0ZW0gPT4gIGl0ZW0uZ2V0Q29tcG9uZW50KCdjYXJkcycpLmdldENhcmROYW1lKCkgPT0gdGhpcy50dXRDYXJkTmFtZSk7IFxuICAgICAgICAgICAgdGhpcy5pc1R1dG9pcmFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubW92ZVR1dEhhbmQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaXNUdXRvaXJhbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIG1vdmVUdXRIYW5kKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW92ZSB0dXQgaGFuZFwiKTtcbiAgICAgICAgbGV0IGNhcmQgPSB0aGlzLnR1dG9yaWFsQ2FyZHMuc2hpZnQoKTtcbiAgICAgICAgaWYoIWNhcmQpIHJldHVybjtcbiAgICAgICAgY2FyZC5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgIGNhcmQuZ2V0Q29tcG9uZW50KCdjYXJkcycpLmRpc2FibGVPdmVybGF5KCk7XG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgd29ybGRTcGFjZSA9IHRoaXMuY29udGFpbmVyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlKGNhcmQuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGxldCBub2RlU3BhY2UgPSB0aGlzLmhhbmQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZSh3b3JsZFNwYWNlKTtcbiAgICAgICAgdGhpcy5oYW5kLnkgPSBub2RlU3BhY2UueSAtIChjYXJkLmhlaWdodCAgKiBjYXJkLnNjYWxlKTtcbiAgICAgICAgdGhpcy5oYW5kLnggPSBub2RlU3BhY2UueDtcbiAgICAgICAgdGhpcy5oYW5kLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuaGFuZC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZUJ5KC41LCAgMCAsIDUwKSwgY2MubW92ZUJ5KC41LCAwLCAtNTApKS5yZXBlYXQoMTAwMCkpO1xuICAgIH1cbiAgICBtb3ZlVHVkSGFuZHNPbkhpbnRzKGlzT25NYWduaWZpbmVHbGFzcyl7XG4gICAgICAgIHRoaXMuaGFuZC5wYXJlbnQgPSB0aGlzLmdhbWVUdXRvcmlhbHM7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMub3B0aW9uTGF5ZXIuZ2V0Q29tcG9uZW50KFwib3B0aW9uc1wiKS5nZXRDaGlsZHJlblBvc2l0aW9uKGlzT25NYWduaWZpbmVHbGFzcyk7XG4gICAgICAgIGxldCB3b3JsZFNwYWNlID0gdGhpcy5vcHRpb25MYXllci5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvc2l0aW9uKTtcbiAgICAgICAgbGV0IG5vZGVTcGFjZSA9IHRoaXMuZ2FtZVR1dG9yaWFscy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFNwYWNlKTtcbiAgICAgICAgdGhpcy5oYW5kLnkgPSBub2RlU3BhY2UueSArIHRoaXMubm9kZS5oZWlnaHQgKiAwLjM7XG4gICAgICAgIHRoaXMuaGFuZC54ID0gbm9kZVNwYWNlLng7XG4gICAgfVxuICAgIHN0YXJ0R2FtZVRpbWVyICgpe1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgdGFyZ2V0Lm9wdGlvbkxheWVyLmdldENvbXBvbmVudChcIm9wdGlvbnNcIikudXBkYXRlVGltZXIoMCAsIHRoaXMudG90YWxUaW1lKVxuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyKys7XG5cbiAgICAgICAgICAgIHRhcmdldC5vcHRpb25MYXllci5nZXRDb21wb25lbnQoXCJvcHRpb25zXCIpLnVwZGF0ZVRpbWVyKHRoaXMuX3RpbWVyICwgdGhpcy50b3RhbFRpbWUpXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zaWRlIHRoaXMgbWF4aW11bSB0aW1lIGluc2lkZSB0aGlzXCIsIHRoaXMudG90YWxUaW1lKTtcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZU1vZGUgIT0gR0FNRV9NT0RFLlBSQUNUSUNFKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyQmFyLnByb2dyZXNzICA9IHRoaXMuX3RpbWVyICAvIHRoaXMudG90YWxUaW1lO1xuXG4gICAgICAgICAgICAgICAgaWYoTWF0aC5hYnModGhpcy5fdGltZXIgIC0gdGhpcy50b3RhbFRpbWUpID09IDEwIHx8IFxuICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLmlzU291bmRQbGF5aW5nICYmIE1hdGguYWJzKHRoaXMuX3RpbWVyICAtIHRoaXMudG90YWxUaW1lKSA8IDEwKSl7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5sYXN0NVNlYywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU291bmRQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25MYXllci5nZXRDb21wb25lbnQoXCJvcHRpb25zXCIpLmVuYWJsZUNsb2NrQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHRoaWUgd2UgYXJlIGhlcmUgaGhoZWhlaGVoXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUZW5TZWNvbmRzUG9wVXAoKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmlzU291bmRQbGF5aW5nICYmIE1hdGguYWJzKHRoaXMuX3RpbWVyICAtIHRoaXMudG90YWxUaW1lKSA+IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkuc3RvcEFsbFNvdW5kcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkxheWVyLmdldENvbXBvbmVudChcIm9wdGlvbnNcIikuZGlzYWJsZUNsb2NrQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTb3VuZFBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fdGltZXIgID09IHRoaXMudG90YWxUaW1lKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RvdWNoQmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7ICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRHYW1lKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIHNob3dDYXJkKGNhcmQpe1xuICAgICAgICBpZih0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aCA+PSB0aGlzLmdyb3VwT2YgfHwgdGhpcy5pc1RvdWNoQmxvY2tlZCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FyZC5nZXRDb21wb25lbnQoXCJjYXJkc1wiKS5yZXZlYWwoKTtcbiAgICAgICAgdGhpcy5jYXJkc0luUGFpci5wdXNoKGNhcmQpO1xuICAgICAgICB0aGlzLmlzVHV0b2lyYWwgJiYgdGhpcy5tb3ZlVHV0SGFuZCgpO1xuICAgICAgICB0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aCA+IDEgJiYgdGhpcy5pc1BhaXIoKTtcbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgLy8gdGhpcy5pc1R1dG9pcmFsIFxuICAgIH1cbiAgICBpc1BhaXIoKXtcbiAgICAgICAgbGV0IGNhcmRzID0gW107XG4gICAgICAgIGNhcmRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPCB0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNhcmRzLnB1c2godGhpcy5jYXJkc0luUGFpcltpXS5nZXRDb21wb25lbnQoJ2NhcmRzJykpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNNYXRjaCAgPSB0cnVlO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoIC0gMTsgaSsrICl7XG4gICAgICAgICAgICBpZihjYXJkc1tpXS5nZXRDYXJkTmFtZSgpICE9PSBjYXJkc1tpKzFdLmdldENhcmROYW1lKCkpe1xuICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IFxuICAgICAgICBpZiggaXNNYXRjaCApeyAgIFxuICAgICAgICAgICAgaWYodGhpcy5jYXJkc0luUGFpci5sZW5ndGggIT0gdGhpcy5ncm91cE9mKXtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnBsYXlCb3Vuc0FuaW1hdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5pc1RvdWNoQmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjIpLCBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgZm9yKGxldCBjYXJkU2NpcHQgb2YgY2FyZHMpe1xuICAgICAgICAgICAgICAgICAgICBjYXJkU2NpcHQucGxheUNvcnJlY3RBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNUb3VjaEJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICBmb3IobGV0IGNhcmRTY2lwdCBvZiBjYXJkcyl7XG4gICAgICAgICAgICAgICAgdGhpcy5PcGVuQ2FyZHMucHVzaChjYXJkU2NpcHQuZ2V0Q2FyZE5hbWUoKSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhcmRzSW5QYWlyLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBpZih0aGlzLk9wZW5DYXJkcy5sZW5ndGggPT0gdGhpcy5fY2FyZHMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLCBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kR2FtZSh0cnVlKTtcbiAgICAgICAgICAgICAgIH0pKSk7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLmlzVHV0b2lyYWwpe1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLCBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGludWVUdXRvcmlhbCgpO1xuICAgICAgICAgICAgICAgICAgIH0pKSk7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmlzVG91Y2hCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLCBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgIGZvcihsZXQgY2FyZFNjaXB0IG9mIGNhcmRzKXtcbiAgICAgICAgICAgICAgICAgICAgY2FyZFNjaXB0LnVucmV2ZWFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUb3VjaEJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkc0luUGFpci5sZW5ndGggPSAwO1xuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjMpLCBjYy5jYWxsRnVuYyggKCk9PntcbiAgICAgICAgICAgIGxldCBjbGlwID0gaXNNYXRjaCA/IHRoaXMuY29ycmVjdEFuc3dlckF1ZGlvIDogdGhpcy53cm9uZ0Fuc3dlckF1ZGlvZEZsaXA7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcbiAgICAgICAgfSkpKTtcbiAgICB9XG4gICAgZW5kR2FtZSAoaXNXb24pIHtcblxuICAgICAgICB0aGlzLm9wdGlvbkxheWVyLmdldENvbXBvbmVudChcIm9wdGlvbnNcIikuZGlzYWJsZUNsb2NrQnV0dG9uKCk7XG4gICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zdG9wQWxsU291bmRzKCk7XG4gICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICBpZihpc1dvbil7XG4gICAgICAgICAgICBsZXQgaXNOZXdSZWNvcmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBsZXZlbEluZm8gPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxldmVsSW5mb1wiKSk7XG4gICAgICAgICAgICBsZXQgbGV2ZWxzID0gIEpTT04ucGFyc2UobGV2ZWxJbmZvLmxldmVsKTtcbiAgICAgICAgICAgIC8vIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy5jbGFwcGluZywgZmFsc2UpO1xuICAgICAgICAgICAgaWYobGV2ZWxzW3RoaXMuX2xldmVsXS50aW1lID4gdGhpcy5fdGltZXIpe1xuICAgICAgICAgICAgICAgIGxldmVsc1t0aGlzLl9sZXZlbF0udGltZSA9IHRoaXMuX3RpbWVyO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2xldmVsIDwgbGV2ZWxzLmxlbmd0aC0xKXtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxzW3RoaXMuX2xldmVsKzFdLmlzVW5sb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV2ZWxJbmZvLmxldmVsID0gSlNPTi5zdHJpbmdpZnkobGV2ZWxzKTtcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJMZXZlbEluZm9cIiwgSlNPTi5zdHJpbmdpZnkobGV2ZWxJbmZvKSk7XG4gICAgICAgICAgICAgICAgaXNOZXdSZWNvcmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nYW1lRW5kQWxlcnQuZ2V0Q29tcG9uZW50KFwiZ2FtZUVuZFwiKS5zaG93UG9wVXBGb3IoaXNOZXdSZWNvcmQgPyBFTkRfUE9QX1VQLk5FV19SRUNPUkQ6IEVORF9QT1BfVVAuQ0xFQVJELCB0aGlzLl9sZXZlbCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVFbmRBbGVydC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QodGhpcy50aW1lc1VwLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmdhbWVFbmRBbGVydC5nZXRDb21wb25lbnQoXCJnYW1lRW5kXCIpLnNob3dQb3BVcEZvcihFTkRfUE9QX1VQLkZBSUxFRCx0aGlzLl9sZXZlbCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVFbmRBbGVydC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSwgY2MuY2FsbEZ1bmMoICgpPT57XG4gICAgICAgICAgICBsZXQgY2xpcCA9IGlzV29uID8gdGhpcy5jbGFwcGluZyA6IHRoaXMudGltZXNVcDtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xuICAgICAgICB9KSkpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBwb3AgdXBzIERFTEVHQVRFIE1FVEhPRFMgXG4gICAgb25QbGF5QWdhaW4gKCl7XG4gICAgICAgIHRoaXMuZ2FtZUVuZEFsZXJ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZighY2Muc3lzLmlzQnJvd3Nlcil7XG4gICAgICAgICAgICBpZihBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pc0FkQXZhaWxhYmxlKCkpe1xuICAgICAgICAgICAgICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNob3dJbnRlcnN0aXRhbCh0aGlzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdFBsYXllZExldmVsXCIsIHRoaXMuX2xldmVsKTtcbiAgICAgICAgLy9NQVJLIDogVE8gRE8gQ0hFQ0sgV09SSyBBRlRFUiBBRFMgQ09NRVNcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJob21lXCIpLm9uQmFjaygpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHRoaXNcIik7XG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5ub2RlLnBhcmVudC5hY3RpdmU9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2dyZXNzZXIud2lkdGggPSB0aGlzLnRpbWVyQmFyLm5vZGUud2lkdGg7ICAgXG4gICAgICAgIHRoaXMudGltZXJCYXIucHJvZ3Jlc3MgPSAxO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmxldmVsRGF0YS50aW1lci5tZW1vcml6ZVRpbWU7XG4gICAgICAgIHRhcmdldC5vcHRpb25MYXllci5nZXRDb21wb25lbnQoXCJvcHRpb25zXCIpLnVwZGF0ZVRpbWVyKHRpbWUsIHRoaXMubGV2ZWxEYXRhLnRpbWVyLnRvdGFsVGltZSlcbiAgICAgICAgdGFyZ2V0Lm9wdGlvbkxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzVG91Y2hCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICB0YXJnZXQub3B0aW9uTGF5ZXIuZ2V0Q29tcG9uZW50KFwib3B0aW9uc1wiKS51cGRhdGVUaW1lcih0aW1lLCB0aGlzLmxldmVsRGF0YS50aW1lci50b3RhbFRpbWUpXG4gICAgICAgICAgICB0aW1lLS07XG4gICAgICAgICAgICB0aGlzLnRpbWVyQmFyLnByb2dyZXNzID0gdGltZS90aGlzLmxldmVsRGF0YS50aW1lci5tZW1vcml6ZVRpbWU7XG4gICAgICAgICAgICBpZih0aW1lID09PSAtMSl7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuaXNUb3VjaEJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZmxpcEFsbENhcmRzKCk7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaXNUdXRvaXJhbCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWVUaW1lcigpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBvblBsYXlBZ2FpbkNhbmNlbCgpe1xuICAgICAgICB0aGlzLmdhbWVFbmRBbGVydC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1lRW5kQWxlcnQucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikub25CYWNrKCk7XG5cbiAgICB9XG5cbiAgICBnYW1lRW5kZWQgKCl7XG4gICAgICAgIHRoaXMuZ2FtZUVuZEFsZXJ0LnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgbGV0IGxldmVsID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50TGV2ZWwoKTtcbiAgICAgICAgbGV0IHRvdGFsTGV2ZWxJbk1vZGUgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsSW5mbyh0aGlzLmdhbWVNb2RlKTtcbiAgICAgICAgaWYobGV2ZWwgPT0gdG90YWxMZXZlbEluTW9kZS5sZW5ndGggLTEpe1xuICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiaG9tZVwiKS5zaG93RnV0dXJlRGV0YWlsc1NjcmVlbigpO1xuICAgICAgICAgIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFNjZW5lKEdBTUVfU0NSRUVOLkZVVFVSRV9BTk5PQ01FTlRTKTsgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdFBsYXllZExldmVsXCIsIHRoaXMuX2xldmVsICsgMSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikub25CYWNrKCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikuc3RhcnRHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG5cbiAgICAvLyBBTklNQVRJT04gQ0FMTEJBQ0tTIDpcbiAgICBwbGF5Qm91bnNBbmltYXRpb24oaXNGcm9tUG93ZXJVcCA9IGZhbHNlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJpcyBmcm9tIHBvcHdlIHVwIFwiLCBpc0Zyb21Qb3dlclVwKTtcbiAgICAgICAgbGV0IGFkZGl0b25Qb2ludHMgPSBpc0Zyb21Qb3dlclVwID8gMTAgOiA1O1xuICAgICAgICB0aGlzLmJvdW5zUG9pbnRzICs9IGFkZGl0b25Qb2ludHM7XG4gICAgICAgIHRoaXMuYm91bnMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJvdW5zLm5vZGUucG9zaXRpb24gID0gbmV3IGNjLlZlYzIoMCwwKTtcbiAgICAgICAgdGhpcy5ib3Vucy5ub2RlLnNjYWxlID0gMjtcbiAgICAgICAgdGhpcy5ib3Vucy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IGArJHthZGRpdG9uUG9pbnRzfWA7XG4gICAgICAgIHRoaXMuYm91bnMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLmJvdW5zLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xuXG4gICAgfVxuICAgIGJvdW5zQW5pbWF0aW9uQ29tcGxldGVkICgpe1xuICAgICAgICB0aGlzLmJvdW5zLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG90YWxUaW1lICs9IHRoaXMuYm91bnNQb2ludHMvL3RoaXMubGV2ZWxEYXRhLnRpbWVyLmJvdW5zVGltZTtcbiAgICAgICAgdGhpcy5vcHRpb25MYXllci5nZXRDb21wb25lbnQoXCJvcHRpb25zXCIpLnVwZGF0ZVRpbWVyKHRoaXMuX3RpbWVyLCAgdGhpcy50b3RhbFRpbWUpO1xuICAgICAgICB0aGlzLmlzVG91Y2hCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYm91bnNQb2ludHMgPSAwO1xuICAgIH1cbiAgICBzaG93VHV0b3JpYWxzKCl7XG4gICAgICAgIHRoaXMuZ2FtZVR1dG9yaWFscyA9IGNjLmluc3RhbnRpYXRlKHRoaXMudHV0b3JpYWxzKTtcbiAgICAgICAgdGhpcy5nYW1lVHV0b3JpYWxzLmdldENvbXBvbmVudChcInR1dG9yaWFsc1wiKS5zZXREZWxlZ2F0ZSh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lVHV0b3JpYWxzLmdldENvbXBvbmVudChcInR1dG9yaWFsc1wiKS5zaG93TWVtb3Jpc2VUaW1lKHRoaXMubGV2ZWxEYXRhLnRpbWVyLm1lbW9yaXplVGltZSk7XG4gICAgICAgIHRoaXMuaGFuZC5zZXRQb3NpdGlvbigwLDApO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHRoaXMuZ2FtZVR1dG9yaWFscywgMTAwKTtcbiAgICAgICAgXG4gICAgfVxuICAgIGNvbnRpbnVlVHV0b3JpYWwoKXtcbiAgICAgICAgdGhpcy5nYW1lVHV0b3JpYWxzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZVR1dG9yaWFscy5nZXRDb21wb25lbnQoXCJ0dXRvcmlhbHNcIikubW92ZVRvTmV4dFNsaWRlKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBzaG93R2FtZUluc3RydWN0aW9uUG9wVXAoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgdGhpcyB3ZSBoYXZlIHRvIHNlZSB0aGUgXCIpO1xuICAgICAgICB0aGlzLmdhbWVTdGFydEFsZXJ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFuZC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgc3RvcFR1dG9yaWFscygpe1xuICAgICAgICB0aGlzLmlzVHV0b2lyYWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50dXRvcmlhbENhcmRzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0QWxlcnQucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICBmb3IobGV0IGNoaWxkIG9mIHRoaXMuZ2FtZUxheW91dC5ub2RlLmNoaWxkcmVuKXtcbiAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KCdjYXJkcycpLmRpc2FibGVPdmVybGF5KCk7XG4gICAgICAgICB9XG4gICAgICAgICB0aGlzLl90aW1lciA9IDA7XG4gICAgICAgICB0aGlzLnN0YXJ0R2FtZVRpbWVyKCk7XG4gICAgfSBcbiAgICBhZEhhc2JlZW5TaG93bigpe1xuXG4gICAgfVxuICAgIGlzVHV0b3JpYWxQbGF5aW5nKCl7XG4gICAgICAgcmV0dXJuIHRoaXMuaXNUdXRvaXJhbDtcbiAgICB9XG4gICAgcmVtb3ZlSGludFBvcFVwKCl7XG4gICAgICAgdGhpcy5nYW1lRW5kQWxlcnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgdGhpcy5zdGFydEdhbWVUaW1lcigpO1xuICAgICAgIHRoaXMub3B0aW9uTGF5ZXIuZ2V0Q29tcG9uZW50KCdvcHRpb25zJykudXBkYXRlSGluZFRleHQoKTtcbiAgICB9XG4gICAgc2hvd0hpbnRQb3BVUCh0eXBlKXtcbiAgICAgICBjb25zb2xlLmxvZyhcImNjLnN5cy5nZXROZXR3b3JrVHlwZSgpXCIsIGNjLnN5cy5nZXROZXR3b3JrVHlwZSgpLCAgY2Muc3lzLk5ldHdvcmtUeXBlLkxBTiwgY2Muc3lzLk5ldHdvcmtUeXBlLldXQU4pXG4gICAgaWYgKGNjLnN5cy5nZXROZXR3b3JrVHlwZSgpID09IGNjLnN5cy5OZXR3b3JrVHlwZS5MQU4gfHwgY2Muc3lzLmdldE5ldHdvcmtUeXBlKCkgPT0gY2Muc3lzLk5ldHdvcmtUeXBlLldXQU4pe1xuICAgICAgICB0aGlzLmdhbWVFbmRBbGVydC5nZXRDb21wb25lbnQoXCJnYW1lRW5kXCIpLnNob3dQb3BVcEZvcih0eXBlLCB0aGlzLl9sZXZlbCk7XG4gICAgICAgIHRoaXMuZ2FtZUVuZEFsZXJ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBlcnJvciBwb3AgdXBcIix0aGlzLm5ldEVycm9yKTtcbiAgICAgICAgdGhpcy5zaG93TmV0RXJyb1BvcFVQKCk7XG4gICAgfVxuICAgICAgXG4gICAgfVxuICAgIHNob3dOZXRFcnJvUG9wVVAoKXtcblxuICAgICAgIHRoaXMubmV0RXJyb3IuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgIHRoaXMubmV0RXJyb3IuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdHJpbmcoJ29wZW5OZXQnKTtcbiAgICAgICBjYy50d2Vlbih0aGlzLm5ldEVycm9yKVxuICAgICAgIC5kZWxheSgyKVxuICAgICAgIC5jYWxsKCgpPT4gdGhpcy5uZXRFcnJvci5hY3RpdmUgPSBmYWxzZSlcbiAgICAgICAuc3RhcnQoKTtcbiAgICB9XG4gICAgb3BlblBhaXJDYXJkcygpe1xuXG4gICAgbGV0IGhpZGRlbkNhcmRzICA9IFtdO1xuICAgIGxldCB0YXJnZXRDYXJkID0gbnVsbDtcblxuICAgIFxuICAgIGlmKHRoaXMuY2FyZHNJblBhaXIubGVuZ3RoID09IHRoaXMuZ3JvdXBPZiB8fCB0aGlzLmlzVG91Y2hCbG9ja2VkKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGVhc2UuIHJldHVyblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuY2FyZHNJblBhaXIubGVuZ3RoIT0wICYmIHRoaXMuY2FyZHNJblBhaXIubGVuZ3RoIDw9IHRoaXMuZ3JvdXBPZil7XG4gICAgICAgIGhpZGRlbkNhcmRzID0gdGhpcy5jYXJkc0luUGFpcjtcbiAgICB9ZWxzZXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbm5zaWRlIGVsc2VcIik7XG4gICAgICAgICAgaGlkZGVuQ2FyZHMgPSAgdGhpcy5nYW1lTGF5b3V0Lm5vZGUuY2hpbGRyZW4uZmlsdGVyKGl0ZW0gPT4gICFpdGVtLmdldENvbXBvbmVudCgnY2FyZHMnKS5pc09wZW4oKSk7ICBcbiAgICB9XG5cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiaGlkZGVuIGNhcmRzIGhlaGhlaGVcIiwgaGlkZGVuQ2FyZHMsIHRoaXMuY2FyZHNJblBhaXIpO1xuICAgIGlmKGhpZGRlbkNhcmRzLmxlbmd0aCA+IDApe1xuICAgICAgbGV0IGNhcmQgPSBoaWRkZW5DYXJkc1swXTtcbiAgICAgIGxldCBwYWlycyA9ICB0aGlzLmdhbWVMYXlvdXQubm9kZS5jaGlsZHJlbi5maWx0ZXIoaXRlbSA9PiBcbiAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KCdjYXJkcycpLmdldENhcmROYW1lKCkgPT0gIGNhcmQuZ2V0Q29tcG9uZW50KCdjYXJkcycpLmdldENhcmROYW1lKCkgKTsgXG4gICAgLy8gICBjb25zb2xlLmxvZyhcInBhaXJzXCIsIHBhaXJzLCBjYXJkLmdldENvbXBvbmVudCgnY2FyZHMnKS5nZXRDYXJkTmFtZSgpKTtcbiAgICAgIHBhaXJzLmZvckVhY2goY2FyZD0+e1xuICAgICAgICAgIGlmKCFjYXJkLmdldENvbXBvbmVudCgnY2FyZHMnKS5pc09wZW4oKSl7XG4gICAgICAgICAgICB0aGlzLnNob3dDYXJkKGNhcmQpXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAgICAgXG4gICAgICAgXG4gICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgIFxuICAgICBcbiAgICB9XG4gICAgc2hvd1RlblNlY29uZHNQb3BVcCgpe1xuICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHRoaXMgd2UgaGF2ZSB0byBzaG93IHRlbiBzZWNvbmRzIHRpbWVyIGhlcmUgaGVoZVwiLCBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3RUZW5TZWNvbmRzXCIpKSk7XG4gICAgICAgaWYoIUpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdFRlblNlY29uZHNcIikpKXtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdFRlblNlY29uZHNcIiwgdHJ1ZSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiaG9tZVwiKS5zaG93TGFzdFNlY29uZHNQb3BVcCgpO1xuICAgIH1cbiAgICB9XG5cbiAgIGhpZGVUZW5TZWNvbmRzUG9wVXAoKXtcbiAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImhvbWVcIikuaGlkZUxhc3RTZWNvbmRzUG9wVXAoKTtcbiAgICB0aGlzLnN0YXJ0R2FtZVRpbWVyKCk7XG4gICB9XG5cblxuXG4gICAgXG5cblxuXG4gICAgXG5cblxuXG5cblxuXG5cbiAgIFxuXG59XG4iXX0=
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
        _this.clues = null;
        _this.clueButton = null;
        _this.hintButton = null;
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
        var clueCount = cc.sys.localStorage.getItem("clue");
        this.clues.string = "" + clueCount;
        this.clueButton.interactable = true;
    };
    Options.prototype.setUpUI = function (screen, gameMode) {
        console.log("options", screen, gameMode);
        var mode = GameManager_1.GameManager.getInstance().getString(gameMode);
        this.gameMode.string = mode;
        this.deactiveAllNodes();
        switch (screen) {
            case constants_1.GAME_SCREEN.HOME:
                // this.more.node.active = false;
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
        // this.more.node.active = false;
    };
    Options.prototype.updateTimer = function (time, totalTime) {
        var timeString = GameManager_1.GameManager.getInstance().getString("time");
        timeString = timeString.replace("%s", "");
        this.timer.string = "" + timeString + time + "/" + totalTime;
    };
    Options.prototype.onHint = function () {
        if (this._delegateScript.isTutorialPlaying()) {
            return;
        }
        var hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
        console.log("hint", hintCount);
        if (hintCount > 0) {
            this._delegateScript.playBounsAnimation(true);
            cc.sys.localStorage.setItem("hint", hintCount - 1);
            this.hint.string = "" + (hintCount - 1);
        }
        else {
            this._delegateScript.showHintPopUP(constants_1.END_POP_UP.FOR_HIT);
        }
    };
    Options.prototype.onClue = function () {
        var _this = this;
        if (this._delegateScript.isTutorialPlaying()) {
            return;
        }
        var clueCount = JSON.parse(cc.sys.localStorage.getItem("clue"));
        if (clueCount > 0) {
            cc.sys.localStorage.setItem("clue", clueCount - 1);
            this.clues.string = "" + (clueCount - 1);
            this.clueButton.interactable = false;
            this._delegateScript.openPairCards();
            this.clueButton.node.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(function () {
                _this.clueButton.interactable = true;
            })));
        }
        else {
            this._delegateScript.showHintPopUP(constants_1.END_POP_UP.FOR_CLUE);
        }
    };
    Options.prototype.getChildrenPosition = function (isClue) {
        var targetNode = isClue ? this.clueButton.node : this.hintButton.node;
        return targetNode.getPosition();
    };
    Options.prototype.hideIcon = function (isClue, parent) {
        if (isClue) {
            this.clueButton.node.active = false;
            this.hintButton.node.active = true;
        }
        else {
            this.clueButton.node.active = true;
            this.hintButton.node.active = false;
        }
        if (parent == null) {
            this.clueButton.node.active = true;
            this.hintButton.node.active = true;
        }
        // let targetNode = isClue ? this.clueButton.node: this.hintButton.node;
    };
    // play animtion after enabling the button
    Options.prototype.enableClockButton = function () {
        this.hintButton.getComponent(cc.Animation).play();
    };
    // disable the button and also stop the animation
    Options.prototype.disableClockButton = function () {
        this.hintButton.getComponent(cc.Animation).stop();
        this.hintButton.node.scale = 1;
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
        property(cc.Label)
    ], Options.prototype, "clues", void 0);
    __decorate([
        property(cc.Button)
    ], Options.prototype, "clueButton", void 0);
    __decorate([
        property(cc.Button)
    ], Options.prototype, "hintButton", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0hVRC9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLGlEQUEyRDtBQUMzRCx1REFBc0Q7QUFFdEQ7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUF3S0M7UUFuS0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBSTFCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUk3QixnQkFBVSxHQUFjLElBQUksQ0FBQzs7UUFpSjdCLGlCQUFpQjtJQUNyQixDQUFDO0lBaEpHLHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQVcsR0FBWCxVQUFhLFFBQVE7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRTFCLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0ksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUcsU0FBVyxDQUFDO1FBRWxDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFHLFNBQVcsQ0FBQztRQUVuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELHlCQUFPLEdB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cHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuaW1wb3J0IHtFTkRfUE9QX1VQLCBHQU1FX1NDUkVFTn0gZnJvbSBcIi4uL2hlbHBlci9jb25zdGFudHNcIlxuaW1wb3J0IHsgR2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vbWFuYWdlcnMvR2FtZU1hbmFnZXJcIjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgX2RlbGVnYXRlU2NyaXB0IDogbnVsbDtcbiAgXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpbWVyOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZ2FtZU1vZGU6IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGhpbnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBjbHVlczogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBjbHVlQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGhpbnRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7ICBcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHNldERlbGVnYXRlIChkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLl9kZWxlZ2F0ZVNjcmlwdCA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLnVwZGF0ZUhpbmRUZXh0KCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZUhpbmRUZXh0KCl7XG4gICAgICAgIGxldCBoaW50Q291bnQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaW50XCIpO1xuICAgICAgICB0aGlzLmhpbnQuc3RyaW5nID0gYCR7aGludENvdW50fWA7XG5cbiAgICAgICAgbGV0IGNsdWVDb3VudCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNsdWVcIik7XG4gICAgICAgIHRoaXMuY2x1ZXMuc3RyaW5nID0gYCR7Y2x1ZUNvdW50fWA7XG5cbiAgICAgICAgdGhpcy5jbHVlQnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0VXBVSSAoc2NyZWVuIDogR0FNRV9TQ1JFRU4sIGdhbWVNb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvcHRpb25zXCIsIHNjcmVlbiwgZ2FtZU1vZGUpO1xuICAgICAgICBsZXQgbW9kZSA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RyaW5nKGdhbWVNb2RlKTtcbiAgICAgICAgdGhpcy5nYW1lTW9kZS5zdHJpbmcgPSBtb2RlO1xuICAgICAgICB0aGlzLmRlYWN0aXZlQWxsTm9kZXMoKTtcbiAgICAgICBcblxuICAgICAgICBzd2l0Y2goc2NyZWVuKXtcbiAgICAgICAgICAgIGNhc2UgR0FNRV9TQ1JFRU4uSE9NRTpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1vcmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR0FNRV9TQ1JFRU4uTEVWRUxfU0VMRUNUSU9OOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICBjYXNlIEdBTUVfU0NSRUVOLkdBTUVfUExBWTpcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNb2RlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWFjdGl2ZUFsbE5vZGVzICgpe1xuICAgICAgICB0aGlzLnRpbWVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5tb3JlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgICB1cGRhdGVUaW1lcih0aW1lLCB0b3RhbFRpbWUpe1xuICAgICAgICBsZXQgdGltZVN0cmluZyA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RyaW5nKFwidGltZVwiKVxuICAgICAgICB0aW1lU3RyaW5nID0gdGltZVN0cmluZy5yZXBsYWNlKFwiJXNcIiwgXCJcIik7XG4gICAgICAgIHRoaXMudGltZXIuc3RyaW5nID0gYCR7dGltZVN0cmluZ30ke3RpbWV9LyR7dG90YWxUaW1lfWA7XG4gICAgfVxuXG5cbiAgICBvbkhpbnQoKXtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX2RlbGVnYXRlU2NyaXB0LmlzVHV0b3JpYWxQbGF5aW5nKCkpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBoaW50Q291bnQgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpbnRcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhpbnRcIiwgaGludENvdW50KTtcbiAgICAgICAgaWYoaGludENvdW50ID4gMCApe1xuICAgICAgICAgICAgdGhpcy5fZGVsZWdhdGVTY3JpcHQucGxheUJvdW5zQW5pbWF0aW9uKHRydWUpO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGludFwiLCBoaW50Q291bnQtMSk7XG4gICAgICAgICAgICB0aGlzLmhpbnQuc3RyaW5nID0gYCR7aGludENvdW50LTF9YDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLl9kZWxlZ2F0ZVNjcmlwdC5zaG93SGludFBvcFVQKEVORF9QT1BfVVAuRk9SX0hJVCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uQ2x1ZSgpe1xuICAgICAgICBpZih0aGlzLl9kZWxlZ2F0ZVNjcmlwdC5pc1R1dG9yaWFsUGxheWluZygpKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2x1ZUNvdW50ID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbHVlXCIpKTtcbiAgICAgICAgaWYoY2x1ZUNvdW50ID4gMCApe1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2x1ZVwiLCBjbHVlQ291bnQtMSk7XG4gICAgICAgICAgICB0aGlzLmNsdWVzLnN0cmluZyA9IGAke2NsdWVDb3VudC0xfWA7XG4gICAgICAgICAgICB0aGlzLmNsdWVCdXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9kZWxlZ2F0ZVNjcmlwdC5vcGVuUGFpckNhcmRzKCk7XG4gICAgICAgICAgICB0aGlzLmNsdWVCdXR0b24ubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuMyksIGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5jbHVlQnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9KSkpO1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5fZGVsZWdhdGVTY3JpcHQuc2hvd0hpbnRQb3BVUChFTkRfUE9QX1VQLkZPUl9DTFVFKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBnZXRDaGlsZHJlblBvc2l0aW9uKGlzQ2x1ZSl7XG5cbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBpc0NsdWUgPyB0aGlzLmNsdWVCdXR0b24ubm9kZTogdGhpcy5oaW50QnV0dG9uLm5vZGU7XG4gICAgICAgIHJldHVybiB0YXJnZXROb2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgaGlkZUljb24oaXNDbHVlLCBwYXJlbnQpe1xuICAgICAgICBpZihpc0NsdWUpe1xuICAgICAgICB0aGlzLmNsdWVCdXR0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaW50QnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNsdWVCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaW50QnV0dG9uLm5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZihwYXJlbnQgPT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLmNsdWVCdXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaW50QnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCB0YXJnZXROb2RlID0gaXNDbHVlID8gdGhpcy5jbHVlQnV0dG9uLm5vZGU6IHRoaXMuaGludEJ1dHRvbi5ub2RlO1xuICAgIH1cblxuICAgIC8vIHBsYXkgYW5pbXRpb24gYWZ0ZXIgZW5hYmxpbmcgdGhlIGJ1dHRvblxuICAgIGVuYWJsZUNsb2NrQnV0dG9uKCl7ICBcbiAgICAgICAgdGhpcy5oaW50QnV0dG9uLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcbiAgICB9XG5cblxuICAgICAvLyBkaXNhYmxlIHRoZSBidXR0b24gYW5kIGFsc28gc3RvcCB0aGUgYW5pbWF0aW9uXG4gICAgZGlzYWJsZUNsb2NrQnV0dG9uKCl7XG4gICAgICAgIHRoaXMuaGludEJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XG4gICAgICAgIHRoaXMuaGludEJ1dHRvbi5ub2RlLnNjYWxlID0gMTtcblxuICAgIH1cblxuXG4gICAgXG5cbiAgXG5cbiAgICBcblxuICBcblxuXG4gICBcbiAgICBcbiAgXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
        _this.showingAdFromGp = false;
        _this._delegate = null;
        _this.remarks = null;
        _this.comments = null;
        _this.newRecord = null;
        _this.timesUp = null;
        _this.hintLayer = null;
        _this.adButtons = null;
        _this.wantHint = null;
        _this.buttonPressed = null;
        _this.powerUpTitle = null;
        _this.powerUpCover = null;
        _this.isForClue = false;
        return _this;
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
        this.hintLayer.active = false;
        this.remarks.string = GameManager_1.GameManager.getInstance().getString('newRecord');
        // console.log("is ad present", AdManager.getInstance().isAdAvailable());
        switch (type) {
            case constants_1.END_POP_UP.CLEARD:
                this.remarks.string = GameManager_1.GameManager.getInstance().getString('congratulations');
            case constants_1.END_POP_UP.NEW_RECORD:
                this.adButtons.interactable = AdManager_1.default.getInstance().isAdAvailable();
                this.newRecord.active = true;
                break;
            case constants_1.END_POP_UP.FAILED:
                this.timesUp.active = true;
                break;
            case constants_1.END_POP_UP.FOR_CLUE:
                this.hintLayer.active = true;
                this.isForClue = true;
                this.updatePowerUpTitle();
                break;
            case constants_1.END_POP_UP.FOR_HIT:
                this.hintLayer.active = true;
                this.isForClue = false;
                this.updatePowerUpTitle();
                break;
        }
    };
    GameEnd.prototype.showAds = function () {
        if (!cc.sys.isBrowser) {
            if (!AdManager_1.default.getInstance().showInterstital(this)) {
                this.adHasbeenShown();
                console.log("no ad avilable right now");
            }
            ;
        }
    };
    GameEnd.prototype.adHasbeenShown = function () {
        if (this.isForClue) {
            var clueCount = JSON.parse(cc.sys.localStorage.getItem("clue"));
            clueCount += 1; // for now will add new once done
            cc.sys.localStorage.setItem("clue", clueCount);
        }
        else {
            var hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
            console.log("hint count before", hintCount);
            hintCount += 3; // for now will add new once done
            console.log("hint count after", hintCount);
            cc.sys.localStorage.setItem("hint", hintCount);
        }
        this.isForClue = false;
        if (this.showingAdFromGp) {
            console.log("remove ads");
            this._delegate.removeHintPopUp();
        }
        else {
            // this.adButtons.interactable = false
        }
    };
    GameEnd.prototype.watchAd = function () {
        this.showingAdFromGp = true;
        this.showAds();
    };
    GameEnd.prototype.cancelAd = function () {
        this._delegate.removeHintPopUp();
    };
    GameEnd.prototype.updatePowerUpTitle = function () {
        var key = !this.isForClue ? "noMoreHints" : "noMoreClue";
        var key2 = !this.isForClue ? "WatchAdsForHint" : "WatchAdsForClues";
        this.powerUpTitle.string = GameManager_1.GameManager.getInstance().getString(key);
        this.powerUpCover.string = GameManager_1.GameManager.getInstance().getString(key2);
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
        property(cc.Node)
    ], GameEnd.prototype, "hintLayer", void 0);
    __decorate([
        property(cc.Button)
    ], GameEnd.prototype, "adButtons", void 0);
    __decorate([
        property(cc.Button)
    ], GameEnd.prototype, "wantHint", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameEnd.prototype, "buttonPressed", void 0);
    __decorate([
        property(cc.Label)
    ], GameEnd.prototype, "powerUpTitle", void 0);
    __decorate([
        property(cc.Label)
    ], GameEnd.prototype, "powerUpCover", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L2dhbWVFbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTREO0FBQzVELHVEQUFzRDtBQUN0RCx5REFBb0Q7QUFDcEQsbURBQThDO0FBQzlDLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGO0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBZ0tDO1FBOUpHLHFCQUFlLEdBQUUsS0FBSyxDQUFDO1FBRWYsZUFBUyxHQUFHLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBSXpCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFJM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFlLElBQUksQ0FBQztRQUc3QixjQUFRLEdBQWUsSUFBSSxDQUFDO1FBSTVCLG1CQUFhLEdBQWtCLElBQUksQ0FBQztRQUtwQyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUk5QixlQUFTLEdBQWEsS0FBSyxDQUFDOztJQXNIaEMsQ0FBQztJQXJIRyx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELCtCQUFhLEdBQWIsVUFBYyxRQUFRLEVBQUUsUUFBUTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixrQ0FBa0M7SUFDdEMsQ0FBQztJQUlELDBCQUFRLEdBQVI7UUFDSSxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMs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LENBQUMsa0JBQWtCLENBQUE7UUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUkseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUkseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFHMUUsQ0FBQztJQXhKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNNO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ1E7SUFJM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNRO0lBSTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ2E7SUFLcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNXO0lBdENiLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FnSzNCO0lBQUQsY0FBQztDQWhLRCxBQWdLQyxDQWhLb0MsRUFBRSxDQUFDLFNBQVMsR0FnS2hEO2tCQWhLb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdBTUVfTU9ERSwgRU5EX1BPUF9VUCB9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlcnMvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgQWRNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2Vycy9BZE1hbmFnZXJcIjtcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVFbmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc2hvd2luZ0FkRnJvbUdwID1mYWxzZTtcblxuICAgIHByaXZhdGUgX2RlbGVnYXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcmVtYXJrczogY2MuTGFiZWwgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgY29tbWVudHMgOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5ld1JlY29yZCA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGltZXNVcCA6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGludExheWVyIDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGFkQnV0dG9ucyA6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHdhbnRIaW50IDogY2MuQnV0dG9uID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBidXR0b25QcmVzc2VkIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcG93ZXJVcFRpdGxlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcG93ZXJVcENvdmVyOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuXG4gICAgaXNGb3JDbHVlIDpib29sZWFuID0gIGZhbHNlO1xuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHNldFByb3BlcnRpZXMoZGVsZWdhdGUsIGdhbWVNb2RlICl7XG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIC8vIHRoaXMubW9kZSA9IGdhbWVNb2RlLnRvVXBwZXIoKTtcbiAgICB9XG5cblxuXG4gICAgb25BY2NlcHQoKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvblByZXNzZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUuZ2FtZUVuZGVkKCk7XG5cbiAgICB9XG5cbiAgICBvblBsYXlBZ2FpbiAoKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmJ1dHRvblByZXNzZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUub25QbGF5QWdhaW4oKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpe1xuICAgICAgICBTb3VuZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KHRoaXMuYnV0dG9uUHJlc3NlZCwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5vblBsYXlBZ2FpbkNhbmNlbCgpO1xuICAgIH1cblxuICAgIHNob3dQb3BVcEZvcih0eXBlIDogRU5EX1BPUF9VUCwgbGV2ZWwpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5uZXdSZWNvcmQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZXNVcC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaW50TGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVtYXJrcy5zdHJpbmcgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0cmluZygnbmV3UmVjb3JkJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXMgYWQgcHJlc2VudFwiLCBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pc0FkQXZhaWxhYmxlKCkpO1xuICAgICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgICAgICBjYXNlIEVORF9QT1BfVVAuQ0xFQVJEOiBcbiAgICAgICAgICAgICAgICAgdGhpcy5yZW1hcmtzLnN0cmluZyA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RyaW5nKCdjb25ncmF0dWxhdGlvbnMnKTtcbiAgICAgICAgICAgIGNhc2UgRU5EX1BPUF9VUC5ORVdfUkVDT1JEOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRCdXR0b25zLmludGVyYWN0YWJsZSA9IEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmlzQWRBdmFpbGFibGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1JlY29yZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBFTkRfUE9QX1VQLkZBSUxFRDpcbiAgICAgICAgICAgICAgICAgdGhpcy50aW1lc1VwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFTkRfUE9QX1VQLkZPUl9DTFVFOlxuICAgICAgICAgICAgICB0aGlzLmhpbnRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLmlzRm9yQ2x1ZSA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlUG93ZXJVcFRpdGxlKClcbiAgICAgICAgICAgICAgYnJlYWs7ICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgRU5EX1BPUF9VUC5GT1JfSElUOlxuICAgICAgICAgICAgICAgdGhpcy5oaW50TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgIHRoaXMuaXNGb3JDbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvd2VyVXBUaXRsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgc2hvd0Fkcygpe1xuICAgICAgICBpZighY2Muc3lzLmlzQnJvd3Nlcil7XG4gICAgICAgICAgICBpZighQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2hvd0ludGVyc3RpdGFsKHRoaXMpKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFkSGFzYmVlblNob3duKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBhZCBhdmlsYWJsZSByaWdodCBub3dcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRIYXNiZWVuU2hvd24oKXtcbiAgICAgICAgaWYoICB0aGlzLmlzRm9yQ2x1ZSl7XG4gICAgICAgICAgICBsZXQgIGNsdWVDb3VudCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2x1ZVwiKSk7XG4gICAgICAgICAgICBjbHVlQ291bnQgKz0xOyAvLyBmb3Igbm93IHdpbGwgYWRkIG5ldyBvbmNlIGRvbmVcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNsdWVcIiwgY2x1ZUNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0ICBoaW50Q291bnQgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpbnRcIikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaW50IGNvdW50IGJlZm9yZVwiLCBoaW50Q291bnQpO1xuICAgICAgICAgICAgaGludENvdW50ICs9MzsgLy8gZm9yIG5vdyB3aWxsIGFkZCBuZXcgb25jZSBkb25lXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpbnQgY291bnQgYWZ0ZXJcIiwgaGludENvdW50KTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpbnRcIiwgaGludENvdW50KTtcbiAgICAgICAgfVxuICAgIFxuXG4gICAgICAgIHRoaXMuaXNGb3JDbHVlID0gZmFsc2U7XG4gICAgICAgIGlmKCB0aGlzLnNob3dpbmdBZEZyb21HcCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZSBhZHNcIik7XG4gICAgICAgICAgICAgdGhpcy5fZGVsZWdhdGUucmVtb3ZlSGludFBvcFVwKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy8gdGhpcy5hZEJ1dHRvbnMuaW50ZXJhY3RhYmxlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cblxuXG4gICAgd2F0Y2hBZCgpe1xuICAgICAgICB0aGlzLnNob3dpbmdBZEZyb21HcCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd0FkcygpO1xuICAgICAgIFxuICAgIH1cblxuXG4gICAgY2FuY2VsQWQoKXtcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUucmVtb3ZlSGludFBvcFVwKCk7XG4gICAgfVxuICBcblxuICAgIHVwZGF0ZVBvd2VyVXBUaXRsZSgpe1xuICAgICAgICBsZXQga2V5ID0gIXRoaXMuaXNGb3JDbHVlPyBcIm5vTW9yZUhpbnRzXCIgOiBcIm5vTW9yZUNsdWVcIiBcbiAgICAgICAgbGV0IGtleTIgPSAhdGhpcy5pc0ZvckNsdWU/IFwiV2F0Y2hBZHNGb3JIaW50XCIgOiBcIldhdGNoQWRzRm9yQ2x1ZXNcIlxuICAgICAgICB0aGlzLnBvd2VyVXBUaXRsZS5zdHJpbmcgPSAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdHJpbmcoa2V5KTtcbiAgICAgICAgdGhpcy5wb3dlclVwQ292ZXIuc3RyaW5nID0gIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RyaW5nKGtleTIpO1xuXG5cbiAgICB9XG5cbn1cbiJdfQ==
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
                    var __filename = 'preview-scripts/assets/scripts/gameplay/tutorials.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5cdepIQH5PSpwNpwXvLSJg', 'tutorials');
// scripts/gameplay/tutorials.ts

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
var Tutorial = /** @class */ (function (_super) {
    __extends(Tutorial, _super);
    function Tutorial() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.button = null;
        _this.accept = null;
        _this.bgSpriteFrame = null;
        _this.bg = null;
        _this.timePu = null;
        _this.flipPu = null;
        _this.audioClip = null;
        _this.tutorialTexts = [];
        _this.slideIndex = 0;
        _this.delegate = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Tutorial.prototype.start = function () {
    };
    Tutorial.prototype.showMemoriseTime = function (time) {
        this.tutorialTexts = GameManager_1.GameManager.getInstance().getString("tutorials");
        console.log("tutorial text length is ", this.tutorialTexts);
        var string = this.tutorialTexts[this.slideIndex]["slide" + (this.slideIndex + 1)];
        this.content.string = string.replace("%s", time);
    };
    Tutorial.prototype.onAccept = function () {
        SoundManager_1.default.getInstance().playEffect(this.audioClip, false);
        this.moveToNextSlide();
    };
    Tutorial.prototype.setDelegate = function (delegate) {
        this.delegate = delegate;
    };
    Tutorial.prototype.moveToNextSlide = function () {
        switch (this.slideIndex) {
            case 0:
                this.node.active = false;
                this.slideIndex++;
                this.delegate.startGame();
                return;
            case 1:
                break;
            case 2:
                this.showPowerUp();
                this.delegate.moveTudHandsOnHints(true);
                break;
            case 3:
                this.showPowerUp();
                this.delegate.moveTudHandsOnHints(false);
                this.updateUI();
                break;
            default:
                this.delegate.showGameInstructionPopUp();
                this.node.removeFromParent(true);
                return;
        }
        this.updateTutorialText();
        this.slideIndex++;
    };
    Tutorial.prototype.updateUI = function () {
        this.bg.spriteFrame = this.bgSpriteFrame;
        this.button.node.active = true;
        this.accept.node.active = false;
    };
    Tutorial.prototype.updateTutorialText = function () {
        console.log("slide index", this.slideIndex);
        this.content.string = this.tutorialTexts[this.slideIndex]["slide" + (this.slideIndex + 1)];
    };
    Tutorial.prototype.showTutorials = function () {
    };
    Tutorial.prototype.showPowerUp = function () {
        if (this.slideIndex == 2) {
            this.timePu.active = false;
            this.flipPu.active = true;
        }
        else {
            this.timePu.active = true;
            this.flipPu.active = false;
        }
    };
    __decorate([
        property(cc.Label)
    ], Tutorial.prototype, "content", void 0);
    __decorate([
        property(cc.Button)
    ], Tutorial.prototype, "button", void 0);
    __decorate([
        property(cc.Button)
    ], Tutorial.prototype, "accept", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Tutorial.prototype, "bgSpriteFrame", void 0);
    __decorate([
        property(cc.Sprite)
    ], Tutorial.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], Tutorial.prototype, "timePu", void 0);
    __decorate([
        property(cc.Node)
    ], Tutorial.prototype, "flipPu", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Tutorial.prototype, "audioClip", void 0);
    Tutorial = __decorate([
        ccclass
    ], Tutorial);
    return Tutorial;
}(cc.Component));
exports.default = Tutorial;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVwbGF5L3R1dG9yaWFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix1REFBc0Q7QUFDdEQseURBQW9EO0FBRTlDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBSTFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUhDO1FBbEhHLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFJMUIsWUFBTSxHQUFlLElBQUksQ0FBQztRQUcxQixZQUFNLEdBQWUsSUFBSSxDQUFDO1FBSTFCLG1CQUFhLEdBQW9CLElBQUksQ0FBQztRQUl0QyxRQUFFLEdBQWUsSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixtQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixnQkFBVSxHQUFZLENBQUMsQ0FBQztRQUN4QixjQUFRLEdBQWtCLElBQUksQ0FBQzs7UUFxRi9CLGlCQUFpQjtJQUNyQixDQUFDO0lBbkZHLHdCQUF3QjtJQUV4QixlQUFlO0lBQ2Qsd0JBQUssR0FBTDtJQUNELENBQUM7SUFDRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxh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QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ007SUFJMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDYTtJQUl0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNFO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNRO0lBM0JkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxSDVCO0lBQUQsZUFBQztDQXJIRCxBQXFIQyxDQXJIcUMsRUFBRSxDQUFDLFNBQVMsR0FxSGpEO2tCQXJIb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlcnMvU291bmRNYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdXRvcmlhbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgY29udGVudCA6IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidXR0b24gOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBhY2NlcHQgOiBjYy5CdXR0b24gPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgYmdTcHJpdGVGcmFtZSA6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBiZyA6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aW1lUHUgOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZsaXBQdTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGF1ZGlvQ2xpcDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHR1dG9yaWFsVGV4dHMgOiBzdHJpbmdbXSA9W107XG4gICAgc2xpZGVJbmRleCA6IG51bWJlciA9IDA7XG4gICAgZGVsZWdhdGUgOiBjYy5Db21wb25lbnQgPSBudWxsO1xuICAgIFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICAgc3RhcnQgKCkge1xuICAgIH1cbiAgICBzaG93TWVtb3Jpc2VUaW1lKHRpbWUpe1xuICAgICAgICB0aGlzLnR1dG9yaWFsVGV4dHMgPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0cmluZyhcInR1dG9yaWFsc1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0dXRvcmlhbCB0ZXh0IGxlbmd0aCBpcyBcIiwgdGhpcy50dXRvcmlhbFRleHRzKTtcbiAgICAgICAgbGV0IHN0cmluZyA9IHRoaXMudHV0b3JpYWxUZXh0c1t0aGlzLnNsaWRlSW5kZXhdW2BzbGlkZSR7dGhpcy5zbGlkZUluZGV4ICsgMX1gXTtcbiAgICAgICAgdGhpcy5jb250ZW50LnN0cmluZyA9IHN0cmluZy5yZXBsYWNlKFwiJXNcIiwgdGltZSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBvbkFjY2VwdCAoKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdCh0aGlzLmF1ZGlvQ2xpcCwgZmFsc2UpO1xuICAgICAgICB0aGlzLm1vdmVUb05leHRTbGlkZSgpO1xuICAgIH1cbiAgICBzZXREZWxlZ2F0ZShkZWxlZ2F0ZSA6IGNjLkNvbXBvbmVudCl7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICB9XG4gICAgbW92ZVRvTmV4dFNsaWRlKCl7XG4gICAgICAgIHN3aXRjaCh0aGlzLnNsaWRlSW5kZXgpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlSW5kZXgrKyA7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG93ZXJVcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUubW92ZVR1ZEhhbmRzT25IaW50cyh0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Bvd2VyVXAoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlLm1vdmVUdWRIYW5kc09uSGludHMoZmFsc2UpOyBcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zaG93R2FtZUluc3RydWN0aW9uUG9wVXAoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZVR1dG9yaWFsVGV4dCgpO1xuICAgICAgICB0aGlzLnNsaWRlSW5kZXgrKyA7XG5cbiAgICBcbiAgICB9XG4gICAgdXBkYXRlVUkoKXtcbiAgICAgICAgdGhpcy5iZy5zcHJpdGVGcmFtZSA9IHRoaXMuYmdTcHJpdGVGcmFtZTtcbiAgICAgICAgdGhpcy5idXR0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjY2VwdC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIFxuICAgIH1cbiAgICB1cGRhdGVUdXRvcmlhbFRleHQoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzbGlkZSBpbmRleFwiLHRoaXMuc2xpZGVJbmRleCApO1xuICAgICAgICB0aGlzLmNvbnRlbnQuc3RyaW5nID0gdGhpcy50dXRvcmlhbFRleHRzW3RoaXMuc2xpZGVJbmRleF1bYHNsaWRlJHt0aGlzLnNsaWRlSW5kZXggKyAxfWBdO1xuICAgIH1cblxuICAgIHNob3dUdXRvcmlhbHMoKXtcblxuICAgIH1cbiAgICBzaG93UG93ZXJVcCgpe1xuICAgICAgICBpZih0aGlzLnNsaWRlSW5kZXggPT0gMil7XG4gICAgICAgICAgICB0aGlzLnRpbWVQdS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZmxpcFB1LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy50aW1lUHUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZmxpcFB1LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIFxuXG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/managers/NetworkConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9dd169kwUdBqYmj9fYp8OWL', 'NetworkConfig');
// scripts/managers/NetworkConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_ADDRESS = exports.REQUEST_TYPE = exports.DEPLOYMENT_MODE = exports.API_END_POINTS = void 0;
exports.API_END_POINTS = {
    GET_TIME: "api/json/est/now"
};
var DEPLOYMENT_MODE;
(function (DEPLOYMENT_MODE) {
    DEPLOYMENT_MODE[DEPLOYMENT_MODE["LOCAL"] = 0] = "LOCAL";
    DEPLOYMENT_MODE[DEPLOYMENT_MODE["DEVELOPMENT"] = 1] = "DEVELOPMENT";
    DEPLOYMENT_MODE[DEPLOYMENT_MODE["STAGING"] = 2] = "STAGING";
    DEPLOYMENT_MODE[DEPLOYMENT_MODE["PRODUCTION"] = 3] = "PRODUCTION";
})(DEPLOYMENT_MODE = exports.DEPLOYMENT_MODE || (exports.DEPLOYMENT_MODE = {}));
exports.REQUEST_TYPE = {
    GET: "get",
    POST: "post",
    PUT: "put"
};
exports.BASE_ADDRESS = "http://worldclockapi.com/";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXJzL05ldHdvcmtDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2EsUUFBQSxjQUFjLEdBQUc7SUFDN0IsUUFBUSxFQUFHLGtCQUFrQjtDQUU3QixDQUFBO0FBRUQsSUFBa0IsZUFLakI7QUFMRCxXQUFrQixlQUFlO0lBQzdCLHVEQUFTLENBQUE7SUFDVCxtRUFBVyxDQUFBO0lBQ1gsMkRBQU8sQ0FBQTtJQUNQLGlFQUFVLENBQUE7QUFDZCxDQUFDLEVBTGlCLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBS2hDO0FBR1ksUUFBQSxZQUFZLEdBQUc7SUFDeEIsR0FBRyxFQUFHLEtBQUs7SUFDWCxJQUFJLEVBQUUsTUFBTTtJQUNaLEdBQUcsRUFBRyxLQUFLO0NBQ2QsQ0FBQTtBQUVZLFFBQUEsWUFBWSxHQUFHLDJCQUEyQixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgQVBJX0VORF9QT0lOVFMgPSB7XG4gR0VUX1RJTUUgOiBcImFwaS9qc29uL2VzdC9ub3dcIlxuXG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIERFUExPWU1FTlRfTU9ERSAge1xuICAgIExPQ0FMID0gMCxcbiAgICBERVZFTE9QTUVOVCxcbiAgICBTVEFHSU5HLFxuICAgIFBST0RVQ1RJT04sXG59XG5cblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVFlQRSA9IHtcbiAgICBHRVQgOiBcImdldFwiLFxuICAgIFBPU1Q6IFwicG9zdFwiLFxuICAgIFBVVCA6IFwicHV0XCJcbn1cblxuZXhwb3J0IGNvbnN0IEJBU0VfQUREUkVTUz0gIFwiaHR0cDovL3dvcmxkY2xvY2thcGkuY29tL1wiXG5cbiJdfQ==
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
        this._currentDate = null;
        this.screen = [];
    }
    GameManager.getInstance = function () {
        if (!GameManager._instance) {
            GameManager._instance = new GameManager();
        }
        return GameManager._instance;
    };
    GameManager.prototype.setCurrentDate = function (date) {
        this._currentDate = date;
    };
    GameManager.prototype.getCurrentDate = function () {
        return this._currentDate;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXJzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUErQztBQUU5QztJQUFBO1FBRVcsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFckIsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQXNNdkIsQ0FBQztJQXBNVSx1QkFBVyxHQUFsQjtRQUNJLElBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFDO1lBQ3ZCLFdBQVcsQ0FBRSxTQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUM3QztRQUNELE9BQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDOUIsSUFBRyxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUNuQixPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQy9CO2lCQUFLO2dCQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFVBQVMs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LFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUV4RSxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLENBQUMsYUFBYSxHQUFJLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNJLE9BQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQWUsR0FBZixVQUFnQixLQUFLO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBSztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRiw4QkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRixvQ0FBYyxHQUFkO1FBQ0ssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUEvTWMscUJBQVMsR0FBRyxJQUFJLENBQUM7SUFnTnJDLGtCQUFDO0NBak5BLEFBaU5BLElBQUE7QUFqTmEsa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHQU1FX01PREV9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCI7XG5cbiBleHBvcnQgY2xhc3MgR2FtZU1hbmFnZXJ7XG4gICAgcHJpdmF0ZSBzdGF0aWMgIF9pbnN0YW5jZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZ2FtZUNvbmZpZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbGV2ZWxzRGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbGV2ZWxJbWFnZXMgPSBudWxsO1xuICAgIHByaXZhdGUgX2N1cnJlbnRTZWxlY3RMYW5ndWFnZSA9IFwiRU5cIjsgXG4gICAgcHJpdmF0ZSBfbGFuZ3VhZ2VEYXRhID0gbnVsbDtcbiAgICBwcml2YXRlIF9zZWxlY3RlZE1vZGUgPSBHQU1FX01PREUuUFJBQ1RJQ0U7XG4gICAgcHJpdmF0ZSBfY3VycmVudExldmVsID0gMDtcbiAgICBwcml2YXRlIF9jdXJyZW50RGF0ZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgc2NyZWVuID0gW107XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcbiAgICAgICAgaWYoIUdhbWVNYW5hZ2VyLl9pbnN0YW5jZSl7XG4gICAgICAgICAgIEdhbWVNYW5hZ2VyLiBfaW5zdGFuY2UgPSBuZXcgR2FtZU1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gR2FtZU1hbmFnZXIuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnREYXRlKGRhdGUpe1xuICAgICAgICB0aGlzLl9jdXJyZW50RGF0ZSA9IGRhdGU7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudERhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnREYXRlO1xuICAgIH1cblxuICAgIGxvYWRHYW1lQ29uZmlnKCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XG4gICAgICAgICAgICBpZih0YXJnZXQuX2dhbWVDb25maWcpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRhcmdldC5fZ2FtZUNvbmZpZyk7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJHYW1lTW9kZS9nYW1lQ29uZmlnXCIsIGZ1bmN0aW9uKGVycm9yLCBsZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIGxvYWRpbmcganNvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Ll9nYW1lQ29uZmlnICAgICAgICA9ICAgbGV2ZWxbXCJqc29uXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkYXRhIGxvYWRkZWRcIiwgdGFyZ2V0Ll9nYW1lQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0Ll9nYW1lQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgbG9hZExldmVscyAoKXtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT4ge1xuICAgICAgICAgICAgaWYodGFyZ2V0Ll9sZXZlbHNEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0YXJnZXQuX2xldmVsc0RhdGEpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwiTGV2ZWxzL2xldmVsc1wiLCBmdW5jdGlvbihlcnJvciwgbGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB3aGlsZSBsb2FkaW5nIGpzb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5fbGV2ZWxzRGF0YSAgICAgICAgPSAgIGxldmVsW1wianNvblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YSBsb2FkZGVkXCIsIHRhcmdldC5fbGV2ZWxzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRhcmdldC5fbGV2ZWxzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGxvYWRMYW5hZ3VnZSgpe1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xhbmd1YWdlRGF0YSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fbGFuZ3VhZ2VEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJMYW5ndWFnZXNcIiAsIGNjLkpzb25Bc3NldCwgKGVycjogRXJyb3IsIGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFwibGFuZ2F1Z2UgZGF0YSBlcnJvciA6XCIgKyBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhbmd1YWdlRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxhbmdhdWdlIGRhdGFcIiwgdGhpcy5fbGFuZ3VhZ2VEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBkYXRhIGlzIGluIGZvcm0gICx0aGlzLl9sZXZlbEltYWdlcyA9IHtsZXZlbCBbaW1hZ2VzXX1cbiAgICBsb2FkTGV2ZWxJbWFnZXMoIGxldmVsTm8pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xldmVsSW1hZ2VzICYmIHRoaXMuX2xldmVsSW1hZ2VzLm1vZGUgJiYgdGhpcy5fbGV2ZWxJbWFnZXMubW9kZS5sZXZlbFtsZXZlbE5vXSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fbGV2ZWxJbWFnZXMubGV2ZWxbbGV2ZWxOb10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihgTGV2ZWxzL0ltYWdlcy9MRVZFTCR7bGV2ZWxObyArIDF9YCAsIGNjLlNwcml0ZUZyYW1lLCAoZXJyOiBFcnJvciwgZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJsb2FkTGV2ZWxJbWFnZXMgOlwiICsgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5fbGV2ZWxJbWFnZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xldmVsSW1hZ2VzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGV2ZWxJbWFnZXMubGV2ZWwgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGV2ZWxJbWFnZXMubGV2ZWxbbGV2ZWxOb10gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxldmVsIGltYWdlc1wiLCB0aGlzLl9sZXZlbEltYWdlcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9sZXZlbEltYWdlcy5sZXZlbFtsZXZlbE5vXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFNwcml0ZUZyYW1lKG1vZGUsIGxldmVsTm8sIG5hbWUpIHtcbiAgICAgICAgaWYodGhpcy5fbGV2ZWxJbWFnZXMpe1xuICAgICAgICAgICAgbGV0IGltYWdlcyA9IHRoaXMuX2xldmVsSW1hZ2VzLmxldmVsW2xldmVsTm9dO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbWFnZXNcIixpbWFnZXMgKTtcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gaW1hZ2VzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT0gbmFtZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwcml0ZUZyYW1lc1wiLHNwcml0ZUZyYW1lLCBuYW1lICk7XG4gICAgICAgICAgICByZXR1cm4gc3ByaXRlRnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0R2FtZUNvbmZpZ3VyYXRpb24oKXtcbiAgICAgICAgaWYodGhpcy5fZ2FtZUNvbmZpZyl7ICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nYW1lQ29uZmlnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1vZGVzSW5mbyAoKSB7XG4gICAgICAgIGlmKHRoaXMuX2dhbWVDb25maWcpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVDb25maWdbXCJnYW1lTW9kZVwiXTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0TW9kZUluZm8gKG1vZGVOYW1lKSB7XG4gICAgICAgIGlmKHRoaXMuX2dhbWVDb25maWcpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVDb25maWdbXCJnYW1lTW9kZVwiXS5maW5kKG1vZGUgPT4gbW9kZS5rZXkgPT0gbW9kZU5hbWUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRMZXZlbEluZm8oKXtcbiAgICAgICAgaWYodGhpcy5fbGV2ZWxzRGF0YSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGV2ZWxzRGF0YVtcImxldmVsc1wiXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExldmVsRGF0YShsZXZlbE5vOiBudW1iZXIpe1xuICAgICAgICBpZih0aGlzLl9sZXZlbHNEYXRhKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sZXZlbHNEYXRhW1wibGV2ZWxzXCJdW2xldmVsTm9dO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpc0ltYWdlc0xvYWRlZCAoKSA6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbHNEYXRhPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0U3RyaW5nKGtleTpzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZih0aGlzLl9sYW5ndWFnZURhdGEpe1xuICAgICAgICAgICAgbGV0IGxhbmd1YWdlID0gdGhpcy5fbGFuZ3VhZ2VEYXRhLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT0gdGhpcy5fY3VycmVudFNlbGVjdExhbmd1YWdlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5XCIsIGtleSwgbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlLmpzb25ba2V5XTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUN1cnJlbnRMYW5ndWFnZSgpe1xuICAgICAgIFxuICAgICAgICB0aGlzLl9jdXJyZW50U2VsZWN0TGFuZ3VhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMYW5ndWFnZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2UgY3VycmVudCBMYW5ndWFnZVwiLCB0aGlzLl9jdXJyZW50U2VsZWN0TGFuZ3VhZ2UpO1xuXG4gICAgfVxuXG4gICAgc2V0R2FtZU1vZGUobW9kZSl7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkTW9kZSAgPSBtb2RlO1xuICAgIH1cbiAgICBcbiAgICBnZXRTZWxlY3RlZE1vZGUoKXtcbiAgICAgICAgcmV0dXJuICB0aGlzLl9zZWxlY3RlZE1vZGU7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudExldmVsKGxldmVsKXtcbiAgICAgdGhpcy5fY3VycmVudExldmVsID0gbGV2ZWw7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudExldmVsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGV2ZWw7XG4gICAgfVxuXG4gICAgcHVzaFNjZW5lKHNjZW5lKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwic2NuZWVcIiwgc2NlbmUpO1xuICAgICAgICAgdGhpcy5zY3JlZW4ucHVzaChzY2VuZSk7XG4gICAgIH1cblxuICAgIHBvcFNjZW5lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcmVlbi5wb3AoKTtcbiAgICAgfVxuXG4gICAgcmVtb3ZlQWxsU2NlbmUoKXtcbiAgICAgICAgIHRoaXMuc2NyZWVuLmxlbmd0aCA9IDA7XG4gICAgIH1cbn0iXX0=
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
        // console.log("play music", this._musicClip);
        cc.audioEngine.playMusic(this._musicClip, loop);
        cc.audioEngine.setMusicVolume(0.6);
    };
    SoundManager.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    SoundManager.prototype.playEffect = function (clipName, loop) {
        // console.log("play clip",cc.sys.localStorage.getItem("Sound"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXJzL1NvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7UUFHSSxlQUFVLEdBQWtCLElBQUksQ0FBQztJQXVDckMsQ0FBQztJQXRDVSx3QkFBVyxHQUFsQjtRQUNJLElBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUM5QztRQUNELE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLFNBQVM7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLElBQVk7UUFDbEIsOENBQThDO1FBQzdDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFeEMsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRS9CLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsUUFBUSxFQUFFLElBQUk7UUFDckIsaUVBQWlFO1FBQ2pFLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQztZQUNoRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ25ELE9BQU8sT0FBTyxDQUFDO1NBRWxCO0lBRUwsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRXBDLENBQUM7SUFFTCxtQkFBQztBQUFELENBMUNBLEFBMENDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZE1hbmFnZXJ7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2UgOiAgIFNvdW5kTWFuYWdlcjsgXG4gICBcbiAgICBfbXVzaWNDbGlwIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSA6IFNvdW5kTWFuYWdlciB7XG4gICAgICAgIGlmKCFTb3VuZE1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZSA9IG5ldyBTb3VuZE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU291bmRNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGluaXQobXVzaWNDbGlwKXtcbiAgICAgICAgdGhpcy5fbXVzaWNDbGlwID0gbXVzaWNDbGlwO1xuICAgIH1cblxuICAgIHBsYXlNdXNpYyhsb29wOmJvb2xlYW4pe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXkgbXVzaWNcIiwgdGhpcy5fbXVzaWNDbGlwKTtcbiAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLl9tdXNpY0NsaXAsIGxvb3ApO1xuICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMC42KTtcbiAgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBzdG9wTXVzaWMoKXtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgXG4gICAgfVxuXG4gICAgcGxheUVmZmVjdChjbGlwTmFtZSwgbG9vcCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheSBjbGlwXCIsY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU291bmRcIikpO1xuICAgICAgICBpZihKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlNvdW5kXCIpKSl7XG4gICAgICAgICAgICB2YXIgYXVkaW9ObyA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcE5hbWUsIGxvb3AsMSlcbiAgICAgICAgICAgIHJldHVybiBhdWRpb05vO1xuICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG4gICAgc3RvcEFsbFNvdW5kcygpe1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xuICAgICAgIFxuICAgIH0gIFxuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/laoding/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed177eoNkpED4Zbz+u0qGg4', 'Loading');
// scripts/laoding/Loading.ts

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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var GameManager_1 = require("../managers/GameManager");
var NetworkManager_1 = require("../managers/NetworkManager");
var NetworkConfig_1 = require("../managers/NetworkConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.start = function () {
        var _this = this;
        NetworkManager_1.NetworkManager.getInstance().init();
        if (!cc.sys.localStorage.getItem("hasLaunchedBeforev2")) {
            cc.sys.localStorage.clear();
            cc.sys.localStorage.setItem("hasLaunchedBeforev2", true);
        }
        if (!cc.sys.localStorage.getItem("Language")) {
            cc.sys.localStorage.setItem("Language", "ES");
        }
        if (!cc.sys.localStorage.getItem("hasTermAccepted")) {
            cc.sys.localStorage.setItem("hasTermAccepted", false);
        }
        if (!cc.sys.localStorage.getItem("lastPlayedLevel")) {
            cc.sys.localStorage.setItem("lastPlayedLevel", 0);
        }
        if (!cc.sys.localStorage.getItem("hint")) {
            cc.sys.localStorage.setItem("hint", 3);
        }
        if (!cc.sys.localStorage.getItem("clue")) {
            cc.sys.localStorage.setItem("clue", 3);
        }
        if (!cc.sys.localStorage.getItem("lastTenSeconds")) {
            cc.sys.localStorage.setItem("lastTenSeconds", false);
        }
        if (!cc.sys.localStorage.getItem("rewardClaimDate")) {
            cc.sys.localStorage.setItem("rewardClaimDate", new Date(98, 1, 1).toDateString());
        }
        cc.debug.setDisplayStats(false);
        console.log("isonline", cc.sys.getNetworkType());
        if (cc.sys.getNetworkType() == cc.sys.NetworkType.LAN || cc.sys.getNetworkType() == cc.sys.NetworkType.WWAN) {
            NetworkManager_1.NetworkManager.getInstance().sendRequest(NetworkConfig_1.API_END_POINTS.GET_TIME, NetworkConfig_1.REQUEST_TYPE.GET, {}, function (data, error) {
                if (data) {
                    var parseData = JSON.parse(data);
                    var date = parseData.currentDateTime;
                    var day = date.split("T")[0];
                    GameManager_1.GameManager.getInstance().setCurrentDate(day);
                }
                console.log("isonline data", data);
                _this.startLoading();
            }, function (error, data) {
                console.log("isonline error", error, data);
                GameManager_1.GameManager.getInstance().setCurrentDate(cc.sys.localStorage.getItem("rewardClaimDate"));
                _this.startLoading();
            }, true);
        }
        else {
            console.log("new network saving local time");
            GameManager_1.GameManager.getInstance().setCurrentDate(cc.sys.localStorage.getItem("rewardClaimDate"));
            this.startLoading();
        }
    };
    Loading.prototype.startLoading = function () {
        GameManager_1.GameManager.getInstance().loadGameConfig()
            .then(function () { return GameManager_1.GameManager.getInstance().loadLevels(); })
            .then(function () { return GameManager_1.GameManager.getInstance().loadLanaguge(); })
            .then(function () {
            GameManager_1.GameManager.getInstance().changeCurrentLanguage();
            return GameManager_1.GameManager.getInstance().loadLevelImages(JSON.parse(cc.sys.localStorage.getItem("lastPlayedLevel")));
        })
            .then(function () {
            console.log("Data has been loaded");
            cc.director.loadScene('home');
        })
            .catch(function (error) { return console.error("Error while loading resources", error); });
    };
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xhb2RpbmcvTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjtBQUNsRix1REFBc0Q7QUFDdEQsNkRBQTREO0FBQzVELDJEQUF5RTtBQUNuRSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDs7SUEwRkEsQ0FBQztJQXZGRSx1QkFBSyxHQUFMO1FBQUEsaUJBcUVDO1FBcEVBLCtCQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEMsSUFBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFDO1lBQ25ELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUMzRDtRQUdELElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDNUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBQztZQUNqRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsS0FB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QixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBMEYzQjtJQUFELGNBQUM7Q0ExRkQsQUEwRkMsQ0ExRm9DLEVBQUUsQ0FBQyxTQUFTLEdBMEZoRDtrQkExRm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbmltcG9ydCB7IEdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXJzL0dhbWVNYW5hZ2VyXCI7XG5pbXBvcnQgeyBOZXR3b3JrTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2Vycy9OZXR3b3JrTWFuYWdlclwiO1xuaW1wb3J0IHsgQVBJX0VORF9QT0lOVFMsIFJFUVVFU1RfVFlQRSB9IGZyb20gXCIuLi9tYW5hZ2Vycy9OZXR3b3JrQ29uZmlnXCI7XG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgIHN0YXJ0KCl7XG4gICAgTmV0d29ya01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pbml0KCk7XG4gICAgaWYoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhhc0xhdW5jaGVkQmVmb3JldjJcIikpe1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGFzTGF1bmNoZWRCZWZvcmV2MlwiLCB0cnVlKVxuICAgICAgfVxuICBcbiAgXG4gICAgICBpZiAoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxhbmd1YWdlXCIpKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkxhbmd1YWdlXCIsIFwiRVNcIik7XG4gICAgICB9ICBcbiAgXG4gICAgICBpZighY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGFzVGVybUFjY2VwdGVkXCIpKXtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGFzVGVybUFjY2VwdGVkXCIsIGZhbHNlKTtcbiAgICAgIH1cbiAgXG4gIFxuICAgICAgaWYoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3RQbGF5ZWRMZXZlbFwiKSl7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhc3RQbGF5ZWRMZXZlbFwiLCAwKTtcbiAgICAgIH1cbiAgXG4gIFxuICAgICAgaWYoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpbnRcIikpe1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaW50XCIsIDMpO1xuICAgICAgfVxuXG5cbiAgICAgIGlmKCFjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbHVlXCIpKXtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2x1ZVwiLCAzKTtcbiAgICAgIH1cblxuICAgICAgaWYoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3RUZW5TZWNvbmRzXCIpKXtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdFRlblNlY29uZHNcIiwgZmFsc2UpO1xuICAgICAgfVxuXG5cbiAgICAgIGlmKCFjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZXdhcmRDbGFpbURhdGVcIikpe1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZXdhcmRDbGFpbURhdGVcIiwgbmV3IERhdGUoOTgsMSwxKS50b0RhdGVTdHJpbmcoKSk7XG4gICAgICB9XG5cbiAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG4gICAgICBcblxuICAgICAgY29uc29sZS5sb2coXCJpc29ubGluZVwiLCBjYy5zeXMuZ2V0TmV0d29ya1R5cGUoKSk7XG4gICAgICBpZiAoY2Muc3lzLmdldE5ldHdvcmtUeXBlKCkgPT0gY2Muc3lzLk5ldHdvcmtUeXBlLkxBTiB8fCBjYy5zeXMuZ2V0TmV0d29ya1R5cGUoKSA9PSBjYy5zeXMuTmV0d29ya1R5cGUuV1dBTikge1xuICAgICAgICBOZXR3b3JrTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNlbmRSZXF1ZXN0KEFQSV9FTkRfUE9JTlRTLkdFVF9USU1FLCBcbiAgICAgICAgICBSRVFVRVNUX1RZUEUuR0VULCB7fSxcbiAgICAgICAgICAoZGF0YSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgICAgICAgbGV0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgIGxldCBkYXRlID0gcGFyc2VEYXRhLmN1cnJlbnREYXRlVGltZTtcbiAgICAgICAgICAgICAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCJUXCIpWzBdO1xuICAgICAgICAgICAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldEN1cnJlbnREYXRlKGRheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzb25saW5lIGRhdGFcIiwgZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TG9hZGluZygpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycm9yLCBkYXRhKSA9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNvbmxpbmUgZXJyb3JcIiwgZXJyb3IsIGRhdGEpO1xuICAgICAgICAgICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZXRDdXJyZW50RGF0ZSggY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmV3YXJkQ2xhaW1EYXRlXCIpKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMb2FkaW5nKCk7XG4gICAgICAgICAgfSx0cnVlKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyBuZXR3b3JrIHNhdmluZyBsb2NhbCB0aW1lXCIpO1xuICAgICAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldEN1cnJlbnREYXRlKCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZXdhcmRDbGFpbURhdGVcIikpO1xuICAgICAgICB0aGlzLnN0YXJ0TG9hZGluZygpO1xuICAgICAgfVxuICAgIFxuICAgICBcbiAgIH1cblxuICAgc3RhcnRMb2FkaW5nKCl7XG4gICAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5sb2FkR2FtZUNvbmZpZygpXG4gICAgLnRoZW4oKCk9PiAgR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5sb2FkTGV2ZWxzKCkpXG4gICAgLnRoZW4oKCk9PiBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmxvYWRMYW5hZ3VnZSgpKVxuICAgIC50aGVuKCgpPT57XG4gICAgICBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoYW5nZUN1cnJlbnRMYW5ndWFnZSgpO1xuICAgICAgcmV0dXJuIEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkubG9hZExldmVsSW1hZ2VzKEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdFBsYXllZExldmVsXCIpKSk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7Y29uc29sZS5sb2coXCJEYXRhIGhhcyBiZWVuIGxvYWRlZFwiKVxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lJyk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKT0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSBsb2FkaW5nIHJlc291cmNlc1wiLCBlcnJvcikpO1xuICAgfVxuXG5cbiAgIFxufVxuIl19
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
            return true;
        }
        else {
            console.log("chacheing add");
            sdkbox.PluginAdMob.cache('gameover');
            return false;
        }
    };
    AdManager.prototype.isAdAvailable = function () {
        if (sdkbox.PluginAdMob.isAvailable('gameover')) {
            return true;
        }
        else {
            sdkbox.PluginAdMob.cache('gameover');
            return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXJzL0FkTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFxRkEsQ0FBQztrQkFyRm9CLFNBQVM7SUFLWixxQkFBVyxHQUF6QjtRQUNJLElBQUcsQ0FBQyxXQUFTLENBQUMsU0FBUyxFQUFDO1lBQ3BCLFdBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFTLEVBQUUsQ0FBQztTQUN6QztRQUNELE9BQU8sV0FBUyxDQUFDLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBR00sd0JBQUksR0FBWDtRQUNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQzdCLGtCQUFrQixFQUFFLFVBQVMsSUFBSTtnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDeEMsd0JBQXdCO2dCQUN4QiwyQkFBMkI7Z0JBQzNCLElBQUk7WUFDUixDQUFDO1lBQ0QsaUNBQWlDLEVBQUUsVUFBUyxJQUFJLEVBQUUsR0FBRztnQkFDakQscUZBQXFGO1lBQ3pGLENBQUM7WUFDRCx1QkFBdUIsRUFBRSxVQUFTLElBQUk7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDdEQsQ0FBQztZQUNELHNCQUFzQixFQUFFLFVBQVMsSUFBSTtnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDakQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDakMsMERBQTBEO1lBQzlELENBQUM7WUFDRCx1QkFBdUIsRUFBRSxVQUFTLElBQUk7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUMvQixzREFBc0Q7WUFDMUQsQ0FBQztZQUNELDBCQUEwQixFQUFFLFVBQVMsSUFBSTtnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUN6RCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBRUgsQ0FBQztJQUNNLDRCQUFRLEdBQWYsVUFBZ0IsTUFBTTtRQUNsQixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0saUNBQWEsR0FBcEIsVUFBcUIsTUFBYztRQUMvQixNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sOEJBQVUsR0FBakI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEMsSUFBRyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBQztZQUMzQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDL0I7YUFBSTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuQztJQUNKLENBQUM7SUFFTSxtQ0FBZSxHQUF0QixVQUF1QixZQUFZO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzdCLElBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUM7WUFDMUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEMsT0FBTyxJQUFJLENBQUM7U0FDZDthQUFJO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUVSLENBQUM7SUFFTSxpQ0FBYSxHQUFwQjtRQUNJLElBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUM7WUFDMUMsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFJO1lBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDOztJQWhGYyxtQkFBUyxHQUFlLElBQUssQ0FBQztJQUo1QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBcUY3QjtJQUFELGdCQUFDO0NBckZELEFBcUZDLENBckZzQyxFQUFFLENBQUMsU0FBUyxHQXFGbEQ7a0JBckZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBkZWxlZ2F0ZSA6IG51bGw7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2UgOiBBZE1hbmFnZXIgPSBudWxsITtcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCl7XG4gICAgICAgIGlmKCFBZE1hbmFnZXIuX2luc3RhbmNlKXtcbiAgICAgICAgICAgIEFkTWFuYWdlci5faW5zdGFuY2UgPSBuZXcgQWRNYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFkTWFuYWdlci5faW5zdGFuY2U7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgaW5pdCgpeyAgXG4gICAgICBzZGtib3guUGx1Z2luQWRNb2IuaW5pdCgpO1xuICAgICAgc2RrYm94LlBsdWdpbkFkTW9iLnNldExpc3RlbmVyKHRoaXMpO1xuICAgICAgbGV0IHRhcmdldCA9IHRoaXM7XG4gICAgICBzZGtib3guUGx1Z2luQWRNb2Iuc2V0TGlzdGVuZXIoe1xuICAgICAgICBhZFZpZXdEaWRSZWNlaXZlQWQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkIGhhcyBiZWVuIGxvYWRlZFwiLCBuYW1lKVxuICAgICAgICAgICAgLy8gaWYobmFtZSA9PSAnYmFubmVyJyl7XG4gICAgICAgICAgICAvLyAgICAgdGFyZ2V0LnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWRWaWV3RGlkRmFpbFRvUmVjZWl2ZUFkV2l0aEVycm9yOiBmdW5jdGlvbihuYW1lLCBtc2cpIHtcbiAgICAgICAgICAgIC8vIHRhcmdldC5zaG93SW5mbygnYWRWaWV3RGlkRmFpbFRvUmVjZWl2ZUFkV2l0aEVycm9yIG5hbWU9JyArIG5hbWUgKyAnIG1zZz0nICsgbXNnKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRWaWV3V2lsbFByZXNlbnRTY3JlZW46IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRWaWV3V2lsbFByZXNlbnRTY3JlZW4gZ2FtZSBcIiwgbmFtZSlcbiAgICAgICAgfSxcbiAgICAgICAgYWRWaWV3RGlkRGlzbWlzc1NjcmVlbjogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZFZpZXdEaWREaXNtaXNzU2NyZWVuIGdhbWUgXCIsIG5hbWUpXG4gICAgICAgICAgICB0YXJnZXQuZGVsZWdhdGUuYWRIYXNiZWVuU2hvd24oKTtcbiAgICAgICAgICAgIC8vIHRhcmdldC5zaG93SW5mbygnYWRWaWV3RGlkRGlzbWlzc1NjcmVlbiBuYW1lPScgKyBuYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRWaWV3V2lsbERpc21pc3NTY3JlZW46IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFjayBnYW1lIFwiLCBuYW1lKVxuICAgICAgICAgICAgLy8gdGFyZ2V0LnNob3dJbmZvKCdhZFZpZXdXaWxsRGlzbWlzc1NjcmVlbj0nICsgbmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkVmlld1dpbGxMZWF2ZUFwcGxpY2F0aW9uOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkVmlld1dpbGxMZWF2ZUFwcGxpY2F0aW9uIGdhbWUgXCIsIG5hbWUpXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIH1cbiAgICBwdWJsaWMgY2FjaGVBZHMoYWROYW1lKXtcbiAgICAgICAgc2RrYm94LlBsdWdpbkFkTW9iLmNhY2hlKGFkTmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFRlc3REZXZpY2UoZGV2aWNlIDpzdHJpbmcpe1xuICAgICAgICBzZGtib3guUGx1Z2luQWRNb2Iuc2V0VGVzdERldmljZXMoZGV2aWNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0Jhbm5lcigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNob3cgYmFubmVyIGFkc1wiKTtcbiAgICAgICBpZihzZGtib3guUGx1Z2luQWRNb2IuaXNBdmFpbGFibGUoJ2Jhbm5lcicpKXtcbiAgICAgICAgc2RrYm94LlBsdWdpbkFkTW9iLnNob3coJ2Jhbm5lcicpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNob3cgYmFubmVyIGFkc1wiKTtcbiAgICAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coXCJub3QgYXZpbGFibGUgYmFubmVyIGFkc1wiKTtcbiAgICAgICAgc2RrYm94LlBsdWdpbkFkTW9iLmNhY2hlKCdiYW5uZXInKTtcbiAgICAgICB9IFxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93SW50ZXJzdGl0YWwoaW5mb3JlVG9Ob2RlKXtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGluZm9yZVRvTm9kZTtcbiAgICAgICAgaWYoc2RrYm94LlBsdWdpbkFkTW9iLmlzQXZhaWxhYmxlKCdnYW1lb3ZlcicpKXtcbiAgICAgICAgICAgIHNka2JveC5QbHVnaW5BZE1vYi5zaG93KCdnYW1lb3ZlcicpO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYWNoZWluZyBhZGRcIik7XG4gICAgICAgICAgICAgICBzZGtib3guUGx1Z2luQWRNb2IuY2FjaGUoJ2dhbWVvdmVyJyk7XG4gICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgIH0gXG4gICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIGlzQWRBdmFpbGFibGUoKXtcbiAgICAgICAgaWYoc2RrYm94LlBsdWdpbkFkTW9iLmlzQXZhaWxhYmxlKCdnYW1lb3ZlcicpKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNka2JveC5QbHVnaW5BZE1vYi5jYWNoZSgnZ2FtZW92ZXInKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/managers/NetworkManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8aa8cG2/6ZFnaVcFyNKwzwC', 'NetworkManager');
// scripts/managers/NetworkManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkManager = void 0;
var NetworkConfig_1 = require("./NetworkConfig");
var NetworkManager = /** @class */ (function () {
    function NetworkManager() {
        this.baseUrl = "";
    }
    NetworkManager.getInstance = function () {
        if (!NetworkManager._instance) {
            NetworkManager._instance = new NetworkManager();
        }
        return NetworkManager._instance;
    };
    NetworkManager.prototype.init = function () {
        this.baseUrl = NetworkConfig_1.BASE_ADDRESS;
    };
    NetworkManager.prototype.sendRequest = function (api, reuqestType, param, successCb, errorCb, requireToken) {
        if (requireToken === void 0) { requireToken = false; }
        var xhr = new XMLHttpRequest();
        var fullurl = this.baseUrl + api;
        var readyStateChanged = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                var response = xhr.responseText;
                successCb(response);
            }
            else if (xhr.readyState === 4) {
                var respone = xhr.responseText;
                errorCb(respone);
            }
        };
        xhr.open(reuqestType, fullurl);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = readyStateChanged;
        console.log("param", param);
        xhr.send(JSON.stringify(param));
    };
    return NetworkManager;
}());
exports.NetworkManager = NetworkManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXJzL05ldHdvcmtNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE2RDtBQUM3RDtJQUFBO1FBRVksWUFBTyxHQUFZLEVBQUUsQ0FBQztJQWtDbEMsQ0FBQztJQWhDVSwwQkFBVyxHQUFsQjtRQUNJLElBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFDO1lBQ3pCLGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztTQUNuRDtRQUNELE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBR0QsNkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsNEJBQVksQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLEdBQVcsRUFBRyxXQUFvQixFQUFFLEtBQVcsRUFBRSxTQUFvQixFQUFFLE9BQWlCLEVBQUMsWUFBNkI7UUFBN0IsNkJBQUEsRUFBQSxvQkFBNkI7UUFDOUgsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUVqQyxJQUFJLGlCQUFpQixHQUFJO1lBQ3JCLElBQUcsR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFDO2dCQUMvRCxJQUFJLFFBQVEsR0FBWSxHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUN6QyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkI7aUJBQUssSUFBRyxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBQztnQkFDMUIsSUFBSSxPQUFPLEdBQVcsR0FBRyxDQUFDLFlBQVksQ0FBQztnQkFDdkMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQyxDQUFBO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0IsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtERVBMT1lNRU5UX01PREUsIEJBU0VfQUREUkVTU30gZnJvbSBcIi4vTmV0d29ya0NvbmZpZ1wiXG5leHBvcnQgY2xhc3MgTmV0d29ya01hbmFnZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZSA6IE5ldHdvcmtNYW5hZ2VyO1xuICAgIHByaXZhdGUgYmFzZVVybCA6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSA6IE5ldHdvcmtNYW5hZ2Vye1xuICAgICAgICBpZighTmV0d29ya01hbmFnZXIuX2luc3RhbmNlKXtcbiAgICAgICAgICAgIE5ldHdvcmtNYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBOZXR3b3JrTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOZXR3b3JrTWFuYWdlci5faW5zdGFuY2U7ICAgICAgIFxuICAgIH1cbiAgXG5cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IEJBU0VfQUREUkVTUztcbiAgICB9XG5cbiAgICBzZW5kUmVxdWVzdChhcGk6IHN0cmluZywgIHJldXFlc3RUeXBlIDogc3RyaW5nLCBwYXJhbSA6IGFueSwgc3VjY2Vzc0NiIDogRnVuY3Rpb24sIGVycm9yQ2IgOkZ1bmN0aW9uLHJlcXVpcmVUb2tlbjogYm9vbGVhbiA9IGZhbHNlKXtcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBsZXQgZnVsbHVybCA9IHRoaXMuYmFzZVVybCArIGFwaTtcblxuICAgICAgICBsZXQgcmVhZHlTdGF0ZUNoYW5nZWQgID0gKCkgPT57XG4gICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpe1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA6IHN0cmluZyA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NiKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZTogc3RyaW5nID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICBlcnJvckNiKHJlc3BvbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB4aHIub3BlbihyZXVxZXN0VHlwZSwgZnVsbHVybCk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHJlYWR5U3RhdGVDaGFuZ2VkO1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhcmFtXCIsIHBhcmFtKTtcbiAgICAgICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocGFyYW0pKTtcbiAgICB9XG59XG5cbiJdfQ==
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
//------QC-SOURCE-SPLIT------
