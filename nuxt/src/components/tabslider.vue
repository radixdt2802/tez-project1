<template>
  <div
    class="tabSlider rxsection-y-space dark:bg-themedark-0"
    :class="[data.VueReferenceCode == 'Tabbing_Slider_Tbspace' ? 'rxsection-y-space':'pt-0',]"
  >
    <div class="container m-auto">
      <sectionHeading :data="data" />
      <div class="pb-5 ld:pb-0 relative bullet-slider">
        <swiper
          @swiper="onSwiper"
          :pagination="{
          clickable: true
        }"
          @slideChange="carouselSlideChange"
        >
          <swiper-slide>
            <div class="w-full relative">
              <ul class="techDomain">
                <template v-for="(item, index) in data.TitleContentMediaList" :key="index">
                  <li class="flex-auto text-center" v-if="item.VueReferenceCode != 'Slide_2'">
                    <div
                      class="techname block leading-normal whitespace-no-wrap"
                      @click="contentvisiblity(index)"
                      :class="index == tabId ? 'active' : ''"
                    >{{ item.Title }}</div>
                  </li>
                </template>
              </ul>
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 lg:pt-12 md:pt-10 pt-8 flex-auto"
              >
                <div
                  class="tab-content tab-space"
                  v-for="(item, index) in data.TitleContentMediaList"
                  :key="index"
                >
                  <div
                    v-if="item.VueReferenceCode != 'Slide_2'"
                    v-bind:id="item.id"
                    :key="item.id"
                    v-show="index == tabId"
                  >
                    <div class="justify-center flex flex-wrap">
                      <div
                        class="technologyBlock-item light-image"
                        v-for="key in item.ImageCollection"
                        :key="key.id"
                      >
                        <div v-if="key">
                          <tez-link v-if="key.caption" :to="key.caption" :title="key.name">
                            <img
                              v-rxlazy="key"
                              :alt="key.alternativeText"
                              :title="key.alternativeText"
                              :width="key.width"
                              :height="key.height"
                            />
                            <div class="technologyBlock-name">{{ key.name }}</div>
                          </tez-link>
                          <div v-if="!key.caption">
                            <img
                              v-rxlazy="key"
                              :alt="key.alternativeText"
                              :width="key.width"
                              :height="key.height"
                            />
                            <div class="technologyBlock-name">{{ key.name }}</div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="technologyBlock-item dark-image"
                        v-for="key in item.MultipleMedia"
                        :key="key.id"
                      >
                        <div v-if="key">
                          <tez-link v-if="key.caption" :to="key.caption" :title="key.name">
                            <img
                              v-rxlazy="key"
                              :alt="key.alternativeText"
                              :title="key.alternativeText"
                              :width="key.width"
                              :height="key.height"
                            />
                            <div class="technologyBlock-name">{{ key.name }}</div>
                          </tez-link>
                          <div v-if="!key.caption">
                            <img
                              v-rxlazy="key"
                              :alt="key.alternativeText"
                              :width="key.width"
                              :height="key.height"
                            />
                            <div class="technologyBlock-name">{{ key.name }}</div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="square_list primary_list list_sm listStyle"
                        v-if="item.LongText"
                        v-rxhtml="item.LongText"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="w-full relative">
              <ul class="techDomain">
                <template v-for="(item, index) in data.TitleContentMediaList" :key="item.id">
                  <li class="flex-auto text-center" v-if="item.VueReferenceCode === 'Slide_2'">
                    <div
                      class="techname block leading-normal whitespace-no-wrap"
                      @click="contentvisiblity(index)"
                      :class="index == tabId ? 'active' : ''"
                    >{{ item.Title }}</div>
                  </li>
                </template>
              </ul>
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 lg:pt-12 md:pt-10 pt-8 flex-auto"
              >
                <div
                  class="tab-content tab-space"
                  v-for="(item, index) in data.TitleContentMediaList"
                  :key="index"
                >
                  <div
                    v-if="item.VueReferenceCode === 'Slide_2'"
                    v-bind:id="item.id"
                    :key="item.id"
                    v-show="index == tabId"
                  >
                    <div class="justify-center flex flex-wrap">
                      <div
                        class="technologyBlock-item light-image"
                        v-for="key in item.ImageCollection"
                        :key="key.id"
                      >
                        <tez-link v-if="key.caption" :to="key.caption" :title="key.name">
                          <img
                            v-rxlazy="key"
                            :alt="key.alternativeText"
                            :title="key.alternativeText"
                            :width="key.width"
                            :height="key.height"
                          />
                          <div class="technologyBlock-name">{{ key.name }}</div>
                        </tez-link>
                        <div v-if="!key.caption">
                          <img
                            v-if="key"
                            v-rxlazy="key"
                            :alt="key.alternativeText"
                            :title="key.alternativeText"
                            :width="key.width"
                            :height="key.height"
                          />
                          <div v-if="key" class="technologyBlock-name">{{ key.name }}</div>
                        </div>
                      </div>
                      <div
                        class="technologyBlock-item dark-image"
                        v-for="key in item.MultipleMedia"
                        :key="key.id"
                      >
                        <tez-link v-if="key.caption" :to="key.caption" :title="key.name">
                          <img
                            v-rxlazy="key"
                            :alt="key.alternativeText"
                            :title="key.alternativeText"
                            :width="key.width"
                            :height="key.height"
                          />
                          <div class="technologyBlock-name">{{ key.name }}</div>
                        </tez-link>
                        <div v-if="!key.caption">
                          <img
                            v-if="key"
                            v-rxlazy="key"
                            :alt="key.alternativeText"
                            :title="key.alternativeText"
                            :width="key.width"
                            :height="key.height"
                          />
                          <div v-if="key" class="technologyBlock-name">{{ key.name }}</div>
                        </div>
                      </div>
                      <div
                        class="square_list primary_list list_sm listStyle"
                        v-if="item.LongText"
                        v-rxhtml="item.LongText"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from "@vue/runtime-core";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";
const sectionHeading = defineAsyncComponent(() =>
  import("./section-heading100.vue")
);
import mountedMixin from "../mixins/mounted.mixin";
export default {
  components: {
    sectionHeading: sectionHeading,
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = swiper => {
    };
    const onSlideChange = index => {
    };

    SwiperCore.use([Pagination]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination]
    };
  },
  props: {
    data: Object,
  },
  name: "tech-tabs",
  data() {
    return {
      tabId: 0,
      sliderIndex: 0,
    
    };
  },
  methods: {
    contentvisiblity(index) {
      this.tabId = index;
    },
    carouselSlideChange() {
      if (this.sliderIndex == 1) {
        this.tabId = 0;
        this.sliderIndex = 0;
      } else {
         this.tabId = 5;
        this.sliderIndex = 1;
        
      }
    }
  }
};
</script>
<style lang="scss">
@layer components {
  .dark {
    .tabSlider {
      .dark-image {
        @apply block;
      }
      .light-image {
        @apply hidden;
      }
    }
  }
  .tabSlider {
    .dark-image {
      @apply hidden;
    }
    .light-image {
      @apply block;
    }
    @apply font-medium;
    a {
      @apply no-underline;
    }
    .techDomainList {
      @apply flex mb-0 list-none overflow-auto pt-3 flex-row border-b border-themelight-50 dark:border-themedark-10 cursor-pointer;
    }
    .techDomain {
      @apply flex mb-0 list-none overflow-x-auto overflow-y-hidden pt-3 flex-row border-b border-themelight-50 dark:border-themedark-65 cursor-pointer;
      .active {
        @apply text-primary border-b-2 border-primary;
      }
      li:focus,
      a:focus {
        @apply bg-transparent;
      }

      &::after {
        @apply absolute right-0 top-0 h-full;

        content: "";
        width: 3.125rem;

        background: -o-linear-gradient(
          left,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.98) 98%,
          rgba(255, 255, 255, 1) 100%
        );
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(rgba(255, 255, 255, 0)),
          color-stop(98%, rgba(255, 255, 255, 0.98)),
          to(rgba(255, 255, 255, 1))
        );
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.98) 98%,
          rgba(255, 255, 255, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff',endColorstr='#ffffff',GradientType=1);
      }
      @screen sxl {
        &::after {
          @apply hidden;
        }
      }
    }
    .slick-slide > div {
      @apply w-full;
    }

    .techname {
      @apply pt-3 no-underline cursor-pointer;
      padding-bottom: 1.875rem;
      padding: 1.25rem 1.5625rem;
      @screen smd {
        padding: 1.25rem 1.5625rem;
      }
      @screen sxl {
        padding: 1.875rem 0.625rem;
        margin: 0 0.4375rem;
      }
      @screen xl {
        padding: 1.875rem 0.625rem;
        margin: 0 1rem;
      }
      &.active {
        @apply text-primary;
        &:after {
          content: "";
          @apply border-b-2 border-themelight-50 dark:border-themedark-10;
        }
      }
      li > a {
        font-size: 1.125em;
        @apply border-b-2 border-transparent cursor-pointer;
        &.active {
          @apply border-primary;
        }
      }
    }
    .tab-content {
      .listStyle {
        ul {
          li {
            @apply inline-block;
          }
        }
      }
    }

    .technologyBlock-item {
      width: 7rem;
      @screen xxsm {
        width: 7rem;
      }
      @screen sm {
        width: 12rem;
      }
      @screen lg {
        width: 10rem;
      }
      @apply p-1 text-center my-2 mx-1 transition duration-500;
      img {
        @apply mx-auto;
        max-width: 3.4375rem;
        @screen sm {
          max-width: 5rem;
        }
        @screen lg {
          max-width: 100%;
        }
      }
      .technologyBlock-name {
        @apply py-2 font-light;
      }
    }
    .technologyBlockMain {
      ul {
        @apply flex flex-wrap items-center justify-center;

        li {
          margin-bottom: 0;
          &:not(:last-child) {
            @apply md:mr-10 sm:mr-3 mr-2;
          }
        }
      }
    }
  }
  .dark {
    .techDomain {
      &::after {
        @apply absolute right-0 top-0 h-full;
        content: "";
        width: 3.125rem;
        background: -o-linear-gradient(
          left,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.45) 98%,
          rgba(0, 0, 0, 1) 100%
        );
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(rgba(0, 0, 0, 0)),
          color-stop(98%, rgba(0, 0, 0, 0.98)),
          to(rgba(0, 0, 0, 1))
        );
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.45) 98%,
          rgba(0, 0, 0, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff',endColorstr='#ffffff',GradientType=1);
      }
    }
  }
}
</style>