<template>
  <header class="home_header bg3 ns">
    <!-- Nav -->
    <nav class="ovh pt20 pl20">
      <i class="wh l f24 b">Djiarong</i>
      <a 
        v-for="item in menus" 
        :key="item" 
        class="r mr20 f15 wh b ho8 poi trans csp tdn"
        :to="item"
      >
        {{ item }}
      </a>
    </nav>
    <!-- Drop -->
    <main class="drop">
      <p class="drop_name wh b mb5">{{ title }}</p>
      <p class="mt-1 wh f15">可以在这里写一句话🤧</p>
    </main>
  </header>
</template> 

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  private menus = ['menu3', '目录', '首页']
  @Prop({ type: String, default: 'Djiarong' }) title!: string

}
</script>
<style lang="scss" scoped>
.home_header { height: 420px; }
.drop {
  text-align: center;
  margin-top: 100px;
}
.drop_name { font-size: 5rem; }
</style>
