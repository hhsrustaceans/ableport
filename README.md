# ![Ableport Logo](/web/src/assets/logo.svg)

Ableport is an online hub for research and collaboration between individuals with special needs and organisations. We help build the gateway between humans and software.

## Getting started

In order to work on Ableport, you'll need to install the following:

Frontend requirements:
- Install [Postgres](https://www.postgresql.org/download/)
- Install [NodeJS](https://nodejs.org/en/download)
- Install [Yarn](https://yarnpkg.com/getting-started/install)
- (Recommended) Install [VScode](https://code.visualstudio.com/)

Backend requirements:
- Install [.NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- (Recommended) Install [Rider](https://www.jetbrains.com/rider/)
- (Recommended) Install [Docker Desktop](https://docs.docker.com/desktop/)

## Frontend

Ableport's frontend is powered by NextJS and uses a single-page application (SPA) design.

To work on the frontend locally, you'll first need to set up environment variables for the application. Make a copy of [.env.local.example](/web/.env.local.example) called .env.local and fill it all of the required variables. Once done, you should be able to run the application using these commands:

```sh
cd web
yarn install
yarn dev
```

## Backend

Ableport's backend uses C# with ASP.NET Core for the API.

To use the API locally, run these commands:

```sh
cd api/Ableport.API.REST
dotnet run
```

## ToDo

- Document API configuration secrets/strings
- Document login process
