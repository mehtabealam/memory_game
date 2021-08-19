"use strict";
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