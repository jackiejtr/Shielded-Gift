// ==UserScript==
// @name         屏蔽直播礼物特效
// @version      1.1
// @description  自动屏蔽部分直播平台礼物特效，具体看 README
// @author       LisonFan
// @match        *://*.douyu.com/*
// @match        *://*.panda.tv/*
// @match        *://*.zhanqi.tv/*
// @match        *://cc.163.com/*
// @grant        none
// @namespace	 https://lisonfan.com
// ==/UserScript==

(function(){
    'use strict';
    document.onreadystatechange = subSomething;
    var hostName = location.href;
    var pandaReg = /panda.tv/;
    var douyuReg = /douyu.com/;
    var zhanqiReg = /zhanqi.tv/;
    var ccReg = /cc.163.com/;
    
    // 启用 网易CC 的 HTML5 播放器
    if (hostName.search(ccReg) > 0) {
        var ccPlayerLocalStorage = localStorage.getItem("cc-player");
        if (!ccPlayerLocalStorage || ccPlayerLocalStorage != "html5") {
            localStorage.setItem("cc-player", "html5");
            window.location.reload();
        }
    }
    
    function subSomething() {
        if (document.readyState == 'complete'){
            if (hostName.search(douyuReg) > 0) {
                document.getElementById("shie-switch").click(); // 屏蔽所有礼物特效
            } else if (hostName.search(pandaReg) > 0) {
                document.getElementById("gift-forbid-option-forbid_chat_gift").click(); // 屏蔽聊天框横幅
                document.getElementById("gift-forbid-option-forbid_flash_gift").click(); // 屏蔽播放器礼物滚动
                document.getElementById("gift-forbid-option-forbid_chat_notice").click(); // 屏蔽聊天框消息通知
            } else if (hostName.search(zhanqiReg) > 0) {
                document.getElementById("js-gift-shield").click(); // 屏蔽小礼物的显示
            } else if (hostName.search(ccReg) > 0) {
                document.querySelector("#effectSwitch > div > div:nth-child(1) > ul > li:nth-child(2) > i").click(); // 屏蔽视频区礼物跑马灯
                document.querySelector("#effectSwitch > div > div:nth-child(1) > ul > li:nth-child(3) > i").click(); // 屏蔽公屏区横幅特效
            }
        }
    }
})();
