function ordenar() {
    var nome1 = document.getElementById("nome1");
    var nome2 = document.getElementById("nome2");
    var nome3 = document.getElementById("nome3");

    var ordem = [
        nome1.value,
        nome2.value,
        nome3.value,
    ];

    nomes = ordem.sort();

    document.getElementById("ordem").innerHTML = nomes;
    
}