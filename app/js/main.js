$(function(){


    $(".star").rateYo({
        rating: 5.0,
        starWidth: "12px",
        readOnly: true
      });

    $('.product-slider__inner').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 4,
    });

    $(".range").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });



    $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
    });


    $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
    });


$('.icon-th-list').on('click', function(){
$('.product__item').addClass('list');
$('.icon-th-list').addClass('active');
$('.icon-th-large').removeClass('active');

});

$('.icon-th-large').on('click', function(){
$('.product__item').removeClass('list');
$('.icon-th-large').addClass('active');
$('.icon-th-list').removeClass('active');
});


$('.product-one__tabs .tab, .settings__tab .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
        $('.product-one__tabs, .settings__tab').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs, .settings__tab .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });


    var mixer = mixitup('.products__inner-box');

    
});