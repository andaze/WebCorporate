import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupHtmlLangPlugin from '@mashvp/swup-html-lang-plugin';
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupMorphPlugin from 'swup-morph-plugin';
import * as kvMain from './top.js';
import * as kvSub from './top-sub.js';

const swup = new Swup({
    plugins: [
        new SwupBodyClassPlugin(),
        new SwupHeadPlugin(),
        new SwupHtmlLangPlugin(),
        new SwupScrollPlugin({
            doScrollingRightAway: true,
            animateScroll: true
        }),
        new SwupMorphPlugin({
            containers: [
                '#nav-footer',
                '#header_nav',
            ]
        }),
    ]
});

window.is_bottom = false;
if ((location.pathname != '/WebCorporate/ja/') | (location.pathname != '/WebCorporate/en/')) {
    is_bottom = !is_bottom
}

init();

async function init() {
    if (document.querySelector('#webgl')) {
        const kv_main = await kvMain.kv_main();
        const kv_sub  = await kvSub.kv_sub();
    } else {
        const loading_background = document.getElementById("loading");
        // ロード画面を非表示
        loading_background.style.opacity = 0;
        loading_background.style.visibility = "hidden";
    }
}

swup.on('contentReplaced', init);
