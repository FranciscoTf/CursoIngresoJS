/*
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

//Faig Francisco Thomas
//IF Ejercicio 10

function mostrar()
{
	
	var nota

	nota = Math.floor(Math.random() * 11);
	console.log(nota);

	if (nota < 5)
	{
		alert ("Vamos, la proxima se puede");
	}

	else 
	{
		if (nota < 9)
		{
			alert ("APROBÓ");
		}

		else 
		{
			alert ("EXCELENTE");
		}
		
	}

}