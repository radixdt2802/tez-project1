<template>
  <div
    class="service-desc-darkmode rxsection-y-space"
    :class="[
      data.VueReferenceCode == 'TCM_ImageRight_ImgVisibleDarkMode'
        ? 'dark:bg-themedark-70 bg-themelight-10'
        : 'bg-themelight-10 dark:bg-themedark-10',
    ]"
  >
    <div class="container">
      <div class="serviceExpertise row items-center">
        <div class="w-full px-4 sxl:w-2/4">
          <img
            v-if="data.Image"
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="mx-auto mt-6 smd:mt-0 light-image"
          />
          <img
            v-if="data.HoverImage"
            loading="lazy"
            v-rxlazy="data.HoverImage"
            :width="data.HoverImage.width"
            :height="data.HoverImage.height"
            :alt="data.HoverImage.alternativeText"
            class="mx-auto mt-6 smd:mt-0 dark-image"
          />
        </div>
        <div class="w-full px-4 sxl:w-2/4 text-left">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            class="square_list list_sm"
          ></div>
          <div
            v-html="$md.render(data.CTA ? data.CTA : '')"
            v-if="data.CTA"
            class="btn btn_sm"
          ></div>
        </div>
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
    titleStyle : ""
    }
  },
};
</script>
 <style lang="scss">
@layer utilities {
  .dark {
    .service-desc-darkmode {
      .light-image {
        @apply hidden;
      }
      .dark-image {
        @apply block;
      }
    }
  }
  .service-desc-darkmode {
    .light-image {
      @apply block;
    }
    .dark-image {
      @apply hidden;
    }
    .square_list {
      p {
        @apply dark:text-themedark-75;
      }
    }
  }
}
</style>

