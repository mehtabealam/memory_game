import { GameManager } from "../managers/GameManager";
import { GAME_SCREEN, PLACEMENT_IDS } from "../helper/constants";
import SoundManager from "../managers/SoundManager";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Home extends cc.Component {
  gameScreen: GAME_SCREEN = GAME_SCREEN.MODE_SELECTION;
  hudLayer: cc.Node;
  gameMode: string = "";
  opitonLayer: cc.Node;
  @property(cc.Prefab)
  gameModeBtn: cc.Prefab = null;

  @property(cc.Layout)
  modeLayout: cc.Layout = null;

  @property(cc.Prefab)
  options: cc.Prefab = null;

  @property(cc.Prefab)
  hud: cc.Prefab = null;

  @property(cc.Node)
  howToPlayPopUp: cc.Node = null;

  @property(cc.Node)
  languagePopUp: cc.Node = null;

  @property(cc.Node)
  modeSelectionNode: cc.Node = null;

  @property(cc.Node)
  levelSelectionNode: cc.Node = null;

  @property(cc.Node)
  gameplayNode: cc.Node = null;

  @property(cc.Layout)
  scrollViewLayout: cc.Layout = null;

  @property(cc.Prefab)
  levelSelectionButton: cc.Prefab = null;

  @property(cc.AudioClip)
  musicClip: cc.AudioClip = null;

  onLoad() {
       GameManager.getInstance().setAdIds(cc.sys.platform === cc.sys.IPHONE 
        || cc.sys.platform === cc.sys.IPAD ?  PLACEMENT_IDS.IOS : PLACEMENT_IDS.ANDROID);
    if (!cc.sys.localStorage.getItem("Language")) {
      cc.sys.localStorage.setItem("Language", "ES");
    }  
  }
  start() {

    var animationClips =  this.gameplayNode.getComponent(cc.Animation)
    console.log("animation clips",animationClips );
    animationClips.on('finished', this.onLevelAnimationCompleted, this);

    GameManager.getInstance()
    .loadGameConfig()
    .then((data) => {
      console.log("data loded successfully", data);
      GameManager.getInstance()
        .loadLevels()
        .then((data) => {
          GameManager.getInstance().loadLanaguge().then((data)=>{
            GameManager.getInstance().changeCurrentLanguage();
            cc.game.emit("onLanguageChanged");
            this.setupUI();
            this.setLevelInfoInLS();
          }).catch((error)=>{
            console.log("error");
          })
         
        })
        .catch((error) => {
          console.log("erorr", error);
        });
    })
    .catch((error) => {
      console.log("error while loading resources");
    });



    GameManager.getInstance().showBannerAd();

    
    this.languagePopUp.zIndex = 6;
    cc.debug.setDisplayStats(false);
      SoundManager.getInstance().init(this.musicClip);
    if (!cc.sys.localStorage.getItem("Sound")) {
      cc.sys.localStorage.setItem("Sound", false);
    } else {
      if (JSON.parse(cc.sys.localStorage.getItem("Sound"))) {
        SoundManager.getInstance().playMusic(true);
      }
    }

  }

  setupUI() {

    this.setupModes();
    this.setOptions();
    this.setHud();
    this.modeSelectionNode.zIndex = 5;
    this.gameplayNode.zIndex = 5;
    this.levelSelectionNode.zIndex =5;
  }

  onAnimationEnd (){
    console.log("animation ended");
  }

  setupModes() {
    let spaceingY = [150, 100, 50, 20, 10];
    let modes = GameManager.getInstance().getModesInfo();
    this.modeLayout.spacingY = spaceingY[modes.length - 1];
    for (let mode of modes) {
      let button = cc.instantiate(this.gameModeBtn);
      console.log("button has been created");
      button.getChildByName("title").getComponent(cc.Label).string = mode.title;
      button.getChildByName("title").getComponent("localiser").key = mode.key;
      let clickEventHandler = new cc.Component.EventHandler();
      clickEventHandler.target = this.node;
      clickEventHandler.component = "home";
      clickEventHandler.handler = "onModeSelect";
      clickEventHandler.customEventData = mode.key;
      button.getComponent(cc.Button).clickEvents.push(clickEventHandler);
      this.modeLayout.node.addChild(button);
    }
  }

  setOptions() {
    this.opitonLayer = cc.instantiate(this.options);
    this.opitonLayer
    .getComponent("options").setDelegate(this);
    this.opitonLayer
      .getComponent("options")
      .setUpUI(this.gameScreen, this.gameMode);
    this.node.addChild(this.opitonLayer);
    this.opitonLayer.zIndex = 1;
  }

  setHud() {
    this.hudLayer = cc.instantiate(this.hud);
    this.node.addChild(this.hudLayer);
    this.hudLayer.getComponent("hud").setDelegate(this);
    this.hudLayer.zIndex = 1;
    this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
  }

  onModeSelect(event: Event, mode: string) {
    GameManager.getInstance().setGameMode(mode);
    console.log("onMode selectons", event, mode);
    this.modeSelectionNode.active = false;
  
    this.gameMode = mode;
    this.showLevelSelection();
  }



  showLevelSelection(){
    this.levelSelectionNode.active = true;  
    this.setLevelSelectionScreen(this.gameMode);
    this.gameScreen = GAME_SCREEN.LEVEL_SELECTION;
    this.upadteHuds();
    this.levelSelectionNode.getComponent(cc.Animation).play("moveIn");
 
  }

  //button callbacks:
  showHowToPlayPopUp() {
    this.howToPlayPopUp.active = true;
  }

  removeHowToPlayPopUp() {
    this.howToPlayPopUp.active = false;
  }

  setLevelSelectionScreen(mode: string) {
    let levels = GameManager.getInstance().getLevelInfo(mode);
    this.scrollViewLayout.node.removeAllChildren();
    console.log("levels ", levels);

    let levelsInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
    let levelsInfoForMode = JSON.parse(levelsInfo[mode]);
    console.log("levelSInfp for Mode",levelsInfoForMode );
    for (let i = 0; i < levels.length; i++) {
      let button = cc.instantiate(this.levelSelectionButton);
      button.getChildByName("Background").getChildByName("title")
      .getComponent(cc.Label).getComponent("localiser").replaceValue(`${i+1}`);
      let clickEventHandler = new cc.Component.EventHandler();
      clickEventHandler.target = this.node;
      clickEventHandler.component = "home";
      clickEventHandler.handler = "onLevelSelect";
      clickEventHandler.customEventData = i.toString();
      button.getComponent(cc.Button).clickEvents.push(clickEventHandler);
      button.getComponent(cc.Button).interactable = levelsInfoForMode[i].isUnlock;
      this.scrollViewLayout.node.addChild(button);
    }
  }

  onBack() {
    if (this.gameScreen == GAME_SCREEN.LEVEL_SELECTION) {
      this.levelSelectionNode.getComponent(cc.Animation).play("moveOut"); 
      this.modeSelectionNode.active = true;
      this.gameScreen = GAME_SCREEN.MODE_SELECTION;
    } else {
      this.gameScreen = GAME_SCREEN.LEVEL_SELECTION;
      this.gameplayNode.getComponent(cc.Animation).play("moveOut"); 
      this.levelSelectionNode.active = true;
      this.setLevelSelectionScreen(this.gameMode);
      this.modeSelectionNode.active = false;
      // this.gameplayNode.active = false;
      
    }
    this.upadteHuds();
  }

  upadteHuds() {
    this.opitonLayer
      .getComponent("options")
      .setUpUI(this.gameScreen, this.gameMode);
    this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
  }

  onLevelSelect(event: Event, level: string) {
    GameManager.getInstance().setCurrentLevel(parseInt(level));
    this.gameScreen = GAME_SCREEN.GAME_PLAY;
    this.levelSelectionNode.active = false;
    this.modeSelectionNode.active = false
    this.gameplayNode.active = true;

    let anim =  this.gameplayNode.getComponent(cc.Animation).play("gameMoveIn");
    this.upadteHuds();
  }


  onLevelAnimationCompleted(){
    if(this.gameScreen == GAME_SCREEN.GAME_PLAY){
      this.gameplayNode
      .getComponent("gamePlay")
      .setUpUI( GameManager.getInstance().getCurrentLevel(), this.gameMode, this.opitonLayer);
    }
  }

  setLevelInfoInLS(){



  /**
   * 
   * 
   * data is stored in this mannor in the local storage
   * LevelInfo = {
   * "practice" :[{time :100, isUnlock : true} , ... ]  
   * "normal" :[{time :100, isUnlock : true} , ... ]  
   *  * }
   * 
   */
    if (!cc.sys.localStorage.getItem("LevelInfo")) {
      cc.sys.localStorage.setItem("LevelInfo", JSON.stringify({}));
    }

    let levelInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
    let modes = GameManager.getInstance().getModesInfo();
    for (let mode of modes) {
        let totalLevels = GameManager.getInstance().getLevelInfo(mode.key).length;
       if(!levelInfo[mode.key]) {
         let levelObjectArray = Array(totalLevels).fill(  {...{time : 100, isUnlock : false }} );
         levelObjectArray[0].isUnlock = true;
         console.log("levelObjectArray", levelObjectArray, levelObjectArray[0]);
        levelInfo[mode.key] = JSON.stringify(levelObjectArray); 
       }else{
         let levelArray = JSON.parse(levelInfo[mode.key]);
         let diff = totalLevels > levelArray.length ? totalLevels - levelArray.length : levelArray.length - totalLevels ;
         let timeArray = Array(diff).fill(  {...{time : 100, isUnlock : false }} );
         levelArray = levelArray.concat(timeArray);
         levelArray[0].isUnlock = true;

         console.log("levelObjectArray", levelArray, timeArray);
         levelInfo[mode.key] = JSON.stringify(levelArray);
       }
    }
    console.log("levelObjectArray", levelInfo);
    cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(levelInfo));
  }

  openLocalisationPopUp(){
     this.languagePopUp.active = true;
  }

 

  // update (dt) {}
}
