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
            thumbnail: true
        },
        canvas_parallax: true,
        content_parallax: true,
        content_scaling: true,
        slide: {
            '#minimal_slidea_slide_one': {
                background: {
                    0: {
                        duration: 6000
                    }
                },
                object: {
                    '#minimal-title-one': {
                        start: 1000,
                        initial: "x 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500",
                        out: "x 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500"
                    },
                    '#minimal-description-one': {
                        start: 1500,
                        initial: "x 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500",
                        out: "x 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500"
                    },
                    '#minimal-btn-one': {
                        start: 2000,
                        initial: "x 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500",
                        out: "x 10%, opacity 0, duration 1000, easing easeOutQuad, duration 500"
                    }
                }
            },
            '#minimal_slidea_slide_two': {
                background: {
                    0: {
                        duration: 6000
                    }
                },
                object: {
                    '#minimal-title-two': {
                        start: 1000,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 500"
                    },
                    '#minimal-description-two': {
                        start: 1500,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 500"
                    },
                    '#minimal-btn-two': {
                        start: 2000,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 500"
                    }
                }
            },
            '#minimal_slidea_slide_three': {
                background: {
                    0: {
                        duration: 6000
                    }
                },
                object: {
                    '#minimal-title-three': {
                        start: 1000,
                        initial: "opacity 0, y 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y 50, easing easeOutQuad, duration 500"
                    },
                    '#minimal-description-three': {
                        start: 1500,
                        initial: "opacity 0, y 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y 50, easing easeOutQuad, duration 500"
                    },
                    '#minimal-btn-three': {
                        start: 2000,
                        initial: "opacity 0, y 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y 50, easing easeOutQuad, duration 500"
                    }
                }
            }
        }
    });

})(jQuery);