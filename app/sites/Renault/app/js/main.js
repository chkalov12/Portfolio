$(function() {
    //  $('.header__btn').click(function(){
    //  	$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 15000);
    //  	return false;
    //    });


    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true
    });


    $(".header-btn").on('click', function() {
        $('.menu').addClass('active');
    });

    $(".close-btn").on('click', function() {
        $('.menu').removeClass('active');
    });

});