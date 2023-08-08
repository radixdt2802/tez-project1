<template>
  <div class="rxsection-y-space cta-last text-primary mx-auto">
    <div class="container">
      <div class="text-center" v-if="!data.CallToActions" >
        <div class="thanks-title font-semibold dark:text-themelight-0">{{ data.Title }}</div>
        <div class="ctaContent para_cta" v-if="data.LongText" v-rxhtml="data.LongText"></div>
        <div v-html="$md.render(data.CTA ? data.CTA : '')" class="btn btn_md space-t"></div>
      </div>
      <div class="text-center" v-if="data.CallToActions" v-for="item in data.CallToActions">
        <div class="thanks-title dark:text-themelight-0">{{ item.Title }}</div>
        <div class="ctaContent para_cta" v-if="item.LongText" v-rxhtml="item.LongText"></div>
        <div v-html="$md.render(item.CTA ? item.CTA : '')" class="btn btn_md space-t"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
};
</script>

 <style lang="scss">
@layer utilities {
  .cta-last {
    max-width: 28.75rem;
    .thanks-title {
        font-size: 3.375rem;
        margin-bottom: 1rem;
    }
    @screen sm {
      @apply max-w-none;
    }
    .para_cta {
      p {
        font-size: 1.375rem;
        line-height: 2rem;
        @screen md {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
        @screen xl {
          font-size: 2rem;
          line-height: 2.75rem;
        }
      }
    }
    .space-t {
      @apply mt-6 md:mt-8;
    }
     
  }
}
</style>
