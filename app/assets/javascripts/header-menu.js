$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-menu-btn').unbind();
  
  menuToggle.on('click', function(e) {
    e.preventDefault();
    console.log("menu clicked");
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});
