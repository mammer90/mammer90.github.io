$(document).ready(function(){
	$("#menu-toggle").click(function(){
		$("nav").fadeToggle(200);
		
	});
});

$(window).resize(function(){
	if($(window).width() > 500) {
		$("nav").attr("style", "");
	}
});
