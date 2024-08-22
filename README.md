# Login-Cad
### Projeto de cadastro de usuarios

O projeto de cadastro de usuarios e simplismente para um teste de cadastro onde o usuario pode se cadastrar, e logo depois se quiser excluir ou ate mesmo editar o nome ou ate mesmo o email que ele adentrou, tudo isso de uma forma interativa.


# Funcionalidades

- Temas dark e light
- Preview em tempo real
- Colocar seu usuario e senha para não esquecer
- editar Email e usuario
- Excluir email ou usuario

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
### Aqui e o começo
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
### Aqui seria o Usuario colocando seu nome e logo depois seu email
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
### e aqui as opções para ele editar ou excluir


## Uso/Exemplos

```javascript
// FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY
 //------------------------------------------------------------------------------------------------------------------------
 var dadosLista = [];

// Função para salvar usuário e e-mail
function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('EmailUser').value;
   //  Coloquei as duas funções juntas para que com isso eu possa utilizar as duas ao mesmo tempo

    if (nomeUser && emailUser) {
        dadosLista.push({ nome: nomeUser, email: emailUser });
        criarLista();
        document.getElementById('nomeUser').value = "";
        document.getElementById('EmailUser').value = ""; //aqui o o codigo vai pegar o id do input dos dois ao mesmo tempo, assim economiza tempo e espaço
    } else {
        alert('Por favor, informe um nome e um e-mail para cadastro.'); //alerta para quando não estiver nada escrito, escreva.
    }
   //  como eu coloquei as funções juntas la em cima, agora as duas são chamadas juntas e agora  e precios digitar o nome e o email do usuario
}

// Função para criar e atualizar a lista de usuários
function criarLista() {
    let tabela = "<tr><th>Nome Usuario</th><th>Email</th><th>Ações</th></tr>";
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i].nome + "</td><td>" + dadosLista[i].email + "</td>" +
                  "<td><button type='button' onclick='editar(" + i + ")'>Editar</button>" +
                  "<button type='button' onclick='excluir(" + i + ")'>Excluir</button></td></tr>";
    }
    document.getElementById('tabela').innerHTML = tabela;
}
// Aqui eu atualizei para que o codigo possa colocar oque esta no input na tabela, assim ficando organizado no site e no lugar certo

// Função para editar dados de usuário
function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[i].nome;
    document.getElementById('EmailUser').value = dadosLista[i].email;
    dadosLista.splice(i, 1); // Remove o item para que possa ser atualizado
   criarLista(); //Atualiza a tabela após a exclusão
}

// Função para excluir dados de usuário
function excluir(i) {
    dadosLista.splice(i, 1);
    criarLista(); // Atualiza a tabela após a exclusão
}
```
E assim funciona o codigo por si so no javascript, enquanto o layout é

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Etiquetas

Adicione etiquetas de algum lugar, como: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-HTML-orange.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-CSS-blue.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-Javascript-whit.svg)](http://www.gnu.org/licenses/agpl-3.0)





