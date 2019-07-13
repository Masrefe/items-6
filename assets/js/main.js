$(function () {
  "use strict";


   /* meanmenu */
    $('#main-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

$(".skill-carosel").owlCarousel({
            items:1,
            nav:false,
            margin:0,
            smartSpeed:2000,
            loop:true,
            autoplay:false,
            dots:true,
            navText: [
                "<i class='fa fa-long-arrow-left'></i>",
                "<i class='fa fa-long-arrow-right'></i>"
            ],
        });


   var mixer = mixitup("#portfolio-list");

});



