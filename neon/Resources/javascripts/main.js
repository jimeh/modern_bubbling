var fadeTime = 300;
var showDetails = false;
var headerVisible = false;

$(document).ready(function(){
	
	// show header on init if header is enabled
	if ($('#show_header').text() == 'yes') {
		$('#header .bar').animate({marginTop: '-'+$('#header .bar').height()+'px', opacity: 0}, 0);
		$('#header .bar').animate({marginTop: '0px', opacity: 1}, 500);
		$('#header .toggle').addClass('hide');
		headerVisible = true;
	};
	
	// toggle header
	$('#header .toggle').click(function(){
		if (headerVisible) {
			$('#header .bar').animate({marginTop: '-'+$('#header .bar').height()+'px', opacity: 0}, 500);
			$('#header .toggle').removeClass('hide');
			headerVisible = false;
		} else {
			$('#header .bar').animate({marginTop: '0px', opacity: 1}, 500);
			$('#header .toggle').addClass('hide');
			headerVisible = true;
		};
	});
	
	// toggle details when ctrl+d is pressed
	$(window).keydown(function(e){
		if (e.ctrlKey == true && e.keyCode == 68) {
			if (!showDetails) {
				$('.message .sender .name').addClass('force-visible');
				$('.message .sender .service').addClass('force-visible');
				$('.message .bubble .time').addClass('force-visible');
				showDetails = true;
			} else {
				$('.message .sender .name').removeClass('force-visible');
				$('.message .sender .service').removeClass('force-visible');
				$('.message .bubble .time').removeClass('force-visible');
				showDetails = false;
			};
		};
	});
	
	// fade in/out history bubbles when hovered
	$('.history').hover(function(){
		$(this).fadeTo(fadeTime, 1);
	},function(){
		$(this).fadeTo(fadeTime, 0.5);
	});
	
});