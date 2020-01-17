$('.gallery-item').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.item',
  layoutMode: 'fitRows',
  masonry: {
    columnWidth: '.item',
    isFitWidth:true
  }
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

$(document).ready(function () {
        $('.toggle-down .fa').click(function () {
            $('.navbar-mobile').toggleClass('open').siblings().removeClass('open');
        });
    });
