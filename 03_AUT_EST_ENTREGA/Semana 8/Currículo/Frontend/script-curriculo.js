window.onload = function () {
    get();
    getHabilidades();
}
var valor = 0;
document.getElementById("box1").style.display = 'none';
function Text(value) {
    valor += value;
    if (valor % 2 != 0) {
        document.getElementById("box1").style.display = 'block';
    }
    if (valor % 2 == 0) {
        document.getElementById("box1").style.display = 'none';
    }
}

/* $(document).ready(function () {
    alert("Olá! Você está acessando o meu currículo acadêmico.");
}); //Exercício de personalização da Etapa 4 */


function get() {
    var url = "http://127.0.0.1:3000/get";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    var resultado = JSON.parse(xhttp.response);
    document.getElementById("email").innerHTML = resultado[0].email;
    document.getElementById("telefone").innerHTML = resultado[0].telefone;
    console.log(resultado)
}

function btn() {
    var habilidade = document.getElementById("add").value;
    console.log(habilidade);
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3000/btn',
        data: { habilidades: habilidade },
    }).done(function () {
        getHabilidades();
    }).fail(function (msg) {
    }).always(function (msg) {
    });

}

function getHabilidades() {

    $.ajax({
        url:'http://127.0.0.1:3000/getHabilidades',
        type: 'GET',
        success: data => {
            var lista = '';
            data.forEach(element => {
                lista += `<li id="${element.id}">${element.habilidades}<button onclick="deletar(${element.id})">X</button></li><li><button id="B${element.id}" onclick="editar(${element.id})">Editar</button></li>`;
                });
            $('#lista').html(lista);
        }
    });

}

function deletar(id) {

    if(confirm('Confirmar a exclusão?')) {
        $.ajax({
            type: 'DELETE',
            url: 'http://127.0.0.1:3000/deletarHabilidade',
            data: {id:id},
        }).done(function(){
            getHabilidades();
        }).fail(function(msg) {
        
        }).always(function(msg) {

        });
    }
}

function editar(id) {

    const input = document.createElement('input')
    const input2 = document.getElementById(id)

    input2.appendChild(input)

    const button = document.getElementById(`B${id}`)
    button.setAttribute('onclick', `salvar(${id})`)
    button.innerText = "Salvar"
}

function salvar(id) {

    var titulo = document.querySelector('input').value

    $.ajax({
        type: 'PUT',
        url: 'http://127.0.0.1:3000/editar',
        data: {
            habilidades: titulo,
            id:id
        },
    }).done(function(){
        getHabilidades();
    }).fail(function(msg) {
    
    }).always(function(msg) {

    });
}