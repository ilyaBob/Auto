$(function () {

  $("#rating--js,#rating--js-two").rateYo({
    rating: 4.5,
    spacing: "5px",
    normalFill: "#A0A0A0",
    ratedFill: "#FFB648",
    "starSvg": '<svg width="30" height="28" viewBox="0 0 30 28" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M12.3662 1.82936C13.5032 -0.255461 16.4968 -0.255465 17.6338 1.82936L19.9256 6.03174C20.3571 6.82292 21.1214 7.37822 22.0072 7.5441L26.7121 8.42517C29.0463 8.86228 29.9713 11.7093 28.3399 13.4349L25.0514 16.9132C24.4323 17.5681 24.1404 18.4666 24.2563 19.3603L24.8723 24.1072C25.1779 26.4621 22.756 28.2217 20.6107 27.2034L16.2865 25.1507C15.4724 24.7642 14.5276 24.7642 13.7135 25.1507L9.38927 27.2034C7.24399 28.2217 4.82214 26.4621 5.12772 24.1072L5.74367 19.3603C5.85964 18.4666 5.5677 17.5681 4.94858 16.9132L1.66009 13.4349C0.0286616 11.7093 0.953722 8.86228 3.28786 8.42517L7.99278 7.5441C8.87858 7.37822 9.64288 6.82293 10.0744 6.03174L12.3662 1.82936Z"/>' +
      '</svg>'
  });

  var mixer = mixitup('.blog__content');

  $('.testimonials__carousel-box').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    draggable: true,
    appendArrows: $(".testimonials__arrow-slide"),
    dots: true,
    appendDots: $(".testimonials__radio"),
  });

  $('.testimonials__arrow-left').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__carousel-box').slick('slickPrev')
  })
  $('.testimonials__arrow-right').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__carousel-box').slick('slickNext')
  })

  $('.faq__item').on('click', function () {
    $(this).toggleClass('faq__item-body--active')
    $(this).children('.faq__item-body').slideToggle("slow")
  })

  $(".header__list a, .footer__list a").on("click", function () {
    let href = $(this).attr("href");


    $("html, body").animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 370,
      easing: "linear"
    },
      $('.overlay').removeClass('overlay-active'),
      $('.header__navbar-burger').toggleClass('header__navbar-burger--open'));

    return false;
  });


  $('.burger, .overlay').on('click', function () {
    $('.header__navbar-burger').toggleClass('header__navbar-burger--open');
    $('.overlay').toggleClass('overlay-active');

  })


});