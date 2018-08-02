(function ($) {
    'use strict';

    $('#slidea').slidea({
        autoplay: true,
        layout: "fluid",
        layoutSettings: {
            anchor: 'center',
            size: ''
        },
        scroller: true,
        delay: 4000,
        overlap: 0,
        progress: {
            enabled: false
        },
        controls: {
            enabled: true
        },
        canvas_parallax: true,
        content_parallax: true,
        content_scaling: true,
        animation: {
            initial: "opacity 0, rotationX 90, scale 2, duration 500",
            out: "opacity 0, rotationX -90, scale 2, duration 500"
        },
        slide: {
            '#slide-destroy-limits': {
                object: {
                    '#slide-limits-text': {
                        start: 900,
                        initial: "y 100%, opacity 0, easing easeOutElastic, duration 500",
                        out: 'rotationX 360'
                    },
                    '#slide-destroy-text': {
                        start: 700,
                        initial: "y -100%, rotationX 40, scale 0.1, opacity 0, easing easeOutQuad, duration 600",
                        out: "y -100%, rotationX 40, scale 0.1, opacity 0, easing easeOutQuad, duration 600"
                    },
                    '#slide-destroy-description': {
                        start: 1400,
                        initial: 'opacity 0, y 100%',
                        out: 'opacity 0, y 100%'
                    }
                }
            },
            '#slide-towel': {
                background: {
                    0: {
                        duration: 5000
                    }
                },
                layer: {
                    '#slide-towel-girl': {
                        right: 100,
                        top: 0,
                        start: 1000,
                        initial: 'x 150%, duration 2000',
                        out: 'x 150%, duration 1000'
                    },
                    '#slide-towel-pack': {
                        left: 0,
                        bottom: 0,
                        start: 0,
                        initial: 'x -100%, duration 1000',
                        out: 'x -100%, duration 1000'
                    }
                },
                object: {
                    '#slide-towel-description': {
                        start: 600,
                        initial: 'opacity 0, y 100%',
                        out: 'opacity 0, y 100%'
                    }
                }
            }
        }
    });

})(jQuery);