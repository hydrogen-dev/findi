(function ($) {
    'use strict';

    $('#slidea').slidea({
        layout: 'fluid',
        overlap: 0.75,
        duration: 7000,
        autoplay: true,
        controls: {
            enabled: true,
            thumbnail: true
        },
        animation: {
            duration: 1000,
            initial: 'rotationX 30, z 1000, scale 2, opacity 0, ease easeOutQuad',
            out: 'scale 0.8, opacity 0, ease easeInQuad'
        },
        slide: {
            '#slide-artboard': {
                background: {
                    0: {
                        duration: 10000,
                        initial: 'rotationX 20, opacity 0',
                        out: 'rotationX 20, opacity 0'
                    }
                },
                layer: {
                    '#slide-artboard-chalkboard': {
                        width: 1435,
                        height: 826,
                        right: 120,
                        bottom: 180,
                        start: 500,
                        initial: 'y -200%, easing easeOutQuad',
                        out: 'y -200%, easing easeInQuad'
                    },
                    '#slide-artboard-tree': {
                        width: 543,
                        height: 657,
                        right: 0,
                        bottom: 150,
                        start: 1500,
                        initial: 'x 100%, easing easeOutQuad',
                        out: 'x 100%, easing easeInQuad'
                    },
                    '#slide-artboard-tape': {
                        width: 267,
                        height: 460,
                        left: 0,
                        bottom: 180,
                        start: 7000,
                        initial: 'y -300%, easing easeOutBounce, duration 2000',
                        out: 'x -200%, easing easeInQuad'
                    },
                    '#slide-artboard-clock': {
                        width: 265,
                        height: 319,
                        right: 0,
                        bottom: 130,
                        start: 6000,
                        initial: 'x 100%, easing easeOutQuad',
                        out: 'x 100%, easing easeInQuad'
                    },
                    '#slide-artboard-needles': {
                        width: 458,
                        height: 66,
                        right: 300,
                        bottom: 130,
                        start: 6500,
                        initial: 'y -2000, easing easeOutBounce',
                        out: 'y -2000, easing easeInQuad'
                    },
                    '#slide-artboard-hanger': {
                        width: 318,
                        height: 106,
                        left: 550,
                        bottom: 150,
                        start: 6000,
                        initial: 'x -500%, easing easeOutQuad',
                        out: 'x -500%, easing easeInQuad'
                    },
                    '#slide-artboard-mech': {
                        width: 611,
                        height: 250,
                        left: 0,
                        bottom: 160,
                        start: 6500,
                        initial: 'x -100%, easing easeOutQuad',
                        out: 'x -100%, easing easeInQuad'
                    },
                    '#slide-artboard-toy': {
                        width: 596,
                        height: 356,
                        left: 200,
                        bottom: 150,
                        start: 7000,
                        initial: 'x -200%, easing easeOutQuad, duration 1000',
                        7800: 'rotationZ 10, y 5%, duration 300',
                        8100: 'rotationZ 0, y 0%, duration 500, easing easeOutBounce',
                        out: 'x -200%, easing easeInQuad'
                    }
                },
                object: {
                    '#slide-artboard-welcome': {
                        start: 1500,
                        initial: 'y 100%, opacity 0, duration 1000',
                        4000: 'opacity 0, duration 500',
                        4500: 'z 0',
                        4600: 'opacity 1, duration 1000',
                        callback: function (element, index) {
                            switch (index) {
                            case 'initial':
                                $('.creative-title', element).html('Welcome to <span>Classy</span>');
                                break;
                            case '4500':
                                $('.creative-title', element).html('The canvas <br> for your <span>Creativity</span>');
                            }
                        }
                    }
                }
            },
            '#slide-video': {
                background: {
                    0: {
                        duration: 10000,
                        initial: 'scale 1.5, opacity 0',
                        out: 'rotationX 45, opacity 0'
                    }
                },
                layer: {
                    '#slide-video-macbook': {
                        width: 1485,
                        height: 1030,
                        top: 300,
                        left: 60,
                        start: 3500,
                        initial: 'z 300, opacity 0',
                        out: 'y -500'
                    },
                    '#slide-video-box': {
                        width: 421,
                        height: 706,
                        top: 80,
                        left: 0,
                        start: 1000,
                        initial: 'x -100%',
                        out: 'x -100%'
                    },
                    '#slide-video-pens': {
                        width: 371,
                        height: 479,
                        bottom: 100,
                        right: 50,
                        start: 1300,
                        initial: 'x 150%',
                        out: 'x 150%'
                    },
                    '#slide-video-letterpress': {
                        width: 503,
                        height: 262,
                        bottom: 0,
                        left: 800,
                        start: 1600,
                        initial: 'scale 2, opacity 0, easing easeOutBounce',
                        out: 'scale 2'
                    },
                    '#slide-video-video': {
                        width: 908,
                        height: 568,
                        top: 357,
                        left: 515,
                        start: 4500,
                        initial: 'scale 0.75, opacity 0, duration 1000',
                        out: 'y -500'
                    }
                },
                object: {
                    '#slide-video-video-title': {
                        initial: 'scale 3, rotationX 30, opacity 0',
                        3500: 'opacity 0, scale 2',
                        4500: 'z 0',
                        callback: function (element, index) {
                            var parent;
                            parent = element.closest('.slidea-content-wrapper');
                            switch (index) {
                            case 'initial':
                                parent.css({
                                    display: 'block'
                                });
                                break;
                            case '4500':
                                parent.css({
                                    display: 'none'
                                });
                            }
                        }
                    }
                }
            },
            '#slide-responsive': {
                background: {
                    0: {
                        duration: 6000,
                        initial: 'rotationX 30, rotationY 30, scale 0.5, opacity 0',
                        out: 'scale 1.2, opacity 0'
                    }
                },
                layer: {
                    '#slide-responsive-macbook': {
                        width: 1303,
                        height: 1142,
                        top: 50,
                        right: 0,
                        start: 500,
                        initial: 'x 100%, y -100%, opacity 0',
                        out: 'x 20%, y -20%, opacity 0'
                    },
                    '#slide-responsive-ipad': {
                        width: 938,
                        height: 377,
                        bottom: 0,
                        left: 165,
                        start: 1200,
                        initial: 'y 100%, x 80%, opacity 0, duration 700',
                        out: 'y 20%, x 18%, opacity 0, duration 700'
                    },
                    '#slide-responsive-iphone': {
                        width: 504,
                        height: 319,
                        bottom: 300,
                        left: 0,
                        start: 1900,
                        initial: 'x -100%, y -100%, opacity 0, duration 700',
                        out: 'x -20%, y -20%, opacity 0, duration 700'
                    },
                    '#slide-responsive-lamp': {
                        width: 1291,
                        height: 1002,
                        top: 0,
                        left: 0,
                        start: 2700,
                        initial: 'y -100%, opacity 0, easing easeOutBounce, duration 1500',
                        out: 'y -20%, opacity 0, duration 700'
                    }
                },
                object: {}
            },
            '#slide-animations': {
                background: {
                    0: {
                        duration: 7500,
                        initial: 'rotationX -30, rotationY -30, scale 0.5, opacity 0',
                        out: 'rotationX 10, scale 1.2, opacity 0'
                    }
                },
                layer: {
                    '#slide-animations-paper': {
                        width: 1383,
                        height: 1155,
                        top: 220,
                        left: 195,
                        start: 500,
                        initial: 'scale 1.5, z 300, opacity 0',
                        out: 'y -50%, opacity 0'
                    },
                    '#slide-animations-pencils': {
                        width: 461,
                        height: 470,
                        top: 70,
                        right: 305,
                        start: 4500,
                        initial: 'rotationZ 90, rotationY 30, scale 2.5, z 300, opacity 0, easing easeOutBounce',
                        5500: 'rotationZ 360, duration 1000',
                        out: 'y -100, opacity 0'
                    },
                    '#slide-animations-pencil': {
                        width: 533,
                        height: 212,
                        bottom: 220,
                        left: 355,
                        start: 2700,
                        initial: 'y 300%, opacity 0, easing easeOutQuad',
                        3500: 'rotationX 10, duration 300',
                        3800: 'rotationX 0, duration 300',
                        out: 'y 300%, opacity 0'
                    },
                    '#slide-animations-bottle': {
                        width: 75,
                        height: 284,
                        top: 820,
                        right: 160,
                        start: 2700,
                        initial: 'x 300%, opacity 0, easing easeOutQuad',
                        out: 'x 300%, opacity 0'
                    },
                    '#slide-animations-ink': {
                        width: 215,
                        height: 374,
                        top: 780,
                        right: 20,
                        start: 2900,
                        initial: 'y 200%, opacity 0, easing easeOutQuad',
                        out: 'y 200%, opacity 0'
                    },
                    '#slide-animations-cogwheel': {
                        width: 215,
                        height: 374,
                        top: 400,
                        right: 0,
                        start: 3200,
                        initial: 'x 200%, opacity 0, easing easeOutQuad',
                        out: 'x 200%, opacity 0'
                    },
                    '#slide-animations-tree': {
                        width: 306,
                        height: 501,
                        top: 180,
                        left: 0,
                        start: 3500,
                        initial: 'z 300, opacity 0, easing easeOutBounce, duration 2000',
                        out: 'z 300, opacity 0'
                    },
                    '#slide-animations-banana': {
                        width: 298,
                        height: 260,
                        bottom: 300,
                        left: 0,
                        start: 3500,
                        initial: 'x -300, opacity 0',
                        out: 'x -300, opacity 0'
                    }
                },
                object: {
                    '#slide-animations-title': {
                        start: 1500,
                        initial: 'y -100%, opacity 0',
                        2500: 'rotationZ 5, scale 1.6',
                        3500: 'rotationZ -5, scale 0.7',
                        4500: 'tada',
                        out: 'y 100%, opacity 0'
                    }
                }
            }
        }
    });
})(jQuery);