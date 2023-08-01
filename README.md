<h3 align="center">
  Potential Crud
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/lucasfdcampos/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Lucas%20Campos-%23ff9d2e">
  </a>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/lucasfdcampos/potential-crud?color=%23ff9d2e">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lucasfdcampos/potential-crud?color=%23ff9d2e">
  <a href="https://github.com/lucasfdcampos/potential-crud/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lucasfdcampos/potential-crud?color=%23ff9d2e">
  </a>
</p>

<p align="center">
  <a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rodando">Rodando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#end-points">End-points</a>
</p>

<p align="center">
<a href="https://insomnia.rest/run/?label=potential-crud&uri=https%3A%2F%2Fraw.githubusercontent.com%2Flucasfdcampos%2Fpotential-crud%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
</a>
</p>

## Sobre

API JSON Rest - CRUD de desenvolvedores.

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Yarn](https://yarnpkg.com/)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Axios](https://www.npmjs.com/package/axios)
- [TypeORM](https://typeorm.io/#/)
- [Multer](https://www.npmjs.com/package/multer)
- [Celebrate](https://github.com/arb/celebrate)
- [Styled-components](https://styled-components.com/)

Utilizei a Stack: Node.js (backend) e React.js (Front-end) por ser as tecnologias que venho estudando e estou mais familiarizado. Também utilizei o `TypeScript`, pois prefiro tipagens dos retornos das funções, parâmetros e a utilização de _interfaces_. Acredito que mesmo o código se tornando mais verboso, fica muito mais organizado, por saber realmente o que esperar de cada função.

## Rodando

### **Baixando o repositório**

```bash
git clone https://github.com/lucasfdcampos/potencial-crud.git
```

### **Docker**

Não coloquei toda aplicação no Docker compose por não ter - ainda - familiaridade com o mesmo.

```bash
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

### **DataBase**

```bash
CREATE DATABASE dev
```

### **Back-end**

```bash
cd backend 
```

### Instalar as dependências 

```bash
yarn
```

### Rodar as migrations 

```bash
yarn typeorm migration:run
```

### Projeto
> Para start o servidor

```bash
yarn dev:server
```

Adicionei rotas de usuário e autenticação, porém o `middleware` que faz a validação do token (jwt) nas rotas de _developer_ está comentado. Pois não adicionei as páginas de login/logout no front-end. Mas o login e autenticação das rotas está funcionando corretamente.

Tomei a liberdade de adicionar um avatar ao _developer_, porém não adicionei o update do mesmo no front-end. Via api está funcionando corretamente com o `Multer`. Adicionei com a ideia de deixar o _layout_ da lista de desenvolvedores no front-end mais agradável.

Também não adicionei paginação, pois - ainda - não sei como faze-lo com o TypeORM. Vou buscar como funciona essa particularidade.

### Insomnia

Importe o `Insomnia.json` no Insomnia ou clique em [Run in Insomnia](#insomniaButton)

### Testes

```bash
yarn test
```

### **Front-end**

No front-end utilizei o `styled-components` para escrever o CSS, pois acredito que há uma melhor separação dos componentes e seus estilos, eliminando bugs devido a colisão de nomes de classes e também acredito numa melhor manutenção do CSS.

Adicionei alguns `@media` para deixar o layout com responsividade. Característica que observo bastante nas páginas web atuais.

```bash
cd web 
```
### Instalar as dependências 

```bash
yarn
```

### Projeto
> Para start 

```bash
yarn start
```

## End-points

### **Usuário**

**Sign In [POST]**
```bash
/sessions
```

**Create [POST]**
```bash
/users
```

### **Desenvolvedores**

**Create [POST]**
```bash
/developers
```

**Update [PUT]**
```bash
/developers/{id}
```

**Delete [DELETE]**
```bash
/developers/{id}
```

**Update Avatar [PATCH]**
```bash
/developers/avatar?id=
```

**List [GET]**
```bash
/developers
```

**Find One [GET]**
```bash
/developers/{id}
```

**Find By Name [GET]**
```bash
/developers/?name=
```

