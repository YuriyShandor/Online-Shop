$(document).ready(function(){

  $(document).ready(function() {
  $('select').niceSelect();
  });

  $(".gr-but").click(function(){
    $(".gr-but").removeClass("bl-but");
    $(this).addClass("bl-but");
    /*var index = $(this).index()+1;
    $(".content").removeClass("show");
    $(".content:nth-child("+ index +")").addClass("show");*/
    });
  });
