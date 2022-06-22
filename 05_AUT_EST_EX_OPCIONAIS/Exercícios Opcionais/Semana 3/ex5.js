const prompt = require('prompt-sync')();

var a
var b
var media

a = parseFloat(prompt("Digite a nota A: ")).toFixed(1);
b = parseFloat(prompt("Digite a nota B: ")).toFixed(1);

media = ((a*3.5) + (b*7.5)) / 11;

console.log("MÉDIA = " + media.toFixed(5));