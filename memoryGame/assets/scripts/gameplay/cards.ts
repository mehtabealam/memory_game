import {GameManager} from "../managers/GameManager";
import SoundManager from "../managers/SoundManager";
import GamePlay from "./gamePlay";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Card extends cc.Component {

    private _cardName : string = "";
    private _isOpen : boolean = true;
    private _delagateScript : GamePlay = null;

    @property(cc.Sprite)
    image: cc.Sprite = null;

    @property(cc.Node)
    animationNode: cc.Node = null;


    @property(cc.Sprite)
    back: cc.Sprite = null;

    @property(cc.Sprite)
    front: cc.Sprite = null;

    @property(cc.AudioClip)
    cardFlip: cc.Node = null;

    @property(cc.Node)
    overLay: cc.Node = null;

    // onLoad () {}

    start () {

    }

    setDelegate(delegate: GamePlay){
        this._delagateScript = delegate;
    }

    setUpUI (spriteFrameKey, level, mode, cardSpriteFrame) {
        this._cardName = spriteFrameKey;
        // console.log("card name", spriteFrameKey, cardSpriteFrame);
        this.image.spriteFrame= GameManager.getInstance().getSpriteFrame(mode, level, spriteFrameKey);
        this.front.spriteFrame = cardSpriteFrame;
        this.back.spriteFrame = cardSpriteFrame;
        this.animationNode.setContentSize(cardSpriteFrame._originalSize);
        this.node.setContentSize(cardSpriteFrame._originalSize);
    }


    startAnimation(){

    }

    getCardName(){
        return this._cardName;
    }

    onCardClicked(){
        // console.log("showcards");
        if(!this._isOpen){
            this._delagateScript.showCard(this.node);
        }
      
        // this.reveal();
    }


   setFaceUp(showFace: boolean): void {
        this.back.node.active = !showFace;
        this._isOpen = showFace;
    }

    reveal( ): boolean {
        if(this._isOpen || this.animationNode.getNumberOfRunningActions() > 0){
            console.log("card in", this.node.getNumberOfRunningActions());
            return false;
        }
        SoundManager.getInstance().playEffect(this.cardFlip,false);
        let callFunc1 = cc.callFunc(function () {
            this.setFaceUp(true);
        }, this);
       
        let initialScale = 1;
        // console.log("initialScale", initialScale);
        let revealAction = cc.sequence(cc.scaleTo(0.1, 0, this.node.scale), callFunc1, cc.scaleTo(0.1, initialScale, initialScale));
        this.animationNode.runAction(revealAction);
        return true;
    }


    unreveal ( ) {

        if(!this._isOpen || this.animationNode.getNumberOfRunningActions() >0){
            return;
        }
        let callFunc1 = cc.callFunc(function () {
            this.setFaceUp(false);
        }, this);
        let unrevealAction = cc.sequence(cc.scaleTo(0.1, 0, 1), callFunc1, cc.scaleTo(0.1, 1, 1));
        this.animationNode.runAction(unrevealAction);
    }

    playCorrectAnimation(){
        let bounce = cc.scaleTo(0.1, 0.9,0.9).easing(cc.easeBounceInOut());
        let correctAnimation = cc.sequence(bounce, cc.delayTime(0.2), cc.scaleTo(0.1, 1, 1));
        this.animationNode.runAction(correctAnimation);
    }


    enableOverlay(){
        this.overLay.active = true;

    }

    disableOverlay(){
        this.overLay.active = false;

    }

    isOpen(){
        // console.log("isopen", this._isOpen);
        return this._isOpen;
    }

    // update (dt) {}
}
