FROM node:20.11.0-alpine3.19

WORKDIR /app
COPY package* .
RUN npm install
COPY . .

EXPOSE 3003

CMD ["npm", "start"]