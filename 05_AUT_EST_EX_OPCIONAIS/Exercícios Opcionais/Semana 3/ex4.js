const prompt = require('prompt-sync')();

var a
var b
var PROD

a = parseInt(prompt("Digite o valor de A: "));
b = parseInt(prompt("Digite o valor de B: "));

PROD = (a * b)

console.log("PROD = " + PROD)

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var PROD = A * B;

console.log("PROD = " + PROD); */