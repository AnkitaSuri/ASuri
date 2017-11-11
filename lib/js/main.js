let phrases = [
    "Philanthropy", 
    "Human Rights",
    "Community",
    "Nonprofit",
    "Impact"
];


(function($) {

    "use strict";

    jQuery(document).ready(function() {

        /*
         * -----------------------------------------------------------------
         *---------------------------Preloader------------------------------
         * -----------------------------------------------------------------
         */



        jQuery(window).on("load", function() {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(200).fadeOut('slow');
            $(window).scrollTop(0);
        });

        var element = $(".element");

        $(function() {
            element.typed({
                strings: phrases,
                typeSpeed: 100,
                loop: true,
            });
        });



        var animation1 = jQuery('.animation');

        animation1.waypoint(function() {
            var animation = $(this.element).attr('data-animation');
            $(this.element).css('opacity', '1');
            $(this.element).addClass("animated " + animation).delay(2000);
        }, {
            offset: '75%',
        });


        /*
         * -----------------------------------------------------------------
         *--------------------------stellar.js------------------------------
         * -----------------------------------------------------------------
         */

        $(window).stellar();



    });

})(jQuery);
