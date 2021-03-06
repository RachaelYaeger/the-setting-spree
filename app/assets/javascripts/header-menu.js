$(document).ready(function() {

  // var targetOffset = $("#studio").offset().top;

  // var $w = $(window).scroll(function(){
  //     if ( $w.scrollTop() > targetOffset ) {   
  //         console.log("below splash");
  //         $('header').css("background-color", "rgba(255,255,255,0.88)");
  //     } else {
  //       $('header').css("background-color", "transparent");
  //     }
  // });
  
  // Checks if device is touch
  if (Modernizr.touch){

    // Hides and shows mobile menu section with a sliding animation on Menu click
    $(document).on('click', '#js-centered-navigation-menu-btn', function(e) {
      e.preventDefault();
      if ($('#mobile-menu').is(':visible')) {
        $('#mobile-menu, #space-holder').slideUp();
      }
      else {
        $('#mobile-menu, #space-holder').slideDown();
      }
    });

    // Hides mobile menu when any nav link is clicked
    $(document).on('click', '.mobile-nav-link', function(e){
      e.preventDefault();
      var currentAnchor = $(this).find("a").attr('href');
      if ($(this).text() == "Journal"){
        window.location = currentAnchor;
      }
      $('#mobile-menu, #space-holder').slideUp(function(){
        $.smoothScroll({
              scrollTarget: currentAnchor,
              offset: -60,
              speed: 800
            });
        return false;
      });
    })

  // For Desktop
  } else {

    // Shows menu on hover
    $(document).on('mouseenter', '#js-centered-navigation-menu-btn', function(e) {
      e.preventDefault();
      $('#js-centered-navigation-menu').slideDown(function(){
        if($('#js-centered-navigation-menu').is(':hidden')) {
          $('#js-centered-navigation-menu').removeAttr('style');
        }
      });
    });

    // Hides menu on mouseleave
    $(document).on('mouseleave', '#menu-container' , function(){
      $('#js-centered-navigation-menu').slideUp();
    });

  }


  
});
