(function(e) {e(window.jQuery, window, document);})(function($, window, document) {
    console.log('init');
    var app = {

        // ==============================================================================================
        // Call your function here to become a single function
        // * This method make your code more modular and make it easy to toggle your function
        // * If you want to disable a function, just commented on function that you need to disable below
        // ==============================================================================================

        init: function($) {
             app.isotope();
             app.owlcarousel();
             app.mobilenav();
             app.sticky();
        },

        onResize: function() {
            // call function here to applied on resize window
            app.sticky();
        },

        isotope: function() {
          $('.gallery-item').isotope({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.item',
            layoutMode: 'fitRows'
            // masonry: {
            //   columnWidth: '.item',
            //   isFitWidth:true
            // }
          });

          $('.gallery-menu ul li').click(function(){
            $('.gallery-menu ul li').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $('.gallery-item').isotope({
              filter:selector
            });
            return false;
          });

        },

        owlcarousel: function(){
          $('.owl-carousel').owlCarousel({
              loop:true,
              autoplay:true,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:1
                  },
                  1000:{
                      items:1
                  }
              }
          });
        },

        mobilenav: function() {
          $(document).ready(function () {
                  $('.toggle-down .fa').click(function () {
                      $('.navbar-mobile').toggleClass('open').siblings().removeClass('open');
                  });
              });
        },

        sticky: function() {
          $(document).ready(function() {
            $(window).on("load resize scroll",function(e){
              if ($(window).width() > 992) {
                if ($(document).scrollTop() > 92.67) {
                  $(".header-wrapper").addClass("sticky");
                  $(".header > .container > .row").addClass("header-sticky-bg");
                } else {
                  $(".header-wrapper").removeClass("sticky");
                  $(".header > .container > .row").removeClass("header-sticky-bg");
                }
              } else {
                $(".header-wrapper").removeClass("sticky");
                $(".header > .container > .row").removeClass("header-sticky-bg");
              }
            });
          });
        },

        select2: function() {
            $(document).ready(function() {
                $("select").select2();
            });
        },
    }

    $(document).ready(function () {
        app.init($);
        $(window).resize(function() {
            app.onResize();
        });
    });
});
