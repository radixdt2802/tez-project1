<template>
  <div class="rxsection-t-space industries-solution">
    <h2 class="text-center">{{ data.Title }}</h2>
    <div class="container">
      <div class="lg:block hidden t-space-60">
        <div class="varied-verticle-wrap flex">
          <div class="varied-verticle-tab">
            <div class="varied-verticle-tab-list dark:bg-themedark-70">
              <ul>
                <li
                  class="varied-verticle-link"
                  v-for="(item,index) in data.TitleContentMediaList"
                  :key="item.id"
                >
                  <span class="icon">
                    <img
                      v-rxlazy="item.Icon"
                      :alt="item.alternativeText"
                      :width="item.Icon.width"
                      :height="item.Icon.height"
                      class="varied-verticle-tab-img"
                    />
                  </span>
                  <div
                    class="text-white h3"
                    @click="contentvisiblity(index)"
                    :title="item.Title"
                    :class="index == tabId ? 'active' : ''"
                  >{{ item.Title }}</div>
                </li>
              </ul>
              <div class="explore-btn w-full para_md">
                <div class="flex w-full justify-end font-semibold" v-html="$md.render(data.CTA ? data.CTA : '')"></div>
                <img
                  class="primary-arrowBtn"
                  v-rxlazy="arrowImage"
                  width="18"
                  height="10"
                  alt="Arrow"
                />
              </div>
            </div>
          </div>
          <div class="varied-verticle-tab-content">
            <div
              @click="anchor(item.CTA)"
              class="no-underline"
              v-for="(item,index) in data.TitleContentMediaList"
              :key="index"
            >
              <div class="tab" :id="index" v-show="index == tabId">
                <div class="varied-verticle-tab-content-img">
                  <img
                    v-rxlazy="item.Image"
                    :width="item.Image.width"
                    :height="item.Image.height"
                    :alt="item.alternativeText"
                  />
                </div>
                <h3
                  class="content-title pb-0 dark:text-themedark-0"
                >{{ item.SubTitle }} {{ item.ShortText }}</h3>
                <div class="content_summary" v-if="item.LongText" v-rxhtml="item.LongText"></div>
                <div
                  class="flex justify-center btn btn_trans_sm"
                  v-html="$md.render(item.CTA ? item.CTA : '')"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-5 ld:pb-0 relative bullet-slider varied-verticle-slider-section t-space-60">
        <swiper
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :pagination="{
          clickable: true,
        }"
          :space-between="20"
          :breakpoints="swiperOptions.breakpoints"
        >
          <swiper-slide
            class="card_main h-auto"
            v-for="item in data.TitleContentMediaList"
            :key="item.id"
          >
            <div class="varied-verticle-slider-slide h-full" @click="anchor(item.CTA)">
              <div class="varied-verticle-tab-content-img">
                <img
                  v-rxlazy="item.Image"
                  :width="item.Image.width"
                  :height="item.Image.height"
                  :alt="item.alternativeText"
                />
              </div>
              <h3 class="content-title pb-0">{{ item.SubTitle }} {{ item.ShortText }}</h3>
              <div class="content_summary" v-if="item.LongText" v-rxhtml="item.LongText"></div>
              <div
                class="flex justify-center btn btn_trans_sm"
                v-html="$md.render(item.CTA ? item.CTA : '')"
              ></div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import staticImg from '../mixins/staticimg.mixin';
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";
export default {
  mixins: [staticImg],
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
    SwiperCore.use([Pagination]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination]
    };
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1.2,
          }
        }
      },
      tabId: 0
    };
  },
  methods: {
    contentvisiblity(id) {
      this.tabId = id;
    },
    anchor(value) {
      return this.$tezRouter.push(value);
    }
  }
};
</script>

 <style lang="scss">
@layer utilities {
  .industries-solution {
    h2 {
      @apply pb-0;
    }
    .btn.btn_trans_sm p a {
      padding: 0.3rem 1.125rem;
    }
    .swiper-slide{
      @apply h-auto;
    }
    .explore-btn {
      @apply flex mt-10 items-center ml-auto;
      a {
        @apply text-primary hover:text-primary no-underline;
      }
      img {
        @apply inline-block ml-5;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        img {
          margin-left: 0.625rem;
        }
      }
    }
    .varied-verticle-tab {
      background-color: #0f1628;
      flex-basis: 62%;

      .varied-verticle-tab-list {
        ul {
          @apply flex flex-wrap;
          li {
            @apply w-1/2;
          }
        }
        @apply p-4;
        li:not(:nth-child(7), :nth-child(8)) {
          @apply mb-6;
        }
        @screen lg {
          padding: 3.125rem 2.8125rem;
        }
        .varied-verticle-link {
          text-decoration: none;
          @apply cursor-pointer;
          @screen sxl {
            @apply flex flex-row items-center;
            padding: 0.5rem 1rem;
          }
          &:hover {
            .varied-verticle-tab-img {
              transform: scale(1.2);
            }
          }
          .h3 {
            @apply relative py-1 text-lg inline-block;
            &::after {
              content: "";
              transition: 0.4s;
              height: 0.125rem;
              @apply absolute bottom-0 left-0 w-0 bg-primary;
              @screen sxl {
                @apply h-1;
              }
            }
            &.active {
              &::after {
                @apply w-full;
              }
            }
            @screen xxl {
              @apply text-xl;
            }
            @screen xl {
              @apply py-4 block;
            }
          }
          &:hover {
            .h3 {
              &:after {
                @apply w-full;
              }
            }
          }
          .icon {
            @apply mr-4;
            @screen xxl {
              @apply mr-6;
            }
          }
        }
      }

      .varied-verticle-tab-img {
        height: 1.875rem;
        width: 1.875rem;
        @apply transition duration-500 ease-in-out;
        @screen xl {
          height: 3rem;
          width: 3rem;
        }
      }
    }

    .varied-verticle-tab-content {
      flex-basis: 38%;
      background: rgba(182, 217, 213, 0.3);
      @apply px-6 py-8 flex items-center dark:bg-customcolor-100;
      @screen sxl {
        @apply px-10 py-8;
      }
      @screen xl {
        @apply px-20 py-5;
      }
      .varied-verticle-tab-content-img {
        img {
          @apply mx-auto mb-5;
        }
      }

      .content_summary {
        p {
          @apply mx-auto dark:text-themedark-0;
        }
      }
      .content_summary,
      .content-title {
        @apply text-center;
        font-size: 1.625rem;
      }
    }
    .varied-verticle-slider-section {
      .swiper-slide {
        @apply flex items-stretch;
      }
      &.swiper-initialized {
        .swiper-slide {
          @apply flex h-auto;
          @screen lg {
            @apply max-w-full;
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
      .varied-verticle-btn {
        text-decoration: none;
        border-color: #31bbae;
        color: #31bbae;
        @apply mt-2 px-5 py-1 rounded-lg text-xl lg:hidden transition duration-500;
        &:hover {
          @apply bg-primary text-themelight-0;
        }
      }

      .card_main {
        margin-right: 0;
        @screen xsm {
          margin-right: 0.9375rem;
        }
        @screen md {
          margin-right: 1.875rem;
        }
        @apply smd:mr-10;
      }
      .varied-verticle-slider-slide {
        background: rgba(182, 217, 213, 0.3);
        @apply px-4 py-8 block dark:bg-themedark-65;
        /* max-width:15.9375rem; */
        .varied-verticle-tab-content-img {
          img {
            @apply mx-auto mb-4;
          }
        }
        .content_summary,
        .content-title {
          @apply text-center;
        }
        .content-title {
          @apply text-lg;
          @screen md {
            @apply text-xl;
          }
          @screen smd {
            @apply text-2xl;
          }
        }
        .content_summary {
          /* p {
            @apply mx-auto;
            @screen sm {
              max-width: 23.75rem;
            }
            @screen md {
              max-width: 33.125rem;
            }
            @screen smd {
              max-width: 39.375rem;
            }
            @apply text-base py-6;
            @screen smd {
              @apply text-lg;
            }
          } */
        }
      }
      @screen lg {
        @apply hidden;
      }
    }
  }
}
</style>
