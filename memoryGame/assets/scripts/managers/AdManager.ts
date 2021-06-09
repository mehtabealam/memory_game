// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html





const { ccclass, property } = cc._decorator;

@ccclass
export default class AdManager extends cc.Component {


    private static _instance : AdManager = null!;
    public static getInstance(){
        if(!AdManager._instance){
            AdManager._instance = new AdManager();
        }
        return AdManager._instance;
    }


    public init(){  
      sdkbox.PluginAdMob.init();
      sdkbox.PluginAdMob.setListener(this);
      let target = this;
      sdkbox.PluginAdMob.setListener({
        adViewDidReceiveAd: function(name) {
            console.log("add has been loaded", name)
            if(name == 'banner'){
                target.showBanner();
            }
        },
        adViewDidFailToReceiveAdWithError: function(name, msg) {
            // target.showInfo('adViewDidFailToReceiveAdWithError name=' + name + ' msg=' + msg);
        },
        adViewWillPresentScreen: function(name) {
            // target.showInfo('adViewWillPresentScreen name=' + name);
        },
        adViewDidDismissScreen: function(name) {
            // target.showInfo('adViewDidDismissScreen name=' + name);
        },
        adViewWillDismissScreen: function(name) {
            // target.showInfo('adViewWillDismissScreen=' + name);
        },
        adViewWillLeaveApplication: function(name) {
            // target.showInfo('adViewWillLeaveApplication=' + name);
        }
    });

    }
    public cacheAds(adName){
        sdkbox.PluginAdMob.cache(adName);
    }

    public setTestDevice(device :string){
        sdkbox.PluginAdMob.setTestDevices(device);
    }

    public showBanner(){
        console.log("show banner ads");
       if(sdkbox.PluginAdMob.isAvailable('banner')){
        sdkbox.PluginAdMob.show('banner');
        console.log("show banner ads");
       }else{
        console.log("not avilable banner ads");
        sdkbox.PluginAdMob.cache('banner');
       } 
       

    }

    public showInterstital(){
        if(sdkbox.PluginAdMob.isAvailable('gameover')){
            sdkbox.PluginAdMob.show('gameover');
            console.log("show ads");
           }else{
               console.log("chacheing add");
            sdkbox.PluginAdMob.cache('gameover');
           } 
       
    }

   
}
