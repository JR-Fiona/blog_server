<!--
 * @Author: jiarong.deng
 * @Date: 2020-09-06 18:51:25
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2020-09-06 19:01:33
 * @Description: file content
-->
<template>
  <div class="container">
    <div id="editor" class="mt30">
      <p>欢迎使用 富文本编辑器</p>
    </div>
    <div class="btns mt30">
      <a-button type="primary" @click="getText">
        按钮
      </a-button>
    </div>
  </div>
</template> 

<script lang="ts">
import { Button } from 'ant-design-vue';
// import 'ant-design-vue/lib/button/style';

import { Component, Vue } from 'vue-property-decorator';
Vue.use(Button);
let editor:any = {};


@Component
export default class Home extends Vue {

  mounted() {
    const E = require('wangeditor');
    editor = new E('#editor')
    // 或者 var editor = new E( document.getElementById('editor') )
    editor.create();
    editor.$textContainerElem['0'].style.height = '800px'
  }

  public getText() {
    console.log('text...', editor.txt.html());
  }

}
</script>
<style lang="scss" scoped>
#editor {
  min-height: 350px;
}
</style>
