//Função para validação de acesso
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos");
    }
    else {
        // alert("Campos preenchidos com sucesso");
        window.location.href = 'cadastro.html'
    };
}

//Funçaõ para armazenamento de nomes em array
var dadosLista = [];
function salvarUser() {
let nomeUser = document.getElementById('nomeUser').value;

if(nomeUser){
    dadosLista.push(nomeUser);
    // console.log(dadosLista);
    CriarLista();
    document.getElementById('nomeUser').value = "";

}else{
    alert("Favor informe um nome para cadastro");
}

}
// função para criar lista de usuario
function CriarLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>nome Usuario </th><th>Ações<th><tr>";
    for(let i=0;i<=(dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='Editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='Excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
// função para editar nomes da lista
function editar(i){
    document.getElementById('nomeUser').value = dadosLista [(i-1)];
    dadosLista.splice(dadosLista[(i-1)],1);
}
// Função para excluir nome de lista
function excluir (i){
    dadosLista.splice((i - 1),1);
    document.getElementById('tabela').deleterow(i);
}