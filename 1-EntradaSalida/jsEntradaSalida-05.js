/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

//txtIdNombre
//txtIdEdad

/*Enunciado:
Debemos lograr tomar nombre y edad por ID.value
mostrarlos concatenados
ej.: "Usted se llama José y tiene 66 años"*/

//Faig Francisco
//Ejercicio 5bis
function mostrar()
{	
	var nombreDelAlumno;
	var edadDelAlumno;
	
	nombreDelAlumno=document.getElementById("txtIdNombre").value;
	edadDelAlumno=document.getElementById("txtIdEdad").value;

	alert("Usted se llama "+nombreDelAlumno+" y tiene " +edadDelAlumno+" años.");
	//Alternativa: (BACK TICK: ALT96)
	//alert(`Usted se llama ${nombreDelAlumno} y tiene ${edadDelAlumno}`);

}
 
//Ejercicio 5
/*function mostrar()
{	
	var nombreDelAlumno;
	var apellidoDelAlumno;
	var edadDelAlumno;
	
	nombreDelAlumno=document.getElementById("txtIdNombre").value;
	
	edadDelAlumno=document.getElementById("txtIdEdad").value;

	apellidoDelAlumno=prompt("ingrese apellido:");

	alert("Usted se llama "+nombreDelAlumno+" "+apellidoDelAlumno+" y tiene " +edadDelAlumno+" años.");
}
*/
