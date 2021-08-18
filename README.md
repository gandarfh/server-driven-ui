# Server Driven UI

Neste artigo vamos desenvolver uma simples aplicação que vai consumir um pequeno JSON e renderizar um tela com esses dados.

Nada muito fora da realizada de muitos desenvolvedores frontend correto? Ai que esta o diferencial, nesse JSON teremos também quais componentes deveram ser utilizados para compor a nossa tela final. Basicamente tirando a responsabilidade de construção da interface do front.

## O que é Server Driven Ui

Sendo bem breve, SDU (Server Driven Ui) é uma das alternativas de se montar a interface da sua aplicação, onde através de uma API será retornado tudo, tanto os dados de usuário para montar um simples avatar quanto os componentes que iriam compor essa pedaço da interface.

Uma estrutura muito conhecida é a de simplesmente enviar os dados através de uma API e no frontend iriamos pegar esses dados e compor a tela da forma em que foi acordado.

## Como implementar

Sera necessário desenvolver as seguintes implementações:

- Backend (BFF) -> Ele ira expor o json para criar a tela.

  - Uma estrutura simples com pelo menos uma rota por tela. ex: get -> /api/home representaria www.meu-site.com/

- Frontend -> Para renderizar os componentes informados pela api.
  - No caso do react (Next.js) um provider para controlar as configurações básicas.
  - Uma função simples para criar as configurações.
  - Uma função que vai ler o json e gerar a arvore de componentes.
  - Um hook para realizar a requisição e retornar a arvore de componentes.
  - Implementar internacionalização com next-18next com os arquivos de tradução em uma ambiente externo.

### Backend

Nosso backend terá a seguinte estrutura:

```shell
├── src
│   ├── api
│   │   ├── Home
│   │   │   ├── controller.ts
│   │   │   └── routes.ts
│   │   └── Search
│   │       ├── controller.ts
│   │       └── routes.ts
│   ├── app.ts
│   ├── routes.ts
│   └── server.ts
├── package.json
└── tsconfig.json
```

### Frontend

Nosso frontend terá a seguinte estrutura:

```shell
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   └── search.tsx
├── public
│   ├── favicon.ico
├── src
│   ├── components
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── Search.tsx
│   ├── screens
│   │   ├── Home
│   │   │   └── index.tsx
│   │   └── Search
│   │       └── index.tsx
│   └── sdu
│       ├── config.tsx
│       ├── Context.tsx
│       └── createElement.tsx
├── retriever.d.ts
├── next.config.js
├── next-env.d.ts
├── next-i18next.config.js
├── README.md
├── package.json
└── tsconfig.json
```
