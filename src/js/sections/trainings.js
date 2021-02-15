import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
$(document).ready(function () {
    $('.trainings__link').click(function (event) {
        event.preventDefault();
        changeTab($(this).attr('href'));
    });
    function changeTab(tabId) {
        let tabLink = $('[href="' + tabId + '"]'),
            tab = $(tabId);
        if (!tabLink.hasClass('trainings__link_active')) {
            return;
        }

        if (tabId == '#februaryTab') {
            swiper.slideTo(0);
        } else if (tabId == '#marchTab') {
            swiper.slideTo(1);
        } else {
            swiper.slideTo(2);
        }

        $('.trainings__link').removeClass('trainings__link_enabled');

        tabLink.addClass('trainings__link_enabled');

        $('.workouts__tab').stop();
        if ($('.workouts__tab_show').length > 0) {
            tab.siblings('.workouts__tab').fadeOut(400, 'linear', function () {
                $(this).removeClass('workouts__tab_show');
                tab.fadeIn(400, 'linear', function () {
                    $(this).addClass('workouts__tab_show');
                });
            });
        } else {
            tab.siblings('.workouts__tab').slideUp(500, 'linear', function () {
                $(this).removeClass('workouts__tab_show');
                tab.slideDown(500, 'linear', function () {
                    $(this).addClass('workouts__tab_show');
                });
            });
        }
    }
    const swiper = new Swiper('.trainings .swiper-container', {
        direction: 'horizontal',
        loop: false,

        breakpoints: {
            1: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30,
                allowTouchMove: true,
            },

            577: {
                slidesPerView: 3,
                spaceBetween: 24,
                allowTouchMove: false,
            },
        },
    });

    swiper.on('slideChange', function () {
        if (swiper.activeIndex == 0) {
            changeTab('#februaryTab');
        } else if (swiper.activeIndex == 1) {
            changeTab('#marchTab');
        } else {
            changeTab('#aprilTab');
        }
    });
});
