// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


export const enum GAME_SCREEN {
    MODE_SELECTION = 1,
    LEVEL_SELECTION,
    GAME_PLAY
}


export const  GAME_MODE = {
     PRACTICE :"practice",
     NORMAL : "normal",
     MEDIUM : "medium",
     HARD : "hard"
}

export const enum END_POP_UP {
    NEW_RECORD = 1,
    CLEARD,
    FAILED
}

export const LANGUAGES = {
    ENGLISH : "EN",
    SPANISH : "ES"
}

export const  PLACEMENT_IDS = {
    ANDROID: {
        BANNER: "IMG_16_9_APP_INSTALL#1982508651779400_1982511068445825",
        INTERSTITIAL: 'I854006105330177_898749927522461',
        REWARDEDVIDEO: 'YOUR_PLACEMENT_ID'
    },
    IOS: {
        BANNER: "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
        INTERSTITIAL: 'IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID',
        REWARDEDVIDEO: 'YOUR_PLACEMENT_ID'
    }
};