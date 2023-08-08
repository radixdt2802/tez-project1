<template>
  <div class="rxsection-y-space rxa-clienttestimonial" id="Clients">
    <div class="container">
      <div
        class="testimonail_main relative"
      >
        <div class="h2 text-center text-rxa-gray">{{ data.Title }}</div>
        <div
          class="para_sm text-rxa-gray smd:mb-6 text-center b-space-60"
          v-if="data.SubTitle"
          v-rxhtml="data.SubTitle"
        ></div>
        <div class="row">
          <div
            class="smd:w-6/12 w-full px-4 smd:mt-0 mt-5 pb-0 relative bullet-slider pl-5"
          >
              <!-- :pagination="{
                clickable: true,
              }" -->
            <swiper
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              :pagination='{
                clickable: true
              }'
              :breakpoints="swiperOptions.breakpoints"
              class="testimonail-box-inner smd:mt-0 bg-themelight-0 dark:bg-themedark-70"
            >
              <swiper-slide
                v-for="item in data.TitleContentMediaList"
                :key="item.id"
                class="h-full"
              >
                <div class="flex flex-wrap border_class md:p-8 sxl:p-8 xl:p-14 p-5 h-full">
                  <img
                    class="quote"
                    v-rxlazy="
                      'https://d2ms8rpfqc4h24.cloudfront.net/quote_9bc56f8921.svg'
                    "
                    width="38"
                    height="38"
                    alt="Quote"
                  />
                  <div
                    class="para_md"
                    v-if="item.LongText"
                    v-rxhtml="item.LongText"
                  ></div>
                  <div class="clientInfo flex items-center mt-5">
                    <img
                      class="rounded-full"
                      v-rxlazy="item.Image"
                      width="76"
                      height="76"
                    />

                    <div class="client-details ml-5 text-rxa-gray">
                      <div>{{ item.Title }}</div>
                      <!-- <div>{{ item.SubTitle }}</div> -->
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="w-full smd:w-6/12 px-4 ml-auto mt-20 smd:mt-0 agile-box-inner">
            <div class="responsive-iframe">
              <!-- height="720" -->
                <!-- height="410" -->
                <!-- enablejsapi="true" -->
              <iframe
                width="748"
                class="aspect-video"
                :src="data.GuideURL"
                frameborder="0"
                rel="nofollow"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
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
  .rxa-clienttestimonial {
    p {
      @apply text-rxa-gray;
    }
    .testimonail_main {
      padding: unset;
      @screen md {
        padding: 2.5rem 3.125rem;
      }
      @screen smd {
        @apply p-0;
      }
      .swiper {
        border: 0.0625rem solid #f5f5f5;
        border-bottom: 0.1875rem solid #31bbae;
      }
    }
    .border_list {
      ul {
        @apply sm:flex;
        padding: 0.625rem 0;
        li {
          @apply text-primary font-semibold max-w-full mb-5 sm:mb-0 pt-0 dark:border-themedark-65;
          @screen sm {
            max-width: 8.125rem;
          }
          border-left: 0.125rem solid #0f1628;
          padding-left: 0.875rem;
          margin-right: 4.375rem;
          @screen smd {
            margin-right: 2.375rem;
          }
          @screen sxl {
            margin-right: 4.375rem;
          }
        }
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
        .swiper {
          border: 0.0625rem solid #f5f5f5;
          border-bottom: 0.1875rem solid #31bbae;
          .slick-track {
            @apply bg-themelight-0;
          }
        }
      }
      .clientInfo {
        img {
          margin-right: 1.125rem;
        }
      }
    }
      .swiper-pagination{
        margin-top: 20px;
      }
    .swiper-wraper {
      @apply flex items-stretch;
    }
    .swiper-initialized {
      &.swiper-slide {
        @apply flex h-auto;
        @screen lg {
          max-width: 100%;
        }
      }
    }
  }
}
</style>
