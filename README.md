
# Cadastro de Usuarios V0.1

### Descrição do Projeto:

O projeto de cadastro de usuarios vem da ideia de conseguir inserir seu email e senha em um cadastro e entrar em um site onde você possa salvar seu email e seu nome de usuario, onde tambem e possivel você editar ou ate mesmo excluir oque você salvou, Tudo isso com o uso de JavaScript, CSS e HTML 

# Indice
- [Titulo](#cadastro-de-usuarios-v01)
- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Como abrir e rodar o codigo](#como-abrir-e-rodar-o-codigo)
- [Aplicação](#❔como-funciona-o-codigo)
- [Ferramentas Utilizadas](#ferramentas-utilizadas)
- [Desenvolvedores]()

# Funcionalidades
Funcionalidades do projeto:
- `Funcionalidade 1`: O site consegue cadastrar um usuario e uma senha, onde ele pode ser validado (tornar ou declarar válido).
- `Funcionalidade 2`: Tambem e possivel salvar seu Usuario e seu Gmail, caso esqueça, onde tambem são validados automaticamente via JavaScript
- `Funcionalidade 3`: O site tambem consegue fazer com que você possa Editar e ate mesmo excluir o email e usuario indicados 

- `Funcionalidade 4`: É possivel tambem salvar mais de um usuario e um email no site, onde e possivel guardar suas contas futuramente


# Como Abrir e rodar o codigo
## 📁 Acesso ao projeto

**Você pode Baixar o projeto por este [Link]() ou se quiser ver diretamente o codigo, use este Link a baixo:**

```https://github.com/Queijitos/Login-Cad.git```

## 🛠️ Abrir e rodar o projeto


**Para abrir e rodar o Projeto tendo o baixado, logo depois ir ate a pasta escolhida para o download, tambem pode ate ir para a pasta de donwloads**
### 🔧  Extraindo a pasta 	
**depois você tera que extrair a pasta do projeto**
###	💻 Abrindo e rodando o codigo
**entrando na pasta Você tera que entrar no arquivo de site ["login.html"](login.html),
assim que entrar no site**
![](login.png)

<br>

**🛠️ Assim que você logar no site, você sera direcionado para o site de cadastro de usuarios e de email:**
![](comeco.jpeg)
**🛠️ Para seguir e salvar o seu usuario e senha você tera que ir Colocando no campo de Usuario e Email, suas informações:**
![](meio.jpeg)
**🛠️ E por fim quando você apertar o botão de salvar, o codigo ira rodar e você fara com que fique salvo no sistema:**
![](fim.jpeg)

# ❔ Como funciona o codigo?
## Validação de Email
```function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
  
    if(!loginEmail || !loginSenha){
        alert('favor preencher todos os campos');
    }else{
        window.location.href = 'cadastro.html';
    }
}
````
Como funciona:

 - Essa função, chamada acessar, é ativada quando o usuário tenta fazer login.
- Ela coleta o valor dos campos de input para e-mail (loginEmail) e senha (loginSenha) no formulário.
- Se algum dos campos estiver vazio, exibe um alerta pedindo para preencher todos os campos.
- Se ambos os campos estiverem preenchidos, o código redireciona o usuário para a página cadastro.html 

# Cadastro de usuarios

    ``var dadosLista = [];

    //Função para salvar usuário e e-mail
    function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('EmailUser').value;

    if (nomeUser && emailUser) {
        dadosLista.push({ nome: nomeUser, email: emailUser });
        criarLista();
        document.getElementById('nomeUser').value = "";
        document.getElementById('EmailUser').value = "";
    } else {
        alert('Por favor, informe um nome e um e-mail para cadastro.');
    }
    }

    // Função para criar e atualizar a lista de usuários
    function criarLista() {
    let tabela = "<tr><th>Nome Usuario</th><th>Email</th><th>Ações</th></tr>"; for (let i = 0; i < dadosLista.length; i++) { tabela += "<tr><td>" + dadosLista[i].nome + "</td><td>" + dadosLista[i].email + "</td>" + "<td><button type='button' onclick='editar(" + i + ")'>Editar</button>" +                 "<button type='button' onclick='excluir(" + i + ")'>Excluir</button></td></tr>";
    }
     document.getElementByI('tabela').innerHTML = tabela;
    }

    // Função para editar dados de usuário
    function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[i].nome;
    document.getElementById('EmailUser').value = dadosLista[i].email;
    dadosLista.splice(i, 1); // Remove o item para que possa ser atualizado
    criarLista();
    }

    // Função para excluir dados de usuário
    function excluir(i) {
    dadosLista.splice(i, 1);
    criarLista();
    }``
## Declaração da variável global
**javascript**

var dadosLista = [];
- Essa linha cria uma variável global chamada dadosLista, que é um array usado para armazenar objetos que representam os usuários, cada um com um nome e um e-mail.
## Função para salvar usuário

- Obtém o valor dos campos de entrada com IDs nomeUser e EmailUser.
- Verifica se ambos os campos foram preenchidos.
- Se ambos estiverem preenchidos, cria um novo objeto de usuário com esses valores e o adiciona ao array dadosLista.
- Chama a função criarLista() para atualizar a tabela exibida na página com os novos dados.
Limpa os campos de entrada.
- Se algum campo estiver vazio, exibe um alerta pedindo que o usuário preencha ambos os campos.
##  Função para criar e atualizar a lista de usuários
- Cria uma string tabela que começa com o cabeçalho da tabela.
- Itera sobre o array dadosLista e para cada usuário, adiciona uma linha (<tr>) à string tabela com o nome, e-mail e dois botões: um para editar e outro para excluir.
- Atualiza o conteúdo HTML do elemento com o ID tabela com a nova string tabela.

## Função para editar dados de usuário e Excluir:
- Preenche os campos de entrada com os dados do usuário selecionado para edição.
- Remove o usuário do array dadosLista usando splice() para que o usuário possa ser atualizado.
- Chama criarLista() para atualizar a tabela.

### **Para Excluir**
- Remove o usuário do array dadosLista com splice().
- Chama criarLista() para atualizar a tabela.

# Resumo
- O código permite adicionar, editar e excluir usuários em uma lista.
- O salvarUser() adiciona um novo usuário à lista.
- O criarLista() atualiza a tabela exibida na página com os usuários atuais.
- O editar(i) preenche os campos de entrada com os dados do usuário selecionado e o remove da lista.
- O excluir(i) remove o usuário da lista.

# Ferramentas Utilizadas
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Utilizadp&message=%20HTML&color=RED&style=for-the-badge)
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Utilizado&message=%20CSS&color=BLUE&style=for-the-badge)
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=Utilizado&message=%20JavaScriptO&color=YELLOW&style=for-the-badge)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&hide=GLSL,TypeScript,Astro,Makefile,rust,GO,Python,Shell,Lua,)](https://github.com/anuraghazra/github-readme-stats)
