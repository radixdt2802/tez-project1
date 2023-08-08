<template>
  <div
    class="hirephpvideoblock rxsection-y-space text-center bg-no-repeat"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container">
      <div
        class="h3 font-normal heading"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="w-10/12 mx-auto framecover relative mt-12">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            width="560"
            height="315"
            :src="data.CTA"
            frameborder="0"
            rel="nofollow"
            class="embed-responsive-item rounded-lg"
          ></iframe>
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
  .hirephpvideoblock {
    background-size: 100% auto;
    .heading {
      p {
        @apply font-normal;
        strong {
          @apply text-customcolor-96 font-semibold;
        }
      }
    }
    .framecover {
      &:before {
        content: "";
        @apply left-0 top-0 bottom-0 right-0 z-10 w-full h-full absolute bg-cover rounded-md bg-no-repeat;
        background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/hiring_video_frame_4459fe1597.jpg");
        background-position: center right;
      }
      &:after {
        content: "";
        @apply left-0 top-0 bottom-0 right-0 z-10 w-full h-full absolute bg-no-repeat rounded-md bg-auto bg-center;
        background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/download_fdec17f31f.png");
      }
    }
  }
}
</style>