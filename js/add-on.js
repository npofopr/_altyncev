function animateBars() {
	emptyBars();
	$('.bar').each(function() {
		 var bar = $(this);
		 setTimeout( function() { bar.find('.progress').addClass('easing-long').css('width', bar.attr('data-percent') + '%' ); } , duration);
		});
}

function emptyBars() {
	$('.bar').each(function() {
		 var bar = $(this);
		 bar.find('.progress').removeClass('easing-long').css('width', 0 );
		});
}
