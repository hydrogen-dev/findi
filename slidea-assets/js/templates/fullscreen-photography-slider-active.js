(function ($) {
    'use strict';
    
    $('#slidea').slidea({
        autoplay: false,
        layout: "fluid",
        delay: 9000,
        contentScaling: {
            enabled: true,
            factor: {
                xs: 0.75
            }
        },
        controls: {
            enabled: true
        },
        slide: {
            '.slidea-slide': {
                object: {
                    '.slidea-dot': {
                        initial: "scale 0.1, easing easeOutBounce, opacity 0, duration 1000"
                    },
                    '.slidea-title': {
                        initial: "x 30, opacity 0, duration 1000"
                    },
                    '.slidea-title-lg': {
                        initial: "x 30, opacity 0, duration 1000"
                    },                    
                    '#menu-title': {
                        initial: "x 30, opacity 0, duration 1000"
                    },                    
                    '#photography-cf': {
                        start: 500,
                        initial: "x 30, opacity 0, duration 1000"
                    },
                    '.slidea-description': {
                        initial: "x -30, opacity 0, duration 1000"
                    },
                    '.slidea-description-lg': {
                        initial: "x -30, opacity 0, duration 1000"
                    },
                    '.slidea-description-xlg': {
                        initial: "x -30, opacity 0, duration 1000"
                    },
                    '.slidea-portfolio-image': {
                        initial: "y -30, opacity 0, duration 1000",
                        "in": 'opacity 0.66',
                        callback: function (element, index) {
                            if (index === 'initial') {
                                element.removeClass('slidea-portfolio-image-ready');
                            } else if (index !== 'initial') {
                                setTimeout((function (_this) {
                                    return function () {
                                        element.addClass('slidea-portfolio-image-ready');
                                    };
                                })(this), 1200);
                            }
                        }
                    },
                    '.slidea-btn': {
                        initial: "x 30, opacity 0, duration 1000"
                    }
                }
            }
        },
        pagination: {
            enabled: true,
            position: 'left'
        }
    });
    
})(jQuery);