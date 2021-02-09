/*Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive)  */

//Faig Francisco Thomas
//IF Ejercicio 4


function mostrar()
{
	var edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt (edad);
		
	if ( edad >= 13 ){
		if ( edad <= 17 ){
		alert("Es adolescente.");
		}	
	}	

}