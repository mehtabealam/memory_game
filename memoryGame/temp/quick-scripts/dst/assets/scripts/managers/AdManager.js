
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