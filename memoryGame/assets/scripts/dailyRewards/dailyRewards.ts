// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import {GameManager}  from '../managers/GameManager'

const {ccclass, property} = cc._decorator;


@ccclass
export default class DailyRewards extends cc.Component {
    
    @property(cc.Label)
    giftLabel: cc.Label = null;


    @property(cc.Label)
    clue: cc.Label = null;

    @property(cc.Node)
    wrappedNode: cc.Node = null;

    @property(cc.Node)
    claimNode: cc.Node = null;
    delgateScript = null;



    dailyRewards = [
        {hints : 3, clue :2},
        {hints : 5, clue :1},
        {hints : 4, clue :2},
        {hints : 3, clue :1},
        {hints : 4, clue :1},
        {hints : 1, clue :4},
        {hints : 4, clue :2},
        {hints : 1, clue :3},
        {hints : 3, clue :1},
        {hints : 2, clue :3},
      

    ];

    reward = this.dailyRewards[0];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        this.reward = JSON.parse(cc.sys.localStorage.getItem("rewardInfo"));
        console.log("rewardInfo is", this.reward);
       
    }

    setDelegate(delegate){
        this.delgateScript = delegate;
    }

    onRewardPicked(){
        this.wrappedNode.active = false;
        this.claimNode.active = true;
        this.giftLabel.string = `+ ${this.reward.hints}`;   
        this.clue.string = `+ ${this.reward.clue}`;   
    }

    onAccept(){
        let  hintCount = JSON.parse(cc.sys.localStorage.getItem("hint"));
        console.log("hint count before calucalytion", hintCount);
        hintCount += this.reward.hints; // for now will add new once done
        cc.sys.localStorage.setItem("hint", JSON.stringify(hintCount));
        console.log("hint count after calucalytion", hintCount);
        cc.sys.localStorage.removeKey("rewardInfo", );
        let  clueCount = JSON.parse(cc.sys.localStorage.getItem("clue"));
        clueCount += this.reward.clue;
        cc.sys.localStorage.setItem("clue", JSON.stringify(hintCount));
        this.delgateScript.onRewardCollected()
        this.node.active = false;
    }
    // update (dt) {}
}
