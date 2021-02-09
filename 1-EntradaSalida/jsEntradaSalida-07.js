/*Enunciado:
Debemos lograr tomar Los numeros por ID.value ,
transformarlos a enteros "parseInt()",realizar la operación correcta y
mostrar el resulto por medio de "alert()"
ej.: "la Resta es 750"

Faig Francisco Thomas
Ejercicio 07 E/S
*/

function sumar()
{	

	let num1;
	let num2;
	let suma;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	
	suma = num1 + num2;

	alert("La suma es: " +suma);

}

function restar()
{	
	let num1;
	let num2;
	let resta;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2)
	
	resta = num1 - num2;

	alert("La resta es: " +resta);

}

function multiplicar()
{ 	
	let num1;
	let num2;
	let multp;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	
	multp = num1 * num2;

	alert("La multiplicacion es: " +multp);
}

function dividir()
{	
	let num1;
	let num2;
	let divd;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	divd = num1 / num2;

	divd = divd.toFixed(2);
	//To fix determina la cantidad de numeros despues de la coma.

	alert("La division es: " +divd);
}

