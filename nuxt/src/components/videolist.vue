<template>
  <div class="rxsection-y-space cust-videolist">
    <div class="container">
      <h2 class="text-center">{{ data.Title }}</h2>
      <div
        class="text-center"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="row t-space-60">
        <div
          class="content w-full md:w-1/2 smd:w-1/4 px-4"
          v-for="item in data.TitleContentMediaList"
        >
          <div
            class="btn_client"
            id="show-popup"
            @click="contentvisiblity(item.id)"
          >
            <div
              class="client-video mt-10 smd:mt-0 relative"
              data-toggle="modal"
              data-target="#myModal"
            >
              <tez-link
                to="#firstclientvideo"
                data-toggle="modal"
                data-target="#firstclientvideo"
              >
                <img
                  class="mx-auto w-full rounded-lg"
                  v-if="item.Image"
                  v-rxlazy="item.Image"
                  :width="item.Image.width"
                  :height="item.Image.height"
                />
              </tez-link>
              <div class="video-icon-overlay">
                <div class="video-icon">
                  <img
                    class=""
                    v-if="item.Icon"
                    v-rxlazy="item.Icon"
                    :width="item.Icon.width"
                    :height="item.Icon.height"
                  />
                </div>
              </div>
            </div>
          </div>
          <transition name="modal" @keydown.esc="$emit('input')">
            <div
              class="
                landingpage-popup
                fade
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
              <div class="popup-container p-5">
                <div
                  class="popup-modal-content relative w-full p-0 bg-themedark-0"
                >
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      width="1280"
                      height="720"
                      :src="data.CTA"
                      frameborder="0"
                      rel="nofollow"
                      class="embed-responsive-item"
                    ></iframe>
                  </div>

                  <div class="popup-close-trigger absolute">
                    <button @click="modalClose()">
                      <img
                        v-rxlazy="
                          'https://d2ms8rpfqc4h24.cloudfront.net/close_icon_a6f841a0ff.png'
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
  </div>
</template>
    <script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  props: {
    data: Object,
  },
  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
  data() {
    return {
      tabId: null,
    };
  },
  methods: {
    contentvisiblity(index) {
      this.tabId = index;
    },
    modalClose() {
      this.tabId = null;
    },
    hidemodal() {
      this.tabId = null;
    },
  },
};
</script>
    <style lang="scss">
@layer utilities {
  .cust-videolist {
    .client-video {
      &:before {
        content: "";
        width: 100%;
        height: 100%;
        display: inline-block;
        position: absolute;
        z-index: 9;
        background: rgba(45, 45, 45, 0.5);
        pointer-events: none;
        border-radius: 0.5rem;
      }
      &:after {
        content: "";
        width: 100%;
        height: 100%;
        border-bottom: 0.9375rem solid #31bbae;
        border-radius: 0.5rem;
        position: absolute;
        z-index: -1;
        bottom: -0.625rem;
        left: 0;
      }
      .video-icon-overlay {
        position: absolute;
        z-index: 9;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }
    }
    .landingpage-popup {
      .popup-container {
        @apply transition-all ease-in-out duration-300 transform -translate-y-1/2 mx-4 sm:mx-auto sm:max-w-lg smd:max-w-3xl flex items-center overflow-auto;
         transition: transform 0.3s ease-out;
        margin: 1.75rem auto;
        min-height: calc(100% - 3.5rem);
        .popup-content {
          @apply px-0 py-10 smd:px-16 smd:py-12 text-center bg-themedark-0;
          background-clip: border-box;
          .popup-content-client {
            max-height: 15.625rem;
            overflow: auto;
            @screen md {
              max-height: inherit;
            }
          }
          .popup-close-trigger {
            top: -0.9375rem;
            right: -0.9375rem;
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
  }
}
</style>