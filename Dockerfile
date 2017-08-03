FROM node:7.10.1-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 8083

CMD [ "npm", "run", "prod" ]
