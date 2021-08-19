
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/helper/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7aa9baqp45Cz4gRhMRED/OS', 'constants');
// scripts/helper/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GAME_TYPE = exports.GAME_LINK = exports.LANGUAGES = exports.END_POP_UP = exports.GAME_MODE = exports.GAME_SCREEN = void 0;
var GAME_SCREEN;
(function (GAME_SCREEN) {
    GAME_SCREEN[GAME_SCREEN["HOME"] = 1] = "HOME";
    GAME_SCREEN[GAME_SCREEN["LEVEL_SELECTION"] = 2] = "LEVEL_SELECTION";
    GAME_SCREEN[GAME_SCREEN["GAME_PLAY"] = 3] = "GAME_PLAY";
    GAME_SCREEN[GAME_SCREEN["SETTINGS"] = 4] = "SETTINGS";
    GAME_SCREEN[GAME_SCREEN["FUTURE_ANNOCMENTS"] = 5] = "FUTURE_ANNOCMENTS";
})(GAME_SCREEN = exports.GAME_SCREEN || (exports.GAME_SCREEN = {}));
exports.GAME_MODE = {
    PRACTICE: "practice",
    NORMAL: "normal",
    MEDIUM: "medium",
    HARD: "hard"
};
var END_POP_UP;
(function (END_POP_UP) {
    END_POP_UP[END_POP_UP["NEW_RECORD"] = 1] = "NEW_RECORD";
    END_POP_UP[END_POP_UP["CLEARD"] = 2] = "CLEARD";
    END_POP_UP[END_POP_UP["FAILED"] = 3] = "FAILED";
    END_POP_UP[END_POP_UP["FOR_HIT"] = 4] = "FOR_HIT";
    END_POP_UP[END_POP_UP["FOR_CLUE"] = 5] = "FOR_CLUE";
})(END_POP_UP = exports.END_POP_UP || (exports.END_POP_UP = {}));
exports.LANGUAGES = {
    ENGLISH: "EN",
    SPANISH: "ES"
};
exports.GAME_LINK = {
    URL: "https://play.google.com/store/apps/details?id=com.game.memoramax"
};
exports.GAME_TYPE = {
    FIND: 1,
    MIRROR: 2
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2hlbHBlci9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBa0IsV0FNakI7QUFORCxXQUFrQixXQUFXO0lBQ3pCLDZDQUFRLENBQUE7SUFDUixtRUFBZSxDQUFBO0lBQ2YsdURBQVMsQ0FBQTtJQUNULHFEQUFRLENBQUE7SUFDUix1RUFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBTmlCLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBTTVCO0FBR2EsUUFBQSxTQUFTLEdBQUc7SUFDckIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsTUFBTSxFQUFHLFFBQVE7SUFDakIsTUFBTSxFQUFHLFFBQVE7SUFDakIsSUFBSSxFQUFHLE1BQU07Q0FDakIsQ0FBQTtBQUVELElBQWtCLFVBTWpCO0FBTkQsV0FBa0IsVUFBVTtJQUN4Qix1REFBYyxDQUFBO0lBQ2QsK0NBQU0sQ0FBQTtJQUNOLCtDQUFNLENBQUE7SUFDTixpREFBTyxDQUFBO0lBQ1AsbURBQVEsQ0FBQTtBQUNaLENBQUMsRUFOaUIsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFNM0I7QUFFWSxRQUFBLFNBQVMsR0FBRztJQUNyQixPQUFPLEVBQUcsSUFBSTtJQUNkLE9BQU8sRUFBRyxJQUFJO0NBQ2pCLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBRTtJQUNwQixHQUFHLEVBQUcsa0VBQWtFO0NBQzNFLENBQUE7QUFHWSxRQUFBLFNBQVMsR0FBRTtJQUNwQixJQUFJLEVBQUcsQ0FBQztJQUNSLE1BQU0sRUFBRyxDQUFDO0NBQ2IsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbnVtIEdBTUVfU0NSRUVOIHtcbiAgICBIT01FID0gMSxcbiAgICBMRVZFTF9TRUxFQ1RJT04sXG4gICAgR0FNRV9QTEFZLFxuICAgIFNFVFRJTkdTLFxuICAgIEZVVFVSRV9BTk5PQ01FTlRTXG59XG5cblxuZXhwb3J0IGNvbnN0ICBHQU1FX01PREUgPSB7XG4gICAgIFBSQUNUSUNFIDpcInByYWN0aWNlXCIsXG4gICAgIE5PUk1BTCA6IFwibm9ybWFsXCIsXG4gICAgIE1FRElVTSA6IFwibWVkaXVtXCIsXG4gICAgIEhBUkQgOiBcImhhcmRcIlxufVxuXG5leHBvcnQgY29uc3QgZW51bSBFTkRfUE9QX1VQIHtcbiAgICBORVdfUkVDT1JEID0gMSxcbiAgICBDTEVBUkQsXG4gICAgRkFJTEVELFxuICAgIEZPUl9ISVQsXG4gICAgRk9SX0NMVUVcbn1cblxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUyA9IHtcbiAgICBFTkdMSVNIIDogXCJFTlwiLFxuICAgIFNQQU5JU0ggOiBcIkVTXCJcbn1cblxuZXhwb3J0IGNvbnN0IEdBTUVfTElOSyA9e1xuICAgIFVSTCA6IFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5nYW1lLm1lbW9yYW1heFwiXG59XG5cblxuZXhwb3J0IGNvbnN0IEdBTUVfVFlQRSA9e1xuICAgIEZJTkQgOiAxLFxuICAgIE1JUlJPUiA6IDIgXG59XG4iXX0=