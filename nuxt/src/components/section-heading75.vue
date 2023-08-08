<template>
  <div class="section-heads75 text-center">
    <div class="sxl:w-9/12 w-full mx-auto">
      <div v-html="title"></div>
      <!-- <h2>{{ data.Title }}</h2> -->
      <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
      <div v-if="data.LongText" v-rxhtml="data.LongText" class="listanchor para_md"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],  
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2",
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .section-heads75 {
    div.para_md {
      p {
        padding: 0rem 0rem;
      }
    }
  }
}
</style>