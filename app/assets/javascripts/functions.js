
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('#greet').offset().top-80){
    $('nav').addClass('opaqueNav');
  }
  if(wScroll < $('#greet').offset().top-80){
    $('nav').removeClass('opaqueNav');
  }
});
