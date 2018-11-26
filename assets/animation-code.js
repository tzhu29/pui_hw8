<!--Sidebar sliding animation-->
    <script type="text/javascript">
        $(window).on("load", function() {
            var offset = $("#sidebar").offset();
            var scrollDelay = 0
            $(window).scroll(function() {
                if ($(window).scrollTop() > offset.top) {
                    $("#sidebar").stop().animate({
                        marginTop: $(window).scrollTop() - offset.top
                    }, scrollDelay, "linear");
                } else {
                    $("#sidebar").stop().animate({
                        marginTop: 0
                    }, scrollDelay, "linear");
                };
            });
        });
    </script>