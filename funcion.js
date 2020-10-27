function suma(n1, n2) {
    return n1 + n2
}

var resultado = suma(5, 18);

console.log(resultado);


function suma(n1, n2) {
    if (typeof n1 != "number" || typeof n2 != "number") {
        alert("Un parametro tiene error");
        return NaN;
    } else {
        return n1 + n2;
    }
}   

var resultado = suma(5, "13");
console.log(resultado);

function validateInterger (n3) {
    return (Number.isInteger(n3))
}

var resultadoDos = validateInterger (3.9)
console.log(resultadoDos);

function suma(n1, n2) {
    if (typeof n1 != "number" || typeof n2 != "number") {
        alert("Un parametro tiene error");
        return NaN;
    } else if(!validateInterger(n1)) {
        alert("N1 no es entero")
        return Math.round(n1);
    } else if(!validateInterger(n2)) {
        alert("N2 no es entero")
        return Math.round(n2)
    } else {
        return n1 + n2;
    }
}   

var resultadoTres = suma(1, 3.9);
console.log(resultadoTres);

function suma(n1, n2) {
    if (areNotANumber(n1, n2)) {
        alert("Un parametro tiene error");
        return NaN;
    } else {
        return n1 + n2;
    }
}

function areNotANumber(n1, n2) {
if (typeof n1 != "number" || typeof n2 != "number") {
    return true;
} else {
    return false;
}
}

var resultadoCuatro = suma (1, "hola");
console.log(resultadoCuatro);