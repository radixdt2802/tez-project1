<template>
  <div
    :class="[
      data.VueReferenceCode == 'CTA_BgImageWhite_Center'
        ? 'text-themedark-0 dark:text-themelight-0 '
        : '',
      data.VueReferenceCode == 'CTA_Bg_Center' ? 'contentWhite' : '',
      data.VueReferenceCode == 'CTA_BgImageWhite_Center_bg'
        ? 'bg-themelight-10 dark:bg-themedark-10 '
        : '',
    ]"
    class="rxsection-y-space ctaBg text-center bg-cover beforeDark relative"
    v-bind:style="[
      data.Image
        ? {
            backgroundImage: 'url(' + data.Image.url + ')',
            backgroundPosition: 'center center',
          }
        : '',
    ]"
  >
    <div class="container">
      <div class="flex flex-wrap items-center justify-center relative">
        <!-- <h2 class="sxl:w-4/5 w-full">{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div
          class="para_md"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
        <div
          v-html="$md.render(data.CTA ? data.CTA : '')"
          class="btn w-full lg:mt-8 mt-5"
          :class="[
            data.VueReferenceCode == 'CTA_Bg_Center' ? ' btn_white' : '',
            data.VueReferenceCode == 'CTA_BgImageWhite_Center' ? 'btn_md' : '',
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "w-full h2 mx-auto",
      sTitleStyle : "",
    }
  }
};
</script>