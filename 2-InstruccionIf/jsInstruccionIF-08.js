/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

//Faig Francisco Thomas
//IF Ejercicio 8

function mostrar()
{

	var edad
	var estadoCiv
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt (edad);

	estadoCiv = document.getElementById("estadoCivil").value;

	if(edad < 18)
	{
		if(estadoCiv != "Soltero")
		{		
		}
	}
	
	else 
	{
		if(estadoCiv == "Soltero")
		{
			alert ("Es soltero y no es menor");
		}

	}
}

//Update IF

