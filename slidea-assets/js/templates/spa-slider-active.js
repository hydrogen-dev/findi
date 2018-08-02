(function ($) {
    'use strict';
    
    $('#slidea').slidea({
        autoplay: true,
        layout: "fluid",
        layoutSettings: {
            anchor: 'center',
            size: 'fullscreen'
        },
        contentScaling: {
            enabled: true,
            mode: 'responsive',
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
            '#spa_slider_one': {
                background: {
                    0: {
                        duration: 7000,
                        initial: "x 0, scale 1.5, opacity 0, duration 2000",
                        out: "y 0, scale 1, opacity 0, duration 1000"
                    }
                }, 
                object: {
                    '#sub-title-one': {
                        start: 2000,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 500"
                    },
                    '#title-one': {
                        start: 2500,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 500"
                    },
                    '#description-one': {
                        start: 3000,
                        initial: 'opacity 0, y -50',
                        out: 'opacity 0, y -50'
                    },
                    '#btn-one': {
                        start: 3500,
                        initial: 'opacity 0, y -50',
                        out: 'opacity 0, y -50'
                    }
                },
            },
            '#spa_slider_two': {
                background: {
                    0: {
                        duration: 7000
                    }
                },
                object: {
                    '#sub-title-two': {
                        start: 2000,
                        initial: "opacity 0, y 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y 50, easing easeOutQuad, duration 500"
                    },
                    '#title-two': {
                        start: 2500,
                        initial: "opacity 0, y 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y 50, easing easeOutQuad, duration 500"
                    },
                    '#description-two': {
                        start: 3000,
                        initial: 'opacity 0, y 50',
                        out: 'opacity 0, y 50'
                    },
                    '#btn-two': {
                        start: 3500,
                        initial: 'opacity 0, y 50',
                        out: 'opacity 0, y 50'
                    }
                },
                layer: {
                    '#spa-layer-2': {
                        start: 500,
                        initial: 'opacity 0, y 100%, duration 1000',
                        out: 'opacity 0, y 100%, duration 1000',
                        left: 0,
                        bottom: 0
                    }
                }
            }
        }
    });

})(jQuery);