/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

// txtIdNombre
//Experimetnado con la opcion window.onload

window.onload = function()
{
	var nombre;
	
	nombre=prompt("Ingrese un nombre:")

	txtIdNombre.value=nombre;
}	
  
function mostrar()
{
	

	alert(txtIdNombre.value);
}

