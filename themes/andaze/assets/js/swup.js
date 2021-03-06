import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupHtmlLangPlugin from '@mashvp/swup-html-lang-plugin';
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupMorphPlugin from 'swup-morph-plugin';
import * as kvMain from './top.js';
import * as kvSub from './top-sub.js';
import * as sendForm from './sendform.js';
import * as swiperScript from './swiper.js';

const swup = new Swup({
    plugins: [
        new SwupBodyClassPlugin(),
        new SwupHeadPlugin(),
        new SwupHtmlLangPlugin(),
        new SwupScrollPlugin({ // https://swup.js.org/plugins/scroll-plugin
            animateScroll: false,
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
if (!((location.pathname == '/WebCorporate/ja/') | (location.pathname == '/WebCorporate/en/'))) {
    is_bottom = !is_bottom
}

init();

async function init() {
    const swiper = await swiperScript.activeSwiper();

    if (typeof friconix_update === "function" ) {
        // https://friconix.com/start/#display-icons
        friconix_update();
    }
    if (document.querySelector('#webgl')) {
        const kv_main = await kvMain.kv_main();
        const kv_sub  = await kvSub.kv_sub();
    }
    if (document.querySelector('#privacy') && document.querySelector('#submitButton')) {
        document.querySelector('#privacy').addEventListener("click", () => {
            sendForm.btnEnableDisable();
        });
        document.querySelector('#submitButton').addEventListener("click", () => {
            sendForm.sendEmail();
        });
    }

    const header_image = document.getElementById('header_image');

    if (document.URL.match('/casestudy/case4/')) {
        header_image.style.objectPosition = "0% 40%";
    } else if (document.URL.match('/company/message/')) { 
        header_image.style.objectPosition = "right";
    }
    
}

swup.on('contentReplaced', init);
