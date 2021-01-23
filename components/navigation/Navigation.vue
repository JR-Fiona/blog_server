<!--
 * @Author: jiarong.deng
 * @Date: 2020-07-30 19:48:23
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2021-01-23 14:16:23
 * @Description: file content
-->
<template>
  <header class="home_header bg3 ns">
    <!-- Nav -->
    <nav class="header_nav ovh bg3 pt20 pb20 pl20 bs">
      <p class="nav_left">
        <i class="wh f24 b">Djiarong</i>
        <img class="header_img vm ml10 bs" src="~/assets/images/logo.png" alt="Logo">
      </p>
      <p class="nav_right">
        <a 
          v-for="item in menus" 
          :key="item.name" 
          class="f15 wh ho8 poi trans csp tdn"
          :href="item.url"
        >
          {{ item.name }}
        </a>
      </p>
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
import { RESUME_URL } from '~/config/index';

@Component
export default class Index extends Vue {
  private menus = [
    {
      name: '首页',
      url: '/'
    }, 
    {
      name: '目录',
      url: '/'
    },
    {
      name: '作品集',
      url: '/collection'
    },
    {
      name: '个人简历',
      url: RESUME_URL
    }
  ]

  @Prop({ type: String, default: 'Djiarong' }) title!: string

}
</script>
<style lang="scss" scoped>
.home_header { height: 420px; }

.header_nav {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
}

.nav_right {
  display: flex;
  align-content: center;
  a { margin: auto 10px; }
}

.header_img { 
  width: 2rem;
  height: 2rem;
  border-radius: 50%; 
}

.drop {
  text-align: center;
  padding-top: 120px;
}
.drop_name { font-size: 5rem; }
</style>
