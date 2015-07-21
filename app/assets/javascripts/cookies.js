$(document).ready(function(){

  function slideEmailCatch(){
    $('#email-catch-wrapper, #email-catch-space-holder').slideDown();
  }

  if ($.cookie('show_subscribe') != "no"){
    setTimeout(slideEmailCatch, 2000);
  }

  $(document).on('click', '.close-email-catch', function(){
    $('#email-catch-wrapper, #email-catch-space-holder').slideUp();
    $.cookie('show_subscribe', "no", {expires: 1, path: "/"});
  })

  $(document).on('click', '#mc-embedded-subscribe', function(){
    $.cookie('show_subscribe', "no", {expires: 3600, path: "/" });
  })

})