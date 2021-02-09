/*Enunciado:
Al ingresar una edad debemos informar solo si la persona es mayor de edad: */

// Faig Francisco Thomas
//IF Ejercicio 2


function mostrar()
{
	var edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt (edad);
		
	if ( edad >= 18 ){
		alert("Es mayor de edad.");
	}


}