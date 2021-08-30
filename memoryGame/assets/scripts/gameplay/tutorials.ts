// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { GAME_TYPE } from "../helper/constants";
import { GameManager } from "../managers/GameManager";
import SoundManager from "../managers/SoundManager";
import GamePlay from "./gamePlay";

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
    delegate : GamePlay = null;

    @property(cc.SpriteFrame)
    bgForTut3 =  null;

    @property(cc.SpriteFrame)
    bgForTut4 = null;

 

    @property(cc.Label)
    title: cc.Label = null!;


    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
     start () {
    }
    showMemoriseTime(time){

        let keyString = this.getGameName();
      
        this.tutorialTexts = GameManager.getInstance().getString("tutorials");
        console.log("tutorial text length is ", this.tutorialTexts);
        let string = this.tutorialTexts[this.slideIndex][`slide${this.slideIndex + 1}`];
        this.content.string = string.replace("%s", time);  
        this.title.string = GameManager.getInstance().getString(`title${keyString}`);; 
    }

    onAccept (){
        SoundManager.getInstance().playEffect(this.audioClip, false);
        if(this.delegate._level == 0 || this.slideIndex ==0){
            this.moveToNextSlide();
        }else{
            this.node.active = false;

        }
        
    }

    terminateTutorials(){
        this.slideIndex =4;
        this.moveToNextSlide();
    }

    setDelegate(delegate : GamePlay){
        this.delegate = delegate;
    }


    moveToNextSlide(){
        console.log("move to next slide", this.slideIndex);
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
                this.updateUI(this.bgSpriteFrame,2);
                break;
            case 4:     
            default:
                this.delegate.stopTutorials();
                this.node.removeFromParent(true);
                return;
        }
        
        this.updateTutorialText(this.tutorialTexts[this.slideIndex][`slide${this.slideIndex + 1}`]);
        this.slideIndex++ ;
    }

    updateUI(bgTexture, activeButton){
        this.bg.spriteFrame = bgTexture;
        this.button.node.active = false;
        this.accept.node.active = false;
        switch(activeButton){
            case 1:
            case 3: 
                this.accept.node.active = true;
                break;
            case 2:
                this.button.node.active  = true;
                break;
        

        }
    
    }
    updateTutorialText(text){
        this.content.string = text;
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

    showGameInfoPopUp(){
        this.node.active = true;   
        this.updateUI(this.bgForTut3, 3);
        let key = `info${this.getGameName()}`;
        console.log("key is ", key);
        let text = GameManager.getInstance().getString(key);
        console.log("text is ",text);
        this.updateTutorialText(text);
        this.content.fontSize = 64;
        this.title.fontSize = 70;

    }

    showTerminationPopUp(){
        this.updateUI(this.bgForTut3, 2);
        let text = GameManager.getInstance().getString("endTutorials");
        console.log("text is ",text);
        this.updateTutorialText(text);

    }

    getGameName(){
        let keyString = "";
        switch(this.delegate.levelData.gameType){
            case GAME_TYPE.FIND:
                keyString = "Find";
                break;
            case GAME_TYPE.MIRROR:
                keyString =  "Mirror";
                break;
                
        }
        return keyString + this.delegate.levelData.groupOf;
    }





    



    // update (dt) {}
}
