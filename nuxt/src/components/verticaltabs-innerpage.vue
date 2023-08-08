<template>
  <div class="verticalTabsInnerpage rxsection-y-space">
    <div class="container">
      <div class="text-center pb-8">
        <h2>{{ data.Title }}</h2>
      </div>
      <div class="mx-auto">
        <div class="hidden lg:block">
          <div class="flex w-full justify-between items-center">
            <div class="tabheads">
              <ul
                class="flex list-none flex-wrap pt-3 flex-col px-3 w-full mb-12"
              >
                <li
                  class="flex-auto text-left py-2 mx-0 cursor-pointer"
                  v-for="(item,index) in data.TitleContentList"
                  :key="item.id"
                >
                  <div
                    class="horiz-tab-items"
                    v-if="item.Title"
                    :title="item.Title"
                    @click="contentvisiblity(index)"
                    :class="index == tabId ? 'active' : ''"
                  >
                    {{ item.Title }}
                  </div>
                </li>
                <li>
                  <div
                    class="softabcta"
                    v-if="data.CTA"
                    v-html="$md.render(data.CTA ? data.CTA : '')"
                  ></div>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-2/3">
              <div class="tab-content">
                <div
                  v-for="(item,index) in data.TitleContentList"
                  :key="index"
                  :id="index"
                  v-show="index == tabId"
                >
                  <div
                    class="flex flex-row flex-wrap items-center contentWhite"
                  >
                    <h3 class="h3_sm">{{ item.SubTitle }}</h3>
                    <div
                      class="circle_list"
                      v-rxhtml="item.LongText ? item.LongText : ''"
                    ></div>
                    <div class="softTabContentlink">
                      <div
                        class="w-full flex build-cta"
                        v-html="$md.render(item.CTA ? item.CTA : '')"
                      ></div>
                      <img
                        v-if="item.CTA"
                        class="primary-arrowBtn"
                        v-rxlazy="arrowImage"
                        width="18"
                        height="10"
                        alt="Arrow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            contentWhite
            pb-5
            lg:pb-0
            relative
            bullet-slider
            verticaltab-slider
          "
        >
          <swiper
            @swiper="onSwiper"
            :pagination="{
              clickable: true,
            }"
            @slideChange="onSlideChange"
            :breakpoints="swiperOptions.breakpoints"
            class="lg:hidden block"
            :space-between="20"
            :loop="true"
            navigation
          >
            <swiper-slide
              class="slider-tab"
              v-for="item in data.TitleContentList"
              :key="item.id"
            >
              <div>
                <h3>{{ item.SubTitle }}</h3>
                <div
                  class="circle_list"
                  v-rxhtml="item.LongText ? item.LongText : ''"
                ></div>
                <div class="softTabContentlink">
                  <div
                    class="w-full flex justify-end"
                    v-html="$md.render(item.CTA ? item.CTA : '')"
                  ></div>
                  <img
                    v-if="item.CTA"
                    class="primary-arrowBtn"
                    v-rxlazy="arrowImage"
                    width="18"
                    height="10"
                    alt="Arrow"
                  />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import staticImg from "../mixins/staticimg.mixin";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

export default {
  mixins: [staticImg],
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

    SwiperCore.use([Pagination, Navigation]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      tabId: 0,
      swiperOptions: {
        breakpoints: {
          5000: {
            slidesPerView: -1,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.1,
            centeredSlides: true,
          },
          320: {
            slidesPerView: 1.1,
          },
        },
      },
      // arrowImage:"https://d2ms8rpfqc4h24.cloudfront.net/arrow_d169cb2460.svg",
    };
  },
  props: {
    data: Object,
  },
  methods: {
    contentvisiblity(index) {
      if (window.innerWidth > 1024) {
        this.tabId = index; 
      }
    },
    // contentvisiblity(id) {
    //   if (window.innerWidth > 1024) {
    //     this.tabId = id;
    //   }
    // },
  },
};
</script>


 <style lang="scss">
@layer utilities {
  .verticalTabsInnerpage {
    .tabheads {
      @apply hidden lg:block;
      .horiz-tab-items {
        @apply flex no-underline font-semibold relative pl-10 text-lg transition-all duration-300 ease-in-out;
        &.active {
          @apply text-primary;
          &::before {
            content: "";
            height: 0.1875rem;
            width: 1.25rem;
            top: 0.9375rem;
          }
        }
        @screen xl {
          font-size: 1.375rem;
          line-height: 2.125rem;
        }
        &:before {
          @apply absolute left-0 w-0 h-0 bg-primary transition-all duration-300 ease-in-out;
          content: "";
          top: 0.9375rem;
        }
        @screen lg {
          &:hover {
            @apply text-primary;
            &:before {
              @apply absolute left-0 bg-primary p-0;
              height: 0.1875rem;
              width: 1.25rem;
              top: 0.9375rem;
              transition: 0.5s all ease-in-out;
            }
          }
        }
      }
      .softabcta {
        a {
          @apply text-primary font-semibold pl-10;
          font-size: 1.375rem;
          line-height: 2.125rem;
        }
      }
    }
    .tab-content,
    .slider-tab {
      @apply bg-secondary h-full text-themelight-0 mb-5 dark:bg-themedark-70;
      @screen lg {
        height: auto;
        min-height:727px;
      }
      padding: 2.5rem 1.25rem;
      @screen smd {
        padding: 2.5rem;
      }
      @screen xl {
        padding: 3.75rem;
      }
      p:not(:last-child) {
        @apply text-themelight-0;
        padding: 1rem 0rem;
      }
      ul {
        column-count: 1;
        @screen md {
          column-count: 2;
        }
        li {
          @apply text-themelight-0 text-base;
          line-height: 1.625rem;
          @screen sm {
            font-size: 1.0625rem;
            line-height: 1.75rem;
          }
          @screen smd {
            font-size: 1.125rem;
            line-height: 1.875rem;
          }
          a {
            @apply text-themelight-0 underline;
            &:hover {
              @apply text-primary underline;
            }
          }
        }
      }
      .softTabContentlink {
        @apply flex mt-10 items-center ml-auto;
        p {
          a {
            @apply text-primary no-underline;
          }
        }
        img {
          @apply inline-block ml-5;
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          img {
            margin-left: 0.7rem;
          }
        }
      }
    }
    .slid-arrow {
      @apply text-primary right-0 top-auto left-0 mx-auto w-auto;
      height: 0.8125rem;
      transform: translateY(calc(100% + 0.8125rem));

      &::before {
        display: none;
      }
      bottom: -1.875rem;
      &.slick-prev {
        left: 44%;
        transform: translateX(-50%);
      }
      &.slick-next {
        left: 55%;
        transform: translateX(-50%);
      }
      &.slick-disabled {
        opacity: 0.3;
      }
    }
    .swiper-wrapper {
      padding-left: 0 !important;
    }
    .swiper-initialized {
      .swiper-slide {
        @apply flex h-auto;
      }
    }
    .swiper-slide {
      @apply flex items-stretch lg:mb-10;
    }
  }
  .slider-tab {
    a {
      @apply no-underline;
    }
  }
}
</style>