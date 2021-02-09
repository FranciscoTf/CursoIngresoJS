
/*
Faig Francisco Thomas
TP Ejercicio 1 

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres

function Sumar () 
{
    var precioUno;
    var precioDos;
	var precioTres;

    var suma;

    precioUno = parseFloat (document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat (document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat (document.getElementById("txtIdPrecioTres").value);

    suma = (precioUno + precioDos + precioTres);
    suma = suma.toFixed(2);


    alert ("El precio total es: " + suma);

}
function Promedio () 
{
    var precioUno;
    var precioDos;
	var precioTres;
    
    var promedio;
    
    precioUno = parseFloat (document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat (document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat (document.getElementById("txtIdPrecioTres").value);

    promedio = (precioUno+precioDos+precioTres/3);
    promedio = promedio.toFixed(2);


    alert ("El promedio es : " + promedio);

}
function PrecioFinal()
{
    
    var precioUno;
    var precioDos;
    var precioTres;
    var preciofin;

    precioUno = parseFloat (document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat (document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat (document.getElementById("txtIdPrecioTres").value);

    preciofin = (precioUno+precioDos+precioTres+(precioUno+precioDos+precioTres)*0.21);
    preciofin = preciofin.toFixed(2);

    alert ("El costo de los 3 productos + IVA(21%) es : " + preciofin);

}