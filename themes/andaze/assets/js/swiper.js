import { add } from '@tweenjs/tween.js';
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

        this.onScroll();
    }

    createNewsSwiper() {
        this.newsSwiper = new Swiper(".newsSwiper", {
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                412: {
                    slidesPerView: 1,
                },
                851: {
                    slidesPerView: 2,
                }
            },
            spaceBetween: 30,
            navigation: {
                nextEl: ".newsNext",
                prevEl: ".newsPrevious",
            },
            // autoplay: {
            //     delay: 2000,
            //     disableOnInteraction: false,
            // },
            // loop: true,
            // loopAdditionalSlides: 1,
        });
    }

    createCasestudySwiper() {
        this.casestudySwiper = new Swiper(".casestudySwiper", {
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
                nextEl: ".casestudyNext",
                prevEl: ".casestudyPrevious",
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            loop: true,
            loopAdditionalSlides: 1,
        });
    }

    createSustainabilitySwiper() {
        this.sustainabilitySwiper = new Swiper(".sustainabilitySwiper", {
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
                nextEl: ".sustainabilityNext",
                prevEl: ".sustainabilityPrevious",
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            loop: true,
            loopAdditionalSlides: 1,
        });
    }

    createProfessionalSwiper() {
        let bar = document.querySelector('.progressbar_in');
        let speed = 5000;
        this.professionalSwiper = new Swiper(".professionalSwiper", {
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
            spaceBetween: 30,
            on: {
                slideChangeTransitionStart: function () {
                    bar.style.transitionDuration = '0s',
                    bar.style.transform = 'scaleX(0)'
                },
                slideChangeTransitionEnd: function () {
                    bar.style.transitionDuration = speed + 'ms',
                    bar.style.transform = 'scaleX(1)'
                },
            },
            navigation: {
                nextEl: ".professionalNext",
                prevEl: ".professionalPrevious",
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true,
            loopAdditionalSlides: 1,
            speed: 800,
        });    
    }

    onScroll() {
        window.addEventListener('scroll', function() {
            this.scroll = window.pageYOffset ;

            if (document.querySelector(".professionalSwiper")) {
                this.handleAutoPlay(".professionalSwiper");
            }
        }.bind(this))
    }

    handleAutoPlay(swiperElm) {
        if (document.querySelector(swiperElm)) {
            target = document.querySelector(swiperElm);
            targetPos = window.pageYOffset + target.getBoundingClientRect().top;
            targetHeight = target.clientWidth;
    
            if ((this.scroll > targetPos - 500) && (this.scroll < targetPos + targetHeight / 2)) {
                this.professionalSwiper.autoplay.start();
            } else {
                this.professionalSwiper.autoplay.stop();
            }
        }
    }
}
