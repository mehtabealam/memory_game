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
export default class Tutorial extends cc.Component {

    @property(cc.Label)
    content : cc.Label = null;


    @property(cc.Button)
    button : cc.Button = null;

    @property(cc.Button)
    accept : cc.Button = null;


    @property(cc.SpriteFrame)
    bgSpriteFrame : cc.SpriteFrame = null;


    @property(cc.Sprite)
    bg : cc.Sprite = null;

    @property(cc.Node)
    timePu : cc.Node = null;

    @property(cc.Node)
    flipPu: cc.Node = null;

    @property(cc.AudioClip)
    audioClip: cc.AudioClip = null;

    tutorialTexts : string[] =[];
    slideIndex : number = 0;
    delegate : cc.Component = null;
    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
     start () {
    }
    showMemoriseTime(time){
        this.tutorialTexts = GameManager.getInstance().getString("tutorials");
        console.log("tutorial text length is ", this.tutorialTexts);
        let string = this.tutorialTexts[this.slideIndex][`slide${this.slideIndex + 1}`];
        this.content.string = string.replace("%s", time);
        
    }
    onAccept (){
        SoundManager.getInstance().playEffect(this.audioClip, false);
        this.moveToNextSlide();
    }
    setDelegate(delegate : cc.Component){
        this.delegate = delegate;
    }
    moveToNextSlide(){
        switch(this.slideIndex){
            case 0:
                this.node.active = false;
                this.slideIndex++ ;
                this.delegate.startGame();
                return;
            case 1:
                break;
            case 2:
                this.showPowerUp();
                this.delegate.moveTudHandsOnHints(true);
                break;

            case 3:
                this.showPowerUp();
                this.delegate.moveTudHandsOnHints(false); 
                this.updateUI();
                  
                break;
            default:
                this.delegate.showGameInstructionPopUp();
                this.node.removeFromParent(true);
                return;


        }
        
        this.updateTutorialText();
        this.slideIndex++ ;

    
    }
    updateUI(){
        this.bg.spriteFrame = this.bgSpriteFrame;
        this.button.node.active = true;
        this.accept.node.active = false;
    
    }
    updateTutorialText(){
        console.log("slide index",this.slideIndex );
        this.content.string = this.tutorialTexts[this.slideIndex][`slide${this.slideIndex + 1}`];
    }

    showTutorials(){

    }
    showPowerUp(){
        if(this.slideIndex == 2){
            this.timePu.active = false;
            this.flipPu.active = true;
        }else{
            this.timePu.active = true;
            this.flipPu.active = false;
        }

    }


    



    // update (dt) {}
}
