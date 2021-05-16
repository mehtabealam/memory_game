import {GameManager} from "../managers/GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Card extends cc.Component {

    private _cardName : string = "";
    private _delagateScript : cc.Component = null;

    @property(cc.Sprite)
    image: cc.Sprite = null;

    @property(cc.Node)
    animationNode: cc.Node = null;


    @property(cc.Sprite)
    back: cc.Sprite = null;

    @property(cc.Sprite)
    front: cc.Sprite = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    setDelegate(delegate:cc.Component){
        this._delagateScript = delegate;
    }

    setUpUI (spriteFrameKey) {
        this._cardName = spriteFrameKey;
        console.log("card name", spriteFrameKey);
        this.image.spriteFrame= GameManager.getInstance().getSpriteFrame(spriteFrameKey);
    }


    startAnimation(){

    }

    getCardName(){
        return this._cardName;
    }

    onCardClicked(){
        // console.log("showcards");
        this._delagateScript.showCard(this.node);
        // this.reveal();
    }


   setFaceUp(showFace: boolean): void {
        this.back.node.active = !showFace;
    }

    reveal( ): void {
        let callFunc1 = cc.callFunc(function () {
            this.setFaceUp(true);
        }, this);
        let callFunc2 = cc.callFunc(function () {
            // callFunc();
        }, this);
        let initialScale = this.animationNode.scale;
        let revealAction = cc.sequence(cc.scaleTo(0.1, 0, this.node.scale), callFunc1, cc.scaleTo(0.1, initialScale, initialScale));
        this.animationNode.runAction(revealAction);
    }


    unreveal ( ) {
        console.log("un reveal animation");
        let callFunc1 = cc.callFunc(function () {
            this.setFaceUp(false);
        }, this);
        let unrevealAction = cc.sequence(cc.scaleTo(0.1, 0, 1), callFunc1, cc.scaleTo(0.1, 1, 1));
        this.animationNode.runAction(unrevealAction);
    } 

    // update (dt) {}
}
