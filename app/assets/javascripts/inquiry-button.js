var showInquiry = function(){
  $('#inquiry').fadeIn("slow", function(){
    $(this).removeClass("hidden");
  });
}

$(document).on('click', '.close-inquiry', function(e){
  e.preventDefault();
  $('#inquiry').fadeOut("slow", function(){
    $(this).addClass("hidden");
  });
})
