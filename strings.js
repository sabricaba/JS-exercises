var quienSoy ="Mi nombre es Sabrina.";

console.log(quienSoy.toUpperCase());

var miPerra = "Berta es lo mejor que hay";
var berta = miPerra.substring(0, 5);

console.log(berta);

var miGato = "Juancho es lo mas";
var juancho = miGato.substring(14, 17);

console.log(juancho);

var superc = "supercalifragi";
var nuevaSuper = superc.substring(0, 1).toUpperCase() + superc.substring(1,14).toLowerCase();

console.log(nuevaSuper);

var puntoE = "Ya no se me ocurren mas";
var nuevoPuntoE = puntoE.indexOf(" ");

console.log(nuevoPuntoE);

var puntoF = "aguante radiumrocket";
var nuevoPuntoF = puntoF.substring(0, 1).toUpperCase() + puntoF.substring(1, 7) + puntoF.substring(puntoF.indexOf(" "), puntoF.indexOf("r")) + puntoF.substring(8,9).toUpperCase() + puntoF.substring(9);

console.log(nuevoPuntoF);


