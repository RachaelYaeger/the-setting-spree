$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 20) {
    $(".logo-text-group").fadeOut(400, function(){
      $(".logo-container").addClass('short');
    });
  }
  else {
    $(".logo-container").removeClass('short');
    $(".logo-text-group").fadeIn();
  }
});