import Swiper from 'swiper/bundle';

let target;
let targetPos;
let targetHeight;

export class SlideShow {
    constructor() {
        this.newsSwiper;
        this.casestudySwiper;
        this.sustainabilitySwiper;
        this.professionalSwiper;
        this.youtubeSwiper;
    }

    createSwiper(sectionName, autoplay=true, delayTime=2000, offset=500, withBar=false) {

        let bar;
        let speed;

        if(withBar) {
            bar = document.querySelector("." + sectionName + "Progressbar_in");
            speed = 5000;
        }

        let options = {
            spaceBetween: 30,
            on: {
                slideChangeTransitionStart: function () {
                    if(withBar) {
                        bar.style.transitionDuration = '0s',
                        bar.style.transform = 'scaleX(0)'
                    }
                },
                slideChangeTransitionEnd: function () {
                    if(withBar) {
                        bar.style.transitionDuration = speed + 'ms',
                        bar.style.transform = 'scaleX(1)'
                    }
                },
            },
            navigation: {
                nextEl: "." + sectionName + "Next",
                prevEl: "." + sectionName + "Previous",
            },
        };

        if (autoplay === true) {
            options.autoplay = true;
            options.delay = delayTime;
            options.disableOnInteraction = false;

            options.loop = true;
            options.loopAdditionalSlides = 1;
        }

        let breakPoint_sm;
        let breakPoint_md;
        let breakPoint_lg;

        if (withBar === true) {
            breakPoint_sm = 280;
            breakPoint_md = 500;
            breakPoint_lg = 1280;
        } else {
            breakPoint_sm = 280;
            breakPoint_md = 412;
            breakPoint_lg = 851;
        }

        if (window.innerWidth >= breakPoint_sm & window.innerWidth < breakPoint_md) {
            options.slidesPerView = 1;
        } else if (window.innerWidth >= breakPoint_md & window.innerWidth < breakPoint_lg) {
            options.slidesPerView = 2;
        } else if (window.innerWidth >= breakPoint_lg) {
            options.slidesPerView = 3;
        } else {
            options.slidesPerView = 1;
        }

        this.swiper = new Swiper("." + sectionName + "Swiper", options);
        // this.swiper.autoplay.stop();

        if (autoplay === true) {
            window.addEventListener('scroll', () => {
                this.handleAutoPlay("." + sectionName + "Swiper", this.swiper, offset);
            });
        }

        if(sectionName === "youtube") {
            this.youtubeAutoPlay();
        }
    }

    handleAutoPlay(swiperElm, swiperName, offsetTop) {
        this.scroll = window.pageYOffset ;
        
        if (document.querySelector(swiperElm)) {
            target = document.querySelector(swiperElm);
            targetPos = window.pageYOffset + target.getBoundingClientRect().top;
            targetHeight = target.clientWidth;
            
            if ((this.scroll > targetPos - offsetTop) && (this.scroll < targetPos + targetHeight / 2)) {
                swiperName.autoplay.start();
            } else {
                swiperName.autoplay.stop();
            }
        }
    }

    youtubeAutoPlay() {
        // youtubeSwiper上のサムネクリックしたら自動スライド停止（PCのみ）
        if (typeof window.ontouchstart === "undefined") {
            const thumbnails = document.querySelectorAll('.movie-thumbnail.youtube-slide');
            thumbnails.forEach((thumbnail) => {
                thumbnail.addEventListener('click', () => {
                    this.youtubeSwiper.autoplay.stop();
                });
            });
        }

        // youtube-section上をマウスオーバーしたら自動スライド開始
        document.getElementById("youtube-section").addEventListener('mouseover', () => {
            this.youtubeSwiper.autoplay.start();
        });
    }
}

