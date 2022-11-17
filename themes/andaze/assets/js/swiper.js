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

    createNewsSwiper() {
        this.newsSwiper = new Swiper(".newsSwiper", {
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
        this.newsSwiper.autoplay.stop();
        window.addEventListener('scroll', () => {
            this.handleAutoPlay(".newsSwiper", this.newsSwiper, 500);
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
        this.casestudySwiper.autoplay.stop();
        window.addEventListener('scroll', () => {
            this.handleAutoPlay(".casestudySwiper", this.casestudySwiper, 500);
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
        this.sustainabilitySwiper.autoplay.stop();
        window.addEventListener('scroll', () => {
            this.handleAutoPlay(".sustainabilitySwiper", this.sustainabilitySwiper, 500);
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
        this.professionalSwiper.autoplay.stop();
        window.addEventListener('scroll', () => {
            this.handleAutoPlay(".professionalSwiper", this.professionalSwiper, 500);
        });
    }

    createYoutubeSwiper() {
        this.youtubeSwiper = new Swiper(".youtubeSwiper", {
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
                nextEl: ".youtubeNext",
                prevEl: ".youtubePrevious",
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            loop: true,
            loopAdditionalSlides: 1,
        });
        this.youtubeSwiper.autoplay.stop();

        window.addEventListener('scroll', () => {
            this.handleAutoPlay(".youtubeSwiper", this.youtubeSwiper, 800);
        });

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
}

