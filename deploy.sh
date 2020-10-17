###
 # @Author: jiarong.deng
 # @Date: 2020-08-29 12:26:20
 # @LastEditors: jiarong.deng
 # @LastEditTime: 2020-10-17 16:43:29
 # @Description: file content
### 
#!/bin/sh
set -x
set -e
DOCKER_PATH="."
IMAGE_NAME="blog_nuxt"

docker-compose down

docker rmi ${IMAGE_NAME}:latest || true
docker images
docker build -t ${IMAGE_NAME} ${DOCKER_PATH}
docker images

# docker save ${IMAGE_NAME}:latest > ${IMAGE_NAME}.tar
# echo ${IMAGE_NAME}:latest had saved to ${IMAGE_NAME}.tar successfully!
ls

# 使用 docker-compose 运行镜像
docker-compose up -d

# docker run --restart=always --name ${IMAGE_NAME} -p ${REMOTE_HOST}:${LISTEN_HOST} -d ${IMAGE_NAME}:latest

docker ps -a

exit
EOF