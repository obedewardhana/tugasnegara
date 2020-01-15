(function($){

  $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-sizer'
  }
})

  $('.hero-slider').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'heartBeat',
    items:1,
    loop:false,
    nav:true,
    dots: true,
  })

}(jQuery));
