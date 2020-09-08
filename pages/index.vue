<template>
  <div class="container">
    <div class="paragraph f24"><i>Blogs</i></div>

    <base-summary 
      v-for="(item, index) in summaryArr" 
      :key="index"
      :summary="item" 
    />
    <!-- <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" />
    <base-summary :summary="{title: '666'}" /> -->
    <span>111</span>
  </div>
</template> 

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import jsonFile from '../data.json';

@Component
export default class Home extends Vue {
  public summaryArr = jsonFile.data;

  mounted() {
    console.log('data...', jsonFile.data);
  }
}
</script>
<style lang="scss" scoped>
.container > * {
  margin-top: 1rem;
}
</style>
