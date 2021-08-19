window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AdManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e467f0M6xdMGLGFJO5bBh4e", "AdManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AdManager = function(_super) {
      __extends(AdManager, _super);
      function AdManager() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AdManager_1 = AdManager;
      AdManager.getInstance = function() {
        AdManager_1._instance || (AdManager_1._instance = new AdManager_1());
        return AdManager_1._instance;
      };
      AdManager.prototype.init = function() {
        sdkbox.PluginAdMob.init();
        sdkbox.PluginAdMob.setListener(this);
        var target = this;
        sdkbox.PluginAdMob.setListener({
          adViewDidReceiveAd: function(name) {
            console.log("add has been loaded", name);
          },
          adViewDidFailToReceiveAdWithError: function(name, msg) {},
          adViewWillPresentScreen: function(name) {
            console.log("adViewWillPresentScreen game ", name);
          },
          adViewDidDismissScreen: function(name) {
            console.log("adViewDidDismissScreen game ", name);
            target.delegate.adHasbeenShown();
          },
          adViewWillDismissScreen: function(name) {
            console.log("back game ", name);
          },
          adViewWillLeaveApplication: function(name) {
            console.log("adViewWillLeaveApplication game ", name);
          }
        });
      };
      AdManager.prototype.cacheAds = function(adName) {
        sdkbox.PluginAdMob.cache(adName);
      };
      AdManager.prototype.setTestDevice = function(device) {
        sdkbox.PluginAdMob.setTestDevices(device);
      };
      AdManager.prototype.showBanner = function() {
        console.log("show banner ads");
        if (sdkbox.PluginAdMob.isAvailable("banner")) {
          sdkbox.PluginAdMob.show("banner");
          console.log("show banner ads");
        } else {
          console.log("not avilable banner ads");
          sdkbox.PluginAdMob.cache("banner");
        }
      };
      AdManager.prototype.showInterstital = function(inforeToNode) {
        this.delegate = inforeToNode;
        if (sdkbox.PluginAdMob.isAvailable("gameover")) {
          sdkbox.PluginAdMob.show("gameover");
          return true;
        }
        console.log("chacheing add");
        sdkbox.PluginAdMob.cache("gameover");
        return false;
      };
      AdManager.prototype.isAdAvailable = function() {
        if (sdkbox.PluginAdMob.isAvailable("gameover")) return true;
        sdkbox.PluginAdMob.cache("gameover");
        return false;
      };
      var AdManager_1;
      AdManager._instance = null;
      AdManager = AdManager_1 = __decorate([ ccclass ], AdManager);
      return AdManager;
    }(cc.Component);
    exports.default = AdManager;
    cc._RF.pop();
  }, {} ],
  FacebookAudiance: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7156emC5pEy6IYXQVsNTaS", "FacebookAudiance");
    "use strict";
    var LIVE_STATUS = {
      UNKNOWN: 0,
      INITIALIZING: 1,
      RUNNING: 2,
      PAUSED: 3,
      STOPPED: 4,
      COMPLETED: 5
    };
    var PLACEMENT_IDS = {
      ANDROID: {
        BANNER: "854006105330177_900427447354709",
        INTERSTITIAL: "854006105330177_898749927522461",
        REWARDEDVIDEO: "YOUR_PLACEMENT_ID"
      },
      IOS: {
        BANNER: "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
        INTERSTITIAL: "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
        REWARDEDVIDEO: "YOUR_PLACEMENT_ID"
      }
    };
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        if (cc.sys.isBrowser) return;
        this.placementId = PLACEMENT_IDS.ANDROID;
        cc.log("platform is ", cc.sys.platform, cc.sys.IPAD);
        cc.sys.platform !== cc.sys.IPHONE && cc.sys.platform !== cc.sys.IPAD || (this.placementId = PLACEMENT_IDS.IOS);
        this.schedule(this.loadInterstitial, 5, cc.macro.REPEAT_FOREVER, 0);
      },
      showBanner: function showBanner(event) {
        if (cc.sys.isBrowser) return;
        var banner = new cc.Ads.Banner(this.placementId.BANNER, cc.Ads.BANNER_POSITION.ALIGN_PARENT_BOTTOM);
        this.banner = banner;
        banner.on("onAdLoaded", function() {
          cc.log("banner onAdLoaded");
        }, this.node);
        banner.on("onError", function(eCode) {
          console.log("banner onError", eCode);
        }, this.node);
        banner.on("onAdClicked", function() {
          cc.log("banner onAdClicked");
        }, this.node);
        banner.show().then(function() {
          cc.log("banner show-------");
        })["catch"](function(e) {
          cc.log("banner reject ", e);
        });
      },
      destryBanner: function destryBanner() {
        this.banner.destroy();
      },
      loadInterstitial: function loadInterstitial() {
        var _this = this;
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
        this.interstital.on("onError", function(error) {
          console.log("interstital Error:", error);
        });
        this.interstital.loadAd().then(function() {
          _this.isInterstitialLoaded = true;
        })["catch"](function(e) {
          cc.log("interstital catch", e);
        });
      },
      showInterstital: function showInterstital() {
        if (cc.sys.isBrowser) return;
        this.isInterstitialLoaded && this.interstital.show();
      }
    });
    cc._RF.pop();
  }, {} ],
  GameManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5afc22nll1PkYawyLYfZ9ZR", "GameManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameManager = void 0;
    var constants_1 = require("../helper/constants");
    var GameManager = function() {
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
      GameManager.getInstance = function() {
        GameManager._instance || (GameManager._instance = new GameManager());
        return GameManager._instance;
      };
      GameManager.prototype.setCurrentDate = function(date) {
        this._currentDate = date;
      };
      GameManager.prototype.getCurrentDate = function() {
        return this._currentDate;
      };
      GameManager.prototype.loadGameConfig = function() {
        var target = this;
        return new Promise(function(resolve, reject) {
          target._gameConfig ? resolve(target._gameConfig) : cc.resources.load("GameMode/gameConfig", function(error, level) {
            if (error) {
              console.log("error while loading json");
              reject(error);
            } else {
              target._gameConfig = level["json"];
              resolve(target._gameConfig);
            }
          });
        });
      };
      GameManager.prototype.loadLevels = function() {
        var target = this;
        return new Promise(function(resolve, reject) {
          target._levelsData ? resolve(target._levelsData) : cc.resources.load("Levels/levels", function(error, level) {
            if (error) {
              console.log("error while loading json");
              reject(error);
            } else {
              target._levelsData = level["json"];
              resolve(target._levelsData);
            }
          });
        });
      };
      GameManager.prototype.loadLanaguge = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this._languageData ? resolve(_this._languageData) : cc.loader.loadResDir("Languages", cc.JsonAsset, function(err, data) {
            if (err) {
              reject(err);
              cc.error("langauge data error :" + err);
            } else _this._languageData = data;
            resolve(data);
          });
        });
      };
      GameManager.prototype.loadLevelImages = function(levelNo) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this._levelImages && _this._levelImages.mode && _this._levelImages.mode.level[levelNo] ? resolve(_this._levelImages.level[levelNo]) : cc.loader.loadResDir("Levels/Images/LEVEL" + (levelNo + 1), cc.SpriteFrame, function(err, data) {
            if (err) {
              reject(err);
              cc.error("loadLevelImages :" + err);
            } else {
              if (!_this._levelImages) {
                _this._levelImages = {};
                _this._levelImages.level = [];
              }
              _this._levelImages.level[levelNo] = data;
            }
            resolve(_this._levelImages.level[levelNo]);
          });
        });
      };
      GameManager.prototype.getSpriteFrame = function(mode, levelNo, name) {
        if (this._levelImages) {
          var images = this._levelImages.level[levelNo];
          var spriteFrame = images.find(function(item) {
            return item.name == name;
          });
          return spriteFrame;
        }
      };
      GameManager.prototype.getGameConfiguration = function() {
        if (this._gameConfig) return this._gameConfig;
      };
      GameManager.prototype.getModesInfo = function() {
        if (this._gameConfig) return this._gameConfig["gameMode"];
      };
      GameManager.prototype.getModeInfo = function(modeName) {
        if (this._gameConfig) return this._gameConfig["gameMode"].find(function(mode) {
          return mode.key == modeName;
        });
      };
      GameManager.prototype.getLevelInfo = function() {
        if (this._levelsData) return this._levelsData["levels"];
      };
      GameManager.prototype.getLevelData = function(levelNo) {
        if (this._levelsData) return this._levelsData["levels"][levelNo];
      };
      GameManager.prototype.isImagesLoaded = function() {
        return !!this._levelsData;
      };
      GameManager.prototype.getString = function(key) {
        var _this = this;
        if (this._languageData) {
          var language = this._languageData.find(function(item) {
            return item.name == _this._currentSelectLanguage;
          });
          return language.json[key];
        }
        return "";
      };
      GameManager.prototype.changeCurrentLanguage = function() {
        this._currentSelectLanguage = cc.sys.localStorage.getItem("Language");
        console.log("change current Language", this._currentSelectLanguage);
      };
      GameManager.prototype.setGameMode = function(mode) {
        this._selectedMode = mode;
      };
      GameManager.prototype.getSelectedMode = function() {
        return this._selectedMode;
      };
      GameManager.prototype.setCurrentLevel = function(level) {
        this._currentLevel = level;
      };
      GameManager.prototype.getCurrentLevel = function() {
        return this._currentLevel;
      };
      GameManager.prototype.pushScene = function(scene) {
        console.log("scnee", scene);
        this.screen.push(scene);
      };
      GameManager.prototype.popScene = function() {
        return this.screen.pop();
      };
      GameManager.prototype.removeAllScene = function() {
        this.screen.length = 0;
      };
      GameManager._instance = null;
      return GameManager;
    }();
    exports.GameManager = GameManager;
    cc._RF.pop();
  }, {
    "../helper/constants": "constants"
  } ],
  LanguageChanger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ee636OXbJBvYK1VBBbBSx6", "LanguageChanger");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var constants_1 = require("../helper/constants");
    var GameManager_1 = require("../managers/GameManager");
    var SoundManager_1 = require("../managers/SoundManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LangueChanger = function(_super) {
      __extends(LangueChanger, _super);
      function LangueChanger() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.buttonPressed = null;
        return _this;
      }
      LangueChanger.prototype.start = function() {};
      LangueChanger.prototype.onLanguageChange = function(Event, selected) {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        console.log("slected languaue", selected, constants_1.LANGUAGES[selected], constants_1.LANGUAGES[selected]);
        cc.sys.localStorage.setItem("Language", constants_1.LANGUAGES[selected]);
        GameManager_1.GameManager.getInstance().changeCurrentLanguage();
        cc.game.emit("onLanguageChanged");
        this.node.active = false;
      };
      __decorate([ property(cc.AudioClip) ], LangueChanger.prototype, "buttonPressed", void 0);
      LangueChanger = __decorate([ ccclass ], LangueChanger);
      return LangueChanger;
    }(cc.Component);
    exports.default = LangueChanger;
    cc._RF.pop();
  }, {
    "../helper/constants": "constants",
    "../managers/GameManager": "GameManager",
    "../managers/SoundManager": "SoundManager"
  } ],
  LanguageManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c51ecOCHChPU47xYzdNwnjx", "LanguageManager");
    cc._RF.pop();
  }, {} ],
  Loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed177eoNkpED4Zbz+u0qGg4", "Loading");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameManager_1 = require("../managers/GameManager");
    var NetworkManager_1 = require("../managers/NetworkManager");
    var NetworkConfig_1 = require("../managers/NetworkConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Loading = function(_super) {
      __extends(Loading, _super);
      function Loading() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Loading.prototype.start = function() {
        var _this = this;
        NetworkManager_1.NetworkManager.getInstance().init();
        if (!cc.sys.localStorage.getItem("hasLaunchedBeforev2")) {
          cc.sys.localStorage.clear();
          cc.sys.localStorage.setItem("hasLaunchedBeforev2", true);
        }
        cc.sys.localStorage.getItem("Language") || cc.sys.localStorage.setItem("Language", "ES");
        cc.sys.localStorage.getItem("hasTermAccepted") || cc.sys.localStorage.setItem("hasTermAccepted", false);
        cc.sys.localStorage.getItem("lastPlayedLevel") || cc.sys.localStorage.setItem("lastPlayedLevel", 0);
        cc.sys.localStorage.getItem("hint") || cc.sys.localStorage.setItem("hint", 3);
        cc.sys.localStorage.getItem("clue") || cc.sys.localStorage.setItem("clue", 3);
        cc.sys.localStorage.getItem("lastTenSeconds") || cc.sys.localStorage.setItem("lastTenSeconds", false);
        cc.sys.localStorage.getItem("rewardClaimDate") || cc.sys.localStorage.setItem("rewardClaimDate", new Date(98, 1, 1).toDateString());
        cc.debug.setDisplayStats(false);
        console.log("isonline", cc.sys.getNetworkType());
        if (cc.sys.getNetworkType() == cc.sys.NetworkType.LAN || cc.sys.getNetworkType() == cc.sys.NetworkType.WWAN) NetworkManager_1.NetworkManager.getInstance().sendRequest(NetworkConfig_1.API_END_POINTS.GET_TIME, NetworkConfig_1.REQUEST_TYPE.GET, {}, function(data, error) {
          if (data) {
            var parseData = JSON.parse(data);
            var date = parseData.currentDateTime;
            var day = date.split("T")[0];
            GameManager_1.GameManager.getInstance().setCurrentDate(day);
          }
          console.log("isonline data", data);
          _this.startLoading();
        }, function(error, data) {
          console.log("isonline error", error, data);
          GameManager_1.GameManager.getInstance().setCurrentDate(cc.sys.localStorage.getItem("rewardClaimDate"));
          _this.startLoading();
        }, true); else {
          console.log("new network saving local time");
          GameManager_1.GameManager.getInstance().setCurrentDate(cc.sys.localStorage.getItem("rewardClaimDate"));
          this.startLoading();
        }
      };
      Loading.prototype.startLoading = function() {
        GameManager_1.GameManager.getInstance().loadGameConfig().then(function() {
          return GameManager_1.GameManager.getInstance().loadLevels();
        }).then(function() {
          return GameManager_1.GameManager.getInstance().loadLanaguge();
        }).then(function() {
          GameManager_1.GameManager.getInstance().changeCurrentLanguage();
          return GameManager_1.GameManager.getInstance().loadLevelImages(JSON.parse(cc.sys.localStorage.getItem("lastPlayedLevel")));
        }).then(function() {
          console.log("Data has been loaded");
          cc.director.loadScene("home");
        }).catch(function(error) {
          return console.error("Error while loading resources", error);
        });
      };
      Loading = __decorate([ ccclass ], Loading);
      return Loading;
    }(cc.Component);
    exports.default = Loading;
    cc._RF.pop();
  }, {
    "../managers/GameManager": "GameManager",
    "../managers/NetworkConfig": "NetworkConfig",
    "../managers/NetworkManager": "NetworkManager"
  } ],
  NetworkConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9dd169kwUdBqYmj9fYp8OWL", "NetworkConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BASE_ADDRESS = exports.REQUEST_TYPE = exports.DEPLOYMENT_MODE = exports.API_END_POINTS = void 0;
    exports.API_END_POINTS = {
      GET_TIME: "api/json/est/now"
    };
    var DEPLOYMENT_MODE;
    (function(DEPLOYMENT_MODE) {
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
  }, {} ],
  NetworkManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8aa8cG2/6ZFnaVcFyNKwzwC", "NetworkManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NetworkManager = void 0;
    var NetworkConfig_1 = require("./NetworkConfig");
    var NetworkManager = function() {
      function NetworkManager() {
        this.baseUrl = "";
      }
      NetworkManager.getInstance = function() {
        NetworkManager._instance || (NetworkManager._instance = new NetworkManager());
        return NetworkManager._instance;
      };
      NetworkManager.prototype.init = function() {
        this.baseUrl = NetworkConfig_1.BASE_ADDRESS;
      };
      NetworkManager.prototype.sendRequest = function(api, reuqestType, param, successCb, errorCb, requireToken) {
        void 0 === requireToken && (requireToken = false);
        var xhr = new XMLHttpRequest();
        var fullurl = this.baseUrl + api;
        var readyStateChanged = function() {
          if (4 === xhr.readyState && xhr.status >= 200 && xhr.status < 300) {
            var response = xhr.responseText;
            successCb(response);
          } else if (4 === xhr.readyState) {
            var respone = xhr.responseText;
            errorCb(respone);
          }
        };
        xhr.open(reuqestType, fullurl);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = readyStateChanged;
        console.log("param", param);
        xhr.send(JSON.stringify(param));
      };
      return NetworkManager;
    }();
    exports.NetworkManager = NetworkManager;
    cc._RF.pop();
  }, {
    "./NetworkConfig": "NetworkConfig"
  } ],
  SoundManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93b17C0LKhBYoFHZElu/iWc", "SoundManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SoundManager = function() {
      function SoundManager() {
        this._musicClip = null;
      }
      SoundManager.getInstance = function() {
        SoundManager.instance || (SoundManager.instance = new SoundManager());
        return SoundManager.instance;
      };
      SoundManager.prototype.init = function(musicClip) {
        this._musicClip = musicClip;
      };
      SoundManager.prototype.playMusic = function(loop) {
        cc.audioEngine.playMusic(this._musicClip, loop);
        cc.audioEngine.setMusicVolume(.6);
      };
      SoundManager.prototype.stopMusic = function() {
        cc.audioEngine.stopMusic();
      };
      SoundManager.prototype.playEffect = function(clipName, loop) {
        if (JSON.parse(cc.sys.localStorage.getItem("Sound"))) {
          var audioNo = cc.audioEngine.play(clipName, loop, 1);
          return audioNo;
        }
      };
      SoundManager.prototype.stopAllSounds = function() {
        cc.audioEngine.stopAllEffects();
      };
      return SoundManager;
    }();
    exports.default = SoundManager;
    cc._RF.pop();
  }, {} ],
  cards: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c598c1Sj7hASYtBD+PBTY4r", "cards");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameManager_1 = require("../managers/GameManager");
    var SoundManager_1 = require("../managers/SoundManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Card = function(_super) {
      __extends(Card, _super);
      function Card() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._cardName = "";
        _this._isOpen = true;
        _this._delagateScript = null;
        _this.image = null;
        _this.animationNode = null;
        _this.back = null;
        _this.front = null;
        _this.cardFlip = null;
        _this.overLay = null;
        return _this;
      }
      Card.prototype.start = function() {};
      Card.prototype.setDelegate = function(delegate) {
        this._delagateScript = delegate;
      };
      Card.prototype.setUpUI = function(spriteFrameKey, level, mode, cardSpriteFrame) {
        this._cardName = spriteFrameKey;
        this.image.spriteFrame = GameManager_1.GameManager.getInstance().getSpriteFrame(mode, level, spriteFrameKey);
        this.front.spriteFrame = cardSpriteFrame;
        this.back.spriteFrame = cardSpriteFrame;
        this.animationNode.setContentSize(cardSpriteFrame._originalSize);
        this.node.setContentSize(cardSpriteFrame._originalSize);
      };
      Card.prototype.startAnimation = function() {};
      Card.prototype.getCardName = function() {
        return this._cardName;
      };
      Card.prototype.onCardClicked = function() {
        this._isOpen || this._delagateScript.showCard(this.node);
      };
      Card.prototype.setFaceUp = function(showFace) {
        this.back.node.active = !showFace;
        this._isOpen = showFace;
      };
      Card.prototype.reveal = function() {
        if (this._isOpen) return;
        SoundManager_1.default.getInstance().playEffect(this.cardFlip, false);
        var callFunc1 = cc.callFunc(function() {
          this.setFaceUp(true);
        }, this);
        var callFunc2 = cc.callFunc(function() {}, this);
        var initialScale = 1;
        var revealAction = cc.sequence(cc.scaleTo(.1, 0, this.node.scale), callFunc1, cc.scaleTo(.1, initialScale, initialScale));
        this.animationNode.runAction(revealAction);
      };
      Card.prototype.unreveal = function() {
        var callFunc1 = cc.callFunc(function() {
          this.setFaceUp(false);
        }, this);
        var unrevealAction = cc.sequence(cc.scaleTo(.1, 0, 1), callFunc1, cc.scaleTo(.1, 1, 1));
        this.animationNode.runAction(unrevealAction);
      };
      Card.prototype.playCorrectAnimation = function() {
        var bounce = cc.scaleTo(.1, .9, .9).easing(cc.easeBounceInOut());
        var correctAnimation = cc.sequence(bounce, cc.delayTime(.2), cc.scaleTo(.1, 1, 1));
        this.animationNode.runAction(correctAnimation);
      };
      Card.prototype.enableOverlay = function() {
        this.overLay.active = true;
      };
      Card.prototype.disableOverlay = function() {
        this.overLay.active = false;
      };
      Card.prototype.isOpen = function() {
        return this._isOpen;
      };
      __decorate([ property(cc.Sprite) ], Card.prototype, "image", void 0);
      __decorate([ property(cc.Node) ], Card.prototype, "animationNode", void 0);
      __decorate([ property(cc.Sprite) ], Card.prototype, "back", void 0);
      __decorate([ property(cc.Sprite) ], Card.prototype, "front", void 0);
      __decorate([ property(cc.AudioClip) ], Card.prototype, "cardFlip", void 0);
      __decorate([ property(cc.Node) ], Card.prototype, "overLay", void 0);
      Card = __decorate([ ccclass ], Card);
      return Card;
    }(cc.Component);
    exports.default = Card;
    cc._RF.pop();
  }, {
    "../managers/GameManager": "GameManager",
    "../managers/SoundManager": "SoundManager"
  } ],
  constants: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7aa9baqp45Cz4gRhMRED/OS", "constants");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GAME_TYPE = exports.GAME_LINK = exports.LANGUAGES = exports.END_POP_UP = exports.GAME_MODE = exports.GAME_SCREEN = void 0;
    var GAME_SCREEN;
    (function(GAME_SCREEN) {
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
    (function(END_POP_UP) {
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
  }, {} ],
  dailyRewards: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b67fbaoY1pBFYc1exQjbqhk", "dailyRewards");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameManager_1 = require("../managers/GameManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DailyRewards = function(_super) {
      __extends(DailyRewards, _super);
      function DailyRewards() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.giftLabel = null;
        _this.clue = null;
        _this.wrappedNode = null;
        _this.claimNode = null;
        _this.delgateScript = null;
        _this.dailyRewards = [ {
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
        _this.reward = _this.dailyRewards[0];
        return _this;
      }
      DailyRewards.prototype.start = function() {
        console.log("date", GameManager_1.GameManager.getInstance().getCurrentDate());
        var date = GameManager_1.GameManager.getInstance().getCurrentDate().split("-");
        if (3 == date.length) {
          var index = parseInt(date[2]) % 10;
          this.reward = this.dailyRewards[index];
          console.log("reward is", this.reward, index);
        }
      };
      DailyRewards.prototype.setDelegate = function(delegate) {
        this.delgateScript = delegate;
      };
      DailyRewards.prototype.onRewardPicked = function() {
        this.wrappedNode.active = false;
        this.claimNode.active = true;
        this.giftLabel.string = "+ " + this.reward.hints;
        this.clue.string = "+ " + this.reward.clue;
      };
      DailyRewards.prototype.onAccept = function() {
        var hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
        console.log("hint count before calucalytion", hintCount);
        hintCount += this.reward.hints;
        cc.sys.localStorage.setItem("hint", JSON.stringify(hintCount));
        console.log("hint count after calucalytion", hintCount);
        cc.sys.localStorage.setItem("rewardClaimDate", GameManager_1.GameManager.getInstance().getCurrentDate());
        var clueCount = JSON.parse(cc.sys.localStorage.getItem("clue"));
        clueCount += this.reward.clue;
        cc.sys.localStorage.setItem("clue", JSON.stringify(hintCount));
        this.delgateScript.onRewardCollected();
        this.node.active = false;
      };
      __decorate([ property(cc.Label) ], DailyRewards.prototype, "giftLabel", void 0);
      __decorate([ property(cc.Label) ], DailyRewards.prototype, "clue", void 0);
      __decorate([ property(cc.Node) ], DailyRewards.prototype, "wrappedNode", void 0);
      __decorate([ property(cc.Node) ], DailyRewards.prototype, "claimNode", void 0);
      DailyRewards = __decorate([ ccclass ], DailyRewards);
      return DailyRewards;
    }(cc.Component);
    exports.default = DailyRewards;
    cc._RF.pop();
  }, {
    "../managers/GameManager": "GameManager"
  } ],
  gameEnd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2cdacF8HLRNvKuZpXIY4ps2", "gameEnd");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var constants_1 = require("../helper/constants");
    var GameManager_1 = require("../managers/GameManager");
    var SoundManager_1 = require("../managers/SoundManager");
    var AdManager_1 = require("../managers/AdManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameEnd = function(_super) {
      __extends(GameEnd, _super);
      function GameEnd() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.showingAdFromGp = false;
        _this._delegate = null;
        _this.remarks = null;
        _this.comments = null;
        _this.newRecord = null;
        _this.timesUp = null;
        _this.hintLayer = null;
        _this.adButtons = null;
        _this.wantHint = null;
        _this.buttonPressed = null;
        _this.powerUpTitle = null;
        _this.powerUpCover = null;
        _this.isForClue = false;
        return _this;
      }
      GameEnd.prototype.start = function() {};
      GameEnd.prototype.setProperties = function(delegate, gameMode) {
        this._delegate = delegate;
      };
      GameEnd.prototype.onAccept = function() {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this._delegate.gameEnded();
      };
      GameEnd.prototype.onPlayAgain = function() {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this._delegate.onPlayAgain();
      };
      GameEnd.prototype.onCancel = function() {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this._delegate.onPlayAgainCancel();
      };
      GameEnd.prototype.showPopUpFor = function(type, level) {
        this.newRecord.active = false;
        this.timesUp.active = false;
        this.hintLayer.active = false;
        this.remarks.string = GameManager_1.GameManager.getInstance().getString("newRecord");
        switch (type) {
         case constants_1.END_POP_UP.CLEARD:
          this.remarks.string = GameManager_1.GameManager.getInstance().getString("congratulations");

         case constants_1.END_POP_UP.NEW_RECORD:
          this.adButtons.interactable = AdManager_1.default.getInstance().isAdAvailable();
          this.newRecord.active = true;
          break;

         case constants_1.END_POP_UP.FAILED:
          this.timesUp.active = true;
          break;

         case constants_1.END_POP_UP.FOR_CLUE:
          this.hintLayer.active = true;
          this.isForClue = true;
          this.updatePowerUpTitle();
          break;

         case constants_1.END_POP_UP.FOR_HIT:
          this.hintLayer.active = true;
          this.isForClue = false;
          this.updatePowerUpTitle();
        }
      };
      GameEnd.prototype.showAds = function() {
        if (!cc.sys.isBrowser && !AdManager_1.default.getInstance().showInterstital(this)) {
          this.adHasbeenShown();
          console.log("no ad avilable right now");
        }
      };
      GameEnd.prototype.adHasbeenShown = function() {
        if (this.isForClue) {
          var clueCount = JSON.parse(cc.sys.localStorage.getItem("clue"));
          clueCount += 1;
          cc.sys.localStorage.setItem("clue", clueCount);
        } else {
          var hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
          console.log("hint count before", hintCount);
          hintCount += 3;
          console.log("hint count after", hintCount);
          cc.sys.localStorage.setItem("hint", hintCount);
        }
        this.isForClue = false;
        if (this.showingAdFromGp) {
          console.log("remove ads");
          this._delegate.removeHintPopUp();
        }
      };
      GameEnd.prototype.watchAd = function() {
        this.showingAdFromGp = true;
        this.showAds();
      };
      GameEnd.prototype.cancelAd = function() {
        this._delegate.removeHintPopUp();
      };
      GameEnd.prototype.updatePowerUpTitle = function() {
        var key = this.isForClue ? "noMoreClue" : "noMoreHints";
        var key2 = this.isForClue ? "WatchAdsForClues" : "WatchAdsForHint";
        this.powerUpTitle.string = GameManager_1.GameManager.getInstance().getString(key);
        this.powerUpCover.string = GameManager_1.GameManager.getInstance().getString(key2);
      };
      __decorate([ property(cc.Label) ], GameEnd.prototype, "remarks", void 0);
      __decorate([ property(cc.Label) ], GameEnd.prototype, "comments", void 0);
      __decorate([ property(cc.Node) ], GameEnd.prototype, "newRecord", void 0);
      __decorate([ property(cc.Node) ], GameEnd.prototype, "timesUp", void 0);
      __decorate([ property(cc.Node) ], GameEnd.prototype, "hintLayer", void 0);
      __decorate([ property(cc.Button) ], GameEnd.prototype, "adButtons", void 0);
      __decorate([ property(cc.Button) ], GameEnd.prototype, "wantHint", void 0);
      __decorate([ property(cc.AudioClip) ], GameEnd.prototype, "buttonPressed", void 0);
      __decorate([ property(cc.Label) ], GameEnd.prototype, "powerUpTitle", void 0);
      __decorate([ property(cc.Label) ], GameEnd.prototype, "powerUpCover", void 0);
      GameEnd = __decorate([ ccclass ], GameEnd);
      return GameEnd;
    }(cc.Component);
    exports.default = GameEnd;
    cc._RF.pop();
  }, {
    "../helper/constants": "constants",
    "../managers/AdManager": "AdManager",
    "../managers/GameManager": "GameManager",
    "../managers/SoundManager": "SoundManager"
  } ],
  gameFutureDetails: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f17601zSpVE0Z/yUYzz7jaT", "gameFutureDetails");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.setDelegatScript = function(delegate) {
        this._delagateScript = delegate;
      };
      NewClass.prototype.onAccept = function() {
        this.node.active = false;
        this._delagateScript.onBack();
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  gamePlay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6979/ZWV5IDKJN8bhNrScU", "gamePlay");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameManager_1 = require("../managers/GameManager");
    var constants_1 = require("../helper/constants");
    var SoundManager_1 = require("../managers/SoundManager");
    var AdManager_1 = require("../managers/AdManager");
    var cardIndex = {
      GROUP_3_4: 0,
      GROUP_4_4: 1,
      GROUP_4_5: 2,
      GROUP_4_6: 3,
      GROUP_4_7: 4
    };
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GamePlay = function(_super) {
      __extends(GamePlay, _super);
      function GamePlay() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._cards = [];
        _this._gridInfo = null;
        _this._level = 0;
        _this._timer = null;
        _this.OpenCards = [];
        _this.cardsInPair = [];
        _this.tutorialCards = [];
        _this.tutCardName = 0;
        _this.isTutoiral = true;
        _this.levelData = null;
        _this.interval = null;
        _this.isTouchBlocked = false;
        _this.totalTime = 0;
        _this.groupOf = 2;
        _this.progresser = null;
        _this.gameMode = "";
        _this.gameStartAlert = null;
        _this.gameEndAlert = null;
        _this.optionLayer = null;
        _this.gameTutorials = null;
        _this.bounsPoints = 0;
        _this.isSoundPlaying = false;
        _this.cardPrefab = null;
        _this.options = null;
        _this.timerBar = null;
        _this.gameLayout = null;
        _this.bouns = null;
        _this.startPopUp = null;
        _this.gameEndPopUp = null;
        _this.containerNode = null;
        _this.correctAnswerAudio = null;
        _this.wrongAnswerAudiodFlip = null;
        _this.last5Sec = null;
        _this.clapping = null;
        _this.timesUp = null;
        _this.cardsSpriteFrames = [];
        _this.hand = null;
        _this.netError = null;
        _this.levelLabel = null;
        _this.gameInstructions = null;
        _this.tutorials = null;
        return _this;
      }
      GamePlay.prototype.onLoad = function() {};
      GamePlay.prototype.start = function() {
        this.hand.zIndex = 20;
        this.netError.zIndex = 20;
        this.progresser = this.timerBar.node.getChildByName("bar");
        var animationClips = this.bouns.node.getComponent(cc.Animation);
        animationClips.on("finished", this.bounsAnimationCompleted, this);
        this.setOptions();
        this.progresser.width = 0;
        this.timerBar.progress = 0;
        this.timerBar.totalLength = this.timerBar.node.width;
      };
      GamePlay.prototype.onDisable = function() {
        if (this.node.parent.getComponent("home").isforSetting) SoundManager_1.default.getInstance().stopAllSounds(); else {
          clearInterval(this.interval);
          this.OpenCards.length = 0;
          this.cardsInPair.length = 0;
          this.hand.parent = this.node;
          this.bouns.node.active = false;
          this.tutorialCards.length = 0;
          this.hand.active = false;
          this.isTutoiral = true;
          SoundManager_1.default.getInstance().stopAllSounds();
          this.optionLayer.getComponent("options").disableClockButton();
        }
      };
      GamePlay.prototype.onEnable = function() {
        this.optionLayer && this.optionLayer.getComponent("options").updateHindText();
      };
      GamePlay.prototype.setOptions = function() {
        this.optionLayer = cc.instantiate(this.options);
        this.optionLayer.getComponent("options").setDelegate(this);
        this.optionLayer;
        this.node.addChild(this.optionLayer);
        this.optionLayer.zIndex = 5;
      };
      GamePlay.prototype.setUpUI = function(level, gameMode) {
        this.gameLayout.node.active = false;
        this.gameMode = gameMode;
        this._level = level;
        this.levelData = GameManager_1.GameManager.getInstance().getLevelData(this._level, this.gameMode);
        this.setUpAlerts();
        this.loadLevelImages();
      };
      GamePlay.prototype.loadLevelImages = function() {
        var _this = this;
        GameManager_1.GameManager.getInstance().loadLevelImages(this._level).then(function(data) {
          _this.groupOf = _this.levelData.groupOf;
          _this.createAndShuffelCards();
          _this._gridInfo = _this.levelData.grid;
          _this.setGrid();
        }).catch(function(error) {});
      };
      GamePlay.prototype.setUpAlerts = function() {
        this.gameStartAlert = cc.instantiate(this.startPopUp);
        var timerTitle = this.levelData.timer.totalTime + "s";
        var levelInfo = GameManager_1.GameManager.getInstance().getLevelData(this._level);
        this.gameStartAlert.getComponent("gameStart").setProperties(this, levelInfo.gameType, levelInfo.groupOf);
        this.gameEndAlert = cc.instantiate(this.gameEndPopUp);
        this.gameEndAlert.getComponent("gameEnd").setProperties(this, this.gameMode);
        this.node.parent.addChild(this.gameStartAlert, 7);
        this.node.parent.addChild(this.gameEndAlert, 7);
        this.gameEndAlert.active = false;
        this.gameStartAlert.active = false;
      };
      GamePlay.prototype.setGrid = function() {
        console.log("inside set card elements");
        this.gameLayout.getComponent(cc.Widget).updateAlignment();
        this.containerNode.getComponent(cc.Widget).updateAlignment();
        this.gameLayout.node.removeAllChildren();
        var index = cardIndex["GROUP_" + this._gridInfo.col + "_" + this._gridInfo.row];
        var totalHeight = this.containerNode.height - this.gameLayout.spacingX * this._gridInfo.row;
        var spacing = this.gameLayout.spacingX * this._gridInfo.col;
        var width = this.containerNode.width - spacing;
        var scale = 1;
        var dummyWidth = 1;
        for (var i = 0; i < this._cards.length; i++) {
          var card = cc.instantiate(this.cardPrefab);
          card.getComponent("cards").setDelegate(this);
          card.getComponent("cards").setUpUI(this._cards[i].name, this._level, this.gameMode, this.cardsSpriteFrames[index]);
          var blockSize = width / this._gridInfo.col;
          var height = totalHeight / this._gridInfo.row;
          card.setScale(Math.min(blockSize / card.width, height / card.height));
          scale = card.scale;
          dummyWidth = card.width;
          this.gameLayout.node.addChild(card);
        }
        this.gameLayout.node.width = this._gridInfo.col * (scale * dummyWidth) + spacing;
        this.optionLayer.active = false;
        this.gameLayout.node.active = true;
        this.levelLabel.node.parent.active = true;
        console.log("inisde this we have set the cards");
        this.updateGamePlay();
      };
      GamePlay.prototype.updateGamePlay = function() {
        var _this = this;
        this.levelLabel.getComponent("localiser").replaceValue("" + (this._level + 1));
        this.levelLabel.getComponent("localiser").setStringForKey();
        this.levelLabel.node.parent.runAction(cc.sequence(cc.scaleTo(1.5, 1), cc.delayTime(.5), cc.callFunc(function() {
          _this.levelLabel.node.parent.active = false;
          _this.levelLabel.node.parent.scale = .5;
          (_this._level + 1) % 10 == 1 ? _this.showTutorials() : _this.startGame();
        })));
        this.totalTime = this.levelData.timer.totalTime;
        this.bouns.node.getChildByName("bonus").string = this.levelData.timer.bounsTime;
      };
      GamePlay.prototype.createAndShuffelCards = function() {
        var _a;
        this._cards.length = 0;
        for (var i = 0; i < this.groupOf; i++) (_a = this._cards).push.apply(_a, this.levelData.cards);
        for (var index = this._cards.length - 1; index >= 0; index--) {
          var randomIndex = Math.floor(Math.random() * (index - 0) + 0);
          var swapElement = this._cards[randomIndex];
          var currentElement = this._cards[index];
          this._cards[index] = swapElement;
          this._cards[randomIndex] = currentElement;
        }
        (this._level + 1) % 10 == 1 && (this.tutCardName = this._cards[Math.floor(Math.random() * (this._cards.length - 1) + 0)].name);
      };
      GamePlay.prototype.flipAllCards = function() {
        var _this = this;
        for (var _i = 0, _a = this.gameLayout.node.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.getComponent("cards").unreveal();
          (this._level + 1) % 10 != 1 && child.getComponent("cards").disableOverlay();
        }
        if ((this._level + 1) % 10 == 1) {
          this.tutorialCards = this.gameLayout.node.children.filter(function(item) {
            return item.getComponent("cards").getCardName() == _this.tutCardName;
          });
          this.isTutoiral = true;
          this.moveTutHand();
        } else this.isTutoiral = false;
      };
      GamePlay.prototype.moveTutHand = function() {
        console.log("move tut hand");
        var card = this.tutorialCards.shift();
        if (!card) return;
        card.parent.getComponent(cc.Widget).updateAlignment();
        card.getComponent("cards").disableOverlay();
        this.hand.active = true;
        var worldSpace = this.containerNode.convertToWorldSpace(card.getPosition());
        var nodeSpace = this.hand.parent.convertToNodeSpace(worldSpace);
        this.hand.y = nodeSpace.y - card.height * card.scale;
        this.hand.x = nodeSpace.x;
        this.hand.stopAllActions();
        this.hand.runAction(cc.sequence(cc.moveBy(.5, 0, 50), cc.moveBy(.5, 0, -50)).repeat(1e3));
      };
      GamePlay.prototype.moveTudHandsOnHints = function(isOnMagnifineGlass) {
        this.hand.parent = this.gameTutorials;
        var position = this.optionLayer.getComponent("options").getChildrenPosition(isOnMagnifineGlass);
        var worldSpace = this.optionLayer.parent.convertToWorldSpaceAR(position);
        var nodeSpace = this.gameTutorials.convertToNodeSpaceAR(worldSpace);
        this.hand.y = nodeSpace.y + .3 * this.node.height;
        this.hand.x = nodeSpace.x;
      };
      GamePlay.prototype.startGameTimer = function() {
        var _this = this;
        var target = this;
        target.optionLayer.getComponent("options").updateTimer(0, this.totalTime);
        this.interval = setInterval(function() {
          _this._timer++;
          target.optionLayer.getComponent("options").updateTimer(_this._timer, _this.totalTime);
          if (_this.gameMode != constants_1.GAME_MODE.PRACTICE) {
            _this.timerBar.progress = _this._timer / _this.totalTime;
            if (10 == Math.abs(_this._timer - _this.totalTime) || !_this.isSoundPlaying && Math.abs(_this._timer - _this.totalTime) < 10) {
              SoundManager_1.default.getInstance().playEffect(_this.last5Sec, false);
              _this.isSoundPlaying = true;
              _this.optionLayer.getComponent("options").enableClockButton();
              console.log("inside thie we are here hhheheheh");
              _this.showTenSecondsPopUp();
            } else if (_this.isSoundPlaying && Math.abs(_this._timer - _this.totalTime) > 10) {
              SoundManager_1.default.getInstance().stopAllSounds();
              _this.optionLayer.getComponent("options").disableClockButton();
              _this.isSoundPlaying = false;
            }
            if (_this._timer == _this.totalTime) {
              _this.isTouchBlocked = true;
              clearInterval(_this.interval);
              _this.endGame(false);
            }
          }
        }, 1e3);
      };
      GamePlay.prototype.showCard = function(card) {
        if (this.cardsInPair.length >= this.groupOf || this.isTouchBlocked) return;
        card.getComponent("cards").reveal();
        this.cardsInPair.push(card);
        this.isTutoiral && this.moveTutHand();
        this.cardsInPair.length > 1 && this.isPair();
      };
      GamePlay.prototype.isPair = function() {
        var _this = this;
        var cards = [];
        cards.length = 0;
        for (var i = 0; i < this.cardsInPair.length; i++) cards.push(this.cardsInPair[i].getComponent("cards"));
        var isMatch = true;
        for (var i = 0; i < cards.length - 1; i++) if (cards[i].getCardName() !== cards[i + 1].getCardName()) {
          isMatch = false;
          break;
        }
        if (isMatch) {
          if (this.cardsInPair.length != this.groupOf) return;
          this.playBounsAnimation();
          this.isTouchBlocked = true;
          this.node.runAction(cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
            for (var _i = 0, cards_2 = cards; _i < cards_2.length; _i++) {
              var cardScipt = cards_2[_i];
              cardScipt.playCorrectAnimation();
            }
            _this.isTouchBlocked = false;
          })));
          for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var cardScipt = cards_1[_i];
            this.OpenCards.push(cardScipt.getCardName());
          }
          this.cardsInPair.length = 0;
          this.OpenCards.length == this._cards.length && this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
            _this.endGame(true);
          })));
          this.isTutoiral && this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
            _this.continueTutorial();
          })));
        } else {
          var target = this;
          this.isTouchBlocked = true;
          this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
            for (var _i = 0, cards_3 = cards; _i < cards_3.length; _i++) {
              var cardScipt = cards_3[_i];
              cardScipt.unreveal();
              _this.isTouchBlocked = false;
            }
            _this.cardsInPair.length = 0;
          })));
        }
        this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
          var clip = isMatch ? _this.correctAnswerAudio : _this.wrongAnswerAudiodFlip;
          SoundManager_1.default.getInstance().playEffect(clip, false);
        })));
      };
      GamePlay.prototype.endGame = function(isWon) {
        var _this = this;
        this.optionLayer.getComponent("options").disableClockButton();
        SoundManager_1.default.getInstance().stopAllSounds();
        console.log("stop inteval remoiving interval");
        clearInterval(this.interval);
        if (isWon) {
          var isNewRecord = false;
          var levelInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
          var levels = JSON.parse(levelInfo.level);
          SoundManager_1.default.getInstance().playEffect(this.clapping, false);
          if (levels[this._level].time > this._timer) {
            levels[this._level].time = this._timer;
            this._level < levels.length - 1 && (levels[this._level + 1].isUnlock = true);
            levelInfo.level = JSON.stringify(levels);
            cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(levelInfo));
            isNewRecord = true;
          }
          this.gameEndAlert.getComponent("gameEnd").showPopUpFor(isNewRecord ? constants_1.END_POP_UP.NEW_RECORD : constants_1.END_POP_UP.CLEARD, this._level);
          this.gameEndAlert.active = true;
        } else {
          this.gameEndAlert.getComponent("gameEnd").showPopUpFor(constants_1.END_POP_UP.FAILED, this._level);
          this.gameEndAlert.active = true;
        }
        this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
          var clip = isWon ? _this.clapping : _this.timesUp;
          SoundManager_1.default.getInstance().playEffect(clip, false);
        })));
      };
      GamePlay.prototype.onPlayAgain = function() {
        this.gameEndAlert.active = false;
        cc.sys.isBrowser || AdManager_1.default.getInstance().isAdAvailable() && AdManager_1.default.getInstance().showInterstital(this);
        cc.sys.localStorage.setItem("lastPlayedLevel", this._level);
        this.node.parent.getComponent("home").onBack();
        this.node.parent.getComponent("home").startGame();
      };
      GamePlay.prototype.startGame = function() {
        var _this = this;
        console.log("inside this");
        this.levelLabel.node.parent.active = false;
        this.progresser.width = this.timerBar.node.width;
        this.timerBar.progress = 1;
        var target = this;
        var time = this.levelData.timer.memorizeTime;
        target.optionLayer.getComponent("options").updateTimer(time, this.levelData.timer.totalTime);
        target.optionLayer.active = true;
        this.isTouchBlocked = true;
        this.interval = setInterval(function() {
          target.optionLayer.getComponent("options").updateTimer(time, _this.levelData.timer.totalTime);
          time--;
          _this.timerBar.progress = time / _this.levelData.timer.memorizeTime;
          if (-1 === time) {
            clearInterval(_this.interval);
            target.isTouchBlocked = false;
            target.flipAllCards();
            if (!_this.isTutoiral) {
              _this._timer = 0;
              _this.startGameTimer();
            }
          }
        }, 1e3);
      };
      GamePlay.prototype.onPlayAgainCancel = function() {
        this.gameEndAlert.active = false;
        this.gameEndAlert.removeFromParent();
        this.node.parent.getComponent("home").onBack();
      };
      GamePlay.prototype.gameEnded = function() {
        this.gameEndAlert.removeFromParent();
        var level = GameManager_1.GameManager.getInstance().getCurrentLevel();
        var totalLevelInMode = GameManager_1.GameManager.getInstance().getLevelInfo(this.gameMode);
        if (level == totalLevelInMode.length - 1) {
          this.node.parent.getComponent("home").showFutureDetailsScreen();
          GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.FUTURE_ANNOCMENTS);
        } else {
          cc.sys.localStorage.setItem("lastPlayedLevel", this._level + 1);
          this.node.parent.getComponent("home").onBack();
          this.node.parent.getComponent("home").startGame();
        }
      };
      GamePlay.prototype.playBounsAnimation = function(isFromPowerUp) {
        void 0 === isFromPowerUp && (isFromPowerUp = false);
        console.log("is from popwe up ", isFromPowerUp);
        var additonPoints = isFromPowerUp ? 10 : 5;
        this.bounsPoints += additonPoints;
        this.bouns.node.active = true;
        this.bouns.node.position = new cc.Vec2(0, 0);
        this.bouns.node.scale = 2;
        this.bouns.node.getComponentInChildren(cc.Label).string = "+" + additonPoints;
        this.bouns.node.opacity = 255;
        this.bouns.node.getComponent(cc.Animation).play();
      };
      GamePlay.prototype.bounsAnimationCompleted = function() {
        this.bouns.node.active = false;
        this.totalTime += this.bounsPoints;
        this.optionLayer.getComponent("options").updateTimer(this._timer, this.totalTime);
        this.isTouchBlocked = false;
        this.bounsPoints = 0;
      };
      GamePlay.prototype.showTutorials = function() {
        this.gameTutorials = cc.instantiate(this.tutorials);
        this.gameTutorials.getComponent("tutorials").setDelegate(this);
        this.gameTutorials.getComponent("tutorials").showMemoriseTime(this.levelData.timer.memorizeTime);
        this.hand.setPosition(0, 0);
        this.node.parent.addChild(this.gameTutorials, 100);
      };
      GamePlay.prototype.continueTutorial = function() {
        this.gameTutorials.active = true;
        this.gameTutorials.getComponent("tutorials").moveToNextSlide();
      };
      GamePlay.prototype.showGameInstructionPopUp = function() {
        console.log("inside this we have to see the ");
        this.gameStartAlert.active = true;
        this.hand.active = false;
      };
      GamePlay.prototype.stopTutorials = function() {
        this.isTutoiral = false;
        this.tutorialCards.length = 0;
        this.gameStartAlert.removeFromParent();
        for (var _i = 0, _a = this.gameLayout.node.children; _i < _a.length; _i++) {
          var child = _a[_i];
          child.getComponent("cards").disableOverlay();
        }
        this._timer = 0;
        this.startGameTimer();
      };
      GamePlay.prototype.adHasbeenShown = function() {};
      GamePlay.prototype.isTutorialPlaying = function() {
        return this.isTutoiral;
      };
      GamePlay.prototype.removeHintPopUp = function() {
        this.gameEndAlert.active = false;
        this.startGameTimer();
        this.optionLayer.getComponent("options").updateHindText();
      };
      GamePlay.prototype.showHintPopUP = function(type) {
        console.log("cc.sys.getNetworkType()", cc.sys.getNetworkType(), cc.sys.NetworkType.LAN, cc.sys.NetworkType.WWAN);
        if (cc.sys.getNetworkType() == cc.sys.NetworkType.LAN || cc.sys.getNetworkType() == cc.sys.NetworkType.WWAN) {
          this.gameEndAlert.getComponent("gameEnd").showPopUpFor(type, this._level);
          this.gameEndAlert.active = true;
          clearInterval(this.interval);
        } else {
          console.log("show error pop up", this.netError);
          this.showNetErroPopUP();
        }
      };
      GamePlay.prototype.showNetErroPopUP = function() {
        var _this = this;
        this.netError.active = true;
        this.netError.getComponentInChildren(cc.Label).string = GameManager_1.GameManager.getInstance().getString("openNet");
        cc.tween(this.netError).delay(2).call(function() {
          return _this.netError.active = false;
        }).start();
      };
      GamePlay.prototype.openPairCards = function() {
        var _this = this;
        var hiddenCards = [];
        var targetCard = null;
        if (this.cardsInPair.length == this.groupOf || this.isTouchBlocked) {
          console.log("please. return");
          return;
        }
        hiddenCards = 0 != this.cardsInPair.length && this.cardsInPair.length <= this.groupOf ? this.cardsInPair : this.gameLayout.node.children.filter(function(item) {
          return !item.getComponent("cards").isOpen();
        });
        if (hiddenCards.length > 0) {
          var card_1 = hiddenCards[0];
          var pairs = this.gameLayout.node.children.filter(function(item) {
            return item.getComponent("cards").getCardName() == card_1.getComponent("cards").getCardName();
          });
          pairs.forEach(function(card) {
            card.getComponent("cards").isOpen() || _this.showCard(card);
          });
        }
      };
      GamePlay.prototype.showTenSecondsPopUp = function() {
        console.log("inside this we have to show ten seconds timer here hehe", JSON.parse(cc.sys.localStorage.getItem("lastTenSeconds")));
        if (!JSON.parse(cc.sys.localStorage.getItem("lastTenSeconds"))) {
          cc.sys.localStorage.setItem("lastTenSeconds", true);
          clearInterval(this.interval);
          this.node.parent.getComponent("home").showLastSecondsPopUp();
        }
      };
      GamePlay.prototype.hideTenSecondsPopUp = function() {
        this.node.parent.getComponent("home").hideLastSecondsPopUp();
        this.startGameTimer();
      };
      __decorate([ property(cc.Prefab) ], GamePlay.prototype, "cardPrefab", void 0);
      __decorate([ property(cc.Prefab) ], GamePlay.prototype, "options", void 0);
      __decorate([ property(cc.ProgressBar) ], GamePlay.prototype, "timerBar", void 0);
      __decorate([ property(cc.Layout) ], GamePlay.prototype, "gameLayout", void 0);
      __decorate([ property(cc.Sprite) ], GamePlay.prototype, "bouns", void 0);
      __decorate([ property(cc.Prefab) ], GamePlay.prototype, "startPopUp", void 0);
      __decorate([ property(cc.Prefab) ], GamePlay.prototype, "gameEndPopUp", void 0);
      __decorate([ property(cc.Node) ], GamePlay.prototype, "containerNode", void 0);
      __decorate([ property(cc.AudioClip) ], GamePlay.prototype, "correctAnswerAudio", void 0);
      __decorate([ property(cc.AudioClip) ], GamePlay.prototype, "wrongAnswerAudiodFlip", void 0);
      __decorate([ property(cc.AudioClip) ], GamePlay.prototype, "last5Sec", void 0);
      __decorate([ property(cc.AudioClip) ], GamePlay.prototype, "clapping", void 0);
      __decorate([ property(cc.AudioClip) ], GamePlay.prototype, "timesUp", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], GamePlay.prototype, "cardsSpriteFrames", void 0);
      __decorate([ property(cc.Node) ], GamePlay.prototype, "hand", void 0);
      __decorate([ property(cc.Node) ], GamePlay.prototype, "netError", void 0);
      __decorate([ property(cc.Label) ], GamePlay.prototype, "levelLabel", void 0);
      __decorate([ property(cc.Node) ], GamePlay.prototype, "gameInstructions", void 0);
      __decorate([ property(cc.Prefab) ], GamePlay.prototype, "tutorials", void 0);
      GamePlay = __decorate([ ccclass ], GamePlay);
      return GamePlay;
    }(cc.Component);
    exports.default = GamePlay;
    cc._RF.pop();
  }, {
    "../helper/constants": "constants",
    "../managers/AdManager": "AdManager",
    "../managers/GameManager": "GameManager",
    "../managers/SoundManager": "SoundManager"
  } ],
  gameStart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ba29evSSZEoYbWi3sSYdtX", "gameStart");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var constants_1 = require("../helper/constants");
    var SoundManager_1 = require("../managers/SoundManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameStart = function(_super) {
      __extends(GameStart, _super);
      function GameStart() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._delegate = null;
        _this.gameName = null;
        _this.prize = null;
        _this.instraction = null;
        _this.accept = null;
        _this.buttonPressed = null;
        return _this;
      }
      GameStart.prototype.start = function() {};
      GameStart.prototype.setProperties = function(delegate, gameType, groupof) {
        var keyString = "";
        switch (gameType) {
         case constants_1.GAME_TYPE.FIND:
          keyString = "find";
          break;

         case constants_1.GAME_TYPE.MIRROR:
          keyString = "mirror";
        }
        this.gameName.node.getComponent("localiser").key = keyString;
        console.log("keyString", keyString);
        this.gameName.node.getComponent("localiser").replaceValue("" + groupof);
        this._delegate = delegate;
        this.instraction.getComponent("localiser").key = "instructionsFor" + keyString + groupof;
        this.instraction.getComponent("localiser").setStringForKey();
      };
      GameStart.prototype.onAccept = function() {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this._delegate.stopTutorials();
      };
      __decorate([ property(cc.Label) ], GameStart.prototype, "gameName", void 0);
      __decorate([ property(cc.Label) ], GameStart.prototype, "prize", void 0);
      __decorate([ property(cc.Label) ], GameStart.prototype, "instraction", void 0);
      __decorate([ property(cc.Button) ], GameStart.prototype, "accept", void 0);
      __decorate([ property(cc.AudioClip) ], GameStart.prototype, "buttonPressed", void 0);
      GameStart = __decorate([ ccclass ], GameStart);
      return GameStart;
    }(cc.Component);
    exports.default = GameStart;
    cc._RF.pop();
  }, {
    "../helper/constants": "constants",
    "../managers/SoundManager": "SoundManager"
  } ],
  home: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3fe01+rSGFEx4cPC5mf1sQK", "home");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameManager_1 = require("../managers/GameManager");
    var constants_1 = require("../helper/constants");
    var SoundManager_1 = require("../managers/SoundManager");
    var AdManager_1 = require("../managers/AdManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Home = function(_super) {
      __extends(Home, _super);
      function Home() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameScreen = constants_1.GAME_SCREEN.HOME;
        _this.gameMode = "";
        _this.letloadCount = 0;
        _this.isAfterTerms = false;
        _this.isforSetting = false;
        _this.modeLayout = null;
        _this.hud = null;
        _this.howToPlayPopUp = null;
        _this.modeSelectionNode = null;
        _this.levelSelectionNode = null;
        _this.gameplayNode = null;
        _this.scrollViewLayout = null;
        _this.levelHolderPrefab = null;
        _this.scrollView = null;
        _this.musicClip = null;
        _this.privacyPolicy = null;
        _this.buttonPressed = null;
        _this.bottomBar = null;
        _this.futureDetailsPrefab = null;
        _this.settings = null;
        _this.terms = null;
        _this.dailyRewards = null;
        _this.loader = null;
        _this.lastTenSeconds = null;
        return _this;
      }
      Home.prototype.onLoad = function() {};
      Home.prototype.start = function() {
        var _this = this;
        console.log("start", constants_1.GAME_SCREEN.HOME);
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.HOME);
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
        cc.debug.setDisplayStats(false);
        SoundManager_1.default.getInstance().init(this.musicClip);
        cc.sys.localStorage.getItem("Sound") || cc.sys.localStorage.setItem("Sound", false);
        cc.sys.isMobile && cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(ev) {
          ev.keyCode === cc.macro.KEY.back && _this.onBack();
        });
      };
      Home.prototype.setupUI = function() {
        this.setHud();
        this.modeSelectionNode.zIndex = 5;
        this.levelSelectionNode.zIndex = 6;
        this.futureDetails = cc.instantiate(this.futureDetailsPrefab);
        this.futureDetails.zIndex = 6;
        this.futureDetails.active = false;
        this.futureDetails.getComponent("gameFutureDetails").setDelegatScript(this);
        this.dailyRewards.getComponent("dailyRewards").setDelegate(this);
        this.node.addChild(this.futureDetails);
        if (cc.sys.isMobile) {
          AdManager_1.default.getInstance().init();
          AdManager_1.default.getInstance().setTestDevice("12FA347A3FF2FE36F7A2E2AB230AC410");
          AdManager_1.default.getInstance().cacheAds("gameover");
        }
        if (!this.terms.active) {
          var rewardGivenAt = cc.sys.localStorage.getItem("rewardClaimDate");
          var today = GameManager_1.GameManager.getInstance().getCurrentDate();
          console.log("today", today, rewardGivenAt);
          if (rewardGivenAt != today) {
            console.log("show daily reward pop up");
            this.dailyRewards.active = true;
          } else this.startGame();
        }
      };
      Home.prototype.onAnimationEnd = function() {
        console.log("animation ended");
      };
      Home.prototype.setHud = function() {
        this.hudLayer = cc.instantiate(this.hud);
        this.node.addChild(this.hudLayer);
        this.hudLayer.getComponent("hud").setDelegate(this);
        this.hudLayer.zIndex = 1;
        this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
      };
      Home.prototype.showDailyRewards = function() {
        this.dailyRewards.active = true;
      };
      Home.prototype.showLevelSelection = function() {
        if (this.levelSelectionNode.active) return;
        this.levelSelectionNode.active = true;
        this.setLevelSelectionScreen();
        this.gameScreen == constants_1.GAME_SCREEN.SETTINGS && GameManager_1.GameManager.getInstance().popScene();
        this.gameScreen == constants_1.GAME_SCREEN.GAME_PLAY && GameManager_1.GameManager.getInstance().popScene();
        this.changeSceneVisiblity(this.gameScreen, false);
        this.gameScreen = constants_1.GAME_SCREEN.LEVEL_SELECTION;
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.LEVEL_SELECTION);
      };
      Home.prototype.showHowToPlayPopUp = function() {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.howToPlayPopUp.active = true;
        this.howToPlayPopUp.getChildByName("Post").getComponent(cc.Animation).play();
      };
      Home.prototype.removeHowToPlayPopUp = function() {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.howToPlayPopUp.active = false;
      };
      Home.prototype.addLevelsInLevelSelection = function() {
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        this.scrollViewLayout.node.removeAllChildren();
        var totalFrame = Math.ceil(levels.length / 10);
        for (var i = 0; i < totalFrame; i++) {
          var levelHolder = cc.instantiate(this.levelHolderPrefab);
          levelHolder.getComponent("levelUIManager").setDelegateComponent(this);
          levelHolder.getComponent("levelUIManager").populateLevels(10 * i);
          this.scrollViewLayout.node.addChild(levelHolder);
        }
      };
      Home.prototype.setLevelSelectionScreen = function() {
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        this.scrollViewLayout.node.removeAllChildren();
        var totalFrame = Math.ceil(levels.length / 10);
        for (var i = 0; i < totalFrame; i++) {
          var levelHolder = cc.instantiate(this.levelHolderPrefab);
          levelHolder.getComponent("levelUIManager").setDelegateComponent(this);
          levelHolder.getComponent("levelUIManager").populateLevels(10 * i);
          this.scrollViewLayout.node.addChild(levelHolder);
        }
        if (1 == totalFrame) {
          this.scrollViewLayout.node.children[0].width = 1e3;
          this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = true;
          this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
          this.scrollViewLayout.updateLayout();
        } else {
          this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = false;
          this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
        }
        var levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var levelsInfoForMode = JSON.parse(levelsInfo.level);
        var lastUnlockedLevel = 0;
        for (var _i = 0, levelsInfoForMode_1 = levelsInfoForMode; _i < levelsInfoForMode_1.length; _i++) {
          var item = levelsInfoForMode_1[_i];
          if (!item.isUnlock) break;
          lastUnlockedLevel++;
        }
        var frame = Math.ceil(lastUnlockedLevel / 10);
        var offset = this.scrollView.getScrollOffset();
        var offsetPercent = (frame - 1) * (1 / (this.scrollViewLayout.node.childrenCount - 1));
        this.levelSelectionNode.getComponent(cc.Animation).play("moveIn");
      };
      Home.prototype.onBack = function() {
        var currentScene = GameManager_1.GameManager.getInstance().popScene();
        var lastScene = GameManager_1.GameManager.getInstance().popScene();
        console.log("curerntScene", currentScene, lastScene);
        if (currentScene == constants_1.GAME_SCREEN.HOME) {
          cc.game.end();
          return;
        }
        if (currentScene == constants_1.GAME_SCREEN.FUTURE_ANNOCMENTS) {
          GameManager_1.GameManager.getInstance().removeAllScene();
          this.levelSelectionNode.active = false;
          this.settings.active = false;
          this.gameplayNode.active = false;
          this.modeSelectionNode.active = true;
          this.gameScreen = constants_1.GAME_SCREEN.HOME;
          GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.HOME);
          return;
        }
        this.hudLayer.zIndex = 1;
        this.gameScreen = lastScene;
        this.changeSceneVisiblity(currentScene, false);
        this.changeSceneVisiblity(lastScene, true);
        GameManager_1.GameManager.getInstance().pushScene(lastScene);
        console.log("scene arra", GameManager_1.GameManager.getInstance().screen);
      };
      Home.prototype.changeSceneVisiblity = function(currentScene, isActive) {
        console.log("scnenes", currentScene, isActive);
        switch (currentScene) {
         case constants_1.GAME_SCREEN.LEVEL_SELECTION:
          this.levelSelectionNode.active = isActive;
          isActive && this.setLevelSelectionScreen();
          break;

         case constants_1.GAME_SCREEN.SETTINGS:
          this.settings.getComponent("settings").closeAllPopUps();
          this.settings.active = isActive;
          this.isforSetting = isActive;
          break;

         case constants_1.GAME_SCREEN.GAME_PLAY:
          this.gameplayNode.active = isActive;
          break;

         case constants_1.GAME_SCREEN.HOME:
          this.modeSelectionNode.active = isActive;
        }
      };
      Home.prototype.startGame = function() {
        var lastPlayedLevel = cc.sys.localStorage.getItem("lastPlayedLevel");
        console.log("last played level", lastPlayedLevel);
        this.onLevelSelect(lastPlayedLevel);
      };
      Home.prototype.onLevelSelect = function(level) {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        GameManager_1.GameManager.getInstance().setCurrentLevel(parseInt(level));
        cc.sys.localStorage.setItem("lastPlayedLevel", parseInt(level));
        this.changeSceneVisiblity(this.gameScreen, false);
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.GAME_PLAY);
        console.log("we have pushed game scene", GameManager_1.GameManager.getInstance().screen);
        this.gameScreen = constants_1.GAME_SCREEN.GAME_PLAY;
        this.levelSelectionNode.active = false;
        this.modeSelectionNode.active = false;
        this.gameplayNode.active = true;
        this.gameplayNode.getComponent("gamePlay").setUpUI(GameManager_1.GameManager.getInstance().getCurrentLevel());
      };
      Home.prototype.onLevelAnimationCompleted = function() {
        this.gameScreen == constants_1.GAME_SCREEN.GAME_PLAY;
      };
      Home.prototype.setLevelInfoInLS = function() {
        cc.sys.localStorage.getItem("LevelInfo") || cc.sys.localStorage.setItem("LevelInfo", JSON.stringify({}));
        var levelInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var totalLevels = GameManager_1.GameManager.getInstance().getLevelInfo().length;
        var levelObj = {
          time: 500,
          isUnlock: true
        };
        if (levelInfo.level) {
          var levelArray_1 = JSON.parse(levelInfo.level);
          if (levelArray_1.length < totalLevels) {
            var difference = GameManager_1.GameManager.getInstance().getLevelInfo().filter(function(item) {
              return !levelArray_1.some(function(data) {
                return data.id == item.id;
              });
            });
            var timeArray = [];
            for (var i = 0; i < difference.length; i++) timeArray[i] = Object.assign({
              id: difference[i].id
            }, levelObj);
            console.log("time ArraY", timeArray);
            levelArray_1.push.apply(levelArray_1, timeArray);
            console.log("time ArraY", levelArray_1);
          } else {
            var difference_1 = levelArray_1.filter(function(item) {
              return !GameManager_1.GameManager.getInstance().getLevelInfo().some(function(data) {
                return data.id == item.id;
              });
            });
            console.log("difference", difference_1);
            var _loop_1 = function(i) {
              var index = levelArray_1.findIndex(function(item) {
                return item.id == difference_1[i].id;
              });
              console.log("index", index);
              -1 != index && levelArray_1.splice(index, 1);
            };
            for (var i = 0; i < difference_1.length; i++) _loop_1(i);
          }
          levelArray_1[0].isUnlock = true;
          levelInfo["level"] = JSON.stringify(levelArray_1);
        } else {
          var levelObjectArray = [];
          for (var i = 0; i < totalLevels; i++) levelObjectArray[i] = Object.assign({
            id: i
          }, levelObj);
          levelObjectArray[0].isUnlock = true;
          console.log(levelObjectArray[0] === levelObjectArray[1]);
          levelInfo["level"] = JSON.stringify(levelObjectArray);
        }
        cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(levelInfo));
      };
      Home.prototype.onShare = function() {
        if (cc.sys.isBrowser) return;
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shareApp", "(Ljava/lang/String;)V", "Hey I have been playing this amazing game, let's connect there. " + constants_1.GAME_LINK.URL);
      };
      Home.prototype.onMoreGames = function() {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        cc.sys.openURL(constants_1.GAME_LINK.URL);
      };
      Home.prototype.showPrivacyPolicy = function() {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.privacyPolicy.active = true;
        console.log("show privact plicty");
      };
      Home.prototype.enabledMoreGamesButton = function(isActive) {
        this.bottomBar.getChildByName("moreGames").active = isActive;
      };
      Home.prototype.showFutureDetailsScreen = function() {
        this.futureDetails.active = true;
      };
      Home.prototype.openSettings = function() {
        if (this.settings.active) return;
        this.isforSetting = true;
        this.gameScreen == constants_1.GAME_SCREEN.LEVEL_SELECTION && GameManager_1.GameManager.getInstance().popScene();
        this.changeSceneVisiblity(this.gameScreen, false);
        this.gameScreen = constants_1.GAME_SCREEN.SETTINGS;
        GameManager_1.GameManager.getInstance().pushScene(constants_1.GAME_SCREEN.SETTINGS);
        this.settings.active = true;
        this.hudLayer.zIndex = 8;
        console.log(GameManager_1.GameManager.getInstance().screen);
      };
      Home.prototype.onTermsAccept = function() {
        this.terms.active = false;
        this.isAfterTerms = true;
        cc.sys.localStorage.setItem("hasTermAccepted", true);
        this.dailyRewards.active = true;
      };
      Home.prototype.startImageLoading = function() {
        var _this = this;
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        if (this.letloadCount == levels.length) return;
        GameManager_1.GameManager.getInstance().loadLevelImages(this.letloadCount).then(function() {
          _this.letloadCount++;
          _this.startImageLoading();
        }).catch(function() {
          console.log("error while loading data");
        });
      };
      Home.prototype.onRewardCollected = function() {
        this.isAfterTerms || this.startGame();
      };
      Home.prototype.openTermAndConditions = function() {
        this.privacyPolicy.active = true;
        this.privacyPolicy.getComponent("policy").setTerm(this.loader);
      };
      Home.prototype.openPrivacyPolicy = function() {
        this.privacyPolicy.active = true;
        this.privacyPolicy.getComponent("policy").setPrivacy(this.loader);
      };
      Home.prototype.showLastSecondsPopUp = function() {
        console.log("inside this we are  not going anywhere", cc.sys.localStorage.getItem("lastTenSeconds"));
        this.lastTenSeconds.active = true;
      };
      Home.prototype.hideLastSecondsPopUp = function() {
        console.log("inside this last seconds ere are here ");
        this.lastTenSeconds.active = false;
      };
      __decorate([ property(cc.Layout) ], Home.prototype, "modeLayout", void 0);
      __decorate([ property(cc.Prefab) ], Home.prototype, "hud", void 0);
      __decorate([ property(cc.Node) ], Home.prototype, "howToPlayPopUp", void 0);
      __decorate([ property(cc.Node) ], Home.prototype, "modeSelectionNode", void 0);
      __decorate([ property(cc.Node) ], Home.prototype, "levelSelectionNode", void 0);
      __decorate([ property(cc.Node) ], Home.prototype, "gameplayNode", void 0);
      __decorate([ property(cc.Layout) ], Home.prototype, "scrollViewLayout", void 0);
      __decorate([ property(cc.Prefab) ], Home.prototype, "levelHolderPrefab", void 0);
      __decorate([ property(cc.ScrollView) ], Home.prototype, "scrollView", void 0);
      __decorate([ property(cc.AudioClip) ], Home.prototype, "musicClip", void 0);
      __decorate([ property(cc.Node) ], Home.prototype, "privacyPolicy", void 0);
      __decorate([ property(cc.AudioClip) ], Home.prototype, "buttonPressed", void 0);
      __decorate([ property(cc.Node) ], Home.prototype, "bottomBar", void 0);
      __decorate([ property(cc.Prefab) ], Home.prototype, "futureDetailsPrefab", void 0);
      __decorate([ property(cc.Node) ], Home.prototype, "settings", void 0);
      __decorate([ property(cc.Node) ], Home.prototype, "terms", void 0);
      __decorate([ property(cc.Node) ], Home.prototype, "dailyRewards", void 0);
      __decorate([ property(cc.Node) ], Home.prototype, "loader", void 0);
      __decorate([ property(cc.Node) ], Home.prototype, "lastTenSeconds", void 0);
      Home = __decorate([ ccclass ], Home);
      return Home;
    }(cc.Component);
    exports.default = Home;
    cc._RF.pop();
  }, {
    "../helper/constants": "constants",
    "../managers/AdManager": "AdManager",
    "../managers/GameManager": "GameManager",
    "../managers/SoundManager": "SoundManager"
  } ],
  hud: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6713aGUdqRLHbdo1jB5MW+H", "hud");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SoundManager_1 = require("../managers/SoundManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HUD = function(_super) {
      __extends(HUD, _super);
      function HUD() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.volumeUp = null;
        _this.volumeDown = null;
        _this.volume = null;
        _this.selectMode = null;
        _this.back = null;
        _this.setting = null;
        _this.level = null;
        _this.backButtonAudio = null;
        _this.buttonAudio = null;
        return _this;
      }
      HUD.prototype.start = function() {
        this.updateVolumeIcon();
      };
      HUD.prototype.setDelegate = function(delegate) {
        console.log("delegate", delegate);
        this.delegate = delegate;
      };
      HUD.prototype.onBack = function() {
        SoundManager_1.default.getInstance().playEffect(this.backButtonAudio, false);
        this.delegate.onBack();
      };
      HUD.prototype.changeVolume = function(event) {
        if (JSON.parse(cc.sys.localStorage.getItem("Sound"))) {
          SoundManager_1.default.getInstance().stopAllSounds();
          cc.sys.localStorage.setItem("Sound", false);
        } else cc.sys.localStorage.setItem("Sound", true);
        this.updateVolumeIcon();
      };
      HUD.prototype.setVisiblity = function(gameScreen) {
        this.volume.node.active = true;
        this.setting.node.active = true;
        this.level.node.active = true;
      };
      HUD.prototype.updateVolumeIcon = function() {
        var sprite = this.volume.node.getChildByName("Background").getComponent(cc.Sprite);
        sprite.spriteFrame = JSON.parse(cc.sys.localStorage.getItem("Sound")) ? this.volumeUp : this.volumeDown;
      };
      HUD.prototype.onSetting = function() {
        SoundManager_1.default.getInstance().playEffect(this.buttonAudio, false);
        this.delegate.openSettings();
      };
      HUD.prototype.onLevelSelection = function() {
        SoundManager_1.default.getInstance().playEffect(this.buttonAudio, false);
        this.delegate.showLevelSelection();
      };
      __decorate([ property(cc.SpriteFrame) ], HUD.prototype, "volumeUp", void 0);
      __decorate([ property(cc.SpriteFrame) ], HUD.prototype, "volumeDown", void 0);
      __decorate([ property(cc.Button) ], HUD.prototype, "volume", void 0);
      __decorate([ property(cc.Label) ], HUD.prototype, "selectMode", void 0);
      __decorate([ property(cc.Button) ], HUD.prototype, "back", void 0);
      __decorate([ property(cc.Button) ], HUD.prototype, "setting", void 0);
      __decorate([ property(cc.Button) ], HUD.prototype, "level", void 0);
      __decorate([ property(cc.AudioClip) ], HUD.prototype, "backButtonAudio", void 0);
      __decorate([ property(cc.AudioClip) ], HUD.prototype, "buttonAudio", void 0);
      HUD = __decorate([ ccclass ], HUD);
      return HUD;
    }(cc.Component);
    exports.default = HUD;
    cc._RF.pop();
  }, {
    "../managers/SoundManager": "SoundManager"
  } ],
  levelUIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b088aAKCUxN6IbB3yHKE9T3", "levelUIManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameManager_1 = require("../managers/GameManager");
    var constants_1 = require("../helper/constants");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LevelUIManager = function(_super) {
      __extends(LevelUIManager, _super);
      function LevelUIManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.levelSelectionButton = null;
        _this.unlocked = null;
        _this.locked = null;
        _this.layout = null;
        _this.title = null;
        return _this;
      }
      LevelUIManager.prototype.start = function() {};
      LevelUIManager.prototype.setDelegateComponent = function(delgate) {
        this._delagate = delgate;
      };
      LevelUIManager.prototype.populateLevels = function(startIndex) {
        var levelInfo = GameManager_1.GameManager.getInstance().getLevelData(startIndex);
        this.setLeveltitle(levelInfo.gameType, levelInfo.groupOf);
        this.layout.node.removeAllChildren();
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        var levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var levelsInfoForMode = JSON.parse(levelsInfo.level);
        var endIndex = startIndex + 10 > levels.length ? levels.length : startIndex + 10;
        for (var i = startIndex; i < endIndex; i++) {
          var button = cc.instantiate(this.levelSelectionButton);
          button.name = i.toString();
          button.getChildByName("Background").getChildByName("title").getComponent(cc.Label).getComponent("localiser").replaceValue("" + (i + 1));
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
          } else {
            button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.locked;
            button.getChildByName("lock").active = true;
            button.getComponent(cc.Button).interactable = false;
          }
          this.layout.node.addChild(button);
        }
      };
      LevelUIManager.prototype.updateLevels = function(startIndex) {
        var levelInfo = GameManager_1.GameManager.getInstance().getLevelData(startIndex);
        this.setLeveltitle(levelInfo.gameType, levelInfo.groupOf);
        var levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
        var levels = GameManager_1.GameManager.getInstance().getLevelInfo();
        var endIndex = startIndex + 10 > levels.length ? levels.length : startIndex + 10;
        var levelsInfoForMode = JSON.parse(levelsInfo.level);
        for (var i = startIndex; i < endIndex; i++) {
          var button = cc.instantiate(this.levelSelectionButton);
          if (levelsInfoForMode[i].isUnlock) {
            button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.unlocked;
            button.getChildByName("lock").active = false;
            button.getComponent(cc.Button).interactable = true;
          } else {
            button.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.locked;
            button.getChildByName("lock").active = true;
            button.getComponent(cc.Button).interactable = false;
          }
          this.layout.node.addChild(button);
        }
      };
      LevelUIManager.prototype.setLeveltitle = function(gameType, groupof) {
        var keyString = "";
        switch (gameType) {
         case constants_1.GAME_TYPE.FIND:
          keyString = "find";
          break;

         case constants_1.GAME_TYPE.MIRROR:
          keyString = "mirror";
        }
        this.title.node.getComponent("localiser").key = keyString;
        console.log("keyString", keyString);
        this.title.node.getComponent("localiser").replaceValue("" + groupof);
        this.title.node.getComponent("localiser").setStringForKey();
      };
      LevelUIManager.prototype.onLevelSelect = function(event, level) {
        this._delagate.onLevelSelect(level);
      };
      LevelUIManager.prototype.openLocalisation = function() {
        this._delagate.openLocalisationPopUp();
      };
      __decorate([ property(cc.Prefab) ], LevelUIManager.prototype, "levelSelectionButton", void 0);
      __decorate([ property(cc.SpriteFrame) ], LevelUIManager.prototype, "unlocked", void 0);
      __decorate([ property(cc.SpriteFrame) ], LevelUIManager.prototype, "locked", void 0);
      __decorate([ property(cc.Layout) ], LevelUIManager.prototype, "layout", void 0);
      __decorate([ property(cc.Label) ], LevelUIManager.prototype, "title", void 0);
      LevelUIManager = __decorate([ ccclass ], LevelUIManager);
      return LevelUIManager;
    }(cc.Component);
    exports.default = LevelUIManager;
    cc._RF.pop();
  }, {
    "../helper/constants": "constants",
    "../managers/GameManager": "GameManager"
  } ],
  localiser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b77f6olltHtKmH955sWIoh", "localiser");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameManager_1 = require("../managers/GameManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Localiser = function(_super) {
      __extends(Localiser, _super);
      function Localiser() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._replaceValue = "";
        _this.key = "";
        return _this;
      }
      Localiser.prototype.onLoad = function() {
        var _this = this;
        cc.game.on("onLanguageChanged", function() {
          _this.setStringForKey();
        });
        this.setStringForKey();
      };
      Localiser.prototype.replaceValue = function(value) {
        this._replaceValue = value;
      };
      Localiser.prototype.setStringForKey = function() {
        this.node.getComponent(cc.Label).string = GameManager_1.GameManager.getInstance().getString(this.key);
        if (this._replaceValue.length > 0) {
          var tempString = this.node.getComponent(cc.Label).string.replace("%s", this._replaceValue);
          this.node.getComponent(cc.Label).string = tempString;
        }
      };
      __decorate([ property({
        type: String,
        tooltip: "key of string that to be localise"
      }) ], Localiser.prototype, "key", void 0);
      Localiser = __decorate([ ccclass ], Localiser);
      return Localiser;
    }(cc.Component);
    exports.default = Localiser;
    cc._RF.pop();
  }, {
    "../managers/GameManager": "GameManager"
  } ],
  options: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2de04PwIi1Ev6FlzpPCOS29", "options");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var constants_1 = require("../helper/constants");
    var GameManager_1 = require("../managers/GameManager");
    var Options = function(_super) {
      __extends(Options, _super);
      function Options() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timer = null;
        _this.gameMode = null;
        _this.hint = null;
        _this.clues = null;
        _this.clueButton = null;
        _this.hintButton = null;
        return _this;
      }
      Options.prototype.start = function() {};
      Options.prototype.setDelegate = function(delegate) {
        this._delegateScript = delegate;
        this.updateHindText();
      };
      Options.prototype.updateHindText = function() {
        var hintCount = cc.sys.localStorage.getItem("hint");
        this.hint.string = "" + hintCount;
        var clueCount = cc.sys.localStorage.getItem("clue");
        this.clues.string = "" + clueCount;
        this.clueButton.interactable = true;
      };
      Options.prototype.setUpUI = function(screen, gameMode) {
        console.log("options", screen, gameMode);
        var mode = GameManager_1.GameManager.getInstance().getString(gameMode);
        this.gameMode.string = mode;
        this.deactiveAllNodes();
        switch (screen) {
         case constants_1.GAME_SCREEN.HOME:
         case constants_1.GAME_SCREEN.LEVEL_SELECTION:
          break;

         case constants_1.GAME_SCREEN.GAME_PLAY:
          this.timer.node.active = true;
          this.gameMode.node.active = true;
        }
      };
      Options.prototype.deactiveAllNodes = function() {
        this.timer.node.active = false;
        this.gameMode.node.active = false;
      };
      Options.prototype.updateTimer = function(time, totalTime) {
        var timeString = GameManager_1.GameManager.getInstance().getString("time");
        timeString = timeString.replace("%s", "");
        this.timer.string = "" + timeString + time + "/" + totalTime;
      };
      Options.prototype.onHint = function() {
        if (this._delegateScript.isTutorialPlaying()) return;
        var hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
        console.log("hint", hintCount);
        if (hintCount > 0) {
          this._delegateScript.playBounsAnimation(true);
          cc.sys.localStorage.setItem("hint", hintCount - 1);
          this.hint.string = "" + (hintCount - 1);
        } else this._delegateScript.showHintPopUP(constants_1.END_POP_UP.FOR_HIT);
      };
      Options.prototype.onClue = function() {
        var _this = this;
        if (this._delegateScript.isTutorialPlaying()) return;
        var clueCount = JSON.parse(cc.sys.localStorage.getItem("clue"));
        if (clueCount > 0) {
          cc.sys.localStorage.setItem("clue", clueCount - 1);
          this.clues.string = "" + (clueCount - 1);
          this.clueButton.interactable = false;
          this._delegateScript.openPairCards();
          this.clueButton.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
            _this.clueButton.interactable = true;
          })));
        } else this._delegateScript.showHintPopUP(constants_1.END_POP_UP.FOR_CLUE);
      };
      Options.prototype.getChildrenPosition = function(isClue) {
        var targetNode = isClue ? this.clueButton.node : this.hintButton.node;
        return targetNode.getPosition();
      };
      Options.prototype.hideIcon = function(isClue, parent) {
        if (isClue) {
          this.clueButton.node.active = false;
          this.hintButton.node.active = true;
        } else {
          this.clueButton.node.active = true;
          this.hintButton.node.active = false;
        }
        if (null == parent) {
          this.clueButton.node.active = true;
          this.hintButton.node.active = true;
        }
      };
      Options.prototype.enableClockButton = function() {
        this.hintButton.getComponent(cc.Animation).play();
      };
      Options.prototype.disableClockButton = function() {
        this.hintButton.getComponent(cc.Animation).stop();
        this.hintButton.node.scale = 1;
      };
      __decorate([ property(cc.Label) ], Options.prototype, "timer", void 0);
      __decorate([ property(cc.Label) ], Options.prototype, "gameMode", void 0);
      __decorate([ property(cc.Label) ], Options.prototype, "hint", void 0);
      __decorate([ property(cc.Label) ], Options.prototype, "clues", void 0);
      __decorate([ property(cc.Button) ], Options.prototype, "clueButton", void 0);
      __decorate([ property(cc.Button) ], Options.prototype, "hintButton", void 0);
      Options = __decorate([ ccclass ], Options);
      return Options;
    }(cc.Component);
    exports.default = Options;
    cc._RF.pop();
  }, {
    "../helper/constants": "constants",
    "../managers/GameManager": "GameManager"
  } ],
  policy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "089d5/VhmlAz6jYq6PH5J7U", "policy");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameManager_1 = require("../managers/GameManager");
    var SoundManager_1 = require("../managers/SoundManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PrivacyPolicy = function(_super) {
      __extends(PrivacyPolicy, _super);
      function PrivacyPolicy() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pLabel = null;
        _this.layout = null;
        _this.header = null;
        _this.isTerm = false;
        _this.stringArray = [];
        _this.buttonPressed = null;
        return _this;
      }
      PrivacyPolicy.prototype.onLoad = function() {
        console.log("on load is called");
      };
      PrivacyPolicy.prototype.start = function() {
        console.log("on start called");
      };
      PrivacyPolicy.prototype.onEnable = function() {};
      PrivacyPolicy.prototype.onBack = function() {
        this.node.active = false;
      };
      PrivacyPolicy.prototype.setTerm = function(loader) {
        this.isTerm = true;
        this.header.string = GameManager_1.GameManager.getInstance().getString("termAndConditions");
        this.stringArray = GameManager_1.GameManager.getInstance().getString("terms");
        this.addRemainingLabel();
      };
      PrivacyPolicy.prototype.setPrivacy = function(loader) {
        this.header.string = GameManager_1.GameManager.getInstance().getString("privacyPolicyTitle");
        this.isTerm = false;
        this.stringArray = GameManager_1.GameManager.getInstance().getString("privacyInformation");
        this.addRemainingLabel();
      };
      PrivacyPolicy.prototype.addRemainingLabel = function() {
        this.pLabel.string = this.stringArray.reduce(function(a, b) {
          return a + b;
        }, "");
        console.log("sreting", this.stringArray);
      };
      PrivacyPolicy.prototype.onBackAnimationEnd = function() {
        console.log("called");
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.node.active = false;
      };
      PrivacyPolicy.prototype.openLink = function() {
        var url = this.isTerm ? "https://docs.google.com/document/d/12RJd81VYPFEyNzqEyg1g5EmGlJGAxenEiC3ls-mltVQ/edit" : "https://docs.google.com/document/d/1cE961cfk3GJ70BfWmswVd5Spl_70XduWoZTMP9jvizk/edit#heading=h.4ox8fqtrw08x";
        cc.sys.openURL(url);
      };
      __decorate([ property(cc.Label) ], PrivacyPolicy.prototype, "pLabel", void 0);
      __decorate([ property(cc.Label) ], PrivacyPolicy.prototype, "layout", void 0);
      __decorate([ property(cc.Label) ], PrivacyPolicy.prototype, "header", void 0);
      __decorate([ property(cc.AudioClip) ], PrivacyPolicy.prototype, "buttonPressed", void 0);
      PrivacyPolicy = __decorate([ ccclass ], PrivacyPolicy);
      return PrivacyPolicy;
    }(cc.Component);
    exports.default = PrivacyPolicy;
    cc._RF.pop();
  }, {
    "../managers/GameManager": "GameManager",
    "../managers/SoundManager": "SoundManager"
  } ],
  settings: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02bb0NjDmpAVZy2mmjEJ4iG", "settings");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SoundManager_1 = require("../managers/SoundManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Settings = function(_super) {
      __extends(Settings, _super);
      function Settings() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.languagePopUp = null;
        _this.buttonPressed = null;
        _this.delegatScript = null;
        return _this;
      }
      Settings.prototype.start = function() {};
      Settings.prototype.init = function(delegate) {
        this.delegatScript = delegate;
      };
      Settings.prototype.openLocalisationPopUp = function() {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.languagePopUp.active = true;
      };
      Settings.prototype.openTermAndConditions = function() {
        this.delegatScript.openTermAndConditions();
      };
      Settings.prototype.openPrivacyPolicy = function() {
        this.delegatScript.openPrivacyPolicy();
      };
      Settings.prototype.onShare = function() {
        SoundManager_1.default.getInstance().playEffect(this.buttonPressed, false);
        this.delegatScript.onShare();
      };
      Settings.prototype.closeAllPopUps = function() {
        this.languagePopUp.active = false;
      };
      __decorate([ property(cc.Node) ], Settings.prototype, "languagePopUp", void 0);
      __decorate([ property(cc.AudioClip) ], Settings.prototype, "buttonPressed", void 0);
      Settings = __decorate([ ccclass ], Settings);
      return Settings;
    }(cc.Component);
    exports.default = Settings;
    cc._RF.pop();
  }, {
    "../managers/SoundManager": "SoundManager"
  } ],
  tempCodeRunnerFile: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7b013T+zRKWpc+lQq9vFxV", "tempCodeRunnerFile");
    cc._RF.pop();
  }, {} ],
  tutorials: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5cdepIQH5PSpwNpwXvLSJg", "tutorials");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameManager_1 = require("../managers/GameManager");
    var SoundManager_1 = require("../managers/SoundManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Tutorial = function(_super) {
      __extends(Tutorial, _super);
      function Tutorial() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.button = null;
        _this.accept = null;
        _this.bgSpriteFrame = null;
        _this.bg = null;
        _this.timePu = null;
        _this.flipPu = null;
        _this.audioClip = null;
        _this.tutorialTexts = [];
        _this.slideIndex = 0;
        _this.delegate = null;
        return _this;
      }
      Tutorial.prototype.start = function() {};
      Tutorial.prototype.showMemoriseTime = function(time) {
        this.tutorialTexts = GameManager_1.GameManager.getInstance().getString("tutorials");
        console.log("tutorial text length is ", this.tutorialTexts);
        var string = this.tutorialTexts[this.slideIndex]["slide" + (this.slideIndex + 1)];
        this.content.string = string.replace("%s", time);
      };
      Tutorial.prototype.onAccept = function() {
        SoundManager_1.default.getInstance().playEffect(this.audioClip, false);
        this.moveToNextSlide();
      };
      Tutorial.prototype.setDelegate = function(delegate) {
        this.delegate = delegate;
      };
      Tutorial.prototype.moveToNextSlide = function() {
        switch (this.slideIndex) {
         case 0:
          this.node.active = false;
          this.slideIndex++;
          this.delegate.startGame();
          return;

         case 1:
          break;

         case 2:
          this.showPowerUp();
          this.delegate.moveTudHandsOnHints(true);
          break;

         case 3:
          this.showPowerUp();
          this.delegate.moveTudHandsOnHints(false);
          this.updateUI();
          break;

         default:
          this.delegate.showGameInstructionPopUp();
          this.node.removeFromParent(true);
          return;
        }
        this.updateTutorialText();
        this.slideIndex++;
      };
      Tutorial.prototype.updateUI = function() {
        this.bg.spriteFrame = this.bgSpriteFrame;
        this.button.node.active = true;
        this.accept.node.active = false;
      };
      Tutorial.prototype.updateTutorialText = function() {
        console.log("slide index", this.slideIndex);
        this.content.string = this.tutorialTexts[this.slideIndex]["slide" + (this.slideIndex + 1)];
      };
      Tutorial.prototype.showTutorials = function() {};
      Tutorial.prototype.showPowerUp = function() {
        if (2 == this.slideIndex) {
          this.timePu.active = false;
          this.flipPu.active = true;
        } else {
          this.timePu.active = true;
          this.flipPu.active = false;
        }
      };
      __decorate([ property(cc.Label) ], Tutorial.prototype, "content", void 0);
      __decorate([ property(cc.Button) ], Tutorial.prototype, "button", void 0);
      __decorate([ property(cc.Button) ], Tutorial.prototype, "accept", void 0);
      __decorate([ property(cc.SpriteFrame) ], Tutorial.prototype, "bgSpriteFrame", void 0);
      __decorate([ property(cc.Sprite) ], Tutorial.prototype, "bg", void 0);
      __decorate([ property(cc.Node) ], Tutorial.prototype, "timePu", void 0);
      __decorate([ property(cc.Node) ], Tutorial.prototype, "flipPu", void 0);
      __decorate([ property(cc.AudioClip) ], Tutorial.prototype, "audioClip", void 0);
      Tutorial = __decorate([ ccclass ], Tutorial);
      return Tutorial;
    }(cc.Component);
    exports.default = Tutorial;
    cc._RF.pop();
  }, {
    "../managers/GameManager": "GameManager",
    "../managers/SoundManager": "SoundManager"
  } ]
}, {}, [ "hud", "options", "LanguageChanger", "localiser", "policy", "dailyRewards", "cards", "gameEnd", "gameFutureDetails", "gamePlay", "gameStart", "tutorials", "constants", "home", "Loading", "tempCodeRunnerFile", "levelUIManager", "AdManager", "FacebookAudiance", "GameManager", "LanguageManager", "NetworkConfig", "NetworkManager", "SoundManager", "settings" ]);