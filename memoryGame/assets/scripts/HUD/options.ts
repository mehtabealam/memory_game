// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import {GAME_SCREEN} from "../helper/constants"
import SoundManager from "../managers/SoundManager";
import { GameManager } from "../managers/GameManager";
@ccclass
export default class Options extends cc.Component {

    private _delegateScript : null;
    @property(cc.Label)
    selectMode: cc.Label = null;
    @property(cc.Label)
    timer: cc.Label = null;
    @property(cc.Label)
    gameMode: cc.Label = null;

    @property(cc.Button)
    volume: cc.Button = null;

    
    @property(cc.SpriteFrame)
    volumeUp : cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    volumeDown : cc.SpriteFrame = null;




    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    setDelegate (delegate) {
        this._delegateScript = delegate;
    }

    setUpUI (screen : GAME_SCREEN, gameMode: string) {
        console.log("options", screen, gameMode);
    
        let mode = GameManager.getInstance().getString(gameMode);
        this.gameMode.string = mode;
        this.deactiveAllNodes();
        this.updateVolumeIcon();
        switch(screen){
            case GAME_SCREEN.MODE_SELECTION:
                this.selectMode.node.active = true;
                this.volume.node.active = true;
                break;
            case GAME_SCREEN.LEVEL_SELECTION:
             
                break;
             case GAME_SCREEN.GAME_PLAY:
                this.timer.node.active = true;
                this.gameMode.node.active = true;
                 break;
        }
    }

    deactiveAllNodes (){
        this.selectMode.node.active = false;
        this.timer.node.active = false;
        this.gameMode.node.active = false;
        this.volume.node.active = false; 

       
    }


    changeVolume(event : Event){
        // console.log("change volume", event);
        if(JSON.parse(cc.sys.localStorage.getItem("Sound"))){
            SoundManager.getInstance().stopMusic();
            cc.sys.localStorage.setItem("Sound", false);
            
            
        }else{
            console.log("inside this");
             SoundManager.getInstance().playMusic(true);
             cc.sys.localStorage.setItem("Sound", true)
        }
        this.updateVolumeIcon();
        
    }

    updateVolumeIcon(){
        let spirte = this.volume.node.getChildByName("Background").getComponent(cc.Sprite) ;
        spirte.spriteFrame = JSON.parse(cc.sys.localStorage.getItem("Sound")) ? this.volumeUp: this.volumeDown;

        // console.log(JSON.parse(cc.sys.localStorage.getItem("Sound")), JSON.parse(cc.sys.localStorage.getItem("Sound")) ? this.volumeUp: this.volumeDown;   
    }

    updateTimer(time, totalTime){
        let timeString = GameManager.getInstance().getString("time")
        timeString = timeString.replace("%s", "");
        this.timer.string = `${timeString}${time}/${totalTime}`;
    }


  


   
    
  

    // update (dt) {}
}
