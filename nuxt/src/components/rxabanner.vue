<template>
  <div
    class="rx_banner bg-no-repeat bg-bottom pl-0 md:pl-20 smd:pl-28 lg:pl-44 sxl:pl-20 xl:pl-60 xxl:pl-96 py-10 md:py-56 md:pb-24 sxl:pt-60 sxl:pb-40 bg-cover bg-rxa-secondary relative text-center md:text-left"
    v-bind:style="[
      data.Image
        ? {
            backgroundImage: 'url(' + data.Image.url + ')',
            backgroundSize: '100%',
          }
        : '',
    ]"
  >
    <div class="container relative">
      <div class="text-center md:text-left md:flex md:items-center ml-1">
        <img
          class="hidden md:block"
          v-rxlazy="data.Icon"
          :width="data.Icon.width"
          :height="data.Icon.height"
          :alt="data.Icon.alternativeText"
        />
        <p
          class="text-white pl-0 md:pl-2 text-center md:text-left text-lg sxl:text-2xl xxl:text-3xl"
        >
          {{ data.ShortText }}
        </p>
      </div>
      <div class="relative inline-block">
        <h1
          class="pb-0 text-rxa-primary font-bold uppercase text-center md:text-left"
          v-html="data.Title"
        ></h1>
        <div
          class="sub_title font-semibold text-rxa-yellow text-center md:text-left"
        >
          {{ data.SubTitle }}
        </div>
        <div class="md:absolute inline-block banner-img-wrapper mt-8">
          <img
            class=""
            v-rxlazy="data.HoverImage"
            :width="data.HoverImage.width"
            :height="data.HoverImage.height"
            :alt="data.HoverImage.alternativeText"
          />
          <div
            class="cursor-pointer"
            v-if="data.id"
            @click="contentvisiblity(data.id)"
          >
            <img
              class="absolute play-img"
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
    <!-- POPUP VIDEO CONTAINER -->
    <Transition name="bounce" @keydown.esc="$emit('input')">
      <div
        class="fixed top-0 left-0 z-50 w-full h-full overflow-hidden client-popup bg-opacitybg-95"
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
              <!-- height="449" -->
              <iframe
                v-if="data.id == tabId"
                class="aspect-video px-4 lg:px-0"
                loading="lazy"
                width="748"
                :src="data.GuideURL"
                title="YouTube video player"
                frameborder="0"
                rel="nofollow"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div
              class="absolute top-0 right-4 left-auto transform translate-x-1/2 -translate-y-1/2 popup-close-trigger"
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
    <div
      class="arrow-down absolute inset-x-0 hidden sxl:inline-block cursor-pointer text-center"
      @click="scroll('scroll')"
    >
      <img v-rxlazy="scrollImage" width="75" height="75" class="mx-auto" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      tabId: null,
      scrollImage:
        "https://d2ms8rpfqc4h24.cloudfront.net/arrow_down_green_018cca4878.svg",
    };
  },
  methods: {
    scroll(data) {
      document.getElementById(data).scrollIntoView({
        behavior: "smooth",
      });
      window.scroll({
        top: 700,
        left: 0,
        behavior: "smooth",
      });
    },
    contentvisiblity(index) {
      this.tabId = index;
      console.log(index);
      var  body = document.body;
        body.classList.add("overflow-hidden");
    },
    modalClose() {
      this.tabId = null;
      var  body = document.body;
      body.classList.remove("overflow-hidden","custom-class")
    },
    hidemodal() {
      this.tabId = null;
      var  body = document.body;
      body.classList.remove("overflow-hidden","custom-class")
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
        var  body = document.body;
      body.classList.remove("overflow-hidden","custom-class")
      }
    });
  },
};
</script>

<style lang="scss">
@layer utilities {
  .rx_banner {
    .bounce-enter-active {
      animation: bounce-in 1.2s;
    }
    // .bounce-leave-active {
    //   animation: bounce-in 1s reverse;
    // }
    // .bounce-leave-active {
    //   animation: bounce-in 0.5s reverse;
    // }
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
    .para_lg_semib p,
    .para_lg_semib {
      font-size: 1.375rem;
      line-height: 2rem;
    }
    h1 {
      font-size: 1.875rem;
      line-height: 2.375rem;
      font-kerning: normal !important;
      @screen xxsm {
        font-size: 2.5rem;
        line-height: 3rem;
      }
      @screen sm {
        font-size: 3.75rem;
        line-height: 4.25rem;
      }
      @screen md {
        font-size: 4.5rem;
        line-height: 5.5rem;
      }
      @screen sxl {
        font-size: 7.6875rem;
        line-height: 8.125rem;
      }
      span {
        @apply text-white block;
      }
    }
    .sub_title {
      @screen sm {
        font-size: 1.625rem;
      }
      @screen md {
        font-size: 2rem;
      }
      @screen sxl {
        font-size: 1.875rem;
      }
      @screen xl {
        font-size: 2.5rem;
      }
    }
    .banner-img-wrapper {
      bottom: 5rem;
      right: -8.125rem;
      @media (max-width: 992px) {
        width: 14.5rem;
        bottom: 8rem;
      }
      @screen smd {
        bottom: 8rem;
        right: -15.125rem;
      }
      @screen sxl {
        bottom: 10.6875rem;
        right: -8.125rem;
      }
      @screen xxl {
        bottom: 11.6875rem;
        right: -8.125rem;
      }
    }
    .play-img {
      right: 3.375rem;
      bottom: 5.25rem;
      @screen xxsm {
        right: 5.375rem;
        bottom: 5.25rem;
      }
      @screen sm {
        right: 10.375rem;
        bottom: 5.25rem;
      }
      @screen md {
        right: 3.375rem;
        bottom: 5.25rem;
      }
      @media (max-width: 992px) {
        width: 3.125rem;
      }
      box-shadow: -2.598px 1.5px 13.5px rgb(0 0 0 / 75%);
      @screen smd {
        right: 4.375rem;
        bottom: 6.25rem;
      }
    }
    .arrow-down {
      bottom: 2rem;
    }
  }
}
</style>
