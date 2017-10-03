$(document).ready(function(){

  $(document).ready(function() {
  $('select').niceSelect();
  });

  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $(".banner-slider__nav_right"),
    prevArrow: $(".banner-slider__nav_left"),
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.left-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "left-slider__nav-dots",
    autoplay: true,
    autoplaySpeed: 5000,
  });
});
