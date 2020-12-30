<!--
 * @Author: jiarong.deng
 * @Date: 2020-07-29 22:13:05
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2020-08-31 23:28:38
 * @Description: file content
-->
<template>
  <div class="container">
    <BaseBlockquote />
    <main class="content">
      <img class="bs" src="~/assets/images/collection/rnapp/index.png" width="400" height="830" title="index" alt="index">
      <img class="bs" src="~/assets/images/collection/rnapp/music.png" width="400" height="830" title="music" alt="music">
      <img class="bs" src="~/assets/images/collection/rnapp/vol.png" width="400" height="830" title="vol" alt="vol">
      <img class="bs" src="~/assets/images/collection/rnapp/eq.png" width="400" height="830" title="eq" alt="eq">
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class RNApp extends Vue {

  public mounted() {
    this.$store.commit('article/setTitle', 'React Native App');
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
img {
  margin: 10px auto;
  border-radius: 8px;
}
</style>
