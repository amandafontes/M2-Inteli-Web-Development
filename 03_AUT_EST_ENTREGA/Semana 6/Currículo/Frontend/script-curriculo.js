window.onload = function () {
    get();
}
var valor = 0;
document.getElementById("box1").style.display = 'none';
function Text(value) {
    valor += value;
    if (valor % 2 != 0) {
        document.getElementById("box1").style.display = 'block';
    }
    if (valor % 2 == 0) {
        document.getElementById("box1").style.display = 'none';
    }
}

$(document).ready(function () {
    alert("Olá! Você está acessando o meu currículo acadêmico.");
}); //Exercício de personalização da Etapa 4


function get() {
    var url = "http://127.0.0.1:3061/get";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    var resultado = JSON.parse(xhttp.response);
    document.getElementById("email").innerHTML = resultado[0].email;
    document.getElementById("telefone").innerHTML = resultado[0].telefone;
    console.log(resultado)
}