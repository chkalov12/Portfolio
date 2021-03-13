$(function() {
    //  $('.header__btn').click(function(){
    //  	$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 15000);
    //  	return false;
    //    });




    $('.burger-btn').on('click', function() {
        $('.menu__list').slideToggle();
    });

    new WOW().init();

    $('.phone__img').slick({
        fade: true,
        arrows: false,
        autoplay: true,
        dots: true

    })

});