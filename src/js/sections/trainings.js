import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
$(document).ready(function () {
    $('.trainings__card_animated').hover(function () {
        $(this).toggleClass('trainings__card_animated');
    });
});

new Swiper('.trainings .swiper-container', {
    direction: 'horizontal',
    loop: false,

    breakpoints: {
        0: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            allowTouchMove: true,
        },

        936: {
            slidesPerView: 3,
            spaceBetween: 24,
            allowTouchMove: false,
        },

        1416: {
            slidesPerView: 3,
            spaceBetween: 24,
            allowTouchMove: false,
        },
    },
});
