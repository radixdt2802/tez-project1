<template>

  <div>
    <div
      class="banner-section bg-secondary contentWhite bg-cover beforeOverlayDark relative bg-no-repeat  overflow-hidden text-center"
      v-for="item in data.SimpleContentBanner"
      :key="item.Title"
      v-bind:style="[
        item.BGImage.url
          ? { backgroundImage: 'url(' + item.BGImage.url + ')' }
          : '',
      ]"
      :class="[item.BGImage.url ? '' : 'bg-secondary']"
    >
      <div class="container">
        <div class="head-content relative md:pb-24 md:pt-36 py-14">
          <h1 class="custom_h1 leading-9 smd:text-5xl xxsm:text-3xl xxsm:leading-10 xsm:text-4xl">{{ item.Title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
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
        console.log(item)
          var image = item.BGImage ? item.BGImage.url : item.Image.url;
            defaultContainer.loadImage(image).then(t=>item.BaseImage = t);
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
  }
}
</style>