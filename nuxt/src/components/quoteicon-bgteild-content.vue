<template>
  <div class="quoteicontield" :class="[
      data.VueReferenceCode == 'SS_TealBG_TextTspace'
        ? 'rxsection-t-space'
        : '',
    ]">
    <div class="container">
      <div class="spaceback width-style flex flex-wrap">
        <div class="cot-img w-full">
          <img
            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/quote_white_b7296650e1.svg'"
            alt="quoteicon"
            width="38"
            height="28"
          />
        </div>
        <div class="csd-content">
          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
        </div>
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
  .quoteicontield {
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
    .spaceback {
      @apply bg-primary;
      padding: 0.9375rem 1.25rem 1.25rem;
      @screen sm {
        padding: 1.5625rem 2.1875rem 2.1875rem;
      }
      @screen md {
        padding: 2.8125rem 3.4375rem 3.4375rem;
      }

      @screen xl {
        padding: 3.4375rem 4.0625rem 4.0625rem;
      }
      .csd-content {
        p {
          @apply text-white font-semibold pb-0;
          font-size: 1.25rem;
          line-height: 1.875rem;
          @screen sm {
            font-size: 1.375rem;
            line-height: 2rem;
          }
          @screen md {
            font-size: 1.5rem;
            line-height: 2.25rem;
          }
          @screen sxl {
            font-size: 1.625rem;
            line-height: 2.375rem;
          }
          @screen xl {
            font-size: 2rem;
            line-height: 2.75rem;
          }
        }
      }
    }
  }
}
</style>