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

  $(".line-item").hover(function(){
    console.log("pon de line");
    var deleteDiv = $("span");
    $(this).find(deleteDiv).toggleClass("hidden");
  })
})