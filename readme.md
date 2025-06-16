# DevBills API

API backend desenvolvida em TypeScript utilizando [Fastify](https://www.fastify.io/).

## 📋 Descrição

Este projeto é uma API simples para o gerenciamento de contas, construída com TypeScript e Fastify. Inclui configuração inicial de TypeScript, scripts de desenvolvimento e integração com o Biome para análise e formatação de código.

## 🚀 Funcionalidades

- Endpoint de health check: `/health`
- Estrutura modular para rotas
- Logger integrado do Fastify

## 🛠️ Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [Biome](https://biomejs.dev/) (formatação e lint)
- [TSX](https://github.com/esbuild-kit/tsx) (execução de TypeScript no desenvolvimento)

## 📦 Instalação

1. Clone o repositório:
   ```
   git clone <url-do-repositorio>
   cd DevBills/api
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## 💻 Como rodar

Para iniciar o servidor em modo desenvolvimento:
```
npm run dev
```
O servidor estará disponível em `http://localhost:3001`.

## 🧪 Testando a API

Acesse o endpoint de health check:
```
GET http://localhost:3001/health
```
Resposta esperada:
```json
{
  "status": "ok",
  "message": "DevBills API is running"
}
```

## 🧹 Lint e Formatação

Para checar ou formatar o código com o Biome:
```
npx biome check .
npx biome format .
```

## 📁 Estrutura de Pastas

```
api/
├── package.json
├── tsconfig.json
└── src/
    ├── app.ts
    ├── server.ts
    └── routes/
        └── index.ts
```

## 📝 Licença

Este projeto está licenciado sob a licença ISC.

---

Desenvolvido por Kennedy.