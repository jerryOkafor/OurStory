// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true

});

 /*---------------------
 Home page
--------------------- */
myApp.onPageInit('index', function (page) {
  var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    paginationClickable: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
  });

});
/*---------------------
 About page
--------------------- */
//myApp.onPageInit('about', function (page) {
//  var mySwiper = myApp.swiper('.swiper-container', {
//    pagination:'.swiper-pagination',
//    paginationClickable: true,
//    autoplay: 2500,
//    autoplayDisableOnInteraction: false
//  });
//
//});
 /*---------------------
 our story page
--------------------- */
//myApp.onPageInit('our-story', function (page) {
//
//
//});


//(function ($) {
// "use strict";
//
//$(function(){
//$( '.swipebox' ).swipebox();
//
//});
//
//
//})(jQuery);

