#!/bin/sh
set -x
set -e
DOCKER_PATH="."
IMAGE_NAME="blog_nuxt"
REMOTE_HOST="3000"
LISTEN_HOST="3000"

# docker-compose down

docker stop ${IMAGE_NAME}
docker rm ${IMAGE_NAME}

docker rmi ${IMAGE_NAME}:latest || true
docker images
docker build -t ${IMAGE_NAME} ${DOCKER_PATH}
docker images

# docker save ${IMAGE_NAME}:latest > ${IMAGE_NAME}.tar
# echo ${IMAGE_NAME}:latest had saved to ${IMAGE_NAME}.tar successfully!
ls

# 使用 docker-compose 运行镜像
# docker-compose up -d

docker run --restart=always --name ${IMAGE_NAME} -p ${REMOTE_HOST}:${LISTEN_HOST} -d ${IMAGE_NAME}:latest

docker ps -a

exit
EOF