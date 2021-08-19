"use strict";
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