
import {GameManager} from "../managers/GameManager"
import { GAME_SCREEN, GAME_MODE } from "../helper/constants";
import SoundManager from "../managers/SoundManager";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Home extends cc.Component {
    gameScreen : GAME_SCREEN = GAME_SCREEN.MODE_SELECTION;
    hudLayer : cc.Node;
    gameMode : string = ""; 
    opitonLayer : cc.Node;
    @property(cc.Prefab)
    gameModeBtn : cc.Prefab = null;

    @property(cc.Layout)
    modeLayout : cc.Layout = null;

    @property(cc.Prefab)
    options : cc.Prefab = null;

    @property(cc.Prefab)
    hud : cc.Prefab = null;

    @property(cc.Node)
    howToPlayPopUp : cc.Node = null;


    
    @property(cc.Node)
    modeSelectionNode : cc.Node = null;

    @property(cc.Node)
    levelSelectionNode : cc.Node = null;

    @property(cc.Node)
    gameplayNode : cc.Node = null;


    @property(cc.Layout)
    scrollViewLayout : cc.Layout = null;

    @property(cc.Prefab)
    levelSelectionButton : cc.Prefab = null;


    @property(cc.AudioClip)
    musicClip : cc.AudioClip = null;

    onLoad () {
        GameManager.getInstance().loadGameConfig().then((data)=>{
            console.log("data loded successfully", data);
            GameManager.getInstance().loadLevels().then((data) =>{
                this.setupUI();
            }).catch((error)=>{
                console.log("erorr", error);
            });
        }).catch((error)=>{
            console.log("error while loading resources");
        });


        // load images and set button active 

        GameManager.getInstance().loadLevelImages().then((data) =>{
            console.log("images loaded");
            // this.setButtonsActive();
        }).catch((error)=>{
            console.log("erorr", error);
        });


    }
    start() {
        SoundManager.getInstance().init(this.musicClip);
        if(!cc.sys.localStorage.getItem("Sound")){
            cc.sys.localStorage.setItem("Sound", false);
        }else{
            if(JSON.parse(cc.sys.localStorage.getItem("Sound"))){
                SoundManager.getInstance().playMusic(true);
            }
        }
      
    }

    setupUI(){
        this.setupModes();
        this.setOptions();
        this.setHud();
        this.modeSelectionNode.zIndex = 5;
    }

    setupModes(){
        let spaceingY = [ 250, 150, 100, 50, 20];
        let modes = GameManager.getInstance().getModesInfo();
        this.modeLayout.spacingY = spaceingY[modes.length-1];
        for(let mode of modes){
            let button = cc.instantiate(this.gameModeBtn);
            button.getChildByName("title").getComponent(cc.Label).string = mode.title;
            let clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; 
            clickEventHandler.component = "home";
            clickEventHandler.handler = "onModeSelect";
            clickEventHandler.customEventData =  mode.key;;
            button.getComponent(cc.Button).clickEvents.push(clickEventHandler);
            this.modeLayout.node.addChild(button);
        }
        console.log("background", this.modeLayout);
    }

    setOptions(){
        this.opitonLayer = cc.instantiate(this.options);
        this.opitonLayer.getComponent("options").setUpUI(this.gameScreen, this.gameMode);
        this.node.addChild(this.opitonLayer);
        this.opitonLayer.zIndex = 1;
    }


    setHud(){
        this.hudLayer = cc.instantiate(this.hud);
        this.node.addChild(this.hudLayer);
        this.hudLayer.getComponent("hud").setDelegate(this);
        this.hudLayer.zIndex = 1;
        this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
    }

    onModeSelect(event : Event, mode: string) {
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


    setLevelSelectionScreen(mode:string){
        let levels = GameManager.getInstance().getLevelInfo(mode);
        this.scrollViewLayout.node.removeAllChildren();
        console.log("levels ", levels);
        for(let i =0; i<levels.length ; i++){
            let button = cc.instantiate(this.levelSelectionButton);
            button.getChildByName("Background").getChildByName("title")
            .getComponent(cc.Label).string = `LEVEL ${i+1}`;
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
        if(this.gameScreen == GAME_SCREEN.LEVEL_SELECTION){
            this.levelSelectionNode.active = false;
            this.modeSelectionNode.active = true;
            this.gameScreen = GAME_SCREEN.MODE_SELECTION; 
        }else{
            this.levelSelectionNode.active = true;
            this.modeSelectionNode.active = false;
            this.gameplayNode.active = false;
            this.gameScreen = GAME_SCREEN.MODE_SELECTION; 
        }
        this.upadteHuds();
    }

    upadteHuds(){
        this.opitonLayer.getComponent("options").setUpUI(this.gameScreen, this.gameMode);
        this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
    }

    onLevelSelect(event : Event, level : string){
        this.gameScreen = GAME_SCREEN.GAME_PLAY;
        this.levelSelectionNode.active = false;
        this.modeSelectionNode.active = false;
        this.gameplayNode.active = true;
        this.gameplayNode.getComponent("gamePlay").setUpUI(parseInt(level), this.gameMode, this.opitonLayer);
        this.upadteHuds();
    }

    

    // update (dt) {}
}
