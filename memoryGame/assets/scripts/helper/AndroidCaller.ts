import { GameManager } from "../managers/GameManager";

class AndroidCaller{
    private static _instance : AndroidCaller = null;
    public static getInstance(){
        if(this._instance == null){
            this._instance = new AndroidCaller();
            return this._instance;
        }
    }

    public onNotificationReceived(data){

        switch(data.type){
            case 1:
                this.onRewardNotification(data);
                break;
            case 2:
                break;             
        }
        console.log("hint is coming form somewhere", JSON.stringify(data));
        cc.sys.localStorage.setItem('rewardInfo', JSON.stringify(data));
        GameManager.getInstance().setPendingNotification(true);
    }


    public onRewardNotification(data){

    }

    public onLevelNotification(data){
        
    }
}


window["AndroidCaller"] = AndroidCaller.getInstance();