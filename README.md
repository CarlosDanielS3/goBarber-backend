<h3 align="center">
  <img alt="GoBarber" src="https://github.com/CarlosDanielS3/goBarber-backend/blob/main/readme-logo.svg" width="200px"/>
</h3>

<h1 align="center">
  GoBarber - Back-end
</h1>

<p align="center">Back-end em Node.js da aplicação GoBarber.</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/CarlosDanielS3/goBarber-backend">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/CarlosDanielS3/goBarber-backend">
  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/CarlosDanielS3/goBarber-backend">
</p>

## Sobre:

O GoBarber é uma aplicação para controle de agendamento de serviços de barbearia. Onde por meio da aplicação mobile, o cliente pode agendar um horário com um prestador de serviço (provider). Na aplicação web, os prestadores de serviço podem cancelar, verificar seus agendamentos, dentre outras funcionalidades.

A API desenvolvida em Node.js e typescript realiza o cadastro e manutenção de `users`, esses usuários providers possuem `id`,`name`,`email`,`password` e um `avatar`de identificação.

Podem ser cadastrados novos `appointments`, aos quais possuem um `id`, `provider` e um `date`.

## Tecnologias utilizadas:

- node.js
- yarn
- typescript
- express
- typeORM
- postgres
- jwt 
- bcrypt
- multer
- eslint
- prettier

## Instalação e execução:

Na primeira vez que for utilizar, faça um clone deste repositório:

```bash
$ git clone https://github.com/CarlosDanielS3/goBarber-backend
```

Dentro da pasta do seu repositório criado, utilize o comando abaixo para instalar as dependências da aplicação:

```bash
yarn
```

Criar uma base de dados e configurar em `ormconfig.json`.
Para iniciar o servidor:

```bash 
yarn dev:server
```

> Utilização do [Insomnia](https://insomnia.rest/download/) para testar as rotas.

---

<p align="center"> Carlos Daniel </p>
<p align="center">
  <a alt="Carlos Daniel" href="https://www.linkedin.com/in/carlos-daniel-santos-8161331b3/">
    <img src="https://img.shields.io/badge/LinkedIn-Carlos_Daniel-7750a9179?logo=linkedin"/>
  </a>
  <a alt="Carlos Daniel" href="https://github.com/CarlosDanielS3">
    <img src="https://img.shields.io/badge/CarlosDanielS3-GitHub-000?logo=github"/>
  </a>
</p>

<blockquote align="center">
  Este projeto foi desenvolvimento durante o
    <a href="https://rocketseat.com.br/gostack">
      Bootcamp da RocketSeat
    </a>
</blockquote>
