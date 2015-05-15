$(document).ready(function(){

	//Lights img up when you hover over the img
	$('#bttt').mouseover(function(){
		$(this).fadeTo((0.25 * 1000), 1);
	});
	$('#bttt').mouseout(function(){
		$(this).fadeTo((0.25 * 1000), 0.3)
	});

	//Scrolls the document up to the top

	//Search overlay
	$('.searchToggle').click(function(){
		$('#searchOverlay').fadeToggle(300);
	});

	//Slide Toggle the SharePoint ribbon
	$('#headerIcons > ul > li > a > img:nth-child(1)').click(function(){
		$('#SPRibbon').slideToggle("fast");
	});

	//Tooltips for header Icons and Wiki Pages


	//
	$('#kcnav').load("../includes/navContent.html");s

});