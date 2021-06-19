// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import { GameManager } from "../managers/GameManager";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Loading extends cc.Component {


   start(){
    if(!cc.sys.localStorage.getItem("hasLaunchedBeforev2")){
        cc.sys.localStorage.clear();
          cc.sys.localStorage.setItem("hasLaunchedBeforev2", true)
      }
  
  
      if (!cc.sys.localStorage.getItem("Language")) {
        cc.sys.localStorage.setItem("Language", "ES");
      }  
  
      if(!cc.sys.localStorage.getItem("hasTermAccepted")){
        cc.sys.localStorage.setItem("hasTermAccepted", false);
      }
  
  
      if(!cc.sys.localStorage.getItem("lastPlayedLevel")){
        cc.sys.localStorage.setItem("lastPlayedLevel", 0);
      }
  
  
      if(!cc.sys.localStorage.getItem("hint")){
        cc.sys.localStorage.setItem("hint", 3);
      }
      cc.debug.setDisplayStats(false);
     this.startLoading();
   }

   startLoading(){
    GameManager.getInstance()
    .loadGameConfig()
    .then((data) => {
      console.log("data loded successfully", data);
      GameManager.getInstance()
        .loadLevels()
        .then((data) => {
          GameManager.getInstance().loadLanaguge().then((data)=>{
            console.log("lanaguga data loaded succesfully");
            GameManager.getInstance().changeCurrentLanguage();
            GameManager.getInstance().loadLevelImages(0).then(()=>{
              console.log("level image loaded succesfully");
                cc.director.loadScene('home');
            })
          }).catch((error)=>{
            console.log("error", error);
          })
         
        })
        .catch((error) => {
          console.log("erorr", error);
        });
    })
    .catch((error) => {
      console.log("error while loading resources");
    });


   }
}
