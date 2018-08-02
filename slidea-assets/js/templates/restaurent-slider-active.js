(function ($) {
    'use strict';

    $('#slidea').slidea({
        autoplay: false,
        layout: "fluid",
        scroller: {
            enabled: true
        },
        contentScaling: {
            enabled: true,
            factor: {
                xs: 0.75
            }
        },
        progress: {
            enabled: false
        },
        pagination: {
            enabled: false
        },
        controls: {
            enabled: true,
            thumbnail: false
        },
        delay: 9000,
        slide: {
            '.slidea-slide': {
                object: {
                    '.slidea-title': {
                        initial: "y -100%, opacity 0, duration 1000"
                    },
                    '.slidea-title-lg': {
                        initial: "y 100%, opacity 0, duration 1000"
                    },
                    '#menu-title': {
                        initial: "y 100%, opacity 0, duration 1000"
                    },
                    '.slidea-description': {
                        initial: "y -100%, opacity 0, duration 1000"
                    },
                    '.slidea-description-lg': {
                        initial: "y -100%, opacity 0, duration 1000"
                    },
                    '.slidea-description-xlg': {
                        initial: "y -100%, opacity 0, duration 1000"
                    },
                    '.menu-title': {
                        initial: "y 100%, opacity 0, duration 1000"
                    },
                    '.menu-description': {
                        initial: "y 100%, opacity 0, duration 1000"
                    },
                    '.menu-price': {
                        initial: "y 100%, opacity 0, duration 1000"
                    }
                }
            },
            '#menu-slide': {
                object: {
                    '.slidea-description': {
                        initial: "y 100%, opacity 0, duration 1000"
                    }
                }
            }
        }
    });

})(jQuery);