(function ($) {
    'use strict';

    $('#slidea').slidea({
        autoplay: true,
        layout: "fluid",
        layoutSettings: {
            anchor: 'center',
            size: ''
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
            '#education_slider_one': {
                background: {
                    0: {
                        duration: 7000,
                        initial: "x 10%, opacity 0, easing easeOutQuad, duration 1000",
                        out: "x -10%, opacity 0, easing easeOutQuad, duration 1000"
                    }
                },
                object: {
                    '#education-title-one': {
                        start: 1000,
                        initial: "x 10%, opacity 0, easing easeOutQuad, duration 500",
                        out: "x 10%, opacity 0, easing easeOutQuad, duration 500"
                    },
                    '#education-description-one': {
                        start: 1500,
                        initial: "x 10%, opacity 0, easing easeOutQuad, duration 500",
                        out: "x 10%, opacity 0, easing easeOutQuad, duration 500"
                    },
                    '#education-btn-one': {
                        start: 2000,
                        initial: "x 10%, opacity 0, easing easeOutQuad, duration 500",
                        out: "x 10%, opacity 0, easing easeOutQuad, duration 500"
                    }
                }
            },
            '#education_slider_two': {
                background: {
                    0: {
                        duration: 7000,
                        initial: "x 10%, opacity 0, easing easeOutQuad, duration 1000",
                        out: "x -10%, opacity 0, easing easeOutQuad, duration 1000"
                    }
                },
                object: {
                    '#education-title-two': {
                        start: 1000,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 500"
                    },
                    '#education-description-two': {
                        start: 1500,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 500"
                    },
                    '#education-btn-two': {
                        start: 2000,
                        initial: "opacity 0, y -50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y -50, easing easeOutQuad, duration 500"
                    }
                }
            },
            '#education_slider_three': {
                background: {
                    0: {
                        duration: 7000,
                        initial: "x 10%, opacity 0, easing easeOutQuad, duration 1000",
                        out: "x -10%, opacity 0, easing easeOutQuad, duration 1000"
                    }
                },
                object: {
                    '#education-title-three': {
                        start: 1000,
                        initial: "opacity 0, y 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y 50, easing easeOutQuad, duration 500"
                    },
                    '#education-description-three': {
                        start: 1500,
                        initial: "opacity 0, y 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y 50, easing easeOutQuad, duration 500"
                    },
                    '#education-btn-three': {
                        start: 2000,
                        initial: "opacity 0, y 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y 50, easing easeOutQuad, duration 500"
                    }
                }
            }
        }
    });

})(jQuery);