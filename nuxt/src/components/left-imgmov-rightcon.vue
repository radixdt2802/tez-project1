<template>
  <div
    class="
      rxsection-y-space
      bg-fixed bg-cover
      contentWhite
      left-imgmov-rightcon
      beforeDark relative
    "
    v-bind:style="[
      data.HoverImage
        ? { backgroundImage: 'url(' + data.HoverImage.url + ')' }
        : '',
    ]"
  >
    <div class="container relative">
      <div class="row">
        <div class="md:w-5/12 w-full px-4 left-img">
          <img
            class="mx-auto md:mb-0 mb-8"
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
          />
        </div>
        <div class="md:w-7/12 w-full px-4 md:text-left text-center">
          <div class="h1_xl font-poppins font-semibold text-white pb-0">
            {{ data.Title }}
          </div>
          <h3 class="py-3">{{ data.SubTitle }}</h3>
          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
          <div
            class="ctaOverall pt-3 flex justify-center md:justify-start"
            v-if="data.CTA"
          >
            <div
              class="cta-arrow flex"
              v-html="$md.render(data.CTA ? data.CTA : '')"
            ></div>
            <img
              class="inline transition-all duration-300 ease-in-out ml-4"
              v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/arrow_d169cb2460.svg'"
              width="18"
              height="10"
              alt="Contact Us"
            />
          </div>
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
  <style lang="scss" scoped>
@layer utilities {
  .left-imgmov-rightcon {
    .left-img {
      img {
        max-width: 8.375rem;
        @screen md {
          max-width: 19.125rem;
        }
        @screen sxl {
          max-width: 25rem;
        }
      }
    }
    .h1_xl {
      font-size: 9vw;
      line-height: 9vw;
      @screen sxl {
        font-size: 6.5625rem;
        line-height: 6.5625rem;
      }
      @screen xl {
        font-size: 10rem;
        line-height: 10rem;
      }
      
    }
  }
}
</style>
  