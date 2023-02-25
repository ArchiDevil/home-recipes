# Stage 1 - the build process
FROM node:latest AS build

COPY ./docs /app/docs
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm install
RUN npm run docs:build

# Stage 2 - the production environment

FROM caddy:2.6-alpine

COPY --from=build /app/docs/.vitepress/dist /usr/share/caddy
COPY ./Caddyfile /etc/caddy/Caddyfile

EXPOSE 6599
