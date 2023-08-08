<template>
  <div class="client-slider">
  <div class=" container-none">
    <div class="flex flex-wrap items-center"
    :class="[
      data.VueReferenceCode == 'Title_WITH_Image'
        ? 'bg-themelight-0 dark:bg-themedark-10'
        : '',
      data.VueReferenceCode == 'Title_WITH_Image_GrayBg'
        ? 'bg-themelight-10 dark:bg-themedark-10'
        : ''
    ]">
      <div class="md:w-3/12 pl-8 w-full">
        <div class="h3 md:text-left text-center md:mt-0 mt-5 pb-0 text-dark">{{ data.Title }}</div>
      </div>
      <div class="md:w-9/12 px-4 w-full">
        <div
          class="
            logo-slider-section
            items-center
            
          "
        >
          <swiper
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :breakpoints="swiperOptions.breakpoints"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
            }"
          >
            <swiper-slide v-for="item in data.ImageCollection" :key="item.id">
              <img
                v-rxlazy="item"
                :width="item.width"
                :height="item.height"
                :alt="item.alternativeText"
                class="outline-none"
              />
            </swiper-slide>
          </swiper>
        </div>
        <div
          class="
            darklogo-slider-section
            items-center
            bg-themelight-10
            dark:bg-themedark-10
          "
        >
          <swiper
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :breakpoints="swiperOptions.breakpoints"
          >
            <swiper-slide v-for="key in data.MultipleMedia" :key="key.id">
              <img
                v-rxlazy="key"
                :width="key.width"
                :height="key.height"
                :alt="key.alternativeText"
                class="outline-none"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/scss";
export default {
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
    SwiperCore.use([Autoplay]);

    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay],
    };
  },
  props: {
    data: Object,
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          1600: {
            slidesPerView: 6,
          },
          1371: {
            slidesPerView: 5,
          },

          1200: {
            slidesPerView: 5,
          },

          768: {
            slidesPerView: 3.5,
          },

          640: {
            slidesPerView: 3,
          },

          460: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .client-slider {
      .logo-slider-section {
        @apply hidden;
      }
      .darklogo-slider-section {
        @apply block;
      }
    }
  }
  .client-slider {
    .swiper {
      @apply py-10 flex items-center justify-between;
    }
    .logo-slider-section {
      @apply block;

      .swiper-slide {
        img {
          @apply mx-auto;
        }
      }
      .swiper-wrapper {
        @apply flex items-center;
      }
    }
    .darklogo-slider-section {
      @apply hidden;
      .swiper-slide {
        img {
          @apply mx-auto;
        }
      }
      .swiper-wrapper {
        @apply flex items-center;
      }
    }
  }
}
</style>
