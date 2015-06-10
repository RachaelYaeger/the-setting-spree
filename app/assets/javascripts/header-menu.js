$(document).ready(function() {
  // var menuToggle = $('#js-centered-navigation-menu-btn').unbind();
  
  $(document).on('mouseenter click', '#js-centered-navigation-menu-btn', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});
