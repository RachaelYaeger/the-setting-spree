$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 20) {
    $(".logo-text-group").fadeOut(400, function(){
      $(".logo-container").addClass('short');
      $('header').css("background-color", "rgba(255,255,255,0.88)");
    });
  }
  else if (scroll < 20 && $(".logo-container").hasClass('short')) {
    console.log("calls else for header at top")
    $('header').css("background-color", "transparent");
    setTimeout(afterCss, 600);
    function afterCss(){
      $(".logo-container").removeClass('short');
      $(".logo-text-group").fadeIn();
    }
  }
});