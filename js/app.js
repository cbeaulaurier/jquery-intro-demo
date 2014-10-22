/* app.js
* main script file for our little application
* */

"use strict";

$(document).ready(function() {
    $('p a[href!="#top"]').attr('target', '_blank');       // links that are not the nav or back-to-top in new tab
    $('section').hide().fadeIn(1000);      // animation

    $('nav a, p a[href="#top"]').click(function(eventObject) {
        var targetElement = jQuery(this.hash);
        $('html, body').animate({
            scrollTop: targetElement.offset().top - navHeight
        }, 700);

        eventObject.preventDefault();
    });

    var nav = $('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    var navPlaceholder = $('.nav-placeholder');
    navPlaceholder.height(navHeight);

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > navTop) {
            nav.addClass('nav-fixed');
            navPlaceholder.show();
        } else {
            nav.removeClass('nav-fixed');
            navPlaceholder.hide();
        }
    });

    $('#exit-button').click(function() {
        $('#confirm-exit-modal').modal();
    });

    $('#confirm-exit-button').click(function() {
        window.location = 'http://ischool.uw.edu';
    });
});