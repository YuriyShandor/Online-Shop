$(document).ready(function(){

  $(document).ready(function() {
  $('select').niceSelect();
  });

  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $(".banner-slider__nav_right"),
    prevArrow: $(".banner-slider__nav_left"),
  });

  $(".gr-but").click(function(){
    $(".gr-but").removeClass("bl-but");
    $(this).addClass("bl-but");
    /*var index = $(this).index()+1;
    $(".content").removeClass("show");
    $(".content:nth-child("+ index +")").addClass("show");*/
  });
});
