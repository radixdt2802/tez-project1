<template>
  <div class="rxsection-t-space au3colimgleader">
    <div class="container relative">
      <h2 class="text-center">{{ data.Title }}</h2>
      <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        :navigation="true"
        class="smd:flex mt-4"
        nav
      >
        <swiper-slide v-for="item in data.TitleContentMediaList"
        :key="item.id" class="leader-main">
          <div class="leader-box relative">
            <img
            class="w-full"
              v-rxlazy="item.Image"
              :alt="item.Image.alternativeText"
              :width="item.Image.width"
              :height="item.Image.height"
            />
            <div class="leader-name flex flex-col items-center justify-center">
              <h3 class="para_lg relative text-themelight-0">
                {{ item.Title }}
              </h3>
              <p class="text-themelight-0">{{ item.SubTitle }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div
        v-if="data.CTA"
        v-html="$md.render(data.CTA)"
        class="btn btn_md text-center mt-10"
      ></div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import titleMixin from '../mixins/title.mixin';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation } from "swiper";
import 'swiper/scss';
import "swiper/scss/navigation";
export default {
  mixins: [titleMixin],    
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
      titleStyle : "h3",
      swiperOptions:{
        breakpoints:{
          767: {
              slidesPerView: 2,
            },
          575: {
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
  .au3colimgleader {
    .slick-list {
      height: 100%;
    }
    .slick-initialized {
      .slick-slide {
        height: auto;
      }
    }
    .slid-arrow {
      @apply text-primary mx-auto w-auto z-10 h-auto;

      &::before {
        display: none;
      }
      &.slick-prev {
        left: 0.75rem;
      }
      &.slick-next {
        right: 0.75rem;
      }
      &.slick-disabled {
        opacity: 0.3;
      }
    }
    .leader-box {
      &:hover {
        .leader-name {
          opacity: 1;
        }
      }
    }
    .leader-name {
      @apply absolute top-0 right-0 left-0 bottom-0 opacity-0 transition-all duration-300 ease-in-out;
      background: rgba(63, 61, 63, 0.9);
      h3 {
        &:before {
          content: "";
          @apply absolute bottom-0 left-0 right-0 mx-auto bg-themelight-0;
          width: 1.75rem;
          height: 0.125rem;
        }
      }
    }
    .para_lg * {
      @apply text-themelight-0;
    }
  }
}
</style>