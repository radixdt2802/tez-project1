<template>
  <div
    class="technology-tabs font-medium rxsection-y-space"
    :class="[
      data.VueReferenceCode == 'TWithTCML_TabWithContent_Bdc'
        ? 'rxsection-y-space'
        : '',
      data.VueReferenceCode == 'TWithTCML_TabWithContent_Mean'
        ? 'dark:bg-themedark-0 pt-0'
        : '',
    ]"
  >
    <div class="container m-auto">
      <sectionHeading :data="data" />
      <div class="flex flex-wrap">
        <div class="w-full relative">
          <ul class="techDomain flex mb-0 list-none overflow-x-auto overflow-y-hidden pt-3 flex-row border-b border-themelight-50 dark:border-themedark-10 cursor-pointer active:text-primary active:border-b active:border-primary" v-if="data.TitleContentMediaList">
            <li
              class="flex-auto text-center"
              v-for="(item, index) in data.TitleContentMediaList"
              :key="index"
            >
              <div
                class="techname block leading-normal whitespace-no-wrap no-underline pt-3 cursor-pointer py-5 px-6 active:text-primary relative"
                @click="contentvisiblity(index)"
                :class="index == tabId ? 'active' : ''"
                ><img
                  v-if="item.Image"
                  v-rxlazy="item.Image"
                  :width="item.Image.width"
                  :height="item.Image.height"
                  class="mx-auto mb-3 light-image"
                />
                <img
                  v-if="item.HoverImage"
                  v-rxlazy="item.HoverImage"
                  :width="item.HoverImage.width"
                  :height="item.HoverImage.height"
                  class="mx-auto mb-3 dark-image"
                />
                {{ item.Title }}
              </div>
            </li>
          </ul>

          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              w-full
              mb-6
              lg:pt-12
              md:pt-10
              pt-8
              flex-auto
            "
          >
            <div
              class="tab-content tab-space"
              v-if="data.TitleContentMediaList"
              v-for="(item, index) in data.TitleContentMediaList"
              :key="index"
            >
              <div v-bind:id="item.id" :key="item.id" v-show="index == tabId">
                <div class="row justify-center">
                  <div class="px-4 sxl:w-4/5 w-full text-center">
                    <div class="h3_sm">{{ item.Title }}</div>
                    <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
                    <div
                      class="w-auto flex justify-center items-center mt-5"
                      v-if="item.CTA"
                    >
                      <div
                        v-html="$md.render(item.CTA ? item.CTA : '')"
                        class="ctaPrimary inline w-auto"
                      ></div>
                      <img
                        class="primary-arrowBtn inline"
                        v-rxlazy="
                          'https://d2ms8rpfqc4h24.cloudfront.net/arrow_15249f33ec.svg'
                        "
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
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  name: "tech-tabs",
  data() {
    return {
      tabId: 0,
    };
  },
  methods: {
    contentvisiblity(index) {
      this.tabId = index;
    },
  },
};
</script>
<style lang="scss">
@layer components {
  .technology-tabs {
    .dark-image {
      @apply hidden;
    }
    .light-image {
      @apply flex;
      min-width:4.6875rem;
    }
    .techDomain {
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

    .techname {
      @screen sxl {
        padding: 1.875rem 0.625rem;
        margin: 0 0.4375rem;
      }
      @screen xl {
        margin: 0 1rem;
      }
      &.active {
        /* @apply text-primary; */
        &:after {
          content: "";
          @apply border-b-2 border-themelight-50 dark:border-themedark-10 absolute right-0 bottom-0 left-0;
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

    
    .ctaPrimary {
      p {
        display: inline;
      }
      a {
        @apply text-primary mr-4 transition-all ease-in-out duration-300 inline;
        &:hover {
          @apply mr-3;
        }
      }
    }
    .listanchor.para_md {
      p {
        @apply font-normal pb-2;
      }
    }
    .tab-content {
      p {
        @apply font-normal
      }
    }
  }
  .dark {
    .techDomain {
      .dark-image {
        @apply flex;
        min-width:4.6875rem;
      }
      .light-image {
        @apply hidden;
      }
      &::after {
        @apply absolute right-0 top-0 h-full;
        content: "";
        width: 3.125rem;
        background: -o-linear-gradient(
          left,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.98) 98%,
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
          rgba(0, 0, 0, 0.98) 98%,
          rgba(0, 0, 0, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff',endColorstr='#ffffff',GradientType=1);
      }
    }
  }
}
</style>