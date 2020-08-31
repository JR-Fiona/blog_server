<!--
 * @Author: jiarong.deng
 * @Date: 2020-08-29 22:26:19
 * @LastEditors: jiarong.deng
 * @LastEditTime: 2020-08-31 22:59:43
 * @Description: file content
-->
<!-- <template>
  <div ref="chapter" class="chapter">
    <h5 class="title" :id="subTitle.id">
      <a :href="subTitle.a">#</a>
      {{ title }}
    </h5>
  </div>
</template> -->

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class ChapterTitle extends Vue {

  @Prop({ type: String, default: '无标题' }) title!: string
  @Prop({ type: String, default: 'h2' }) type!: string

  get subTitle():Object {
    const id = this.title.replace(/\s/g, '-');
    const a = '#' + this.title.replace(/\s/g, '-');
    return { id, a };
  }

  mounted() {
    console.log('type...', this.type); 
  }


  render(h: Function) {
    const that = this;
    return h('div', 
      {
        domProps: { class: 'chapter' }
      },
      [
        h(that.type, 
          {
            domProps: { class: 'title ovh', id: that.subTitle.id }
          },
          [
            h('a', { attrs: { href: that.subTitle.a } }, '#'),
            that.title
          ]
        )
      ]
    );
  }
}
</script>
<style lang="scss" scoped>
.chapter { 
  margin: 1.5rem 0;
  line-height: 2rem;
}
</style>
