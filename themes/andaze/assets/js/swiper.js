import Swiper from 'swiper/bundle';

export class SlideShow {
    constructor() {
        this.newsSwiper;
        this.casestudySwiper;
        this.sustainabilitySwiper;
        this.youtubeSwiper;
    }

    createSwiper(container, nextEl, prevEl, isAutoplay = false, isLoop = false, customOptions = {}, shouldHandleAutoplay = true) {
        const baseOptions = {
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                412: {
                    slidesPerView: 2,
                },
                851: {
                    slidesPerView: 3,
                }
            },
            spaceBetween: 30,
            navigation: {
                nextEl,
                prevEl,
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            loop: isLoop,
            loopAdditionalSlides: isLoop ? 1 : 0,
        };

        const options = { ...baseOptions, ...customOptions };

        const swiper = new Swiper(container, options);

        if (shouldHandleAutoplay) {
            swiper.autoplay.stop();
        
            window.addEventListener('scroll', () => {
                this.handleAutoPlay(container, swiper, 500);
            });
        }
    
        return swiper;
    }

    createNewsSwiper() {
        this.newsSwiper = this.createSwiper(".newsSwiper", ".newsNext", ".newsPrevious");
    }

    createCasestudySwiper() {
        this.casestudySwiper = this.createSwiper(".casestudySwiper", ".casestudyNext", ".casestudyPrevious", true, true);
    }

    createSustainabilitySwiper() {
        this.sustainabilitySwiper = this.createSwiper(".sustainabilitySwiper", ".sustainabilityNext", ".sustainabilityPrevious", true, true);
    }

    createYoutubeSwiper() {
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

        this.youtubeSwiper = this.createSwiper(".youtubeSwiper", ".youtubeNext", ".youtubePrevious", true, true);
    }

    
    createSolutionSwiper() {
        const bar = document.querySelector('.solotionProgressbar_in');
        const speed = 5000;
        const customOptions = {
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                500: {
                    slidesPerView: 2,
                },
                1280: {
                    slidesPerView: 3,
                }
            },
            on: {
                slideChangeTransitionStart: function () {
                    bar.style.transitionDuration = '0s';
                    bar.style.transform = 'scaleX(0)';
                },
                slideChangeTransitionEnd: function () {
                    bar.style.transitionDuration = speed + 'ms';
                    bar.style.transform = 'scaleX(1)';
                },
            },
            autoplay: {
                delay: speed,
            },
            loop: true,
            loopAdditionalSlides: 1,
            speed: 800,
        };

        this.solutionSwiper = this.createSwiper(".solutionSwiper", ".solutionNext", ".solutionPrevious", true, true, customOptions, false);
    }

    handleAutoPlay(swiperElm, swiperName, offsetTop) {
        let scroll = window.pageYOffset;
        let target;
        let targetPos;
        let targetHeight;

        if (document.querySelector(swiperElm)) {
            target = document.querySelector(swiperElm);
            targetPos = window.pageYOffset + target.getBoundingClientRect().top;
            targetHeight = target.clientWidth;
            
            if ((scroll > targetPos - offsetTop) && (scroll < targetPos + targetHeight / 2)) {
                swiperName.autoplay.start();
            } else {
                swiperName.autoplay.stop();
            }
        }
    }
}