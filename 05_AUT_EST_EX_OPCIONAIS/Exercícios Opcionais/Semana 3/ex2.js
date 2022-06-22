// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
    
// var a = parseInt(lines.shift(10));
// var b = parseInt(lines.shift(10));

// function Soma() {
//     X = a + b;
// }

// console.log(X);

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
    
// var a = parseInt(lines.shift(10));
// var b = parseInt(lines.shift(10));
   
// console.log('X = ' + (a+b));

const prompt = require('prompt-sync')();

var a
var b

a = parseFloat(prompt("Digite o valor de A: "));
b = parseFloat(prompt("Digite o valor de B: "));

var x

x = (a + b)

console.log(x)