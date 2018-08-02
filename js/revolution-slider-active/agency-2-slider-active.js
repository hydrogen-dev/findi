var tpj = jQuery;

var revapi975;
tpj(document).ready(function () {
    if (tpj("#rev_slider_975_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_975_1");
    } else {
        revapi975 = tpj("#rev_slider_975_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: "smart",
            parallax: {
                type: "scroll",
                origo: "enterpoint",
                speed: 400,
                levels: [5, 10, 15, 25, 20, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                type: "scroll",
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "60px",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
        jQuery('.lightsensor').on('mousemove', function () {
            var time = Math.round(Math.random() * 20) / 100,
                alpha = 0.7 + (Math.random() * 3) / 10;
            punchgs.TweenLite.to(jQuery('.lighton'), time, {
                autoAlpha: alpha,
                ease: punchgs.Power3.easeOut
            });
        });
    }
});