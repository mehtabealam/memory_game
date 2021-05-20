

import {LANGUAGES} from "../helper/constants"
import { GameManager } from "../managers/GameManager";

const {ccclass, property} = cc._decorator;
@ccclass
export default class LangueChanger extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    onLanguageChange(Event : Event, selected){
        console.log("slected languaue", selected, LANGUAGES[selected], LANGUAGES[selected]);
        cc.sys.localStorage.setItem("Language", LANGUAGES[selected]);
        GameManager.getInstance().changeCurrentLanguage();
        cc.game.emit("onLanguageChanged");
        this.node.active = false;
      }

    // update (dt) {}
}
