(function ($) {
    'use strict';

    var $window = $(window);

    // Welcome Slider Active Code
    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 500,
            autoplayHoverPause: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });
        var wel_slides = $('.welcome_slides');
        wel_slides.owlCarousel();
        wel_slides.on('translate.owl.carousel', function (event) {
            $('.owl-item .single_slide .slide_text h2').removeClass('animated').hide();
            $('.owl-item .single_slide .slide_text h3').removeClass('animated').hide();
            $('.owl-item .single_slide .slide_text .btn').removeClass('animated').hide();
        })
        wel_slides.on('translated.owl.carousel', function (event) {
            $('.owl-item.active .single_slide .slide_text h2').addClass('animated custom_slideInUp').show();
            $('.owl-item.active .single_slide .slide_text h3').addClass('animated custom_slideInUp_2').show();
            $('.owl-item.active .single_slide .slide_text .btn').addClass('animated custom_slideInUp_btn_1').show();
        })

        // Testimonials, Special Dishes & Blog Post Slider Active Code
        $(".testimonials, .special_dishes_slider, .blog_post_slider").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 1500,
            autoplayTimeout: 8000
        });
        // Minimal Portfolio Slider Active Code
        $(".mini_port_testimonials").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 800,
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
        // Partner Company Slider Active Code
        $(".partner_company_slides").owlCarousel({
            items: 5,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            center: true,
            autoplay: true,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
        // Creative Gallery Slider Active Code
        $(".creative_gallery_slider").owlCarousel({
            items: 4,
            margin: 0,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 4
                }
            }
        });
        // Client Slideshow Slider Active Code
        $(".clients-slideshow").owlCarousel({
            items: 6,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 6
                }
            }
        });
        // App Screenshots Slider Active Code
        $(".app_screenshots").owlCarousel({
            items: 4,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                576: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
        // Testimonials Slider Active Code
        $(".classy-testimonial-area.testimonial-1, .classy-testimonial-area.testimonial-2").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
        // Fitness Classes Slider Active Code (For Fitness Version)
        if ($.fn.owlCarousel) {
            $(".fitness_class_slides, .fitness_advisor_slides").owlCarousel({
                items: 3,
                margin: 30,
                loop: true,
                nav: true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                dots: false,
                autoplay: false,
                autoplayTimeout: 8000,
                smartSpeed: 800,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }
    }

    // Navigation Active Code
    if ($.fn.navigation) {
        $("#navigation1").navigation();
        $("#always-hidden-nav").navigation({
            hidden: true
        });
    }
    
    $(".always-btn-show").click(function () {
        $("#always-hidden-nav").data("navigation").toggleOffcanvas();
    });

    if ($.fn.popover) {
        $('[data-toggle="popover"]').popover()
    }

    // Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                preload: [0, 2],
                navigateByImgClick: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                tPrev: 'Previous (Left arrow key)', // title for left button
                tNext: 'Next (Right arrow key)', // title for right button
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
            }
        });
        $('.foo_latest_works_img').magnificPopup({
            type: 'image'
        });
    }

    // Onepage Nav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 1500,
            easing: 'easeInOutQuart'
        });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="ion-ios-arrow-thin-up" aria-hidden="true"></i>'
        });
    }

    // Counterup Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Footer Reveal Active Code
    if ($.fn.footerReveal) {
        $('.footer_area').footerReveal({
            shadowOpacity: 0.2
        });
    }

    // Countdown Active Code
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $(this).find(".days").html(event.strftime("%D"));
            $(this).find(".hours").html(event.strftime("%H"));
            $(this).find(".minutes").html(event.strftime("%M"));
            $(this).find(".seconds").html(event.strftime("%S"));
        });
    });

    // Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.gallery_full_width_images_area, .portfolio-column, .blog-masonary').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.gallery_full_width_images_area, .portfolio-column, .blog-masonary').isotope({
                itemSelector: '.single_gallery_item, .column_single_gallery_item, .sb_masonary_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item, .column_single_gallery_item, .sb_masonary_item'
                }
            });
        });
    }

    // Parallax active js
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // Progress Bar Active Code
    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#ff9800',
            animateOnResize: true
        });
        $('#bar2').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#00BCD4',
            animateOnResize: true
        });
        $('#bar3').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#2c3e50',
            animateOnResize: true
        });
        $('#bar4').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#3F51B5',
            animateOnResize: true
        });
        $('#bar5').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#E91E63',
            animateOnResize: true
        });
        $('#bar6').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#F44336',
            animateOnResize: true
        });
    }

    // Sticky Active Code
    $window.on('scroll', function () {
        $(".business_startup_wc_text").css("opacity", 1 - $window.scrollTop() / $('.business_startup_wc_text').height());
        if ($window.scrollTop() > 100) {
            $('.main_header_area').addClass('sticky slideInDown');
        } else {
            $('.main_header_area').removeClass('sticky slideInDown');
        }
    });

    // Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // Preloader active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);