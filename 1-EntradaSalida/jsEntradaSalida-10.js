/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//txtIdImporte
	//txtIdResultado

	let sueldo;
	let descuento;
	let resultado;
	const porcentaje=0.25;

	sueldo = document.getElementById("txtIdImporte").value;	
	sueldo = parseInt(sueldo);

	descuento = sueldo * porcentaje;
	descuento = parseInt(descuento);

	resultado = sueldo - descuento;

	document.getElementById("txtIdResultado").value = resultado;

}
