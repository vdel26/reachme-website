var ReachMe = (function ($, win, doc, undefined) {
    var root = {},
        d = $(doc),
        w = $(win),
        nav = $('.top-bar'),
        header = $('header');

    root.init = function () {
        d.foundation();
        this.stickyNav();

        // attach event listeners for navbar
        $('.top-bar a').click(function (evt) {
            evt.preventDefault();
            root.smoothScroll($(evt.target.hash), 400);
        });
    };

    root.stickyNav = function () {
        var stickyHeight = nav.offset().top;

        w.resize(function () {
            stickyHeight = nav.offset().top;
        });

        w.scroll(function () {
            if ($('html').hasClass('no-touch')) {
                if (w.scrollTop() > stickyHeight) {
                    nav.addClass('stickybar');
                    header.addClass('stickybar');
                }
                else {
                    nav.removeClass('stickybar');
                    header.removeClass('stickybar');
                }
            }
        });
    };

    root.smoothScroll = function (elem, duration) {
        Foundation.lib_methods.scrollTo(w, elem.offset().top - nav.height(), duration);
    };

    return root;
}($, window, document));

$(document).ready(function (){
    ReachMe.init();
});
