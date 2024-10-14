FROM node

WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY ./nodemon.json ./tsconfig.json ./

COPY ./index.ts ./

CMD [ "node", "--inspect=0.0.0.0:9229", "index.js" ]