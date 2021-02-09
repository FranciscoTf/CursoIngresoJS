
function mostrar()
{

    let ancho
    let largo
    let area    

    ancho = prompt ("Ingrese ancho en metros :");
    largo = prompt ("Ingrese largo en metros:");

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = ancho*largo;

    alert ("El area segun las medidas dadas es: " + area + " m2." );

}
