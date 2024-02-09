FROM node:slim

WORKDIR /express

COPY . .

RUN npm install

CMD [ "npm", "run", "start"]

EXPOSE 9000