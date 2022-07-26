import Swiper from 'swiper/bundle';

export function activeSwiper() {
    const breakPoint = 412;

    let sustainabilitySwiper;
    let swiperBool;

    window.addEventListener('load',() => {
        createSustainabilitySwiper();
        if (breakPoint < window.innerWidth){
            swiperBool = false;
        } else {
            swiperBool = true;
        }
    },false);

    window.addEventListener('resize',()=>{
        if (breakPoint < window.innerWidth && swiperBool){
            sustainabilitySwiper.destroy(false,true);
            swiperBool = false;
        } else if (breakPoint >= window.innerWidth && !(swiperBool)){
            createSustainabilitySwiper();
            swiperBool = true;
        }
    },false);


    // var newsSwiper = new Swiper(".newsSwiper", {
    //     slidesPerView: sliderView,
    //     spaceBetween: 30,
    //     navigation: {
    //         nextEl: ".newsNext",
    //         prevEl: ".newsPrevious",
    //     },
    // });
    // var casestudySwiper = new Swiper(".casestudySwiper", {
    //     slidesPerView: sliderView,
    //     spaceBetween: 30,
    //     navigation: {
    //         nextEl: ".casestudyNext",
    //         prevEl: ".casestudyPrevious",
    //     },
    // });
    const createSustainabilitySwiper = () => {
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
        });
    }

    // var bar = document.querySelector('.progressbar_in');
    // var speed = 5000;
    // var sustainabilitySwiper = new Swiper(".professionalSwiper", {
    //     slidesPerView: sliderView,
    //     spaceBetween: 30,
    //     on: {
    //         slideChangeTransitionStart: function () {
    //             bar.style.transitionDuration = '0s',
    //             bar.style.transform = 'scaleX(0)'
    //         },
    //         slideChangeTransitionEnd: function () {
    //             bar.style.transitionDuration = speed + 'ms',
    //             bar.style.transform = 'scaleX(1)'
    //         },
    //     },
    //     navigation: {
    //         nextEl: ".professionalNext",
    //         prevEl: ".professionalPrevious",
    //     },
    //     autoplay: {
    //         delay: 5000,
    //         disableOnInteraction: false,
    //     },
    //     loop: true,
    //     loopAdditionalSlides: 1,
    //     speed: 800,
    // });
    
}