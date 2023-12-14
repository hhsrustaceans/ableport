# ![Ableport Logo](/web/src/assets/logo.svg)

Ableport is an online hub for research and collaboration between individuals with special needs and organisations. We help build the gateway between humans and software.

## Getting started

In order to work on Ableport, you'll need to install the following:

Frontend requirements:
- Install [Yarn](https://yarnpkg.com/getting-started/install)
- (Recommended) Install [VScode](https://code.visualstudio.com/)

Backend requirements:
- Install [.NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- (Recommended) Install [Rider](https://www.jetbrains.com/rider/)
- (Recommended) Install [Docker Desktop](https://docs.docker.com/desktop/)

## Frontend

Ableport's frontend is powered by NextJS and uses a single-page application (SPA) design.

To work on the frontend locally, run these commands:

```sh
cd web
npm install
npm run dev
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
