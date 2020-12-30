<template>
  <div class="archive f16">
    <span class="timestamp">[2020/07/28]</span>
    <span>titletitletitletitletitletitle</span>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Component, Vue, Prop } from 'vue-property-decorator';

interface ArchiveProp {
  title: string;
}
const GreetingProps = Vue.extend({
  props: {
    archive: {
      type: Object as () => ArchiveProp,
      required: true,
    },
  },
});

@Component
export default class Summary extends GreetingProps {}
</script>
<style lang="scss" scoped>
.archive {
  position: relative;
  overflow: hidden;
  text-align: left;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
  &::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
  }
}
.timestamp {
  color: blue;
  margin-right: 10px;
}
</style>
