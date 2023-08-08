<template>
  <div class="insight-banner-slider rxsection-y-space">
    <div class="container">
      <div v-if="data.dynamicResult.length > 0" class="relative insight-slider">
         <template v-if="data['video-list'].data.dynamicResult.length > 0">
        <swiper
          :slides-per-view="1"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :breakpoints="swiperOptions.breakpoints"
          navigation
           :loop="true" :loopFillGroupWithBlank="true"
        >
          <swiper-slide v-for="item in data['video-list'].data.dynamicResult" :key="item.Title">
                <div class="flex flex-wrap h-full" @click="contentvisiblity(item.id, item)">
                <div class="smd:w-7/12 w-full overlay-tube relative">

                  <img
                v-rxlazy="item.Image"
                :width="item.Image.width"
                :height="item.Image.height"
                :alt="item.Image.alternativeText"
                class="transition-all duration-300 ease-in-out"
              />
                </div>
                <div
                  class="
                    smd:w-5/12
                    w-full
                    bg-themelight-10
                    sxl:p-8
                    sm:p-6
                    xsm:p-5
                    p-4
                  "
                >
                  <span class="post-tag-container" v-if="item.Classification">{{item.Classification.Title}}</span>
                  <div class="mt-3 post-category-container">
                  <tez-link v-if="item.Category.NavURL" :to="item.Category.NavURL" class="pt-0 no-underline post-category">{{ item.Category.Title }}</tez-link>
                  </div>
                  <h3 class="h3_sm font-normal p-0">{{ item.Title }}</h3> 
                  <a href="javascript:void(0);" id="show-popup" @click="contentvisiblity(item.id, item)" class="mt-4 btn btn_sm font-bold" title="Watch Video">Watch Video</a>
                </div>
              </div>
           
          </swiper-slide>
          <swiper-slide v-for="item in data.dynamicResult" :key="item.Title">
 <div class="flex flex-wrap h-full"  >
            <div class="smd:w-7/12 w-full" >
              <tez-link :to="item.NavURL">
                <img
                  class="lazyloaded"
                  v-if="item.Image"
                  v-rxlazy="item.Image"
                  :alt="item.Image.alternativeText"
                  :width="item.Image.width"
                  :height="item.Image.height"
                />
              </tez-link>
            </div>
            <div
              class="
                smd:w-5/12
                w-full
                bg-themelight-10
                sxl:p-8
                sm:p-6
                xsm:p-5
                p-4
              "
            >
              <div class="post-body">
              <span class="post-tag-container">{{ item.Classification.Title }}</span>
              <div
                class="mb-2 mt-3 post-category-container"
                v-if="item.Category"
                v-for="items in item.Category"
              >
                <tez-link
                  :to="items.NavURL"
                  class="pt-0 font-14 post-category no-underline"
                >
                  {{ items.Title }}
                </tez-link>
              </div>
            </div>
            <div class="mt-5">
              <tez-link :to="item.NavURL" class="post-title no-underline" :title="item.Title">{{ item.Title }}</tez-link>
              <div class="flex items-center mt-10">
                <tez-link
                  :to="item.BlogAuthor.NavURL"
                  :title="item.BlogAuthor.Name"
                  v-if="item.BlogAuthor && item.BlogAuthor.Image"
                >
                  <img
                    class="mr-3  rounded-circle featured-post-author-thumb ls-is-cached lazyloaded"
                    v-rxlazy="item.BlogAuthor.Image"
                    width="60"
                    height="60"
                  />
                </tez-link>
                <div class="media-body">
                  <tez-link
                    :to="item.BlogAuthor.NavURL"
                    :title="item.BlogAuthor.Name"
                    class="mt-0 mb-0 featured-post-author-title no-underline"
                    v-if="item.BlogAuthor"
                    >{{ item.BlogAuthor.Name }}</tez-link
                  >
                  <p class="pt-0 mb-0 featured-post-author-desc">
                    {{
                      new Date(item.PublishedDate).toLocaleString("default", {
                        month: "short"
                      })
                    }}
                    {{ new Date(item.PublishedDate).getDate() }},
                    {{ new Date(item.PublishedDate).getFullYear() }}
                    <i class="author-time-dot fas fa-circle"></i>
                    <span v-if="item.ReadingTime" class="span-reading-time rt-reading-time">
                      <span class="rt-label rt-prefix"></span>
                      <span class="rt-time">{{ item.ReadingTime }} min read</span>
                    </span> 
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
          </swiper-slide>
        </swiper>
           <transition v-if="videoItem != null" name="modal" @keydown.esc="$emit('input')">
            <div
              class="
                fixed
                top-0
                left-0
                z-50
                w-full
                h-full
                overflow-hidden
                client-popup
                bg-opacitybg-15
              "
              v-show="videoItem.id == tabId"
              :class="videoItem.id == tabId ? 'show' : ''"
            >
              <div
                class="absolute w-full h-full"
                v-if="videoItem.id == tabId"
                @click="hidemodal"
              ></div>
              <div class="popup-container">
                <div class="relative w-full">
                  <div
                    class="
                      w-full
                      embed-responsive embed-responsive-16by9
                      bg-themelight-10
                    "
                    v-if="videoItem.VideoURL"
                  >
                    <iframe
                      v-if="videoItem.id == tabId"
                      class="w-full embed-responsive-item"
                      loading="lazy"
                      width="748"
                      height="449"
                      :src="videoItem.VideoURL"
                      title="YouTube video player"
                      frameborder="0"
                      rel="nofollow"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div
                    class="
                      absolute
                      top-0
                      right-4
                      left-auto
                      transform
                      translate-x-1/2
                      -translate-y-1/2
                      popup-close-trigger
                    "
                  >
                    <button @click="modalClose()" class="close-popup"></button>
                  </div>
                </div>
              </div>
            </div>
              </transition>
         </template>
      </div>
    </div>
  </div>
</template>
  <script type="text/javascript">
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    data: Object
  },
   setup() {
    const onSwiper = swiper => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    SwiperCore.use([Navigation]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation]
    };
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          1600: {
            slidesPerView: 1
          },
          1371: {
            slidesPerView: 1
          },

          1200: {
            slidesPerView: 1
          },

          768: {
            slidesPerView: 1
          },

          640: {
            slidesPerView: 1
          },

          460: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1
          }
        }
      },
      arrowImage: "https://d2ms8rpfqc4h24.cloudfront.net/arrow_d169cb2460.svg",
      tabId: null,
      videoItem: null,
    };
  },
  methods: {
    contentvisiblity(index, item) {
      this.tabId = index;
      this.videoItem = item;
    },
    modalClose() {
      this.tabId = null;
    },
    hidemodal() {
      this.tabId = null;
    },
    load: function() {
      this.iframe.loaded = true;
    }
  },
  mounted() {
    // Close modal with 'esc' key
    document.addEventListener("keydown", e => {
      if (e.key == "Escape") {
        this.tabId = null;
      }
    });
  }
};
</script>
  <style lang="scss">
@layer utilities {
  .insight-banner-slider {
    .container {
      @screen sm {
        max-width: 33.75rem;
      }
      @screen md {
        max-width: 45rem;
      }
      @screen smd {
        max-width: 60rem;
      }
      @screen sxl {
        max-width: 100%;
        width: 76.875rem;
      }
    }
    .post-tag-container {
      @apply uppercase text-themedark-0 bg-customcolor-70 rounded mt-0 font-medium;
      font-size: 0.75rem;
      padding: 0.125rem 0.625rem;
      margin-right: 0.313rem;
      line-height: normal;
      margin-bottom: 0.625rem;

      @screen sm {
        font-size: 0.875rem;
        padding: 0.125rem 0.875rem;
      }
    }
    .post-title {
      @apply w-full font-medium;
      font-size: 1.25rem;
      line-height: 2rem;
      &:hover,
      &:active {
        @apply text-primary;
        transition: 0.3s ease all;
      }
      @screen xxsm {
        font-size: 1.375rem;
      }

      @screen xl {
        font-size: 1.75rem;
        line-height: 2.625rem;
      }
    }
    .popup-container {
      .close-popup {
        width: 2rem;
        height: 2rem;
        &::before,
        &::after {
          content: "";
          @apply absolute bg-themelight-0 inline-block;
          height: 0.125rem;
          width: 100%;
          top: 50%;
          left: 0;
          margin-top: -0.0625rem;
        }
        &::before {
          @apply transform rotate-45;
        }
        &::after {
          @apply transform -rotate-45;
        }
      }
    }
    .client-popup {
      .popup-container {
        overflow: inherit;
      }
    }

    .post-category-container {
      @apply w-full mb-2;
      a {
        @apply text-primary font-semibold;
        &:hover,
        &:active {
          @apply text-themedark-0;
          transition: 0.3s ease all;
        }
      }
    }
    .btn.btn_sm {
      border-radius: 1.5rem;
    }
    .overlay-tube {
      &::before {
        content: "";
        @apply absolute w-full h-full block bg-no-repeat bg-center z-10 bg-opacitybg-35 top-0 left-0;
        background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/download_1_4bb27a6e6e.png");
      }
    }
    .featured-post-author-thumb {
      @apply border-2 border-solid border-primary rounded-full;
    }
    .featured-post-author-title {
      @apply font-semibold;
      &:hover,
      &:active {
        @apply text-primary;
        transition: 0.3s ease all;
      }
    }
    .featured-post-author-desc {
      @apply text-sm leading-6 font-poppins p-0;
      letter-spacing: 0.0175rem;
    }
    .slick-track {
      @apply flex smd:block;
      .slick-slide {
        height: auto;
        > div {
          height: 100%;
          > div {
            height: 100%;
          }
        }
      }
    }
    .slid-arrow {
      @apply sxl:w-12 sxl:h-12 smd:h-10 smd:w-10 w-8 h-8 top-auto bg-themelight-0 z-10;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
      bottom: -1.875rem;
      @screen smd {
        box-shadow: none;
      }
      @screen smd {
        bottom: -1.0625rem;
      }
      &.slick-prev {
        @apply left-auto -translate-x-1/2;
        right: 2.5rem;
        @screen smd {
          right: 45.8%;
        }
      }
      &.slick-next {
        @apply -translate-x-1/2;
        right: 0;
        @screen smd {
          left: 54.3%;
        }
      }
      &::before {
        display: none;
      }
    }
  }
}
</style>