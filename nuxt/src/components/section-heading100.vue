<template>
  <div class="section-heads100 text-center">
    <div class="w-full mx-auto">
      <!--<h2>{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <p class="para_md pb-5 smd:pb-8 dark:text-themedark-75" v-if="data.SubTitle">
        {{ data.SubTitle }}
      </p>
      <p class="para_md dark:text-themedark-75" v-if="data.ShortText">{{ data.ShortText }}</p>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="listanchor para_md"
      ></div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
import mountedMixin from "../mixins/mounted.mixin";
export default {  
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2 text-center",
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .section-heads100 {
    div.para_md {
      p {
        padding: 0rem 0rem;
      }
    }
  }
}
</style>