<template>
  <div class="hiresoftdevtabbing rxsection-y-space">
    <h2 class="text-center">{{ data.Title }}</h2>
    <div class="container">
      <div class="hidden md:block">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mt-5 smd:max-w-sm">
            <ul
              class="
                flex
                mb-0
                list-none
                smd:flex-wrap smd:flex-col
                smd:border-r-4 smd:border-b-0
                border-b-4 border-solid border-customcolor-60;
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
                <div class="p-5 h-full">
                  <span class="font-semibold text-customcolor-95">{{
                    item.SubTitle
                  }}</span>
                  <h5 class="para_lg font-semibold">
                    {{ item.Title }}
                  </h5>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="
              w-full
              smd:w-auto
              smd:flex-grow
              tab-content-main
              smd:mt-0
              mt-5
            "
          >
            <div
              v-for="item in data.TitleContentMediaList"
              v-bind:id="item.id"
              :key="item.id"
              v-show="item.id == tabId"
              class="p-4"
            >
              <div
                class="para_sm sxl:pl-10 smd:pl-5"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="item in data.TitleContentMediaList"
        class="acc-main md:hidden block"
      >
        <div
          class="p-4 tab-main border-b border-solid flex items-center"
          :class="[
            item.id == faqId ? 'border-transparent' : 'border-customcolor-95',
          ]"
        >
          <div
            class="pb-0 flex items-center w-full"
            @click="faqvisiblity(item.id)"
          >
            <span
              class="font-semibold mr-2 inline-block"
              :class="[
                item.id == faqId ? 'text-primary' : 'text-text-customcolor-95',
              ]"
              >{{ item.SubTitle }}</span
            >
            <h5 class="para_lg font-semibold">
              {{ item.Title }}
            </h5>
          </div>
          <svg
            v-if="item.id == faqId"
            class="
              inline-block
              faqIcon
              align-middle
              items-end
              transition-all
              duration-300
              ease-in-out
            "
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            width="1.25rem"
            height="1.25rem"
          >
            <path
              id="Layer_1"  class="fill-current"
              d="M5 2.37C5.18 2.37 5.36 2.44 5.49 2.58L9.75 6.92C10.03 7.19 10.02 7.64 9.75 7.91C9.47 8.18 9.03 8.17 8.76 7.9L4.99 4.06L1.15 7.83C0.87 8.1 0.43 8.1 0.16 7.82C-0.11 7.55 -0.11 7.1 0.16 6.83L4.5 2.57C4.64 2.44 4.82 2.37 5 2.37Z"
            />
          </svg>
          <svg
            v-else
            class="
              inline-block
              faqIcon
              align-middle
              items-end
              transition-all
              duration-300
              ease-in-out
            "
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
          v-bind:id="item.id"
          v-show="item.id == faqId"
          class="
            active-acc
            bg-themelight-0
            dark:bg-themedark-0
            pt-0
            p-8
            border-t border-solid border-primary
          "
          v-rxhtml="item.LongText ? item.LongText : ''"
        ></div>
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
      tabId: 2832,
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
<style lang="scss" scoped>
@layer utilities {
  .hiresoftdevtabbing {
    background-color: #f4fcff;
    @apply dark:bg-themedark-10;
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
        @apply w-1/3 smd:w-full;
        &.active {
          > div {
            span {
              @apply text-primary;
            }
            @apply bg-themelight-0 dark:bg-themedark-0;
            &::before {
              content: "";
              height: 0.3125rem;
              @apply absolute smd:top-0 left-0 smd:left-auto smd:h-full w-full bg-primary smd:w-1;
              right: -0.25rem;
              bottom: -0.25rem;
            }
            &::after {
              content: "";
              top: 103%;
              @apply absolute w-0 h-0 mx-auto smd:left-100 smd:right-auto right-0 left-0 smd:top-50 transform smd:-translate-y-1/2 z-10;
              border-left: 0.625rem solid transparent;
              border-right: 0.625rem solid transparent;
              border-top: 0.625rem solid #31bbae;
              @screen smd {
                border-top: 0.625rem solid transparent;
                border-left: 0.625rem solid #31bbae;
                border-bottom: 0.625rem solid transparent;
              }
            }
          }
        }
      }
    }
    .tab-content-main {
      @screen smd {
        flex-basis: 0;
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
