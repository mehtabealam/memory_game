
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/managers/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXJzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUErQztBQUU5QztJQUFBO1FBRVcsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFckIsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQXNNdkIsQ0FBQztJQXBNVSx1QkFBVyxHQUFsQjtRQUNJLElBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFDO1lBQ3ZCLFdBQVcsQ0FBRSxTQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUM3QztRQUNELE9BQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDOUIsSUFBRyxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUNuQixPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQy9CO2lCQUFLO2dCQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFVBQVMs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LFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUV4RSxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLENBQUMsYUFBYSxHQUFJLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNJLE9BQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQWUsR0FBZixVQUFnQixLQUFLO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBSztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRiw4QkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRixvQ0FBYyxHQUFkO1FBQ0ssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUEvTWMscUJBQVMsR0FBRyxJQUFJLENBQUM7SUFnTnJDLGtCQUFDO0NBak5BLEFBaU5BLElBQUE7QUFqTmEsa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHQU1FX01PREV9IGZyb20gXCIuLi9oZWxwZXIvY29uc3RhbnRzXCI7XG5cbiBleHBvcnQgY2xhc3MgR2FtZU1hbmFnZXJ7XG4gICAgcHJpdmF0ZSBzdGF0aWMgIF9pbnN0YW5jZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZ2FtZUNvbmZpZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbGV2ZWxzRGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbGV2ZWxJbWFnZXMgPSBudWxsO1xuICAgIHByaXZhdGUgX2N1cnJlbnRTZWxlY3RMYW5ndWFnZSA9IFwiRU5cIjsgXG4gICAgcHJpdmF0ZSBfbGFuZ3VhZ2VEYXRhID0gbnVsbDtcbiAgICBwcml2YXRlIF9zZWxlY3RlZE1vZGUgPSBHQU1FX01PREUuUFJBQ1RJQ0U7XG4gICAgcHJpdmF0ZSBfY3VycmVudExldmVsID0gMDtcbiAgICBwcml2YXRlIF9jdXJyZW50RGF0ZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgc2NyZWVuID0gW107XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcbiAgICAgICAgaWYoIUdhbWVNYW5hZ2VyLl9pbnN0YW5jZSl7XG4gICAgICAgICAgIEdhbWVNYW5hZ2VyLiBfaW5zdGFuY2UgPSBuZXcgR2FtZU1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gR2FtZU1hbmFnZXIuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnREYXRlKGRhdGUpe1xuICAgICAgICB0aGlzLl9jdXJyZW50RGF0ZSA9IGRhdGU7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudERhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnREYXRlO1xuICAgIH1cblxuICAgIGxvYWRHYW1lQ29uZmlnKCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XG4gICAgICAgICAgICBpZih0YXJnZXQuX2dhbWVDb25maWcpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRhcmdldC5fZ2FtZUNvbmZpZyk7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJHYW1lTW9kZS9nYW1lQ29uZmlnXCIsIGZ1bmN0aW9uKGVycm9yLCBsZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIGxvYWRpbmcganNvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Ll9nYW1lQ29uZmlnICAgICAgICA9ICAgbGV2ZWxbXCJqc29uXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkYXRhIGxvYWRkZWRcIiwgdGFyZ2V0Ll9nYW1lQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0Ll9nYW1lQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgbG9hZExldmVscyAoKXtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT4ge1xuICAgICAgICAgICAgaWYodGFyZ2V0Ll9sZXZlbHNEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0YXJnZXQuX2xldmVsc0RhdGEpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwiTGV2ZWxzL2xldmVsc1wiLCBmdW5jdGlvbihlcnJvciwgbGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB3aGlsZSBsb2FkaW5nIGpzb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5fbGV2ZWxzRGF0YSAgICAgICAgPSAgIGxldmVsW1wianNvblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YSBsb2FkZGVkXCIsIHRhcmdldC5fbGV2ZWxzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRhcmdldC5fbGV2ZWxzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGxvYWRMYW5hZ3VnZSgpe1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xhbmd1YWdlRGF0YSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fbGFuZ3VhZ2VEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoXCJMYW5ndWFnZXNcIiAsIGNjLkpzb25Bc3NldCwgKGVycjogRXJyb3IsIGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFwibGFuZ2F1Z2UgZGF0YSBlcnJvciA6XCIgKyBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhbmd1YWdlRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxhbmdhdWdlIGRhdGFcIiwgdGhpcy5fbGFuZ3VhZ2VEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBkYXRhIGlzIGluIGZvcm0gICx0aGlzLl9sZXZlbEltYWdlcyA9IHtsZXZlbCBbaW1hZ2VzXX1cbiAgICBsb2FkTGV2ZWxJbWFnZXMoIGxldmVsTm8pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xldmVsSW1hZ2VzICYmIHRoaXMuX2xldmVsSW1hZ2VzLm1vZGUgJiYgdGhpcy5fbGV2ZWxJbWFnZXMubW9kZS5sZXZlbFtsZXZlbE5vXSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fbGV2ZWxJbWFnZXMubGV2ZWxbbGV2ZWxOb10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihgTGV2ZWxzL0ltYWdlcy9MRVZFTCR7bGV2ZWxObyArIDF9YCAsIGNjLlNwcml0ZUZyYW1lLCAoZXJyOiBFcnJvciwgZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJsb2FkTGV2ZWxJbWFnZXMgOlwiICsgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5fbGV2ZWxJbWFnZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xldmVsSW1hZ2VzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGV2ZWxJbWFnZXMubGV2ZWwgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGV2ZWxJbWFnZXMubGV2ZWxbbGV2ZWxOb10gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxldmVsIGltYWdlc1wiLCB0aGlzLl9sZXZlbEltYWdlcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9sZXZlbEltYWdlcy5sZXZlbFtsZXZlbE5vXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFNwcml0ZUZyYW1lKG1vZGUsIGxldmVsTm8sIG5hbWUpIHtcbiAgICAgICAgaWYodGhpcy5fbGV2ZWxJbWFnZXMpe1xuICAgICAgICAgICAgbGV0IGltYWdlcyA9IHRoaXMuX2xldmVsSW1hZ2VzLmxldmVsW2xldmVsTm9dO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbWFnZXNcIixpbWFnZXMgKTtcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gaW1hZ2VzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT0gbmFtZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwcml0ZUZyYW1lc1wiLHNwcml0ZUZyYW1lLCBuYW1lICk7XG4gICAgICAgICAgICByZXR1cm4gc3ByaXRlRnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0R2FtZUNvbmZpZ3VyYXRpb24oKXtcbiAgICAgICAgaWYodGhpcy5fZ2FtZUNvbmZpZyl7ICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nYW1lQ29uZmlnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1vZGVzSW5mbyAoKSB7XG4gICAgICAgIGlmKHRoaXMuX2dhbWVDb25maWcpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVDb25maWdbXCJnYW1lTW9kZVwiXTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0TW9kZUluZm8gKG1vZGVOYW1lKSB7XG4gICAgICAgIGlmKHRoaXMuX2dhbWVDb25maWcpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVDb25maWdbXCJnYW1lTW9kZVwiXS5maW5kKG1vZGUgPT4gbW9kZS5rZXkgPT0gbW9kZU5hbWUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRMZXZlbEluZm8oKXtcbiAgICAgICAgaWYodGhpcy5fbGV2ZWxzRGF0YSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGV2ZWxzRGF0YVtcImxldmVsc1wiXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExldmVsRGF0YShsZXZlbE5vOiBudW1iZXIpe1xuICAgICAgICBpZih0aGlzLl9sZXZlbHNEYXRhKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sZXZlbHNEYXRhW1wibGV2ZWxzXCJdW2xldmVsTm9dO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpc0ltYWdlc0xvYWRlZCAoKSA6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbHNEYXRhPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0U3RyaW5nKGtleTpzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZih0aGlzLl9sYW5ndWFnZURhdGEpe1xuICAgICAgICAgICAgbGV0IGxhbmd1YWdlID0gdGhpcy5fbGFuZ3VhZ2VEYXRhLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT0gdGhpcy5fY3VycmVudFNlbGVjdExhbmd1YWdlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5XCIsIGtleSwgbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlLmpzb25ba2V5XTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUN1cnJlbnRMYW5ndWFnZSgpe1xuICAgICAgIFxuICAgICAgICB0aGlzLl9jdXJyZW50U2VsZWN0TGFuZ3VhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMYW5ndWFnZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2UgY3VycmVudCBMYW5ndWFnZVwiLCB0aGlzLl9jdXJyZW50U2VsZWN0TGFuZ3VhZ2UpO1xuXG4gICAgfVxuXG4gICAgc2V0R2FtZU1vZGUobW9kZSl7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkTW9kZSAgPSBtb2RlO1xuICAgIH1cbiAgICBcbiAgICBnZXRTZWxlY3RlZE1vZGUoKXtcbiAgICAgICAgcmV0dXJuICB0aGlzLl9zZWxlY3RlZE1vZGU7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudExldmVsKGxldmVsKXtcbiAgICAgdGhpcy5fY3VycmVudExldmVsID0gbGV2ZWw7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudExldmVsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGV2ZWw7XG4gICAgfVxuXG4gICAgcHVzaFNjZW5lKHNjZW5lKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwic2NuZWVcIiwgc2NlbmUpO1xuICAgICAgICAgdGhpcy5zY3JlZW4ucHVzaChzY2VuZSk7XG4gICAgIH1cblxuICAgIHBvcFNjZW5lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcmVlbi5wb3AoKTtcbiAgICAgfVxuXG4gICAgcmVtb3ZlQWxsU2NlbmUoKXtcbiAgICAgICAgIHRoaXMuc2NyZWVuLmxlbmd0aCA9IDA7XG4gICAgIH1cbn0iXX0=