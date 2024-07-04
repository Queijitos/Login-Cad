//Função para validação de acesso

let loginEmail = document.getElementById('loginEmail').value;
let loginSenha = document.getElementById('loginSenha').value;

if(!loginEmail || !loginSenha){
    alert("Favor preencher todos os campos");
}