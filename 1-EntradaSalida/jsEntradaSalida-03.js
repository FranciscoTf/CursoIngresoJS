/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
/*function mostrar()*/
{
	
	// Encontrar ID: click derecho, inspeccionar o buscarlo en html
	// txtIdNombre

	var nombreIngresado;

	//nombreIngresado=txtIdNombre.value; 
	//Accedo directamente con ID (Asegurarse usar .value para el contenido de la ID).


	//Tambien se puede usar... 
	nombreIngresado=document.getElementById("txtIdNombre").value;
	//Llama documento html getElementById
	
	alert(nombreIngresado);


}

/*
//Faig Francisco Thomas
//Ejercicio1
function mostrar()
{	
	var nombreDelAlumno;

	var edadDelAlumno;
	
	nombreDelAlumno=document.getElementById("txtIdNombre").value;

	edadDelAlumno=prompt("Ingrese edad:");
	
	alert("Su nombre es "+nombreDelAlumno+" y tiene " +edadDelAlumno+" años.");
}
*/