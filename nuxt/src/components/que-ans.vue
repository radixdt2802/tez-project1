<template>
  <div class="que-ans-content rxsection-y-space pb-0">
    <div class="container">
      <div class="width-style flex flex-wrap">
        <div class="quelist">
          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
        </div>
        <div class="image-space">
          <img 
          v-rxlazy="data.Image"
          :width="data.Image.width" :height="data.Image.height" class="w-full">
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  
  props: {
    data:Object
  }
};
</script>
<style lang="scss">
@layer utilities {
  .que-ans-content {
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
    .image-space{
        margin-top:3.125rem;
        @screen xsm{
          margin-top:3.75rem;
        }
        @screen sm{
          margin-top:4.375rem;
        }
        @screen md{
          margin-top:5.25rem;
        }
        @screen sxl{
          margin-top:6.25rem;
        }
      }

    .quelist {
      @screen smd {
        margin-left: 25%;
      }
      h3 {
        font-size: 1.25rem;
        line-height: 1.875rem;
        margin-bottom: 0.9375rem;
        @screen sm {
          font-size: 1.375rem;
          line-height: 2rem;
        }
        @screen md {
          font-size: 1.25rem;
          line-height: 1.875rem;
          margin-bottom: 1.375rem;
        }

        @screen smd {
          font-size: 1.375rem;
          line-height: 2rem;
        }
        @screen lg {
          @apply pb-0;
        }
        @screen sxl {
        }
        @screen xl {
          font-size: 1.625rem;
          line-height: 2.375rem;
        }
      }
      p {
        font-size: 1rem;
        line-height: 1.625rem;
        margin-bottom: 0.9375rem;
        padding-top: 0rem;
        @apply pb-0;
        @screen xsm {
          font-size: 1.0625rem;
          line-height: 1.75rem;
        }
        @screen md {
          font-size: 1.125rem;
          line-height: 1.875rem;
          margin-bottom: 1.375rem;
        }
        &:last-child {
          @apply mb-0;
        }
      }
      
    }
  }
}
</style>