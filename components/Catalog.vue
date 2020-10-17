<template>
  <div class="catalog">
    <h4>
      <a href="#"><b>-</b></a>
      CATALOG
    </h4>
    <ul class="catalog_body">
      <li v-for="(node, index) in nodes" :key="index" :class="node.nav">
        <a :href="node.title" ref="nofollow">{{ node.title | titleFilter }}</a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  filters: {
    titleFilter(val: string): string {
      return val.replace(/-/g, ' ').replace('#', '');
    }
  }
})
export default class Catalog extends Vue {
  @Prop({ type: Array, required: true }) readonly nodes: any
  mounted() {
    // console.log('this nodes...', this.nodes);
  }
}
</script>
<style lang="scss" scoped>
.catalog {
  position: -webkit-sticky;
  position: sticky;
  top: 5rem;
}
.catalog_body {
  margin: .5rem 0;
}
li {
  color:#BFBFBF;
  line-height: 2rem;
  font-size: 0.7rem;
  a { color:#BFBFBF; }
  a:active, a:hover { color: #0085a1; }
}
.H2_nav {
  font-weight: 700;
  font-size: .8rem;
}
.H3_nav { text-indent: 1rem; }
.H4_nav { text-indent: 2rem; }
</style>
