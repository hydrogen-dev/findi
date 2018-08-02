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
            '#medical_slide_one': {
                background: {
                    0: {
                        duration: 10000,
                        initial: "y -300, opacity 0, easing easeInOutQuart, duration 1000",
                        out: "y 300, opacity 0.5, easing easeInOutQuart, duration 1000"
                    }
                },               
                object: {
                    '#title-one': {
                        start: 1000,
                        initial: "y -50, opacity 0, easing easeInOutQuad, duration 500",
                        out: "y 50, opacity 0, easing easeInOutQuad, duration 500"
                    },
                    '#description-one': {
                        start: 2000,
                        initial: "y -50, opacity 0, easing easeInOutQuad, duration 500",
                        out: "y 50, opacity 0, easing easeInOutQuad, duration 500"
                    },
                    '#btn-one': {
                        start: 3000,
                        initial: "y -50, opacity 0, easing easeInOutQuad, duration 500",
                        out: "y 50, opacity 0, easing easeInOutQuad, duration 500"
                    }
                }
            },
            '#medical_slide_two': {
                background: {
                     0: {
                        duration: 10000,
                        initial: "y -300, opacity 0, easing easeInOutQuart, duration 1000",
                        out: "y 300, opacity 0.5, easing easeInOutQuart, duration 1000"
                    }
                },
                object: {
                    '#title-two': {
                        start: 1000,
                        initial: "opacity 0, y 50, easing easeInOutQuart, duration 500",
                        out: "opacity 0, y 50, easing easeInOutQuart, duration 500"
                    },
                    '#description-two': {
                        start: 2000,
                        initial: 'opacity 0, easing easeInOutQuart, y 50',
                        out: 'opacity 0, easing easeInOutQuart, y 50'
                    },
                    '#btn-two': {
                        start: 3000,
                        initial: 'opacity 0, easing easeInOutQuart, y 50',
                        out: 'opacity 0, easing easeInOutQuart, y 50'
                    }
                }
            }
        }
    });

})(jQuery);