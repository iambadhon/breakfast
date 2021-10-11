$(function () {

    //============================preloader section start============================//
    $(window).on("load", function () {
        $(".preloader").delay(500).fadeOut(800);
    });
    //============================preloader section end============================//

    //============================scroll to top section start============================//
    $(".scroll_to_top").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            1500
        );
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 100) {
            $(".scroll_to_top").fadeIn(800);
        } else {
            $(".scroll_to_top").fadeOut(800);
        }
    });

    //=====================scroll to top section end=====================//


    //=====================sticky menu section start=====================//
    $(".sticky_menu").waypoint(function (direction) {
        if (direction == "down") {
            $(".main_nav").addClass("nav_sticky");
        } else {
            $(".main_nav").removeClass("nav_sticky");
        }
    })

    //=====================sticky menu section end=====================//


    //=====================slick slider start=====================//
    $('.menu_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    //=====================slick slider end=====================//
});