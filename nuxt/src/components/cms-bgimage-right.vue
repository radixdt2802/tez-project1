<template>
  <div
    class="cms-imgright rxsection-y-space"
    :class="{
      'dark:bg-themedark-0 bg-themelight-0':
        data.VueReferenceCode == 'CMS_WhiteBgimage-Right',
      'dark:bg-themedark-70 bg-themelight-10':
        data.VueReferenceCode == 'CMS_GreyBgimage-Right',
    }"
  >
    <div class="container">
      <div class="serviceExpertise row items-start">
        <div class="w-full smd:w-2/4 px-4">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div v-if="data.LongText" v-rxhtml="data.LongText"></div>
        </div>
        <div v-if="data.Image" class="smd:w-1/2 px-4 w-full pt-6 smd:pt-0">
          <img
            loading="lazy"
            v-rxlazy="data.Image"
            :alt="data.Image.alternativeText"
            :width="data.Image.width"
            :height="data.Image.height"
            class="smd:mr-0 mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
