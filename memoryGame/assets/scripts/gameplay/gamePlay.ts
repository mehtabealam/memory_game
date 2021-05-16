
import {GameManager} from "../managers/GameManager"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

    private _cards = [];
    private _gridInfo = null;
    private _timer = null;
    private OpenCards =[];
    private cardsInPair =[];
    private levelData = null;
    private interval = null;
    private isTouchBlocked = false;
    gameMode = '';

    gameStartAlert = null;
    gameEndAlert = null;
    optionLayer = null;

    @property(cc.Prefab)
    cardPrefab: cc.Prefab = null;

    @property(cc.ProgressBar)
    timerBar : cc.Prefab = null;

    @property(cc.Layout)
    gameLayout : cc.Layout = null;

    @property(cc.Prefab)
    startPopUp = null;

    @property(cc.Prefab)
    gameEndPopUp = null;

    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    setUpUI(level : Number, gameMode:string, optionRef){
        this.gameMode = gameMode;
        this.levelData = GameManager.getInstance().getLevelData(level, gameMode);
        this._cards = [...this.levelData.cards, ...this.levelData.cards];  //2x 
        this.shuffelCards();
        this._gridInfo = this.levelData.grid;
        this.optionLayer = optionRef;
        this.setGrid();
        this.setUpAlerts();
        
    }

    setUpAlerts (){
        let gameModeDetails = GameManager.getInstance().getModeInfo(this.gameMode);
        this.gameStartAlert = cc.instantiate(this.startPopUp);
        this.gameStartAlert.getComponent("gameStart").setProperties(this, this.gameMode, gameModeDetails.title);
        this.gameEndAlert = cc.instantiate(this.gameEndPopUp);
        this.node.parent.addChild(this.gameStartAlert,10);
        this.node.parent.addChild(this.gameEndAlert,10);
        this.gameEndAlert.active = false;
    }

    setGrid() {
        this.gameLayout.getComponent(cc.Widget).updateAlignment();
        this.gameLayout.node.removeAllChildren();
        let spacing = this.gameLayout.spacingX * this._gridInfo.col;
        let width = this.gameLayout.node.width - spacing;
        for(let i = 0; i < this._cards.length; i++){
            let card = cc.instantiate(this.cardPrefab);
            let blockSize = width / this._gridInfo.col;
            card.setScale(blockSize/card.width);
            card.getComponent("cards").setDelegate(this);
            card.getComponent("cards").setUpUI(this._cards[i].name);
            this.gameLayout.node.addChild(card);
        }  
        this.gameLayout.node.active = false;
        this.optionLayer.active = false;    
    }

    shuffelCards(){
        for(let index = this._cards.length-1; index>= 0; index--){
            let randomIndex = Math.floor(Math.random() * (index - 0) + 0);
            let swapElement = this._cards[randomIndex];
            let currentElement = this._cards[index];
            this._cards[index] = swapElement;
            this._cards[randomIndex] = currentElement;
        }

    }

    FlipAllCards(){
        
        for(let child of this.gameLayout.node.children){
            // console.log("child", child.getComponent("cards"));
            child.getComponent("cards").unreveal();
        }
    }


    startGame(){
        let target = this;
        let time = this.levelData.timer.memorizeTime;
        this.gameStartAlert.active = false;
        target.optionLayer.getComponent("options").updateTimer(time, this.levelData.timer.totalTime)
        target.optionLayer.active = true;
        this.gameLayout.node.active = true;
        this.isTouchBlocked = true;
        this.interval = setInterval(()=>{
            target.optionLayer.getComponent("options").updateTimer(time, this.levelData.timer.totalTime)
            time--;
            if(time ==-1){
                clearInterval(this.interval);
                target.isTouchBlocked = false;
                target.FlipAllCards();
            }
        }, 1000);
    }


    showCard(card){
        console.log("shoow card of the game play", card);
        if(this.cardsInPair.length >=2 || this.isTouchBlocked){
            return;
        }
        card.getComponent("cards").reveal();
        this.cardsInPair.push(card);
        this.cardsInPair.length == 2 && this.isPair();
    }


    isPair(){
        let card1 = this.cardsInPair[0].getComponent('cards').getCardName();
        let card2 = this.cardsInPair[1].getComponent('cards').getCardName();
        if( card1 === card2){
            this.OpenCards.push(...[card1, card2]);
            this.cardsInPair.length = 0;
            // check mode and give bonus marks
            // check if all card made and check if the time taken is less than the last time and show pop up accordingly
        }else{
    
            let target = this;
            this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(()=>{
                this.cardsInPair[0].getComponent('cards').unreveal();
                this.cardsInPair[1].getComponent('cards').unreveal();
                this.cardsInPair.length = 0;
            })));
          
        }
    }




   

}
