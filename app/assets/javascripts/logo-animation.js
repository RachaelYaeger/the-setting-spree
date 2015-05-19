$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
        $(".logo-text-group").fadeOut();
    }
    else {
        $(".logo-text-group").fadeIn();
    }
});