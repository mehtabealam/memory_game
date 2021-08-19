"use strict";
cc._RF.push(module, '5afc22nll1PkYawyLYfZ9ZR', 'GameManager');
// scripts/managers/GameManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
var constants_1 = require("../helper/constants");
var GameManager = /** @class */ (function () {
    function GameManager() {
        this._gameConfig = null;
        this._levelsData = null;
        this._levelImages = null;
        this._currentSelectLanguage = "EN";
        this._languageData = null;
        this._selectedMode = constants_1.GAME_MODE.PRACTICE;
        this._currentLevel = 0;
        this._currentDate = null;
        this.screen = [];
    }
    GameManager.getInstance = function () {
        if (!GameManager._instance) {
            GameManager._instance = new GameManager();
        }
        return GameManager._instance;
    };
    GameManager.prototype.setCurrentDate = function (date) {
        this._currentDate = date;
    };
    GameManager.prototype.getCurrentDate = function () {
        return this._currentDate;
    };
    GameManager.prototype.loadGameConfig = function () {
        var target = this;
        return new Promise(function (resolve, reject) {
            if (target._gameConfig) {
                resolve(target._gameConfig);
            }
            else {
                cc.resources.load("GameMode/gameConfig", function (error, level) {
                    if (error) {
                        console.log("error while loading json");
                        reject(error);
                    }
                    else {
                        target._gameConfig = level["json"];
                        // console.log("data loadded", target._gameConfig);
                        resolve(target._gameConfig);
                    }
                });
            }
        });
    };
    GameManager.prototype.loadLevels = function () {
        var target = this;
        return new Promise(function (resolve, reject) {
            if (target._levelsData) {
                resolve(target._levelsData);
            }
            else {
                cc.resources.load("Levels/levels", function (error, level) {
                    if (error) {
                        console.log("error while loading json");
                        reject(error);
                    }
                    else {
                        target._levelsData = level["json"];
                        // console.log("data loadded", target._levelsData);
                        resolve(target._levelsData);
                    }
                });
            }
        });
    };
    GameManager.prototype.loadLanaguge = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._languageData) {
                resolve(_this._languageData);
            }
            else {
                cc.loader.loadResDir("Languages", cc.JsonAsset, function (err, data) {
                    if (err) {
                        reject(err);
                        cc.error("langauge data error :" + err);
                    }
                    else {
                        _this._languageData = data;
                        // console.log("langauge data", this._languageData);
                    }
                    resolve(data);
                });
            }
        });
    };
    // data is in form  ,this._levelImages = {level [images]}
    GameManager.prototype.loadLevelImages = function (levelNo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._levelImages && _this._levelImages.mode && _this._levelImages.mode.level[levelNo]) {
                resolve(_this._levelImages.level[levelNo]);
            }
            else {
                cc.loader.loadResDir("Levels/Images/LEVEL" + (levelNo + 1), cc.SpriteFrame, function (err, data) {
                    if (err) {
                        reject(err);
                        cc.error("loadLevelImages :" + err);
                    }
                    else {
                        if (!_this._levelImages) {
                            _this._levelImages = {};
                            _this._levelImages.level = [];
                        }
                        _this._levelImages.level[levelNo] = data;
                        // console.log("level images", this._levelImages, data);
                    }
                    resolve(_this._levelImages.level[levelNo]);
                });
            }
        });
    };
    GameManager.prototype.getSpriteFrame = function (mode, levelNo, name) {
        if (this._levelImages) {
            var images = this._levelImages.level[levelNo];
            // console.log("images",images );
            var spriteFrame = images.find(function (item) { return item.name == name; });
            // console.log("spriteFrames",spriteFrame, name );
            return spriteFrame;
        }
    };
    GameManager.prototype.getGameConfiguration = function () {
        if (this._gameConfig) {
            return this._gameConfig;
        }
    };
    GameManager.prototype.getModesInfo = function () {
        if (this._gameConfig) {
            return this._gameConfig["gameMode"];
        }
    };
    GameManager.prototype.getModeInfo = function (modeName) {
        if (this._gameConfig) {
            return this._gameConfig["gameMode"].find(function (mode) { return mode.key == modeName; });
        }
    };
    GameManager.prototype.getLevelInfo = function () {
        if (this._levelsData) {
            return this._levelsData["levels"];
        }
    };
    GameManager.prototype.getLevelData = function (levelNo) {
        if (this._levelsData) {
            return this._levelsData["levels"][levelNo];
        }
    };
    GameManager.prototype.isImagesLoaded = function () {
        return this._levelsData ? true : false;
    };
    GameManager.prototype.getString = function (key) {
        var _this = this;
        if (this._languageData) {
            var language = this._languageData.find(function (item) { return item.name == _this._currentSelectLanguage; });
            // console.log("key", key, language);
            return language.json[key];
        }
        else {
            return "";
        }
    };
    GameManager.prototype.changeCurrentLanguage = function () {
        this._currentSelectLanguage = cc.sys.localStorage.getItem("Language");
        console.log("change current Language", this._currentSelectLanguage);
    };
    GameManager.prototype.setGameMode = function (mode) {
        this._selectedMode = mode;
    };
    GameManager.prototype.getSelectedMode = function () {
        return this._selectedMode;
    };
    GameManager.prototype.setCurrentLevel = function (level) {
        this._currentLevel = level;
    };
    GameManager.prototype.getCurrentLevel = function () {
        return this._currentLevel;
    };
    GameManager.prototype.pushScene = function (scene) {
        console.log("scnee", scene);
        this.screen.push(scene);
    };
    GameManager.prototype.popScene = function () {
        return this.screen.pop();
    };
    GameManager.prototype.removeAllScene = function () {
        this.screen.length = 0;
    };
    GameManager._instance = null;
    return GameManager;
}());
exports.GameManager = GameManager;

cc._RF.pop();