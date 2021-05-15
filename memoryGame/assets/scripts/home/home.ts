
import {GameManager} from "../managers/GameManager"
import { GAME_SCREEN } from "../helper/constants";
import SoundManager from "../managers/SoundManager";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Home extends cc.Component {
    gameScreen : GAME_SCREEN = GAME_SCREEN.MODE_SELECTION;
    hudLayer : cc.Node;
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

    }
    start() {
        if(!cc.sys.localStorage.getItem("Sound")){
            cc.sys.localStorage.setItem("Sound", false);
        }
        SoundManager.getInstance().init(this.musicClip);
    }

    setupUI(){
        this.setupModes();
        this.setOptions();
        this.setHud();
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
        this.opitonLayer.getComponent("options").setUpUI(this.gameScreen);
        this.node.addChild(this.opitonLayer);
    }


    setHud(){
        this.hudLayer = cc.instantiate(this.hud);
        this.node.addChild(this.hudLayer);
        this.hudLayer.getComponent("hud").setDelegate(this);
        this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
    }

    onModeSelect(event : Event, mode: string) {
        console.log("onMode selectons", event, mode);
        this.modeSelectionNode.active = false;
        this.levelSelectionNode.active = true;
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
            button.getChildByName("title").getComponent(cc.Label).string = `LEVEL ${i+1}`;
            let clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; 
            clickEventHandler.component = "home";
            clickEventHandler.handler = "callback";
            clickEventHandler.customEventData = `LEVEL${i+1}`;
            button.getComponent(cc.Button).clickEvents.push(clickEventHandler);
            this.scrollViewLayout.node.addChild(button);
        }
    }

    onBack() {
        this.levelSelectionNode.active = false;
        this.modeSelectionNode.active = true;
        this.gameScreen = GAME_SCREEN.MODE_SELECTION;
        this.upadteHuds();
    }

    upadteHuds(){
        this.opitonLayer.getComponent("options").setUpUI(this.gameScreen);
        this.hudLayer.getComponent("hud").setVisiblity(this.gameScreen);
    }

    updateVolume(){
        if(cc.sys.localStorage.getItem("Sound")){
            SoundManager.getInstance().stopMusic();
            cc.sys.localStorage.setItem("Sound", false);
        }else{
            SoundManager.getInstance().playMusic(true);
            cc.sys.localStorage.setItem("Sound", true)
        }
    }

    // update (dt) {}
}
