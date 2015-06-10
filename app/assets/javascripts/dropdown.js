$(function() {

  DropDown.prototype = {
    initEvents : function() {
      var obj = this;

      obj.dd.on('click', function(event){
          console.log("adds active");
          $(this).toggleClass('active');
          return false;
      });
      obj.opts.on('click',function(){
              var opt = $(this);
              obj.val = opt.text();
              obj.country = opt.data("country");
              obj.index = opt.index();
              // Changes value displayed to user in the dropdown menu
              obj.placeholder.text(obj.val);

              // Adds value to hidden field to be submitted with form
              // Checks if it is the hidden field for the inquiry form or the address form
              if ( $('#inquiry_customer_type').length) {
                $('#inquiry_customer_type').val(obj.val);
              }
              else if ( $('#order_bill_address_attributes_country_id').length) { 
                $('#order_bill_address_attributes_country_id').val(obj.country);
              }
          });
      },
      getValue : function() {
          return this.val;
      },
      getIndex : function() {
          return this.index;
      }
  }  

  var dd = new DropDown( $('#dd') );
  var dd = new DropDown( $('#dd-2') );

  $(document).click(function() {
    // all dropdowns
    $('.wrapper-dropdown').removeClass('active');
  });

  function DropDown(el) {
      this.dd = el;
      this.placeholder = this.dd.children('span');
      this.opts = this.dd.find('ul.dropdown > li');
      this.val = '';
      this.index = -1;
      this.initEvents();
  }

});