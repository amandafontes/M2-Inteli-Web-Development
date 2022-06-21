function calcular() { //ao clicar no botão, a função resultado é executada
    var numero = document.getElementById('numero').value; //a variável numero recebe o valor do input numero
    var string = numero.split(''); //separa os dígitos
    resultado.innerHTML = "[" + string + "]"; //exibe na tela o split
    console.log(resultado);

    var centena = string[0];
    console.log(centena);
    document.getElementById("valor-centena").innerText = "Dígito da centena: " + centena;

    if(centena%2 == 0) {
        document.getElementById("resultado").innerText = "O dígito da centena é par";
    }else {
        document.getElementById("resultado").innerText = "O dígito da centena é ímpar";
    }
}