"use strict";
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