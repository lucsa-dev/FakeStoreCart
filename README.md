![CRP Mango Logo](https://cdn.prod.website-files.com/63fcdb80d85f318285d752b1/63fcfafd29494a75d72d1a92_Logo-CRP-Mango-Default.svg)

# FakeStoreCart

Explicação do fluxo:
- no index.js o controller app.controller.ts é cadastrado ao app contendo a rota '/add-three-products-to-cart' 
- A rota POST faz uma chamada ao método 'getProducts' do serviço 'products' buscando 3 produtos da API
- O carrinho é montado na variável cartItem junto com os produtos
- O método addCart do serviço cart.service é chamado enviando os dados do carrinho para a API
- a resposta é converdida em json e retornada
- Caso haja algum erro é retornado status 500 com a mensagem 'Serviço Indisponível' 



## Tecnologias Utilizadas

<div align="center">

  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
  ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
  ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

</div>

## Instalação

```bash
npm install
```  

## Execução em Desenvolvimento

```bash
npm run dev
```  

## Compilação e Execução em Produção

```bash
npm run build
npm start
```  

## Testes

```bash
npm run test
``` 
## Documentação Swagger 


- Acesse a rota https://fake-store-cart-flame.vercel.app/docs/
- click na aba POST / add_three_products_to_cart
- Click no botão 'Try it out'
- Aparecerá um botão 'Execute' click para executar e testar a requisição
- Visualize o status na coluna 'Code' e o resultado na coluna 	'Response body'


