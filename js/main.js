$(document).ready(function(){
	//Expands and retracts the search bar when it becomes selected.
	$('nav input').on('focus',function(){
		$(this).attr('data-default', $(this).width());
		$(this).animate({ width: 115 }, 'fast');
	}).on('blur', function(){
		var w = $(this).attr('data-default');
		$(this).animate({width: w }, 'fast');
	});

	$('nav .hamburger, nav .close-btn').on('click',function(){
		console.log($(this))
		if (!( $('nav').css('width') == $('body').css('width'))){
			$('nav').toggleClass('open');
				$('nav .close-btn').toggleClass('show');
				$('nav .hamburger').toggleClass('show');
		};
	});
});