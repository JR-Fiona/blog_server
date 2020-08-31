<template>
  <div class="container">
    <div class="paragraph f24"><i>Blogs</i></div>
    <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" />
    <span>111</span>
  </div>
</template> 

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  private menus = ['menu3', '目录', '首页'];
}
</script>
<style lang="scss" scoped>
.container > * {
  margin-top: 1rem;
}
</style>
