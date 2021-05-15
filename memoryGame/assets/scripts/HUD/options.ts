// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import {GAME_SCREEN} from "../helper/constants"
import SoundManager from "../managers/SoundManager";
@ccclass
export default class NewClass extends cc.Component {

    private _delegateScript : null;
    @property(cc.Label)
    selectMode: cc.Label = null;
    @property(cc.Label)
    timer: cc.Label = null;
    @property(cc.Label)
    gameMode: cc.Label = null;
    @property(cc.Label)
    gameType: cc.Label = null;
    @property(cc.Button)
    volume: cc.Button = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    setDelegate (delegate) {
        this._delegateScript = delegate;
    }

    setUpUI (screen : GAME_SCREEN) {
        this.deactiveAllNodes();
        switch(screen){
            case GAME_SCREEN.MODE_SELECTION:
                this.selectMode.node.active = true;
                this.volume.node.active = true;
                break;
            case GAME_SCREEN.LEVEL_SELECTION:
                this.gameType.node.active = true;
                break;
             case GAME_SCREEN.GAME_PLAY:
                this.timer.node.active = false;
                this.gameType.node.active = true;
                 break;
        }
    }

    deactiveAllNodes (){
        this.selectMode.node.active = false;
        this.timer.node.active = false;
        this.gameMode.node.active = false;
        this.gameType.node.active = false;
        this.volume.node.active = false; 
    }


    changeVolume(){
        // this._delegateScript.updateVolume();
    }
  

    // update (dt) {}
}
