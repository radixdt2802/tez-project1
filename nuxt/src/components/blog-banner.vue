<template>
  <div class="blog-banner mt-16 lg:mt-0">
    <div
      class="flex items-center bg-no-repeat bg-cover banner-img-title-center bg-secondary"
      v-for="item in data.SimpleContentBanner"
      :key="item.Title"
      :style="[
        item.BGImage
          ? { 'background-image': 'url(' + item.BGImage.url + ')' }
          : {  },
        data.VueReferenceCode == 'SmallBanner_policy' ? {'margin-bottom':'1.875rem'}:{}
      ]"
      :class="{
        'mb-8': item.VueReferenceCode == 'SCB',
        'mb-0': item.VueReferenceCode !== 'SCB'
      }"
    >
      <div
        class="container"
        :class="{
          'text-left': item.VueReferenceCode == 'SCB',
          'text-center customContainer': item.VueReferenceCode !== 'SCB'
        }"
      >
        <div :class="[data.VueReferenceCode == 'SmallBanner_policy'?'text-left':'text-center']">
          <h1 v-if="item.VueReferenceCode == 'SCB'" class="pb-0 my-0 text-themelight-0 featured-post-author-title h3">{{data.dynamic.title}}</h1>
          <h1 v-if="item.VueReferenceCode !== 'SCB'" class="pb-0 my-0 text-themelight-0 featured-post-author-title h3">
            {{ item.Title }}
          </h1>
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
    data: Object
  }
};
</script>
<style lang="scss">
@layer utilities {
  .blog-banner {
    .banner-img,
    .banner-img-title-center {
      min-height: 11.563rem;
    }
    @media only screen and (min-width: 1230px) {
      .container.customContainer {
        max-width: 100%;
        // width: 76.875rem;
        width: 89.375rem;
      }
    }
    .customContainer {
      h1 {
        @apply smd:text-left text-center text-themelight-0 pb-0 inline-block;
        font-size: 1.625rem;
        line-height: 2.125rem;
        @screen md {
          font-size: 2.125rem;
          line-height: 2.75rem;
        }
      }
    }
    .author-content {
      @apply md:mt-6;
    }
  }
  .banner-img {
    @apply items-end;
  }
  .banner-img-title-center {
    .medi-title {
      h1 {
        padding-top: 0.625rem;
        padding-bottom: 0.625rem;
      }
    }
  }
}
</style>
