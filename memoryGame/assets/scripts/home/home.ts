import { GameManager } from "../managers/GameManager";
import { GAME_SCREEN, GAME_MODE, LANGUAGES } from "../helper/constants";
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
    GameManager.getInstance()
      .loadGameConfig()
      .then((data) => {
        console.log("data loded successfully", data);
        GameManager.getInstance()
          .loadLevels()
          .then((data) => {
            GameManager.getInstance().loadLanaguge().then((data)=>{
              console.log("load langauge");
              this.setupUI();
              this.setLevelInfoInLS();
              cc.game.emit("onLanguageChanged");
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

    // load images and set button active

    GameManager.getInstance()
      .loadLevelImages()
      .then((data) => {
        console.log("images loaded");
        // this.setButtonsActive();
      })
      .catch((error) => {
        console.log("erorr", error);
      });
  }
  start() {

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
    console.log("onMode selectons", event, mode);
    this.modeSelectionNode.active = false;
    this.levelSelectionNode.active = true;
    this.gameMode = mode;
    this.setLevelSelectionScreen(mode);
    this.gameScreen = GAME_SCREEN.LEVEL_SELECTION;
    this.upadteHuds();
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
      this.scrollViewLayout.node.addChild(button);
    }
  }

  onBack() {
    if (this.gameScreen == GAME_SCREEN.LEVEL_SELECTION) {
      this.levelSelectionNode.active = false;
      this.modeSelectionNode.active = true;
      this.gameScreen = GAME_SCREEN.MODE_SELECTION;
    } else {
      this.levelSelectionNode.active = true;
      this.modeSelectionNode.active = false;
      this.gameplayNode.active = false;
      this.gameScreen = GAME_SCREEN.LEVEL_SELECTION;
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
    this.gameScreen = GAME_SCREEN.GAME_PLAY;
    this.levelSelectionNode.active = false;
    this.modeSelectionNode.active = false;
    this.gameplayNode.active = true;
    this.gameplayNode
      .getComponent("gamePlay")
      .setUpUI(parseInt(level), this.gameMode, this.opitonLayer);
    this.upadteHuds();
  }




  setLevelInfoInLS(){
    if (!cc.sys.localStorage.getItem("LevelInfo")) {
      cc.sys.localStorage.setItem("LevelInfo", JSON.stringify({}));
    }

    let levelInfo = JSON.parse(cc.sys.localStorage.getItem("LevelInfo"));
    // console.log("level Info");
    let modes = GameManager.getInstance().getModesInfo();
    for (let mode of modes) {
        let totalLevels = GameManager.getInstance().getLevelInfo(mode.key).length;
  
       if(!levelInfo[mode.key]) {
        console.log("time error",totalLevels);
         let timeArray = Array(totalLevels).fill(  {time : 100} );
        levelInfo[mode.key] = JSON.stringify(timeArray);
       }else{
         // check if new levels are added in game or removed ;
         // TODO : how to handle the situation where the level is removed from the middle
         let levelArray = JSON.parse(levelInfo[mode.key]);
         let diff = totalLevels > levelArray.length ? totalLevels - levelArray.length : levelArray.length - totalLevels ;
         let timeArray = Array(diff).fill({time : 100} );
         levelArray = levelArray.concat(timeArray);
         levelInfo[mode.key] = JSON.stringify(levelArray);
       }
    }
    cc.sys.localStorage.setItem("LevelInfo", JSON.stringify(levelInfo));

    // console.log("level Info");
  }

  openLocalisationPopUp(){
     this.languagePopUp.active = true;
  }

 

  // update (dt) {}
}
