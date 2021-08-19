"use strict";
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