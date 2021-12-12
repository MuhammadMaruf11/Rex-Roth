(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {

        let win = $(window);
        let sticky_id = $(".header__area");
        win.on('scroll', function () {
            let scroll = win.scrollTop();
            if (scroll < 30) {
                sticky_id.removeClass("sticky-header");
            } else {
                sticky_id.addClass("sticky-header");
            }
        });


        //------------ Offcanvas menu -------------

        $('.menu_men_open').on('click', function () {
            $('body').addClass('active');
        });
        $('.menu_close, .overaly-main').on('click', function () {
            $('body').removeClass('active');
        });

        $('.list-has-dropdown > a').on('click', function (e) {
            e.preventDefault();
            $(this).parent().toggleClass('active');
            $(this).parent().children('ul').slideToggle();
        });

        $(".input-checkbox input[type='checkbox']").change(function () {
            if (this.checked) {
                $(this).parent().addClass('active');
            } else {
                $(this).parent().removeClass('active');
            }
        });

        $(".shipping-checkmark input[type='checkbox']").change(function () {
            if (this.checked) {
                $(".shipping-fields").slideUp();
            } else {
                $(".shipping-fields").slideDown();
            }
        });

        $(".input-radio input[type='radio']").change(function () {
            if (this.checked) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });


        $(".quantity .input-wrap,.products-amount .input-wrap").on("click", ".plus, .minus",
            function () {
                // Get current quantity values
                let qty = $(this).closest(".input-wrap").find(".qty");
                let val = parseFloat(qty.val());
                let max = parseFloat(qty.attr("max"));
                let min = parseFloat(qty.attr("min"));
                let step = parseFloat(qty.attr("step"));

                // Change the value if plus or minus
                if ($(this).is(".plus")) {
                    if (max && max <= val) {
                        qty.val(max);

                    } else {
                        qty.val(val + step).trigger("change");
                    }
                } else {
                    if (min && min >= val) {
                        qty.val(min);
                    } else if (val > 1) {
                        qty.val(val - step).trigger("change");
                    }
                }
            }
        );



        //------------ Hero slider -------------

        $('.hero-slier-main').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dot: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })



        //---owl dots number-----

        var i = 1;

        $('.hero-slier-main.owl-carousel .owl-dot').each(function () {
            $(this).text(i);
            i++;
        });





    }); //---document-ready-----

     /*------------------------------------
       venobox plugin
   --------------------------------------*/

   $('.venobox').venobox();





}(jQuery));