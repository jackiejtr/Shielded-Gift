// ==UserScript==
// @name         屏蔽直播礼物特效
// @version      1.0.1
// @description  自动屏蔽斗鱼、熊猫、战旗礼物特效
// @author       LisonFan
// @match        *://*.douyu.com/*
// @match        *://*.panda.tv/*
// @match        *://*.zhanqi.tv/*
// @grant        none
// @namespace	 https://lisonfan.com
// ==/UserScript==

(function(){
    'use strict';
    document.onreadystatechange = subSomething;
    var hostName = document.domain;
    var pandaReg = /(panda.tv)/;
    var douyuReg = /(douyu.com)/;
    var zhanqiReg = /(zhanqi.tv)/;
    function subSomething() {
        if (document.readyState == 'complete'){
            if (douyuReg.test(hostName)) {
                document.getElementById("shie-switch").click(); // 屏蔽所有礼物特效
            } else if (pandaReg.test(hostName)) {
                document.getElementById("gift-forbid-option-forbid_chat_gift").click(); // 屏蔽聊天框横幅
                document.getElementById("gift-forbid-option-forbid_flash_gift").click(); // 屏蔽播放器礼物滚动
                document.getElementById("gift-forbid-option-forbid_chat_notice").click(); // 屏蔽聊天框消息通知
            } else if (zhanqiReg.test(hostName)) {
                document.getElementById("js-gift-shield").click(); // 屏蔽小礼物的显示
            }
        }
    }
})();