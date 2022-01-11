$("ul").on("click", "li", function(){
	$(this).toggleClass("select");
});
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type=text").keypress(function(event){
	if(event.which === 13){
		var newItem= $(this).val();
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" +newItem+ "</li>");
		$(this).val("");
	}
});

$(".fas").click(function(){
	$("input").fadeToggle();
});