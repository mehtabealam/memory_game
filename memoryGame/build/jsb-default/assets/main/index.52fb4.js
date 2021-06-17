window.__require = function e(t, o, n) {
function a(i, c) {
if (!o[i]) {
if (!t[i]) {
var s = i.split("/");
s = s[s.length - 1];
if (!t[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = s;
}
var p = o[i] = {
exports: {}
};
t[i][0].call(p.exports, function(e) {
return a(t[i][1][e] || e);
}, p, p.exports, e, t, o, n);
}
return o[i].exports;
}
for (var r = "function" == typeof __require && __require, i = 0; i < n.length; i++) a(n[i]);
return a;
}({
AdManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e467f0M6xdMGLGFJO5bBh4e", "AdManager");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = (i.property, function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
o = t;
t.getInstance = function() {
o._instance || (o._instance = new o());
return o._instance;
};
t.prototype.init = function() {
sdkbox.PluginAdMob.init();
sdkbox.PluginAdMob.setListener(this);
var e = this;
sdkbox.PluginAdMob.setListener({
adViewDidReceiveAd: function(t) {
console.log("add has been loaded", t);
"banner" == t && e.showBanner();
},
adViewDidFailToReceiveAdWithError: function() {},
adViewWillPresentScreen: function() {},
adViewDidDismissScreen: function() {},
adViewWillDismissScreen: function() {},
adViewWillLeaveApplication: function() {}
});
};
t.prototype.cacheAds = function(e) {
sdkbox.PluginAdMob.cache(e);
};
t.prototype.setTestDevice = function(e) {
sdkbox.PluginAdMob.setTestDevices(e);
};
t.prototype.showBanner = function() {
console.log("show banner ads");
if (sdkbox.PluginAdMob.isAvailable("banner")) {
sdkbox.PluginAdMob.show("banner");
console.log("show banner ads");
} else {
console.log("not avilable banner ads");
sdkbox.PluginAdMob.cache("banner");
}
};
t.prototype.showInterstital = function() {
if (sdkbox.PluginAdMob.isAvailable("gameover")) {
sdkbox.PluginAdMob.show("gameover");
console.log("show ads");
} else {
console.log("chacheing add");
sdkbox.PluginAdMob.cache("gameover");
}
};
var o;
t._instance = null;
return o = r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
FacebookAudiance: [ function(e, t) {
"use strict";
cc._RF.push(t, "a7156emC5pEy6IYXQVsNTaS", "FacebookAudiance");
var o = {
BANNER: "854006105330177_900427447354709",
INTERSTITIAL: "854006105330177_898749927522461",
REWARDEDVIDEO: "YOUR_PLACEMENT_ID"
}, n = {
BANNER: "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
INTERSTITIAL: "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
REWARDEDVIDEO: "YOUR_PLACEMENT_ID"
};
cc.Class({
extends: cc.Component,
onLoad: function() {
if (!cc.sys.isBrowser) {
this.placementId = o;
cc.log("platform is ", cc.sys.platform, cc.sys.IPAD);
cc.sys.platform !== cc.sys.IPHONE && cc.sys.platform !== cc.sys.IPAD || (this.placementId = n);
this.schedule(this.loadInterstitial, 5, cc.macro.REPEAT_FOREVER, 0);
}
},
showBanner: function() {
if (!cc.sys.isBrowser) {
var e = new cc.Ads.Banner(this.placementId.BANNER, cc.Ads.BANNER_POSITION.ALIGN_PARENT_BOTTOM);
this.banner = e;
e.on("onAdLoaded", function() {
cc.log("banner onAdLoaded");
}, this.node);
e.on("onError", function(e) {
console.log("banner onError", e);
}, this.node);
e.on("onAdClicked", function() {
cc.log("banner onAdClicked");
}, this.node);
e.show().then(function() {
cc.log("banner show-------");
}).catch(function(e) {
cc.log("banner reject ", e);
});
}
},
destryBanner: function() {
this.banner.destroy();
},
loadInterstitial: function() {
var e = this;
this.interstital = new cc.Ads.Interstitial(this.placementId.INTERSTITIAL);
this.interstital.on("onInterstitialDisplayed", function() {
cc.log("interstital onInterstitialDisplayed");
});
this.interstital.on("onInterstitialDismissed", function() {
cc.log("interstital onInterstitialDismissed");
});
this.interstital.on("onAdClicked", function() {
cc.log("interstital onAdClicked");
});
this.interstital.on("onError", function(e) {
console.log("interstital Error:", e);
});
this.interstital.loadAd().then(function() {
e.isInterstitialLoaded = !0;
}).catch(function(e) {
cc.log("interstital catch", e);
});
},
showInterstital: function() {
cc.sys.isBrowser || this.isInterstitialLoaded && this.interstital.show();
}
});
cc._RF.pop();
}, {} ],
GameManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5afc22nll1PkYawyLYfZ9ZR", "GameManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.GameManager = void 0;
var n = e("../helper/constants"), a = function() {
function e() {
this._gameConfig = null;
this._levelsData = null;
this._levelImages = null;
this._currentSelectLanguage = "EN";
this._languageData = null;
this._selectedMode = n.GAME_MODE.PRACTICE;
this._currentLevel = 0;
this.placementId = null;
}
e.getInstance = function() {
e._instance || (e._instance = new e());
return e._instance;
};
e.prototype.setAdIds = function(e) {
this.placementId = e;
};
e.prototype.loadGameConfig = function() {
var e = this;
return new Promise(function(t, o) {
e._gameConfig ? t(e._gameConfig) : cc.resources.load("GameMode/gameConfig", function(n, a) {
if (n) {
console.log("error while loading json");
o(n);
} else {
e._gameConfig = a.json;
t(e._gameConfig);
}
});
});
};
e.prototype.loadLevels = function() {
var e = this;
return new Promise(function(t, o) {
e._levelsData ? t(e._levelsData) : cc.resources.load("Levels/levels", function(n, a) {
if (n) {
console.log("error while loading json");
o(n);
} else {
e._levelsData = a.json;
t(e._levelsData);
}
});
});
};
e.prototype.loadLanaguge = function() {
var e = this;
return new Promise(function(t, o) {
e._languageData ? t(e._languageData) : cc.loader.loadResDir("Languages", cc.JsonAsset, function(n, a) {
if (n) {
o(n);
cc.error("langauge data error :" + n);
} else e._languageData = a;
t(a);
});
});
};
e.prototype.loadLevelImages = function(e) {
var t = this;
return new Promise(function(o, n) {
t._levelImages && t._levelImages.mode && t._levelImages.mode.level[e] ? o(t._levelImages.level[e]) : cc.loader.loadResDir("Levels/Images/LEVEL" + (e + 1), cc.SpriteFrame, function(a, r) {
if (a) {
n(a);
cc.error("loadLevelImages :" + a);
} else {
if (!t._levelImages) {
t._levelImages = {};
t._levelImages.level = [];
}
t._levelImages.level[e] = r;
}
o(t._levelImages.level[e]);
});
});
};
e.prototype.getSpriteFrame = function(e, t, o) {
if (this._levelImages) return this._levelImages.level[t].find(function(e) {
return e.name == o;
});
};
e.prototype.getGameConfiguration = function() {
if (this._gameConfig) return this._gameConfig;
};
e.prototype.getModesInfo = function() {
if (this._gameConfig) return this._gameConfig.gameMode;
};
e.prototype.getModeInfo = function(e) {
if (this._gameConfig) return this._gameConfig.gameMode.find(function(t) {
return t.key == e;
});
};
e.prototype.getLevelInfo = function(e) {
if (this._levelsData) return this._levelsData[e].levels;
};
e.prototype.getLevelData = function(e, t) {
if (this._levelsData) return this._levelsData[t].levels[e];
};
e.prototype.isImagesLoaded = function() {
return !!this._levelsData;
};
e.prototype.getString = function(e) {
var t = this;
return this._languageData ? this._languageData.find(function(e) {
return e.name == t._currentSelectLanguage;
}).json[e] : "";
};
e.prototype.changeCurrentLanguage = function() {
this._currentSelectLanguage = cc.sys.localStorage.getItem("Language");
console.log("change current Language", this._currentSelectLanguage);
};
e.prototype.setGameMode = function(e) {
this._selectedMode = e;
};
e.prototype.getSelectedMode = function() {
return this._selectedMode;
};
e.prototype.setCurrentLevel = function(e) {
this._currentLevel = e;
};
e.prototype.getCurrentLevel = function() {
return this._currentLevel;
};
e.prototype.showBannerAd = function() {};
e.prototype.showInterstitalAds = function() {};
e._instance = null;
return e;
}();
o.GameManager = a;
cc._RF.pop();
}, {
"../helper/constants": "constants"
} ],
LanguageChanger: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7ee636OXbJBvYK1VBBbBSx6", "LanguageChanger");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../helper/constants"), c = e("../managers/GameManager"), s = e("../managers/SoundManager"), l = cc._decorator, p = l.ccclass, u = l.property, d = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.buttonPressed = null;
return t;
}
t.prototype.start = function() {};
t.prototype.onLanguageChange = function(e, t) {
s.default.getInstance().playEffect(this.buttonPressed, !1);
console.log("slected languaue", t, i.LANGUAGES[t], i.LANGUAGES[t]);
cc.sys.localStorage.setItem("Language", i.LANGUAGES[t]);
c.GameManager.getInstance().changeCurrentLanguage();
cc.game.emit("onLanguageChanged");
this.node.active = !1;
};
r([ u(cc.AudioClip) ], t.prototype, "buttonPressed", void 0);
return r([ p ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../helper/constants": "constants",
"../managers/GameManager": "GameManager",
"../managers/SoundManager": "SoundManager"
} ],
LanguageManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "c51ecOCHChPU47xYzdNwnjx", "LanguageManager");
cc._RF.pop();
}, {} ],
SoundManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "93b17C0LKhBYoFHZElu/iWc", "SoundManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {
this._musicClip = null;
}
e.getInstance = function() {
e.instance || (e.instance = new e());
return e.instance;
};
e.prototype.init = function(e) {
this._musicClip = e;
};
e.prototype.playMusic = function(e) {
console.log("play music", this._musicClip);
cc.audioEngine.playMusic(this._musicClip, e);
cc.audioEngine.setMusicVolume(.6);
};
e.prototype.stopMusic = function() {
cc.audioEngine.stopMusic();
};
e.prototype.playEffect = function(e, t) {
console.log("play clip", cc.sys.localStorage.getItem("Sound"));
if (JSON.parse(cc.sys.localStorage.getItem("Sound"))) return cc.audioEngine.play(e, t, 1);
};
e.prototype.stopAllSounds = function() {
cc.audioEngine.stopAllEffects();
};
return e;
}();
o.default = n;
cc._RF.pop();
}, {} ],
cards: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c598c1Sj7hASYtBD+PBTY4r", "cards");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../managers/GameManager"), c = e("../managers/SoundManager"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._cardName = "";
t._isOpen = !0;
t._delagateScript = null;
t.image = null;
t.animationNode = null;
t.back = null;
t.front = null;
t.cardFlip = null;
return t;
}
t.prototype.start = function() {};
t.prototype.setDelegate = function(e) {
this._delagateScript = e;
};
t.prototype.setUpUI = function(e, t, o) {
this._cardName = e;
console.log("card name", e);
this.image.spriteFrame = i.GameManager.getInstance().getSpriteFrame(o, t, e);
};
t.prototype.startAnimation = function() {};
t.prototype.getCardName = function() {
return this._cardName;
};
t.prototype.onCardClicked = function() {
this._isOpen || this._delagateScript.showCard(this.node);
};
t.prototype.setFaceUp = function(e) {
this.back.node.active = !e;
this._isOpen = e;
};
t.prototype.reveal = function() {
if (!this._isOpen) {
c.default.getInstance().playEffect(this.cardFlip, !1);
var e = cc.callFunc(function() {
this.setFaceUp(!0);
}, this), t = (cc.callFunc(function() {}, this), cc.sequence(cc.scaleTo(.1, 0, this.node.scale), e, cc.scaleTo(.1, 1, 1)));
this.animationNode.runAction(t);
}
};
t.prototype.unreveal = function() {
var e = cc.callFunc(function() {
this.setFaceUp(!1);
}, this), t = cc.sequence(cc.scaleTo(.1, 0, 1), e, cc.scaleTo(.1, 1, 1));
this.animationNode.runAction(t);
};
t.prototype.playCorrectAnimation = function() {
var e = cc.scaleTo(.1, .9, .9).easing(cc.easeBounceInOut()), t = cc.sequence(e, cc.delayTime(.2), cc.scaleTo(.1, 1, 1));
this.animationNode.runAction(t);
};
r([ p(cc.Sprite) ], t.prototype, "image", void 0);
r([ p(cc.Node) ], t.prototype, "animationNode", void 0);
r([ p(cc.Sprite) ], t.prototype, "back", void 0);
r([ p(cc.Sprite) ], t.prototype, "front", void 0);
r([ p(cc.AudioClip) ], t.prototype, "cardFlip", void 0);
return r([ l ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../managers/GameManager": "GameManager",
"../managers/SoundManager": "SoundManager"
} ],
constants: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7aa9baqp45Cz4gRhMRED/OS", "constants");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.GAME_LINK = o.LANGUAGES = o.END_POP_UP = o.GAME_MODE = o.GAME_SCREEN = void 0;
(function(e) {
e[e.MODE_SELECTION = 1] = "MODE_SELECTION";
e[e.LEVEL_SELECTION = 2] = "LEVEL_SELECTION";
e[e.GAME_PLAY = 3] = "GAME_PLAY";
})(o.GAME_SCREEN || (o.GAME_SCREEN = {}));
o.GAME_MODE = {
PRACTICE: "practice",
NORMAL: "normal",
MEDIUM: "medium",
HARD: "hard"
};
(function(e) {
e[e.NEW_RECORD = 1] = "NEW_RECORD";
e[e.CLEARD = 2] = "CLEARD";
e[e.FAILED = 3] = "FAILED";
})(o.END_POP_UP || (o.END_POP_UP = {}));
o.LANGUAGES = {
ENGLISH: "EN",
SPANISH: "ES"
};
o.GAME_LINK = {
URL: "https://play.google.com/store/apps/details?id=com.no.color 6"
};
cc._RF.pop();
}, {} ],
gameEnd: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2cdacF8HLRNvKuZpXIY4ps2", "gameEnd");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../helper/constants"), c = e("../managers/GameManager"), s = e("../managers/SoundManager"), l = cc._decorator, p = l.ccclass, u = l.property, d = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._delegate = null;
t.header = null;
t.level = null;
t.remarks = null;
t.mode = null;
t.accept = null;
t.newRecord = null;
t.timesUp = null;
t.passed = null;
t.buttonPressed = null;
return t;
}
t.prototype.start = function() {};
t.prototype.setProperties = function(e) {
this._delegate = e;
};
t.prototype.onAccept = function() {
s.default.getInstance().playEffect(this.buttonPressed, !1);
this._delegate.gameEnded();
};
t.prototype.onPlayAgain = function() {
s.default.getInstance().playEffect(this.buttonPressed, !1);
this._delegate.onPlayAgain();
};
t.prototype.onCancel = function() {
s.default.getInstance().playEffect(this.buttonPressed, !1);
this._delegate.onPlayAgainCancel();
};
t.prototype.showPopUpFor = function(e, t) {
this.level.node.getComponent("localiser").replaceValue("" + (t + 1));
this.level.node.getComponent("localiser").setStringForKey();
var o = c.GameManager.getInstance().getSelectedMode();
console.log("current mode", o);
this.mode.string = c.GameManager.getInstance().getString(o);
this.newRecord.active = !1;
this.timesUp.active = !1;
this.passed.active = !1;
switch (e) {
case i.END_POP_UP.CLEARD:
this.passed.active = !0;
break;

case i.END_POP_UP.FAILED:
this.timesUp.active = !0;
break;

case i.END_POP_UP.NEW_RECORD:
this.newRecord.active = !0;
}
};
r([ u(cc.Label) ], t.prototype, "header", void 0);
r([ u(cc.Label) ], t.prototype, "level", void 0);
r([ u(cc.Label) ], t.prototype, "remarks", void 0);
r([ u(cc.Label) ], t.prototype, "mode", void 0);
r([ u(cc.Button) ], t.prototype, "accept", void 0);
r([ u(cc.Node) ], t.prototype, "newRecord", void 0);
r([ u(cc.Node) ], t.prototype, "timesUp", void 0);
r([ u(cc.Node) ], t.prototype, "passed", void 0);
r([ u(cc.AudioClip) ], t.prototype, "buttonPressed", void 0);
return r([ p ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../helper/constants": "constants",
"../managers/GameManager": "GameManager",
"../managers/SoundManager": "SoundManager"
} ],
gameFutureDetails: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f17601zSpVE0Z/yUYzz7jaT", "gameFutureDetails");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = (i.property, function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {};
t.prototype.setDelegatScript = function(e) {
this._delagateScript = e;
};
t.prototype.onAccept = function() {
this.node.active = !1;
this._delagateScript.onBack();
};
return r([ c ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
gamePlay: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e6979/ZWV5IDKJN8bhNrScU", "gamePlay");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../managers/GameManager"), c = e("../helper/constants"), s = e("../managers/SoundManager"), l = e("../managers/AdManager"), p = cc._decorator, u = p.ccclass, d = p.property, g = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._cards = [];
t._gridInfo = null;
t._level = 0;
t._timer = null;
t.OpenCards = [];
t.cardsInPair = [];
t.levelData = null;
t.interval = null;
t.isTouchBlocked = !1;
t.totalTime = 0;
t.groupOf = 2;
t.progresser = null;
t.gameMode = "";
t.gameStartAlert = null;
t.gameEndAlert = null;
t.optionLayer = null;
t.cardPrefab = null;
t.timerBar = null;
t.gameLayout = null;
t.bouns = null;
t.startPopUp = null;
t.gameEndPopUp = null;
t.correctAnswerAudio = null;
t.wrongAnswerAudiodFlip = null;
t.last5Sec = null;
t.clapping = null;
t.timesUp = null;
return t;
}
t.prototype.onLoad = function() {};
t.prototype.start = function() {
this.progresser = this.timerBar.node.getChildByName("bar");
this.bouns.node.getComponent(cc.Animation).on("finished", this.bounsAnimationCompleted, this);
};
t.prototype.onDisable = function() {
clearInterval(this.interval);
this.OpenCards.length = 0;
this.cardsInPair.length = 0;
this.bouns.node.active = !1;
};
t.prototype.setUpUI = function(e, t, o) {
this.gameLayout.node.active = !1;
this.gameMode = t;
this._level = e;
this.levelData = i.GameManager.getInstance().getLevelData(this._level, this.gameMode);
this.optionLayer = o;
console.log("called 1000 times", this.levelData, this._level);
this.setUpAlerts();
this.loadLevelImages();
};
t.prototype.loadLevelImages = function() {
var e = this;
i.GameManager.getInstance().loadLevelImages(this._level).then(function() {
e.gameStartAlert.getComponent("gameStart").accept.interactable = !0;
e.groupOf = e.levelData.groupOf;
e.createAndShuffelCards();
e._gridInfo = e.levelData.grid;
e.setGrid();
e.bouns.node.getChildByName("bonus").string = e.levelData.timer.bounsTime;
}).catch(function(e) {
console.log("erorr", e);
});
};
t.prototype.setUpAlerts = function() {
i.GameManager.getInstance().getModeInfo(this.gameMode);
this.gameStartAlert = cc.instantiate(this.startPopUp);
var e = this.gameMode == c.GAME_MODE.PRACTICE ? i.GameManager.getInstance().getString(i.GameManager.getInstance().getSelectedMode()) : this.levelData.timer.totalTime + "s";
this.gameStartAlert.getComponent("gameStart").setProperties(this, this.gameMode, e, this.levelData.timer.memorizeTime, this.levelData.timer.bounsTime);
this.gameEndAlert = cc.instantiate(this.gameEndPopUp);
this.gameEndAlert.getComponent("gameEnd").setProperties(this, this.gameMode);
this.node.parent.addChild(this.gameStartAlert, 10);
this.node.parent.addChild(this.gameEndAlert, 10);
this.gameEndAlert.active = !1;
};
t.prototype.setGrid = function() {
this.gameLayout.getComponent(cc.Widget).updateAlignment();
this.gameLayout.node.removeAllChildren();
for (var e = this.gameLayout.spacingX * this._gridInfo.col, t = this.gameLayout.node.width - e, o = 0; o < this._cards.length; o++) {
var n = cc.instantiate(this.cardPrefab), a = t / this._gridInfo.col;
n.setScale(a / n.width);
n.getComponent("cards").setDelegate(this);
n.getComponent("cards").setUpUI(this._cards[o].name, this._level, this.gameMode);
this.gameLayout.node.addChild(n);
}
this.optionLayer.active = !1;
};
t.prototype.createAndShuffelCards = function() {
var e;
this._cards.length = 0;
for (var t = 0; t < this.groupOf; t++) (e = this._cards).push.apply(e, this.levelData.cards);
console.log("cards", this._cards);
for (var o = this._cards.length - 1; o >= 0; o--) {
var n = Math.floor(Math.random() * (o - 0) + 0), a = this._cards[n], r = this._cards[o];
this._cards[o] = a;
this._cards[n] = r;
}
};
t.prototype.FlipAllCards = function() {
for (var e = 0, t = this.gameLayout.node.children; e < t.length; e++) t[e].getComponent("cards").unreveal();
};
t.prototype.startGameTimer = function() {
var e = this;
if (this.gameMode != c.GAME_MODE.PRACTICE) {
this.progresser.width = 0;
this.timerBar.progress = 0;
this.timerBar.totalLength = this.timerBar.node.width;
}
this._timer = 0;
var t = this;
this.totalTime = this.levelData.timer.totalTime;
console.log("total length", this.timerBar.totalLength, this.levelData.timer.totalTime);
this.interval = setInterval(function() {
e._timer++;
t.optionLayer.getComponent("options").updateTimer(e._timer, e.totalTime);
if (e.gameMode != c.GAME_MODE.PRACTICE) {
e.timerBar.progress = e._timer / e.totalTime;
5 == Math.abs(e._timer - e.totalTime) && s.default.getInstance().playEffect(e.last5Sec, !1);
if (e._timer == e.totalTime) {
e.isTouchBlocked = !0;
clearInterval(e.interval);
e.endGame(!1);
}
}
}, 1e3);
};
t.prototype.showCard = function(e) {
if (!(this.cardsInPair.length >= this.groupOf || this.isTouchBlocked)) {
e.getComponent("cards").reveal();
this.cardsInPair.push(e);
this.cardsInPair.length > 1 && this.isPair();
}
};
t.prototype.isPair = function() {
var e = this, t = [];
t.length = 0;
for (var o = 0; o < this.cardsInPair.length; o++) t.push(this.cardsInPair[o].getComponent("cards"));
var n = !0;
for (o = 0; o < t.length - 1; o++) if (t[o].getCardName() !== t[o + 1].getCardName()) {
n = !1;
break;
}
if (n) {
if (this.cardsInPair.length != this.groupOf) return;
if (this.gameMode != c.GAME_MODE.PRACTICE) {
this.playBounsAnimation();
this.isTouchBlocked = !0;
} else {
this.isTouchBlocked = !0;
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
for (var o = 0, n = t; o < n.length; o++) n[o].playCorrectAnimation();
e.isTouchBlocked = !1;
})));
}
for (var a = 0, r = t; a < r.length; a++) {
var i = r[a];
this.OpenCards.push(i.getCardName());
}
this.cardsInPair.length = 0;
this.OpenCards.length == this._cards.length && this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
e.endGame(!0);
})));
} else {
this.isTouchBlocked = !0;
this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
for (var o = 0, n = t; o < n.length; o++) {
n[o].unreveal();
e.isTouchBlocked = !1;
}
e.cardsInPair.length = 0;
})));
}
console.log("play sound", this.correctAnswerAudio, n);
this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
var t = n ? e.correctAnswerAudio : e.wrongAnswerAudiodFlip;
s.default.getInstance().playEffect(t, !1);
})));
};
t.prototype.endGame = function(e) {
var t = this;
s.default.getInstance().stopAllSounds();
clearInterval(this.interval);
if (e) {
var o = !1, n = JSON.parse(cc.sys.localStorage.getItem("LevelInfo")), a = JSON.parse(n[this.gameMode]);
if (a[this._level].time > this._timer) {
a[this._level].time = this._timer;
this._level < a.length - 1 && (a[this._level + 1].isUnlock = !0);
console.log("current level infp", a[this._level].time, this._timer, JSON.parse(n[this.gameMode])[this._level].time);
n[this.gameMode] = JSON.stringify(a);
cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(n));
o = !0;
}
this.gameEndAlert.getComponent("gameEnd").showPopUpFor(o ? c.END_POP_UP.NEW_RECORD : c.END_POP_UP.CLEARD, this._level);
this.gameEndAlert.active = !0;
} else {
this.gameEndAlert.getComponent("gameEnd").showPopUpFor(c.END_POP_UP.FAILED, this._level);
this.gameEndAlert.active = !0;
}
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
var o = e ? t.clapping : t.timesUp;
s.default.getInstance().playEffect(o, !1);
})));
};
t.prototype.onPlayAgain = function() {
this.gameEndAlert.active = !1;
l.default.getInstance().showInterstital();
this.node.parent.getComponent("home").onBack();
console.log("level", this._level.toString());
this.node.parent.getComponent("home").onLevelSelect(this._level.toString());
};
t.prototype.startGame = function() {
var e = this;
this.progresser.width = this.timerBar.node.width;
this.timerBar.progress = 1;
var t = this, o = this.levelData.timer.memorizeTime;
this.gameStartAlert.removeFromParent();
t.optionLayer.getComponent("options").updateTimer(o, this.levelData.timer.totalTime);
t.optionLayer.active = !0;
this.gameLayout.node.active = !0;
this.isTouchBlocked = !0;
this.interval = setInterval(function() {
t.optionLayer.getComponent("options").updateTimer(o, e.levelData.timer.totalTime);
o--;
e.timerBar.progress = o / e.levelData.timer.memorizeTime;
if (-1 === o) {
clearInterval(e.interval);
t.isTouchBlocked = !1;
t.FlipAllCards();
e.startGameTimer();
}
}, 1e3);
};
t.prototype.onPlayAgainCancel = function() {
l.default.getInstance().showInterstital();
this.gameEndAlert.active = !1;
this.gameEndAlert.removeFromParent();
this.node.parent.getComponent("home").onBack();
};
t.prototype.gameEnded = function() {
l.default.getInstance().showInterstital();
this.gameEndAlert.removeFromParent();
var e = i.GameManager.getInstance().getCurrentLevel(), t = i.GameManager.getInstance().getLevelInfo(this.gameMode);
console.log("level", e == t.length - 1);
e == t.length - 1 ? this.node.parent.getComponent("home").showFutureDetailsScreen() : this.node.parent.getComponent("home").onBack();
};
t.prototype.playBounsAnimation = function() {
console.log("inside this play bouns animation");
this.bouns.node.active = !0;
this.bouns.node.position = new cc.Vec2(0, 0);
this.bouns.node.scale = 2;
this.bouns.node.opacity = 255;
this.bouns.node.getComponent(cc.Animation).play();
};
t.prototype.bounsAnimationCompleted = function() {
this.bouns.node.active = !1;
this.totalTime += this.levelData.timer.bounsTime;
console.log("bonys", this.levelData.timer, this.totalTime);
this.optionLayer.getComponent("options").updateTimer(this._timer, this.totalTime);
this.isTouchBlocked = !1;
};
r([ d(cc.Prefab) ], t.prototype, "cardPrefab", void 0);
r([ d(cc.ProgressBar) ], t.prototype, "timerBar", void 0);
r([ d(cc.Layout) ], t.prototype, "gameLayout", void 0);
r([ d(cc.Sprite) ], t.prototype, "bouns", void 0);
r([ d(cc.Prefab) ], t.prototype, "startPopUp", void 0);
r([ d(cc.Prefab) ], t.prototype, "gameEndPopUp", void 0);
r([ d(cc.AudioClip) ], t.prototype, "correctAnswerAudio", void 0);
r([ d(cc.AudioClip) ], t.prototype, "wrongAnswerAudiodFlip", void 0);
r([ d(cc.AudioClip) ], t.prototype, "last5Sec", void 0);
r([ d(cc.AudioClip) ], t.prototype, "clapping", void 0);
r([ d(cc.AudioClip) ], t.prototype, "timesUp", void 0);
return r([ u ], t);
}(cc.Component);
o.default = g;
cc._RF.pop();
}, {
"../helper/constants": "constants",
"../managers/AdManager": "AdManager",
"../managers/GameManager": "GameManager",
"../managers/SoundManager": "SoundManager"
} ],
gameStart: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3ba29evSSZEoYbWi3sSYdtX", "gameStart");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../helper/constants"), c = e("../managers/SoundManager"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._delegate = null;
t.timer = null;
t.prize = null;
t.instraction = null;
t.accept = null;
t.buttonPressed = null;
return t;
}
t.prototype.start = function() {};
t.prototype.setProperties = function(e, t, o, n, a) {
console.log("set properties", o, t);
this._delegate = e;
switch (t) {
case i.GAME_MODE.PRACTICE:
this.prize.node.active = !1;
break;

default:
this.prize.node.active = !0;
}
this.timer.getComponent("localiser").replaceValue("" + o);
this.instraction.getComponent("localiser").replaceValue("" + n);
this.prize.getComponent("localiser").replaceValue("" + a);
};
t.prototype.onAccept = function() {
c.default.getInstance().playEffect(this.buttonPressed, !1);
this._delegate.startGame();
};
r([ p(cc.Label) ], t.prototype, "timer", void 0);
r([ p(cc.Label) ], t.prototype, "prize", void 0);
r([ p(cc.Label) ], t.prototype, "instraction", void 0);
r([ p(cc.Button) ], t.prototype, "accept", void 0);
r([ p(cc.AudioClip) ], t.prototype, "buttonPressed", void 0);
return r([ l ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../helper/constants": "constants",
"../managers/SoundManager": "SoundManager"
} ],
home: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3fe01+rSGFEx4cPC5mf1sQK", "home");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../managers/GameManager"), c = e("../helper/constants"), s = e("../managers/SoundManager"), l = e("../managers/AdManager"), p = cc._decorator, u = p.ccclass, d = p.property, g = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.gameScreen = c.GAME_SCREEN.MODE_SELECTION;
t.gameMode = "";
t.gameModeBtn = null;
t.modeLayout = null;
t.options = null;
t.hud = null;
t.howToPlayPopUp = null;
t.languagePopUp = null;
t.modeSelectionNode = null;
t.levelSelectionNode = null;
t.gameplayNode = null;
t.scrollViewLayout = null;
t.levelHolderPrefab = null;
t.scrollView = null;
t.musicClip = null;
t.moreInfo = null;
t.privacyPolicy = null;
t.buttonPressed = null;
t.bottomBar = null;
t.futureDetailsPrefab = null;
return t;
}
t.prototype.onLoad = function() {
cc.sys.localStorage.getItem("Language") || cc.sys.localStorage.setItem("Language", "ES");
};
t.prototype.start = function() {
var e = this;
this.languagePopUp.zIndex = 7;
this.howToPlayPopUp.zIndex = 7;
this.moreInfo.zIndex = 7;
this.privacyPolicy.zIndex = 7;
this.gameplayNode.getComponent(cc.Animation);
i.GameManager.getInstance().loadGameConfig().then(function(t) {
console.log("data loded successfully", t);
i.GameManager.getInstance().loadLevels().then(function() {
i.GameManager.getInstance().loadLanaguge().then(function() {
i.GameManager.getInstance().changeCurrentLanguage();
cc.game.emit("onLanguageChanged");
e.setupUI();
e.setLevelInfoInLS();
}).catch(function(e) {
console.log("error", e);
});
}).catch(function(e) {
console.log("erorr", e);
});
}).catch(function() {
console.log("error while loading resources");
});
cc.debug.setDisplayStats(!1);
s.default.getInstance().init(this.musicClip);
cc.sys.localStorage.getItem("Sound") || cc.sys.localStorage.setItem("Sound", !1);
if (cc.sys.isMobile) {
console.log("inside this event handel");
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(t) {
console.log("inSide this 120  line number", t.keyCode);
t.keyCode === cc.macro.KEY.back && e.onBack();
});
}
};
t.prototype.setupUI = function() {
this.setupModes();
this.setOptions();
this.setHud();
this.modeSelectionNode.zIndex = 5;
this.futureDetails = cc.instantiate(this.futureDetailsPrefab);
this.futureDetails.zIndex = 6;
this.futureDetails.active = !1;
this.futureDetails.getComponent("gameFutureDetails").setDelegatScript(this);
this.node.addChild(this.futureDetails);
if (cc.sys.isMobile) {
sdkbox.PluginShare.init();
l.default.getInstance().init();
l.default.getInstance().setTestDevice("38311228FC168567547515520CBFCF53");
l.default.getInstance().cacheAds("gameover");
l.default.getInstance().cacheAds("banner");
}
};
t.prototype.onAnimationEnd = function() {
console.log("animation ended");
};
t.prototype.setupModes = function() {
var e = i.GameManager.getInstance().getModesInfo();
console.log("modes", e);
this.modeLayout.spacingY = [ 150, 70, 30, 20, 10 ][e.length - 1];
for (var t = 0, o = e; t < o.length; t++) {
var n = o[t], a = cc.instantiate(this.gameModeBtn);
a.getChildByName("title").getComponent(cc.Label).string = n.title;
a.getChildByName("title").getComponent("localiser").key = n.key;
var r = new cc.Component.EventHandler();
r.target = this.node;
r.component = "home";
r.handler = "onModeSelect";
r.customEventData = n.key;
console.log("button has been created", n.key);
a.getComponent(cc.Button).clickEvents.push(r);
this.modeLayout.node.addChild(a);
}
};
t.prototype.setOptions = function() {
this.opitonLayer = cc.instantiate(this.options);
this.opitonLayer.getComponent("options").setDelegate(this);
this.opitonLayer.getComponent("options").setUpUI(this.gameScreen, this.gameMode);
this.node.addChild(this.opitonLayer);
this.opitonLayer.zIndex = 5;
};
t.prototype.setHud = function() {
this.hudLayer = cc.instantiate(this.hud);
this.node.addChild(this.hudLayer);
this.hudLayer.getComponent("hud").setDelegate(this);
this.hudLayer.zIndex = 1;
this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
};
t.prototype.onModeSelect = function(e, t) {
console.log("mode", t);
s.default.getInstance().playEffect(this.buttonPressed, !1);
i.GameManager.getInstance().setGameMode(t);
console.log("onMode selectons", e, t);
this.modeSelectionNode.active = !1;
this.gameMode = t;
this.showLevelSelection();
};
t.prototype.showLevelSelection = function() {
this.levelSelectionNode.active = !0;
this.setLevelSelectionScreen(this.gameMode);
this.gameScreen = c.GAME_SCREEN.LEVEL_SELECTION;
this.upadteHuds();
this.enabledMoreGamesButton(i.GameManager.getInstance().getGameConfiguration().isMoreGameAvilable);
};
t.prototype.showHowToPlayPopUp = function() {
s.default.getInstance().playEffect(this.buttonPressed, !1);
this.howToPlayPopUp.active = !0;
this.howToPlayPopUp.getChildByName("Post").getComponent(cc.Animation).play();
};
t.prototype.removeHowToPlayPopUp = function() {
s.default.getInstance().playEffect(this.buttonPressed, !1);
this.howToPlayPopUp.active = !1;
};
t.prototype.setLevelSelectionScreen = function(e) {
var t = i.GameManager.getInstance().getLevelInfo(e);
this.scrollViewLayout.node.removeAllChildren();
for (var o = Math.ceil(t.length / 10), n = 0; n < o; n++) {
var a = cc.instantiate(this.levelHolderPrefab);
a.getComponent("levelUIManager").setDelegateComponent(this);
a.getComponent("levelUIManager").populateLevels(10 * n);
this.scrollViewLayout.node.addChild(a);
}
if (1 == o) {
this.scrollViewLayout.node.children[0].width = 1e3;
this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = !0;
this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
this.scrollViewLayout.updateLayout();
} else {
this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = !1;
this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
}
for (var r = JSON.parse(cc.sys.localStorage.getItem("LevelInfo")), c = 0, s = 0, l = JSON.parse(r[e]); s < l.length && l[s].isUnlock; s++) c++;
Math.ceil(c / 10);
this.scrollView.getScrollOffset(), this.scrollViewLayout.node.childrenCount;
this.levelSelectionNode.getComponent(cc.Animation).play("moveIn");
};
t.prototype.onBack = function() {
if (this.gameScreen == c.GAME_SCREEN.LEVEL_SELECTION) {
this.levelSelectionNode.active = !1;
this.modeSelectionNode.active = !0;
this.gameScreen = c.GAME_SCREEN.MODE_SELECTION;
this.upadteHuds();
} else if (this.gameScreen == c.GAME_SCREEN.GAME_PLAY) {
this.gameplayNode.active = !1;
this.levelSelectionNode.active = !0;
this.setLevelSelectionScreen(this.gameMode);
this.modeSelectionNode.active = !1;
this.gameScreen = c.GAME_SCREEN.LEVEL_SELECTION;
this.upadteHuds();
} else cc.game.end();
};
t.prototype.upadteHuds = function() {
this.opitonLayer.getComponent("options").setUpUI(this.gameScreen, this.gameMode);
this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
};
t.prototype.onLevelSelect = function(e) {
s.default.getInstance().playEffect(this.buttonPressed, !1);
i.GameManager.getInstance().setCurrentLevel(parseInt(e));
this.gameScreen = c.GAME_SCREEN.GAME_PLAY;
this.levelSelectionNode.active = !1;
this.modeSelectionNode.active = !1;
this.gameplayNode.active = !0;
this.gameplayNode.getComponent("gamePlay").setUpUI(i.GameManager.getInstance().getCurrentLevel(), this.gameMode, this.opitonLayer);
this.upadteHuds();
};
t.prototype.onLevelAnimationCompleted = function() {
this.gameScreen, c.GAME_SCREEN.GAME_PLAY;
};
t.prototype.setLevelInfoInLS = function() {
cc.sys.localStorage.getItem("LevelInfo") || cc.sys.localStorage.setItem("LevelInfo", JSON.stringify({}));
var e = JSON.parse(cc.sys.localStorage.getItem("LevelInfo")), t = i.GameManager.getInstance().getModesInfo();
console.log("inside ti", t);
for (var o = function(t) {
var o = i.GameManager.getInstance().getLevelInfo(t.key).length, n = {
time: 500,
isUnlock: !1
};
if (e[t.key]) {
var a = JSON.parse(e[t.key]);
if (a.length < o) {
var r = i.GameManager.getInstance().getLevelInfo(t.key).filter(function(e) {
return !a.some(function(t) {
return t.id == e.id;
});
}), c = [];
for (u = 0; u < r.length; u++) c[u] = Object.assign({
id: r[u].id
}, n);
console.log("time ArraY", c);
a.push.apply(a, c);
console.log("time ArraY", a);
} else {
var s = a.filter(function(e) {
return !i.GameManager.getInstance().getLevelInfo(t.key).some(function(t) {
return t.id == e.id;
});
});
console.log("difference", s);
var l = function(e) {
var t = a.findIndex(function(t) {
return t.id == s[e].id;
});
console.log("index", t);
-1 != t && a.splice(t, 1);
};
for (u = 0; u < s.length; u++) l(u);
}
console.log("level Daata", a);
a[0].isUnlock = !0;
e[t.key] = JSON.stringify(a);
} else {
for (var p = [], u = 0; u < o; u++) p[u] = Object.assign({
id: u
}, n);
p[0].isUnlock = !0;
console.log(p[0] === p[1]);
e[t.key] = JSON.stringify(p);
}
}, n = 0, a = t; n < a.length; n++) o(a[n]);
console.log("levelObjectArray", e);
cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(e));
};
t.prototype.openLocalisationPopUp = function() {
s.default.getInstance().playEffect(this.buttonPressed, !1);
this.languagePopUp.active = !0;
};
t.prototype.onShare = function() {
if (!cc.sys.isBrowser) {
s.default.getInstance().playEffect(this.buttonPressed, !1);
var e = {};
e.text = i.GameManager.getInstance().getString("textToShare");
e.title = i.GameManager.getInstance().getString("titleOfShare");
e.link = c.GAME_LINK.URL;
sdkbox.PluginShare.nativeShare(e);
}
};
t.prototype.onMoreGames = function() {
s.default.getInstance().playEffect(this.buttonPressed, !1);
cc.sys.openURL(c.GAME_LINK.URL);
};
t.prototype.openMoreInfoPopUp = function() {
s.default.getInstance().playEffect(this.buttonPressed, !1);
console.log("inside this");
this.moreInfo.active = !0;
};
t.prototype.hideMoreInfoPopUp = function() {
this.moreInfo.active = !1;
};
t.prototype.showPrivacyPolicy = function() {
s.default.getInstance().playEffect(this.buttonPressed, !1);
this.moreInfo.active = !1;
this.privacyPolicy.active = !0;
};
t.prototype.enabledMoreGamesButton = function(e) {
this.moreInfo.getChildByName("Background").getChildByName("buttonLayout").getChildByName("moreGames").active = e;
this.bottomBar.getChildByName("moreGames").active = e;
};
t.prototype.showFutureDetailsScreen = function() {
this.futureDetails.active = !0;
};
r([ d(cc.Prefab) ], t.prototype, "gameModeBtn", void 0);
r([ d(cc.Layout) ], t.prototype, "modeLayout", void 0);
r([ d(cc.Prefab) ], t.prototype, "options", void 0);
r([ d(cc.Prefab) ], t.prototype, "hud", void 0);
r([ d(cc.Node) ], t.prototype, "howToPlayPopUp", void 0);
r([ d(cc.Node) ], t.prototype, "languagePopUp", void 0);
r([ d(cc.Node) ], t.prototype, "modeSelectionNode", void 0);
r([ d(cc.Node) ], t.prototype, "levelSelectionNode", void 0);
r([ d(cc.Node) ], t.prototype, "gameplayNode", void 0);
r([ d(cc.Layout) ], t.prototype, "scrollViewLayout", void 0);
r([ d(cc.Prefab) ], t.prototype, "levelHolderPrefab", void 0);
r([ d(cc.ScrollView) ], t.prototype, "scrollView", void 0);
r([ d(cc.AudioClip) ], t.prototype, "musicClip", void 0);
r([ d(cc.Node) ], t.prototype, "moreInfo", void 0);
r([ d(cc.Node) ], t.prototype, "privacyPolicy", void 0);
r([ d(cc.AudioClip) ], t.prototype, "buttonPressed", void 0);
r([ d(cc.Node) ], t.prototype, "bottomBar", void 0);
r([ d(cc.Prefab) ], t.prototype, "futureDetailsPrefab", void 0);
return r([ u ], t);
}(cc.Component);
o.default = g;
cc._RF.pop();
}, {
"../helper/constants": "constants",
"../managers/AdManager": "AdManager",
"../managers/GameManager": "GameManager",
"../managers/SoundManager": "SoundManager"
} ],
hud: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6713aGUdqRLHbdo1jB5MW+H", "hud");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../helper/constants"), c = e("../managers/SoundManager"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.volumeUp = null;
t.volumeDown = null;
t.volume = null;
t.selectMode = null;
t.back = null;
t.backButtonAudio = null;
return t;
}
t.prototype.start = function() {
this.updateVolumeIcon();
};
t.prototype.setDelegate = function(e) {
console.log("delegate", e);
this.delegate = e;
};
t.prototype.onBack = function() {
c.default.getInstance().playEffect(this.backButtonAudio, !1);
this.delegate.onBack();
};
t.prototype.changeVolume = function() {
if (JSON.parse(cc.sys.localStorage.getItem("Sound"))) {
c.default.getInstance().stopAllSounds();
cc.sys.localStorage.setItem("Sound", !1);
} else cc.sys.localStorage.setItem("Sound", !0);
this.updateVolumeIcon();
};
t.prototype.setVisiblity = function(e) {
switch (e) {
case i.GAME_SCREEN.MODE_SELECTION:
this.volume.node.active = !0;
this.back.node.active = !1;
this.selectMode.node.active = !0;
break;

case i.GAME_SCREEN.LEVEL_SELECTION:
case i.GAME_SCREEN.GAME_PLAY:
this.volume.node.active = !0;
this.back.node.active = !0;
this.selectMode.node.active = !1;
break;

default:
console.log("option error in setVisibility");
}
};
t.prototype.updateVolumeIcon = function() {
this.volume.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = JSON.parse(cc.sys.localStorage.getItem("Sound")) ? this.volumeUp : this.volumeDown;
};
r([ p(cc.SpriteFrame) ], t.prototype, "volumeUp", void 0);
r([ p(cc.SpriteFrame) ], t.prototype, "volumeDown", void 0);
r([ p(cc.Button) ], t.prototype, "volume", void 0);
r([ p(cc.Label) ], t.prototype, "selectMode", void 0);
r([ p(cc.Button) ], t.prototype, "back", void 0);
r([ p(cc.AudioClip) ], t.prototype, "backButtonAudio", void 0);
return r([ l ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../helper/constants": "constants",
"../managers/SoundManager": "SoundManager"
} ],
levelUIManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b088aAKCUxN6IbB3yHKE9T3", "levelUIManager");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../managers/GameManager"), c = cc._decorator, s = c.ccclass, l = c.property, p = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.levelSelectionButton = null;
t.unlocked = null;
t.locked = null;
t.layout = null;
t.title = null;
return t;
}
t.prototype.start = function() {};
t.prototype.setDelegateComponent = function(e) {
this._delagate = e;
};
t.prototype.populateLevels = function(e) {
this.title.node.getComponent("localiser").replaceValue("" + (e / 10 + 1));
this.title.node.getComponent("localiser").setStringForKey();
this.layout.node.removeAllChildren();
for (var t = i.GameManager.getInstance().getSelectedMode(), o = i.GameManager.getInstance().getLevelInfo(t), n = JSON.parse(cc.sys.localStorage.getItem("LevelInfo")), a = JSON.parse(n[t]), r = e + 10 > o.length ? o.length : e + 10, c = e; c < r; c++) {
var s = cc.instantiate(this.levelSelectionButton);
s.getChildByName("Background").getChildByName("title").getComponent(cc.Label).getComponent("localiser").replaceValue("" + (c + 1));
var l = new cc.Component.EventHandler();
l.target = this.node;
l.component = "levelUIManager";
l.handler = "onLevelSelect";
l.customEventData = c.toString();
s.getComponent(cc.Button).clickEvents.push(l);
if (a[c].isUnlock) {
s.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.unlocked;
s.getChildByName("lock").active = !1;
s.getComponent(cc.Button).interactable = !0;
} else {
s.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.locked;
s.getChildByName("lock").active = !0;
s.getComponent(cc.Button).interactable = !1;
}
this.layout.node.addChild(s);
}
};
t.prototype.onLevelSelect = function(e, t) {
this._delagate.onLevelSelect(t);
};
t.prototype.openLocalisation = function() {
this._delagate.openLocalisationPopUp();
};
r([ l(cc.Prefab) ], t.prototype, "levelSelectionButton", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "unlocked", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "locked", void 0);
r([ l(cc.Layout) ], t.prototype, "layout", void 0);
r([ l(cc.Label) ], t.prototype, "title", void 0);
return r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../managers/GameManager": "GameManager"
} ],
localiser: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2b77f6olltHtKmH955sWIoh", "localiser");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../managers/GameManager"), c = cc._decorator, s = c.ccclass, l = c.property, p = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._replaceValue = "";
t.key = "";
return t;
}
t.prototype.onLoad = function() {
var e = this;
cc.game.on("onLanguageChanged", function() {
e.setStringForKey();
});
this.setStringForKey();
};
t.prototype.replaceValue = function(e) {
this._replaceValue = e;
};
t.prototype.setStringForKey = function() {
this.node.getComponent(cc.Label).string = i.GameManager.getInstance().getString(this.key);
if (this._replaceValue.length > 0) {
var e = this.node.getComponent(cc.Label).string.replace("%s", this._replaceValue);
this.node.getComponent(cc.Label).string = e;
}
};
r([ l({
type: String,
tooltip: "key of string that to be localise"
}) ], t.prototype, "key", void 0);
return r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../managers/GameManager": "GameManager"
} ],
options: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2de04PwIi1Ev6FlzpPCOS29", "options");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, l = e("../helper/constants"), p = e("../managers/GameManager"), u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.timer = null;
t.gameMode = null;
t.more = null;
return t;
}
t.prototype.start = function() {};
t.prototype.setDelegate = function(e) {
this._delegateScript = e;
};
t.prototype.setUpUI = function(e, t) {
console.log("options", e, t);
var o = p.GameManager.getInstance().getString(t);
this.gameMode.string = o;
this.deactiveAllNodes();
switch (e) {
case l.GAME_SCREEN.MODE_SELECTION:
this.more.node.active = !0;
break;

case l.GAME_SCREEN.LEVEL_SELECTION:
break;

case l.GAME_SCREEN.GAME_PLAY:
this.timer.node.active = !0;
this.gameMode.node.active = !0;
}
};
t.prototype.deactiveAllNodes = function() {
this.timer.node.active = !1;
this.gameMode.node.active = !1;
this.more.node.active = !1;
};
t.prototype.updateTimer = function(e, t) {
var o = p.GameManager.getInstance().getString("time");
o = o.replace("%s", "");
this.timer.string = "" + o + e + "/" + t;
};
t.prototype.openModeMenu = function() {
this._delegateScript.openMoreInfoPopUp();
};
r([ s(cc.Label) ], t.prototype, "timer", void 0);
r([ s(cc.Label) ], t.prototype, "gameMode", void 0);
r([ s(cc.Button) ], t.prototype, "more", void 0);
return r([ c ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../helper/constants": "constants",
"../managers/GameManager": "GameManager"
} ],
policy: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "089d5/VhmlAz6jYq6PH5J7U", "policy");
var n, a = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var a, r = arguments.length, i = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, o, i) : a(t, o)) || i);
return r > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = e("../managers/GameManager"), c = e("../managers/SoundManager"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.buttonPressed = null;
return t;
}
t.prototype.start = function() {
console.log("on start called");
};
t.prototype.onEnable = function() {
var e = this;
this.node.getComponent(cc.Animation).play("moveIn");
this.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function() {
e.setString();
})));
};
t.prototype.onInAnimationEnd = function() {};
t.prototype.setString = function() {
var e = i.GameManager.getInstance().getString("privacyInformation");
this.label.string = e;
};
t.prototype.onBack = function() {
this.node.getComponent(cc.Animation).play("privacyPloicyMoveOut");
};
t.prototype.onBackAnimationEnd = function() {
console.log("called");
c.default.getInstance().playEffect(this.buttonPressed, !1);
this.node.active = !1;
};
r([ p(cc.Label) ], t.prototype, "label", void 0);
r([ p(cc.AudioClip) ], t.prototype, "buttonPressed", void 0);
return r([ l ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../managers/GameManager": "GameManager",
"../managers/SoundManager": "SoundManager"
} ]
}, {}, [ "hud", "options", "LanguageChanger", "localiser", "policy", "cards", "gameEnd", "gameFutureDetails", "gamePlay", "gameStart", "constants", "home", "levelUIManager", "AdManager", "FacebookAudiance", "GameManager", "LanguageManager", "SoundManager" ]);