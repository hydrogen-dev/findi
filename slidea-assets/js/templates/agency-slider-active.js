(function ($) {
    'use strict';

    $('#slidea').slidea({
        autoplay: true,
        layout: "fluid",
        layoutSettings: {
            anchor: 'center',
            size: 'fluid'
        },
        contentScaling: {
            enabled: true, // Default: false
            mode: 'responsive', // Modes: responsive, native
            factor: {
                xs: 1,
                sm: 1,
                md: 1,
                lg: 1,
                xlg: 1
            }
        },
        overlap: 0,
        progress: {
            enabled: false
        },
        controls: {
            enabled: true,
            thumbnail: false
        },
        canvas_parallax: true,
        content_parallax: true,
        content_scaling: true,
        slide: {
            '#default_slidea_slide_one': {
                background: {
                    0: {
                        duration: 7000
                    }
                },
                object: {
                    '#title-one': {
                        start: 1000,
                        initial: "y -100, opacity 0, easing easeOutQuad, duration 500",
                        out: "y -100, opacity 0, easing easeOutQuad, duration 500"
                    },
                    '#description-one': {
                        start: 1000,
                        initial: "y -100, opacity 0, easing easeOutQuad, duration 500",
                        out: "y -100, opacity 0, easing easeOutQuad, duration 500"
                    },
                    '#btn-one': {
                        start: 1000,
                        initial: "y 100, opacity 0, easing easeOutQuad, duration 500",
                        out: "y 100, opacity 0, easing easeOutQuad, duration 500"
                    }
                }
            },
            '#default_slidea_slide_two': {
                background: {
                    0: {
                        duration: 7000
                    }
                },
                object: {
                    '#title-two': {
                        start: 1000,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 600",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 600"
                    },
                    '#description-two': {
                        start: 1500,
                        initial: 'opacity 0, y 100%, duration 600',
                        out: 'opacity 0, y 100%, duration 600'
                    },
                    '#btn-two': {
                        start: 2000,
                        initial: 'opacity 0, easing easeInOutBack, x -50',
                        out: 'opacity 0, easing easeInOutBack, x -50'
                    }
                }
            }
        }
    });

})(jQuery);