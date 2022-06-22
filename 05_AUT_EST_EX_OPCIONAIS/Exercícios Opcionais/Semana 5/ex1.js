const prompt = require('prompt-sync')();

var A
var B
var C
var D

A = parseInt(prompt("Digite o valor de A: "));
B = parseInt(prompt("Digite o valor de B: "));
C = parseInt(prompt("Digite o valor de C: "));
D = parseInt(prompt("Digite o valor de D: "));

// if(B>C) and (D>A) and (C+D > A+B)
// and (C>0 and D>0) and (A%2=0);

if((B>C) && (D>A) && (C+D > A+B) && (C>0 && D>0) && (A%2==0)){
    console.log("Valores aceitos");
} else{
    console.log("Valores não aceitos");
}