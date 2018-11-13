FROM node:8.12.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN yarn install --production

ENV PORT=80

EXPOSE 80

CMD ["yarn", "start"]