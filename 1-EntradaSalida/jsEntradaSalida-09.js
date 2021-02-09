/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//txtIdSueldo
	//txtIdResultado

	let sueldo;
	let aumento;
	let resultado;
	const porcentaje=0.10;

	sueldo = document.getElementById("txtIdSueldo").value;	
	sueldo = parseInt(sueldo);

	aumento = sueldo * porcentaje;
	aumento = parseInt(aumento);

	resultado = sueldo + aumento;
	// sueldo *1.1;

	document.getElementById("txtIdResultado").value = resultado;
	
	
}

//Update E/S

