/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

//Faig Francisco Thomas
//Ejersisio 10 E/S

function mostrarAumento()
{

	
	//txtIdImporte
	//txtIdResultado

	
	let sueldo;
	let descuento;
	let resultado;

	sueldo = document.getElementById("txtIdImporte").value;	
	sueldo = parseInt(sueldo);

	descuento = sueldo * 0.25;
	descuento = parseInt(descuento);

	resultado = sueldo - descuento;

	document.getElementById("txtIdResultado").value = resultado;
	
	
	/*
	let sueldo;
	let descuento;
	let resultado;

	sueldo = document.getElementById("txtIdImporte").value;	
	sueldo = parseInt(sueldo);

	descuento = sueldo * 25/100;
	descuento = parseInt(descuento);

	resultado = sueldo - descuento;

	document.getElementById("txtIdResultado").value = resultado; 
	*/

	/*
	let sueldo;
	let resultado;

	sueldo = document.getElementById("txtIdImporte").value;	
	sueldo = parseInt(sueldo);

	resultado = sueldo - (sueldo * 0.25);
	resultado = parseInt(resultado);


	document.getElementById("txtIdResultado").value = resultado; 
	*/

}

//Update E/S

