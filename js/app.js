

//   $('.grid').isotope({
//   // set itemSelector so .grid-sizer is not used in layout
//   itemSelector: '.grid-item',
//   percentPosition: true,
//   masonry: {
//     // use element for option
//     columnWidth: '.grid-sizer'
//   }
// })

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
