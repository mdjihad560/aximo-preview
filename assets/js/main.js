(function($) {
  "use strict";
  
  /*------------------------------------------------------------------
  [Table of contents]


  -------------------------------------------------------------------*/
  
  
  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function(){
    return this.length;
  }
  
  
  $(function(){


/*--------------------------------------------------------------
fugu PRICING TABLE JS INIT
------------------------------------------------------------*/
var auto_slider = new Swiper('.aximo-auto-slider', {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 7000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});
 

  });/*End document ready*/
  
  
  $(window).on("resize", function(){
    
  
  }); // end window resize
  
  
  $(window).on("load" ,function(){
 

  
  }); // End window LODE

// wow js
var wow = new WOW({
  mobile: false,       // default
  tablet:false
});
wow.init();




  })(jQuery);
  
  
  
  
  
  
  