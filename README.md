# Backend - Leitura de tarô API (NestJS)

## Tecnologias

- [NestJS](https://nestjs.com/)
- [MongoDB (via Atlas)](https://www.mongodb.com/atlas)
- [Zod](https://zod.dev/) para validação
- [Swagger](https://swagger.io/) para documentação

## Descrição

Uma api simples para avalição de conhecimento e prática.

## Rodando o projeto

### Clone o repositório e instale as dependências:

```bash
$ git clone https://github.com/CarolZNS/tarot-backend.git
$ npm install
```

### Configure o arquivo .env (env.example disponível)

```
PORT=3001
MONGODB_URI=mongodb+srv://<usuario>:<senha>@tarot-study.kzmk482.mongodb.net/tarot-fullstack?retryWrites=true&w=majority
```

### Inicie o servidor:

```bash
$ nest start --watch
```

### Acesse os endpoints com a documentação Swagger ou rode o front:

```
http://localhost:3001/api
```

[Acesse o repositório do front :)](https://github.com/CarolZNS/tarot-frontend)

## Endpoints Documentados:

### Autenticação

- **POST /auth/register**
  - Body: `{ email: string, password: string }`
  - Registra um novo usuário.

- **POST /auth/login**
  - Body: `{ email: string, password: string }`
  - Retorna um token JWT.

### Consumo da API Externa

- **GET /draw_card**
  - Protegido por JWT.
  - Retorna dados de uma carta de tarô, vindo de API pública em inglês.

### Usuários

- **GET /users/profile**
  - Protegido por JWT.
  - Retorna o perfil do usuário logado, apenas para conferência interna.

## Contato

Carolina Nunes - nunes.carolzs@gmail.com

Project Link: [Api tarô](https://github.com/CarolZNS/tarot-backend/)

## API original

- [Link da api original consumida no back](https://app.swaggerhub.com/apis/ekswagger/tarot-api/1.3#/)
