<template>
  <div class="mobile-first rxsection-y-space">
    <div class="container flex flex-wrap xl:items-center">
      <div class="left-content xl:w-8/12 lg:w-7/12 md:w-8/12 w-full">
        <!--<h2 class="dark:text-themelight-0">{{ data.Title }}</h2>-->
        <div v-html="title"></div>
        <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
      </div>
      <div class="right-img w-full md:pt-0 xl:w-4/12 lg:w-5/12 md:w-4/12">
        <img
          v-rxlazy="data.Image"
          :alt="data.Image.alternativeText"
          :width="data.Image.width"
          :height="data.Image.height"
        />
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
   data(){
    return {
      titleStyle : "h2",
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .mobile-first {
    min-height: 34.0625rem;
    .right-img {
      img {
        @apply hidden mx-auto max-w-full;
        animation: rotation 60s linear infinite 0s;
        -webkit-animation: rotation 60s linear infinite 0s;
        animation: rotation 60s linear infinite 0s;
        @screen xsm {
          max-width: 16.25rem;
          @apply block;
        }
        @screen md {
          @apply max-w-full;
        }
      }
      @-webkit-keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(359deg);
        }
      }
      @keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(359deg);
          transform: rotate(359deg);
        }
      }
    }
  }
}
</style>