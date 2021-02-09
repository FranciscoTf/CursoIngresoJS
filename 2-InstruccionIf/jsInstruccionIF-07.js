/*
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

//Faig francisco Thomas
//IF Ejercicio 7

function mostrar()
{
	//txtIdEdad
	//estadoCivil
	
	var edad
	var estadoCiv
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt (edad);

	estadoCiv = document.getElementById("estadoCivil").value;

	if( edad < 18 )
	{
		
		if(estadoCiv != "Soltero")
		{		
			alert ("Es muy pequeño para NO ser soltero.");
		}

	}
}

//Update IF