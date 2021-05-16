import { GAME_SCREEN, GAME_MODE } from "../helper/constants";

 export class GameManager{
    private static  _instance = null;
    private _gameConfig = null;
    private _levelsData = null;
    private _levelImages = null;
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


    public loadLevelImages(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this._levelImages) {
                resolve(this._levelImages);
            } else {
                cc.loader.loadResDir("Levels/images" , cc.SpriteFrame, (err: Error, data: any) => {
                    if (err) {
                        reject(err);
                        cc.error("loadLevelImages :" + err);
                    }else{
                        this._levelImages = data;
                        console.log("level images", this._levelImages);
                    }
                    resolve(data);
                });
            }
        });
    }

    getSpriteFrame(name) {
        if(this._levelImages){
            const spriteFrame = this._levelImages.find(item => item.name == name);
            console.log("spriteFrames",spriteFrame, name );
            return spriteFrame;
        }
        

    }


    getModesInfo () {
        if(this._gameConfig){
            return this._gameConfig["gameMode"];
        }

    }

    getModeInfo (modeName) {
        if(this._gameConfig){
            return this._gameConfig["gameMode"].find(mode => mode.key == modeName);
        }

    }

    getLevelInfo(levelMode : string){
        if(this._levelsData){
            return this._levelsData[levelMode]["levels"];
        }
    }

    getLevelData(levelNo: number, levelMode : string){
        if(this._levelsData){
            return this._levelsData[levelMode]["levels"][levelNo];
        }

    }

    isImagesLoaded () :boolean {
        return this._levelsData? true : false;
    }

}