import { GAME_MODE, END_POP_UP } from "../helper/constants";
import { GameManager } from "../managers/GameManager";
import SoundManager from "../managers/SoundManager";
import AdManager from "../managers/AdManager";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameEnd extends cc.Component {


    private _delegate = null;
    @property(cc.Label)
    remarks: cc.Label = null;


    @property(cc.Label)
    comments : cc.Label = null;


    @property(cc.Node)
    newRecord : cc.Node = null;

    @property(cc.Node)
    timesUp : cc.Node = null;

    @property(cc.Button)
    adButtons : cc.Button = null;



    @property(cc.AudioClip)
    buttonPressed : cc.AudioClip = null;


    start () {

    }

    setProperties(delegate, gameMode ){
        this._delegate = delegate;
        // this.mode = gameMode.toUpper();
    }



    onAccept(){
        SoundManager.getInstance().playEffect(this.buttonPressed, false);
        this._delegate.gameEnded();

    }

    onPlayAgain (){
        SoundManager.getInstance().playEffect(this.buttonPressed, false);
        this._delegate.onPlayAgain();
    }

    onCancel(){
        SoundManager.getInstance().playEffect(this.buttonPressed, false);
        this._delegate.onPlayAgainCancel();
    }

    showPopUpFor(type : END_POP_UP, level){
        
        this.newRecord.active = false;
        this.timesUp.active = false;
        this.remarks.string = GameManager.getInstance().getString('newRecord');
        switch(type){
            case END_POP_UP.CLEARD: 
                 this.remarks.string = GameManager.getInstance().getString('congratulations');
            case END_POP_UP.NEW_RECORD:
                this.newRecord.active = true;
                break;         
            case END_POP_UP.FAILED:
                 this.timesUp.active = true;
                 break;
            
        }

    }


    showAds(){
        if(!cc.sys.isBrowser){
            AdManager.getInstance().showInterstital(this);
        }
    }

    adHasbeenShown(){
        let  hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
        hintCount +=3; // for now will add new once done
        cc.sys.localStorage.setItem("hint", JSON.stringify(hintCount));
        this.adButtons.interactable = false;
    }

  
    // update (dt) {}
}
