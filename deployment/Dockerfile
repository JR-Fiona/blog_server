FROM node:alpine

RUN mkdir -p /app/code

COPY ./code /app/code

WORKDIR /app/code

RUN chmod +x /app/code

ENV HOST "0.0.0.0"

# RUN sed -i "s/dl-cdn.alpinelinux.org/${ALPINE_REPOSITORIES}/g" /etc/apk/repositories

# RUN apk add --no-cache make gcc g++ python
RUN npm config set registry https://registry.npm.taobao.org
# RUN apk add --no-cache make gcc g++ python
RUN npm install
# RUN npm i core-util-is
RUN npm run build
# RUN npm cache clean --force

# RUN apk del make gcc g++ python

EXPOSE 3000
CMD ["npm", "start"]