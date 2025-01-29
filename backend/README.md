# **Plataforma de Inventário - Backend** 📦

Este é o backend de uma **plataforma de inventário** desenvolvida com **Node.js**, **Express** e **JWT** para autenticação e controle de acesso. O sistema permite a **gestão de itens** e a **administração de usuários** com diferentes permissões de acesso (operador e admin).

## **Tecnologias Utilizadas** 🛠️
- **Backend**: Node.js, Express
- **Autenticação**: JSON Web Token (JWT)
- **Banco de Dados**: MongoDB
- **Gerenciamento de Dependências**: npm

## **Funcionalidades** 📋
- **Login de usuário**: Autenticação de usuários com login e senha.
- **Controle de Acesso**: Diferentes permissões de acesso para usuários:
  - **Operador**: Pode acessar apenas o módulo de **Itens**.
  - **Admin**: Pode acessar tanto o módulo de **Itens** quanto o módulo de **Usuários**.
- **CRUD de Itens**:
  - **Criar, Ler, Atualizar e Deletar** itens no inventário.
- **Segurança**: Uso de **JWT** para autenticação e controle de sessões.

## **Regras de Acesso** 🔑
- **Usuário "operador"**:
  - Acesso permitido apenas ao módulo de **Itens**.
  - Pode realizar todas as operações CRUD nos itens.
- **Usuário "admin"**:
  - Acesso ao módulo de **Itens** e **Usuários**.
  - Pode gerenciar usuários e também realizar operações CRUD nos itens.

## **Como Rodar o Projeto Localmente** 🖥️

1. **Instale as dependências**:
   ```bash
   npm install
   ```

2. **Modifique o arquivo `.env-example`** com as variáveis de ambiente necessárias

3. **Inicie o servidor**:
   ```bash
   npm start
   ```

## **Endpoints Disponíveis** 🌐

### **Autenticação**
- **POST** `/login`  
  Realiza o login e retorna um **JWT**.

    **Corpo da Requisição**:
    ```json
    {
      "login": "usuario",
      "senha": "senha"
    }
    ```

    **Resposta**:
    ```json
    {
      "token": "seu_token_jwt"
    }
    ```

### **Itens (CRUD)**
- **GET** `/itens`  
  Lista todos os itens no inventário.

- **POST** `/itens`  
  Cria um novo item no inventário.

    **Corpo da Requisição**:
    ```json
    {
      "nome": "Produto X",
      "descricao": "Descrição do Produto X",
      "quantidade": 10
    }
    ```

- **PUT** `/itens/:id`  
  Atualiza um item no inventário.

    **Corpo da Requisição**:
    ```json
    {
      "nome": "Produto X atualizado",
      "descricao": "Descrição do Produto X atualizado",
      "quantidade": 15
    }
    ```

- **DELETE** `/itens/:id`  
  Deleta um item do inventário.

### **Usuários**
- **GET** `/usuarios` (Somente admin)  
  Lista todos os usuários cadastrados.

- **POST** `/usuarios` (Somente admin)  
  Cria um novo usuário.

    **Corpo da Requisição**:
    ```json
    {
      "nome": "Novo Usuário",
      "email": "email@dominio.com",
      "login": "usuario",
      "senha": "senha",
      "tipo": "operador"
    }
    ```
- **PUT** `/usuarios/:id`  
  Atualiza um usuário.

    **Corpo da Requisição**:
    ```json
    {
      "nome": "Novo Usuário",
      "email": "email@dominio.com",
      "login": "usuario",
      "senha": "senha",
      "tipo": "operador"
    }
    ```

- **DELETE** `/usuarios/:id`  
  Deleta um usuário.

---

## **Dependências Principais** 📦
- `express`: Framework para criar APIs em Node.js.
- `jsonwebtoken`: Biblioteca para gerar e validar JWTs.
- `mongoose`: ODM para trabalhar com o MongoDB.
- `dotenv`: Carrega variáveis de ambiente a partir de um arquivo `.env`.
