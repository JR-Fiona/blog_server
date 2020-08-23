<template>
  <div class="catalog">
    <a href="/">dialy catalog</a>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Catalog extends Vue {
  @Prop({ type: Object, required: true }) readonly nodes: any

}
</script>
<style lang="scss" scoped>
.catalog {
  background-color: red;
}
</style>
