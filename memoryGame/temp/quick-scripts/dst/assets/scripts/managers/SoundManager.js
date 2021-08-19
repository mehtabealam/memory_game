
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/managers/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93b17C0LKhBYoFHZElu/iWc', 'SoundManager');
// scripts/managers/SoundManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoundManager = /** @class */ (function () {
    function SoundManager() {
        this._musicClip = null;
    }
    SoundManager.getInstance = function () {
        if (!SoundManager.instance) {
            SoundManager.instance = new SoundManager();
        }
        return SoundManager.instance;
    };
    SoundManager.prototype.init = function (musicClip) {
        this._musicClip = musicClip;
    };
    SoundManager.prototype.playMusic = function (loop) {
        // console.log("play music", this._musicClip);
        cc.audioEngine.playMusic(this._musicClip, loop);
        cc.audioEngine.setMusicVolume(0.6);
    };
    SoundManager.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    SoundManager.prototype.playEffect = function (clipName, loop) {
        // console.log("play clip",cc.sys.localStorage.getItem("Sound"));
        if (JSON.parse(cc.sys.localStorage.getItem("Sound"))) {
            var audioNo = cc.audioEngine.play(clipName, loop, 1);
            return audioNo;
        }
    };
    SoundManager.prototype.stopAllSounds = function () {
        cc.audioEngine.stopAllEffects();
    };
    return SoundManager;
}());
exports.default = SoundManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXJzL1NvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7UUFHSSxlQUFVLEdBQWtCLElBQUksQ0FBQztJQXVDckMsQ0FBQztJQXRDVSx3QkFBVyxHQUFsQjtRQUNJLElBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUM5QztRQUNELE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLFNBQVM7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLElBQVk7UUFDbEIsOENBQThDO1FBQzdDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFeEMsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRS9CLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsUUFBUSxFQUFFLElBQUk7UUFDckIsaUVBQWlFO1FBQ2pFLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQztZQUNoRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ25ELE9BQU8sT0FBTyxDQUFDO1NBRWxCO0lBRUwsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRXBDLENBQUM7SUFFTCxtQkFBQztBQUFELENBMUNBLEFBMENDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZE1hbmFnZXJ7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2UgOiAgIFNvdW5kTWFuYWdlcjsgXG4gICBcbiAgICBfbXVzaWNDbGlwIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSA6IFNvdW5kTWFuYWdlciB7XG4gICAgICAgIGlmKCFTb3VuZE1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZSA9IG5ldyBTb3VuZE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU291bmRNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGluaXQobXVzaWNDbGlwKXtcbiAgICAgICAgdGhpcy5fbXVzaWNDbGlwID0gbXVzaWNDbGlwO1xuICAgIH1cblxuICAgIHBsYXlNdXNpYyhsb29wOmJvb2xlYW4pe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXkgbXVzaWNcIiwgdGhpcy5fbXVzaWNDbGlwKTtcbiAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLl9tdXNpY0NsaXAsIGxvb3ApO1xuICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMC42KTtcbiAgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBzdG9wTXVzaWMoKXtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgXG4gICAgfVxuXG4gICAgcGxheUVmZmVjdChjbGlwTmFtZSwgbG9vcCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheSBjbGlwXCIsY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU291bmRcIikpO1xuICAgICAgICBpZihKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlNvdW5kXCIpKSl7XG4gICAgICAgICAgICB2YXIgYXVkaW9ObyA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcE5hbWUsIGxvb3AsMSlcbiAgICAgICAgICAgIHJldHVybiBhdWRpb05vO1xuICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG4gICAgc3RvcEFsbFNvdW5kcygpe1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xuICAgICAgIFxuICAgIH0gIFxuXG59Il19