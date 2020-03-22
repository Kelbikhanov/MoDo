$(function() {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffSet = $(window).scrollTop();


        /*Fixed Header */
        checkscroll(scrollOffSet);
    $(window).on("scroll", function() {
        scrollOffSet = $(this).scrollTop();
        scrollOffSet();
    });

    function checkscroll(scrollOffSet) {
        if(scrollOffSet >= introH) {
            header.addClass("fixed");
        }else {
            header.removeClass("fixed");
        }
    }

        /*Smooth Scroll */

        $("[data-scroll]").on("click", function(event){
            event.preventDefault();

            var $this = $(this),
                blockId = $this.data('scroll'),
                blockOffset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active");

            $("html, body").animate ({
                scrollTop: blockOffset 
            }, 500);
        });




        /*Menu Nv Toggle */

        $("#nav_toggle").on("click", function(event) {
            event.preventDefault();

            $(this).toggleClass("active");
            $("#nav").toggleClass("active");

        });


 
        /*Collapse */

        $("[data-collapse]").on("click", function(event) {
            event.preventDefault();

            var $this = $(this),
                blockId = $this.data('collapse');

                $(this).toggleClass("active");

        });
});