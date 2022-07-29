 $(function () {

     'use strict';

     var myHeader = $('.header');

     myHeader.height($(window).height());
     $(window).resize(function () {
         myHeader.height($(window).height());
     });



     $('.bxSlider').bxSlider({
         pager: false
     });

     $('.show-more').click(function () {
         $('.menu .hidden').fadeIn(1500);
     });

     // mixitup
     var mixer = mixitup('.gallary');
     var mixer = mixitup(containerEl);
     var mixer = mixitup(containerEl, {
         selectors: {
             target: '.blog-item'
         },
         animation: {
             duration: 300
         }
     });
     
     // shuffle links
     
     $('.shuffle li').click(function(){
         $(this).addClass('selected').siblings().removeClass('selected');
     });