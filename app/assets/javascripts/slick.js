function ready() {
  loadSlick();

  function loadSlick(){
    var $status = $('.pagingInfo');
    var $slickElement = $('.slickness');
    var $slickProductElement = $('.slickness-products');

    $slickProductElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $('.slickness').slick({
      arrows: true,
      appendArrows: '#studio-slider-count',
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
    });

    $('.slickness-products').slick({
      arrows: true,
      appendArrows: '#product-slider-count',
      dots: false
    });

    if (!Modernizr.touch){
      $('.slickness').click(function() {
        $(this).slick('slickNext');
      });

      $('.slickness-products').click(function() {
        $(this).slick('slickNext');
      });
    }
  }

};

$(document).ready(ready);
$(document).on('page:load', ready);