$(document).ready(function() {

  var showProduct = function(url){
    $('#loading').removeClass('hidden');
    $('#show-product').remove();
    $('#overlay').css('display', 'initial');
    history.pushState(null, null, url);
    $.get(url, function(data){
      $('#homepage-products')
      .prepend($(data).find('#show-product'));
      $('#loading').addClass('hidden');
      location.href = "#show-product-section";
      $('#show-product').hide().fadeIn(200).append('<div class="x-icon close-product">×</div>'); //"x" is unicode symbol
      $('#overlay').css('display', 'none');

      var $slickProductElement = $('.slickness-products');
      var $status = $('.pagingInfo');

      $slickProductElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.text(i + '/' + slick.slideCount);
      });

      // Applies carousel to product images
      $('.slickness-products').slick({
        arrows: true,
        appendArrows: '#product-slider-count',
        dots: false
      });

      // Checks if devise if touch. Allows click to next slide if not
      if (!Modernizr.touch){
        $('.slickness-products').click(function() {
          $(this).slick('slickNext');
        });
      }

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