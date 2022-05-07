var gravidade = 10
var V0
var hmax
var tempo

function Dados() {
    V0 = document.getElementById("velocidade-inicial").value;
    hmax = ((V0 ** 2) / 2 * g)
    tempo = V0 / gravidade
    alert("Altura máxima = " + hmax + " metro(s)");
    alert("Tempo de subida = " + T + " segundo(s)");
}