$(document).ready(function(){
	// ON SCROLL LOAD NEWS FUNCTION
	var firstCharge = false;
	var secondCharge = false;

	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() >= $(document).height() - 1) {
			if (firstCharge == false) {
				loadNews();
				firstCharge = true;
			} else if (firstCharge == true && secondCharge == false) {
				loadNews2();
				secondCharge = true;
			}
		}
	});
	$('#loadNews').click(function(){
		if (firstCharge == false) {
			loadNews();
			firstCharge = true;
		} else if (firstCharge == true && secondCharge == false) {
			loadNews2();
			secondCharge = true;
		}
	});

});

function loadNews(){
	$.getJSON("data/1.json",function(json){
		$.each(json, function(index){
			$(".contenido-principal").append("<div class='well'><div class='row'><div class='col-xs-12'>"
			+ "<h2>" + json[index].titulo+"</h2></div></div>"
			+ "<div class='row'><div class='col-xs-12 col-sm-3'><img alt='ojo' class='img-circle img-responsive' src='"+ json[index].imagen +"'>"
			+ "<br></div><div class='col-xs-12 col-sm-8'>"+"<p>"+json[index].resumen +"</p><span><b>Autor: </b> <i>"+ json[index].autor +"</i></span>"
			+ "<span class='pull-right'><b>Fecha:</b> <i>"+ json[index].fecha +"</i></span></div></div></div>");
		});
		$(".advertise-vertical").append("<img src='http://www.publicidadenbuscadores.com/wp-content/uploads/2012/07/msn_bing.jpg' class='publi-desktop'>");
		$(".advertise-vertical").append("<img src='http://www.thrad.mx/images/consultoria_comunicacion.jpg' class='publi-desktop'>");
	});
}

function loadNews2(){
	$.getJSON("data/2.json",function(json){
		$.each(json, function(index){
			$(".contenido-principal").append("<div class='well'><div class='row'><div class='col-xs-12'>"
			+ "<h2>" + json[index].titulo+"</h2></div></div>"
			+ "<div class='row'><div class='col-xs-3'><img alt='ojo' class='img-circle img-responsive' src='"+ json[index].imagen +"'>"
			+ "</div><div class='col-xs-8'>"+"<p>"+json[index].resumen +"</p><span><b>Autor: </b> <i>"+ json[index].autor +"</i></span>"
			+ "<span class='pull-right'><b>Fecha:</b> <i>"+ json[index].fecha +"</i></span></div></div></div>");
		});
		$(".advertise-vertical").append("<img src='http://www.publicidadenbuscadores.com/wp-content/uploads/2012/07/msn_bing.jpg' class='publi-desktop'>");
		$(".advertise-vertical").append("<img src='http://www.thrad.mx/images/consultoria_comunicacion.jpg' class='publi-desktop'>");
	});
}

