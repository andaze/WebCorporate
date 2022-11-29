import 'tw-elements';
import * as kvMain from './top.js';
import * as sendForm from './sendform.js';
import * as swiperScript from './swiper.js';
import * as youtuberScript from './youtube.js';
import * as videorScript from './video.js';
import * as downloadScript from './multiDownload.js';

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
        if (document.querySelector(".professionalSwiper")) {
            swiper.createProfessionalSwiper();
        }
        if (document.querySelector(".solutionSwiper")) {
            swiper.createSolutionSwiper();
        }
        if (document.querySelector(".youtubeSwiper")) {
            swiper.createYoutubeSwiper();
        }
    }

    if (document.getElementById("youtubeList")) {
        const youtube = await new youtuberScript.handleYoutube();
    }
    if (document.getElementById('random_video')) {
        const video = await videorScript.handleVideo();
    }

    if (typeof friconix_update === "function") {
        // https://friconix.com/start/#display-icons
        friconix_update();
    }

    let surround;
    let sketch

    if (document.querySelector('#webgl')) {

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

    if (document.querySelector('#download-button')) {
        const multi_download = await downloadScript.download("https://andaze.com/paas-no-susume/#download");
    }

}
