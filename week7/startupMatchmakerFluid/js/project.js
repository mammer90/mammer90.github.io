$(document).ready(function(){
	$("#menu-toggle").click(function(){
		$("nav").slideToggle(250);
		
	});
});

$(window).resize(function(){
	if($(window).width() > 500) {
		$("nav").attr("style", "");
	}
});
