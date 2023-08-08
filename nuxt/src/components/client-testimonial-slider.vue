<template>
  <div>
    <div class="rxsection-t-space">
      <sectionHeading :data="data" />
    </div>
    <div class="client-tsm-slider relative pt-12 pb-12 smd:pt-56 smd:pb-24">
      <div class="slider-after-bg bg-primary"></div>
      <div class="sm:max-w-lg
          smd:max-w-4xl
          mx-auto relative">
             <swiper
        :slides-per-view="1"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :navigation="true"
        :modules="modules"
        :loop="true"
        class="
          client-slider-block
          bg-themelight-0
          dark:bg-themedark-0
          shadow-lg
          select-none
          block
          box-border
        "
      >
        <swiper-slide
          class="client-slide px-6 py-10 smd:px-10 smd:py-16 text-center"
          v-for="item in data.TitleContentList"
          :key="item.id"
        >
          <div>
            <img
              v-rxlazy="
                'https://d2ms8rpfqc4h24.cloudfront.net/quote_9bc56f8921.svg'
              "
              width="38"
              height="28"
              alt=""
            />
          </div>
          <div
            class="para_lg leading-relaxed"
            v-if="item.LongText"
            v-rxhtml="item.LongText"
          ></div>
          <h4 class="font-semibold">{{ item.Title }}</h4>
          <hr class="w-20 h-1 bg-primary mt-5 mx-auto mb-0" />
          <p class="pt-8 font-semibold">{{ item.SubTitle }}</p>
        </swiper-slide>
      </swiper>
          </div>
   
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
const sectionHeading = () => import("./section-heading75.vue");

export default {
  components: {
    sectionHeading,
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
    SwiperCore.use([Navigation]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
  props: {
    data: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@layer utilities {
  .client-tsm-slider {
    .slider-after-bg {
      display: block;
      width: 100%;
      height: 80%;
      position: absolute;
      top: 50%;
      left: 0;
      content: "";
      transform: skewY(-10deg) translateY(-40%);
    }
    .custom-arrow {
      font-size: 0;
      border: 0;
      z-index: 2;
      outline: 0;
      background: #2b2b2b
        url("https://d2ms8rpfqc4h24.cloudfront.net/download_e75a13c81f.png");
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      left: -1.25rem;
      right: auto;
      transition: background-position 0.2s ease-in !important;
      background-size: 5rem;
      background-repeat: no-repeat;
      display: none;
      @screen md {
        display: block;
      }
      @screen sxl {
        background-size: cover;
        width: 3.75rem;
        height: 3.75rem;
      }
      &.prev {
        &:hover {
          background-position: -0.3125rem 0;
        }
      }
      &.next {
        right: -1.25rem;
        left: auto;
        background-position: -2.5rem 0;
        &:hover {
          background-position: -2.1875rem 0;
        }
        @screen sxl {
          background-position: -3.75rem 0;
          &:hover {
            background-position: -3.4375rem 0;
          }
        }
      }
      &::before {
        display: none;
      }
    }
  }
}
</style>