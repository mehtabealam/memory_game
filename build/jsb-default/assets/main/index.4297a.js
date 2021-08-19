window.__require = function e(t, o, n) {
function a(r, c) {
if (!o[r]) {
if (!t[r]) {
var s = r.split("/");
s = s[s.length - 1];
if (!t[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = s;
}
var p = o[r] = {
exports: {}
};
t[r][0].call(p.exports, function(e) {
return a(t[r][1][e] || e);
}, p, p.exports, e, t, o, n);
}
return o[r].exports;
}
for (var i = "function" == typeof __require && __require, r = 0; r < n.length; r++) a(n[r]);
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, s = (r.property, function(e) {
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
adViewDidReceiveAd: function(e) {
console.log("add has been loaded", e);
},
adViewDidFailToReceiveAdWithError: function() {},
adViewWillPresentScreen: function(e) {
console.log("adViewWillPresentScreen game ", e);
},
adViewDidDismissScreen: function(t) {
console.log("adViewDidDismissScreen game ", t);
e.delegate.adHasbeenShown();
},
adViewWillDismissScreen: function(e) {
console.log("back game ", e);
},
adViewWillLeaveApplication: function(e) {
console.log("adViewWillLeaveApplication game ", e);
}
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
t.prototype.showInterstital = function(e) {
this.delegate = e;
if (sdkbox.PluginAdMob.isAvailable("gameover")) {
sdkbox.PluginAdMob.show("gameover");
return !0;
}
console.log("chacheing add");
sdkbox.PluginAdMob.cache("gameover");
return !1;
};
t.prototype.isAdAvailable = function() {
if (sdkbox.PluginAdMob.isAvailable("gameover")) return !0;
sdkbox.PluginAdMob.cache("gameover");
return !1;
};
var o;
t._instance = null;
return o = i([ c ], t);
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
this._currentDate = null;
this.screen = [];
}
e.getInstance = function() {
e._instance || (e._instance = new e());
return e._instance;
};
e.prototype.setCurrentDate = function(e) {
this._currentDate = e;
};
e.prototype.getCurrentDate = function() {
return this._currentDate;
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
t._levelImages && t._levelImages.mode && t._levelImages.mode.level[e] ? o(t._levelImages.level[e]) : cc.loader.loadResDir("Levels/Images/LEVEL" + (e + 1), cc.SpriteFrame, function(a, i) {
if (a) {
n(a);
cc.error("loadLevelImages :" + a);
} else {
if (!t._levelImages) {
t._levelImages = {};
t._levelImages.level = [];
}
t._levelImages.level[e] = i;
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
e.prototype.getLevelInfo = function() {
if (this._levelsData) return this._levelsData.levels;
};
e.prototype.getLevelData = function(e) {
if (this._levelsData) return this._levelsData.levels[e];
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
e.prototype.pushScene = function(e) {
console.log("scnee", e);
this.screen.push(e);
};
e.prototype.popScene = function() {
return this.screen.pop();
};
e.prototype.removeAllScene = function() {
this.screen.length = 0;
};
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../helper/constants"), c = e("../managers/GameManager"), s = e("../managers/SoundManager"), l = cc._decorator, p = l.ccclass, u = l.property, d = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.buttonPressed = null;
return t;
}
t.prototype.start = function() {};
t.prototype.onLanguageChange = function(e, t) {
s.default.getInstance().playEffect(this.buttonPressed, !1);
console.log("slected languaue", t, r.LANGUAGES[t], r.LANGUAGES[t]);
cc.sys.localStorage.setItem("Language", r.LANGUAGES[t]);
c.GameManager.getInstance().changeCurrentLanguage();
cc.game.emit("onLanguageChanged");
this.node.active = !1;
};
i([ u(cc.AudioClip) ], t.prototype, "buttonPressed", void 0);
return i([ p ], t);
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
Loading: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ed177eoNkpED4Zbz+u0qGg4", "Loading");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../managers/GameManager"), c = e("../managers/NetworkManager"), s = e("../managers/NetworkConfig"), l = cc._decorator, p = l.ccclass, u = (l.property, 
function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.start = function() {
var e = this;
c.NetworkManager.getInstance().init();
if (!cc.sys.localStorage.getItem("hasLaunchedBeforev2")) {
cc.sys.localStorage.clear();
cc.sys.localStorage.setItem("hasLaunchedBeforev2", !0);
}
cc.sys.localStorage.getItem("Language") || cc.sys.localStorage.setItem("Language", "ES");
cc.sys.localStorage.getItem("hasTermAccepted") || cc.sys.localStorage.setItem("hasTermAccepted", !1);
cc.sys.localStorage.getItem("lastPlayedLevel") || cc.sys.localStorage.setItem("lastPlayedLevel", 0);
cc.sys.localStorage.getItem("hint") || cc.sys.localStorage.setItem("hint", 3);
cc.sys.localStorage.getItem("clue") || cc.sys.localStorage.setItem("clue", 3);
cc.sys.localStorage.getItem("lastTenSeconds") || cc.sys.localStorage.setItem("lastTenSeconds", !1);
cc.sys.localStorage.getItem("rewardClaimDate") || cc.sys.localStorage.setItem("rewardClaimDate", new Date(98, 1, 1).toDateString());
cc.debug.setDisplayStats(!1);
console.log("isonline", cc.sys.getNetworkType());
if (cc.sys.getNetworkType() == cc.sys.NetworkType.LAN || cc.sys.getNetworkType() == cc.sys.NetworkType.WWAN) c.NetworkManager.getInstance().sendRequest(s.API_END_POINTS.GET_TIME, s.REQUEST_TYPE.GET, {}, function(t) {
if (t) {
var o = JSON.parse(t).currentDateTime.split("T")[0];
r.GameManager.getInstance().setCurrentDate(o);
}
console.log("isonline data", t);
e.startLoading();
}, function(t, o) {
console.log("isonline error", t, o);
r.GameManager.getInstance().setCurrentDate(cc.sys.localStorage.getItem("rewardClaimDate"));
e.startLoading();
}, !0); else {
console.log("new network saving local time");
r.GameManager.getInstance().setCurrentDate(cc.sys.localStorage.getItem("rewardClaimDate"));
this.startLoading();
}
};
t.prototype.startLoading = function() {
r.GameManager.getInstance().loadGameConfig().then(function() {
return r.GameManager.getInstance().loadLevels();
}).then(function() {
return r.GameManager.getInstance().loadLanaguge();
}).then(function() {
r.GameManager.getInstance().changeCurrentLanguage();
return r.GameManager.getInstance().loadLevelImages(JSON.parse(cc.sys.localStorage.getItem("lastPlayedLevel")));
}).then(function() {
console.log("Data has been loaded");
cc.director.loadScene("home");
}).catch(function(e) {
return console.error("Error while loading resources", e);
});
};
return i([ p ], t);
}(cc.Component));
o.default = u;
cc._RF.pop();
}, {
"../managers/GameManager": "GameManager",
"../managers/NetworkConfig": "NetworkConfig",
"../managers/NetworkManager": "NetworkManager"
} ],
NetworkConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9dd169kwUdBqYmj9fYp8OWL", "NetworkConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.BASE_ADDRESS = o.REQUEST_TYPE = o.DEPLOYMENT_MODE = o.API_END_POINTS = void 0;
o.API_END_POINTS = {
GET_TIME: "api/json/est/now"
};
(function(e) {
e[e.LOCAL = 0] = "LOCAL";
e[e.DEVELOPMENT = 1] = "DEVELOPMENT";
e[e.STAGING = 2] = "STAGING";
e[e.PRODUCTION = 3] = "PRODUCTION";
})(o.DEPLOYMENT_MODE || (o.DEPLOYMENT_MODE = {}));
o.REQUEST_TYPE = {
GET: "get",
POST: "post",
PUT: "put"
};
o.BASE_ADDRESS = "http://worldclockapi.com/";
cc._RF.pop();
}, {} ],
NetworkManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8aa8cG2/6ZFnaVcFyNKwzwC", "NetworkManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.NetworkManager = void 0;
var n = e("./NetworkConfig"), a = function() {
function e() {
this.baseUrl = "";
}
e.getInstance = function() {
e._instance || (e._instance = new e());
return e._instance;
};
e.prototype.init = function() {
this.baseUrl = n.BASE_ADDRESS;
};
e.prototype.sendRequest = function(e, t, o, n, a, i) {
void 0 === i && (i = !1);
var r = new XMLHttpRequest(), c = this.baseUrl + e;
r.open(t, c);
r.setRequestHeader("Content-Type", "application/json");
r.onreadystatechange = function() {
if (4 === r.readyState && r.status >= 200 && r.status < 300) {
var e = r.responseText;
n(e);
} else if (4 === r.readyState) {
var t = r.responseText;
a(t);
}
};
console.log("param", o);
r.send(JSON.stringify(o));
};
return e;
}();
o.NetworkManager = a;
cc._RF.pop();
}, {
"./NetworkConfig": "NetworkConfig"
} ],
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
cc.audioEngine.playMusic(this._musicClip, e);
cc.audioEngine.setMusicVolume(.6);
};
e.prototype.stopMusic = function() {
cc.audioEngine.stopMusic();
};
e.prototype.playEffect = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../managers/GameManager"), c = e("../managers/SoundManager"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(e) {
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
t.overLay = null;
return t;
}
t.prototype.start = function() {};
t.prototype.setDelegate = function(e) {
this._delagateScript = e;
};
t.prototype.setUpUI = function(e, t, o, n) {
this._cardName = e;
this.image.spriteFrame = r.GameManager.getInstance().getSpriteFrame(o, t, e);
this.front.spriteFrame = n;
this.back.spriteFrame = n;
this.animationNode.setContentSize(n._originalSize);
this.node.setContentSize(n._originalSize);
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
t.prototype.enableOverlay = function() {
this.overLay.active = !0;
};
t.prototype.disableOverlay = function() {
this.overLay.active = !1;
};
t.prototype.isOpen = function() {
return this._isOpen;
};
i([ p(cc.Sprite) ], t.prototype, "image", void 0);
i([ p(cc.Node) ], t.prototype, "animationNode", void 0);
i([ p(cc.Sprite) ], t.prototype, "back", void 0);
i([ p(cc.Sprite) ], t.prototype, "front", void 0);
i([ p(cc.AudioClip) ], t.prototype, "cardFlip", void 0);
i([ p(cc.Node) ], t.prototype, "overLay", void 0);
return i([ l ], t);
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
o.GAME_TYPE = o.GAME_LINK = o.LANGUAGES = o.END_POP_UP = o.GAME_MODE = o.GAME_SCREEN = void 0;
(function(e) {
e[e.HOME = 1] = "HOME";
e[e.LEVEL_SELECTION = 2] = "LEVEL_SELECTION";
e[e.GAME_PLAY = 3] = "GAME_PLAY";
e[e.SETTINGS = 4] = "SETTINGS";
e[e.FUTURE_ANNOCMENTS = 5] = "FUTURE_ANNOCMENTS";
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
e[e.FOR_HIT = 4] = "FOR_HIT";
e[e.FOR_CLUE = 5] = "FOR_CLUE";
})(o.END_POP_UP || (o.END_POP_UP = {}));
o.LANGUAGES = {
ENGLISH: "EN",
SPANISH: "ES"
};
o.GAME_LINK = {
URL: "https://play.google.com/store/apps/details?id=com.game.memoramax"
};
o.GAME_TYPE = {
FIND: 1,
MIRROR: 2
};
cc._RF.pop();
}, {} ],
dailyRewards: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b67fbaoY1pBFYc1exQjbqhk", "dailyRewards");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../managers/GameManager"), c = cc._decorator, s = c.ccclass, l = c.property, p = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.giftLabel = null;
t.clue = null;
t.wrappedNode = null;
t.claimNode = null;
t.delgateScript = null;
t.dailyRewards = [ {
hints: 3,
clue: 2
}, {
hints: 5,
clue: 1
}, {
hints: 4,
clue: 2
}, {
hints: 3,
clue: 1
}, {
hints: 4,
clue: 1
}, {
hints: 1,
clue: 4
}, {
hints: 4,
clue: 2
}, {
hints: 1,
clue: 3
}, {
hints: 3,
clue: 1
}, {
hints: 2,
clue: 3
} ];
t.reward = t.dailyRewards[0];
return t;
}
t.prototype.start = function() {
console.log("date", r.GameManager.getInstance().getCurrentDate());
var e = r.GameManager.getInstance().getCurrentDate().split("-");
if (3 == e.length) {
var t = parseInt(e[2]) % 10;
this.reward = this.dailyRewards[t];
console.log("reward is", this.reward, t);
}
};
t.prototype.setDelegate = function(e) {
this.delgateScript = e;
};
t.prototype.onRewardPicked = function() {
this.wrappedNode.active = !1;
this.claimNode.active = !0;
this.giftLabel.string = "+ " + this.reward.hints;
this.clue.string = "+ " + this.reward.clue;
};
t.prototype.onAccept = function() {
var e = JSON.parse(cc.sys.localStorage.getItem("hint"));
console.log("hint count before calucalytion", e);
e += this.reward.hints;
cc.sys.localStorage.setItem("hint", JSON.stringify(e));
console.log("hint count after calucalytion", e);
cc.sys.localStorage.setItem("rewardClaimDate", r.GameManager.getInstance().getCurrentDate());
JSON.parse(cc.sys.localStorage.getItem("clue"));
this.reward.clue;
cc.sys.localStorage.setItem("clue", JSON.stringify(e));
this.delgateScript.onRewardCollected();
this.node.active = !1;
};
i([ l(cc.Label) ], t.prototype, "giftLabel", void 0);
i([ l(cc.Label) ], t.prototype, "clue", void 0);
i([ l(cc.Node) ], t.prototype, "wrappedNode", void 0);
i([ l(cc.Node) ], t.prototype, "claimNode", void 0);
return i([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../managers/GameManager": "GameManager"
} ],
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../helper/constants"), c = e("../managers/GameManager"), s = e("../managers/SoundManager"), l = e("../managers/AdManager"), p = cc._decorator, u = p.ccclass, d = p.property, g = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.showingAdFromGp = !1;
t._delegate = null;
t.remarks = null;
t.comments = null;
t.newRecord = null;
t.timesUp = null;
t.hintLayer = null;
t.adButtons = null;
t.wantHint = null;
t.buttonPressed = null;
t.powerUpTitle = null;
t.powerUpCover = null;
t.isForClue = !1;
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
t.prototype.showPopUpFor = function(e) {
this.newRecord.active = !1;
this.timesUp.active = !1;
this.hintLayer.active = !1;
this.remarks.string = c.GameManager.getInstance().getString("newRecord");
switch (e) {
case r.END_POP_UP.CLEARD:
this.remarks.string = c.GameManager.getInstance().getString("congratulations");

case r.END_POP_UP.NEW_RECORD:
this.adButtons.interactable = l.default.getInstance().isAdAvailable();
this.newRecord.active = !0;
break;

case r.END_POP_UP.FAILED:
this.timesUp.active = !0;
break;

case r.END_POP_UP.FOR_CLUE:
this.hintLayer.active = !0;
this.isForClue = !0;
this.updatePowerUpTitle();
break;

case r.END_POP_UP.FOR_HIT:
this.hintLayer.active = !0;
this.isForClue = !1;
this.updatePowerUpTitle();
}
};
t.prototype.showAds = function() {
if (!cc.sys.isBrowser && !l.default.getInstance().showInterstital(this)) {
this.adHasbeenShown();
console.log("no ad avilable right now");
}
};
t.prototype.adHasbeenShown = function() {
if (this.isForClue) {
var e = JSON.parse(cc.sys.localStorage.getItem("clue"));
e += 1;
cc.sys.localStorage.setItem("clue", e);
} else {
var t = JSON.parse(cc.sys.localStorage.getItem("hint"));
console.log("hint count before", t);
t += 3;
console.log("hint count after", t);
cc.sys.localStorage.setItem("hint", t);
}
this.isForClue = !1;
if (this.showingAdFromGp) {
console.log("remove ads");
this._delegate.removeHintPopUp();
}
};
t.prototype.watchAd = function() {
this.showingAdFromGp = !0;
this.showAds();
};
t.prototype.cancelAd = function() {
this._delegate.removeHintPopUp();
};
t.prototype.updatePowerUpTitle = function() {
var e = this.isForClue ? "noMoreClue" : "noMoreHints", t = this.isForClue ? "WatchAdsForClues" : "WatchAdsForHint";
this.powerUpTitle.string = c.GameManager.getInstance().getString(e);
this.powerUpCover.string = c.GameManager.getInstance().getString(t);
};
i([ d(cc.Label) ], t.prototype, "remarks", void 0);
i([ d(cc.Label) ], t.prototype, "comments", void 0);
i([ d(cc.Node) ], t.prototype, "newRecord", void 0);
i([ d(cc.Node) ], t.prototype, "timesUp", void 0);
i([ d(cc.Node) ], t.prototype, "hintLayer", void 0);
i([ d(cc.Button) ], t.prototype, "adButtons", void 0);
i([ d(cc.Button) ], t.prototype, "wantHint", void 0);
i([ d(cc.AudioClip) ], t.prototype, "buttonPressed", void 0);
i([ d(cc.Label) ], t.prototype, "powerUpTitle", void 0);
i([ d(cc.Label) ], t.prototype, "powerUpCover", void 0);
return i([ u ], t);
}(cc.Component);
o.default = g;
cc._RF.pop();
}, {
"../helper/constants": "constants",
"../managers/AdManager": "AdManager",
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, s = (r.property, function(e) {
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
return i([ c ], t);
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../managers/GameManager"), c = e("../helper/constants"), s = e("../managers/SoundManager"), l = e("../managers/AdManager"), p = {
GROUP_3_4: 0,
GROUP_4_4: 1,
GROUP_4_5: 2,
GROUP_4_6: 3,
GROUP_4_7: 4
}, u = cc._decorator, d = u.ccclass, g = u.property, h = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._cards = [];
t._gridInfo = null;
t._level = 0;
t._timer = null;
t.OpenCards = [];
t.cardsInPair = [];
t.tutorialCards = [];
t.tutCardName = 0;
t.isTutoiral = !0;
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
t.gameTutorials = null;
t.bounsPoints = 0;
t.isSoundPlaying = !1;
t.cardPrefab = null;
t.options = null;
t.timerBar = null;
t.gameLayout = null;
t.bouns = null;
t.startPopUp = null;
t.gameEndPopUp = null;
t.containerNode = null;
t.correctAnswerAudio = null;
t.wrongAnswerAudiodFlip = null;
t.last5Sec = null;
t.clapping = null;
t.timesUp = null;
t.cardsSpriteFrames = [];
t.hand = null;
t.netError = null;
t.levelLabel = null;
t.gameInstructions = null;
t.tutorials = null;
return t;
}
t.prototype.onLoad = function() {};
t.prototype.start = function() {
this.hand.zIndex = 20;
this.netError.zIndex = 20;
this.progresser = this.timerBar.node.getChildByName("bar");
this.bouns.node.getComponent(cc.Animation).on("finished", this.bounsAnimationCompleted, this);
this.setOptions();
this.progresser.width = 0;
this.timerBar.progress = 0;
this.timerBar.totalLength = this.timerBar.node.width;
};
t.prototype.onDisable = function() {
if (this.node.parent.getComponent("home").isforSetting) s.default.getInstance().stopAllSounds(); else {
clearInterval(this.interval);
this.OpenCards.length = 0;
this.cardsInPair.length = 0;
this.hand.parent = this.node;
this.bouns.node.active = !1;
this.tutorialCards.length = 0;
this.hand.active = !1;
this.isTutoiral = !0;
s.default.getInstance().stopAllSounds();
this.optionLayer.getComponent("options").disableClockButton();
}
};
t.prototype.onEnable = function() {
this.optionLayer && this.optionLayer.getComponent("options").updateHindText();
};
t.prototype.setOptions = function() {
this.optionLayer = cc.instantiate(this.options);
this.optionLayer.getComponent("options").setDelegate(this);
this.optionLayer;
this.node.addChild(this.optionLayer);
this.optionLayer.zIndex = 5;
};
t.prototype.setUpUI = function(e, t) {
this.gameLayout.node.active = !1;
this.gameMode = t;
this._level = e;
this.levelData = r.GameManager.getInstance().getLevelData(this._level, this.gameMode);
this.setUpAlerts();
this.loadLevelImages();
};
t.prototype.loadLevelImages = function() {
var e = this;
r.GameManager.getInstance().loadLevelImages(this._level).then(function() {
e.groupOf = e.levelData.groupOf;
e.createAndShuffelCards();
e._gridInfo = e.levelData.grid;
e.setGrid();
}).catch(function() {});
};
t.prototype.setUpAlerts = function() {
this.gameStartAlert = cc.instantiate(this.startPopUp);
this.levelData.timer.totalTime;
var e = r.GameManager.getInstance().getLevelData(this._level);
this.gameStartAlert.getComponent("gameStart").setProperties(this, e.gameType, e.groupOf);
this.gameEndAlert = cc.instantiate(this.gameEndPopUp);
this.gameEndAlert.getComponent("gameEnd").setProperties(this, this.gameMode);
this.node.parent.addChild(this.gameStartAlert, 7);
this.node.parent.addChild(this.gameEndAlert, 7);
this.gameEndAlert.active = !1;
this.gameStartAlert.active = !1;
};
t.prototype.setGrid = function() {
console.log("inside set card elements");
this.gameLayout.getComponent(cc.Widget).updateAlignment();
this.containerNode.getComponent(cc.Widget).updateAlignment();
this.gameLayout.node.removeAllChildren();
for (var e = p["GROUP_" + this._gridInfo.col + "_" + this._gridInfo.row], t = this.containerNode.height - this.gameLayout.spacingX * this._gridInfo.row, o = this.gameLayout.spacingX * this._gridInfo.col, n = this.containerNode.width - o, a = 1, i = 1, r = 0; r < this._cards.length; r++) {
var c = cc.instantiate(this.cardPrefab);
c.getComponent("cards").setDelegate(this);
c.getComponent("cards").setUpUI(this._cards[r].name, this._level, this.gameMode, this.cardsSpriteFrames[e]);
var s = n / this._gridInfo.col, l = t / this._gridInfo.row;
c.setScale(Math.min(s / c.width, l / c.height));
a = c.scale;
i = c.width;
this.gameLayout.node.addChild(c);
}
this.gameLayout.node.width = this._gridInfo.col * a * i + o;
this.optionLayer.active = !1;
this.gameLayout.node.active = !0;
this.levelLabel.node.parent.active = !0;
console.log("inisde this we have set the cards");
this.updateGamePlay();
};
t.prototype.updateGamePlay = function() {
var e = this;
this.levelLabel.getComponent("localiser").replaceValue("" + (this._level + 1));
this.levelLabel.getComponent("localiser").setStringForKey();
this.levelLabel.node.parent.runAction(cc.sequence(cc.scaleTo(1.5, 1), cc.delayTime(.5), cc.callFunc(function() {
e.levelLabel.node.parent.active = !1;
e.levelLabel.node.parent.scale = .5;
(e._level + 1) % 10 == 1 ? e.showTutorials() : e.startGame();
})));
this.totalTime = this.levelData.timer.totalTime;
this.bouns.node.getChildByName("bonus").string = this.levelData.timer.bounsTime;
};
t.prototype.createAndShuffelCards = function() {
var e;
this._cards.length = 0;
for (var t = 0; t < this.groupOf; t++) (e = this._cards).push.apply(e, this.levelData.cards);
for (var o = this._cards.length - 1; o >= 0; o--) {
var n = Math.floor(Math.random() * (o - 0) + 0), a = this._cards[n], i = this._cards[o];
this._cards[o] = a;
this._cards[n] = i;
}
(this._level + 1) % 10 == 1 && (this.tutCardName = this._cards[Math.floor(Math.random() * (this._cards.length - 1) + 0)].name);
};
t.prototype.flipAllCards = function() {
for (var e = this, t = 0, o = this.gameLayout.node.children; t < o.length; t++) {
var n = o[t];
n.getComponent("cards").unreveal();
(this._level + 1) % 10 != 1 && n.getComponent("cards").disableOverlay();
}
if ((this._level + 1) % 10 == 1) {
this.tutorialCards = this.gameLayout.node.children.filter(function(t) {
return t.getComponent("cards").getCardName() == e.tutCardName;
});
this.isTutoiral = !0;
this.moveTutHand();
} else this.isTutoiral = !1;
};
t.prototype.moveTutHand = function() {
console.log("move tut hand");
var e = this.tutorialCards.shift();
if (e) {
e.parent.getComponent(cc.Widget).updateAlignment();
e.getComponent("cards").disableOverlay();
this.hand.active = !0;
var t = this.containerNode.convertToWorldSpace(e.getPosition()), o = this.hand.parent.convertToNodeSpace(t);
this.hand.y = o.y - e.height * e.scale;
this.hand.x = o.x;
this.hand.stopAllActions();
this.hand.runAction(cc.sequence(cc.moveBy(.5, 0, 50), cc.moveBy(.5, 0, -50)).repeat(1e3));
}
};
t.prototype.moveTudHandsOnHints = function(e) {
this.hand.parent = this.gameTutorials;
var t = this.optionLayer.getComponent("options").getChildrenPosition(e), o = this.optionLayer.parent.convertToWorldSpaceAR(t), n = this.gameTutorials.convertToNodeSpaceAR(o);
this.hand.y = n.y + .3 * this.node.height;
this.hand.x = n.x;
};
t.prototype.startGameTimer = function() {
var e = this, t = this;
t.optionLayer.getComponent("options").updateTimer(0, this.totalTime);
this.interval = setInterval(function() {
e._timer++;
t.optionLayer.getComponent("options").updateTimer(e._timer, e.totalTime);
if (e.gameMode != c.GAME_MODE.PRACTICE) {
e.timerBar.progress = e._timer / e.totalTime;
if (10 == Math.abs(e._timer - e.totalTime) || !e.isSoundPlaying && Math.abs(e._timer - e.totalTime) < 10) {
s.default.getInstance().playEffect(e.last5Sec, !1);
e.isSoundPlaying = !0;
e.optionLayer.getComponent("options").enableClockButton();
console.log("inside thie we are here hhheheheh");
e.showTenSecondsPopUp();
} else if (e.isSoundPlaying && Math.abs(e._timer - e.totalTime) > 10) {
s.default.getInstance().stopAllSounds();
e.optionLayer.getComponent("options").disableClockButton();
e.isSoundPlaying = !1;
}
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
this.isTutoiral && this.moveTutHand();
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
this.playBounsAnimation();
this.isTouchBlocked = !0;
this.node.runAction(cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
for (var o = 0, n = t; o < n.length; o++) n[o].playCorrectAnimation();
e.isTouchBlocked = !1;
})));
for (var a = 0, i = t; a < i.length; a++) {
var r = i[a];
this.OpenCards.push(r.getCardName());
}
this.cardsInPair.length = 0;
this.OpenCards.length == this._cards.length && this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
e.endGame(!0);
})));
this.isTutoiral && this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
e.continueTutorial();
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
this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
var t = n ? e.correctAnswerAudio : e.wrongAnswerAudiodFlip;
s.default.getInstance().playEffect(t, !1);
})));
};
t.prototype.endGame = function(e) {
var t = this;
this.optionLayer.getComponent("options").disableClockButton();
s.default.getInstance().stopAllSounds();
clearInterval(this.interval);
if (e) {
var o = !1, n = JSON.parse(cc.sys.localStorage.getItem("LevelInfo")), a = JSON.parse(n.level);
if (a[this._level].time > this._timer) {
a[this._level].time = this._timer;
this._level < a.length - 1 && (a[this._level + 1].isUnlock = !0);
n.level = JSON.stringify(a);
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
cc.sys.isBrowser || l.default.getInstance().isAdAvailable() && l.default.getInstance().showInterstital(this);
cc.sys.localStorage.setItem("lastPlayedLevel", this._level);
this.node.parent.getComponent("home").onBack();
this.node.parent.getComponent("home").startGame();
};
t.prototype.startGame = function() {
var e = this;
console.log("inside this");
this.levelLabel.node.parent.active = !1;
this.progresser.width = this.timerBar.node.width;
this.timerBar.progress = 1;
var t = this, o = this.levelData.timer.memorizeTime;
t.optionLayer.getComponent("options").updateTimer(o, this.levelData.timer.totalTime);
t.optionLayer.active = !0;
this.isTouchBlocked = !0;
this.interval = setInterval(function() {
t.optionLayer.getComponent("options").updateTimer(o, e.levelData.timer.totalTime);
o--;
e.timerBar.progress = o / e.levelData.timer.memorizeTime;
if (-1 === o) {
clearInterval(e.interval);
t.isTouchBlocked = !1;
t.flipAllCards();
if (!e.isTutoiral) {
e._timer = 0;
e.startGameTimer();
}
}
}, 1e3);
};
t.prototype.onPlayAgainCancel = function() {
this.gameEndAlert.active = !1;
this.gameEndAlert.removeFromParent();
this.node.parent.getComponent("home").onBack();
};
t.prototype.gameEnded = function() {
this.gameEndAlert.removeFromParent();
if (r.GameManager.getInstance().getCurrentLevel() == r.GameManager.getInstance().getLevelInfo(this.gameMode).length - 1) {
this.node.parent.getComponent("home").showFutureDetailsScreen();
r.GameManager.getInstance().pushScene(c.GAME_SCREEN.FUTURE_ANNOCMENTS);
} else {
cc.sys.localStorage.setItem("lastPlayedLevel", this._level + 1);
this.node.parent.getComponent("home").onBack();
this.node.parent.getComponent("home").startGame();
}
};
t.prototype.playBounsAnimation = function(e) {
void 0 === e && (e = !1);
console.log("is from popwe up ", e);
var t = e ? 10 : 5;
this.bounsPoints += t;
this.bouns.node.active = !0;
this.bouns.node.position = new cc.Vec2(0, 0);
this.bouns.node.scale = 2;
this.bouns.node.getComponentInChildren(cc.Label).string = "+" + t;
this.bouns.node.opacity = 255;
this.bouns.node.getComponent(cc.Animation).play();
};
t.prototype.bounsAnimationCompleted = function() {
this.bouns.node.active = !1;
this.totalTime += this.bounsPoints;
this.optionLayer.getComponent("options").updateTimer(this._timer, this.totalTime);
this.isTouchBlocked = !1;
this.bounsPoints = 0;
};
t.prototype.showTutorials = function() {
this.gameTutorials = cc.instantiate(this.tutorials);
this.gameTutorials.getComponent("tutorials").setDelegate(this);
this.gameTutorials.getComponent("tutorials").showMemoriseTime(this.levelData.timer.memorizeTime);
this.hand.setPosition(0, 0);
this.node.parent.addChild(this.gameTutorials, 100);
};
t.prototype.continueTutorial = function() {
this.gameTutorials.active = !0;
this.gameTutorials.getComponent("tutorials").moveToNextSlide();
};
t.prototype.showGameInstructionPopUp = function() {
console.log("inside this we have to see the ");
this.gameStartAlert.active = !0;
this.hand.active = !1;
};
t.prototype.stopTutorials = function() {
this.isTutoiral = !1;
this.tutorialCards.length = 0;
this.gameStartAlert.removeFromParent();
for (var e = 0, t = this.gameLayout.node.children; e < t.length; e++) t[e].getComponent("cards").disableOverlay();
this._timer = 0;
this.startGameTimer();
};
t.prototype.adHasbeenShown = function() {};
t.prototype.isTutorialPlaying = function() {
return this.isTutoiral;
};
t.prototype.removeHintPopUp = function() {
this.gameEndAlert.active = !1;
this.startGameTimer();
this.optionLayer.getComponent("options").updateHindText();
};
t.prototype.showHintPopUP = function(e) {
console.log("cc.sys.getNetworkType()", cc.sys.getNetworkType(), cc.sys.NetworkType.LAN, cc.sys.NetworkType.WWAN);
if (cc.sys.getNetworkType() == cc.sys.NetworkType.LAN || cc.sys.getNetworkType() == cc.sys.NetworkType.WWAN) {
this.gameEndAlert.getComponent("gameEnd").showPopUpFor(e, this._level);
this.gameEndAlert.active = !0;
clearInterval(this.interval);
} else {
console.log("show error pop up", this.netError);
this.showNetErroPopUP();
}
};
t.prototype.showNetErroPopUP = function() {
var e = this;
this.netError.active = !0;
this.netError.getComponentInChildren(cc.Label).string = r.GameManager.getInstance().getString("openNet");
cc.tween(this.netError).delay(2).call(function() {
return e.netError.active = !1;
}).start();
};
t.prototype.openPairCards = function() {
var e = this, t = [];
if (this.cardsInPair.length == this.groupOf || this.isTouchBlocked) console.log("please. return"); else if ((t = 0 != this.cardsInPair.length && this.cardsInPair.length <= this.groupOf ? this.cardsInPair : this.gameLayout.node.children.filter(function(e) {
return !e.getComponent("cards").isOpen();
})).length > 0) {
var o = t[0];
this.gameLayout.node.children.filter(function(e) {
return e.getComponent("cards").getCardName() == o.getComponent("cards").getCardName();
}).forEach(function(t) {
t.getComponent("cards").isOpen() || e.showCard(t);
});
}
};
t.prototype.showTenSecondsPopUp = function() {
console.log("inside this we have to show ten seconds timer here hehe", JSON.parse(cc.sys.localStorage.getItem("lastTenSeconds")));
if (!JSON.parse(cc.sys.localStorage.getItem("lastTenSeconds"))) {
cc.sys.localStorage.setItem("lastTenSeconds", !0);
clearInterval(this.interval);
this.node.parent.getComponent("home").showLastSecondsPopUp();
}
};
t.prototype.hideTenSecondsPopUp = function() {
this.node.parent.getComponent("home").hideLastSecondsPopUp();
this.startGameTimer();
};
i([ g(cc.Prefab) ], t.prototype, "cardPrefab", void 0);
i([ g(cc.Prefab) ], t.prototype, "options", void 0);
i([ g(cc.ProgressBar) ], t.prototype, "timerBar", void 0);
i([ g(cc.Layout) ], t.prototype, "gameLayout", void 0);
i([ g(cc.Sprite) ], t.prototype, "bouns", void 0);
i([ g(cc.Prefab) ], t.prototype, "startPopUp", void 0);
i([ g(cc.Prefab) ], t.prototype, "gameEndPopUp", void 0);
i([ g(cc.Node) ], t.prototype, "containerNode", void 0);
i([ g(cc.AudioClip) ], t.prototype, "correctAnswerAudio", void 0);
i([ g(cc.AudioClip) ], t.prototype, "wrongAnswerAudiodFlip", void 0);
i([ g(cc.AudioClip) ], t.prototype, "last5Sec", void 0);
i([ g(cc.AudioClip) ], t.prototype, "clapping", void 0);
i([ g(cc.AudioClip) ], t.prototype, "timesUp", void 0);
i([ g([ cc.SpriteFrame ]) ], t.prototype, "cardsSpriteFrames", void 0);
i([ g(cc.Node) ], t.prototype, "hand", void 0);
i([ g(cc.Node) ], t.prototype, "netError", void 0);
i([ g(cc.Label) ], t.prototype, "levelLabel", void 0);
i([ g(cc.Node) ], t.prototype, "gameInstructions", void 0);
i([ g(cc.Prefab) ], t.prototype, "tutorials", void 0);
return i([ d ], t);
}(cc.Component);
o.default = h;
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../helper/constants"), c = e("../managers/SoundManager"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._delegate = null;
t.gameName = null;
t.prize = null;
t.instraction = null;
t.accept = null;
t.buttonPressed = null;
return t;
}
t.prototype.start = function() {};
t.prototype.setProperties = function(e, t, o) {
var n = "";
switch (t) {
case r.GAME_TYPE.FIND:
n = "find";
break;

case r.GAME_TYPE.MIRROR:
n = "mirror";
}
this.gameName.node.getComponent("localiser").key = n;
console.log("keyString", n);
this.gameName.node.getComponent("localiser").replaceValue("" + o);
this._delegate = e;
this.instraction.getComponent("localiser").key = "instructionsFor" + n + o;
this.instraction.getComponent("localiser").setStringForKey();
};
t.prototype.onAccept = function() {
c.default.getInstance().playEffect(this.buttonPressed, !1);
this._delegate.stopTutorials();
};
i([ p(cc.Label) ], t.prototype, "gameName", void 0);
i([ p(cc.Label) ], t.prototype, "prize", void 0);
i([ p(cc.Label) ], t.prototype, "instraction", void 0);
i([ p(cc.Button) ], t.prototype, "accept", void 0);
i([ p(cc.AudioClip) ], t.prototype, "buttonPressed", void 0);
return i([ l ], t);
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../managers/GameManager"), c = e("../helper/constants"), s = e("../managers/SoundManager"), l = e("../managers/AdManager"), p = cc._decorator, u = p.ccclass, d = p.property, g = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.gameScreen = c.GAME_SCREEN.HOME;
t.gameMode = "";
t.letloadCount = 0;
t.isAfterTerms = !1;
t.isforSetting = !1;
t.modeLayout = null;
t.hud = null;
t.howToPlayPopUp = null;
t.modeSelectionNode = null;
t.levelSelectionNode = null;
t.gameplayNode = null;
t.scrollViewLayout = null;
t.levelHolderPrefab = null;
t.scrollView = null;
t.musicClip = null;
t.privacyPolicy = null;
t.buttonPressed = null;
t.bottomBar = null;
t.futureDetailsPrefab = null;
t.settings = null;
t.terms = null;
t.dailyRewards = null;
t.loader = null;
t.lastTenSeconds = null;
return t;
}
t.prototype.onLoad = function() {};
t.prototype.start = function() {
var e = this;
console.log("start", c.GAME_SCREEN.HOME);
r.GameManager.getInstance().pushScene(c.GAME_SCREEN.HOME);
this.terms.zIndex = 10;
this.dailyRewards.zIndex = 9;
this.settings.zIndex = 9;
this.settings.getComponent("settings").init(this);
this.howToPlayPopUp.zIndex = 7;
this.loader.zIndex = 12;
this.privacyPolicy.zIndex = 50;
this.lastTenSeconds.zIndex = 60;
this.terms.active = !JSON.parse(cc.sys.localStorage.getItem("hasTermAccepted"));
console.log("active", this.terms.active, cc.sys.localStorage.getItem("hasTermAccepted"));
cc.game.emit("onLanguageChanged");
this.setupUI();
this.setLevelInfoInLS();
this.startImageLoading();
cc.debug.setDisplayStats(!1);
s.default.getInstance().init(this.musicClip);
cc.sys.localStorage.getItem("Sound") || cc.sys.localStorage.setItem("Sound", !1);
cc.sys.isMobile && cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(t) {
t.keyCode === cc.macro.KEY.back && e.onBack();
});
};
t.prototype.setupUI = function() {
this.setHud();
this.modeSelectionNode.zIndex = 5;
this.levelSelectionNode.zIndex = 6;
this.futureDetails = cc.instantiate(this.futureDetailsPrefab);
this.futureDetails.zIndex = 6;
this.futureDetails.active = !1;
this.futureDetails.getComponent("gameFutureDetails").setDelegatScript(this);
this.dailyRewards.getComponent("dailyRewards").setDelegate(this);
this.node.addChild(this.futureDetails);
if (cc.sys.isMobile) {
l.default.getInstance().init();
l.default.getInstance().setTestDevice("12FA347A3FF2FE36F7A2E2AB230AC410");
l.default.getInstance().cacheAds("gameover");
}
if (!this.terms.active) {
var e = cc.sys.localStorage.getItem("rewardClaimDate"), t = r.GameManager.getInstance().getCurrentDate();
console.log("today", t, e);
if (e != t) {
console.log("show daily reward pop up");
this.dailyRewards.active = !0;
} else this.startGame();
}
};
t.prototype.onAnimationEnd = function() {
console.log("animation ended");
};
t.prototype.setHud = function() {
this.hudLayer = cc.instantiate(this.hud);
this.node.addChild(this.hudLayer);
this.hudLayer.getComponent("hud").setDelegate(this);
this.hudLayer.zIndex = 1;
this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
};
t.prototype.showDailyRewards = function() {
this.dailyRewards.active = !0;
};
t.prototype.showLevelSelection = function() {
if (!this.levelSelectionNode.active) {
this.levelSelectionNode.active = !0;
this.setLevelSelectionScreen();
this.gameScreen == c.GAME_SCREEN.SETTINGS && r.GameManager.getInstance().popScene();
this.gameScreen == c.GAME_SCREEN.GAME_PLAY && r.GameManager.getInstance().popScene();
this.changeSceneVisiblity(this.gameScreen, !1);
this.gameScreen = c.GAME_SCREEN.LEVEL_SELECTION;
r.GameManager.getInstance().pushScene(c.GAME_SCREEN.LEVEL_SELECTION);
}
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
t.prototype.addLevelsInLevelSelection = function() {
var e = r.GameManager.getInstance().getLevelInfo();
this.scrollViewLayout.node.removeAllChildren();
for (var t = Math.ceil(e.length / 10), o = 0; o < t; o++) {
var n = cc.instantiate(this.levelHolderPrefab);
n.getComponent("levelUIManager").setDelegateComponent(this);
n.getComponent("levelUIManager").populateLevels(10 * o);
this.scrollViewLayout.node.addChild(n);
}
};
t.prototype.setLevelSelectionScreen = function() {
var e = r.GameManager.getInstance().getLevelInfo();
this.scrollViewLayout.node.removeAllChildren();
for (var t = Math.ceil(e.length / 10), o = 0; o < t; o++) {
var n = cc.instantiate(this.levelHolderPrefab);
n.getComponent("levelUIManager").setDelegateComponent(this);
n.getComponent("levelUIManager").populateLevels(10 * o);
this.scrollViewLayout.node.addChild(n);
}
if (1 == t) {
this.scrollViewLayout.node.children[0].width = 1e3;
this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = !0;
this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
this.scrollViewLayout.updateLayout();
} else {
this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = !1;
this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
}
for (var a = JSON.parse(cc.sys.localStorage.getItem("LevelInfo")), i = 0, c = 0, s = JSON.parse(a.level); c < s.length && s[c].isUnlock; c++) i++;
Math.ceil(i / 10);
this.scrollView.getScrollOffset(), this.scrollViewLayout.node.childrenCount;
this.levelSelectionNode.getComponent(cc.Animation).play("moveIn");
};
t.prototype.onBack = function() {
var e = r.GameManager.getInstance().popScene(), t = r.GameManager.getInstance().popScene();
console.log("curerntScene", e, t);
if (e != c.GAME_SCREEN.HOME) if (e != c.GAME_SCREEN.FUTURE_ANNOCMENTS) {
this.hudLayer.zIndex = 1;
this.gameScreen = t;
this.changeSceneVisiblity(e, !1);
this.changeSceneVisiblity(t, !0);
r.GameManager.getInstance().pushScene(t);
console.log("scene arra", r.GameManager.getInstance().screen);
} else {
r.GameManager.getInstance().removeAllScene();
this.levelSelectionNode.active = !1;
this.settings.active = !1;
this.gameplayNode.active = !1;
this.modeSelectionNode.active = !0;
this.gameScreen = c.GAME_SCREEN.HOME;
r.GameManager.getInstance().pushScene(c.GAME_SCREEN.HOME);
} else cc.game.end();
};
t.prototype.changeSceneVisiblity = function(e, t) {
console.log("scnenes", e, t);
switch (e) {
case c.GAME_SCREEN.LEVEL_SELECTION:
this.levelSelectionNode.active = t;
t && this.setLevelSelectionScreen();
break;

case c.GAME_SCREEN.SETTINGS:
this.settings.getComponent("settings").closeAllPopUps();
this.settings.active = t;
this.isforSetting = t;
break;

case c.GAME_SCREEN.GAME_PLAY:
this.gameplayNode.active = t;
break;

case c.GAME_SCREEN.HOME:
this.modeSelectionNode.active = t;
}
};
t.prototype.startGame = function() {
var e = cc.sys.localStorage.getItem("lastPlayedLevel");
console.log("last played level", e);
this.onLevelSelect(e);
};
t.prototype.onLevelSelect = function(e) {
s.default.getInstance().playEffect(this.buttonPressed, !1);
r.GameManager.getInstance().setCurrentLevel(parseInt(e));
cc.sys.localStorage.setItem("lastPlayedLevel", parseInt(e));
this.changeSceneVisiblity(this.gameScreen, !1);
r.GameManager.getInstance().pushScene(c.GAME_SCREEN.GAME_PLAY);
console.log("we have pushed game scene", r.GameManager.getInstance().screen);
this.gameScreen = c.GAME_SCREEN.GAME_PLAY;
this.levelSelectionNode.active = !1;
this.modeSelectionNode.active = !1;
this.gameplayNode.active = !0;
this.gameplayNode.getComponent("gamePlay").setUpUI(r.GameManager.getInstance().getCurrentLevel());
};
t.prototype.onLevelAnimationCompleted = function() {
this.gameScreen, c.GAME_SCREEN.GAME_PLAY;
};
t.prototype.setLevelInfoInLS = function() {
cc.sys.localStorage.getItem("LevelInfo") || cc.sys.localStorage.setItem("LevelInfo", JSON.stringify({}));
var e = JSON.parse(cc.sys.localStorage.getItem("LevelInfo")), t = r.GameManager.getInstance().getLevelInfo().length, o = {
time: 500,
isUnlock: !1
};
if (e.level) {
var n = JSON.parse(e.level);
if (n.length < t) {
var a = r.GameManager.getInstance().getLevelInfo().filter(function(e) {
return !n.some(function(t) {
return t.id == e.id;
});
}), i = [];
for (p = 0; p < a.length; p++) i[p] = Object.assign({
id: a[p].id
}, o);
console.log("time ArraY", i);
n.push.apply(n, i);
console.log("time ArraY", n);
} else {
var c = n.filter(function(e) {
return !r.GameManager.getInstance().getLevelInfo().some(function(t) {
return t.id == e.id;
});
});
console.log("difference", c);
var s = function(e) {
var t = n.findIndex(function(t) {
return t.id == c[e].id;
});
console.log("index", t);
-1 != t && n.splice(t, 1);
};
for (p = 0; p < c.length; p++) s(p);
}
n[0].isUnlock = !0;
e.level = JSON.stringify(n);
} else {
for (var l = [], p = 0; p < t; p++) l[p] = Object.assign({
id: p
}, o);
l[0].isUnlock = !0;
console.log(l[0] === l[1]);
e.level = JSON.stringify(l);
}
cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(e));
};
t.prototype.onShare = function() {
if (!cc.sys.isBrowser) {
s.default.getInstance().playEffect(this.buttonPressed, !1);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shareApp", "(Ljava/lang/String;)V", "Hey I have been playing this amazing game, let's connect there. " + c.GAME_LINK.URL);
}
};
t.prototype.onMoreGames = function() {
s.default.getInstance().playEffect(this.buttonPressed, !1);
cc.sys.openURL(c.GAME_LINK.URL);
};
t.prototype.showPrivacyPolicy = function() {
s.default.getInstance().playEffect(this.buttonPressed, !1);
this.privacyPolicy.active = !0;
console.log("show privact plicty");
};
t.prototype.enabledMoreGamesButton = function(e) {
this.bottomBar.getChildByName("moreGames").active = e;
};
t.prototype.showFutureDetailsScreen = function() {
this.futureDetails.active = !0;
};
t.prototype.openSettings = function() {
if (!this.settings.active) {
this.isforSetting = !0;
this.gameScreen == c.GAME_SCREEN.LEVEL_SELECTION && r.GameManager.getInstance().popScene();
this.changeSceneVisiblity(this.gameScreen, !1);
this.gameScreen = c.GAME_SCREEN.SETTINGS;
r.GameManager.getInstance().pushScene(c.GAME_SCREEN.SETTINGS);
this.settings.active = !0;
this.hudLayer.zIndex = 8;
console.log(r.GameManager.getInstance().screen);
}
};
t.prototype.onTermsAccept = function() {
this.terms.active = !1;
this.isAfterTerms = !0;
cc.sys.localStorage.setItem("hasTermAccepted", !0);
this.dailyRewards.active = !0;
};
t.prototype.startImageLoading = function() {
var e = this, t = r.GameManager.getInstance().getLevelInfo();
this.letloadCount != t.length && r.GameManager.getInstance().loadLevelImages(this.letloadCount).then(function() {
e.letloadCount++;
e.startImageLoading();
}).catch(function() {
console.log("error while loading data");
});
};
t.prototype.onRewardCollected = function() {
this.isAfterTerms || this.startGame();
};
t.prototype.openTermAndConditions = function() {
this.privacyPolicy.active = !0;
this.privacyPolicy.getComponent("policy").setTerm(this.loader);
};
t.prototype.openPrivacyPolicy = function() {
this.privacyPolicy.active = !0;
this.privacyPolicy.getComponent("policy").setPrivacy(this.loader);
};
t.prototype.showLastSecondsPopUp = function() {
console.log("inside this we are  not going anywhere", cc.sys.localStorage.getItem("lastTenSeconds"));
this.lastTenSeconds.active = !0;
};
t.prototype.hideLastSecondsPopUp = function() {
console.log("inside this last seconds ere are here ");
this.lastTenSeconds.active = !1;
};
i([ d(cc.Layout) ], t.prototype, "modeLayout", void 0);
i([ d(cc.Prefab) ], t.prototype, "hud", void 0);
i([ d(cc.Node) ], t.prototype, "howToPlayPopUp", void 0);
i([ d(cc.Node) ], t.prototype, "modeSelectionNode", void 0);
i([ d(cc.Node) ], t.prototype, "levelSelectionNode", void 0);
i([ d(cc.Node) ], t.prototype, "gameplayNode", void 0);
i([ d(cc.Layout) ], t.prototype, "scrollViewLayout", void 0);
i([ d(cc.Prefab) ], t.prototype, "levelHolderPrefab", void 0);
i([ d(cc.ScrollView) ], t.prototype, "scrollView", void 0);
i([ d(cc.AudioClip) ], t.prototype, "musicClip", void 0);
i([ d(cc.Node) ], t.prototype, "privacyPolicy", void 0);
i([ d(cc.AudioClip) ], t.prototype, "buttonPressed", void 0);
i([ d(cc.Node) ], t.prototype, "bottomBar", void 0);
i([ d(cc.Prefab) ], t.prototype, "futureDetailsPrefab", void 0);
i([ d(cc.Node) ], t.prototype, "settings", void 0);
i([ d(cc.Node) ], t.prototype, "terms", void 0);
i([ d(cc.Node) ], t.prototype, "dailyRewards", void 0);
i([ d(cc.Node) ], t.prototype, "loader", void 0);
i([ d(cc.Node) ], t.prototype, "lastTenSeconds", void 0);
return i([ u ], t);
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../managers/SoundManager"), c = cc._decorator, s = c.ccclass, l = c.property, p = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.volumeUp = null;
t.volumeDown = null;
t.volume = null;
t.selectMode = null;
t.back = null;
t.setting = null;
t.level = null;
t.backButtonAudio = null;
t.buttonAudio = null;
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
r.default.getInstance().playEffect(this.backButtonAudio, !1);
this.delegate.onBack();
};
t.prototype.changeVolume = function() {
if (JSON.parse(cc.sys.localStorage.getItem("Sound"))) {
r.default.getInstance().stopAllSounds();
cc.sys.localStorage.setItem("Sound", !1);
} else cc.sys.localStorage.setItem("Sound", !0);
this.updateVolumeIcon();
};
t.prototype.setVisiblity = function() {
this.volume.node.active = !0;
this.setting.node.active = !0;
this.level.node.active = !0;
};
t.prototype.updateVolumeIcon = function() {
this.volume.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = JSON.parse(cc.sys.localStorage.getItem("Sound")) ? this.volumeUp : this.volumeDown;
};
t.prototype.onSetting = function() {
r.default.getInstance().playEffect(this.buttonAudio, !1);
this.delegate.openSettings();
};
t.prototype.onLevelSelection = function() {
r.default.getInstance().playEffect(this.buttonAudio, !1);
this.delegate.showLevelSelection();
};
i([ l(cc.SpriteFrame) ], t.prototype, "volumeUp", void 0);
i([ l(cc.SpriteFrame) ], t.prototype, "volumeDown", void 0);
i([ l(cc.Button) ], t.prototype, "volume", void 0);
i([ l(cc.Label) ], t.prototype, "selectMode", void 0);
i([ l(cc.Button) ], t.prototype, "back", void 0);
i([ l(cc.Button) ], t.prototype, "setting", void 0);
i([ l(cc.Button) ], t.prototype, "level", void 0);
i([ l(cc.AudioClip) ], t.prototype, "backButtonAudio", void 0);
i([ l(cc.AudioClip) ], t.prototype, "buttonAudio", void 0);
return i([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../managers/GameManager"), c = e("../helper/constants"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(e) {
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
var t = r.GameManager.getInstance().getLevelData(e);
this.setLeveltitle(t.gameType, t.groupOf);
this.layout.node.removeAllChildren();
for (var o = r.GameManager.getInstance().getLevelInfo(), n = JSON.parse(cc.sys.localStorage.getItem("LevelInfo")), a = JSON.parse(n.level), i = e + 10 > o.length ? o.length : e + 10, c = e; c < i; c++) {
var s = cc.instantiate(this.levelSelectionButton);
s.name = c.toString();
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
t.prototype.updateLevels = function(e) {
var t = r.GameManager.getInstance().getLevelData(e);
this.setLeveltitle(t.gameType, t.groupOf);
for (var o = JSON.parse(cc.sys.localStorage.getItem("LevelInfo")), n = r.GameManager.getInstance().getLevelInfo(), a = e + 10 > n.length ? n.length : e + 10, i = JSON.parse(o.level), c = e; c < a; c++) {
var s = cc.instantiate(this.levelSelectionButton);
if (i[c].isUnlock) {
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
t.prototype.setLeveltitle = function(e, t) {
var o = "";
switch (e) {
case c.GAME_TYPE.FIND:
o = "find";
break;

case c.GAME_TYPE.MIRROR:
o = "mirror";
}
this.title.node.getComponent("localiser").key = o;
console.log("keyString", o);
this.title.node.getComponent("localiser").replaceValue("" + t);
this.title.node.getComponent("localiser").setStringForKey();
};
t.prototype.onLevelSelect = function(e, t) {
this._delagate.onLevelSelect(t);
};
t.prototype.openLocalisation = function() {
this._delagate.openLocalisationPopUp();
};
i([ p(cc.Prefab) ], t.prototype, "levelSelectionButton", void 0);
i([ p(cc.SpriteFrame) ], t.prototype, "unlocked", void 0);
i([ p(cc.SpriteFrame) ], t.prototype, "locked", void 0);
i([ p(cc.Layout) ], t.prototype, "layout", void 0);
i([ p(cc.Label) ], t.prototype, "title", void 0);
return i([ l ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../helper/constants": "constants",
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../managers/GameManager"), c = cc._decorator, s = c.ccclass, l = c.property, p = function(e) {
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
this.node.getComponent(cc.Label).string = r.GameManager.getInstance().getString(this.key);
if (this._replaceValue.length > 0) {
var e = this.node.getComponent(cc.Label).string.replace("%s", this._replaceValue);
this.node.getComponent(cc.Label).string = e;
}
};
i([ l({
type: String,
tooltip: "key of string that to be localise"
}) ], t.prototype, "key", void 0);
return i([ s ], t);
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, s = r.property, l = e("../helper/constants"), p = e("../managers/GameManager"), u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.timer = null;
t.gameMode = null;
t.hint = null;
t.clues = null;
t.clueButton = null;
t.hintButton = null;
return t;
}
t.prototype.start = function() {};
t.prototype.setDelegate = function(e) {
this._delegateScript = e;
this.updateHindText();
};
t.prototype.updateHindText = function() {
var e = cc.sys.localStorage.getItem("hint");
this.hint.string = "" + e;
var t = cc.sys.localStorage.getItem("clue");
this.clues.string = "" + t;
this.clueButton.interactable = !0;
};
t.prototype.setUpUI = function(e, t) {
console.log("options", e, t);
var o = p.GameManager.getInstance().getString(t);
this.gameMode.string = o;
this.deactiveAllNodes();
switch (e) {
case l.GAME_SCREEN.HOME:
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
};
t.prototype.updateTimer = function(e, t) {
var o = p.GameManager.getInstance().getString("time");
o = o.replace("%s", "");
this.timer.string = "" + o + e + "/" + t;
};
t.prototype.onHint = function() {
if (!this._delegateScript.isTutorialPlaying()) {
var e = JSON.parse(cc.sys.localStorage.getItem("hint"));
console.log("hint", e);
if (e > 0) {
this._delegateScript.playBounsAnimation(!0);
cc.sys.localStorage.setItem("hint", e - 1);
this.hint.string = "" + (e - 1);
} else this._delegateScript.showHintPopUP(l.END_POP_UP.FOR_HIT);
}
};
t.prototype.onClue = function() {
var e = this;
if (!this._delegateScript.isTutorialPlaying()) {
var t = JSON.parse(cc.sys.localStorage.getItem("clue"));
if (t > 0) {
cc.sys.localStorage.setItem("clue", t - 1);
this.clues.string = "" + (t - 1);
this.clueButton.interactable = !1;
this._delegateScript.openPairCards();
this.clueButton.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
e.clueButton.interactable = !0;
})));
} else this._delegateScript.showHintPopUP(l.END_POP_UP.FOR_CLUE);
}
};
t.prototype.getChildrenPosition = function(e) {
return (e ? this.clueButton.node : this.hintButton.node).getPosition();
};
t.prototype.hideIcon = function(e, t) {
if (e) {
this.clueButton.node.active = !1;
this.hintButton.node.active = !0;
} else {
this.clueButton.node.active = !0;
this.hintButton.node.active = !1;
}
if (null == t) {
this.clueButton.node.active = !0;
this.hintButton.node.active = !0;
}
};
t.prototype.enableClockButton = function() {
this.hintButton.getComponent(cc.Animation).play();
};
t.prototype.disableClockButton = function() {
this.hintButton.getComponent(cc.Animation).stop();
this.hintButton.node.scale = 1;
};
i([ s(cc.Label) ], t.prototype, "timer", void 0);
i([ s(cc.Label) ], t.prototype, "gameMode", void 0);
i([ s(cc.Label) ], t.prototype, "hint", void 0);
i([ s(cc.Label) ], t.prototype, "clues", void 0);
i([ s(cc.Button) ], t.prototype, "clueButton", void 0);
i([ s(cc.Button) ], t.prototype, "hintButton", void 0);
return i([ c ], t);
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../managers/GameManager"), c = e("../managers/SoundManager"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pLabel = null;
t.layout = null;
t.header = null;
t.isTerm = !1;
t.stringArray = [];
t.buttonPressed = null;
return t;
}
t.prototype.onLoad = function() {
console.log("on load is called");
};
t.prototype.start = function() {
console.log("on start called");
};
t.prototype.onEnable = function() {};
t.prototype.onBack = function() {
this.node.active = !1;
};
t.prototype.setTerm = function() {
this.isTerm = !0;
this.header.string = r.GameManager.getInstance().getString("termAndConditions");
this.stringArray = r.GameManager.getInstance().getString("terms");
this.addRemainingLabel();
};
t.prototype.setPrivacy = function() {
this.header.string = r.GameManager.getInstance().getString("privacyPolicyTitle");
this.isTerm = !1;
this.stringArray = r.GameManager.getInstance().getString("privacyInformation");
this.addRemainingLabel();
};
t.prototype.addRemainingLabel = function() {
this.pLabel.string = this.stringArray.reduce(function(e, t) {
return e + t;
}, "");
console.log("sreting", this.stringArray);
};
t.prototype.onBackAnimationEnd = function() {
console.log("called");
c.default.getInstance().playEffect(this.buttonPressed, !1);
this.node.active = !1;
};
t.prototype.openLink = function() {
var e = this.isTerm ? "https://docs.google.com/document/d/12RJd81VYPFEyNzqEyg1g5EmGlJGAxenEiC3ls-mltVQ/edit" : "https://docs.google.com/document/d/1cE961cfk3GJ70BfWmswVd5Spl_70XduWoZTMP9jvizk/edit#heading=h.4ox8fqtrw08x";
cc.sys.openURL(e);
};
i([ p(cc.Label) ], t.prototype, "pLabel", void 0);
i([ p(cc.Label) ], t.prototype, "layout", void 0);
i([ p(cc.Label) ], t.prototype, "header", void 0);
i([ p(cc.AudioClip) ], t.prototype, "buttonPressed", void 0);
return i([ l ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../managers/GameManager": "GameManager",
"../managers/SoundManager": "SoundManager"
} ],
settings: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "02bb0NjDmpAVZy2mmjEJ4iG", "settings");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../managers/SoundManager"), c = cc._decorator, s = c.ccclass, l = c.property, p = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.languagePopUp = null;
t.buttonPressed = null;
t.delegatScript = null;
return t;
}
t.prototype.start = function() {};
t.prototype.init = function(e) {
this.delegatScript = e;
};
t.prototype.openLocalisationPopUp = function() {
r.default.getInstance().playEffect(this.buttonPressed, !1);
this.languagePopUp.active = !0;
};
t.prototype.openTermAndConditions = function() {
this.delegatScript.openTermAndConditions();
};
t.prototype.openPrivacyPolicy = function() {
this.delegatScript.openPrivacyPolicy();
};
t.prototype.onShare = function() {
r.default.getInstance().playEffect(this.buttonPressed, !1);
this.delegatScript.onShare();
};
t.prototype.closeAllPopUps = function() {
this.languagePopUp.active = !1;
};
i([ l(cc.Node) ], t.prototype, "languagePopUp", void 0);
i([ l(cc.AudioClip) ], t.prototype, "buttonPressed", void 0);
return i([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../managers/SoundManager": "SoundManager"
} ],
tempCodeRunnerFile: [ function(e, t) {
"use strict";
cc._RF.push(t, "a7b013T+zRKWpc+lQq9vFxV", "tempCodeRunnerFile");
cc._RF.pop();
}, {} ],
tutorials: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d5cdepIQH5PSpwNpwXvLSJg", "tutorials");
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
}), i = this && this.__decorate || function(e, t, o, n) {
var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
return i > 3 && r && Object.defineProperty(t, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../managers/GameManager"), c = e("../managers/SoundManager"), s = cc._decorator, l = s.ccclass, p = s.property, u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.content = null;
t.button = null;
t.accept = null;
t.bgSpriteFrame = null;
t.bg = null;
t.timePu = null;
t.flipPu = null;
t.audioClip = null;
t.tutorialTexts = [];
t.slideIndex = 0;
t.delegate = null;
return t;
}
t.prototype.start = function() {};
t.prototype.showMemoriseTime = function(e) {
this.tutorialTexts = r.GameManager.getInstance().getString("tutorials");
console.log("tutorial text length is ", this.tutorialTexts);
var t = this.tutorialTexts[this.slideIndex]["slide" + (this.slideIndex + 1)];
this.content.string = t.replace("%s", e);
};
t.prototype.onAccept = function() {
c.default.getInstance().playEffect(this.audioClip, !1);
this.moveToNextSlide();
};
t.prototype.setDelegate = function(e) {
this.delegate = e;
};
t.prototype.moveToNextSlide = function() {
switch (this.slideIndex) {
case 0:
this.node.active = !1;
this.slideIndex++;
this.delegate.startGame();
return;

case 1:
break;

case 2:
this.showPowerUp();
this.delegate.moveTudHandsOnHints(!0);
break;

case 3:
this.showPowerUp();
this.delegate.moveTudHandsOnHints(!1);
this.updateUI();
break;

default:
this.delegate.showGameInstructionPopUp();
this.node.removeFromParent(!0);
return;
}
this.updateTutorialText();
this.slideIndex++;
};
t.prototype.updateUI = function() {
this.bg.spriteFrame = this.bgSpriteFrame;
this.button.node.active = !0;
this.accept.node.active = !1;
};
t.prototype.updateTutorialText = function() {
console.log("slide index", this.slideIndex);
this.content.string = this.tutorialTexts[this.slideIndex]["slide" + (this.slideIndex + 1)];
};
t.prototype.showTutorials = function() {};
t.prototype.showPowerUp = function() {
if (2 == this.slideIndex) {
this.timePu.active = !1;
this.flipPu.active = !0;
} else {
this.timePu.active = !0;
this.flipPu.active = !1;
}
};
i([ p(cc.Label) ], t.prototype, "content", void 0);
i([ p(cc.Button) ], t.prototype, "button", void 0);
i([ p(cc.Button) ], t.prototype, "accept", void 0);
i([ p(cc.SpriteFrame) ], t.prototype, "bgSpriteFrame", void 0);
i([ p(cc.Sprite) ], t.prototype, "bg", void 0);
i([ p(cc.Node) ], t.prototype, "timePu", void 0);
i([ p(cc.Node) ], t.prototype, "flipPu", void 0);
i([ p(cc.AudioClip) ], t.prototype, "audioClip", void 0);
return i([ l ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../managers/GameManager": "GameManager",
"../managers/SoundManager": "SoundManager"
} ]
}, {}, [ "hud", "options", "LanguageChanger", "localiser", "policy", "dailyRewards", "cards", "gameEnd", "gameFutureDetails", "gamePlay", "gameStart", "tutorials", "constants", "home", "Loading", "tempCodeRunnerFile", "levelUIManager", "AdManager", "FacebookAudiance", "GameManager", "LanguageManager", "NetworkConfig", "NetworkManager", "SoundManager", "settings" ]);