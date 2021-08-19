
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/HUD/hud');
require('./assets/scripts/HUD/options');
require('./assets/scripts/Localisation/LanguageChanger');
require('./assets/scripts/Localisation/localiser');
require('./assets/scripts/PrivacyPolicy/policy');
require('./assets/scripts/dailyRewards/dailyRewards');
require('./assets/scripts/gameplay/cards');
require('./assets/scripts/gameplay/gameEnd');
require('./assets/scripts/gameplay/gameFutureDetails');
require('./assets/scripts/gameplay/gamePlay');
require('./assets/scripts/gameplay/gameStart');
require('./assets/scripts/gameplay/tutorials');
require('./assets/scripts/helper/constants');
require('./assets/scripts/home/home');
require('./assets/scripts/laoding/Loading');
require('./assets/scripts/laoding/tempCodeRunnerFile');
require('./assets/scripts/level/levelUIManager');
require('./assets/scripts/managers/AdManager');
require('./assets/scripts/managers/FacebookAudiance');
require('./assets/scripts/managers/GameManager');
require('./assets/scripts/managers/LanguageManager');
require('./assets/scripts/managers/NetworkConfig');
require('./assets/scripts/managers/NetworkManager');
require('./assets/scripts/managers/SoundManager');
require('./assets/scripts/settings/settings');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();