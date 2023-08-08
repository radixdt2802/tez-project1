<template>
  <!-- style="backgroundImage:'url(' https://d2ms8rpfqc4h24.cloudfront.net/team_radixweb_background_dfa1cdc2f6.jpg ')';" -->
  <section class="rxaTabs font-medium rxsection-y-space" id="Team">
    <div class="container m-auto">
      <div class="w-full text-center mx-auto">
        <h2>{{ data.Title }}</h2>
        <div
          class="para_sm text-rxa-gray"
          v-rxhtml="data.LongText"
          v-if="data.LongText"
        ></div>
      </div>
      <div class="flex flex-wrap mt-6">
        <div class="w-full relative">
          <ul
            class="domain flex justify-center m-0 list-none overflow-x-auto flex-row cursor-pointer"
          >
            <li
              class="text-center break-words"
              v-for="(item, index) in data.TitleContentMediaList"
              :key="index"
            >
              <div
                class="domaintitle"
                @click="contentvisiblity(index)"
                :class="index == tabId ? 'active text-black' : ''"
              >
                {{ item.Title }}
              </div>
            </li>
          </ul>

          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 lg:pt-12 md:pt-10 pt-8 flex-auto"
          >
            <div
              class="tab-content tab-space"
              v-for="(item, index) in data.TitleContentMediaList"
              :key="index"
            >
              <div :key="item.id" v-show="index == tabId">
                <swiper
                  v-if="item.VueReferenceCode != 'VideosTab'"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
                  navigation
                  :breakpoints="swiperOptions.breakpoints"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                  loop="true"
                  :space-between="20"
                  class="technologyBlock-item justify-around flex flex-wrap"
                >
                  <swiper-slide
                    v-for="key in item.ImageCollection"
                    :key="key.id"
                    class="text-center"
                  >
                    <img
                      class="border border-rxa-primary rounded-md h-80 w-96 mx-auto"
                      v-if="key"
                      v-rxlazy="key"
                      width="341"
                      height="318"
                      :alt="key.alternativeText"
                      :title="key.alternativeText"
                    />
                  </swiper-slide>
                </swiper>
                <!-- :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }" -->
                <swiper
                  v-if="item.VueReferenceCode === 'VideosTab'"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
                  navigation
                  :breakpoints="swiperOptions.breakpoints"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                  loop="true"
                  :space-between="20"
                  class="technologyBlock-item justify-around flex flex-wrap"
                >
                  <!-- v-for="key in item.LongText" -->
                  <!-- :key="key.LongText" -->
                  <swiper-slide
                    v-for="videopopup in item.ImageCollection"
                    :key="videopopup.id"
                    class="text-center"
                  >
                    <img
                      @click="video(videopopup.id)"
                      class="border border-rxa-primary rounded-md h-80 w-96 mx-auto"
                      v-if="videopopup"
                      v-rxlazy="videopopup"
                      width="341"
                      height="318"
                    />
                    <!-- :alt="key.alternativeText"
                      :title="key.alternativeText" -->

                  </swiper-slide>
                </swiper>
                <Transition
                  v-for="videopopup in item.ImageCollection"
                  :key="videopopup.id"
                  name="bounce"
                  @keydown.esc="$emit('input')"
                >
                  <div
                    class="fixed top-0 left-0 z-50 w-full h-full overflow-hidden client-popup bg-opacitybg-90"
                    v-if="videopopup.id == videoId"
                    :class="videopopup.id == videoId ? 'show' : ''"
                  >
                    <div
                      class="absolute w-full h-full"
                      v-if="videopopup.id == videoId"
                      @click="hidemodal"
                    ></div>
                    <div class="popup-container">
                      <div class="relative w-full">
                        <div
                          class="w-full h-full responsive-iframe px-4 lg:px-0"
                          v-if="videopopup.caption"
                        >
                          <iframe
                            v-if="videopopup.id == videoId"
                            class="w-full aspect-video"
                            loading="lazy"
                            width="748"
                            :src="videopopup.caption"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay,  Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      tabId: 0,
      videoId: "",
      swiperOptions: {
        breakpoints: {
          1460: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },

          460: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    SwiperCore.use([Autoplay,Navigation]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay,Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    contentvisiblity(index) {
      this.tabId = index;
    },
    video(id) {
      this.videoId = id;
      var  body = document.body;
        body.classList.add("overflow-hidden");
    },
    modalClose() {
      this.videoId = null;
      var  body = document.body;
      body.classList.remove("overflow-hidden","custom-class")
    },
    hidemodal() {
      this.videoId = null;
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
        this.videoId = null;
        var  body = document.body;
      body.classList.remove("overflow-hidden","custom-class")
      }
    });
  },
};
</script>
<style lang="scss">
@layer utilities {
  .rxaTabs {
    .bounce-enter-active {
  animation: bounce-in 1.2s;
}
// .bounce-leave-active {
//   animation: bounce-in 1s reverse;
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
    @apply bg-bottom bg-no-repeat bg-cover;
    background-image: url("https://d2ms8rpfqc4h24.cloudfront.net/team_radixweb_background_dfa1cdc2f6.jpg");
    div.para_sm{
      p{
        @apply text-rxa-gray;
      }
    }
    ul.domain {
      li {
        div.domaintitle {
          @apply block leading-normal  text-lg no-underline pt-3 cursor-pointer pb-3 px-6  relative text-opacitybg-85;
          &::after {
            content: "";
            height: 0.1875rem;
            background-color: #cccccc;
            @apply absolute bottom-0 w-full left-0 right-0 z-0;
          }
          &.active {
            @apply text-rxa-gray;
            &::after {
              @apply bg-rxa-primary;
            }
          }
        }
      }
    }
   .slid-arrow {
      @apply text-primary right-0 top-auto left-0 mx-auto w-auto;
      height: 0.8125rem;
      transform: translateY(calc(100% + 0.8125rem));

      &::before {
        display: none;
      }
      bottom: -1.875rem;
      &.slick-prev {
        left: 44%;
        transform: translateX(-50%);
      }
      &.slick-next {
        left: 55%;
        transform: translateX(-50%);
      }
      &.slick-disabled {
        opacity: 0.3;
      }
    }
  }
}
</style>
