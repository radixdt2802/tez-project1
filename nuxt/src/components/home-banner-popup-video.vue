<template>
  <div class="pt-12 mt-10">
    <div
      class="
        home-banner
        text-themedark-0
        dark:text-themelight-0
      "
    >
      <!-- :class="[data.VueReferenceCode == 'HomeBanner_new_office' ? 'rxsection-y-space' : '']"
      v-for="item in data.SimpleContentBanner"
      :key="item.id" -->
      <div class="container">
        <div class="items-center justify-center row">
          <div class="w-full smd:w-1/2 px-4">
                <!--  -->
            <div
              class="
                w-full
                mx-auto
                smd:max-w-full
                max-w-3xl
                mb-8
                text-center
                head-content
                smd:text-left
                smd:mb-0
              "
            >
              <h1>{{ data.Title }}</h1>
              <div
                class="mt-2"
                v-if="data.LongText"
                v-rxhtml="data.LongText"
              ></div>
              <div v-if="data.CTA" v-html="$md.render(data.CTA ? data.CTA : '')"
          class="btn btn_sm btn-4col  smd:justify-start justify-center mt-7"></div>
            </div>
          </div>
          <div class="w-full px-4 imgRight smd:w-1/2 relative">
            <img
              class="mx-auto smd:mr-0 smd:ml-auto"
              v-if="data.Image"
              v-rxlazy="data.Image"
              :width="data.Image.width"
              :height="data.Image.height"
              :alt="data.Image.alternativeText"
            />
            <div
            class="cursor-pointer absolute top-50 left-50 play-img"
            v-if="data.id"
            @click="contentvisiblity(data.id)"
          >
            <img
              v-rxlazy="data.HoverIcon"
              :width="data.HoverIcon.width"
              :height="data.HoverIcon.height"
              :alt="data.HoverIcon.alternativeText"
              title="Play"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- POPUP VIDEO CONTAINER -->
    <Transition name="bounce" @keydown.esc="$emit('input')">
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
        v-show="data.id == tabId"
        :class="data.id == tabId ? 'show' : ''"
      >
        <div
          class="absolute w-full h-full"
          v-if="data.id == tabId"
          @click="hidemodal"
        ></div>
        <div class="popup-container">
          <div class="relative w-full">
            <div class="w-full responsive-iframe" v-if="data.GuideURL">
              <iframe
                v-if="data.id == tabId"
                loading="lazy"
                class="aspect-video px-4 lg:px-0"
                width="748"
                :src="data.GuideURL"
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
              <button @click="modalClose()" class="close-popup">
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
    </Transition>
    <!-- POPUP VIDEO CONTAINER -->
  </div>
</template>
<script type="text/javascript">
export default {
  
  props: {
    data: Object,
  },
  data(){
    return{
      tabId: null,
    }
  },
  mounted() {
    // Close modal with 'esc' key
    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        this.tabId = null;
        var body = document.body;
        body.classList.remove("overflow-hidden", "custom-class");
      }
    });
  },
  methods: {
    contentvisiblity(index) {
      this.tabId = index;
      console.log(index);
      var body = document.body;
      body.classList.add("overflow-hidden");
    },
    modalClose() {
      this.tabId = null;
      var body = document.body;
      body.classList.remove("overflow-hidden", "custom-class");
    },
    hidemodal() {
      this.tabId = null;
      var body = document.body;
      body.classList.remove("overflow-hidden", "custom-class");
    },
    load: function () {
      this.iframe.loaded = true;
    },
  },
};
</script>
<style lang="scss">
@layer utilities {
  .bounce-enter-active {
    animation: bounce-in 1.2s;
  }
  .bounce-leave-active {
    animation: bounce-in 1.2s reverse;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
  .home-banner {
    .head-content {
      
      p {
        @apply text-base py-3 text-themedark-0 dark:text-themedark-75;
        line-height: 1.625rem;
        @screen sm {
          @apply text-xl;
          line-height: 1.875rem;
        }
        @screen lg {
          @apply leading-8;
          font-size: 1.375rem;
        }
        @screen xl {
          font-size: 1.5rem;
          @apply leading-9;
        }
      }
    }
    .play-img{
      transform: translate(-50%,-50%);
    }
  }
}
</style>