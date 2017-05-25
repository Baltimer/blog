$(document).ready(function(){
	// ON SCROLL LOAD NEWS FUNCTION
	var firstScroll = false;
	var secondScroll = false;
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			if (firstScroll == false) {
				loadNews();
				firstScroll = true;
			} else if (firstScroll == true && secondScroll == false) {
				loadNews2();
				secondScroll = true;
			}
		}

	});

});

function loadNews(){
	$.getJSON("data/1.json",function(json){
		$.each(json, function(index){
			$(".contenido-principal").append("<div class='well'><div class='row'><div class='col-xs-12'>"
			+ "<h2>"+json[index].titulo+"</h2></div></div>"
			+ "</h2><img alt='ojo' class='img-circle img-responsive' src='"+ json[index].imagen +"'><p>"
			+ json[index].resumen +"</p><p class='text-info'>"
			+ json[index].autor +"&emsp;&emsp;<span class='pull-right'>"
			+ json[index].fecha +"</small></p>");
		});
		$(".advertise-vertical").append("<img src='img/publi3.jpg' class='publi-desktop'>");
		$(".advertise-vertical").append("<img src='img/publi4.jpg' class='publi-desktop'>");
	});
}

function loadNews2(){
	$.getJSON("data/2.json",function(json){
		$.each(json, function(index){
			$(".contenido-principal").append("<div class='well'><div class='row'><div class='col-xs-12'>"
			+ "<h2>"+json[index].titulo+"</h2></div></div>"
			+ "</h2><img class='img-circle img-responsive' src="+ json[index].imagen +"><p>"
			+ json[index].resumen +"</p><p class='text-info'>"
			+ json[index].autor +"&emsp;&emsp;<span class='pull-right'>"
			+ json[index].fecha +"</small></p>");
		});
		$(".side-bar").append("<img src='img/publi1.jpg' class='publi-desktop'>");
	});
}