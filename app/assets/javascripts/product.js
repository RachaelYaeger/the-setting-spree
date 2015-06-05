$(document).ready(function() {

  var showProduct = function(url){
    $('#show-product').remove();
    $('body').css('opacity', 0.5);
    history.pushState(null, null, url);
    $.get(url, function(data){
      console.log("calls showProduct");
      // console.log(data);
      $('#products')
        .prepend($(data).find('#show-product'));
      $('#show-product').hide().fadeIn(200).append('<div class="close-product">x</div>');
      $('body').css('opacity', 1);
    });
  }

  // $(window).load(function(){
  //   showProduct('/products/ruby-on-rails-bag');
  // })

  $(document).on('click', '.product', function(e){
    e.preventDefault();
    product = $(e.currentTarget);
    showProduct(product.find('a:first').attr('href'));
  })

  $(document).on('click', '.close-product', function(e){
    $('#show-product').fadeOut(200);
    setTimeout(function(){
      $('#show-product').remove();
    }, 200);
  })

});