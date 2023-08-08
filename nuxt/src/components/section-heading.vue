<template>
  <div class="section-heads">
    <div class="sxl:w-4/5 w-full mx-auto">
      <div v-html="title"></div>
      <p class="para_md" v-if="data.SubTitle">{{ data.SubTitle }}</p>
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
  .section-heads {
    @apply text-center;
    > h2 {
      @apply text-center w-4/5 mx-auto;
    }
    > p {
      @apply text-center pt-2 w-4/5 mx-auto;
    }
    > div {
      @apply text-center pt-2 mx-auto;
    }
    div.para_md {
      p {
        padding: 0rem 0rem;
      }
    }
  }
}
</style>