
import {GameManager} from "../managers/GameManager"
import { GAME_MODE, END_POP_UP, GAME_SCREEN } from "../helper/constants";
import SoundManager from "../managers/SoundManager";
import AdManager from "../managers/AdManager";


const   cardIndex = {
     GROUP_3_4 : 0,
     GROUP_4_4 : 1,
     GROUP_4_5 : 2,
     GROUP_4_6 : 3,
     GROUP_4_7 : 4
}


const {ccclass, property} = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

    private _cards = [];
    private _gridInfo = null;
    private _level  =  0;
    private _timer = null;
    private OpenCards =[];
    private cardsInPair =[];
    private tutorialCards =[];
    private tutCardName = 0;
    private isTutoiral = true; 
    private levelData = null;
    private interval = null;
    private isTouchBlocked = false;
    private totalTime = 0;
    private groupOf = 2;
    private progresser = null;
    gameMode = '';
    gameStartAlert = null;
    gameEndAlert = null;
    optionLayer = null;
    gameTutorials = null;

    bounsPoints = 0;
    isSoundPlaying = false
    

    @property(cc.Prefab)
    cardPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    options: cc.Prefab = null;

    @property(cc.ProgressBar)
    timerBar : cc.ProgressBar = null;

    @property(cc.Layout)
    gameLayout : cc.Layout = null;

    @property(cc.Sprite)
    bouns = null;

    @property(cc.Prefab)
    startPopUp = null;

    @property(cc.Prefab)
    gameEndPopUp = null;

    @property(cc.Node)
    containerNode = null;

    @property(cc.AudioClip)
    correctAnswerAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    wrongAnswerAudiodFlip: cc.AudioClip = null;
    @property(cc.AudioClip)
    last5Sec: cc.AudioClip = null;

    @property(cc.AudioClip)
    clapping: cc.AudioClip = null;

    @property(cc.AudioClip)
    timesUp: cc.AudioClip = null;

    @property([cc.SpriteFrame])
    cardsSpriteFrames: cc.SpriteFrame[] = [];

    @property(cc.Node)
    hand: cc.Node = null;

    @property(cc.Node)
    netError: cc.Node = null;


    @property(cc.Label)
    levelLabel: cc.Label = null;


    @property(cc.Node)
    gameInstructions: cc.Node = null;

    @property(cc.Prefab)
    tutorials: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

     onLoad () {

     }

    start () {
        this.hand.zIndex = 20;
        this.netError.zIndex = 20;
        this.progresser = this.timerBar.node.getChildByName("bar");
        var animationClips = this.bouns.node.getComponent(cc.Animation);
        animationClips.on('finished', this.bounsAnimationCompleted, this);
        this.setOptions();
        this.progresser.width = 0;
        this.timerBar.progress = 0;
        this.timerBar.totalLength = this.timerBar.node.width;

    }
    onDisable(){
        if( !this.node.parent.getComponent("home").isforSetting){
            clearInterval(this.interval)  ;
            this.OpenCards.length = 0;
            this.cardsInPair.length = 0;
            this.hand.parent = this.node;
            this.bouns.node.active = false; 
            this.tutorialCards.length = 0;
            this.hand.active = false;
            this.isTutoiral = true;
            SoundManager.getInstance().stopAllSounds();
            this.optionLayer.getComponent("options").disableClockButton();
        }else{
            SoundManager.getInstance().stopAllSounds(); 
        }
    }
    onEnable(){
        if(this.optionLayer){
            this.optionLayer
            .getComponent("options").updateHindText();
        }
        
    }
    setOptions() {
        this.optionLayer = cc.instantiate(this.options);
        this.optionLayer
        .getComponent("options").setDelegate(this);
        this.optionLayer
        this.node.addChild(this.optionLayer);
        this.optionLayer.zIndex = 5;
      }

    // SETTING UP UI
    setUpUI(level : number, gameMode:string){
        this.gameLayout.node.active = false;
        this.gameMode = gameMode;
        this._level = level;
        this.levelData = GameManager.getInstance().getLevelData(this._level , this.gameMode);
        this.setUpAlerts();
        this.loadLevelImages();
        
       
        
    }
     loadLevelImages(){
        GameManager.getInstance()
        .loadLevelImages(this._level)
        .then((data) => {
          this.groupOf =  this.levelData.groupOf;
          this.createAndShuffelCards();
          this._gridInfo = this.levelData.grid;
          this.setGrid();
          
          
        })
        .catch((error) => {
        });
     }
    setUpAlerts (){
        this.gameStartAlert = cc.instantiate(this.startPopUp);
        let timerTitle = `${this.levelData.timer.totalTime}s`;
        let levelInfo = GameManager.getInstance().getLevelData(this._level);
        this.gameStartAlert.getComponent("gameStart").setProperties(this, levelInfo.gameType, levelInfo.groupOf);
        this.gameEndAlert = cc.instantiate(this.gameEndPopUp);
        this.gameEndAlert.getComponent("gameEnd").setProperties(this, this.gameMode);
        this.node.parent.addChild(this.gameStartAlert,7);
        this.node.parent.addChild(this.gameEndAlert,7);
        this.gameEndAlert.active = false;
        this.gameStartAlert.active = false;
    }
    setGrid() {
        console.log("inside set card elements");
        this.gameLayout.getComponent(cc.Widget).updateAlignment();
        this.containerNode.getComponent(cc.Widget).updateAlignment();
        this.gameLayout.node.removeAllChildren();
        let index = cardIndex[`GROUP_${this._gridInfo.col}_${this._gridInfo.row}`];
        let totalHeight = (this.containerNode.height - (this.gameLayout.spacingX*this._gridInfo.row));
        let spacing = this.gameLayout.spacingX * this._gridInfo.col;
        let width = this.containerNode.width - spacing;
        let scale = 1;
        let dummyWidth = 1;
        for(let i = 0; i < this._cards.length; i++){
            let card = cc.instantiate(this.cardPrefab);
            card.getComponent("cards").setDelegate(this);
            card.getComponent("cards").setUpUI(this._cards[i].name, this._level, this.gameMode, this.cardsSpriteFrames[index]);
            let blockSize = width / this._gridInfo.col;
            let height = totalHeight/ this._gridInfo.row;
            card.setScale(Math.min(blockSize/card.width, height/card.height));
            scale = card.scale;
            dummyWidth = card.width;
            this.gameLayout.node.addChild(card);
        }  
        this.gameLayout.node.width =   this._gridInfo.col * (scale * dummyWidth ) + spacing;
        this.optionLayer.active = false;   
        this.gameLayout.node.active = true;
        this.levelLabel.node.parent.active = true; 
        console.log("inisde this we have set the cards");
        this.updateGamePlay();

    }

    updateGamePlay(){
        this.levelLabel.getComponent("localiser").replaceValue(`${this._level+1}`); 
          this.levelLabel.getComponent("localiser").setStringForKey();
          this.levelLabel.node.parent.runAction(cc.sequence(cc.scaleTo(1.5, 1), cc.delayTime(0.5), cc.callFunc(()=>{
              this.levelLabel.node.parent.active = false;
              this.levelLabel.node.parent.scale = 0.5;
            if((this._level+1) % 10 == 1){
                this.showTutorials();
            }else{
                this.startGame();
            }   
          })));
          this.totalTime = this.levelData.timer.totalTime;
          this.bouns.node.getChildByName("bonus").string = this.levelData.timer.bounsTime;
    }
    createAndShuffelCards(){
        this._cards.length =0;
        for(let i =0; i < this.groupOf; i++){
            this._cards.push(...this.levelData.cards);
        }
        for(let index = this._cards.length-1; index>= 0; index--){
            let randomIndex = Math.floor(Math.random() * (index - 0) + 0);
            let swapElement = this._cards[randomIndex];
            let currentElement = this._cards[index];
            this._cards[index] = swapElement;
            this._cards[randomIndex] = currentElement;
        }

        if((this._level +1)% 10 == 1){
           this.tutCardName = this._cards[Math.floor(Math.random() * (this._cards.length - 1) + 0)].name;
          
        }



    }
    flipAllCards(){
        for(let child of this.gameLayout.node.children){
            child.getComponent("cards").unreveal();
            if((this._level+1) % 10 != 1){
              child.getComponent('cards').disableOverlay();
            }
        }
        if((this._level+1) % 10 == 1){
            this.tutorialCards = this.gameLayout.node.children.filter(item =>  item.getComponent('cards').getCardName() == this.tutCardName); 
            this.isTutoiral = true;
            this.moveTutHand();
            
        }else{
            this.isTutoiral = false;
        }
       
    }
    moveTutHand(){
        console.log("move tut hand");
        let card = this.tutorialCards.shift();
        if(!card) return;
        card.parent.getComponent(cc.Widget).updateAlignment();
        card.getComponent('cards').disableOverlay();
        this.hand.active = true;
        let worldSpace = this.containerNode.convertToWorldSpace(card.getPosition());
        let nodeSpace = this.hand.parent.convertToNodeSpace(worldSpace);
        this.hand.y = nodeSpace.y - (card.height  * card.scale);
        this.hand.x = nodeSpace.x;
        this.hand.stopAllActions();
        this.hand.runAction(cc.sequence(cc.moveBy(.5,  0 , 50), cc.moveBy(.5, 0, -50)).repeat(1000));
    }
    moveTudHandsOnHints(isOnMagnifineGlass){
        this.hand.parent = this.gameTutorials;
        let position = this.optionLayer.getComponent("options").getChildrenPosition(isOnMagnifineGlass);
        let worldSpace = this.optionLayer.parent.convertToWorldSpaceAR(position);
        let nodeSpace = this.gameTutorials.convertToNodeSpaceAR(worldSpace);
        this.hand.y = nodeSpace.y + this.node.height * 0.3;
        this.hand.x = nodeSpace.x;
    }
    startGameTimer (){
        let target = this;
        target.optionLayer.getComponent("options").updateTimer(0 , this.totalTime)
        this.interval = setInterval(()=>{
            this._timer++;

            target.optionLayer.getComponent("options").updateTimer(this._timer , this.totalTime)

            // console.log("inside this maximum time inside this", this.totalTime);
            if(this.gameMode != GAME_MODE.PRACTICE){
                this.timerBar.progress  = this._timer  / this.totalTime;

                if(Math.abs(this._timer  - this.totalTime) == 10 || 
                     (!this.isSoundPlaying && Math.abs(this._timer  - this.totalTime) < 10)){
                    SoundManager.getInstance().playEffect(this.last5Sec, false);
                    this.isSoundPlaying = true;
                    this.optionLayer.getComponent("options").enableClockButton();
                    console.log("inside thie we are here hhheheheh");
                    this.showTenSecondsPopUp();
                }else if(this.isSoundPlaying && Math.abs(this._timer  - this.totalTime) > 10){
                    SoundManager.getInstance().stopAllSounds();
                    this.optionLayer.getComponent("options").disableClockButton();
                    this.isSoundPlaying = false;
                }
                if(this._timer  == this.totalTime){
                    this.isTouchBlocked = true;
                    clearInterval(this.interval);  
                    this.endGame(false);
                }
            }
            
        }, 1000);
    }
    showCard(card){
        if(this.cardsInPair.length >= this.groupOf || this.isTouchBlocked){
            return;
        }
        card.getComponent("cards").reveal();
        this.cardsInPair.push(card);
        this.isTutoiral && this.moveTutHand();
        this.cardsInPair.length > 1 && this.isPair();
       
       
        // this.isTutoiral 
    }
    isPair(){
        let cards = [];
        cards.length = 0;
        for(let i=0; i< this.cardsInPair.length; i++){
            cards.push(this.cardsInPair[i].getComponent('cards'))
        }

        let isMatch  = true;
        for(let i = 0; i < cards.length - 1; i++ ){
            if(cards[i].getCardName() !== cards[i+1].getCardName()){
                isMatch = false;
                break;
            }

        } 
        if( isMatch ){   
            if(this.cardsInPair.length != this.groupOf){
                return
            }
        
            this.playBounsAnimation();
            this.isTouchBlocked = true;
            this.node.runAction(cc.sequence(cc.delayTime(0.2), cc.callFunc(()=>{
            for(let cardScipt of cards){
                    cardScipt.playCorrectAnimation();
            }
            this.isTouchBlocked = false;
            })));
            for(let cardScipt of cards){
                this.OpenCards.push(cardScipt.getCardName());
               }
            this.cardsInPair.length = 0;
            if(this.OpenCards.length == this._cards.length){
               this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(()=>{
                this.endGame(true);
               }))); 
            }

            if(this.isTutoiral){
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(()=>{
                    // this();
                    this.continueTutorial();
                   }))); 
                
            }

        }else{
            let target = this;
            this.isTouchBlocked = true;
            this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(()=>{
                for(let cardScipt of cards){
                    cardScipt.unreveal();
                    this.isTouchBlocked = false;
                }
                this.cardsInPair.length = 0;
            })));
          
        }
        this.node.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc( ()=>{
            let clip = isMatch ? this.correctAnswerAudio : this.wrongAnswerAudiodFlip;
            SoundManager.getInstance().playEffect(clip, false);
        })));
    }
    endGame (isWon) {

        this.optionLayer.getComponent("options").disableClockButton();
         SoundManager.getInstance().stopAllSounds();
         clearInterval(this.interval);
        if(isWon){
            let isNewRecord = false;
            let levelInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
            let levels =  JSON.parse(levelInfo.level);
            // SoundManager.getInstance().playEffect(this.clapping, false);
            if(levels[this._level].time > this._timer){
                levels[this._level].time = this._timer;
                if(this._level < levels.length-1){
                    levels[this._level+1].isUnlock = true;
                }
                levelInfo.level = JSON.stringify(levels);
                cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(levelInfo));
                isNewRecord = true;
            }
            this.gameEndAlert.getComponent("gameEnd").showPopUpFor(isNewRecord ? END_POP_UP.NEW_RECORD: END_POP_UP.CLEARD, this._level);
            this.gameEndAlert.active = true;
        }else{
            // SoundManager.getInstance().playEffect(this.timesUp, false);
            this.gameEndAlert.getComponent("gameEnd").showPopUpFor(END_POP_UP.FAILED,this._level);
            this.gameEndAlert.active = true;
        }

        this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc( ()=>{
            let clip = isWon ? this.clapping : this.timesUp;
            SoundManager.getInstance().playEffect(clip, false);
        })));
        
    }

    // pop ups DELEGATE METHODS 
    onPlayAgain (){
        this.gameEndAlert.active = false;
        if(!cc.sys.isBrowser){
            if(AdManager.getInstance().isAdAvailable()){
                AdManager.getInstance().showInterstital(this);
            };
        }
        cc.sys.localStorage.setItem("lastPlayedLevel", this._level);
        //MARK : TO DO CHECK WORK AFTER ADS COMES
        this.node.parent.getComponent("home").onBack();
        this.node.parent.getComponent("home").startGame();
    }

    startGame(){
        console.log("inside this");
        this.levelLabel.node.parent.active= false;
        this.progresser.width = this.timerBar.node.width;   
        this.timerBar.progress = 1;
        let target = this;
        let time = this.levelData.timer.memorizeTime;
        target.optionLayer.getComponent("options").updateTimer(time, this.levelData.timer.totalTime)
        target.optionLayer.active = true;
        
        this.isTouchBlocked = true;
        this.interval = setInterval(()=>{
            target.optionLayer.getComponent("options").updateTimer(time, this.levelData.timer.totalTime)
            time--;
            this.timerBar.progress = time/this.levelData.timer.memorizeTime;
            if(time === -1){
                clearInterval(this.interval);
                target.isTouchBlocked = false;
                target.flipAllCards();
                if(!this.isTutoiral){
                    this._timer = 0;
                    this.startGameTimer();

                }
                
            }
        }, 1000);
    }

    onPlayAgainCancel(){
        this.gameEndAlert.active = false;
        this.gameEndAlert.removeFromParent();
        this.node.parent.getComponent("home").onBack();

    }

    gameEnded (){
        this.gameEndAlert.removeFromParent();
        let level = GameManager.getInstance().getCurrentLevel();
        let totalLevelInMode = GameManager.getInstance().getLevelInfo(this.gameMode);
        if(level == totalLevelInMode.length -1){
          this.node.parent.getComponent("home").showFutureDetailsScreen();
          GameManager.getInstance().pushScene(GAME_SCREEN.FUTURE_ANNOCMENTS);    
        }else{
            cc.sys.localStorage.setItem("lastPlayedLevel", this._level + 1);
            this.node.parent.getComponent("home").onBack();
            this.node.parent.getComponent("home").startGame();
        }
       
    }

    // ANIMATION CALLBACKS :
    playBounsAnimation(isFromPowerUp = false){
        console.log("is from popwe up ", isFromPowerUp);
        let additonPoints = isFromPowerUp ? 10 : 5;
        this.bounsPoints += additonPoints;
        this.bouns.node.active = true;
        this.bouns.node.position  = new cc.Vec2(0,0);
        this.bouns.node.scale = 2;
        this.bouns.node.getComponentInChildren(cc.Label).string = `+${additonPoints}`;
        this.bouns.node.opacity = 255;
        this.bouns.node.getComponent(cc.Animation).play();

    }
    bounsAnimationCompleted (){
        this.bouns.node.active = false;
        this.totalTime += this.bounsPoints//this.levelData.timer.bounsTime;
        this.optionLayer.getComponent("options").updateTimer(this._timer,  this.totalTime);
        this.isTouchBlocked = false;
        this.bounsPoints = 0;
    }
    showTutorials(){
        this.gameTutorials = cc.instantiate(this.tutorials);
        this.gameTutorials.getComponent("tutorials").setDelegate(this);
        this.gameTutorials.getComponent("tutorials").showMemoriseTime(this.levelData.timer.memorizeTime);
        this.hand.setPosition(0,0);
        this.node.parent.addChild(this.gameTutorials, 100);
        
    }
    continueTutorial(){
        this.gameTutorials.active = true;
        this.gameTutorials.getComponent("tutorials").moveToNextSlide();
        
    }
    showGameInstructionPopUp(){
        console.log("inside this we have to see the ");
        this.gameStartAlert.active = true;
        this.hand.active = false;
    }
    stopTutorials(){
        this.isTutoiral = false;
        this.tutorialCards.length = 0;
        this.gameStartAlert.removeFromParent();
        for(let child of this.gameLayout.node.children){
              child.getComponent('cards').disableOverlay();
         }
         this._timer = 0;
         this.startGameTimer();
    } 
    adHasbeenShown(){

    }
    isTutorialPlaying(){
       return this.isTutoiral;
    }
    removeHintPopUp(){
       this.gameEndAlert.active = false;
       this.startGameTimer();
       this.optionLayer.getComponent('options').updateHindText();
    }
    showHintPopUP(type){
       console.log("cc.sys.getNetworkType()", cc.sys.getNetworkType(),  cc.sys.NetworkType.LAN, cc.sys.NetworkType.WWAN)
    if (cc.sys.getNetworkType() == cc.sys.NetworkType.LAN || cc.sys.getNetworkType() == cc.sys.NetworkType.WWAN){
        this.gameEndAlert.getComponent("gameEnd").showPopUpFor(type, this._level);
        this.gameEndAlert.active = true;
        clearInterval(this.interval);
    }else{
        console.log("show error pop up",this.netError);
        this.showNetErroPopUP();
    }
      
    }
    showNetErroPopUP(){

       this.netError.active = true;

       this.netError.getComponentInChildren(cc.Label).string = GameManager.getInstance().getString('openNet');
       cc.tween(this.netError)
       .delay(2)
       .call(()=> this.netError.active = false)
       .start();
    }
    openPairCards(){

    let hiddenCards  = [];
    let targetCard = null;

    
    if(this.cardsInPair.length == this.groupOf || this.isTouchBlocked){
        console.log("please. return");
        return;
    }
    else if(this.cardsInPair.length!=0 && this.cardsInPair.length <= this.groupOf){
        hiddenCards = this.cardsInPair;
    }else{
        // console.log("innside else");
          hiddenCards =  this.gameLayout.node.children.filter(item =>  !item.getComponent('cards').isOpen());  
    }


    // console.log("hidden cards hehhehe", hiddenCards, this.cardsInPair);
    if(hiddenCards.length > 0){
      let card = hiddenCards[0];
      let pairs =  this.gameLayout.node.children.filter(item => 
      item.getComponent('cards').getCardName() ==  card.getComponent('cards').getCardName() ); 
    //   console.log("pairs", pairs, card.getComponent('cards').getCardName());
      pairs.forEach(card=>{
          if(!card.getComponent('cards').isOpen()){
            this.showCard(card)
        }
    });
        
       
     }
            
       
     
    }
    showTenSecondsPopUp(){
       console.log("inside this we have to show ten seconds timer here hehe", JSON.parse(cc.sys.localStorage.getItem("lastTenSeconds")));
       if(!JSON.parse(cc.sys.localStorage.getItem("lastTenSeconds"))){
        cc.sys.localStorage.setItem("lastTenSeconds", true);
        clearInterval(this.interval);
        this.node.parent.getComponent("home").showLastSecondsPopUp();
    }
    }

   hideTenSecondsPopUp(){
    this.node.parent.getComponent("home").hideLastSecondsPopUp();
    this.startGameTimer();
   }



    



    







   

}
