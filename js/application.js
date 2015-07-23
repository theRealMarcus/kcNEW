$(document).ready(function(){

	//Slide Toggle the SharePoint ribbon
	$('#headerIcons ul li:first-child').click(function(){
		$('#SPRibbon').slideToggle(200);
	});

	//Slide Toggle the Search Div
	$('#headerIcons ul li:last-child').click(function(){
		$('#kcSearch').slideToggle(200);
	});

	//Lights img up when you hover over the #bttt button
	$('#scrollToTop').hover(function(){
		$(this).animate({opacity: "1"}, {queue: false});
	}, function(){
		$(this).animate({opacity: "0.4"}, {queue: false});
	});

	//Initialize the  BoxSlider - Complete
	$('.bxslider').bxSlider({
		autoControls: true,
		auto: true,
		pause: (5 * 1000), //5 Second intervals
		mode: 'horizontal',
		infiniteLoop: true,
		adaptiveHeight: true
	});

	//Sets display based on where the user is on the page & scrolls back to the top
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},80);
		return false;
	});
	
});