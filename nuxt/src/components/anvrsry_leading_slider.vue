<template>
  <div
    class="
      rxsection-y-space
      leading-slider-section
      anniversry-data
      bg-themelight-10
      dark:bg-themedark-10
      overflow-hidden
    "
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container  pb-5 relative bullet-slider">
      <h2 class="text-center text-customcolor-96">{{ data.Title }}</h2>
      <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :slide-per-view="1"
         :pagination="{
          clickable: true,
        }"
        class="leader-slider-dots"
      >
      <swiper-slide class="leading-slider-main mx-auto flex justify-center items-center text-center" v-for="item in data.TitleContentMediaList" :key="item.id">
          <div>
            <div v-if="item.LongText" v-rxhtml="item.LongText" class="listanchor"></div>
            <div class="w-3/12 mx-auto">
              <div class="leader-sign">
                  <!-- <img
                    v-rxlazy="item.Icon"
                    :width="item.Icon.width"
                    :height="item.Icon.height"
                    v-if="item.Icon"
                  /> -->
                </div>
              <p v-if="item.ShortText" class="text-center pb-0">{{ item.Title }}</p>
              <p v-if="item.ShortText" class="text-center p-0">{{ item.SubTitle }}</p>
            </div>
          </div>
      </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
  <script type="text/javascript">
import SwiperCore, {Pagination} from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/scss';
import 'swiper/scss/pagination';
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
       SwiperCore.use([Pagination])
      return {
        onSwiper,
        onSlideChange,
         modules:[Pagination],
      };
    },
}
</script>
  <style lang="scss">
</style>