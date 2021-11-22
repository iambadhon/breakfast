$(function () {

    //============================nav btn section start============================//
    $('.nav_btn').click(function () {
        $('.main_nav').toggleClass('nav_show');
    })

    //============================nav btn section end============================//


    //============================scroll to top section start============================//
    $(".scroll_to_top").click(function () {
        $("html,css").animate({
            scrollTop: 0,
        }, 00);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop()

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
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
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


    //=====================smooth scroll start=====================//
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 00, );
                return false;
            }
        }
    });

    //=====================smooth scroll end=====================//

});