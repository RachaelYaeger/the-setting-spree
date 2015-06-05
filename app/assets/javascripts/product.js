$(document).ready(function() {

  var showProduct = function(url){
    $('body').css('opacity', 0.5);
    $.get(url, function(data){
      console.log("calls showProduct");
      // console.log(data);
      $('#products')
        .prepend($(data).find('#show-product'));
      $('#show-product').hide().fadeIn(200);
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

});