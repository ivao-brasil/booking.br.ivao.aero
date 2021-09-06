FROM keymetrics/pm2:14-alpine


WORKDIR /var/www/app

COPY ./frontend/package.json ./
COPY ./frontend/yarn.lock ./

RUN yarn install

CMD ["tail", "-f"]

EXPOSE 3000