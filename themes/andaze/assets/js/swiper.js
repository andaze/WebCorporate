import Swiper from 'swiper/bundle';

export class Swiper {
    constructor() {
        const breakPoint = 412;

        let newsSwiper;
        let casestudySwiper;
        let sustainabilitySwiper;
        let professionalSwiper;
    }

    createNewsSwiper() {
        newsSwiper = new Swiper(".newsSwiper", {
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
        casestudySwiper = new Swiper(".casestudySwiper", {
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
        sustainabilitySwiper = new Swiper(".sustainabilitySwiper", {
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
        sustainabilitySwiper = new Swiper(".professionalSwiper", {
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

// export function activeSwiper() {
//     const breakPoint = 412;

//     let newsSwiper;
//     let casestudySwiper;
//     let sustainabilitySwiper;
//     let professionalSwiper;
//     let swiperBool;
//     const createNewsSwiper = () => {
//         newsSwiper = new Swiper(".newsSwiper", {
//             breakpoints: {
//                 280: {
//                     slidesPerView: 1,
//                 },
//                 412: {
//                     slidesPerView: 1,
//                 },
//                 851: {
//                     slidesPerView: 2,
//                 }
//             },
//             spaceBetween: 30,
//             navigation: {
//                 nextEl: ".newsNext",
//                 prevEl: ".newsPrevious",
//             },
//             // autoplay: {
//             //     delay: 2000,
//             //     disableOnInteraction: false,
//             // },
//             // loop: true,
//             // loopAdditionalSlides: 1,
//         });
//     }

//     const createCasestudySwiper = () => {
//         casestudySwiper = new Swiper(".casestudySwiper", {
//             breakpoints: {
//                 280: {
//                     slidesPerView: 1,
//                 },
//                 412: {
//                     slidesPerView: 2,
//                 },
//                 851: {
//                     slidesPerView: 3,
//                 }
//             },
//             spaceBetween: 30,
//             navigation: {
//                 nextEl: ".casestudyNext",
//                 prevEl: ".casestudyPrevious",
//             },
//             autoplay: {
//                 delay: 2000,
//                 disableOnInteraction: false,
//             },
//             loop: true,
//             loopAdditionalSlides: 1,
//         });
//     }

//     const createSustainabilitySwiper = () => {
//         sustainabilitySwiper = new Swiper(".sustainabilitySwiper", {
//             breakpoints: {
//                 280: {
//                     slidesPerView: 1,
//                 },
//                 412: {
//                     slidesPerView: 2,
//                 },
//                 851: {
//                     slidesPerView: 3,
//                 }
//             },
//             spaceBetween: 30,
//             navigation: {
//                 nextEl: ".sustainabilityNext",
//                 prevEl: ".sustainabilityPrevious",
//             },
//             autoplay: {
//                 delay: 2000,
//                 disableOnInteraction: false,
//             },
//             loop: true,
//             loopAdditionalSlides: 1,
//         });
//     }

//     const createProfessionalSwiper = () => {
//         let bar = document.querySelector('.progressbar_in');
//         let speed = 5000;
//         sustainabilitySwiper = new Swiper(".professionalSwiper", {
//             breakpoints: {
//                 280: {
//                     slidesPerView: 1,
//                 },
//                 500: {
//                     slidesPerView: 2,
//                 },
//                 1280: {
//                     slidesPerView: 3,
//                 }
//             },
//             spaceBetween: 30,
//             on: {
//                 slideChangeTransitionStart: function () {
//                     bar.style.transitionDuration = '0s',
//                     bar.style.transform = 'scaleX(0)'
//                 },
//                 slideChangeTransitionEnd: function () {
//                     bar.style.transitionDuration = speed + 'ms',
//                     bar.style.transform = 'scaleX(1)'
//                 },
//             },
//             navigation: {
//                 nextEl: ".professionalNext",
//                 prevEl: ".professionalPrevious",
//             },
//             autoplay: {
//                 delay: 5000,
//                 disableOnInteraction: false,
//             },
//             loop: true,
//             loopAdditionalSlides: 1,
//             speed: 800,
//         });    
//     }

//     createNewsSwiper();
//     createCasestudySwiper();
//     createSustainabilitySwiper();
//     createProfessionalSwiper();
    
//     window.addEventListener('load',() => {
//         if (breakPoint < window.innerWidth){
//             swiperBool = false;
//         } else {
//             swiperBool = true;
//         }
//     },false);

//     window.addEventListener('resize',()=>{
//         if (breakPoint < window.innerWidth && swiperBool){
//             newsSwiper.destroy(false,true);
//             casestudySwiper.destroy(false,true);
//             sustainabilitySwiper.destroy(false,true);
//             professionalSwiper.destroy(false,true);
//             swiperBool = false;
//         } else if (breakPoint >= window.innerWidth && !(swiperBool)){
//             createNewsSwiper();
//             createCasestudySwiper();
//             createSustainabilitySwiper();
//             createProfessionalSwiper();
//             swiperBool = true;
//         }
//     },false);


// }