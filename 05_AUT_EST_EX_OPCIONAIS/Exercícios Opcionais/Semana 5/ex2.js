const prompt = require('prompt-sync')();

var numero

numero = parseFloat(prompt("Digite um número: "));

if(numero > 0 && numero <= 25){
    console.log("Intervalo (0,25]")
}else if(numero > 25 && numero <= 50){
    console.log("Intervalo [25,50)")
}else if(numero > 50 && numero <= 75){
    console.log("Intervalo (50,75]")
}else if(numero > 75 && numero <= 100){
    console.log("Intervalo (75,100]")
}else(console.log("Fora de intervalo"))


/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numero

numero = Number(input)

if(numero >= 0 && numero <= 25){
    console.log("Intervalo [0,25]")
}else if(numero > 25 && numero <= 50){
    console.log("Intervalo (25,50]")
}else if(numero > 50 && numero <= 75){
    console.log("Intervalo (50,75]")
}else if(numero > 75 && numero <= 100){
    console.log("Intervalo (75,100]")
}else(console.log("Fora de intervalo")) */