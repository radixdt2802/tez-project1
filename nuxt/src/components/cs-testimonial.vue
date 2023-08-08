<template>
  <div
    class="
      rxsection-y-space
      cs-testimonial
      bg-themelight-10
      dark:bg-themedark-10
    "
  >
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <div class="text-center">
        <img
          class="mx-auto"
          v-if="data.Image"
          v-rxlazy="data.Image"
          :width="data.Image.width"
          :height="data.Image.height"
        />
        <div
          class="para_md text-themedark-0 my-4 quote"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
        <p class="italic">{{ data.SubTitle }}</p>
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
  .cs-testimonial {
    .quote {
      p {
        &::before {
          background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/download_2_bfc4a67ea2.png");
        }
        &::after {
          background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/download_2_1_7db874d2a9.png");
          bottom: -1.25rem;
          left: 0.9375rem;
        }
        &::before,
        &::after {
          content: "";
          @apply relative bg-no-repeat inline-block align-middle;
          background-size: 100%;
          width: 2.25rem;
          height: 2rem;
          @screen md {
            width: 2.5rem;
            height: 2.25rem;
          }
          transform: translate(-0.625rem, -0.625rem);
        }
      }
    }
  }
}
</style>