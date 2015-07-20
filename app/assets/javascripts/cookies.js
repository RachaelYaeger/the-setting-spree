$(document).ready(function(){

  function slideEmailCatch(){
    $('#email-catch-wrapper').slideDown();
    console.log("the show cookie value:", $.cookie("show cookie"));
  }

  if ($.cookie('show_subscribe') != "no"){
    setTimeout(slideEmailCatch, 2000);
  }

  $(document).on('click', '.close-email-catch', function(){
    $('#email-catch-wrapper').slideUp();
    $.cookie('show_subscribe', "no", {expires: 1, path: "/"});
  })

  $(document).on('click', '#mc-embedded-subscribe', function(){
    console.log("clicked subscribe");
    $.cookie('show_subscribe', "no", {expires: 3600, path: "/" });
  })

})