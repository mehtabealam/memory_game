
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