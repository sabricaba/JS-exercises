var miArray = ["berta", "juancho", "simur", "bartolo", "summer"];

for(var i=0; i<miArray.length; i++){
    alert(miArray[i])
}

for(var i=0; i<miArray.length; i++){
    var upperCase =miArray[i][0].toUpperCase() + miArray[i].slice(1);
    alert(upperCase)
}

var sentence = " "; 
for(var i=0; i<miArray.length; i++){
    sentence += miArray[i] + " "
}
alert(sentence);



var arrayVacio = []
for(var i=0; i<10; i++){
    arrayVacio.push(i)
}

console.log(arrayVacio);
