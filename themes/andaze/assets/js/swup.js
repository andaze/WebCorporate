import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupHtmlLangPlugin from '@mashvp/swup-html-lang-plugin';
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupMorphPlugin from 'swup-morph-plugin';
import * as kvMain from './top.js';
import * as sendForm from './sendform.js';
import * as swiperScript from './swiper.js';
import * as youtuberScript from './youtube.js';
import * as videorScript from './video.js';

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
    ],
    linkSelector:
        'a[href^="' + window.location.origin +'"]:not([data-no-swup]):not([target="_blank"]), ' +
        'a[href^="/"]:not([data-no-swup]):not([target="_blank"]), ' +
        'a[href^="#"]:not([data-no-swup]):not([target="_blank"])'
});



init();

async function init() {

    if (document.querySelector(".swiper")) {
        const swiper = await new swiperScript.SlideShow();
        if(document.querySelector(".newsSwiper")) {
            swiper.createNewsSwiper();
        }
        if(document.querySelector(".casestudySwiper")) {
            swiper.createCasestudySwiper();
        }
        if(document.querySelector(".sustainabilitySwiper")) {
            swiper.createSustainabilitySwiper();
        }
        if(document.querySelector(".professionalSwiper")) {
            swiper.createProfessionalSwiper();
        }
    }

    if (document.getElementById("youtube-video")) {
        const youtube = await youtuberScript.handleYoutube();
    }
    if (document.getElementById('random_video')) {
        const video = await videorScript.handleVideo();
    }

    if (typeof friconix_update === "function" ) {
        // https://friconix.com/start/#display-icons
        friconix_update();
    }

    let surround;
    let sketch

    if (document.querySelector('#webgl')){

        surround = await new kvMain.Surround();
        sketch = await new kvMain.Sketch();
        sketch.setImage();

        kvMain.loading_background.style.opacity = 1;

        if (!kvMain.first_visit) {

            window.setTimeout(() => {

                surround.callFunctions();

                kvMain.loading_background.style.opacity = 0;
                kvMain.loading_background.style.visibility = "invisible";

                sketch.callFunctions();
            }, 1000);
        } else {
            surround.callFunctions();
            sketch.callFunctions();
        }
    } else {
        surround = null;
        sketch = null;
    }
    
    if (document.querySelector('#privacy') && document.querySelector('#submitButton')) {
        document.querySelector('#privacy').addEventListener("click", () => {
            sendForm.btnEnableDisable();
        });
        document.querySelector('#submitButton').addEventListener("click", () => {
            sendForm.sendEmail();
        });
    }

    if (document.getElementById('youtube-video')) {
        const youtube = await youtuberScript.handleYoutube();
    }
    
}

swup.on('contentReplaced', init);
