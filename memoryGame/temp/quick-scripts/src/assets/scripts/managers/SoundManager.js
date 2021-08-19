"use strict";
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