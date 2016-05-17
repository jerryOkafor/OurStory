// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

var ourStory;

//Get the json config files
$.getJSON( "app-config.json",function(data){

    })
    .done(function( data ) {
        ourStory = data;

    });

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
myApp.onPageInit('about-us', function (page) {
  var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    paginationClickable: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
  });


    //strat using jquery to bind the inner html
    $('#wedding-date').text(ourStory.ourStory.weddingDate);
    $('#the-couple').text(ourStory.ourStory.theCouple);

    //end genral config

    //begin Grooms config
    $('#g-name').text(ourStory.ourStory.groom.name);
    $('#g-text').text(ourStory.ourStory.groom.about);
    $('#g-f-link').attr('href',ourStory.ourStory.groom.facebookLink);
    $('#g-t-link').attr('href',ourStory.ourStory.groom.twitterHandler);
    $('#g-l-link').attr('href',ourStory.ourStory.groom.linkedinLink);
    //end grooms config

    //begin Bride's config
    $('#b-name').text(ourStory.ourStory.bride.name);
    $('#b-text').text(ourStory.ourStory.bride.about);
    $('#b-f-link').attr('href',ourStory.ourStory.bride.facebookLink);
    $('#b-t-link').attr('href',ourStory.ourStory.bride.twitterHandler);
    $('#b-l-link').attr('href',ourStory.ourStory.bride.linkedinLink);
    //end bride's config


});
 /*---------------------
 our story page
--------------------- */
myApp.onPageInit('our-story', function (page) {
    var mySwiper = myApp.swiper('.swiper-container', {
        pagination:'.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    $("#our-love-story").text(ourStory.ourStory.ourLoveStory);
    $("#first-met").text(ourStory.ourStory.firstMetStory);
    $("#who-proposed").text(ourStory.ourStory.whoProposed);
    $("#who-said-yes").text(ourStory.ourStory.whoSaidYes);


});


/*---------------------
 Gallery page
 --------------------- */
myApp.onPageInit('gallery-page', function (page) {
    var mySwiper = myApp.swiper('.swiper-container', {
        pagination:'.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    //add click to all other links
    var l1 = $('#g-1');
    var l2 = $('#g-2');
    var l3 = $('#g-3');
    var l4 = $('#g-4');
    var g1 = $('#g-1 a');
    var g2 = $('#g-2 a');
    var g3 = $('#g-3 a');
    var g4 = $('#g-4 a');
    var pos = 0;

    var setGallery = function (pos) {

        switch (pos)
        {
            case 0:
                l1.addClass('active');
                l2.removeClass('active');
                l3.removeClass('active');
                l4.removeClass('active');
                break;
            case 1:
                l2.addClass('active');
                l1.removeClass('active');
                l3.removeClass('active');
                l4.removeClass('active');
                break;
            case 2:
                l3.addClass('active');
                l2.removeClass('active');
                l1.removeClass('active');
                l4.removeClass('active');
                break;
            case 3:
                l4.addClass('active');
                l2.removeClass('active');
                l3.removeClass('active');
                l1.removeClass('active');
                break
        }
    };
    $('#gallery-next').on('click',function(e){
        if(pos < 5)
        {
            pos++;
        }
        setGallery(pos)
    });

    //set for the prevois button
    $('#gallery-prev').on('click',function(e){

        if(pos!=0){
            pos--;
        }
        setGallery(pos)
    });


    g1.on('click',function(e){
        pos = 0;
        l1.addClass('active');
        l2.removeClass('active');
        l3.removeClass('active');
        l4.removeClass('active');
        myApp.alert(ourStory.ourStory.groom.name);
    });

    g2.on('click',function(e){
        pos = 1;
        l2.addClass('active');
        l1.removeClass('active');
        l3.removeClass('active');
        l4.removeClass('active');
    });

    g3.on('click',function(e){
        pos = 2;
        l3.addClass('active');
        l2.removeClass('active');
        l1.removeClass('active');
        l4.removeClass('active');
    });

    g4.on('click',function(e){
        pos = 3;
        l4.addClass('active');
        l2.removeClass('active');
        l3.removeClass('active');
        l1.removeClass('active');
    });


});

(function ($) {
 "use strict";

$(function(){
$( '.swipebox' ).swipebox();

});


})(jQuery);

