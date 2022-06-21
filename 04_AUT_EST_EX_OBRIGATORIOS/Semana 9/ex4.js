function calcular() {
    var termo = parseInt(document.getElementById('termo').value);
    var fibonacci = [];

    var a = 0;
    var b = 1;
    var f = 1;

    for (var i = 0; i < termo; i++) {
        fibonacci.push(f);
        f = a + b;
        a = b;
        b = f;
    }

    document.getElementById("ordem").innerHTML = fibonacci;

}