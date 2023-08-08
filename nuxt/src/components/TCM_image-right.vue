<template>
  <div
    class="service-desc rxsection-y-space"
    :class="[
      data.VueReferenceCode == 'TCM_ImageRight_WhiteBG'
        ? 'dark:bg-themedark-0 bg-themelight-0'
        : '',
      data.VueReferenceCode == 'TCM_TealBG_RightImage'
        ? 'bg-themelight-20 dark:bg-themedark-65'
        : '',
      data.VueReferenceCode == 'TCM_ImageRight'
        ? 'bg-themelight-10 dark:bg-themedark-70'
        : '',
      data.VueReferenceCode == 'TCM_ImageRight_Circle_list'
        ? 'bg-themelight-10 dark:bg-themedark-70'
        : '',
    ]"
  >
    <div class="container">
      <div class="serviceExpertise row items-center">
        <div class="sxl:w-2/4 w-full px-4">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            class="pb-8"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            :class="{
              'square_list list_sm': data.VueReferenceCode == 'TCM_TealBG_RightImage',
              'circle_list list_sm noBs': data.VueReferenceCode == 'TCM_ImageRight_Circle_list'
            }"
          ></div>
          <div
            v-html="$md.render(data.CTA ? data.CTA : '')"
            v-if="data.CTA"
            class="btn btn_sm"
          ></div>
        </div>
        <div v-if="data.Image" class="sxl:w-1/2 w-full px-4">
          <img
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="mx-auto mt-6 smd:mt-0"
            :class="[data.VueReferenceCode == 'TCM_ImageRight' ? 'hidden sxl:block' : '', 
            data.VueReferenceCode == 'TCM_ImageRight_WhiteBG' ? 'hidden sxl:block' : '',]"
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
    mixins: [mountedMixin, titleMixin],
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