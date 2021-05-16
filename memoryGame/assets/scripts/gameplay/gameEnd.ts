import { GAME_MODE } from "../helper/constants";

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
    header: cc.Label = null;

    @property(cc.Label)
    level: cc.Label = null;

    @property(cc.Label)
    remarks : cc.Label = null;

    @property(cc.Label)
    mode : cc.Label = null

    @property(cc.Button)
    accept : cc.Button = null

    start () {

    }

    setProperties(delegate, gameMode ){
        this._delegate = delegate;
        this.mode = gameMode.toUpper();
    }



    onAccept(){
        this._delegate.gameEnded();

    }

  
    // update (dt) {}
}
