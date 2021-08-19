
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