$(document).ready(function () {
    $('.slider_card').slick({
        slidesToShow: 1,
        prevArrow: $('.arrow_left'),
        nextArrow: $('.arrow_right'),
        dots: true,
        appendDots: $('.dots_slider'),
    });
});