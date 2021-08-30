
import {GameManager} from "../managers/GameManager"
import { GAME_MODE, END_POP_UP, GAME_SCREEN, GAME_TYPE } from "../helper/constants";
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
    private mirrorOPenCards =[];
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
    isSoundPlaying = false;
    currentCardName = '';

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
            this.mirrorOPenCards.length = 0;
            this.timerBar.progress = 1;
            this.hand.active = false;
            this.isTutoiral = true;
            SoundManager.getInstance().stopAllSounds();
            this.levelLabel.node.parent.stopAllActions();
            this.levelLabel.node.parent.scale = 0.5;
            this.node.stopAllActions();
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
            if((this._level+1) % 10 == 1 && !JSON.parse(cc.sys.localStorage.getItem(`shownTutorial${this._level}`))){
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
        for(let i = 0; i < this.groupOf; i++){
            this._cards.push(...this.levelData.cards);
        }
        for(let index = this._cards.length-1; index>= 0; index--){
            let randomIndex = Math.floor(Math.random() * (index - 0) + 0);
            let swapElement = this._cards[randomIndex];
            let currentElement = this._cards[index];
            this._cards[index] = swapElement;
            this._cards[randomIndex] = currentElement;
        }
    }
    flipAllCards(){
        for(let child of this.gameLayout.node.children){
            child.getComponent("cards").unreveal();
            if((this._level+1) % 10 != 1 || JSON.parse(cc.sys.localStorage.getItem(`shownTutorial${this._level}`))){
              child.getComponent('cards').disableOverlay();
            }
        }
        if((this._level+1) % 10 == 1 && !JSON.parse(cc.sys.localStorage.getItem(`shownTutorial${this._level}`))){
            let demoCard = this.levelData.demoCard;
            this.tutorialCards = this.gameLayout.node.children.filter(item =>  item.getComponent('cards').getCardName() == demoCard); 
            this.isTutoiral = true;
            this.moveTutHand();
            
        }else{
            this.isTutoiral = false;
        }
       
    }
    moveTutHand(){
        console.log("current tut hand", this.currentCardName);
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
        target.optionLayer.getComponent("options").updateTimer(0 , this.totalTime);
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
        
        this.cardsInPair.forEach(card=>{
            console.log("card in show card", card.getComponent("cards").getCardName(),this.cardsInPair.length, this.isTouchBlocked);
        })

        if(this.cardsInPair.length == 0 && this.mirrorOPenCards.length == 0){
            this.currentCardName = card.getComponent("cards").getCardName();
        }
        if((this.cardsInPair.length >= this.groupOf  && this.mirrorOPenCards.length == 0)|| this.isTouchBlocked){
            return;
        }
        if(card.getComponent("cards").reveal()){
            this.cardsInPair.push(card);
            this.isTutoiral && this.moveTutHand();
            this.addToOpenList();
        }

        
        
        // console.log("card in 2: ",...this.OpenCards);
    }

    addToOpenList(){
        let cards = [];
        cards.length = 0;
        for(let i=0; i < this.cardsInPair.length; i++){
            cards.push(this.cardsInPair[i].getComponent('cards'))
        }
        let isMatch = this.isPair(cards);
        if(isMatch){
            if( this.isTutoiral){
                this.checkIsTutPoint();               
            }

            console.log("testing chacking cards", this.cardsInPair.length, this.groupOf);

            if(this.cardsInPair.length != this.groupOf){
                    return
            }
            if(this.levelData.gameType == GAME_TYPE.MIRROR){
                    if(this.isMirrorCardPresent()){
                        if(this.isTutoiral){ 
                            this.tutorialCards = this.gameLayout.node.children.filter(item =>  item.getComponent('cards').getCardName() == this.currentCardName); // add these card in tutoarils card;   
                            this.moveTutHand();   
                        }
                        return;
                    }

                    
                    cards.length = 0;
                    for(let i=0; i < this.mirrorOPenCards.length; i++){
                    cards.push(this.mirrorOPenCards[i].getComponent('cards'));
                }
                }

                this.isTouchBlocked = true;
                !this.isTutoiral && this.playBounsAnimation();
                this.node.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(()=>{
                    for(let cardScipt of cards){
                            cardScipt.playCorrectAnimation();
                    }}), cc.delayTime(0.3), cc.callFunc(()=>{
                        this.isTouchBlocked = false;
                        this.cardsInPair.length = 0;
                        this.mirrorOPenCards.length = 0;
                    })));


                for(let cardScript of cards){
                        this.OpenCards.push(cardScript.getCardName());
                 }

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
            this.isTouchBlocked = true;
            this.node.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(()=>{
                for(let cardScipt of cards){
                    cardScipt.unreveal();  
                } 
            }),cc.delayTime(0.3), cc.callFunc( ()=>{
                this.isTouchBlocked = false;
                this.cardsInPair.length = 0;
            })));
        }

        this.node.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc( ()=>{
            let clip = isMatch ? this.correctAnswerAudio : this.wrongAnswerAudiodFlip;
            SoundManager.getInstance().playEffect(clip, false);
        })));

    }  
    isMirrorCardPresent(){
              let currentCard = this.currentCardName;
               let lastCharacter = currentCard[currentCard.length - 1];
               let nextCard = currentCard.replace(lastCharacter, lastCharacter == '1'? '2':'1');
               let count = 0;
               this.mirrorOPenCards = [...this.mirrorOPenCards,...this.cardsInPair];
               this.cardsInPair.length = 0;
               for(let child of this.gameLayout.node.children){
                    if(child.getComponent("cards").getCardName() == nextCard  && !child.getComponent("cards").isOpen()){
                        count++;
                    }
                    
                }
                this.currentCardName = nextCard;
                console.log("next card is", nextCard, count);
                return  count!=0;
            
        
    }
    isPair(cards){
        console.log("inisde is pair", cards.length);
        let isMatch  = true;
        for(let i = 0; i < cards.length; i++ ){
            console.log("current card name", this.currentCardName, cards[i].getCardName());
            if(cards[i].getCardName() !== this.currentCardName){
                isMatch = false;
                break;
            }

        } 

        return isMatch;
    }
    endGame (isWon) {
        this.optionLayer.getComponent("options").disableClockButton();
         SoundManager.getInstance().stopAllSounds();
        
         console.log("stop inteval remoiving interval");
         clearInterval(this.interval);
        if(isWon){
            let isNewRecord = false;
            let levelInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
            let levels =  JSON.parse(levelInfo.level);
            SoundManager.getInstance().playEffect(this.clapping, false);
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
        console.log("starr game called");;
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
        if(this._level ==0){
            this.gameTutorials.getComponent("tutorials").moveToNextSlide();
        }else{
            this.gameTutorials.getComponent("tutorials").showTerminationPopUp();
        }
        
       
        
    }
    showGameInstructionPopUp(){
        console.log("inside this we have to see the ");
        this.gameStartAlert.active = true;
        this.hand.active = false;
    }
    stopTutorials(){
        this.isTutoiral = false;
        this.hand.active = false;
        console.log("open card", this.OpenCards);
        let openCards = this.gameLayout.node.children.filter(item => item.getComponent('cards').isOpen()); 
        this.tutorialCards.length = 0;
        this.cardsInPair.length = 0;
        this.gameStartAlert.removeFromParent();
        openCards.forEach(card => card.getComponent("cards").unreveal());
        this.OpenCards.length = 0;
        console.log("open cards here", this.OpenCards); cc.sys.localStorage.setItem(`shownTutorial${this._level}`, true);
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
    else if(this.cardsInPair.length !=0 && this.cardsInPair.length <= this.groupOf){
        hiddenCards = this.cardsInPair;
    }else{

        console.log("inside thiswe are here");
          if(this.mirrorOPenCards.length ==0){
            hiddenCards =  this.gameLayout.node.children.filter(item =>  !item.getComponent('cards').isOpen());  
            this.currentCardName = hiddenCards[0].getComponent("cards").getCardName();
          }else{
            hiddenCards =  this.gameLayout.node.children.filter(item =>  item.getComponent("cards").getCardName() == this.currentCardName);  
          }
          console.log("hidden cards", hiddenCards);
          
    }


    // console.log("hidden cards hehhehe", hiddenCards, this.cardsInPair);
    if(hiddenCards.length > 0){
      let card = this.currentCardName;
      let pairs =  this.gameLayout.node.children.filter(item => 
      item.getComponent('cards').getCardName() ==  card ); 
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

   checkIsTutPoint(){
    if(this._level ==0){
        return;
    }
    console.log("current open card length is ", this.cardsInPair.length, this.levelData.groupOf);
    switch(this._level){
        case 10:
            this.cardsInPair.length == this.levelData.groupOf-1
               &&
            this.gameTutorials.getComponent("tutorials").showGameInfoPopUp();
            break;
        case 20:
            console.log("inisde this but not sure if this will work");
            this.cardsInPair.length == this.levelData.groupOf
                            &&
            this.mirrorOPenCards.length ==0 
                            &&            
            this.gameTutorials.getComponent("tutorials").showGameInfoPopUp();
            break;
        case 30:
            this.cardsInPair.length == this.levelData.groupOf
                            &&
            this.mirrorOPenCards.length == 0
                            && 
            this.gameTutorials.getComponent("tutorials").showGameInfoPopUp();
           break;

    }
   }

    



    







   

}
