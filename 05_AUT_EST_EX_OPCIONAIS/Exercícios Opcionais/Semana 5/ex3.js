const prompt = require('prompt-sync')();

var codigo
var quantidade
var total

codigo = parseInt(prompt("Digite o código do produto: "));
quantidade = parseInt(prompt("Informe a quantidade desejada: "));

if(codigo == 1){
    total = quantidade * 4.00}

if(codigo == 2){
    total = quantidade * 4.50}

if(codigo == 3){
    total = quantidade * 5.00}

if(codigo == 4){
    total = quantidade * 2.00}

if(codigo == 5){
    total = quantidade * 1.50}

console.log("Total: R$ " + total.toFixed(2))





/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var codigo = Number(input);
var quantidade = Number(input);
var total = 0;

codigo = parseInt();
quantidade = parseInt();

if(codigo == 1){
    total = quantidade * 4.00}

if(codigo == 2){
    total = quantidade * 4.50}

if(codigo == 3){
    total = quantidade * 5.00}

if(codigo == 4){
    total = quantidade * 2.00}

if(codigo == 5){
    total = quantidade * 1.50}

console.log("Total: R$ " + total.toFixed(2)); */