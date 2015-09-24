
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  var links = document.getElementById('blackLinks');

  if(wScroll > $('#greet').offset().top-200){
    $('nav').addClass('opaqueNav');
    $('#logo').addClass('nav-logo-black');
  }
  if(wScroll < $('#greet').offset().top-200){
    $('nav').removeClass('opaqueNav');
    $('#logo').removeClass('nav-logo-black');
  }
});
$(function(){
  $.scrollIt();
});
