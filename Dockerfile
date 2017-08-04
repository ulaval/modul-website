FROM node:8.2-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 8083

CMD [ "npm", "run", "prod" ]
