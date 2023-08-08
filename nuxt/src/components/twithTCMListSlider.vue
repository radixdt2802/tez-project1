<template>
  <div class="rxsection-y-space testimonial dark:bg-themedark-0">
    <!-- v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]" -->
    <div class="container">
      <div class="testimonail_main">
        <div class="h1 text-center">{{ data.Title }}</div>
        <div class="row ">
          <div class="w-full px-4 lg:mt-0 mt-5 pb-5 relative bullet-slider">
            <swiper
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              :breakpoints="swiperOptions.breakpoints"
              :pagination="{ clickable: true }"
              class="testimonail-box-inner lg:mt-0"
            >
              <swiper-slide
                v-for="item in data.TitleContentMediaList"
                :key="item.id"
                class="h-full"
              >
                <div>
                  <div class="lg:flex lg:mb-0 xl:mt-8 lg:mt-4 mt-0 lg:items-start">
                    <div class="w-full xl:w-1/4 lg:1/2 lg:pr-6 ">
                      <img
                        class="mx-auto text-center ceopic"
                        v-rxlazy="item.Image"
                        :width="item.Image.width"
                        :height="item.Image.height"
                      />
                      <div class="h3_sm text-center pt-3">
                        {{ item.Title }}
                      </div>
                      <div class="text-center">
                        {{ item.SubTitle }}
                      </div>
                    </div>
                    <div class="w-full xl:w-9/12 lg:1/2 mt-7 lg:px-4 px-0 pb-0 lg:pb-0">
                      <div
                        class="text-left para_md"
                        v-if="item.LongText"
                        v-rxhtml="item.LongText"
                      ></div>
                    </div>
                  </div>
                </div>
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
import SwiperCore, { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
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
    SwiperCore.use([Pagination]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          1350: {
            slidesPerView: 1,
          },
          1025: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
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
  .testimonial {
    .h1 {
      font-size: 2.125rem;
      line-height: 2.875rem;
      @screen smd {
        font-size: 2.625rem;
        line-height: 3.375rem;
      }
      @screen lg {
        font-size: 2.75rem;
        line-height: 3.5rem;
      }
      @screen xxl {
        font-size: 3.75rem;
        line-height: 5rem;
      }
    }
    .testimonail_main {
      padding: 2.5rem 1.25rem;
      @screen md {
        padding: 2.5rem 3.125rem;
      }
      @screen lg {
        @apply p-0;
      }
    }

    .testimonail-box-inner {
      img.ceopic {
        width: 19.375rem;
      }
    }
  }
}
</style>