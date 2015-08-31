/*jslint indent: 4, maxlen: 100, nomen: true */
/*global jQuery, window, document, _ */

(function ($, win, doc) {
    'use strict';

    var // Constants
        ANIM_TIME = 1000 * 2 / 3,

        // Functions
        onArrowUp,
        onArrowDown,

        // Variables
        scrollEl = $('body, html'),
        winEl = $(win),
        docEl = $(doc);

    onArrowUp = _.throttle(function () {
        scrollEl.animate({
            scrollTop: winEl.scrollTop() - winEl.height()
        }, ANIM_TIME);
    }, ANIM_TIME, {trailing: false});

    onArrowDown = _.throttle(function () {
        scrollEl.animate({
            scrollTop: winEl.scrollTop() + winEl.height()
        }, ANIM_TIME);
    }, ANIM_TIME, {trailing: false});

    docEl.keydown(function (e) {
        switch (e.which) {
        case 32: // space
            onArrowDown();
            break;

        case 38: // up
            onArrowUp();
            break;

        case 40: // down
            onArrowDown();
            break;

        default:
            return; // exit this handler for other keys
        }

        e.preventDefault();
    });
}(jQuery, window, document));
