<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Nest.Js - PSQL(Docker) - PrismaOrm

Restful API created as a study case for Nest.js. Using a docker container with a postgres:13 image configured and Prisma as the ORM

- [Docs](#official-docs)
- [Installation](#installation)
- [Database Scripts](#database-scripts)
- [Runnning the app](#running-the-app)
- [Prisma](#prisma)
- [Tests](#test)

## Official Docs

- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
- [Prisma ORM](https://www.prisma.io/docs) Intuitive Database Client for TypeScript and Node.js

## Installation

```bash
$ npm install
```

## Database scripts

> yarn db:dev:up is REQUIRED to start the project the first time

```bash
# Initializes Docker Container.
yarn db:dev:up

# Drop Container and Initialize again with migrations
yarn db:dev:restart
```

## Running the app

> Port 5500 by default

> yarn start:dev should be used as default during development

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Prisma

Since we are using prisma we have access to all their scripts

```bash
# Initialize prisma project
npx prisma init

# To start ORM vizualizer
npx prisma studio

# Create migrations from your schemas
npx prisma migrate dev

# Pull the schemas from existing db migration
npx prisma db pull
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
