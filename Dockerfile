FROM node:12

WORKDIR /usr/app
COPY . ./

RUN yarn

EXPOSE 3333

CMD yarn start