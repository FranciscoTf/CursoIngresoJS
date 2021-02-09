/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

//Faig francisco Thomas
//IF Ejercicio 6


function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt (edad);
		
	if( edad < 13 )
	{ 
		alert("Es niño.");
	}	
	
	else
	{
		if ( edad < 18)
		{
			alert("Es adolescente.");	
		}

		else
		{
			alert("Es mayor de edad.");
		}
	}

}

//Update IF