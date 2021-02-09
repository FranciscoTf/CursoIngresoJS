/*
Faig Francisco Thomas
TP Ejercicio 3

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() 
{
	var fahrenheit;
    var centigrados; 

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    
    centigrados = (fahrenheit - 32)/1.8;
    
    centigrados = centigrados.toFixed(1);
    fahrenheit = fahrenheit.toFixed(1);

     alert (`${fahrenheit}° Fahrenheit son ${centigrados}° Centígrados.`);    
}

function CentigradosFahrenheit() 
{
	var fahrenheit;
    var centigrados; 

    centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    fahrenheit = (centigrados * 9/5) + 32;
    
    centigrados = centigrados.toFixed(1);
    fahrenheit = fahrenheit.toFixed(1);

    alert (`${centigrados}° centigrados son ${fahrenheit}° Fahrenheit.`);
}

