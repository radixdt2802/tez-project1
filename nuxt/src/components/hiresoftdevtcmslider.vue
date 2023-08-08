<template>
  <div class="rxsection-y-space hiresoftdevtcmslider">
    <div class="container">
      <div class="row relative">
        <div class="smd:w-8/12 w-full px-4">
          <h2>{{ data.Title }}</h2>
          <div
            class="para_md"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
          ></div>
          <div class="pb-5 relative bullet-slider">
<swiper
            :slider-per-view="1"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :pagination="{
              clickable: true,
            }"
            class="mt-12 smd:w-5/6"
          >
            <swiper-slide
              v-for="item in data.TitleContentMediaList"
              :key="item.id"
            >
              <div class="single-rating-block width-style flex flex-wrap -mx-4">
                <div class="md:w-9/12 w-full px-4">
                  <div class="quoteicon">
                    <img
                      v-rxlazy="'https://d2ms8rpfqc4h24.cloudfront.net/quote_f111564039.svg'"
                      alt="quoteicon"
                    />
                  </div>
                  <div
                    class="para_md"
                    v-if="item.LongText"
                    v-rxhtml="item.LongText"
                  ></div>
                  <div class="flex items-center">
                    <img
                      class="rounded-full pr-5"
                      v-if="item.Icon"
                      :width="item.Icon.width"
                      :height="item.Icon.height"
                      v-rxlazy="item.Icon"
                    />
                    <p class="font-semibold">{{ item.Title }}</p>
                    <p>{{ item.SubTitle }}</p>
                  </div>
                </div>
                <div class="w-full md:w-3/12 hidden md:block px-4">
                  <img
                    v-rxlazy="item.Image"
                    alt="ratingimage"
                    :width="item.Image.width"
                    :height="item.Image.height"
                  />
                </div>
              </div>
            </swiper-slide>
          </swiper>
          </div>
          
        </div>
        <div class="absolute top-0 right-0 h-full w-auto smd:block hidden">
          <img
            class="max-w-lg xl:max-w-full mx-auto mr-0"
            :alt="data.Image.alternativeText"
            v-if="data.Image"
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";
export default {
  props: {
    data: Object,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    SwiperCore.use([Pagination]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },
};
</script>
    <style lang="scss">
@layer utilities {
  .hiresoftdevtcmslider {
    .swiper{
      margin-left: 0rem;
    }
    .slick-dots {
      li {
        &.slick-active {
          button {
            @apply bg-primary;
          }
        }
        button {
          &::before {
            display: none;
          }
          width: 0.625rem;
          height: 0.625rem;
          border-radius: 100%;
          background-color: #ddd;
          font-size: 0;
          line-height: 0;
          padding: 0;
          border: 0;
          outline: none;
        }
      }
    }
  }
}
</style>
  