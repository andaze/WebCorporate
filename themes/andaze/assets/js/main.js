import 'tw-elements';
import * as sendForm from './sendform.js';
import * as swiperScript from './swiper.js';
import * as youtuberScript from './youtube.js';
import * as videorScript from './video.js';

init();

async function init() {

    if (document.querySelector(".swiper")) {
        const swiper = await new swiperScript.SlideShow();
        if (document.querySelector(".newsSwiper")) {
            swiper.createNewsSwiper();
        }
        if (document.querySelector(".casestudySwiper")) {
            swiper.createCasestudySwiper();
        }
        if (document.querySelector(".sustainabilitySwiper")) {
            swiper.createSustainabilitySwiper();
        }
        if (document.querySelector(".solutionSwiper")) {
            swiper.createSolutionSwiper();
        }
        if (document.querySelector(".youtubeSwiper")) {
            swiper.createYoutubeSwiper();
        }
    }

    if (document.getElementById("youtubeList")) {
        const youtube = await youtuberScript.handleYoutube();
    }
    if (document.getElementById('random_video')) {
        const video = await videorScript.handleVideo();
    }

    if (typeof friconix_update === "function") {
        // https://friconix.com/start/#display-icons
        friconix_update();
    }


    if (document.querySelector('#privacy') && document.querySelector('#contact_form')) {
        document.querySelector('#privacy').addEventListener("click", () => {
            sendForm.btnEnableDisable();
        });
        document.querySelector('#contact_form').addEventListener("submit", (e) => {
            e.preventDefault();
            sendForm.sendEmail();
        });
    }

}
