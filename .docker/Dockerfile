FROM node:16-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --non-interactive
RUN npm install react-scripts -g

COPY public/ public
COPY src/ src
COPY tsconfig.json ./

CMD ["npm", "start"]
