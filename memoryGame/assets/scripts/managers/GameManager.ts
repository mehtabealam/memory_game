import { GAME_MODE } from "../helper/constants";



 export class GameManager{
    private static  _instance = null;
    private _gameConfig = null;
    private _levelsData = null;
    private _levelImages = null;
    private _currentSelectLanguage = "EN"; 
    private _languageData = null;
    private _selectedMode = GAME_MODE.PRACTICE;
    private _currentLevel = 0;

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
                        // console.log("data loadded", target._gameConfig);
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
                        // console.log("data loadded", target._levelsData);
                        resolve(target._levelsData);
                    }
                })
            }
        });
    }


    loadLanaguge(){
        return new Promise((resolve, reject) => {
            if (this._languageData) {
                resolve(this._languageData);
            } else {
                cc.loader.loadResDir("Languages" , cc.JsonAsset, (err: Error, data: any) => {
                    if (err) {
                        reject(err);
                        cc.error("langauge data error :" + err);
                    }else{
                        this._languageData = data;
                        // console.log("langauge data", this._languageData);
                    }
                    resolve(data);
                });
            }
        });
    }

    // data is in form  ,this._levelImages = { practice {level [images]}}
    loadLevelImages(mode, levelNo): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this._levelImages && this._levelImages.mode && this._levelImages.mode.level[levelNo]) {
                resolve(this._levelImages[mode].level[levelNo]);
            } else {
                cc.loader.loadResDir(`Levels/Images/${mode}/LEVEL${levelNo + 1}` , cc.SpriteFrame, (err: Error, data: any) => {
                    if (err) {
                        reject(err);
                        cc.error("loadLevelImages :" + err);
                    }else{
                        if(!this._levelImages){
                            this._levelImages = {};
                        }
                        if(!this._levelImages[mode]){
                            this._levelImages[mode] = {};
                            this._levelImages[mode].level = [];
                        }
                        this._levelImages[mode].level[levelNo] = data;
                        
                        // console.log("level images", this._levelImages, data);
                    }
                    resolve(this._levelImages[mode].level[levelNo]);
                });
            }
        });
    }

    getSpriteFrame(mode, levelNo, name) {
        if(this._levelImages){
            let images = this._levelImages[mode].level[levelNo];
            // console.log("images",images );
            const spriteFrame = images.find(item => item.name == name);
            // console.log("spriteFrames",spriteFrame, name );
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

    getString(key:string): string {
        if(this._languageData){
            let language = this._languageData.find(item => item.name == this._currentSelectLanguage);
            // console.log("key", key, language);
            return language.json[key];
        }else{
            return "";
        }
    }

    changeCurrentLanguage(){
       
        this._currentSelectLanguage = cc.sys.localStorage.getItem("Language");
        console.log("change current Language", this._currentSelectLanguage);

    }

    setGameMode(mode){
        this._selectedMode  = mode;
    }
    
    getSelectedMode(){
        return  this._selectedMode;
    }

    setCurrentLevel(level){
     this._currentLevel = level;
    }

    getCurrentLevel(){
        return this._currentLevel;
    }
}