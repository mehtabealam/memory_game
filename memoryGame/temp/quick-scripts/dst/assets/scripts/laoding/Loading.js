
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