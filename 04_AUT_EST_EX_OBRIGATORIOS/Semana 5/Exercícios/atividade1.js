function calculate() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operação = document.getElementById("operação").value;
    var resultado;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (operação == "soma") {
        resultado = num1 + num2;
    }

    if (operação == "subtração") {
        resultado = num1 - num2;
    }

    if (operação == "multiplicação") {
        resultado = num1 * num2;
    }

    if (operação == "divisãoInteira") {
        resultado = Math.floor(num1 / num2);
    }

    if (operação == "divisãoExata") {
        resultado = num1 / num2;
    }

    if (operação == "módulo") {
        resultado = num1 % num2;
    }

    // document.getElementById("resultado") = resultado;
    document.getElementById("resultado").innerText = resultado;
}