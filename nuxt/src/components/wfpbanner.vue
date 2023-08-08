<template>

  <div>
    <div
      class="womenbanner-section beforeOverlayDark relative overflow-hidden"
      v-for="item in data.SimpleContentBanner"
      :key="item.Title"
     
      
    >
    <!-- :class="[item.BaseImage ? '' : 'bg-secondary']" -->
    <div class="bannerHeight bg-no-repeat bg-cover bg-secondary"
       v-bind:style="[
        item.BaseImage
          ? { backgroundImage: 'url(' + item.BaseImage + ')' }
          : '',
      ]">
      </div>
      <div class="md:absolute md:bottom-0 md:left-0 w-full dark:bg-themedark-70 bg-themelight-10 md:bg-transparent md:dark:bg-transparent">
        <div class="container">
        <div class="head-content relative lg:pb-16 pb-4 pt-10">
          <h1 class="custom_h1 leading-9 smd:text-5xl xxsm:text-3xl xxsm:leading-10 xsm:text-4xl  md:text-white pb-0 md:pb-4">{{ item.Title }}</h1>
          <div
            class="para_lg paraContent"
            v-if="item.LongText"
            v-rxhtml="item.LongText"
          ></div>
        </div>
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
  .womenbanner-section {
    .bannerHeight{
      background-position: 68% 0%;
      min-height: 33.125rem;
      @screen md{
        @apply bg-center;
        min-height: 43.125rem;
        }
    }
    .paraContent{
     p{
      @apply text-themedark-0 md:text-themelight-0 dark:text-themelight-0; 
     } 
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
  }
}
</style>