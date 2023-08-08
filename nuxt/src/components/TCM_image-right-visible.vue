<template>
  <div
    class="service-desc-visible rxsection-y-space"
    :class="[
      data.VueReferenceCode == 'TCM_ImageRight_Square_list'
        ? 'dark:bg-themedark-70 bg-themelight-10 text-left'
        : '',
      data.VueReferenceCode == 'TCM_ImageRight_ImgVisible'
        ? 'dark:bg-themedark-70 bg-themelight-10  text-left'
        : '',
      data.VueReferenceCode == 'TCM_ImageRight_ImgVisibleTLeft'
        ? 'dark:bg-themedark-70 bg-themelight-10 text-left'
        : '',
      data.VueReferenceCode == 'TCM_ImageRight_WhiteBgImgVisible'
        ? 'dark:bg-themedark-0 bg-themelight-0  text-left'
        : '',
      data.VueReferenceCode == 'TCM_ImageRight_1_7'
        ? 'bg-themelight-0 dark:bg-themedark-70'
        : '',
      data.VueReferenceCode == 'TCM_ImageRight_1_7_Bggray'
        ? 'bg-themelight-10 dark:bg-themedark-70'
       : ''
     
    ]"
  >
    <div class="container">

      <div class="serviceExpertise row items-center">
        <div
          class="w-full px-4"
          :class="[
            data.VueReferenceCode == 'TCM_ImageRight_1_7'
              ? 'sxl:w-7/12'
              : 'lg:w-2/4',
              data.VueReferenceCode == 'TCM_ImageRight_1_7_Bggray'
              ? 'sxl:w-7/12'
              : '',
          ]"
        >
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            class="square_list list_sm"
            :class="[
              data.VueReferenceCode == 'TCM_ImageRight_ImgVisible'
                ? 'primary_list noBs'
                : '',
              data.VueReferenceCode == 'TCM_ImageRight_1_7'
                ? 'noBs'
                : '',
                data.VueReferenceCode == 'TCM_ImageRight_1_7_Bggray'
                ? 'noBs'
                : '',
              data.VueReferenceCode == 'TCM_ImageRight_Square_list'
                ? 'primary_list noBs'
                :'',
            ]"
          ></div>
          <div
            v-html="$md.render(data.CTA ? data.CTA : '')"
            v-if="data.CTA"
            class="btn btn_sm"
          ></div>
        </div>
        <div
          class="w-full px-4"
          :class="[
            data.VueReferenceCode == 'TCM_ImageRight_1_7'
              ? 'sxl:w-5/12 mt-4 sxl:mt-0'
              : 'lg:w-2/4',
              data.VueReferenceCode == 'TCM_ImageRight_1_7_Bggray'
              ? 'sxl:w-5/12 mt-4 sxl:mt-0'
              : 'lg:w-2/4',
          ]"
        >
          <img
            v-if="data.Image"
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="mx-auto mt-6 smd:mt-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2",
      sTitleStyle : "",
    }
  }
};
</script>
 <style lang="scss">
@layer utilities {
  .serviceExpertise {
    .square_list {
      p {
        @apply dark:text-themedark-75;
      }
    }
  }
}
</style>
