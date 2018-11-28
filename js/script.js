$('document').ready(function() {
	$('#slider').slick({
	infinite: true,
    slidesToShow:1,
    slidesToScroll:1,
    dots:true,
    responsive: [
    {
      breakpoint: 1060,
      settings: {
      // respondTo:'',
        arrows:false,
        dots: true
      }
    },
    {
      breakpoint: 960,
      settings: {
      	arrows: true
        // slidesToShow: 2,
        // slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
      	arrows: false
        // slidesToShow: 1,
        // slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
    prevArrow:'<svg class="slider__triangle-l" width="24px" height="34px" viewBox="1 4 13 13"><polyline points="10,4 4,10.5 10,17" stroke="white" stroke-width="4.5" stroke-linecap="round" fill="none"/></svg>',
    nextArrow: '<svg class="slider__triangle-r" width="24px" height="34px" viewBox="47 1 12 19"><polyline points="50,4 56,10.5 50,17" stroke="white" stroke-width="4.5" stroke-linecap="round" fill="none"/></svg>'
	});
	$('#slider-comments').slick({
		// autoplay:true,
		// variableWidth:true,
		// infinite: true,
		arrows: false,
	    slidesToShow:1,
	    slidesToScroll:1,
	    dots:true
	});
	$('#slider-comments .slick-dots li').css({
		"background-color":"white",
		"border":"1px solid #e6e6e6"
	});

	$('#slider-comments .slick-dots li').addClass('dots-background');
		
		
			// $(".plays").click(function() {
			// 		var playActive = $('.audio-iphone').toggleClass("play-active");
			// 			if( $('.audio-iphone').hasClass('playActive') ) {
			// 				playActive.play();
			// 			} else {
			// 				playActive.pause();
			// 			}
			// 	});
});
var playBtn1 = document.getElementById('play-btn1');
var playBtn2 = document.getElementById('play-btn2');
var playBtn3 = document.getElementById('play-btn3');
var playBtn4 = document.getElementById('play-btn4');
playBtn1.addEventListener('click', iplay);
playBtn2.addEventListener('click', iplay);
playBtn3.addEventListener('click', iplay);
playBtn4.addEventListener('click', iplay);
	function iplay(event) {
		var playAudio = document.querySelector('.audio-iphone');
			playAudio.classList.toggle('play-active');
		var resaltSearchClass = playAudio.classList.contains('play-active');
		var fa = event.target;
		if(resaltSearchClass == true ) {
			// console.log(event.target);
		playAudio.play();
			fa.classList.remove('fa-play');
			fa.classList.add('fa-pause');
		} else {
			playAudio.pause();
			fa.classList.remove('fa-pause');
			fa.classList.add('fa-play');
		}
	};