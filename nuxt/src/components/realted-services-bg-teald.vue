<template>
  <div
    class="rel-services-teald rxsection-y-space bg-themelight-20 dark:bg-themedark-0">
    <h2 class="text-center">{{ data.Title }}</h2>
    <div class="container mt-5 pb-5 relative bullet-slider">
      <swiper
        :pagination="{
          clickable: true,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        class="related-services-main"
      >
      <swiper-slide v-for="item in data.TitleContentMediaList"
          :key="item.id" @click="anchor(item.CTA)">
        <div
          class="h-full cursor-pointer"
        >
          <div class="related-services-item" :title="item.Title">

            <img
              v-if="item.Image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
              class="icon light-image"
            />
            <img
              v-if="item.HoverImage"
              v-rxlazy="item.HoverImage"
              :width="item.HoverImage.width"
              :height="item.HoverImage.height"
              class="icon dark-image"
            />
            <img
              v-if="item.Icon"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
              class="icon light-image"
            />
            <img
              v-if="item.HoverIcon"
              v-rxlazy="item.HoverIcon"
              :width="item.HoverIcon.width"
              :height="item.HoverIcon.height"
              class="icon dark-image"
            />

            <h3 class="h3_sm">{{ item.Title }}</h3>
            <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
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
  methods: {
    anchor(value) {
      if (value) {
        return this.$tezRouter.push(value);
      } else {
        return null;
      }
    },
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            //  breakpoint: 5000,
            //  settings: "unslick",

            breakpoint: 1350,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 2,
            },
          },

          {
            breakpoint: 640,
            settings: {
              arrows: false,
              dots: true,
              slidesToScroll: 1,
              slidesToShow: 1.5,
              centerMode: true,
              centerPadding: 20,
            },
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark{
    .rel-services-teald{
      .dark-image{
        @apply block;
      }
      .light-image{
        @apply hidden;
      }
    }
  }
  .rel-services-teald {
    .dark-image{
        @apply hidden;
      }
      .light-image{
        @apply block;
      }
    @apply overflow-hidden;
    h2 {
      @apply dark:text-themelight-0;
    }
    .related-services-main {
      .slick-list {
        padding-left: 0 !important;
      }
      .custom-slider-dots {
        .slick-dots {
          @apply mt-8;
        }
      }
      .related-services-item {
        @apply border-b-4  border-solid border border-themelight-10 dark:border-themedark-65 h-full transition-all duration-300 ease-in-out bg-themelight-0 p-6 md:p-10  mr-4 xl:mx-4 dark:bg-themedark-0;
        &:hover {
          @apply border-b-4 border-primary;
        }

        img {
          @apply mb-8;
          width: 3.75rem;
          height: 3.75rem;
        }
        h3 {
          @apply font-semibold;
        }
      }
      .swiper-slide {
        @apply flex items-stretch;
      }
      &.swiper-initialized {
        .swiper-slide {
          @apply flex h-auto;
          @screen lg {
            @apply w-full;
          }
        }
      }
    }
  }
}
</style>