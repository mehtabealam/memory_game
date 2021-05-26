let LIVE_STATUS = {
    UNKNOWN: 0,
    INITIALIZING: 1,
    RUNNING: 2,
    PAUSED: 3,
    STOPPED: 4,
    COMPLETED: 5,
};

let PLACEMENT_IDS = {
    ANDROID: {
        BANNER: "4571342716227004_4571344242893518",
        INTERSTITIAL: '4571342716227004_4571360876225188',
        REWARDEDVIDEO: 'YOUR_PLACEMENT_ID'
    },
    IOS: {
        BANNER: "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
        INTERSTITIAL: 'IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID',
        REWARDEDVIDEO: 'YOUR_PLACEMENT_ID'
    }
};
cc.Class({
    extends: cc.Component,

    onLoad () {
        this.placementId = PLACEMENT_IDS.ANDROID;

        cc.log("plat form is ",cc.sys.platform,cc.sys.IPAD);
        if (cc.sys.platform === cc.sys.IPHONE || cc.sys.platform === cc.sys.IPAD) {
            this.placementId = PLACEMENT_IDS.IOS;
        }
    },

    banner_click(event){
        let banner = new cc.Ads.Banner(this.placementId.BANNER,cc.Ads.BANNER_POSITION.ALIGN_PARENT_BOTTOM);
        this.banner = banner;
        banner.on("onAdLoaded", () => {
            cc.log("banner onAdLoaded");
        }, this.node);

        banner.on("onError", (eCode) => {
            cc.log("banner onError");
        }, this.node);

        banner.on("onAdClicked", () => {
            cc.log("banner onAdClicked");
        }, this.node);

        // banner.loadAd().then(() => {
        //     cc.log("banner show-------");
        // }).catch((e) => {
        //     this.status_tips.string = "banner reject";
        //     cc.log("banner reject");
        // });

        banner.show().then(() => {
            cc.log("banner show-------");
        }).catch((e) => {
            cc.log("banner reject ", e);
        });
    },

    banner_destroy(){
        this.banner.destroy();
    },

    interstital_click(){
        this.interstital = new cc.Ads.Interstitial(this.placementId.INTERSTITIAL);
        this.interstital.on("onInterstitialDisplayed", () => {
            cc.log("interstital onInterstitialDisplayed");
        });

        this.interstital.on("onInterstitialDismissed", () => {
            cc.log("interstital onInterstitialDismissed");
        });

        this.interstital.on("onAdClicked", () => {
            cc.log("interstital onAdClicked");
        });

        this.interstital.on("onError",(error)=>{
            console.log("interstital Error:",error);
        });

        this.interstital.loadAd().then(() => {
            return this.interstital.show();
        }).catch((e) => {
            cc.log("interstital catch", e);
        });
    }
});
