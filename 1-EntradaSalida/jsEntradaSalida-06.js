/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno
	//txtIdNumeroDos

	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1)
	num2 = parseInt(num2)

	resultado = num1 + num2;

	alert("La suma es: " +resultado);
}

/*

string + string = string
string + number = string
number + string = string
number + number = number

!ACOSTUMBRARSE A USAR:
x = parseInt(x)  - Cambia string a num
*Como deja de leer cuando ve un valor no numerico en el varible, podemos usarlo 
para redondear en este caso.

*/

//Update E/S
