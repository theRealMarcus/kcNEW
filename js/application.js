$(document).ready(function(){

	//Lights img up when you hover over the img
	$('#bttt').mouseover(function(){
		$(this).fadeTo((0.25 * 1000), 1);
	});
	$('#bttt').mouseout(function(){
		$(this).fadeTo((0.25 * 1000), 0.3)
	});

	//Initialize the  BoxSlider
	$('.bxslider').bxSlider({
		auto: true,
		autoControls: true,
		pause: (6 * 1000),
		mode: 'horizontal'
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
	$('#kcnav').load("../includes/navContent.html");

});