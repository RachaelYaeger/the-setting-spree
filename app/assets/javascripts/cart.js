$(document).ready(function() {
  var cartToggle = $('#cart-link').unbind();

  cartToggle.on('click', function(e) {
    e.preventDefault();
    if ($('#cart').is(':visible')) {
      $('#cart, #space-holder').slideUp();
    }
    else {
      $('#cart, #space-holder').slideDown();
    }
  });
})