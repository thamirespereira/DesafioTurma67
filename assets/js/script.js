var nome = window.document.getElementById('nome');
var email = document.querySelector('#email');
var mensagem = document.querySelector('#mensagem');
var cep = document.querySelector('#cep');
var nomeOk = false;
var emailOk = false;
var mensagemOk = false;

function validarNome() {
    let txtNome = document.querySelector('#txtNome');

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido';
        txtNome.style.color = 'red';

    }else{
        txtNome.innerHTML = 'Nome válido';
        txtNome.style.color = 'green';
        nomeOk = true;
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail');

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido';
        txtEmail.style.color = 'red';

    }else{
        txtEmail.innerHTML = 'Email válido';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}

function validarMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem');

    if (mensagem.value.length >= 100) {
        txtMensagem.innerHTML = 'O texto é muito grande. Digite no máximo 100 caracteres.';
        txtMensagem.style.color = 'red';
        txtMensagem.style.display = 'block';
    } else {
        txtMensagem.style.display = 'none';
        mensagemOk = true;
    }
}

function enviarForm() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Preencha o formulário corretamente!');
    }
}

function validarCep() {
    let txtCep = document.querySelector('#txtCep');

    if (cep.value.length == 8) {
        txtCep.innerHTML = 'Cep válido.';
        txtCep.style.color = 'green';
    } else {
        txtCep.innerHTML = 'Cep inválido.';
        txtCep.style.color = 'red';
    }
}

function consultarCep() {
  
}