FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["api/Ableport.API.REST/Ableport.API.REST.csproj", "Ableport.API.REST/"]
RUN dotnet restore "Ableport.API.REST/Ableport.API.REST.csproj"
COPY . .
WORKDIR "/src/Ableport.API.REST"
RUN dotnet build "Ableport.API.REST.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Ableport.API.REST.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Ableport.API.REST.dll"]
