import '@fancyapps/fancybox';
import Swiper from 'swiper';

$("button.fancy-modal").click(function () {
    var ref = this;
    $.fancybox.open({
        type: 'inline',
        src: '#insta-modal',
        touch: false,
        afterShow: function (instance, current) {
            // var id = $(ref).attr('id');
            window.location.hash = $(ref).attr('slide_hash');
            intializeSwiper();
        }
    });
});

function intializeSwiper() {
    var modalSwipers = document.getElementsByClassName("swiper-modal-content");
    var element = modalSwipers[0];
    var swiper1 = element.getElementsByClassName("swiper-container")[0];
    var nextEl = element.getElementsByClassName("swiper-next")[0];
    var prevEl = element.getElementsByClassName("swiper-prev")[0];

    var modalSwiper = new Swiper(swiper1, {
        hashNavigation: {
            replaceState: true,
            watchState: true
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        simulateTouch: false,
        navigation: {
            nextEl: nextEl,
            prevEl: prevEl,
        }
    });
    // modalSwiper.slideTo(id, false, false);
    intializeInnerSwiper();
}

function intializeInnerSwiper() {
    var modalInnerSwipers = document.getElementsByClassName("swiper-inside-modal-content");
    for (var i = 0; i < modalInnerSwipers.length; i++) {
        var el = modalInnerSwipers[i];
        var swiper = el.getElementsByClassName("swiper-container")[0];
        var nextInnerEl = el.getElementsByClassName("swiper-inner-next")[0];
        var prevInnerEl = el.getElementsByClassName("swiper-inner-prev")[0];

        new Swiper(swiper, {
            slidesPerView: 2,
            spaceBetween: 20,
            simulateTouch: false,
            navigation: {
                nextEl: nextInnerEl,
                prevEl: prevInnerEl,
            },
            // breakpoints: {
            // 	300: {
            // 		slidesPerView: 1.6,
            // 		spaceBetween: 10,
            // 		freeMode:true,
            // 		// centeredSlides: true
            // 	},
            // 	768: {
            // 		slidesPerView: 3,
            // 		slidesPerGroup: 3,
            // 		spaceBetween: 15
            // 	},
            // 	992: {
            // 		slidesPerView: 4,
            // 		slidesPerGroup: 4,
            // 		spaceBetween: 15,
            // 	},
            // }
        });
    }
}

