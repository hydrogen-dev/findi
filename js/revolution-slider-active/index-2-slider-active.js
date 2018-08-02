var tpj = jQuery;

var revapi1060;
tpj(document).ready(function () {
    if (tpj("#rev_slider_1060_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1060_1");
    } else {
        revapi1060 = tpj("#rev_slider_1060_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "vertical",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "vertical",
                    drag_block_vertical: false
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1400, 1240, 778, 480],
            gridheight: [768, 768, 960, 720],
            lazyType: "none",
            parallax: {
                type: "mouse+scroll",
                origo: "slidercenter",
                speed: 2000,
                levels: [1, 2, 3, 20, 25, 30, 35, 40, 45, 50, 46, 47, 48, 49, 50, 55],
                type: "mouse+scroll",
                disable_onmobile: "on"
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
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
    }
}); /*ready*/