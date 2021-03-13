$(function() {
    $('.menu__btn').on('click', function() {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.header__menu').toggleClass('header__menu--active');
    });

    $('.menu__link').on('click', function() {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.header__menu').removeClass('header__menu--active');
    });

});