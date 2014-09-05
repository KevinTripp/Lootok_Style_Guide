$(document).ready(function(){
	//Expands and retracts the search bar when it becomes selected.

	// $('nav input').on('focus',function(){
		
	// 	$(this).attr('data-default', $(this).width());
	// 	$(this).animate({ width: 250 }, 'fast');
	// }).on('blur', function(){
	// 	var w = $(this).attr('data-default');
	// 	$(this).animate({width: w }, 'fast');
	// });
/***********************************************
/ SIDE-NAV 
/***********************************************/
	$('.side-nav ul li, .side-nav ul li').on('click', function(e){
		var $this = $(this);
		//stops the normal link action from occuring.  this might need to be taken out depending on how you want the list to occur in the future
		e.preventDefault();
		//allows for nested lists by preventing the click to register for the parent element as well as the element that was clicked on
		e.stopPropagation();
		//selects ul within the element you clicked and expands the list
			//only adds the class active if the element has sub-elements
			$this.children()
			if ($this.children().length > 1) {
				//gives the clicked on element the active or not active class.  the active class has a few styles that help 
				$this.children('ul').slideToggle();
				$this.toggleClass('active');
				
				if(!$this.hasClass('active')){
					//slides up all sub menus if the parent menu is hidden
					$this.find('ul li ul').slideUp()
					$this.find('.active').removeClass('active');
				}
				//when an element is clicked this hides all children elements that were active
			}
	});	
/***********************************************
/ SLICK Carousel
/***********************************************/

	$('.carousel').slick({
	  centerMode: false,
	  centerPadding: '40px',
	  slidesToShow: 2,
	  slidesToScroll:1,
	  infinite:false,
	  // autoplay:true,
	  autoplaySpeed:1000
	  // responsive: [
	  //   {
	  //     breakpoint: 768,
	  //     settings: {
	  //       arrows: false,
	  //       centerMode: true,
	  //       centerPadding: '40px',
	  //       slidesToShow: 3
	  //     }
	  //   },
	  //   {
	  //     breakpoint: 480,
	  //     settings: {
	  //       arrows: false,
	  //       centerMode: true,
	  //       centerPadding: '40px',
	  //       slidesToShow: 1
	  //     }
	  //   }
	  // ]

	});
	
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