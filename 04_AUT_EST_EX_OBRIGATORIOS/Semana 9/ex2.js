function somar() {
    var numero = document.getElementById('numero').value;
    resultado = parseInt(numero[0]) + parseInt(numero[1]) + parseInt(numero[2]);
    document.getElementById("soma").innerText = "Soma dos dígitos: " + resultado;
}