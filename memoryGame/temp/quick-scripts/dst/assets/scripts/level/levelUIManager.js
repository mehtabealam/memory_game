
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/level/levelUIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b088aAKCUxN6IbB3yHKE9T3', 'levelUIManager');
// scripts/level/levelUIManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var GameManager_1 = require("../managers/GameManager");
var constants_1 = require("../helper/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelUIManager = /** @class */ (function (_super) {
    __extends(LevelUIManager, _super);
    function LevelUIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelSelectionButton = null;
        _this.unlocked = null;
        _this.locked = null;
        _this.layout = null;
        _this.title = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    LevelUIManager.prototype.start = function () {
    };
    LevelUIManager.prototype.setDelegateComponent = function (delgate) {
        this._delagate = delgate;
    };
    LevelUIManager.prototype.populateLevels = function (startIndex) {
        var levelInfo = GameManager_1.GameManager.getInstance().getLevelData(startIndex);
        this.setLeveltitle(levelInfo.gameType, levelInfo.groupOf);
        this.layout.node.removeAllChildren();
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        var levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var levelsInfoForMode = JSON.parse(levelsInfo.level);
        var endIndex = (startIndex + 10) > levels.length ? levels.length : (startIndex + 10);
        for (var i = startIndex; i < endIndex; i++) {
            var button = cc.instantiate(this.levelSelectionButton);
            button.name = i.toString();
            button.getChildByName("Background").getChildByName("title")
                .getComponent(cc.Label).getComponent("localiser").replaceValue("" + (i + 1));
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = "levelUIManager";
            clickEventHandler.handler = "onLevelSelect";
            clickEventHandler.customEventData = i.toString();
            button.getComponent(cc.Button).clickEvents.push(clickEventHandler);
            if (levelsInfoForMode[i].isUnlock) {
                button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.unlocked;
                button.getChildByName("lock").active = false;
                button.getComponent(cc.Button).interactable = true;
            }
            else {
                button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.locked;
                button.getChildByName("lock").active = true;
                button.getComponent(cc.Button).interactable = false;
            }
            this.layout.node.addChild(button);
        }
    };
    LevelUIManager.prototype.updateLevels = function (startIndex) {
        var levelInfo = GameManager_1.GameManager.getInstance().getLevelData(startIndex);
        this.setLeveltitle(levelInfo.gameType, levelInfo.groupOf);
        var levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        var endIndex = (startIndex + 10) > levels.length ? levels.length : (startIndex + 10);
        var levelsInfoForMode = JSON.parse(levelsInfo.level);
        for (var i = startIndex; i < endIndex; i++) {
            var button = cc.instantiate(this.levelSelectionButton);
            if (levelsInfoForMode[i].isUnlock) {
                button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.unlocked;
                button.getChildByName("lock").active = false;
                button.getComponent(cc.Button).interactable = true;
            }
            else {
                button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.locked;
                button.getChildByName("lock").active = true;
                button.getComponent(cc.Button).interactable = false;
            }
            this.layout.node.addChild(button);
        }
    };
    LevelUIManager.prototype.setLeveltitle = function (gameType, groupof) {
        var keyString = "";
        switch (gameType) {
            case constants_1.GAME_TYPE.FIND:
                keyString = "find";
                break;
            case constants_1.GAME_TYPE.MIRROR:
                keyString = "mirror";
                break;
        }
        this.title.node.getComponent("localiser").key = keyString;
        console.log('keyString', keyString);
        this.title.node.getComponent("localiser").replaceValue("" + groupof);
        this.title.node.getComponent("localiser").setStringForKey();
    };
    LevelUIManager.prototype.onLevelSelect = function (event, level) {
        this._delagate.onLevelSelect(level);
    };
    LevelUIManager.prototype.openLocalisation = function () {
        this._delagate.openLocalisationPopUp();
    };
    __decorate([
        property(cc.Prefab)
    ], LevelUIManager.prototype, "levelSelectionButton", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LevelUIManager.prototype, "unlocked", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LevelUIManager.prototype, "locked", void 0);
    __decorate([
        property(cc.Layout)
    ], LevelUIManager.prototype, "layout", void 0);
    __decorate([
        property(cc.Label)
    ], LevelUIManager.prototype, "title", void 0);
    LevelUIManager = __decorate([
        ccclass
    ], LevelUIManager);
    return LevelUIManager;
}(cc.Component));
exports.default = LevelUIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xldmVsL2xldmVsVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHVEQUFzRDtBQUN0RCxpREFBZ0Q7QUFFMUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFzSEM7UUFsSEcsMEJBQW9CLEdBQWUsSUFBSSxDQUFDO1FBR3hDLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFHNUIsWUFBTSxHQUFlLElBQUksQ0FBQztRQUkxQixZQUFNLEdBQWUsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBYyxJQUFJLENBQUM7O1FBb0d4QixpQkFBaUI7SUFDckIsQ0FBQztJQW5HRyxlQUFlO0lBRWYsOEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw2Q0FBb0IsR0FBcEIsVUFBcUIsT0FBTztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFJLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBR0QsdUNBQWMsR0FBZCxVQUFlLFVBQVU7UUFDckIsSUFBSSxTQUFTLEdBQUcseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JDLElBQUksTUFBTSxHQUFHLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEQsSUFBSSxV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QUUsQ0FBQyxNQUFNLENBQUM7Z0VBQ29CO0lBR3hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0RBQ0c7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztrREFDQztJQUkxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ0s7SUFqQlAsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXNIbEM7SUFBRCxxQkFBQztDQXRIRCxBQXNIQyxDQXRIMkMsRUFBRSxDQUFDLFNBQVMsR0FzSHZEO2tCQXRIb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlclwiO1xuaW1wb3J0IHsgR0FNRV9UWVBFIH0gZnJvbSBcIi4uL2hlbHBlci9jb25zdGFudHNcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFVJTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBfZGVsYWdhdGUgOiBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbGV2ZWxTZWxlY3Rpb25CdXR0b24gOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHVubG9ja2VkIDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsb2NrZWQgOiBjYy5QcmVmYWIgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTGF5b3V0KVxuICAgIGxheW91dCA6IGNjLkxheW91dCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGl0bGUgOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHNldERlbGVnYXRlQ29tcG9uZW50KGRlbGdhdGUpe1xuICAgICAgICB0aGlzLl9kZWxhZ2F0ZSA9ICBkZWxnYXRlO1xuICAgIH1cblxuXG4gICAgcG9wdWxhdGVMZXZlbHMoc3RhcnRJbmRleCl7XG4gICAgICAgIGxldCBsZXZlbEluZm8gPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsRGF0YShzdGFydEluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRMZXZlbHRpdGxlKGxldmVsSW5mby5nYW1lVHlwZSwgbGV2ZWxJbmZvLmdyb3VwT2YpXG4gICAgICAgIHRoaXMubGF5b3V0Lm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgbGV0IGxldmVscyA9IEdhbWVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJbmZvKCk7XG4gICAgICAgIGxldCBsZXZlbHNJbmZvID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMZXZlbEluZm9cIikpO1xuICAgICAgICBsZXQgbGV2ZWxzSW5mb0Zvck1vZGUgPSBKU09OLnBhcnNlKGxldmVsc0luZm8ubGV2ZWwpO1xuICAgICAgICBsZXQgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEwKSA+IGxldmVscy5sZW5ndGggPyBsZXZlbHMubGVuZ3RoIDogKHN0YXJ0SW5kZXggKzEwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBlbmRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbFNlbGVjdGlvbkJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b24ubmFtZSA9IGkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJ1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLnJlcGxhY2VWYWx1ZShgJHtpKzF9YCk7XG4gICAgICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJsZXZlbFVJTWFuYWdlclwiO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25MZXZlbFNlbGVjdFwiO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaS50b1N0cmluZygpO1xuICAgICAgICAgICAgYnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgaWYobGV2ZWxzSW5mb0Zvck1vZGVbaV0uaXNVbmxvY2spe1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q29tcG9uZW50KFwiY2MuU3ByaXRlXCIpLnNwcml0ZUZyYW1lID0gdGhpcy51bmxvY2tlZDtcbiAgICAgICAgICAgICAgICBidXR0b24uZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDb21wb25lbnQoXCJjYy5TcHJpdGVcIikuc3ByaXRlRnJhbWUgPSB0aGlzLmxvY2tlZDtcbiAgICAgICAgICAgICAgICBidXR0b24uZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXlvdXQubm9kZS5hZGRDaGlsZChidXR0b24pO1xuICAgICAgIH1cblxuICAgICAgIFxuXG4gICAgfVxuXG5cbiAgICB1cGRhdGVMZXZlbHMoc3RhcnRJbmRleCl7XG4gICAgICAgIGxldCBsZXZlbEluZm8gPSBHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldExldmVsRGF0YShzdGFydEluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRMZXZlbHRpdGxlKGxldmVsSW5mby5nYW1lVHlwZSwgbGV2ZWxJbmZvLmdyb3VwT2YpXG4gICAgICAgIGxldCBsZXZlbHNJbmZvID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJMZXZlbEluZm9cIikpO1xuICAgICAgICBsZXQgbGV2ZWxzID0gR2FtZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbEluZm8oKTtcbiAgICAgICAgbGV0IGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxMCkgPiBsZXZlbHMubGVuZ3RoID8gbGV2ZWxzLmxlbmd0aCA6IChzdGFydEluZGV4ICsxMCk7XG4gICAgICAgIGxldCBsZXZlbHNJbmZvRm9yTW9kZSA9IEpTT04ucGFyc2UobGV2ZWxzSW5mby5sZXZlbCk7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgZW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxTZWxlY3Rpb25CdXR0b24pO1xuICAgICAgICAgICAgaWYobGV2ZWxzSW5mb0Zvck1vZGVbaV0uaXNVbmxvY2spe1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q29tcG9uZW50KFwiY2MuU3ByaXRlXCIpLnNwcml0ZUZyYW1lID0gdGhpcy51bmxvY2tlZDtcbiAgICAgICAgICAgICAgICBidXR0b24uZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDb21wb25lbnQoXCJjYy5TcHJpdGVcIikuc3ByaXRlRnJhbWUgPSB0aGlzLmxvY2tlZDtcbiAgICAgICAgICAgICAgICBidXR0b24uZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXlvdXQubm9kZS5hZGRDaGlsZChidXR0b24pO1xuICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgc2V0TGV2ZWx0aXRsZShnYW1lVHlwZSwgZ3JvdXBvZil7XG5cbiAgICAgICAgbGV0IGtleVN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgc3dpdGNoKGdhbWVUeXBlKXtcbiAgICAgICAgICAgIGNhc2UgR0FNRV9UWVBFLkZJTkQ6XG4gICAgICAgICAgICAgICAga2V5U3RyaW5nID0gXCJmaW5kXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdBTUVfVFlQRS5NSVJST1I6XG4gICAgICAgICAgICAgICAga2V5U3RyaW5nID0gXCJtaXJyb3JcIjtcbiAgICAgICAgICAgICAgICBicmVhazsgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aXRsZS5ub2RlLmdldENvbXBvbmVudChcImxvY2FsaXNlclwiKS5rZXkgPSBrZXlTdHJpbmc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXlTdHJpbmcnLCBrZXlTdHJpbmcpO1xuICAgICAgICB0aGlzLnRpdGxlLm5vZGUuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLnJlcGxhY2VWYWx1ZShgJHtncm91cG9mfWApO1xuICAgICAgICB0aGlzLnRpdGxlLm5vZGUuZ2V0Q29tcG9uZW50KFwibG9jYWxpc2VyXCIpLnNldFN0cmluZ0ZvcktleSgpO1xuICAgIH1cblxuICAgIG9uTGV2ZWxTZWxlY3QoZXZlbnQ6IEV2ZW50LCBsZXZlbDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fZGVsYWdhdGUub25MZXZlbFNlbGVjdChsZXZlbCk7XG4gICAgfVxuXG5cbiAgICBvcGVuTG9jYWxpc2F0aW9uKCl7XG4gICAgICAgIHRoaXMuX2RlbGFnYXRlLm9wZW5Mb2NhbGlzYXRpb25Qb3BVcCgpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=