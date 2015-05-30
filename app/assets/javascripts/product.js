// $(document).ready(function() {

  var showProduct = function(){
    $.get('products/ruby-on-rails-bag', function(data){
      console.log("calls showProduct");
      // console.log(data);
      $('#products')
      .prepend('<h1>HELLO THERE!</h1>');
    });
  }

// });