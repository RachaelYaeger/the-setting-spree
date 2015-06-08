$(document).ready(function() {
  // var cartToggle = $('#cart-link').unbind();

  $(document).on('click', '#cart-link', function(e) {
    e.preventDefault();
    if ($('#cart').is(':visible')) {
      $('#cart, #space-holder').slideUp();
    }
    else {
      $('#cart, #space-holder').slideDown();
    }
  });
})