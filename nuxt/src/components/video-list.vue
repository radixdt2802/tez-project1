<template>
  <div class="video-list">
    <div class="container t-space-60">
      <div class="row">
        <div
          v-for="item in data.dynamicResult"
          :key="item.id"
          class="w-full px-4 mb-16 cursor-pointer smd:w-1/2"
        >
          <div
            class="
              relative
              inline-block
              w-full
              h-full
              no-underline
              transition-all
              duration-300
              ease-in-out
              insight-content
              bg-themelight-10
              hover:shadow-md hover:text-primary
              dark:bg-themedark-10
            "
          >
            <div class="relative overflow-hidden">
              <img
                v-rxlazy="item.Image"
                :width="item.Image.width"
                :height="item.Image.height"
                :alt="item.Image.alternativeText"
                class="transition-all duration-300 ease-in-out"
              />
              <div
                class="
                  absolute
                  top-0
                  flex
                  items-center
                  justify-center
                  w-full
                  h-full
                  bg-opacitybg-35
                "
                @click="contentvisiblity(item.id)"
              >
                <img
                  v-rxlazy="
                    'https://d2ms8rpfqc4h24.cloudfront.net/download_0f9e24ec71.png'
                  "
                  width="118"
                  height="83"
                  alt="play icon"
                />
              </div>
            </div>
            <div class="px-6 py-5">
              <span class="post-tag-container" v-if="item.Classification">{{
                item.Classification.Title
              }}</span>
              <div class="mt-3 post-category-container">
                <tez-link
                  v-if="item.Category.NavURL"
                  :to="item.Category.NavURL"
                  class="pt-0 underline text-themedark-0 dark:text-themedark-75 post-category"
                  >{{ item.Category.Title }}</tez-link
                >
              </div>
              <h2
                class="
                  h3
                  relative
                  transition-all
                  duration-300
                  ease-in-out
                  para_md
                  smd:w-full
                  
                "
              >
                {{ item.Title }}
            </h2>
              <p>{{ item.ShortText }}</p>
              <div
                @click="contentvisiblity(item.id)"
                class="mt-4 btn_video btn_video_sm"
                title="Watch Video"
                >Watch Video</div>
            </div>
            <div
              class="px-6 py-5 border-t post-footer border-themelight-0"
              v-if="item.PublishedDate"
            >
              <p class="p-0 mb-0 text-sm featured-post-author-desc">
                {{
                  new Date(item.PublishedDate).toLocaleString("default", {
                    month: "short",
                  })
                }}
                {{ new Date(item.PublishedDate).getDate() }},
                {{ new Date(item.PublishedDate).getFullYear() }}
              </p>
            </div>
          </div>
          <transition name="modal" @keydown.esc="$emit('input')">
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
                bg-opacitybg-95
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
                <div class="relative w-full">
                  <div
                    class="
                      w-full
                      embed-responsive embed-responsive-16by9
                      bg-themelight-10
                    "
                    v-if="item.VideoURL"
                  >
                    <iframe
                      v-if="item.id == tabId"
                      class="w-full embed-responsive-item"
                      loading="lazy"
                      width="748"
                      height="449"
                      :src="item.VideoURL"
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// const DynamicComponent = () => import("./dynamic-component.vue");
import DynamicComponent from "./dynamic-component.vue";
export default {
  
  props: {
    data: Object,
  },
   components: {
        DynamicComponent,
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
    load: function () {
      this.iframe.loaded = true;
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
<style lang="scss">
@layer utilities {
  .video-list {
    @media only screen and (min-width: 76.875rem) {
      .container {
        max-width: 100%;
        width: 76.875rem;
      }
    }
    h3 {
      @apply text-center;
    }
    .insight-content:hover {
      > div {
        > img {
          @apply transition-all ease-in-out duration-300 transform scale-105;
        }
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

    .post-category-container {
      @apply w-full mb-2;
      a {
        @apply font-semibold;
        &:hover,
        &:active {
          @apply text-themedark-0 dark:text-themedark-75;
          transition: 0.3s ease all;
        }
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
  }
}
</style>
