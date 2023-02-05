
<p align="center">
  <a href="https://vuejs.org/" target="blank"><img width="200" alt="Nest Logo" /></a>
</p>

## Description

## Instalación

```bash
yarn install
```

## Config environment variables

1. Rename .env.example file found in the root project to .env.
2. Add some value to environment variables previus to build app.
Remember this varaibles need to start with 'VITE', if the env variable does not start with 'VITE', this is not recognized.

For example:
```bash
VITE_BE_HOST=http://localhost:3000/
```

## Running app

```bash
#development
yarn dev
```

```bash
#production mode
yarn build
```

## Backend Project

This project is development in two projects (Frontend and backend). Backend was developed in nestjs and postgresql implement websokets. [here](https://github.com/JavierHdzO/server-chat-ws)