FROM node:13-alpine

WORKDIR /server

COPY package.json /server

RUN yarn install

COPY . /server

CMD ["yarn", "start"]