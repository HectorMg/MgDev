
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  var links = document.getElementById('blackLinks');

  if(wScroll > $('#greet').offset().top-100){
    $('nav').addClass('opaqueNav');
    $('#logo').addClass('nav-logo-black');
  }
  if(wScroll < $('#greet').offset().top-100){
    $('nav').removeClass('opaqueNav');
    $('#logo').removeClass('nav-logo-black');
  }
});
