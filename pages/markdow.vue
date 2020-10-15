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
    <main class="content preview"></main>
  </div>
</template> 

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { fetchFile } from '~/assets/js/utils';
import { markdown } from 'markdown';
const jsonFile = require('~/assets/js/data.json');

@Component
export default class Home extends Vue {
  public summaryArr = jsonFile.data;

  mounted() {
    this.$store.commit('article/setTitle', 'Summary');
    fetchFile('/markdown/javascript/event-vue.md').then(res => {
      const preview = document.querySelector('.preview') as HTMLElement;
      preview.innerHTML = markdown.toHTML(res);
      console.log('md....', res);
    })
  }
}
</script>
<style lang="scss" scoped>
.container > * {
  margin-top: 1rem;
}
</style>
