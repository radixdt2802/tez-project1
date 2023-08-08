<template>
  <div class="rxsection-t-space overflow-hidden onHover">
    <div class="w-full text-center container">
      <div v-html="title"></div>
      <div
        v-if="data.LongText"
        v-rxhtml="data.LongText"
        class="listanchor para_md lg:w-10/12 w-full mx-auto"
      ></div>
    </div>
    <div class="carousel-frame w-full t-space-60 container">
      <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        navigation
        :breakpoints="swiperOptions.breakpoints"
        class="flex scrollContainer pb-20"
      >
        <!--   padding: 22px;
  border: 1px solid rgba(120, 204, 237, 1);
  background-color: rgba(120, 204, 237, 0.4); -->
        <swiper-slide
          v-for="item in data.TitleContentMediaList"
          class="carousel-item customClass inline-block cursor-pointer"
          :key="item.Title"
          @click="anchor(item.CTA)"
          :title="item.Title"
        >
          <img
            v-if="item.Icon"
            v-rxlazy="item.Icon"
            width="48"
            height="48"
            class="pb-5 light-mode-image"
          />
          <img
            v-if="item.HoverIcon"
            v-rxlazy="item.HoverIcon"
            width="48"
            height="48"
            class="pb-5 dark-mode-image"
          />
          <h3 class="h3_sm">{{ item.Title }}</h3>
          <div
            v-if="item.LongText"
            class="paraStyle"
            v-rxhtml="item.LongText"
          ></div>
          <div class="pt-3 font-semibold" v-if="item.CTA">
            <div class="inline customContent">
              <p>{{ item.SubTitle }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import staticImg from "../mixins/staticimg.mixin";
import titleMixin from "../mixins/title.mixin";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
export default {
  mixins: [titleMixin, staticImg],
  props: {
    data: Object,
  },
  data() {
    return {
      titleStyle: "h2",
      swiperOptions: {
        breakpoints: {
          1600: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          425: {
            slidesPerView: 1.2,
            spaceBetween: 30,
          },
          320: {
            slidesPerView: 1.1,
            spaceBetween: 30,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    SwiperCore.use([Pagination, Navigation]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Navigation],
    };
  },

  methods: {
    anchor(value) {
      return this.$tezRouter.push(value);
    },
  },
};
</script>

<style lang="scss">
@layer utilities {
  .dark {
    .light-mode-image {
      display: none;
    }
    .dark-mode-image {
      display: block;
    }
  }
  .carousel-frame {
    margin-bottom: 0.5em;
    padding-bottom: 1em;
    .swiper {
      overflow: unset !important;
      padding-bottom: 60px;
    }
    .customClass {
      height: 100%;
    }
  }
  .light-mode-image {
    display: block;
  }
  .dark-mode-image {
    display: none;
  }
  .customCta {
    img {
      margin-left: 5px;
    }
    &:hover {
      img {
        margin-left: 10px;
        transition: all 0.3s ease-in-out;
      }
    }
    .customContent {
      p {
        @apply inline hover:text-primary no-underline font-semibold;
        &:hover {
          color: #31bbae !important;
        }
      }
    }
  }
  .carousel-frame {
    scrollbar-width: none;
    .carousel-item {
      margin: 0 20px 0 0;
      &:nth-child(3n + 1) {
        @apply bg-opacitybg-96 dark:bg-themedark-10 border border-solid border-opacitybg-blueBorder p-6;
      }
      &:nth-child(3n + 2) {
        @apply bg-opacitybg-97 dark:bg-themedark-10 border border-solid border-opacitybg-yellowBorder p-6;
      }
      &:nth-child(3n + 3) {
        @apply bg-opacitybg-98 dark:bg-themedark-10 border border-solid border-opacitybg-purpleBorder p-6;
      }
    }
  }

  .scrollContainer {
    // transform: translate3d(50px, 10px, 10px);
    height: auto;
  }

  .primary-arrowBtn {
    @apply text-base dark:text-primary;
    a {
      @apply no-underline;
    }
    img {
      @apply ml-2;
    }
  }
  @screen sxl {
    .primary-arrowBtn {
      @apply text-lg;
    }
  }
}
</style>