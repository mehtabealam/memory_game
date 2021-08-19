"use strict";
cc._RF.push(module, 'a7156emC5pEy6IYXQVsNTaS', 'FacebookAudiance');
// scripts/managers/FacebookAudiance.js

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
    INTERSTITIAL: '854006105330177_898749927522461',
    REWARDEDVIDEO: 'YOUR_PLACEMENT_ID'
  },
  IOS: {
    BANNER: "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
    INTERSTITIAL: 'IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID',
    REWARDEDVIDEO: 'YOUR_PLACEMENT_ID'
  }
};
cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    //skip ads on browsers
    if (cc.sys.isBrowser) return;
    this.placementId = PLACEMENT_IDS.ANDROID;
    cc.log("platform is ", cc.sys.platform, cc.sys.IPAD);

    if (cc.sys.platform === cc.sys.IPHONE || cc.sys.platform === cc.sys.IPAD) {
      this.placementId = PLACEMENT_IDS.IOS;
    }

    this.schedule(this.loadInterstitial, 5, cc.macro.REPEAT_FOREVER, 0);
  },
  showBanner: function showBanner(event) {
    //skip ads on browsers
    if (cc.sys.isBrowser) return;
    var banner = new cc.Ads.Banner(this.placementId.BANNER, cc.Ads.BANNER_POSITION.ALIGN_PARENT_BOTTOM);
    this.banner = banner;
    banner.on("onAdLoaded", function () {
      cc.log("banner onAdLoaded");
    }, this.node);
    banner.on("onError", function (eCode) {
      console.log("banner onError", eCode);
    }, this.node);
    banner.on("onAdClicked", function () {
      cc.log("banner onAdClicked");
    }, this.node);
    banner.show().then(function () {
      cc.log("banner show-------");
    })["catch"](function (e) {
      cc.log("banner reject ", e);
    });
  },
  destryBanner: function destryBanner() {
    this.banner.destroy();
  },
  loadInterstitial: function loadInterstitial() {
    var _this = this;

    this.interstital = new cc.Ads.Interstitial(this.placementId.INTERSTITIAL);
    this.interstital.on("onInterstitialDisplayed", function () {
      cc.log("interstital onInterstitialDisplayed");
    });
    this.interstital.on("onInterstitialDismissed", function () {
      cc.log("interstital onInterstitialDismissed");
    });
    this.interstital.on("onAdClicked", function () {
      cc.log("interstital onAdClicked");
    });
    this.interstital.on("onError", function (error) {
      console.log("interstital Error:", error);
    });
    this.interstital.loadAd().then(function () {
      _this.isInterstitialLoaded = true;
    })["catch"](function (e) {
      cc.log("interstital catch", e);
    });
  },
  showInterstital: function showInterstital() {
    //skip ads on browsers
    if (cc.sys.isBrowser) return;

    if (this.isInterstitialLoaded) {
      this.interstital.show();
    }
  }
});

cc._RF.pop();