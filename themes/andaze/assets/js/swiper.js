import Swiper from 'swiper/bundle';

export function activeSwiper() {
    window.addEventListener('resize', function () { 
        "use strict";
        window.location.reload(); 
    });
    var sliderView;
    if(screen.width > 320 && screen.width < 412)
    {
        sliderView = 1;
    }
    else if(screen.width > 413 && screen.width < 851)
    {
        sliderView = 2;
    }
    else
    {
        sliderView = 3; 
    }
    var newsSwiper = new Swiper(".newsSwiper", {
        slidesPerView: sliderView,
        spaceBetween: 30,
        navigation: {
            nextEl: ".newsNext",
            prevEl: ".newsPrevious",
        },
    });
    var casestudySwiper = new Swiper(".casestudySwiper", {
        slidesPerView: sliderView,
        spaceBetween: 30,
        navigation: {
            nextEl: ".casestudyNext",
            prevEl: ".casestudyPrevious",
        },
    });
    var sustainabilitySwiper = new Swiper(".sustainabilitySwiper", {
        slidesPerView: sliderView,
        spaceBetween: 30,
        navigation: {
            nextEl: ".sustainabilityNext",
            prevEl: ".sustainabilityPrevious",
        },
    });
    var sustainabilitySwiper = new Swiper(".professionalSwiper", {
        slidesPerView: sliderView,
        spaceBetween: 30,
        loop: true,
        loopAdditionalSlides: 1,
        speed: 800,
    });
    
}