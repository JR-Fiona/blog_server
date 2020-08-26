<!--
 * @Author: jiarong.deng
 * @Date: 2020-07-29 21:56:51
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2020-08-21 21:01:56
 * @Description: file content
-->
<template>
  <div>
    <!-- <Navigation :title="title" /> -->
    <Nuxt />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import hljs from 'highlight.js';

@Component
export default class Default extends Vue {
  get title() {
    return this.$store.state.article.title;
  }
  public mounted() {
    hljs.initHighlightingOnLoad();     
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
