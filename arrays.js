var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]);
console.log(meses[10]);

console.log(meses.sort());

meses.push("Fin de ano");
meses.unshift("Ano nuevo");

console.log(meses);

meses.shift();
meses.pop();

console.log(meses);

meses.reverse();
console.log(meses);

var mesesSegunda = meses.join("-");
console.log(mesesSegunda);

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var mesesTercera = meses.slice(4, 11);
console.log(mesesTercera);