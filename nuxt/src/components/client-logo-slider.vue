<template>
  <div
    class="
      py-12
      logo-slider-section
      relative
      bg-themelight-10
      dark:bg-themedark-10
      overflow-hidden
    "
  >
    <div>
      <swiper
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        class="
          related-services-main
          flex
          justify-center
          items-center
          light-mode-image
        "
      >
        <swiper-slide
          class="clients_slide text-center"
          v-for="item in data.ImageCollection"
          :key="item.id"
        >
          <img
            class="xl:mx-auto ml-5"
            v-rxlazy="item.url"
            :width="item.width"
            :height="item.height"
          />
        </swiper-slide>
      </swiper>
      <swiper
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        class="
          related-services-main
          flex
          justify-center
          items-center
          dark-mode-image
        "
      >
        <swiper-slide
          class="clients_slide text-center"
          v-for="item in data.MultipleMedia"
          :key="item.id"
        >
          <img
            class="xl:mx-auto ml-5"
            v-if="item"
            v-rxlazy="item.url"
            :width="item.width"
            :height="item.height"
          />
        </swiper-slide>
      </swiper>
      <!-- <swiper
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        class="related-services-main flex justify-center items-center dark-images"
      >
        <swiper-slide class="clients_slide text-center"
          v-for="key in data.MultipleMedia"
          :key="key.id">
          <img
          v-if="key"
            v-rxlazy="key"
            :width="key.width"
            :height="key.height"
            :alt="key.alternativeText"
            
          />
        </swiper-slide>
      </swiper> -->
      <div
        class="
          side-content
          absolute
          right-0
          top-0
          h-full
          flex flex-wrap
          items-center
          p-4
          bg-primary
          z-10
        "
      >
        <div class="contentWhite mb-0">
          <h3>{{ data.Title }}</h3>
          <span class="text-base font-normal leading-none">{{
            data.SubTitle
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import SwiperCore, {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue";
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
    SwiperCore.use([Autoplay])
    return {
      onSwiper,
      onSlideChange,
      modules:[Autoplay]
    };
  },
  props: {
    data: Object,
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          1460: {
            slidesPerView: 8,
          },
          1025: {
            slidesPerView: 5,
          },

          768: {
            slidesPerView: 4,
          },

          640: {
            slidesPerView: 2,
          },

          460: {
            slidesPerView: 1,
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
    .logo-slider-section {
      .dark-mode-image {
        @apply block;
      }
      .light-mode-image {
        @apply hidden;
      }
    }
  }
  .logo-slider-section {
    .dark-mode-image {
      @apply hidden;
    }
    .light-mode-image {
      @apply block;
    }

    .swiper-slide {
      @apply flex items-center;
    }
    .clients_slide {
      width: 14.625rem;
    }
    .swiper-wrapper {
      @apply items-center;
    }
    .side-content {
      max-width: 5.625rem;
      box-shadow: -0.625rem 0 1.875rem 0rem #0000004d;
      @screen sm {
        max-width: 6.25rem;
      }
      @screen sxl {
        max-width: 7.8125rem;
        box-shadow: -0.625rem 0 3.125rem 0 #00000080;
      }
    }
  }
}
</style>