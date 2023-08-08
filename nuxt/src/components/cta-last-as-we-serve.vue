<template>
  <div class="rxsection-y-space cta-last mx-auto max-w-md sm:max-w-none bg-opacitybg-25 dark:bg-themedark-70 mt-32">
    <div class="container">
      <div class="text-center" v-if="!data.CallToActions" >
        <!-- <div class="h2 dark:text-themelight-0">{{ data.Title }}</div> -->
        <div class="h2">{{ data.Title }}</div>
        <!-- <div v-html="title" class="h2">{{ data.Title }}</div> -->
        <div class="ctaContent para_cta" v-if="data.LongText" v-rxhtml="data.LongText"></div>
        <div v-html="$md.render(data.CTA ? data.CTA : '')" class="btn btn_md  mt-6 md:mt-8"></div>
      </div>
      <div class="text-center"  v-for="item in data.CallToActions">
        <div class="h2 dark:text-themelight-0">{{ item.Title }}</div>
        <div class="ctaContent para_cta h3" v-if="item.LongText" v-rxhtml="item.LongText"></div>
        <div v-html="$md.render(item.CTA ? item.CTA : '')" class="btn btn_md mt-6 md:mt-8"></div>
      </div> 
    </div>
  </div>
</template>

<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
  data(){
  return {
  titleStyle : "dark:text-themelight-0 h2"
  }
  },
};
</script>

<style lang="scss">
@layer utilities {
  .cta-last {
    .para_cta{
      p{
        @apply font-normal p-0;
      }
    }
    
  }
}
</style>
