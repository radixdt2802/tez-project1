<template>
  <div
    class="halfspace-desc rxsection-y-space bg-themelight-10 dark:bg-themedark-10"
  >
    <div class="container">
      <div class="serviceExpertise row items-center">
        <div class="sxl:w-2/4 w-full px-4">
          <!-- <h2>{{ data.Title }}</h2> -->
          <div v-html="title"></div>
          <div
            class="pb-8 circle_list list_sm noBs"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
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