<template>
  <div
    class="rxsection-y-space anvrsry-topicon-slider bg-cover bg-no-repeat anniversry-data overflow-hidden contentWhite"
    v-bind:style="[data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',]"
  >
    <div class="container-fluid px-4">
      <h2 class="text-center text-themelight-0 mx-auto">{{data.Title}}</h2>
      <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
        :space-between="20"
        :loop="true"
        :autoplay='{
        "delay": 6000,
        "disableOnInteraction": true
        }'
        class="custom-slider-dots slider-size h-full"
      >
        <swiper-slide
          class="anvrsry-topicon-main mx-auto items-center text-center slider-content w-full h-auto"
          v-for="item in data.TitleContentMediaList"
          :key="item.index"
        >
          <div class="top-icon h-full">
            <div class="icon-style flex items-center">
              <img
                v-rxlazy="item.Icon"
                :width="item.Icon.width"
                :height="item.Icon.height"
                v-if="item.Icon"
                class="mx-auto"
              />
            </div>
            <h3>{{item.Title}}</h3>
            <div v-if="item.LongText" v-rxhtml="item.LongText" class="listanchor text-themelight-0"></div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
  <script type="text/javascript">
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";
export default {
  props: {
    data: Object
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = swiper => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };

    SwiperCore.use([Pagination, Autoplay]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Autoplay]
    };
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          1370: {
            slidesPerView: 4
          },
          991: {
            slidesPerView: 2
          },
          767: {
            slidesPerView: 1
          }
        }
      }
    };
  }
};
</script>
  <style lang="scss">
@layer utilities {
  .listanchor {
    width: 80%;
    margin: 0 auto;
  }
  .anvrsry-topicon-slider {
    h2 {
      line-height: 3.2rem;
      /* @screen sm{
          max-width:28.75rem;
        } */
      @screen md {
        /* max-width:78.75rem; */
        line-height: 4.2rem;
        margin-bottom: 1.25rem;
      }
      @screen sxl {
        /* max-width: 48.75rem; */
        line-height: 4.625rem;
      }
      @screen xxl {
        /* max-width:78.75rem; */
        line-height: 5.625rem;
      }
    }
    
    .slider-size {
      max-width: 103.5rem;
      .anvrsry-topicon-main {
        @apply h-auto;

        .top-icon {
          margin: 0 1rem;
          border: 0rem;
          @screen md {
            border: 0.2813rem solid #4d8bc3;
          }
          @screen smd {
            margin: 0 1.25rem;
          }
          @screen sxl {
            padding: 0.625rem 0 0.625rem;
          }

          img {
            max-width: 7.5rem;
            max-height: 3.75rem;
            width: 100%;
            @screen sm {
              max-width: 9.375rem;
              max-height: 3.75rem;
            }
            @screen md {
              max-width: 9.375rem;
              max-height: 6.25rem;
            }
            @screen smd {
              max-width: 10.625rem;
              max-height: 5.625rem;
              height: auto;
              width: 100%;
            }
          }
          .icon-style {
            min-height: 5.625rem;
            @screen md {
              min-height: 10rem;
            }
            @screen xl {
              min-height: 12.5rem;
            }
            @screen xxl {
              min-height: 13.5rem;
            }
          }
        }
        .swiper-slide{
          @apply h-auto;
        }
        h3 {
          font-size: 2.375rem;
          line-height: 3.375rem;
          margin-top: 0.625rem;
          @apply text-customcolor-98 mb-0;
          @screen xxsm {
            font-size: 2.75rem;
            line-height: 3.625rem;
          }
          @screen md {
            font-size: 3rem;
            line-height: 3.375rem;
          }
          @screen xl {
            font-size: 3.375rem;
            line-height: 3.625rem;
          }
          @screen xxl {
            font-size: 3.875rem;
            line-height: 3.875rem;
          }
          @screen xxxl {
            font-size: 3.75rem;
            line-height: 4.0625rem;
          }
        }
        .listanchor {
          p {
            /* @apply text-themelight-0; */
            @apply px-4;
            font-size: 1.125rem;
            line-height: 1.875rem;
            @screen xxsm {
              font-size: 1.3125rem;
              line-height: 2.125rem;
            }
            @screen xsm {
              font-size: 1.5rem;
              line-height: 2.0625rem;
            }
            @screen md {
              font-size: 1.375rem;
              line-height: 2.25rem;
            }
            @screen smd {
              font-size: 1.5rem;
              line-height: 2.375rem;
            }
            @screen sxl {
              font-size: 1.75rem;
              line-height: 2.5rem;
            }
            @screen xl {
              font-size: 1.875rem;
              line-height: 3rem;
            }
            @screen xxl {
              padding: 0.4375rem 2.1875rem;
            }
          }
        }
      }
    }
  }
}
</style>