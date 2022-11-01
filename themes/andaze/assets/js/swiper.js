import Swiper from 'swiper/bundle';

export class SlideShow {
    constructor() {
        this.newsSwiper;
        this.casestudySwiper;
        this.sustainabilitySwiper;
        this.professionalSwiper;
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
        this.sustainabilitySwiper = new Swiper(".professionalSwiper", {
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
}
