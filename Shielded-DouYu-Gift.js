// ==UserScript==
// @icon         https://www.douyu.com/favicon.ico
// @name         屏蔽斗鱼礼物特效
// @version      0.7
// @description  自动屏蔽斗鱼礼物特效
// @author       LisonFan
// @match        https://*.douyu.com/*
// @grant        none
// @namespace	 https://lisonfan.com
// ==/UserScript==

(function(){
    'use strict';
    document.onreadystatechange = subSomething;
    function subSomething() {
        if (document.readyState == 'complete'){
            document.getElementById("shieSwitch").click();
        }
    }
})();