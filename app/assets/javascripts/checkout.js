$(document).ready(function() {
  options = {}

  // Signup Form
  if($('#new_spree_user').length){
    $('#new_spree_user').parsley(options);
    $('#spree_user_email').attr('data-parsley-required', true);
    $('#spree_user_email').attr('data-parsley-type', 'email');
    $('#spree_user_password').attr('data-parsley-required', true);
    $('#spree_user_password').attr('data-parsley-minlength', 6);
    $('#spree_user_password_confirmation').attr('data-parsley-required', true);
    $('#spree_user_password_confirmation').attr('data-parsley-equalto', '#spree_user_password');
  }

  // Checkout Form
  if($('#checkout_form_address').length){
    $('#checkout_form_address').parsley(options);
    $('#billing .required input').attr('data-parsley-required', true);
    $('#shipping .required input').attr('data-parsley-required', "false");
    $('input[name="order[use_billing]"]').change(function(){
      if($(this).prop('checked')){
        $('#shipping .required input').attr('data-parsley-required', "false");
      } else {
        $('#shipping .required input').attr('data-parsley-required', true);
      }
    })
    $('.state-field').removeClass('required');
  }
});
