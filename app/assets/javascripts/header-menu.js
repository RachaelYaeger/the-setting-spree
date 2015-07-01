$(document).ready(function() {
  // var menuToggle = $('#js-centered-navigation-menu-btn').unbind();
  
  $(document).on('mouseenter', '#js-centered-navigation-menu-btn', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideDown(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });

  $(document).on('mouseleave', '#menu-container' , function(){
    $('#js-centered-navigation-menu').slideUp();
  });
  
});
