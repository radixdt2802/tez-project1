<template>
  <div
    class="rxsection-y-space testimonial dark:bg-themedark-10 bg-themelight-10"
  >
    <div class="container">
      <div class="testimonail_main">
        <h2 class="text-center">{{ data.Title }}</h2>
        <div
          class="para_md text-center"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
        <div class="row t-space-60">
          <div class="w-full px-4 smd:mt-0 mt-5  pb-5 relative bullet-slider">
            <swiper
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              :breakpoints="swiperOptions.breakpoints"
               :pagination="{
                  clickable: true,
                }"  
              class="testimonail-box-inner smd:mt-0"
            >
              <swiper-slide
                v-for="item in data.TitleContentMediaList"
                :key="item.id"
                class="h-full"
              >
                <div>
                  <div class="smd:flex smd:flex-row-reverse smd:mb-0 mb-8 cursor-pointer">
                    <div class="w-full smd:w-1/2 pb-6 smd:pb-0">
                      <div class="h3_sm text-center smd:text-left" @click="anchor(item.NavURL)">
                        {{ item.Title }}
                      </div>
                      <div
                        @click="anchor(item.NavURL)"
                        class="text-center smd:text-left smd:para_md list_sm square_list key-li"
                        v-if="item.LongText"
                        v-rxhtml="item.LongText"
                      ></div>
                    </div>
                    <div class="w-full smd:w-1/2 smd:pr-6">
                      <img v-if="item.Image" class="mx-auto" v-rxlazy="item.Image" :width="item.Image.width" :height="item.Image.height" />
                      <div v-if="item.GuideURL" class="embed-responsive embed-responsive-16by9">
                        <iframe width="1280" height="720" :src="item.GuideURL" frameborder="0" class="embed-responsive-item" rel="nofollow"></iframe>
                        </div>
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
  methods:{
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  }
};
</script>
<style lang="scss">
@layer utilities {
  .testimonial {
  .square_list li{
   @apply mb-0;
  }
    .key-li {
      @apply text-left;
    }
    .testimonail_main {
      padding: 2.5rem 1.25rem;
      @screen md {
        padding: 2.5rem 3.125rem;
      }
    }
    .left-con {
      padding: 0 0.938rem;
      p {
        @screen smd {
          max-width: 44.6875rem;
        }
      }
      a {
        @apply text-primary no-underline;
      }
    }
    .testimonail-box {
      .testimonail-box-inner {
        margin-top: 1.875rem;
      }
    }
  }
}
</style>