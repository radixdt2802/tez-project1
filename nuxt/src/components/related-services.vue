<template>
  <div
    class="rel-services"
    :class="{
      'bg-themelight-0 dark:bg-themedark-0 rxsection-y-space':
        data.VueReferenceCode === 'TWithTCML_3Box_Slider_WhiteBg',
      'bg-opacitybg-0 dark:bg-themedark-0 rxsection-t-space':
        data.VueReferenceCode === 'TWithTCML_3Box_Slider_WhiteTspace',
      'bg-opacitybg-25 dark:bg-themedark-70 rxsection-y-space':
        data.VueReferenceCode === 'TWithTCML_3Box_Slider',
    }"
  >
    <div v-html="title"></div>
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
          class="h-full" :class="{'cursor-pointer' : item.CTA}"
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
            <div v-if="item.LongText" >
              <div v-rxhtml="item.LongText"></div>
            </div>
          </div>
        </div>
      </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
import SwiperCore, {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/pagination';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      sTitleStyle: "h3_sm"
    }
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
        titleStyle : "h2 text-center",
        sTitleStyle: "h3_sm",
        swiperOptions:{
         breakpoints: {
          1025:{
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 2,
          },
          640: {
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
  .rel-services {
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
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
        @apply border-b-4  border-solid border border-themelight-10 dark:border-themedark-65 h-full transition-all duration-300 ease-in-out bg-themelight-0 p-6 md:p-10  mr-2 xl:mx-4 dark:bg-themedark-0;
        &:hover {
          border-bottom-color: #31bbae;
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
      .siwper-slide {
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
  .dark {
    .rel-services {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
}
</style>