
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