"use strict";
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