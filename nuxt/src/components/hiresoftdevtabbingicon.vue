<template>
  <div class="hiresoftdevtabbingicon rxsection-y-space dark:bg-themedark-10">
    <h2 class="text-center">{{ data.Title }}</h2>
    <div class="tabbing-container">
      <div class="hidden md:block">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mt-5 sxl:max-w-sm">
            <ul
              class="flex mb-0 list-none sxl:flex-wrap sxl:flex-col sxl:border-r-4 sxl:border-b-0 border-b-4 border-solid border-customcolor-60; tab-main"
            >
              <li
                class="relative"
                v-for="(item, index) in data.TitleContentMediaList"
                :key="index"
                @click="contentvisiblity(index)"
                :class="index == tabId ? 'active' : ''"
              >
                <div class="p-5 h-full">
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
              v-for="(item, index) in data.TitleContentMediaList"
              v-bind:id="index"
              :key="index"
              v-show="index == tabId"
              class="p-4"
              :class="index == tabId ? 'activeTab' : ''"
            >
              <div class="tabContent bg-themelight-0 dark:bg-themedark-0">
                <div
                  class="para_sm project-delivered"
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
      <div
        v-for="(item, index) in data.TitleContentMediaList"
        :key="index"
        class="acc-main md:hidden block px-4"
      >
        <div
          class="p-4 tab-main border-b border-solid flex items-center"
          :class="[
            index == faqId ? 'border-transparent' : 'border-customcolor-97',
          ]"
        >
          <div
            class="pb-0 flex items-center w-full"
            @click="faqvisiblity(index)"
          >
            <img
              class="mx-auto acc-img-head"
              v-if="item.Image"
              v-rxlazy="item.Image"
              :width="item.Image.width"
              :height="item.Image.height"
            />
          </div>
          <svg
            v-if="index == faqId"
            class="inline-block faqIcon align-middle items-end transition-all duration-300 ease-in-out"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            width="1.25rem"
            height="1.25rem"
          >
            <path
              id="Layer_1"
              class="fill-current"
              d="M5 2.37C5.18 2.37 5.36 2.44 5.49 2.58L9.75 6.92C10.03 7.19 10.02 7.64 9.75 7.91C9.47 8.18 9.03 8.17 8.76 7.9L4.99 4.06L1.15 7.83C0.87 8.1 0.43 8.1 0.16 7.82C-0.11 7.55 -0.11 7.1 0.16 6.83L4.5 2.57C4.64 2.44 4.82 2.37 5 2.37Z"
            />
          </svg>
          <svg
            v-else
            class="inline-block faqIcon align-middle items-end transition-all duration-300 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="1.25rem"
            height="1.25rem"
            viewBox="6 6 10 10"
            enable-background="new 6 6 10 10"
            xml:space="preserve"
          >
            <g>
              <path
                class="fill-current"
                d="M11,13.85c-0.18,0-0.358-0.068-0.495-0.205l-4.3-4.299c-0.273-0.273-0.273-0.717,0-0.99s0.717-0.273,0.99,0   L11,12.159l3.804-3.804c0.274-0.273,0.718-0.273,0.991,0s0.273,0.717,0,0.99l-4.3,4.299C11.358,13.781,11.179,13.85,11,13.85z"
              />
            </g>
          </svg>
        </div>
        <div
          v-bind:id="index"
          v-show="index == faqId"
          class="active-acc bg-themelight-0 dark:bg-themedark-0 p-5 border-t border-solid border-primary"
        >
          <div v-rxhtml="item.LongText ? item.LongText : ''"></div>
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
      tabId: 0,
      faqId: null,
    };
  },
  methods: {
    contentvisiblity(id) {
      this.tabId = id;
    },
    faqvisiblity(id) {
      if (this.faqId == id) {
        this.faqId = null;
      } else {
        this.faqId = id;
      }
    },
  },
};
</script>
<style lang="scss" >
@layer utilities {
  .hiresoftdevtabbingicon {
    background-color: #f4fcff;
    .project-delivered {
      ul {
        max-width: 60rem;
        display: flex;
        flex-wrap: wrap;
        &:not(:first-child){
          li {
          @apply relative align-middle;
          padding: 0.3125rem 0.9375rem 0.3125rem 1.5rem;
          @screen md {
            padding: 0.3125rem 0.9375rem 0.3125rem 2.5rem;
          }
          &:before {
            @apply inline-block bg-primary rounded-full border-4 bg-clip-padding absolute left-0 md:h-5 md:w-5 h-4 w-4;
            content: "";
            margin-top: 0.3125rem;
            @screen md {
              margin-top: 0.375rem;
              border-width: 0.3125rem;
            }
            border-color: rgba(49, 187, 174, 0.2);
            margin-right: 0.9375rem;
          }
        } 
        }
        li {
          @apply w-1/3;
          p {
            @apply flex flex-wrap;
            strong {
              @apply w-full text-themedark-0 font-semibold dark:text-themelight-0;
            }
          }
        }
      }
      p {
        strong {
          @apply text-primary font-semibold;
        }
      }
    }

    .tabbing-container {
      max-width: 57.8125rem;
      @screen sxl {
        max-width: 110.25rem;
      }
      width: 100%;
      margin: 0 auto;
    }
    .tab-main {
      span {
        font-size: 1.875rem;
        line-height: 2rem;
        @screen xsm {
          font-size: 2.125rem;
          line-height: 2.125rem;
        }

        @screen sxl {
          font-size: 2.375rem;
          line-height: 2.375rem;
        }
      }
      h5 {
        font-size: 1.375rem;
        line-height: 2rem;
        @screen sm {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
        @screen sxl {
          font-size: 1.625rem;
          line-height: 2.375rem;
        }
      }
      li {
        @apply w-1/3 sxl:w-full;
        &.active {
          > div {
            &::before {
              content: "";
              height: 0.3125rem;
              bottom: -0.25rem;
              @apply absolute sxl:top-0 left-0 sxl:left-auto sxl:h-full w-full bg-primary;
              @screen sxl {
                width: 0.3125rem;
                right: -0.25rem;
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
    .tabContent {
      @screen xl {
        padding: 2.5rem 3.25rem 1.75rem 2.8125rem;
      }
      padding: 1.875rem 1.875rem 1.25rem;
      border-radius: 0.4375rem;
      width: 100%;
    }
    .tech-imglist {
      img {
        margin: 0.75rem 1.125rem;
      }
    }
    .tab-content-main {
      @screen sxl {
        flex-basis: 0;
      }
    }
    .acc-img-head {
      max-height: 3.625rem;
      width: auto;
    }
    .active-acc {
      ul {
        li {
          @apply px-4 bg-themelight-10 border-b border-solid border-themedark-65;
          p {
            display: flex;
            flex-wrap: wrap;
            strong {
              @apply text-themedark-0 w-full;
              @screen xsm {
                min-width: 11.5rem;
              }
            }
          }
        }
      }
      p {
        strong {
          @apply text-primary font-semibold;
        }
      }
    }
    .container {
      > div {
        &:last-child {
          > div:first-child {
            border-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
