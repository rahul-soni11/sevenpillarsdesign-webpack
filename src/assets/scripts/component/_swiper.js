import Swiper from 'swiper'
// // Initialize Swiper 
var x = document.getElementsByClassName("swiper-content");
for (var i = 0; i < x.length; i++) {
    var el = x[i];
    var swiper = el.getElementsByClassName("swiper-container")[0];
    var nx = el.getElementsByClassName("swiper-button-next")[0];
    var pr = el.getElementsByClassName("swiper-button-prev")[0];

    new Swiper(swiper, {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: nx,
            prevEl: pr,
        },
        breakpoints: {
            300: {
                slidesPerView: 1.6,
                spaceBetween: 10,
                freeMode: true,
                // centeredSlides: true
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 15
            },
            992: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 15,
            },
        }
    });
}