$(document).ready(function() {

  // Hides and shows cart section with a sliding animation
  $(document).on('click', '#cart-link', function(e) {
    e.preventDefault();
    if ($('#cart').is(':visible')) {
      $('#cart, #space-holder').slideUp();
    }
    else {
      $('#cart, #space-holder').slideDown();
    }
  });

  // Hides and shows the remove link for the cart items
  $(".line-item").hover(function(){
    var deleteDiv = $("span");
    $(this).find(deleteDiv).toggleClass("hidden");
  })
})