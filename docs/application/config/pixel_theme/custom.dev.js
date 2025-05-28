/*-----------------------------------------------------------------------------------

	custom.dev.js
		1. Copy this file to /application/config/pixel_theme/ folder. The 'pixel_theme' folder does not exist as default and it should be created.)
		2. Rename the copied file 'custom.dev.js' (The '.tmp' extension should be removed).
		3. Add all your custom js in here.

-----------------------------------------------------------------------------------*/

$(document).ready(function () {
  //console.log('Pixel custom js is working ...');
  $(
    'body[data-slug="/blocks/custom-blocks/cta-promo-boxes"] div[data-block="whale_cta"] h3'
  ).text(function () {
    return $(this).text().replace('your site', 'concrete5');
  });

  /*
  // remove titles after x second
  var captionFadeTime = 5000; // in ms
  var activeSlideCaptions = $('#slider .swiper-slide-active .slider-caption');
  activeSlideCaptions.delay(captionFadeTime).queue(function(){
    $(this).addClass("animated fadeOut").dequeue();
  });
  */

});
