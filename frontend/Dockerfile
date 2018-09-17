FROM node:8

ARG FRONTEND_PORT
ENV PORT=${FRONTEND_PORT}

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

ARG API_ENV
ENV API_ENV=${API_ENV}

ARG BACKEND_HOST
ARG BACKEND_PORT
ENV BASE_API_URL="${BACKEND_HOST}:${BACKEND_PORT}"

WORKDIR /usr/frontend
COPY package*.json ./
RUN npm i --quiet

COPY ./config ./config
COPY ./server ./server
COPY ./src ./src
COPY .babelrc ./

RUN npm run build
CMD ["npm", "start"]
