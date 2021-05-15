import { GAME_SCREEN } from "../helper/constants";
import SoundManager from "../managers/SoundManager";



const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    private delegate;


    setDelegate (delegate) {
        console.log("delegate", delegate);
        this.delegate = delegate;
    }

    onBack(){
        this.delegate.onBack();
    }


    volume(){
        this.delegate.updateVolume();
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




}
