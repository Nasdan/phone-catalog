FROM node:8

ARG BACKEND_PORT
ENV PORT=${BACKEND_PORT}

WORKDIR /usr/backend
COPY package*.json ./
RUN npm i

COPY ./src ./src

CMD ["npm", "start"]
