<template>
  <div class="rxsection-y-space leftacc bg-themelight-10 dark:bg-themedark-70">
    <div class="container">
      <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div class="row mt-10">
        <div class="md:w-2/5 w-full px-4 md:mb-0 mb-8">
          <img
            class="md:mx-0 mx-auto"
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.height"
          />
        </div>
        <div class="md:w-3/5 w-full px-4 accordian">
          <div v-for="item in data.TitleContentList" class="cursor-pointer">
            <div
              class="
                border-t border-themelight-50
                dark:border-themedark-65
                sxl:py-5
                sxl:px-8
                px-4
                py-4
                tab-main
              "
            >
              <div
                class="pb-0 flex text-left"
                @click="contentvisiblity(item.id)"
              >
                <h5
                  class="
                    h3_sm
                    leading-relaxed
                    pb-0
                    faqtoggle
                    w-full
                    transition-all
                    duration-300
                    ease-in-out
                  "
                >
                  {{ item.Title }}
                </h5>
                <svg
                  v-if="item.id == faqId"
                  class="
                    inline-block
                    faqIcon
                    align-middle
                    items-end
                    mt-2
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
                    id="Layer_1" class="fill-current"
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
                    mt-2
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
            </div>
            <div
              v-bind:id="item.id"
              v-show="item.id == faqId"
              class="
                border border-transparent
                bg-themelight-10
                dark:bg-themedark-10 
                border-t-0
                pt-0
                p-8
              "
              :class="[
                item.VueReferenceCode == 'ListTwoCol'
                  ? 'listTwoCol square_list noBs'
                  : 'square_list noBs',
              ]"
              v-rxhtml="item.LongText ? item.LongText : ''"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data() {
    return {
      show: true,
      faqId: null,
      titleStyle : "h2 text-center"
    };
  },

  methods: {
    contentvisiblity(id) {
      if (this.faqId == id) {
        this.faqId = null;
      } else {
        this.faqId = id;
      }
    },
  },
};
</script>

 <style lang="scss">
@layer utilities {
  .leftacc {
    .accordian {
      > div {
        &:last-child {
          @apply border-b border-solid border-themelight-50 dark:border-themedark-65;
        }
      }
      .tab-main {
        &:hover {
          h5 {
            color: #31bbae;
          }
          svg {
            @apply text-primary;
          }
        }
      }
    }
    .cursor-pointer{
      
    }
  }
}
</style>