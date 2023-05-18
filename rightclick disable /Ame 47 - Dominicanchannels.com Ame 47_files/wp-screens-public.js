(function( $ ) {
	'use strict';

	jQuery(document).ready(function() {
		initSlider();
	});

	function initSlider() {
		jQuery('.newsfeed-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		items:1,
		autoplay:true,
		autoplayTimeout:5000,
		autoplaySpeed: 1200,
		navSpeed: 1200,
		dotsSpeed: 1200,
		dots: false,
		singleItem: true,
		navText: ["<",">"],
		});
	}
})( jQuery );
