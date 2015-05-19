$(document).ready(function(){

	//Lights img up when you hover over the #bttt button
	$('#bttt').hover(function(){
		$(this).animate({opacity: "1"}, {queue: false});
	}, function(){
		$(this).animate({opacity: "0.4"}, {queue: false});
	});
	//Still look for a way to control speed on hover. 200ms is a great time for mouseover and mouseout

	//Initialize the  BoxSlider - Complete
	$('.bxslider').bxSlider({
		//randomStart: true,
		//autoControls: true,
		auto: true,
		pause: (5 * 1000), //5 Second intervals
		mode: 'horizontal',
		infiniteLoop: true,
		adaptiveHeight: true
	});

	//Scrolls the document up to the top
	$("#bttt").click(function(){

	});

	//Search overlay
	$('.searchToggle').click(function(){
		$('#searchOverlay').fadeToggle(300);
	});

	//Slide Toggle the SharePoint ribbon
	$('#headerIcons > ul > li > a > img:first').click(function(){
		$('#SPRibbon').slideToggle("fast");
	});

	//Hover over Icons to update background
	$('#headerIcons').on("hover", function(){
		$(this).css("background", "red");
	});

	//
	// $('#headerIcons > ul > li > a > img:first').toggle(function() {
 //    	$(this).rotate({ endDeg:90, persist:true });
 //  	}, function() {
 //    	$(this).rotate({ endDeg:-90 });
 //  	});

	//Tooltips for header Icons and Wiki Pages
	$(function(){
		$(document).tooltip();
	})
	

	//Leading the Navigation Markup from the navContent.html file
	$('#kcMenu').load("../includes/navContent.html");

});