 <template>
  <div class="rxsection-t-space threeboxList">
    <div class="container">
      <div class="w-full text-center">
        <h2>{{ data.Title }}</h2>
        <p
          class="para_md pb-5 smd:pb-8 dark:text-themedark-75"
          v-if="data.SubTitle"
        >
          {{ data.SubTitle }}
        </p>
        <p class="para_md dark:text-themedark-75" v-if="data.ShortText">
          {{ data.ShortText }}
        </p>
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="listanchor para_md b-space-40"
        ></div>
      </div>
      <div class="pb-5 ld:pb-0 relative bullet-slider">
        <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="swiperOptions.breakpoints"
        class="row t-space-60 why-us-slider"
      >
        <swiper-slide
          v-for="item in data.TitleContentList"
          :key="item.id"
          class="text-block"
        >
          <div class="boxcontent">
            <div class="para_lg font-semibold">{{ item.Title }}</div>
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor circle_list list_sm"
            ></div>
            <div class="why-choose-block-border"></div>
          </div>
        </swiper-slide>
      </swiper>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";
export default {
  props: {
    data: Object,
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
    SwiperCore.use([Pagination]);
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          1025:{
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1.1,
          },
          320: {
            slidesPerView: 1.1,
          },
        },
      },
    };
  },
//   created()  {
//     window.addEventListener("resize", this.resizeHandler);
// },
// destroyed()  {
//     window.removeEventListener("resize", this.resizeHandler);
// },
// methods:  {
//     resizeHandler(e)  {
//           let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
//           let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
//           let desktop = window.matchMedia('(min-width: 1025px)');
//           if(desktop.matches) {
//               // Swiper.destroy();
//               // init = false;
//           }
//     },
// },
  // mounted(){
 
  // }
};
</script>
<style lang="scss">
@layer utilities {
  .threeboxList {
    .boxcontent {
      @apply relative bg-themelight-10 dark:bg-themedark-70 h-full flex flex-wrap text-left mx-auto lg:mx-0;
      margin-top: 0.625rem;
      padding: 2.5rem 1.875rem;
      max-width: 37.5rem;
      height: 100%;
      min-height: 25.375rem;
      
      @screen smd {
        max-width: 25.75rem;
        min-height: 26.625rem;
      }
      @screen sxl {
        min-height: 28.625rem;
        padding: 3.125rem 2.1875rem;
      }
      ul {
        @apply mt-2;
        li {
          @screen md {
            @apply inline;
          }
          @screen smd {
            @apply block;
          }
        }
      }
    }
    .text-block {
      @apply h-full;
      padding: 0 0.5rem;
      &:nth-child(n + 4),
      {
        @apply mt-8;
      }
      @screen sm {
        &:nth-child(2) {
          @apply mt-0;
        }
      }
      @screen smd {
        &:nth-child(n + 4),
        &:nth-child(2),
        &:nth-child(3) {
          @apply mt-0;
        }
      }

      .why-choose-block-border {
        @apply border-0;
        @screen smd {
          @apply absolute;
          width: 5.3125rem;
          height: 5.3125rem;
          border-left: 0.625rem solid #31bbae;
          border-top: 0.625rem solid #31bbae;
          left: -0.625rem;
          top: -0.625rem;
        }
      }
    }
    .why-us-slider{
       .siwper-slide {
        @apply flex items-stretch;
      }
      &.swiper-initialized {
        .swiper-slide {
          @apply flex h-auto;
          @screen lg {
            @apply w-full h-auto;
          }
        }
      }
    }
  }
}
</style>