import $ from 'jquery'

import 'slick-carousel'

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slideshow'
  });

$('.slideshow').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    // focusOnSelect: true, ??
    asNavFor: '.slider-for',
    //adaptiveHeight: true, ??
    responsive: [
        {
          breakpoint: 998,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
    ]
  
})
.on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
});

$('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
})

