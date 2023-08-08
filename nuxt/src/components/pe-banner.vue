<template>
  <div>
    <div
      class="pe-banner xsm:text-left text-center"
      v-for="item in data.SimpleContentBanner"
      :key="item.Title"
      v-bind:style="[
        item.BGImage
          ? { backgroundImage: 'url(' + item.BGImage.url + ')' }
          : '',
      ]"
      :class="[item.BGImage ? '' : 'bg-secondary']"
    >
      <div class="container">
        <div class="head-content">
          <h1>{{ item.Title }}</h1>
          <div
            class="contentWhite"
            v-if="item.LongText"
            v-rxhtml="item.LongText"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
export default {
  
  props: {
    data: Object,
  },
};
</script>
<style lang="scss">
@layer utilities {
  .pe-banner {
    @apply text-themelight-0 relative bg-no-repeat bg-center bg-cover overflow-hidden flex items-center pt-16 pb-16;
    height: 27.5rem;
    @screen sm {
      height: 33.125rem;
    }
    @screen sxl {
      height: 43.125rem;
    }
    &::before {
      @apply absolute top-0 left-0 w-full h-full block;
      background: rgba(15, 22, 40, 0.8);
      content: "";
    }
    .head-content {
      @apply relative;
      p {
        @apply text-base p-0 text-themelight-0;
        line-height: 1.625rem;
        @screen md {
          @apply text-lg leading-7;
        }
        @screen sxl {
          @apply leading-8;
          font-size: 1.375rem;
        }
        @screen xl {
          font-size: 1.625rem;
          @apply leading-9;
        }
      }
    }
  }
}
</style>