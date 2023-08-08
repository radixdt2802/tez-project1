<template>
  <div
    class="rxsection-y-space pe-bgimgslider text-center contentWhite "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container csd-fullwidthlogoslider">
      <h2>{{ data.Title }}</h2>
      <div class="relative  bullet-slider">
      <swiper
        :slider-per-view="1"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="teal-slider"
         navigation
      >
      <swiper-slide
          v-for="item in data.TitleContentMediaList"
          :key="item.id"
          class="text-block"
        >
        <div class="cus-width mx-auto">
            <img
              class="border-b-8 border-themelight-0 rounded-full mx-auto"
              v-if="item.Image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
            />
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
            <p class="font-bold">{{ item.Title }}</p>
          </div>
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

import 'swiper/scss/navigation';
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
    SwiperCore.use([Navigation]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
  data() {
    return {
    };
  },
  
};
</script>
<style lang="scss" scoped>
@layer utilities {
  .pe-bgimgslider {
    .cus-width {
      max-width: 60.625rem;
    }
    .bullet-slider .swiper-pagination-bullet{
        background: #fff;
        border: 1px solid #fff;
    }
    
  }

}
</style>