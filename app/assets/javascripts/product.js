$(document).ready(function() {

  var showProduct = function(url){
    $('#loading').removeClass('hidden');
    $('#show-product').remove();
    $('#overlay').css('display', 'initial');
    history.pushState(null, null, url);
    $.get(url, function(data){
      console.log("calls showProduct");
      $('#products-section')
      .prepend($(data).find('#show-product'));
      $('#loading').addClass('hidden');
      // Applies carousel to product images
      $('.slickness-products').slick({
        arrows: false,
        dots: true
      });
      location.href = "#show-product-section";
      $('#show-product').hide().fadeIn(200).append('<div class="x-icon close-product">×</div>'); //"x" is unicode symbol
      $('#overlay').css('display', 'none');
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