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
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: sliderView,
        spaceBetween: 30,
        navigation: {
            nextEl: ".next",
            prevEl: ".previous",
        },
    });
}