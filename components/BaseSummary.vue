<template>
  <div class="summary ovh tal auto csp">
    <h2>标题</h2>
    <summary class="f14 ga3">
      <i>概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概
        述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概
        述概述概述概述概述概述概述概述
      </i>
    </summary>
    <footer class="f18 pt10 pb20 i g6">Posted by Djiarong on July 28th, 2020</footer>
    <hr>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Component, Vue, Prop } from 'vue-property-decorator';

interface SummaryProp {
  title: string;
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
