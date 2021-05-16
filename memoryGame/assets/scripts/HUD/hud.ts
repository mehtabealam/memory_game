import { GAME_SCREEN } from "../helper/constants";
import SoundManager from "../managers/SoundManager";



const {ccclass, property} = cc._decorator;

@ccclass
export default class HUD extends cc.Component {

    @property(cc.SpriteFrame)
    volumeUp : cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    volumeDown : cc.SpriteFrame = null;

    @property(cc.Button)
    volume: cc.Button = null;

    private delegate;


    start(){
        this.updateVolumeIcon();
    }
    setDelegate (delegate) {
        console.log("delegate", delegate);
        this.delegate = delegate;
    }

    onBack(){
        this.delegate.onBack();
    }


    changeVolume(event : Event){
        if(JSON.parse(cc.sys.localStorage.getItem("Sound"))){
            SoundManager.getInstance().stopMusic();
            cc.sys.localStorage.setItem("Sound", false);      
        }else{
             SoundManager.getInstance().playMusic(true);
             cc.sys.localStorage.setItem("Sound", true)
             
        }

        this.updateVolumeIcon();
        
    }

    setVisiblity(gameScreen : GAME_SCREEN){
        switch(gameScreen){
            case GAME_SCREEN.MODE_SELECTION:
                this.node.active = false;
                break;
            case GAME_SCREEN.LEVEL_SELECTION:
            case GAME_SCREEN.GAME_PLAY:
                this.node.active = true;
                break;
            default:
                console.log("option error in setVisibility");    
        }
    }

    updateVolumeIcon(){
        let sprite = this.volume.node.getChildByName("Background").getComponent(cc.Sprite);
        sprite.spriteFrame = JSON.parse(cc.sys.localStorage.getItem("Sound")) ? this.volumeUp: this.volumeDown;
    }



}
