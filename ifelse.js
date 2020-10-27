var numero = Math.random();

console.log(numero);

if (numero>=0.5){ 
    alert("Greater than 0,5");   
}else{
    alert("Lower than 0,5");
}


var age = Math.floor(Math.random()*100)+1;

if(age<2){
    alert("Bebe");
}else if(age>=2 && age<=12){
    alert("Nino")
}else if(age>=13 && age<=19){
    alert("Adolecente")
}else if(age>=20 && age<=30){
    alert("Joven")
}else if(age>= 31 && age<=60){
    alert("Adulto")
}else if(age>=61 && age<=75){
    alert("Adulto mayor")
}else{
    alert("Anciano")
}
