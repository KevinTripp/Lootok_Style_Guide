$(document).ready(function(){
	//Expands and retracts the search bar when it becomes selected.

	// $('nav input').on('focus',function(){
		
	// 	$(this).attr('data-default', $(this).width());
	// 	$(this).animate({ width: 250 }, 'fast');
	// }).on('blur', function(){
	// 	var w = $(this).attr('data-default');
	// 	$(this).animate({width: w }, 'fast');
	// });

	$('nav .hamburger, nav .close-btn').on('click',function(){
		if (!( $('nav').css('width') == $('body').css('width'))){
			$('nav ul').first().toggleClass('hide');//hides the ul when menu is collapsed
			$('nav').toggleClass('open');//changes the width of the menu
			$('nav .close-btn').toggleClass('show');
			$('nav .hamburger').toggleClass('show');
		};
	});
	//shows the confirmation screen on submit
	$('form button').on('click',function(e){
		e.preventDefault();
		$('.submit-confirm, .overlay').toggle();
	});
	//hides the confirmation screen when x is clicked
	$('.submit-confirm .close-btn, .overlay').on('click',function(){
		$('.submit-confirm, .overlay').toggle();
	});
});