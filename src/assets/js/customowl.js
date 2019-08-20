/*
/*----------------------------------------
  Testimonial
/*----------------------------------------
*/

var $owl = $('#testimonial');
$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});
$owl.owlCarousel({
  center: true,
  autoplay: false,
  autoplayTimeout: 4000,
  smartSpeed: 2000,
  lazyLoad: true,
  navigation: true,
  dots: true,
  nav: false,
  //navText: ["<img src='images/prve.png'>","<img src='images/next.png'>"],
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    400: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    }
  }
});
$(document).on('click', '.owl-item>div', function() {
  $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
});


/*
/*----------------------------------------
  Stick Navbar
/*----------------------------------------
*/

var headerBottom = $(window);
var headTopmenu = $('.custom-menu');
headerBottom.on('scroll', function() {
  if (headerBottom.scrollTop() > 50) {
    headTopmenu.addClass('sticky-top');
  } else {
      headTopmenu.removeClass('sticky-top');
  }
});


/*
/*----------------------------------------
  Accordion
/*----------------------------------------
*/

$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).siblings('.panel-heading').addClass('active');
});

  $('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).siblings('.panel-heading').removeClass('active');
});

