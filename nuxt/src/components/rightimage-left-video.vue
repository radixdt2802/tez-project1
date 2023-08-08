<template>
  <div class="ratingimage">
    <div class="container">
      <div class="single-rating-block width-style flex flex-wrap border border-themelight-50 p-5 xl:p-12 md:p-10 sm:p-7 justify-around">
        <div class="clientTestimonials lg:w-1/2 w-full px-4">
            <div class="clientVideo">
              <iframe
                width="100%"
                :src="data.GuideURL"
                frameborder="0"
                class="aspect-video"
                rel="nofollow"
              ></iframe>
            </div>
        </div>
        <div class="csd-content lg:w-1/2 w-full lg:my-auto lg:mt-0 items-center mt-6 flex flex-wrap justify-evenly-center">
        <div class="sm:w-7/12 w-full px-4 mx-auto">
          <div class="quoteicon">
            <img
            v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/quote_f111564039.svg'"
              alt="quoteicon"
            />
          </div>
          <div
            class="para_md"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
          <p class="rating-cmp font-bold">{{ data.Title }}</p>
          <p class="rating-by text-primary" v-if="data.SubTitle">{{ data.SubTitle }}</p>
        </div>
          <div class="sm:w-5/12 w-full px-4 ">
          <img
            class="mx-auto"
            v-rxlazy="data.Image"
            alt="ratingimage"
            :width="data.Image.width"
            :height="data.Image.height"
          />
          </div>
        </div>
        <!-- <div class="cot-img w-1/3">
        </div> -->
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
  .ratingimage{
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
    .clientVideo {
      max-inline-size: 100%;
      block-size: auto;
      iframe {
        max-inline-size: 100%;
        @screen sxl {
          max-inline-size: unset;
        }
        &.aspect-video {
          aspect-ratio: 16 / 9;
        }
      }
    }
  }
}
</style>