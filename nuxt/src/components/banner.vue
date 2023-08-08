<template>

  <div>
    <div
      class="banner-section bg-secondary contentWhite bg-cover beforeOverlayDark relative bg-no-repeat  overflow-hidden"
      v-for="item in data.SimpleContentBanner"
      :key="item.Title"
      v-bind:style="[
        item.BaseImage
          ? { backgroundImage: 'url(' + item.BaseImage + ')' }
          : '',
      ]"
      :class="[item.BaseImage ? '' : 'bg-secondary']"
    >
      <div class="container">
        <div class="head-content relative sxl:pt-56 sxl:pb-56 pt-40 pb-16">
          <h1 class="custom_h1 leading-9 smd:text-5xl xxsm:text-3xl xxsm:leading-10 xsm:text-4xl">{{ item.Title }}</h1>
          <p v-if="item.SubTitle" class="para_lg_semib text-base py-3 leading-relaxed md:text-lg md:leading-7 sxl:leading-8 xl:leading-9">{{ item.SubTitle }}</p>
          <div
            class="para_lg contentWhite"
            v-if="item.LongText"
            v-rxhtml="item.LongText"
          ></div>
            <div v-if="item.CTA" v-html="$md.render(item.CTA ? item.CTA : '')"
          class="btn btn_sm btn-4col  smd:justify-start justify-center mt-7"></div>
        </div>
        <div class="arrow-down absolute inset-x-0 mx-auto hidden sxl:block cursor-pointer" @click="scroll('scroll')">
          <img
            v-rxlazy="scrollImage"
            width="75"
            height="75"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">

import { imageLoader} from '@tezjs/vue'
import { defaultContainer } from '../domain/tez-data-resolver';
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
  data(){
    return{
      scrollImage:"https://d2ms8rpfqc4h24.cloudfront.net/scroll_down_banner_b6a59b7533.svg",
      isDarkMode: window.localStorage.getItem("Dark"),
    }
  },
  methods: {
    scroll(data) {
      document.getElementById(data).scrollIntoView({
        behavior: "smooth",
      });
    },
    tzDataChanged(){
      this.data.SimpleContentBanner.forEach(item=>{
          var image = item.BGImage ? item.BGImage.url : item.Image.url;
            imageLoader.resolve(image).then(t=>item.BaseImage = t);
        })
  }
  },
  mounted(){
    this.tzDataChanged();
  },
};
</script>
<style lang="scss">
@layer utilities {
  .dark {
    .beforeOverlayDark {
      &::before {
        content: "";
        @apply absolute w-full h-full top-0 left-0;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
  .banner-section {
    background-position: 68% 0%;
    @screen md{
      @apply bg-center;
    }
    .head-content {  
      .custom_h1 {
        font-size: 1.625rem; 
        @screen sm {
          font-size: 2.375rem;
          line-height: 3.125rem;
        }
        @screen md {
          font-size: 2.625rem;
          line-height: 3.375rem;
        }
        @screen sxl {
          font-size: 3.125rem;
          line-height: 3.75rem;
        }
        @screen xl {
          font-size: 3.375rem;
          line-height: 4rem;
        }
      }
      p {
        @screen sxl {
          font-size: 1.375rem;
        }
        @screen xl {
          font-size: 1.625rem;
        }
      }
    }
    .arrow-down {
      /* @apply absolute inset-x-0 mx-auto hidden sxl:block cursor-pointer; */
      bottom: 1.875rem;
      width: 4.688rem;
      height: 3.8125rem;
      @screen lg {
        &:hover {
          img {
            transform: scale(0.8);
          }
        }
      }
    }
  }
}
</style>