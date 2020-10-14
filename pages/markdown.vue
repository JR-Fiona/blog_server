<!--
 * @Author: jiarong.deng
 * @Date: 2020-07-29 21:56:51
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2020-10-14 16:17:26
 * @Description: file content
-->
<template>
  <div class="preview">
  </div>
</template> 

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { fetchFile } from '~/assets/js/utils';
const jsonFile = require('~/assets/js/data.json');

@Component
export default class Home extends Vue {
  public summaryArr = jsonFile.data;

  mounted() {
    this.$store.commit('article/setTitle', 'Summary');
    fetchFile('./README.md').then(res => {
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
