/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	// txtIdNumeroDividendo
	// txtIdNumeroDivisor

	let dividendo;
	let divisor;
	let resto;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;
	
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);


	// % en modulo, muestra el resto.
	resto = dividendo % divisor;

	alert("El resto es: " +resto);
}
