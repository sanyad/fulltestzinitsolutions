var st;
$(document).ready(function() {

    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    $(".top_mnu li a").click(function () {
        $(".top_mnu").fadeOut();
        $(".sandwich").toggleClass("active");
    }).append("<span>");

    $(".toggle_mnu").click(function () {
        if($(".top_mnu").is(":visible")) {
            $(".top_mnu").fadeOut();
        } else {
            $(".top_mnu").fadeIn();
        }
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        prevArrow: $('.prev-btn'),
        nextArrow: $('.next-btn')
    });

    $(".animationLeft").animated("fadeInLeft", "fadeOutLEft");
    $(".animationRight").animated("fadeInRight","fadeOutRight");

    $(".selectFontPage a").on("click", function (e) {
        e.preventDefault();
        $(".selectFontPage a").removeClass("active");
        $(this).addClass("active");
    });
    $("#fz10").on("click", function (e) {
        e.preventDefault();
        $("#menu li a, .slider--text").css("font-size", "12px");
    });

    $("#fz12").on("click", function (e) {
        e.preventDefault();
        $("#menu li a, .slider--text").css("font-size", "14px");
    });

    $("#fz14").on("click", function (e) {
        e.preventDefault();
        $("#menu li a, .slider--text").css("font-size", "16px");
    });
});

$(window).scroll(function () {
    st = $(this).scrollTop();

    $('.vision-bg-parallax').css({
        "transform" : "translate(0%, " + st/12 + "%"
    });

});


