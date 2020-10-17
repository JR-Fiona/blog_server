<template>
  <div class="summary ovh tal auto">
    <h2><nuxt-link :to="summary.route">{{ summary.title }}</nuxt-link></h2>
    <summary class="f14 ga3">
      <i>{{ summary.summary }}</i>
    </summary>
    <footer class="f18 pt10 pb20 i g6">Posted by jiarong.deng on {{ summary.postedTime }}</footer>
    <hr>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Component, Vue, Prop } from 'vue-property-decorator';

interface SummaryProp {
  title: string;
  summary: string;
  postedTime: string;
}
const GreetingProps = Vue.extend({
  props: {
    summary: {
      type: Object as () => SummaryProp,
      required: true,
    },
  },
});

@Component
export default class Summary extends GreetingProps {}
</script>
<style lang="scss" scoped>
h2 { line-height: 3rem; }
hr { border: 1px solid #eee; }
</style>
