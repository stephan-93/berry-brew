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
          $('.lSAction').appendTo('.list-waraper');
      }
    });
});
