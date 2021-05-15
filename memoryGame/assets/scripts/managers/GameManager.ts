import { GAME_SCREEN } from "../helper/constants";

 export class GameManager{
    private static  _instance = null;
    private _gameConfig = null;
    private _levelsData = null;
    static getInstance(){
        if(!GameManager._instance){
           GameManager. _instance = new GameManager();
        }
        return GameManager._instance;
    }


    loadGameConfig() {
        var target = this;
        return new Promise((resolve,reject)=> {
            if(target._gameConfig) {
                resolve(target._gameConfig);
            }else {
                cc.resources.load("GameMode/gameConfig", function(error, level) {
                    if(error){
                        console.log("error while loading json");
                        reject(error)
                    }else {
                        target._gameConfig        =   level["json"];
                        console.log("data loadded", target._gameConfig);
                        resolve(target._gameConfig);
                    }
                })
            }
        });
    }


    loadLevels (){
        var target = this;
        return new Promise((resolve,reject)=> {
            if(target._levelsData) {
                resolve(target._levelsData);
            }else {
                cc.resources.load("Levels/levels", function(error, level) {
                    if(error){
                        console.log("error while loading json");
                        reject(error)
                    }else {
                        target._levelsData        =   level["json"];
                        console.log("data loadded", target._levelsData);
                        resolve(target._levelsData);
                    }
                })
            }
        });
    }


    getModesInfo () {
        if(this._gameConfig){
            return this._gameConfig["gameMode"];
        }

    }

    getLevelInfo(levelMode : string){
        if(this._levelsData){
            return this._levelsData[levelMode]["levels"];
        }
    }

}