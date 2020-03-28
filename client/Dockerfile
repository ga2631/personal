FROM node:13-alpine

WORKDIR /client

COPY package.json /client

RUN yarn install

COPY . /client

CMD ["yarn", "serve"]