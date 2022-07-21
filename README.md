![octopustore](https://user-images.githubusercontent.com/68860740/180073423-ee6e82eb-b55f-4823-af82-f5ae184ba467.png)

<h1 align="center">Octopustore - Fidelização do cliente com sistema de pontos</h1>

<p align="center">
  Uma loja <a href="https://vtex.com/br-pt/" target="_blank">VTEX</a> responsiva desenvolvida com <a href="https://vtex.com/br-pt/vtex-io/?utm_source=google&utm_medium=cpc&utm_campaign=BR_VTEX_Search_Branded_Others&utm_term=sistema%20vtex&utm_content=ecommerce_601497335179">VTEX IO</a> que ao termos uma compra realizada e essa compra passar da janela de cancelamento, ou seja, do período que o cliente tem para realizar o cancelamento da compra caso desista, identifica os dados dessa compra como o cliente e valor pago (desconsiderando frete e deduzindo possíveis descontos) e salva no Master data, que seria a solução da própria VTEX para armazenamento de dados.
  Com esses dados salvos, a cada 1 real em compra é gerado 1 ponto(octoponto) e para o cliente ter controle dos seus pontos disponibilizamos uma página onde o cliente consulta sua pontuação atualizada.
</p>

<p align="center">
 <a href="#desenvolvedores">Desenvolvedores</a> •
 <a href="#feature">feature</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#arquitetura">Arquitetura</a> •
 <a href="#como-usar">Como usar</a> •
 <a href="#desafios">Desafios</a> •
 <a href="#melhorias">Melhorias</a> 
</p>

<h4 align="center">
	 Status: Em desenvolvimento
</h4>

<h4 align="center">
  <a  href="#">
    Octopustore
  </a>
</h4>

### Desenvolvedores
 
 - Manoella Rossi
 - Marcone Carvalho
 - Melvim Chang
 - Otávio Cleyderman
 - Samuel Barbosa
 - Saulo Santos
 - Victor Ferreira
 - Willy Oliveira


### Feature

- [x] Implementar modelo de recompensa, a cada 1 real gasto deve gerar 1 ponto de recompensa
- [x] Todo cliente precisa saber quantos pontos tem em sua carteira virtual, logo um contador deve estar visível para validação do saldo.

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [VTEX IO](https://vtex.com/br-pt/vtex-io/?utm_source=google&utm_medium=cpc&utm_campaign=BR_VTEX_Search_Branded_Others&utm_term=sistema%20vtex&utm_content=ecommerce_601497335179);
- [React](https://pt-br.reactjs.org/);
- [TypeScript](https://www.typescriptlang.org/).
- [Node](https://nodejs.org/pt-br/)


#### Auxiliares

- [VTEX APIs](https://developers.vtex.com/vtex-rest-api/docs);
- [Axios](https://github.com/axios/axios);

#### Padronização de código:

- [ESLint](https://eslint.org/);
- [Prettier](https://prettier.io/).

### Arquitetura

```shell
src/
|-- service-api/# Back-end - Contém a lógica para identificar a compra, cliente e valor pago para gerar os pontos
    |-- docs
    |-- node/
|-- store-block-pontuacao/# Componente personalizado para carteira digital, onde mostrará os pontos do cliente
    |-- messages
    |-- node
    |-- react
    |-- store
|-- store-theme/# Front-end da loja
    |-- assets
    |-- docs
    |-- sitemap
    |-- store
    |-- styles
|--readme.md
```
---

### Como usar
#### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/package/npm), [VTEX Toolbelt(CLI do VTEX IO)](https://learn.vtex.com/docs/course-basic-blocks-step00setup-lang-pt)

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

##### Clone este repositório
```bash
git clone https://github.com/willyoliv/desafio-hiring-coders.git
```
##### Acesse o terminal/cmd e utilizando os comandos do VTEX Toolbelt(CLI do VTEX IO) logue na conta bitsized
```bash
vtex login bitsized
```
##### Para verificar em qual conta VTEX e workspace está logado use o comando
```bash
vtex whoami
```
##### Para criar/usar um workspace utilize o comando VTEX use. Para esse projeto utilize
```bash
vtex use desafiogrupo1
```
##### Após logar e confirmar o workspace que será utilizado, acesse as pastas [service-api] e [store-block-pontuacao] do projeto no terminal/cmd e instale as dependências
```bash
cd store-block-pontuacao
yarn
# ou npm install
```
```bash
cd service-api
yarn
# ou npm install
```
##### Para executar a aplicação em desenvolvimento deve acessar cada pasta(que seria um ambiente da loja, um ambiente do bloco customizado e o backend onde está a api para consumir os pedidos e verificar a compra para gerar os pontos) e rodar o comando vtex link
```bash
cd store-theme
vtex link
```
```bash
cd store-block-pontuacao
vtex link
```
```bash
cd service-api
vtex link
```

#### Agora, como nesse desafio tem 5 grupos usando a mesma conta, confirme a configuração da aplicação de evento para que nossa aplicação funcione corretamente

Acesse o link: https://bitsized.myvtex.com/admin/apps/vtex.orders-broadcast/setup

No campo "Notify Target workspace" verifique se está inserido "desafiogrupo1" e apenas ele. Se não estiver, adicione "desafiogrupo1" apenas no campo e clique em salvar. 
![image](https://user-images.githubusercontent.com/68860740/180092482-b58516ca-34f4-4d54-98fe-5321117f2ffd.png)

  
Após isso, pode acessar a loja, logar, realizar compra e verificar a sua carteira digital para companhar a sua pontuação
___


#### Poderá acessar a loja no link: https://desafiogrupo1--bitsized.myvtex.com/
![image](https://user-images.githubusercontent.com/68860740/180092974-5678c3cd-85eb-4545-8982-5d766ad3cf7f.png)


#### Para acessar a sua carteira digital, poderá clicar no banner sobre os pontos ou acessar esse link: https://desafiogrupo1--bitsized.myvtex.com/minha-carteira
![image](https://user-images.githubusercontent.com/68860740/180093036-e35c5cec-6aec-492a-8b2c-9e8c3fb59291.png)



___

### Desafios
<p> Colocar em prática todo o conhecimento adiquirido nos treinamentos nas plataformas da Gama e VTEX foi um desafio por si só, ve o quanto tinhamos absorvido e entendido.
 Entender os conceitos por trás de cada tecnologia, principalmente do VTEX IO e sua extensa gama de clientes e apps e como cada conceito se relaciona na prática. 
 
 Outro ponto foi a contrução do backend para escutar os eventos de compra, selecionar corretamente o status e com isso pegar as informações necessárias para salvarmos 
 e termos a informação sobre qual cliente e quantos pontos ele adiquiriu devido a compra para mostrar no front foi cheia de reviravoltas, testes e mais testes sobre o resultado esperado e adiquirido, realmente foi um desafio e tanto, ainda mais levando em consideração o prazo de entrega.
</p>

---

### Melhorias
<p> 
  Acreditamos que uma das melhorias aplicaveis seria quando ao backend ser mais componentizado a fim de aproveitar a escuta dos eventos de pedido para realizarmos mais ações e interação com o cliente.
</p>

---

<p align="center">Agradecemos a <a href="https://github.com/vtex">VTEX</a> e a <a href="https://www.gama.academy/">Gama Academy</a> pela oportunidade!</p>
