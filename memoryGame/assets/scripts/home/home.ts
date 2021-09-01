import { GameManager } from "../managers/GameManager";
import { GAME_MODE, GAME_SCREEN, GAME_LINK } from "../helper/constants";
import SoundManager from "../managers/SoundManager";
import AdManager from "../managers/AdManager";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Home extends cc.Component {
  gameScreen: GAME_SCREEN = GAME_SCREEN.HOME;
  hudLayer: cc.Node;
  gameMode: string = "";
  futureDetails : cc.Node;
  letloadCount = 0;
  isAfterTerms = false;
  isforSetting = false;

  @property(cc.Layout)
  modeLayout: cc.Layout = null;


  @property(cc.Prefab)
  hud: cc.Prefab = null;

  @property(cc.Node)
  howToPlayPopUp: cc.Node = null;

  @property(cc.Node)
  modeSelectionNode: cc.Node = null;

  @property(cc.Node)
  levelSelectionNode: cc.Node = null;

  @property(cc.Node)
  gameplayNode: cc.Node = null;

  @property(cc.Layout)
  scrollViewLayout: cc.Layout = null;

  @property(cc.Prefab)
  levelHolderPrefab: cc.Prefab = null;

  @property(cc.ScrollView)
  scrollView: cc.ScrollView = null;

  @property(cc.AudioClip)
  musicClip: cc.AudioClip = null;



  @property(cc.Node)
  privacyPolicy: cc.Node = null;

  @property(cc.AudioClip)
  buttonPressed: cc.Node = null;

  @property(cc.Node)
  bottomBar: cc.Node = null;

  @property(cc.Prefab)
  futureDetailsPrefab: cc.Prefab = null;


  @property(cc.Node)
  settings: cc.Node = null;


  @property(cc.Node)
  terms: cc.Node = null;


  @property(cc.Node)
  dailyRewards: cc.Node = null;

  @property(cc.Node)
  loader: cc.Node = null;

  @property(cc.Node)
  lastTenSeconds: cc.Node = null;

 
  onLoad() {



    

  }
  start() {

    // eval("cc.sys.localStorage.setItem('rewardInfo', JSON.stringify({clue: 1, hint :2 }))");
    GameManager.getInstance().pushScene(GAME_SCREEN.HOME);
    this.terms.zIndex = 10;
    this.dailyRewards.zIndex = 9;
    this.settings.zIndex = 9;
    this.settings.getComponent("settings").init(this);
    this.howToPlayPopUp.zIndex =7;
    this.loader.zIndex = 12;
    this.privacyPolicy.zIndex = 50;
    this.lastTenSeconds.zIndex = 60;
    this.terms.active = !JSON.parse(cc.sys.localStorage.getItem("hasTermAccepted"));
    this.setLevelInfoInLS();
    cc.game.emit("onLanguageChanged");
    this.setupUI();
    this.startImageLoading();

    cc.debug.setDisplayStats(false);
      SoundManager.getInstance().init(this.musicClip);
    if (!cc.sys.localStorage.getItem("Sound")) {
      cc.sys.localStorage.setItem("Sound", false);
    } 


    if(cc.sys.isMobile){
      cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, (ev) => {
        if (ev.keyCode === cc.macro.KEY.back) {
           this.onBack();
        }
      })
    }
  }


  setRewardInfo(rewardInfo){

    console.log(JSON.stringify(rewardInfo));
  }

  setupUI() {

    this.setLevelSelectionScreen();
    this.setHud();

    this.modeSelectionNode.zIndex = 5;
    this.levelSelectionNode.zIndex = 6;
    this.futureDetails = cc.instantiate(this.futureDetailsPrefab);
    this.futureDetails.zIndex = 6;
    this.futureDetails.active = false;
    this.futureDetails.getComponent("gameFutureDetails").setDelegatScript(this);
    this.dailyRewards.getComponent("dailyRewards").setDelegate(this);
    this.node.addChild( this.futureDetails)
  
    if(cc.sys.isMobile){
      // sdkbox.PluginShare.init();
      AdManager.getInstance().init();
      AdManager.getInstance().setTestDevice('12FA347A3FF2FE36F7A2E2AB230AC410');
      AdManager.getInstance().cacheAds('gameover');
    }
    if(!this.terms.active){
      this.startGame();
      
    }
  }

  onReward(reward){
    console.log("reward", JSON.stringify(reward));
  }

  onAnimationEnd (){
   

  }
 

  setHud() {
    this.hudLayer = cc.instantiate(this.hud);
    this.node.addChild(this.hudLayer);
    this.hudLayer.getComponent("hud").setDelegate(this);
    this.hudLayer.zIndex = 1;
    this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
  }

showDailyRewards(){
    // this.dailyRewards.active = true;
  }

  showLevelSelection(){
    if(this.levelSelectionNode.active){
      return;
    }
    this.levelSelectionNode.active = true;  
    this.levelSelectionNode.getComponent("level")
    this.gameScreen == GAME_SCREEN.SETTINGS && GameManager.getInstance().popScene();
    this.gameScreen == GAME_SCREEN.GAME_PLAY && GameManager.getInstance().popScene();
    this.changeSceneVisiblity(this.gameScreen, false);
    this.gameScreen = GAME_SCREEN.LEVEL_SELECTION;
    GameManager.getInstance().pushScene(GAME_SCREEN.LEVEL_SELECTION);
    this.levelSelectionNode.getComponent(cc.Animation).play("moveIn");
  }


  //button callbacks:
  showHowToPlayPopUp() {
    SoundManager.getInstance().playEffect(this.buttonPressed, false);
    this.howToPlayPopUp.active = true;
    this.howToPlayPopUp.getChildByName("Post").getComponent(cc.Animation).play();
  }

  removeHowToPlayPopUp() {
    SoundManager.getInstance().playEffect(this.buttonPressed, false);
    this.howToPlayPopUp.active = false;
  }


  setLevelSelectionScreen() {
    let levels = GameManager.getInstance().getLevelInfo();
    // console.log("levels getting levesl information", JSON.stringify(levels));
    this.scrollViewLayout.node.removeAllChildren();
    let totalFrame = Math.ceil(levels.length / 10);
    for(let i = 0; i <  totalFrame; i++){
      let levelHolder = cc.instantiate(this.levelHolderPrefab);
      levelHolder.getComponent("levelUIManager").setDelegateComponent(this);
      levelHolder.getComponent("levelUIManager").populateLevels(i * 10);
      this.scrollViewLayout.node.addChild(levelHolder);
    }
    if(totalFrame == 1){
      this.scrollViewLayout.node.children[0].width = 1000;
      this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = true;
      this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
      this.scrollViewLayout.updateLayout();
    }else{
      this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = false;
      this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
    }

    let levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
    let levelsInfoForMode = JSON.parse(levelsInfo.level);

    let lastUnlockedLevel = 0;
    for(let item of levelsInfoForMode){
      if(!item.isUnlock){
        break;
      }
      lastUnlockedLevel++;
    }

    let frame = Math.ceil(lastUnlockedLevel/10);
    let offset = this.scrollView.getScrollOffset();
    let offsetPercent = (frame - 1) * (1 / (this.scrollViewLayout.node.childrenCount - 1));   
  }

  updateLevelSelctionScreen(){
    // console.log("update level selection screen");
    let levels = GameManager.getInstance().getLevelInfo();
    let startIndex = 0;
    let totalFrame = Math.ceil(levels.length / 10);
    for( let child of this.scrollViewLayout.node.children){
       child.getComponent("levelUIManager").updateLevels(startIndex);
       startIndex +=10;
    }
    if(totalFrame == 1){
      this.scrollViewLayout.node.children[0].width = 1000;
      this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = true;
      this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
      this.scrollViewLayout.updateLayout();
    }else{
      this.scrollViewLayout.node.getComponent(cc.Widget).isAlignHorizontalCenter = false;
      this.scrollViewLayout.getComponent(cc.Widget).updateAlignment();
    }

  
  }


  onBack() {
    let currentScene = GameManager.getInstance().popScene();
    let lastScene = GameManager.getInstance().popScene();

    // console.log("curerntScene", currentScene, lastScene);
    if(currentScene == GAME_SCREEN.HOME){
      cc.game.end();
      return;
    }
    else if(currentScene == GAME_SCREEN.FUTURE_ANNOCMENTS){
      GameManager.getInstance().removeAllScene();
      this.levelSelectionNode.active = false;
      this.settings.active = false;
      this.gameplayNode.active = false;  
      this.modeSelectionNode.active = true;
      this.gameScreen = GAME_SCREEN.HOME;
      GameManager.getInstance().pushScene(GAME_SCREEN.HOME);
      return;

    }
    this.hudLayer.zIndex = 1;
    this.gameScreen = lastScene;
    this.changeSceneVisiblity(currentScene, false);
    this.changeSceneVisiblity(lastScene, true);
    
    GameManager.getInstance().pushScene(lastScene);
    // console.log("scene arra",GameManager.getInstance().screen )
  }



  onEnable(){
    console.log("on enabled is called",cc.sys.localStorage.getItem("rewardInfo"));
    // if(JSON.parse(cc.sys.localStorage.getItem("rewardInfo"))){
    //   this.showDailyRewards();
    // }
     

  }

  changeSceneVisiblity(currentScene, isActive){
    // console.log("scnenes",currentScene, isActive)
    switch(currentScene){
      case GAME_SCREEN.LEVEL_SELECTION:
        this.levelSelectionNode.active = isActive;
        isActive && this.updateLevelSelctionScreen();
        break;
      case GAME_SCREEN.SETTINGS:
        this.settings.getComponent('settings').closeAllPopUps();
        this.settings.active = isActive;
        this.isforSetting = isActive;
        break;
      case GAME_SCREEN.GAME_PLAY:
         this.gameplayNode.active = isActive;  
         break;
      case GAME_SCREEN.HOME:
        this.modeSelectionNode.active = isActive;   
        console.log("foregroundNotification", JSON.stringify(cc.sys.localStorage.getItem('foregroundNotification')))
          break;  

      
    }
  }



  startGame(){
    // disable the last scne pushed 
    let lastPlayedLevel = cc.sys.localStorage.getItem("lastPlayedLevel")
    console.log("last played level", lastPlayedLevel);
    this.onLevelSelect(lastPlayedLevel);
  }

  onLevelSelect( level: string) {
    SoundManager.getInstance().playEffect(this.buttonPressed, false);
    GameManager.getInstance().setCurrentLevel(parseInt(level));
    cc.sys.localStorage.setItem("lastPlayedLevel", parseInt(level));
    this.changeSceneVisiblity(this.gameScreen , false);
    this.updateLevelSelctionScreen();
    GameManager.getInstance().pushScene(GAME_SCREEN.GAME_PLAY);
    console.log("we have pushed game scene", GameManager.getInstance().screen);
    this.gameScreen = GAME_SCREEN.GAME_PLAY;
    this.levelSelectionNode.active = false;
    this.modeSelectionNode.active = false
    this.gameplayNode.active = true;
    this.gameplayNode
    .getComponent("gamePlay")
    .setUpUI( GameManager.getInstance().getCurrentLevel());
  }


  onLevelAnimationCompleted(){
    if(this.gameScreen == GAME_SCREEN.GAME_PLAY){
   
    }
  }

  /**
   * 
   * 
   * data is stored in this mannor in the local storage
   * LevelInfo = {
   * "levels" :[{time :100, isUnlock : true} , ... ]  
   * 
   *  * }
   * 
   */

  setLevelInfoInLS(){


    if (!cc.sys.localStorage.getItem("LevelInfo")) {
      cc.sys.localStorage.setItem("LevelInfo", JSON.stringify({}));
    }

    let levelInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
    
    let totalLevels = GameManager.getInstance().getLevelInfo().length;
        let levelObj = {time :500, isUnlock : false}
       if(!levelInfo.level) {
        let levelObjectArray =[];
        for(let i = 0; i< totalLevels; i++){
          levelObjectArray[i] = Object.assign({id: i}, levelObj);
        }
         levelObjectArray[0].isUnlock = true;
         console.log(levelObjectArray[0]===levelObjectArray[1]);
         levelInfo["level"] = JSON.stringify(levelObjectArray); 
       }else{

        // New Level added in the json file
         let levelArray = JSON.parse(levelInfo.level);   
         if(levelArray.length < totalLevels){
          let difference = GameManager.getInstance().getLevelInfo().filter(item => ! levelArray.some(data => data.id == item.id));
          let timeArray = [];
          for(let i =0; i< difference.length; i++){
           timeArray[i] = Object.assign({id :difference[i].id }, levelObj);
          }
          // console.log("time ArraY", timeArray);
          levelArray.push(...timeArray);
          // console.log("time ArraY", levelArray);
          
        }else{
          // OLD Level removed from the json file
          let difference = levelArray.filter(item => ! GameManager.getInstance().getLevelInfo().some(data => data.id == item.id));
          // console.log("difference", difference);
          for(let i = 0; i< difference.length; i++){
            let index = levelArray.findIndex(item => item.id == difference[i].id);
            // console.log("index", index);
            if(index !=-1){
               levelArray.splice(index, 1);
            }
           }
         }
          // console.log("level Daata", levelArray);
          levelArray[0].isUnlock = true;
          levelInfo["level"] = JSON.stringify(levelArray);
      }
        cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(levelInfo));
  }


  onShare(){
    if(cc.sys.isBrowser){
      return;
    }
    SoundManager.getInstance().playEffect(this.buttonPressed, false);
    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shareApp", "(Ljava/lang/String;)V", `Hey I have been playing this amazing game, let's connect there. ${GAME_LINK.URL}`);

  }

  onMoreGames(){
    SoundManager.getInstance().playEffect(this.buttonPressed, false);
    cc.sys.openURL(GAME_LINK.URL);
  }


  showPrivacyPolicy(){
    // this.playLoader();
    SoundManager.getInstance().playEffect(this.buttonPressed, false);
    // this.moreInfo.active = false;
    this.privacyPolicy.active = true;
    // console.log("show privact plicty");

  }

  enabledMoreGamesButton(isActive){
    // this.moreInfo.getChildByName("Background").getChildByName("buttonLayout").getChildByName("moreGames").active = isActive;
    this.bottomBar.getChildByName("moreGames").active = isActive;
  }


  showFutureDetailsScreen(){
    this.futureDetails.active = true;
  }


  openSettings(){
    if(this.settings.active){
      return;
    }
    this.isforSetting = true;
    this.gameScreen == GAME_SCREEN.LEVEL_SELECTION && GameManager.getInstance().popScene();
    this.changeSceneVisiblity(this.gameScreen, false);
    this.gameScreen = GAME_SCREEN.SETTINGS;
    GameManager.getInstance().pushScene(GAME_SCREEN.SETTINGS);
    this.settings.active = true;
    this.hudLayer.zIndex = 8;
    // console.log(GameManager.getInstance().screen);
  }

  onTermsAccept(){
    this.terms.active = false;
    this.isAfterTerms = true;
    cc.sys.localStorage.setItem("hasTermAccepted", true);
  }

  startImageLoading(){
    let levels = GameManager.getInstance().getLevelInfo();
    // console.log("eleves", )
    if(this.letloadCount == levels.length){
      return;
    }else{
      GameManager.getInstance()
      .loadLevelImages(this.letloadCount).then(()=>{
        this.letloadCount++;
        this.startImageLoading();
      }).catch(()=>{
        console.log("error while loading data");
      })
    }
    
    
  }


  onRewardCollected(){
    if(!this.isAfterTerms){
      this.showLevelSelection();
    }
   
  }


openTermAndConditions(){
  this.privacyPolicy.active = true;
  this.privacyPolicy.getComponent("policy").setTerm(this.loader); 
}

openPrivacyPolicy(){
 
  this.privacyPolicy.active = true;
  this.privacyPolicy.getComponent("policy").setPrivacy(this.loader);
 
  
}

showLastSecondsPopUp(){

  // console.log("inside this we are  not going anywhere", cc.sys.localStorage.getItem("lastTenSeconds"));
  this.lastTenSeconds.active = true;
  // if(!cc.sys.localStorage.getItem("lastTenSeconds")){
   
  //   cc.sys.localStorage.setItem("lastTenSeconds", true);
    
  // }
 
}


hideLastSecondsPopUp(){
  // console.log("inside this last seconds ere are here ");
  this.lastTenSeconds.active = false;
}



}
