$(document).ready(function() {
    $('.product-list').lightSlider({
      item:5,
      slideMargin:24,
      loop:true,
      keyPress:true,
      // autoWidth:true,
      // controls:false,
      prevHtml:'<img src="img/arrow.png" alt="previous item">',
      nextHtml:'<img src="img/arrow.png" alt="next item">',
      pager:false,
      responsive : [{
        breakpoint:767, settings: {
            item:1,
        }
      }],
      onSliderLoad: function() {
          $('.product-list').removeClass('cS-hidden');
      }
    });
});


/*$(function() {
  $('.product-list').slick({
    slidesToShow: 1,
    infiniti: true;
    centerMode: true;
    responsive: [
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        variableWidth: true;
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 5,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});*/
