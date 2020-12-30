<!--
 * @Author: jiarong.deng
 * @Date: 2020-07-29 21:56:51
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2020-09-14 22:10:14
 * @Description: file content
-->
<template>
  <div class="container">
    <div class="paragraph f24"><i>Blogs</i></div>
    <base-summary 
      v-for="(item, index) in summaryArr" 
      :key="index"
      :summary="item" 
    />
  </div>
</template> 

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const jsonFile = require('~/assets/js/collection/data.json');

@Component
export default class Home extends Vue {
  public summaryArr = jsonFile.data;

  mounted() {
    this.$store.commit('article/setTitle', '作品集');
  }
}
</script>
<style lang="scss" scoped>
.container > * {
  margin-top: 1rem;
}
</style>
