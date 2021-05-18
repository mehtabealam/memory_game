
import {GameManager} from "../managers/GameManager"
import { GAME_MODE, END_POP_UP } from "../helper/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

    private _cards = [];
    private _gridInfo = null;
    private _level  =  0;
    private _timer = null;
    private OpenCards =[];
    private cardsInPair =[];
    private levelData = null;
    private interval = null;
    private isTouchBlocked = false;
    

    private progresser = null;
   
    gameMode = '';

    gameStartAlert = null;
    gameEndAlert = null;
    optionLayer = null;

    @property(cc.Prefab)
    cardPrefab: cc.Prefab = null;

    @property(cc.ProgressBar)
    timerBar : cc.ProgressBar = null;

    @property(cc.Layout)
    gameLayout : cc.Layout = null;

    @property(cc.Prefab)
    startPopUp = null;

    @property(cc.Prefab)
    gameEndPopUp = null;

    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.progresser = this.timerBar.node.getChildByName("bar");
       
    }


    onDisable(){
      clearInterval(this.interval)   
    }


    // SETTING UP UI

    setUpUI(level : number, gameMode:string, optionRef){
        this.gameMode = gameMode;
        this._level = level;
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
        this.gameStartAlert.getComponent("gameStart").setProperties(this, this.gameMode, gameModeDetails.title,this.levelData.timer.memorizeTime );
        this.gameEndAlert = cc.instantiate(this.gameEndPopUp);
        this.gameEndAlert.getComponent("gameEnd").setProperties(this, this.gameMode);
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
            child.getComponent("cards").unreveal();
        }
    }


    startGameTimer (){
        if(this.gameMode != GAME_MODE.PRACTICE){
            this.progresser.width = 0;
            this.timerBar.progress = 0;
            this.timerBar.totalLength = this.timerBar.node.width;
        }
        console.log("total length", this.timerBar.totalLength);
        this._timer = 0;
        let target = this;
        this.interval = setInterval(()=>{
            this._timer ++;
            target.optionLayer.getComponent("options").updateTimer(this._timer , this.levelData.timer.totalTime)
            if(this.gameMode != GAME_MODE.PRACTICE){
                this.timerBar.progress  = this._timer  / this.levelData.timer.totalTime;
                console.log("progerss", this.timerBar.progress, this.levelData.timer.totalTime);
                if(this._timer  == this.levelData.timer.totalTime){
                    this.isTouchBlocked = true;
                    clearInterval(this.interval);  
                    this.endGame(false);
                }
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
            //TO DO 
            // check mode and give bonus marks
            // check if all card made and check if the time taken is less than the last time and show pop up accordingly
            if(this.OpenCards.length == this._cards.length){
                this.endGame(true);
            }

        }else{
            let target = this;
            this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(()=>{
                this.cardsInPair[0].getComponent('cards').unreveal();
                this.cardsInPair[1].getComponent('cards').unreveal();
                this.cardsInPair.length = 0;
            })));
          
        }
    }


    endGame (isWon) {
        clearInterval(this.interval);
        if(isWon){
            let isNewRecord = false;
            let levelInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
            let levels =  JSON.parse(levelInfo[this.gameMode]);
            
            if(levels[this._level].time > this._timer){
                
                levels[this._level].time = this._timer;
                console.log("current level infp", levels[this._level].time, this._timer, JSON.parse(levelInfo[this.gameMode])[this._level].time);
                levelInfo[this.gameMode] = JSON.stringify(levels);
                cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(levelInfo));
                isNewRecord = true;
            }
            this.gameEndAlert.getComponent("gameEnd").showPopUpFor(END_POP_UP.NEW_RECORD);
            this.gameEndAlert.active = true;
        }else{
            this.gameEndAlert.getComponent("gameEnd").showPopUpFor(END_POP_UP.FAILED);
            this.gameEndAlert.active = true;
        }

       

    }
    // pop ups DELEGATE METHODS 

    onPlayAgain (){
        this.gameEndAlert.active = false;
        this.node.parent.getComponent("home").onBack();
        this.node.parent.getComponent("home").onLevelSelect(null, this._level.toString());
        // this.node.active = true;
    }

    
    startGame(){
        this.progresser.width = this.timerBar.node.width;   
        this.timerBar.progress = 1;
       
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
            this.timerBar.progress = time/this.levelData.timer.memorizeTime;
            if(time ==-1){
                clearInterval(this.interval);
                target.isTouchBlocked = false;
                target.FlipAllCards();
                this.startGameTimer();
            }
        }, 1000);
    }


    onPlayAgainCancel(){
        this.gameEndAlert.active = false;
        this.node.parent.getComponent("home").onBack();

    }

    gameEnded (){
        this.gameEndAlert.active = false;
        this.node.parent.getComponent("home").onBack();
    }




   

}