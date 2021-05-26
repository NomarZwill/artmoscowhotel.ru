(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#palatinNav').classyNav();
    }

    // :: 3.0 Nice-select Active Code
    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }

    // :: 4.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        var newsSlide = $('.newsSlide');
        var spezSlide = $('.spezSlide');
        var nomeraSlide = $('.nomeraSlide');
        var nomeraSlide2 = $('.nomeraSlide2');
        var nomerkSlide = $('.nomerkSlide');
        var nomerkSlide2 = $('.nomerkSlide2');
        var heroslidesr = $('.hero-slides-r');
        var welcomeSlide = $('.hero-slides');
        var testimonial = $('.testimonial-slides');
        var homea = $('.homea');
        
        heroslidesr.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            dots: false,
			navigation: true,
			mouseDrag: false,
			touchDrag: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            lazyLoad: true,
            animateIn: 'fadeInRight',
            animateOut: 'fadeOut'
        });
        
        heroslidesr.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        heroslidesr.on('translated.owl.carousel', function () {
            var slideLayer = heroslidesr.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
        
        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            dots: false,
			navigation: true,
            autoplay: true,
            autoplayTimeout: 7000,
			mouseDrag: false,
			touchDrag: false,
            smartSpeed: 1000,
            animateIn: 'fadeInRight',
            animateOut: 'fadeOut'
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        var dot = $('.hero-slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1;
            if (index < 10) {
                $(this).html('0').append(index);
            } else {
                $(this).html(index);
            }
        });

        testimonial.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            dots: true,
			mouseDrag: false,
			touchDrag: false,
            navigation: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 600
        });

        var imageUpdate = function(){
            // console.log('imageUpdate');
            // var bLazy = new Blazy({
            //     breakpoints: [{
            //         width: 320,
            //         src: 'data-src-small'
            //     }]
            // });  
        }
        
        newsSlide.owlCarousel({
            items: 4,
            margin: 15,
            loop: true,
            nav: true,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            dots: true,
			mouseDrag: false,
			touchDrag: false,
            navigation: true,
            lazyLoad: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 600,
            afterMove: imageUpdate,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        769:{
          items: 2
        },
        992:{
          items: 4
        }
    }
            });

        // newsSlide.on('changed.owl.carousel', function(event) {
        //     console.log('imageUpdate');
        //     var bLazy = new Blazy({
        //         breakpoints: [{
        //             width: 320,
        //             src: 'data-src-small'
        //         }]
        //     });   
        // });
        
        spezSlide.owlCarousel({
            items: 3,
            margin: 15,
            loop: true,
			mouseDrag: false,
			lazyLoad: true,
			touchDrag: false,
            nav: true,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            dots: true,
            navigation: true,
            autoplay: false,
            autoplayTimeout: 7000,
            smartSpeed: 600,
            afterMove: imageUpdate,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        769:{
          items: 2
        },
        992:{
          items: 3
        }
    }
        });
        
        nomeraSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
			mouseDrag: false,
			touchDrag: false,
            nav: true,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            dots: true,
            navigation: true,
            autoplay: false,
            autoplayTimeout: 7000,
            smartSpeed: 600
        });
        
        
    var syncedSecondary = true;

    nomeraSlide2
        .on('initialized.owl.carousel', function() {
            nomeraSlide2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: 10,
            margin:20,
            dots: true,
            nav: true,
			mouseDrag: false,
			touchDrag: false,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 5, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
        
        
    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        nomeraSlide2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = nomeraSlide2.find('.owl-item.active').length - 1;
        var start = nomeraSlide2.find('.owl-item.active').first().index();
        var end = nomeraSlide2.find('.owl-item.active').last().index();

        if (current > end) {
            nomeraSlide2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            nomeraSlide2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            nomeraSlide.data('owl.carousel').to(number, 100, true);
        }
    }

    nomeraSlide2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        nomeraSlide.data('owl.carousel').to(number, 300, true);
    });
        
        
        
        nomerkSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
			mouseDrag: false,
			touchDrag: false,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            dots: true,
            navigation: true,
            autoplay: false,
            autoplayTimeout: 7000,
            smartSpeed: 600
        });
        
        
    var syncedSecondaryk = true;

    nomerkSlide2
        .on('initialized.owl.carousel', function() {
            nomerkSlide2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: 10,
            margin:20,
            dots: true,
            nav: true,
			mouseDrag: false,
			touchDrag: false,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 5, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition5(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        nomerkSlide2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = nomerkSlide2.find('.owl-item.active').length - 1;
        var start = nomerkSlide2.find('.owl-item.active').first().index();
        var end = nomerkSlide2.find('.owl-item.active').last().index();

        if (current > end) {
            nomerkSlide2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            nomerkSlide2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition6(el) {
        if (syncedSecondaryk) {
            var number = el.item.index;
            nomerkSlide.data('owl.carousel').to(number, 100, true);
        }
    }

    nomerkSlide2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        nomerkSlide.data('owl.carousel').to(number, 300, true);
    });
        
        
        
        
        homea.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
			mouseDrag: false,
			touchDrag: false,
            nav: true,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            dots: true,
            navigation: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 600
        });
    }



    // :: 6.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 7.0 Sticky Active Code
    if ($.fn.sticky) {
        $(".palatin-main-menu").sticky({
            topSpacing: 0
        });
    }

    // :: 8.0 Progress Bar Active Code
    if ($.fn.circleProgress) {
        $('#circle').circleProgress({
            size: 194,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#92593d',
            thickness: '4',
            reverse: true
        });
        $('#circle2').circleProgress({
            size: 194,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#92593d',
            thickness: '4',
            reverse: true
        });
        $('#circle3').circleProgress({
            size: 194,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#92593d',
            thickness: '4',
            reverse: true
        });
        $('#circle4').circleProgress({
            size: 194,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#92593d',
            thickness: '4',
            reverse: true
        });
    }

    // :: 9.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // :: 10.0 niceScroll Active Code
    if ($.fn.niceScroll) {
        $(".album-all-songs").niceScroll({
            background: "#fff"
        });
    }

    // :: 11.0 prevent default a click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // :: 12.0 wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

})(jQuery);