$(document).ready(function () {
    $('.slider_card').slick({
        slidesToShow: 1,
        prevArrow: $('.arrow_left'),
        nextArrow: $('.arrow_right'),
        dots: true,
        appendDots: $('.dots_slider')
    });

    $('.faq_accord-item').on('click', function (e) {
        e.preventDefault()
        if (!$(this).children('.faq_accord-question').hasClass('accord_question-active')) {
            $('.faq_accord-question').removeClass('accord_question-active')
            $('.faq_accord-text').slideUp()
            $(this).children('.faq_accord-question').addClass('accord_question-active')
            $(this).children('.faq_accord-text').slideDown()


        } else {
            $(this).children('.faq_accord-question').removeClass('accord_question-active')
            $(this).children('.faq_accord-text').slideUp()
            $('.faq_accord-text').slideUp()
            $('.faq_accord-question').removeClass('accord_question-active')
        }

    })
});
/*$('.faq_accord-text').css('display', 'none')*/



