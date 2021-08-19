"use strict";
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