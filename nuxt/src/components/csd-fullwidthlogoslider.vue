<template>
  <div
    class="logo-slider"
    :class="[
      data.VueReferenceCode == 'CSD_FullwidthLogoSliderNoTitle'
        ? 'rxsection-b-space'
        : '',
    ]"
  >
    <div class="px-4">
      <div class="logo-head b-space-40">
        <h2 v-if="data.VueReferenceCode == 'CSD_FullwidthLogoSlider'">
          {{ data.Title }}
        </h2>
      </div>

      <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :loop="true"
        :autoplay='{
        "delay": 2000,
        "disableOnInteraction": false
        }'
        :modules="modules"
        :breakpoints="swiperOptions.breakpoints"
        class="logo-slide-main"
      >
        <swiper-slide v-for="item in data.ImageCollection" :key="item.id">
          <img
            v-if="item"
            v-rxlazy="item"
            :width="item.width"
            :height="item.height"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script type="text/javascript">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import SwiperCore, {Autoplay} from 'swiper';

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
    SwiperCore.use([Autoplay])

    return {
      onSwiper,
      onSlideChange,
      modules:[Autoplay],
    };
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
  .logo-slider {
    .logo-head {
      @apply text-center;
    }
    .logo-slide-main {
      .swiper-wrapper {
        @apply items-center;
        .slick-track {
          @apply flex items-center;
          .slick-slide {
            @apply inline-block align-middle; // margin: 0 1.5625rem;
          }
        }
        .swiper-slide {
          @screen md {
            margin: 0 10px;
          }
        }
        a {
          @apply inline-block;
        }
        img {
          @apply mx-auto;
          max-height: 5.625rem;
          max-width: 8.125rem;
          width: auto;
          height: auto;
          @screen sm {
            max-height: 110px;
            max-width: 220px;
          }
        }
      }
    }
  }
}
</style>