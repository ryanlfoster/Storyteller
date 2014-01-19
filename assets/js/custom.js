/**
 * Main JS file for The Storyteller behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
        $(".post-content").fitVids();
    });

	// Medium inspiried fade on sliding effect
	$(window).scroll(function(){
	    var top = ($(window).scrollTop() > 0) ? $(window).scrollTop() : 1;
	    $('.fade').stop(true, true).fadeTo(0, 100 / top);
	    $('.fade').css('top', top * 0.25);
	});

}(jQuery));
