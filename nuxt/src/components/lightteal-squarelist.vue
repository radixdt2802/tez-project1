<template>
  <div
    v-bind:style="[
      data.VueReferenceCode == 'TC_BgImage'
        ? { backgroundImage: 'url(' + data.Image.url + ')' }
        : '',
    ]"
    class="lightbg-title-two-list rxsection-y-space"
    :class="[
      data.VueReferenceCode == 'TC_WhiteBG_12'
        ? 'bg-themelight-0 dark:bg-themedark-0 pt-0 '
        : '',
      data.VueReferenceCode == 'TC_GreyBG_12'
        ? 'bg-themelight-10 dark:bg-themedark-40'
        : '',
      data.VueReferenceCode == 'TC_WhiteBGPara_sm'
        ? 'bg-themelight-0 dark:bg-themedark-0'
        : '',
      data.VueReferenceCode == 'TC_LightTealBG_12'
        ? 'bg-themelight-20 dark:bg-themedark-70'
        : '',
      data.VueReferenceCode == 'TC_WhiteBG_7'
        ? 'bg-themelight-0 dark:bg-themedark-70'
        : '',
      data.VueReferenceCode == 'TC_WhiteBG_7_Topspace'
        ? 'bg-themelight-0 dark:bg-themedark-70 pt-0'
        : '',
       

      data.VueReferenceCode == 'TC_WhiteBG_Sd'
        ? 'bg-themelight-0 dark:bg-themedark-0'
        : '',
      data.VueReferenceCode == 'TC_BgImage'
        ? 'setImage relative beforeBlackDark'
        : '',
      data.VueReferenceCode == 'TC_WhiteBG_Sd_Nospace'
        ? 'bg-themelight-0 dark:bg-themedark-0 py-0'
        : '',
      data.VueReferenceCode == 'TC_LightTealBG_CircleList'
        ? 'bg-themelight-30 dark:bg-themedark-70'
        : '',
    ]"
  >
    <div class="container relative">
      <!-- <h2 class="md:text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div
        class="para_md text-center mb-6"
        v-if="data.ShortText"
        v-rxhtml="data.ShortText"
      ></div>
      <div class="row justify-content-center align-items-center">
        <div
          class="mx-auto px-4"
          :class="{
            'sxl:w-10/12 w-full': data.VueReferenceCode == 'TC_LightTealBG_12',
            'w-full': data.VueReferenceCode == 'TC_GreyBG_12',
            'w-full': data.VueReferenceCode == 'TC_LightTealBG_CircleList',
            'sxl:w-9/12 w-full': data.VueReferenceCode == 'TC_WhiteBG_7',
            'sxl:w-9/12 w-full': data.VueReferenceCode == 'TC_WhiteBG_7_Topspace',
            'sxl:w-9/12 w-full': data.VueReferenceCode == 'TC_WhiteBG_Sd_Nospace',
          }"
        >
          <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            class="para_md noBs"
            :class="[
              data.VueReferenceCode == 'TC_WhiteBGPara_sm'
                ? 'list_sm square_list primary_list'
                : '',
              data.VueReferenceCode == 'TC_WhiteBG_Sd'
                ? ' square_list primary_list '
                : '',
              data.VueReferenceCode == 'TC_GreyBG_12' ? ' square_list' : '',
              data.VueReferenceCode == 'TC_WhiteBG_12'
                ? 'primary_list square_list list_sm'
                : '',
              data.VueReferenceCode == 'TC_LightTealBG_12' ? 'square_list' : '',
              data.VueReferenceCode == 'TC_WhiteBG_7'
                ? 'square_list primary_list list_sm'
                : '',
                data.VueReferenceCode == 'TC_WhiteBG_7_Topspace'
                ? 'square_list primary_list list_sm'
                : '',
              data.VueReferenceCode == 'TC_LightTealBG_CircleList'
                ? 'circle_list'
                : '',
              data.VueReferenceCode == 'TC_BgImage' ? 'square_list' : '',
              data.VueReferenceCode == 'TC_WhiteBG_Sd_Nospace'
                ? 'square_list primary_list list_sm'
                : '',
            ]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin,titleMixin],
  props: {
    data: Object,
  },
  data(){
		return {
		  titleStyle : "h2 text-center",
		}
	},
};
</script>
<style lang="scss">
@layer utilities {
  .lightbg-title-two-list {
    ul {
      @apply flex flex-wrap;
      li {
        @apply md:w-1/2 w-full;
      }
    }
  }
  .setImage {
    background-size: cover;
    backface-visibility: hidden;
    background-position: center;
    background-attachment: fixed;
  }
}
</style>