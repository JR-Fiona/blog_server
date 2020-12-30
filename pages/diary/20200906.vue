<!--
 * @Author: jiarong.deng
 * @Date: 2020-09-06 22:13:05
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2020-09-20 14:20:11
 * @Description: file content
-->
<template>
  <div class="container">
    <BaseBlockquote />
    <main class="content">
      <!-- 1 start -->
      <chapter-title title="一、Nuxt.js" type="h2" />
      <code>
        <a href="https://zh.nuxtjs.org/" target="_blank">Nuxt.js</a> 是 <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a> 的通用应用框架，采用服务器端渲染（SSR 渲染），使得基于 Vue 的单页 Web 应用 (single page web application，SPA) 也能够拥有良好的 SEO (Search Engine Optimization)支持。
      </code>
      <!-- 1 end -->

      <!-- 2 start -->
      <chapter-title title="二、Docker" type="h2" />
      <blockquote class="my_blockquote">
        <code class="paragraph">
         Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中，然后发布到任何流行的 Linux或Windows 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。
        </code>
      </blockquote>
      <!-- 2 end -->

      <!-- 3 start -->
      <chapter-title title="三、使用 docker 部署 nuxt.js 项目" type="h2" />
    
      <chapter-title title="3.1 构建 node 镜像" type="h3" />

      <blockquote class="my_blockquote"><code class="paragraph">FROM node:alpine</code></blockquote>

      <code class="paragraph">为什么使用 alpine 版本？</code>
      <blockquote class="my_blockquote">
        <code class="paragraph">
          相比于其他 Docker 镜像，它的容量非常小，仅仅只有 5 MB 左右（对比 Ubuntu 系列镜像接近 200 MB），且拥有非常友好的包管理机制。官方镜像来自 docker-alpine 项目。 目前 Docker 官方已开始推荐使用 Alpine 替代之前的 Ubuntu 做为基础镜像环境。这样会带来多个好处。包括镜像下载速度加快，镜像安全性提高，主机之间的切换更方便，占用更少磁盘空间等。
        </code>
      </blockquote>

      <chapter-title title="3.2 完整的 Dockerfile 文件" type="h3" />
      <code class="paragraph">
        <pre id="pre">
          <code class="docker">{{ code321 }}</code>
        </pre>
      </code>

      <chapter-title title="3.3 完整的 docker-compose 文件" type="h3" />
      <code class="paragraph">
        <pre id="pre">
          <code class="docker">{{ code331 }}</code>
        </pre>
      </code>

      <chapter-title title="3.4 部署脚本文件" type="h3" />
      <code class="paragraph">
        <pre id="pre">
          <code class="shell">{{ code341 }}</code>
        </pre>
      </code>
    </main>
    <BaseCatalog :nodes="nodes" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import flvjs from 'flv.js';

@Component
export default class DailyIndex extends Vue {
  nodes: any[]|undefined;
  public data() {
    return {
      nodes: []
    };
  }
  public mounted() {
    this.$store.commit('article/setTitle', '部署 Nuxt.js 项目');
    this.getCatalog();
  }

  public getCatalog() {
    const content: HTMLElement = document.querySelector('.content') as HTMLElement;
    const doms = content.querySelectorAll('h1, h2, h3, h4, h5');
    const arr: any[] = [];
    doms.forEach(dom => {
      arr.push({
        nav: `${dom.tagName}_nav`,
        title: `#${dom.id}`
      });
    });
    this.nodes = arr;
  }

  public code321 = `
  FROM node:alpine

  RUN mkdir -p /app/code

  COPY ./code /app/code

  WORKDIR /app/code

  ENV HOST "0.0.0.0"

  RUN apk add --no-cache make gcc g++ python

  RUN npm install

  RUN npm run build

  RUN apk del make gcc g++ python

  EXPOSE 3000
  CMD ["npm", "start"]`;


  public code331 = `
  version: "3"
  services:
    blog:
      image: blog_nuxt:latest
      container_name: blog_nuxt
      restart: always
      ports:
        - "3000:3000" 
      ulimits:
        nproc: 100000
        nofile:
          soft: 100000
          hard: 200000
      networks:
        - blog
  networks:
    blog: 
      driver: bridge`;


  public code341 = `
  #!/bin/sh
  set -x
  set -e
  DOCKER_PATH="."
  IMAGE_NAME="blog_nuxt"

  docker-compose down

  docker rmi \${IMAGE_NAME}:latest || true
  docker images
  docker build -t \${IMAGE_NAME} \${DOCKER_PATH}
  docker images

  docker save \${IMAGE_NAME}:latest > \${IMAGE_NAME}.tar
  echo \${IMAGE_NAME}:latest had saved to \${IMAGE_NAME}.tar successfully!
  ls

  # 使用 docker-compose 运行镜像
  docker-compose up -d

  # docker run --restart=always --name \${IMAGE_NAME} -p \${REMOTE_HOST}:\${LISTEN_HOST} -d \${IMAGE_NAME}:latest

  docker ps -a

  exit
  EOF`;
}
</script>

<style lang="scss" scoped>
</style>
