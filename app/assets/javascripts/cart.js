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

  // run test on initial page load
  checkSize();

  // run test on resize of the window
  $(window).resize(checkSize);

  //Function to the css rule
  function checkSize(){
    // Code for Desktop Size Only
    if ($(".mobile-only").css("display") == "none" ){
      // Hides and shows the remove link for the cart items
      $(".line-item").hover(function(){
        var deleteDiv = $("span");
        $(this).find(deleteDiv).toggleClass("hidden");
      })
    // Code for Mobile Size Only
    } else {
      // Shows cart remove link at all times for mobile view
      $(".cart-remove-link").removeClass("hidden");
      // Removes hide/show cart functionality and allows user to be redirected to /cart page
      $(document).off('click', '#cart-link')
    }
  }

  $(document).on('click', '.cart-item-delete', function(e) {
    e.preventDefault();

    $button = $(e.currentTarget)

    $.post("/remove",
      {
        order_id: $button.data('o-id'),
        variant_id: $button.data('v-id')
      }
    ).done(function( data ) {
      $button.parents('.line-item').remove()
      $('#order-total').text(data);
    });
  })

})

