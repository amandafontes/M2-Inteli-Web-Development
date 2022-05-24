function calculate() {

    var preço = document.getElementById("preço").value;
    var resultado;
    var n100;
    var n50;
    var n20;
    var n10;
    var n5;
    var n2;
    var n1;
    var r100;
    var r50;
    var r20;
    var r10;
    var r5;
    var r2;
    var r1;

    preço = parseInt(preço);
    n100 = parseInt(n100);
    n50 = parseInt(n50);
    n20 = parseInt(n20);
    n10 = parseInt(n10);
    n5 = parseInt(n5);
    n2 = parseInt(n2);
    n1 = parseInt(n1);
    r100 = parseInt(r100);
    r50 = parseInt(r50);
    r20 = parseInt(r20);
    r10 = parseInt(r10);
    r5 = parseInt(r5);
    r2 = parseInt(r2);
    r1 = parseInt(r1);


    n100 = Math.floor(preço / 100);
    r100 = preço % 100;

    n50 = Math.floor(r100 / 50);
    r50 = r100 % 50;

    n20 = Math.floor(r50 / 20);
    r20 = r50 % 20;

    n10 = Math.floor(r20 / 10);
    r10 = r20 % 10;

    n5 = Math.floor(r10 / 5);
    r5 = r10 % 5;

    n2 = Math.floor(r5 / 2);
    r2 = r5 % 2;

    n1 = Math.floor(r2 / 1);
    r1 = r2 % 1;

    if (n1 == null) {
        n1 = 0;
    }

    if (n2 == null) {
        n2 = 0;
    }

    if (n5 == null) {
        n5 = 0;
    }

    if (n10 == null) {
        n10 = 0;
    }

    if (n20 == null) {
        n20 = 0;
    }

    if (n50 == null) {
        n50 = 0;
    }

    if (n100 == null) {
        n100 = 0;
    }

    resultado = n100 + " cédula(s) de R$100,00" + ", " + n50 + " cédula(s) de R$50,00" + ", " + n20 + " cédula(s) de R$20,00" + ", " + n10 + " cédula(s) de R$10,00" + ", " + n5 + " cédula(s) de R$5,00" + " e " + n1 + " cédula(s) de R$1,00.";

    document.getElementById("resultado").innerText = "Você deve efetuar o pagamento com " + resultado;

}