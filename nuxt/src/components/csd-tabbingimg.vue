<template>
  <div class="csd-tabbingimg bg-themelight-10 rxsection-y-space">
    <h2 class="text-center">{{ data.Title }}</h2>
    <div class="flex flex-wrap">
      <div class="w-full px-4 sxl:w-auto mt-5">
        <ul
          class="
            flex
            mb-0
            list-none
            sxl:flex-wrap sxl:flex-col
            border-r border-solid border-customcolor-60;
            tab-main
          "
        >
          <li
            class="relative"
            v-for="item in data.TitleContentMediaList"
            :key="item.id"
            @click="contentvisiblity(item.id)"
            :class="item.id == tabId ? 'active' : ''"
          >
            <div class="relative flex items-center h-full">
              <img
                class="mx-auto"
                v-if="item.Image"
                v-rxlazy="item.Image"
                :width="item.Image.width"
                :height="item.Image.height"
              />
            </div>
          </li>
        </ul>
      </div>
      <div
        class="w-full sxl:w-auto sxl:flex-grow tab-content-main sxl:mt-0 mt-5"
      >
        <div
          v-for="item in data.TitleContentMediaList"
          v-bind:id="item.id"
          :key="item.id"
          v-show="item.id == tabId"
          class="p-4"
        >
          <div class="smd:w-8/12 smd:ml-auto px-4 smd:text-left text-center">
            <h3 class="pb-6">{{ item.Title }}</h3>
          </div>
          <div class="row items-center">
            <div class="smd:w-4/12 w-full px-4">
              <div class="p-5">
                <img
                  class="mx-auto"
                  v-if="item.HoverImage"
                  v-rxlazy="item.HoverImage"
                  :width="item.HoverImage.width"
                  :height="item.HoverImage.height"
                />
              </div>
            </div>
            <div class="smd:w-8/12 w-full px-4">
              <div class="tabContent bg-themelight-0">
                <div
                  class=""
                  v-if="item.LongText"
                  v-rxhtml="item.LongText"
                ></div>
                <div class="flex flex-wrap items-center tech-imglist">
                  <div v-for="key in item.ImageCollection">
                    <img
                      class="mx-auto"
                      v-rxlazy="key"
                      :width="key.width"
                      :height="key.height"
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
</template>
<script>
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
  data() {
    return {
      show: true,
      tabId: 563,
    };
  },

  methods: {
    contentvisiblity(id) {
      this.tabId = id;
    },
  },
};
</script>
<style lang="scss" scoped>
@layer utilities {
  .csd-tabbingimg {
    .tab-main {
      li {
        @apply w-1/4 sxl:w-full;
        > div {
          padding: 1.5625rem 0.625rem;
          @screen sxl {
            padding: 0;
          }
          @screen sxl {
            min-height: 6.875rem;
            min-width: 18.5rem;
          }
        }
        &.active {
          > div {
            &::before {
              content: "";
              height: 0.3125rem;
              @apply absolute right-0 sxl:top-0 left-0 sxl:left-auto bottom-0 sxl:h-full w-full bg-primary;
              @screen sxl {
                width: 0.3125rem;
              }
            }
            &::after {
              content: "";
              @apply absolute w-0 h-0 mx-auto sxl:left-100 sxl:right-auto right-0 left-0 top-100 sxl:top-50 transform sxl:-translate-y-1/2 z-10;
              border-left: 0.625rem solid transparent;
              border-right: 0.625rem solid transparent;
              border-top: 0.625rem solid #31bbae;
              @screen sxl {
                border-top: 0.625rem solid transparent;
                border-left: 0.625rem solid #31bbae;
                border-bottom: 0.625rem solid transparent;
              }
            }
          }
        }
        &:not(:last-child) {
          &::before {
            @screen sxl {
              content: "";
              @apply left-0 right-0 bottom-0 absolute w-full;
              height: 0.125rem;
              background: linear-gradient(
                to left,
                rgba(0, 0, 0, 0) 14%,
                rgba(238, 238, 238, 1) 50%,
                rgba(0, 0, 0, 0) 85%
              );
            }
          }
        }
      }
    }
    .tab-content-main {
      @screen sxl {
        flex-basis: 0;
      }
    }
    .tabContent {
      padding: 1.875rem 1.875rem 1.25rem;
      @screen xl {
        padding: 2.5rem 3.25rem 1.75rem 2.8125rem;
      }
      border-radius: 0.4375rem;
      max-width: 59.5rem;
      width: 100%;
      p {
        padding: 0;
      }
      .tech-imglist {
        img {
          margin: 0.75rem 1.125rem;
        }
      }
    }
  }
}
</style>
