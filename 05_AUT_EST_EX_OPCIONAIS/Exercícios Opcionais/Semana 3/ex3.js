const prompt = require('prompt-sync');

var area
var π = 3.14159
var raio = prompt("Digite um número: ");

// area = π * (raio ** 2)
area = π * Math.pow(raio, 2)

console.log(area)