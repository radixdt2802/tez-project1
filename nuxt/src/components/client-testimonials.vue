  <template>
  <div>
    <div class="rxsection-y-space" id="scroll">
      <sectionHeading :data="data" />
    </div>
    <div class="rx-section-b-space">
      <template v-for="item in data.TitleContentMediaList"
        :key="item.id">
      <div
        class="flex flex-wrap client-row relative"
        v-if="item.id == 1216"
      >
        <div class="sm:w-1/2 w-full client-image relative">
          <div
            class="
              clien-bg-image
              absolute
              w-full
              h-full
              block
              bg-cover
              z-10
              bg-center bg-no-repeat
            "
            v-bind:style="[
              item.Image
                ? { backgroundImage: 'url(' + item.Image.url + ')' }
                : '',
            ]"
          ></div>
          <img
            v-rxlazy="item.Image"
            :width="item.Image.width"
            :height="item.Image.height"
            alt="client"
          />
        </div>
        <div
          class="
            sm:w-1/2
            w-full
            text-center
            pb-16
            sm:py-16
            pt-4
            px-8
            client-description
            relative
            bg-themelight-10
            dark:bg-themedark-10
          "
        >
          <div class="max-w-3xl mx-auto relative">
            <h3>{{ item.Title }}</h3>
            <p>{{ item.ShortText }}</p>
            <hr class="w-20 h-1 bg-primary mt-2 mx-auto mb-0" />
            <p class="pt-4 font-semibold">{{ item.SubTitle }}</p>
            <div class="client-popup-trigger">
              <div
                class="btn_client"
                id="show-popup"
                @click="contentvisiblity(item.id)"
              >
                <p class="text-primary underline hover:no-underline cursor-pointer">Read more</p>
              </div>
            </div>
          </div>
          <transition name="modal" @keydown.esc="$emit('input')">
            <div
              class="
                client-popup
                fixed
                z-50
                overflow-x-hidden overflow-y-auto
                bg-opacitybg-15
                w-full
                h-full
                top-0
                left-0
              "
              v-show="item.id == tabId"
              :class="item.id == tabId ? 'show' : ''"
            >
              <div
                class="absolute w-full h-full"
                  v-if="item.id == tabId"
                @click="hidemodal"
              ></div>
              <div class="popup-container">
                <div class="popup-content relative">
                  <div>
                    <img
                      v-rxlazy="
                        'https://d2ms8rpfqc4h24.cloudfront.net/quote_9bc56f8921.svg'
                      "
                      width="38"
                      height="28"
                      alt=""
                    />
                  </div>
                  <div
                    class="pt-8 xxsm:p-2"
                    v-if="item.LongText"
                    v-rxhtml="item.LongText"
                  ></div>
                  <h3>{{ item.Title }}</h3>
                  <hr class="w-20 h-1 bg-primary mt-2 mx-auto mb-0" />
                  <p class="pt-4 font-semibold text-base">
                    {{ item.SubTitle }}
                  </p>
                  <div
                    class="popup-close-trigger absolute top-4 right-4 left-auto"
                  >
                    <button @click="modalClose()">
                      <img
                        v-rxlazy="
                          'https://d2ms8rpfqc4h24.cloudfront.net/cancel_193ce1a7f5.png'
                        "
                        width="32"
                        height="32"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      </template>
      <div class="flex flex-wrap client-row-twocol overflow-hidden">
      <template v-for="item in data.TitleContentMediaList"
        :key="item.id">
        <div
          class="sm:w-1/2 w-full relative"
         v-if="item.id !== 1216"
        >
          <div class="flex flex-wrap h-full">
            <div class="sxl:w-1/2 w-full client-image relative">
              <div
                class="
                  clien-bg-image
                  absolute
                  w-full
                  h-full
                  bg-cover
                  z-10
                  bg-center bg-no-repeat
                "
                v-bind:style="[
                  item.Image
                    ? { backgroundImage: 'url(' + item.Image.url + ')' }
                    : '',
                ]"
              ></div>
              <img
                v-rxlazy="item.Image"
                :width="item.Image.width"
                :height="item.Image.height"
                alt="client"
                class="sxl:hidden"
              />
            </div>
            <div
              class="
                sxl:w-1/2
                w-full
                text-center
                sm:py-16
                pb-16
                pt-4
                client-description
                relative
              "
            >
              <div class="content-maxwidth px-4 smd:px-0 mx-auto relative">
                <h3>{{ item.Title }}</h3>
                <p>{{ item.ShortText }}...</p>
                <hr class="w-20 h-1 bg-primary mt-2 mx-auto mb-0" />
                <p class="pt-4 font-semibold text-base">{{ item.SubTitle }}</p>
                <div class="client-popup-trigger">
                    <!-- class="btn_client" -->
                  <div
                  class="btn_client"
                   id="show-popup"
                    @click="contentvisiblity(item.id)"
                  >
                    <!-- <img
                      v-rxlazy="
                        'https://d2ms8rpfqc4h24.cloudfront.net/plus_bf08552638.png'
                      "
                      width="32"
                      height="32"
                      alt="popup"
                    /> -->
                    <p class="text-primary underline hover:no-underline cursor-pointer">Read more</p>
                  </div>
                </div>
              </div>
              <transition name="modal" @keydown.esc="$emit('input')">
                <div
                  class="
                    client-popup
                    fixed
                    z-50
                    overflow-x-hidden overflow-y-auto
                    bg-opacitybg-95
                    w-full
                    h-full
                    top-0
                    left-0
                  "
                v-show="item.id == tabId"
                  :class="item.id == tabId ? 'show' : ''"
                >
                  <div
                    class="absolute w-full h-full"
                  v-if="item.id == tabId"
                    @click="hidemodal"
                  ></div>
                  <div class="popup-container">
                    <div class="popup-content relative">
                      <div>
                        <img
                          v-rxlazy="
                            'https://d2ms8rpfqc4h24.cloudfront.net/quote_9bc56f8921.svg'
                          "
                          width="28"
                          height="28"
                          alt=""
                          class="ml-2"
                        />
                      </div>
                      <div
                        class="popup-content-client px-4"
                        v-if="item.LongText"
                        v-rxhtml="item.LongText"
                      ></div>
                      <h3>{{ item.Title }}</h3>
                      <hr class="w-20 h-1 bg-primary mt-2 mx-auto mb-0" />
                      <p class="pt-4 font-semibold">{{ item.SubTitle }}</p>
                      <div
                        class="
                          popup-close-trigger
                          absolute
                          top-4
                          right-4
                          left-auto
                        "
                      >
                        <button @click="modalClose()">
                          <img
                            v-rxlazy="
                              'https://d2ms8rpfqc4h24.cloudfront.net/cancel_193ce1a7f5.png'
                            "
                            width="32"
                            height="32"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </template>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
const sectionHeading = defineAsyncComponent(() => import("./section-heading75.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  components: {
    sectionHeading,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      tabId: null,
    };
  },
  methods: {
    contentvisiblity(index) {
      // console.log("HE::0",index)
      this.tabId = index;
    },
    modalClose() {
      this.tabId = null;
    },
    hidemodal() {
      this.tabId = null;
    },
  },
  mounted() {
    // Close modal with 'esc' key
    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        this.tabId = null;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@layer utilities {
  .client-popup {
    .popup-container {
      @apply transition-all ease-in-out duration-300 transform -translate-y-1/2 mx-4 sm:mx-auto sm:max-w-lg smd:max-w-3xl flex items-center overflow-auto px-4;
      margin: 1.75rem auto;
      min-height: calc(100% - 3.5rem);
      .popup-content {
        @apply smd:px-8 smd:pb-8 smd:pt-12 border-8 border-themelight-10 dark:border-themedark-65 text-center bg-themelight-0 dark:bg-themedark-10;
        background-clip: border-box;
        .popup-content-client {
          max-height: 15.625rem;
          overflow: auto;
          @screen md {
            max-height: inherit;
          }
        }
      }
    }
    &.show {
      .popup-container {
        @apply transform translate-y-0;
      }
    }
    &.modal {
      z-index: 100;
      display: none;
      position: fixed;
      &.visible {
        display: block;
      }
    }
  }
  .client-row-twocol {
    > div {
      &:nth-child(4n + 3),
      &:nth-child(4n + 4) {
        .clien-bg-image {
          right: 0;
          left: auto;
        }
        .client-image {
          @apply bg-themelight-10 dark:bg-themedark-10;
        }
        .client-description {
          @apply bg-themelight-10 dark:bg-themedark-10;
          @screen sxl {
            order: -1;
          }
        }
      }
    }
    .content-maxwidth {
      max-width: 21.375rem;
    }
  }
}
</style>