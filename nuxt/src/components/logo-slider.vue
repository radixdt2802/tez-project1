<template>
  <div
    class="logo-slider"
    v-bind:class="[
      data.VueReferenceCode == 'TM_Awards_NoTitle'
        ? 'sm:pb-16 pb-10 sm:pt-16 pt-10'
        : '',
      data.VueReferenceCode == 'TM_Awards_Yspace' ? 'rxsection-y-space' : '',
      data.VueReferenceCode == 'TM_Awards' ? 'rxsection-t-space' : '',
      data.VueReferenceCode == 'TM_Awards_BSpace' ? 'rxsection-b-space' : '',
      data.VueReferenceCode == 'TM_Awards_YTitle' ? 'rxsection-y-space' : '',
      data.VueReferenceCode == 'TM_Awards_YTitle_noSpace' ? 'rxsection-y-space pb-0':''
    ]"
  >
    <!-- sm:pb-16 pb-10 sm:pt-16 pt-10 -->
    <div class="container">
      <div class="logo-head">
        <div class="h2"
          v-if="
            data.VueReferenceCode == 'TM_Awards' || data.VueReferenceCode == 'TM_Awards_YTitle' || data.VueReferenceCode == 'TM_Awards_YTitle_noSpace' || data.VueReferenceCode == 'TM_Awards_BSpace'
          "
        >
          {{ data.Title }}
      </div>
      </div>
      <swiper
        v-if="data.ImageCollection"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        :autoplay='{
        "delay": 5000,
        "disableOnInteraction": false
        }'
        loop=true
         :space-between="20"
        :class="{
          'sm:mt-10 mt-8': data.VueReferenceCode == 'TM_Awards',
        }"
        class="logo-slide-main light-mode"
      >
        <swiper-slide v-for="item in data.ImageCollection"
        :key="item.id" class="text-center">
          <img
            v-if="item"
            v-rxlazy="item"
            :width="item.width"
            :height="item.height"
            :alt="item.alternativeText"
            :title="item.alternativeText"
          />
        </swiper-slide>
      </swiper>
      <swiper
        v-if="data.MultipleMedia"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        :autoplay='{
        "delay": 5000,
        "disableOnInteraction": false
        }'
        loop=true
         :space-between="20"
        :class="{
          'sm:mt-10 mt-8': data.VueReferenceCode == 'TM_Awards',
        }"
        class="logo-slide-main dark-mode"
      >
        <swiper-slide v-for="item in data.MultipleMedia"
        :key="item.id" class="text-center">
          <img
            v-if="item"
            v-rxlazy="item"
            :width="item.width"
            :height="item.height"
            :alt="item.alternativeText"
            :title="item.alternativeText"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script type="text/javascript">
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/scss';
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
      swiperOptions:{
        breakpoints:{
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
        }
      },
    };
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
  .logo-slider {
    .dark-mode{
      @apply block;
    }
    .light-mode{
      @apply hidden;
    }
  }  
  }
  .logo-slider {
     .dark-mode{
      @apply hidden;
    }
    .light-mode{
      @apply block;
    }
    .logo-head {
      @apply text-center;
    }
    .logo-slide-main {
      .swiper-wrapper {
        @apply items-center;
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
          max-height: 6.875rem;
          max-width: 100%;
        }
      }
    }
  }
}
</style>