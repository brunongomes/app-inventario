# 📌 Desafio para Validação de Aprendizado através do PDI  

## 🛠️ Regras do Sistema  

### 1. Tecnologias Utilizadas  
- Backend deve ser desenvolvido em **Node.js**  
- Frontend deve ser desenvolvido em **Angular**  

### 2. Entidades do Sistema  
#### **Item**  
```json
{
  "nome": "string",
  "descricao": "string",
  "quantidade": "number"
}
```

#### **Usuário**  
```json
{
  "nome": "string",
  "email": "string",
  "login": "string",
  "tipo": "string",
  "senha": "string"
}
```
### 3. Autenticação e Segurança
- O usuário deve autenticar-se utilizando **login** e **senha** previamente cadastrados.  
- Após a autenticação, a comunicação entre **backend** e **frontend** deve ser realizada por **JWT (JSON Web Token)**.

### 4. Regras de Acesso
- **Usuário do tipo "operador"** pode acessar **apenas** o módulo de **Itens**.  
- **Usuário do tipo "admin"** pode acessar **tanto o módulo de Itens quanto o módulo de Usuários**.  

### 5. Funcionalidades
- O sistema deve permitir **todas as operações CRUD (Create, Read, Update, Delete)** para os módulos disponíveis a cada usuário, de acordo com seu tipo de acesso.  

### Referência de Layout
https://www.figma.com/design/6f9Zh1gWVbjQ5lWGcUPUNR/Untitled?node-id=83-2&t=Rvh2pze3RIMyJdES-1

