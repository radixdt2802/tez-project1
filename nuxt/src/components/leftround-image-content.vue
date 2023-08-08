<template>
  <div class="leftroundimage rxsection-y-space">
    <div class="container">
      <div
        v-if="data.VueReferenceCode !== 'SS_Testimonial_Without_Image'"
        class="width-style flex flex-wrap flex-col-reverse md:flex-row-reverse"
      >
        <div
          class="cot-img px-4 md:w-1/4 w-full order-1 md:p-0"
          v-if="data.Image"
        >
          <img
            class="mx-auto md:max-w-xs lg:max-w-full md:ml-0 md:mb-0"
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
            :alt="data.Image.alternativeText"
          />
        </div>
        <div class="csd-content px-4">
          <div class="" v-if="data.LongText" v-rxhtml="data.LongText"></div>
        </div>
      </div>
      <div
        class="width-style para_md"
        v-if="data.VueReferenceCode == 'SS_Testimonial_Without_Image'"
      >
        <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .leftroundimage {
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

      .cot-img {
        img {
          max-width: 8.125rem;
          margin-bottom: 1.5rem;
          @screen md {
            max-width: 10.625rem;
          }
          @screen smd {
            max-width: 12.5rem;
          }
        }
      }
      .csd-content {
        @apply md:w-3/4 w-full px-4 text-center md:text-left lg:p-0;
        p {
          @apply py-0 md:p-0;
          font-size: 1rem;
          line-height: 1.625rem;
          @screen xsm {
            font-size: 1.0625rem;
            line-height: 1.75rem;
          }
          @screen sm {
            font-size: 1.1875rem;
            line-height: 1.9375rem;
          }
          @screen md {
            font-size: 1.25rem;
            line-height: 2rem;
          }
          @screen xl {
            font-size: 1.375rem;
            line-height: 2.125rem;
          }
        }
      }
    }
  }
}
</style>