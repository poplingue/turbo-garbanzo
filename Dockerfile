FROM node:11-alpine

RUN mkdir -p /usr/src/server

WORKDIR /usr/src/server

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
