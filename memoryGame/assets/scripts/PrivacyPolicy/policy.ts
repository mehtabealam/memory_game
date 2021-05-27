// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { GameManager } from "../managers/GameManager";
import SoundManager from "../managers/SoundManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PrivacyPolicy extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    
  @property(cc.AudioClip)
  buttonPressed: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        console.log("om start called");
        this.label.string = GameManager.getInstance().getString("privacyInformation");

    }

    onEnable(){
        this.node.opacity = 255;
        this.node.getComponent(cc.Animation).play("moveIn");
       
    }


    onBack(){
        this.node.getComponent(cc.Animation).play("privacyPloicyMoveOut");
    }


    onBackAnimationEnd(){
        console.log("called");
        SoundManager.getInstance().playEffect(this.buttonPressed, false);
        this.node.active = false;
    }
    // update (dt) {}
}
