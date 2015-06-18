$(document).ready(function() {

  var showProduct = function(url){
    $('#show-product').remove();
    $('body').css('opacity', 0.5);
    history.pushState(null, null, url);
    $.get(url, function(data){
      console.log("calls showProduct");
      $('#products-section')
      .prepend($(data).find('#show-product'));
      // Applies carousel to product images
      $('.slickness-products').slick({
        arrows: false,
        dots: true
      });
      location.href = "#show-product";
      $('#show-product').hide().fadeIn(200).append('<div class="x-icon close-product">×</div>'); //"x" is unicode symbol
      $('body').css('opacity', 1);
    });
  }

  $(document).on('click', '.product', function(e){
    e.preventDefault();
    product = $(e.currentTarget);
    showProduct(product.find('a:first').attr('href'));
  })

  $(document).on('click', '.close-product', function(e){
    $('#show-product').fadeOut(200, function(){
      $('#show-product').remove();
    });
  })

});