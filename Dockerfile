FROM node:alpine

RUN mkdir -p /app/code

COPY ./code /app/code

WORKDIR /app/code

ENV HOST "0.0.0.0"

RUN npm install

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]