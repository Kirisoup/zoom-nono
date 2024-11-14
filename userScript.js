// ==UserScript==
// @name        zoom nono
// @namespace   Violentmonkey Scripts
// @include     *
// @grant       none
// @noframes
// @version     0.1.1
// @author      kirisoup
// @description disable input form auto-zoom feature on iOS
// ==/UserScript==

check();

const obs = new MutationObserver(check);
obs.observe(document.head, { childList: true });

function check() {
    (document.querySelectorAll('meta[name="viewport"]') || 
    [document.head.appendChild(Object.assign(
        document.createElement("meta"), 
        { name: "viewport" }
    ))]).forEach(vp => {
        if (!vp.content.includes('user-scalable=no')) vp.content = vp.content ? 
            `${vp.content}, user-scalable=no` : 
            'user-scalable=no';
    });
}
