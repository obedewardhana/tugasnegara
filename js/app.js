$('.portfolio-item').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.item',
  layoutMode: 'fitRows',
  masonry: {
    columnWidth: 50,
    gutter: 10
  }
})

$('.portfolio-menu ul li').click(function(){
  $('.portfolio-menu ul li').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
    filter:selector
  });
  return false;
})

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
})
