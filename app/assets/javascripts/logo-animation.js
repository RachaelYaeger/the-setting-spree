$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 20) {
    $(".logo-container").addClass('short');
    $(".logo-text-group").fadeOut();
  }
  else {
    $(".logo-container").removeClass('short');
    $(".logo-text-group").fadeIn();
  }
});