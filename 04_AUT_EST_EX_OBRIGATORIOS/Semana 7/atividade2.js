function Trocar(){

    var texto1 = document.getElementById("texto1").value;
    var texto2 = document.getElementById("texto2").value;

    document.getElementById("texto1").value = texto2;
    document.getElementById("texto2").value = texto1;

}