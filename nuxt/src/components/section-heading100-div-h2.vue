<template>
  <div class="section-heads100 text-center">
    <div class="w-full mx-auto">
      <!-- <div class="h2">{{ data.Title }}</div> -->
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
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2",
      sTitleStyle : "",
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