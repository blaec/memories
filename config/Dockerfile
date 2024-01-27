FROM node:20.11.0-alpine3.19

WORKDIR /app
COPY db.json .

RUN yarn global add json-server

EXPOSE 3033

CMD ["json-server", "db.json", "--host", "localhost", "--port", "3033"]