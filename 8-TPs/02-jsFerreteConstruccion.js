/*

Faig Francisco Thomas
TP Ejercicio 2


2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

//txtIdLargo
//txtIdAncho
//txtIdRadio

function Rectangulo () 
{
    var largo ;
    var ancho;
    var resultado;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    resultado = (largo*2+ancho*2)*3;
    resultado = resultado.toFixed(1);

    alert (`Cantidad de alambre necesario: ${resultado} metros.`);

}

function Circulo () 
{
    var radio;
    var resultado;

    radio = document.getElementById("txtIdRadio").value;
    
    radio = parseFloat (radio);
    
    resultado = (2 * Math.PI * radio)*3;
    resultado = resultado.toFixed(1);

    alert (`Cantidad de alambre necesario: ${resultado} metros.`);

}


function Materiales () 
{   
    var largo; 
    var ancho;  
    var area;

    var cemento;
    var cal; 

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    area = ancho * largo;

    cemento = area*2;
    cal = area*3;   

    alert (`Para un contrapiso de ${area} m² se necesitan ${cemento} bolsas de cemento y ${cal} bolsas de cal.`)

}