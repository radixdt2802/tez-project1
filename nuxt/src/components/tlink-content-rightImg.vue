<template>
  <div
    class="service-desc rxsection-y-space bg-themelight-10 dark:bg-themedark-70"
    
  >
    <div class="container">
      <div class="serviceExpertise row items-center">
        <div class="sxl:w-2/4 w-full px-4">
          <div
            class="list_sm"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            :class="{
              square_list: data.VueReferenceCode == 'TCM_TealBG_RightImage',
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
            class="hidden sxl:block mx-auto mt-6 smd:mt-0"
          />
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

