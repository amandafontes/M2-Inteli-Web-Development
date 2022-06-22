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

$ ( document ).ready (function(){
    alert("Olá! Você está acessando o meu currículo acadêmico.");
}); //Exercício de personalização da Etapa 4