(function($) {
    "use strict";

    $( '#navbar_top .main-menu a' ).on( 'click', function () {
      $( '#navbar_top .main-menu' ).find( 'li.active' ).removeClass( 'active' );
      $( this ).parent( 'li' ).addClass( 'active' );
  });



/*-----------------------------
marketing-insight Slider
------------------------------*/
    $(".marketing-insight-wrapper").owlCarousel({
      items: 3,
      dots: true,
      nav: false,
      margin:30,
      autoplay:false,
      autoplayTimeout:4000,
      smartSpeed:450,
      loop: true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              dots: true,
          },
          768:{
              items:2,
              dots: true,
          },
          1170:{
              items:3,
              dots: true,
          }
      }
      });

 
  /*-----------------------------
  Fade In Up area
  ------------------------------*/
    AOS.init();


  /**
   * Back To TOP
   */

  var backtotop = $('#back_to_top');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        backtotop.addClass('show');
    } else {
        backtotop.removeClass('show');
    }
    });

    backtotop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });

     /*----------------------------
  	Preloader
  	------------------------------ */
  $(window).on("load", function() {
    $("#status").on("fadeOut", "slow");
    $("#preloader")
      .on("delay", 500)
      .on("fadeOut", "slow")
      .remove();
  });


})(jQuery);

  const menuBtn = document.querySelector('.navbar-toggler');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });

    /*----------------------------
   Sticky menu active
   ------------------------------ */
   document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 150) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

