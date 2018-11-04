$('document').ready(function() {
	$('#slider').slick({
	infinite: true,
    slidesToShow:1,
    slidesToScroll:1,
    // variableWidth:true,
    dots:true,
    respondTo:'slider'
    // easing:'linear',
    // prevArrow:'<svg class="slider__triangle-l" width="12%" height="" viewBox="0 0 60 60"><polyline points="17,14 11,20 17,26" stroke="white" stroke-width="4.5" stroke-linecap="round" fill="none"/></svg>',
    // nextArrow: '<svg class="slider__triangle-r" width="12%" height="" viewBox="0 0 60 60"><polyline points="9,4 15,10 9,16" stroke="white" stroke-width="4.5" stroke-linecap="round" fill="none"/></svg>'
	});
	$('#slider-comments').slick({
		// autoplay:true,
		// variableWidth:true,
		// infinite: true,
	    slidesToShow:1,
	    slidesToScroll:1,
	    dots:true
	});
	$('#slider-comments .slick-dots li').css({
		"background-color":"white",
		"border":"1px solid #e6e6e6"
	});

	$('#slider-comments .slick-dots li').addClass('dots-background');
});