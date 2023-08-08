<template>
  <div class="rxsection-y-space cta-last-success">
    <div class="container">
      <div class="text-center width-style">
        <div class="h2">{{ data.Title }}</div>
        <div
          class="ctaContent para_cta"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
        <div
          v-html="$md.render(data.CTA ? data.CTA : '')"
          class="btn space-t"
        ></div>
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
  <style lang="scss" scoped>
@layer utilities {
  .cta-last-success {
    max-width: 28.75rem;
    margin-left: auto;
    margin-right: auto;
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

    .width-style {
      margin-right: auto;
      margin-left: auto;
      padding-right: 1rem;
      padding-left: 1rem;

      @media (min-width: 576px) {
        max-width: calc(100% - 1.25rem);
        width: 74.375rem;
      }

      @screen xl {
        width: 74.375rem;
      }
    }
  }
}
</style>
  