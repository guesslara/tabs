/*
*Widget que genera tabs para un ambiente html en su version 2
*@author	Gerardo Lara
*@date		3-Noviembre-2015
*/
$(document).ready(function(){
	$(".contenedorTab a").click(function(x){
		console.log($(this))
		mostrarTabSeleccionado($(this)[0].hash);
	});
});

function mostrarTabSeleccionado(tabSeleccionado){
	console.log(tabSeleccionado)
	//se quita el anterior tab seleccionado
	$(".wTabsContainer ul li div").removeClass("wTabActive");


	//$(".wTabsContainer .wContentTab").removeClass("wTabContentActive");
}