<!--
 * @Author: jiarong.deng
 * @Date: 2020-07-29 21:56:51
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2020-10-14 16:17:26
 * @Description: file content
-->
<template>
  <div class="container">
    <MyBlockquote />
    <main class="content markdown_preview"></main>
    <Catalog :nodes="nodes" />
  </div>
</template> 

<script>
import { fetchFile, parsetoHtml } from '~/assets/js/utils';
const MD_URL = '/markdown/javascript/vue-event.md';

export default {
  data() {
    return {
      nodes: []
    };
  },
  mounted() {
    this.$store.commit('article/setTitle', 'vue - event');
    this.parseAndCatelog();
  },
  methods:  {
    parseAndCatelog() {
      parsetoHtml(MD_URL).then(res => {
        const preview = document.querySelector('.markdown_preview');
        preview.innerHTML = res;
        this.$nextTick(() => { this.getCatalog(); });
      });
    },

    getCatalog() {
      const content = document.querySelector('.content');
      const doms = content.querySelectorAll('h1, h2, h3, h4, h5');
      const arr = [];
      doms.forEach(dom => {
        arr.push({
          nav: `${dom.tagName}_nav`,
          title: `#${dom.textContent}`
        });
      });
      this.nodes = arr;
    }
  }
}
</script>
<style lang="scss">
.container .markdown_preview {
  font-size: 0.8rem;

  * {
    margin: 0.8rem 0;
  }

  h1, h2, h3, h4, h5 {
    margin: 1.1rem 0;
  }
}
</style>
