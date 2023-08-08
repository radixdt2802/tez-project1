<template>
  <div
    class="rxsection-y-space anvrsry-rx-gallery bg-center overflow-hidden beforeBlackDark relative "
    v-bind:style="[data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',]"
    :class="[data.VueReferenceCode == 'TCM_rx_gallery_space'? 'paddingTop bg-no-repeat bg-themelight-10 dark:bg-themedark-10' : 'bg-cover bg-no-repeat ']"
  >
    <div class="container-fluid relative">
      <h2 class="text-center relative contentWhite text-customcolor-96 px-4">{{data.Title}}</h2>
      <swiper
        class="text-center"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="swiperOptions.breakpoints"
         :autoplay='{
        "delay": 6000,
        "disableOnInteraction": true
        }'
        :loop="true"
      >
        <swiper-slide v-for="item in data.ImageCollection" :key="item.index">
            <img
              class="mx-auto gallery-img"
              v-if="item"
              v-rxlazy="item.url"
              :width="item.width"
              :height="item.height"
              
            />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
  <script type="text/javascript">
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {Autoplay} from 'swiper';
import "swiper/scss";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    data: Object
  },
  setup() {
    const onSwiper = swiper => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };
    SwiperCore.use([Autoplay])
    return {
      onSwiper,
      onSlideChange,
      modules:[Autoplay],
    };
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          1600: {
            slidesPerView: 3.1
          },
          1371: {
            slidesPerView: 3.1
          },

          1200: {
            slidesPerView: 3.1
          },
          640: {
            slidesPerView: 2
          },
            460: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1
          }
        }
      }
    };
  }
};
</script>
  <style lang="scss">
@layer utilities {
  .dark{
    .anvrsry-rx-gallery{
      .gallery-img{
        box-shadow: 2px 0px 15px 0 rgb(255 255 255 / 75%);
        background: rgba(255,255,255,.75);
      }
    }
  }
  .paddingTop {
    background-position: bottom 40px center;
  }
  .anvrsry-rx-gallery {
    .related-services-main {
      position: relative;
      overflow: hidden;
      padding: 0.625rem 0;
      margin: 0 0.625rem;
      cursor: url("https://d2ms8rpfqc4h24.cloudfront.net/Zoom_5bde1cca32.svg"),
        auto;
    }
    h2 {
     
      margin-bottom: 2.8125rem;
    }
    .slick-list {
      .clients_slide {
        @apply flex items-center;
        img {
          margin: 0 0.625rem;
          padding: 0.625rem;
          background: rgba(77, 139, 195, 0.75);
          box-shadow: 0.125rem 0rem 0.9375rem 0 rgba(77, 139, 195, 0.75);
        }
      }
    }
    .gallery-img {
          box-shadow: 2px 0px 15px 0 rgb(77 139 195 / 75%);
    padding: 10px;
    /* margin: 0 20px; */
    display: inline-block;
    background: rgba(77,139,195,.75);
    }
  }
}
</style>