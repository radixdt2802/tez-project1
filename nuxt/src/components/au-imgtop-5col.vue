<template>
  <div class="rxsection-y-space au-imgtop-5col dark:bg-themedark-0">
    <div class="container">
      <sectionHeading :data="data" />
      <div class="">
        <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        class="sm:flex sm:justify-center custom-slider-dots sm:flex-wrap"
      >
        <swiper-slide 
            v-for="item in data.TitleContentMediaList"
        :key="item.id" class="bgBoxrow sxl:w-1/5 md:w-1/3 sm:w-1/2 mt-10 sm:mt-8">
          <div class="bgBox text-center px-8">
              <div
                class="
                  innovation_icon
                  bg-primary
                  dark:bg-themedark-70
                  mb-4
                  relative
                  mx-auto
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  v-if="item.Icon"
                  v-rxlazy="item.Icon"
                  :width="item.Icon.width"
                  :height="item.Icon.height"
                />
              </div>
              <h3 class="text-primary font-bold py-5 relative">
                {{ item.Title }}
              </h3>
              <div
                v-if="item.LongText"
                v-rxhtml="item.LongText"
                class="para_md w-48 mx-auto content"
              ></div>
            </div>
        </swiper-slide>
      </swiper>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
export default {
  
  components: {
    sectionHeading:sectionHeading,
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
      
      return {
        onSwiper,
        onSlideChange,
      };
    },
  props: {
    data: Object,
  },
  data() {
    return {
      swiperOptions:{
        breakpoints:{
          1024:{
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 3,
          },
          640: {
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
    .au-imgtop-5col{
      .innovation_icon{
        &::after{
          border-top: 0.875rem solid #1c1c1c;
        }
      }

    }
  }
  .au-imgtop-5col {
    h3 {
      font-size: 2.5rem;
      line-height: 2.875rem;
      @screen sm {
        font-size: 2.75rem;
        line-height: 3.125rem;
      }
      @screen smd {
        font-size: 3rem;
        line-height: 3.375rem;
      }
      @screen sxl {
        font-size: 3.25rem;
        line-height: 3.625rem;
      }
    }
    .content {
      p {
        @apply dark:text-themedark-75;
      }
    }
    .innovation_icon {
      width: 8.5rem;
      height: 8.5rem;
      &::after {
        content: "";
        @apply absolute left-50;
        bottom: -0.875rem;
        transform: translateX(-50%);
        border-top: 0.875rem solid #31bbae;
        border-left: 0.625rem solid transparent;
        border-right: 0.625rem solid transparent;
      }
    }
    .slick-list {
      padding: 0.625rem;
    }
    .slick-initialized {
      .slick-slide {
        max-width: 17.6875rem;
        padding: 1.5625rem 0.625rem;
        @screen xsm {
          max-width: 19.375rem;
        }
        width: 100%;
        box-shadow: 0rem 0rem 0.1875rem 0rem #dadada8c,
          0rem 0rem 0.9375rem 0rem #dadada8c;
        margin-right: 0.9375rem;
        @apply justify-center;
      }
    }
  }
}
</style>