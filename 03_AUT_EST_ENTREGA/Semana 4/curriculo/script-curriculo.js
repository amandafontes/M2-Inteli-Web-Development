var valor = 0;
document.getElementById("box1").style.display = 'none';
function Text(value){
    valor += value;
    if(valor%2!=0){
        document.getElementById("box1").style.display = 'block';
    }
    if(valor%2==0){
        document.getElementById("box1").style.display = 'none';
    }
}

// window.alert("Você está acessando um currículo.");

// var geral = document.getElementById("botao");
// var box1 = document.getElementById("box1");


// function Inicio() {
//     geral.removeChild(box2);
//     geral.removeChild(box3);
// }

// function Text() {       
//     geral.appendChild(box1);
//     // box3.innerHTML = "<a> ps: Este texto foi gerado com javascript e o botão também :) </a>";
//     button.innerHTML = "<button id='button' onclick='Voltar()'>DESTAQUES ACADÊMICOS</button>";
// }   

// function Voltar() {
//     geral.appendChild(box1);
//     geral.removeChild(box1);    
//     // geral.removeChild(box3);
//     button.innerHTML = "<button id='button' onclick='Text()'>DESTAQUES ACADÊMICOS</button>"
// }