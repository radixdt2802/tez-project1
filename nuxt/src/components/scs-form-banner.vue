<template>
  <div class="form-banner">
    <div
      class="flex items-center bg-no-repeat bg-cover banner-img-title-center bg-primary"
      v-for="item in data.SimpleContentBanner"
      :key="item.Title"
      :style="[
        item.BGImage.url
          ? { 'background-image': 'url(' + item.BGImage.url + ')' }
          : '',
      ]"
      :class="{
        'mb-8': item.VueReferenceCode == 'SCB',        
      }"
    >
      <div class="container">
        <div class="row">
          <div class="w-full px-4 py-6 smd:w-6/12 smd:py-10">
            <h1
              class="pb-0 pr-10 my-0 text-themelight-0 featured-post-author-title h3"
            >{{ item.Title }}</h1>
          </div>
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
  .form-banner {
    @media only screen and (min-width: 76.875rem) {
      .container {
        max-width: 100%;
        width: 76.875rem;
      }
    }
    .banner-img,
    .banner-img-title-center {
      min-height: 11.563rem;
    }

    .author-content {
      @apply md:mt-6;
    }
  }
}
</style>