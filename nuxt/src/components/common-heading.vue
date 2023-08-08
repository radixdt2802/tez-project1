<template>
  <div
    id="scroll"
    class="common-heads100"
    :class="[
      data.VueReferenceCode == 'TC_Center_BGTeal_Left'
        ? 'bg-themelight-20'
        : '',
      data.VueReferenceCode == 'TC_Center_WhiteBG100_BackgroundOpacity'
        ? 'bg-opacitybg-25 dark:bg-themedark-70'
        : '',
    ]"
  >
    <div class="container">
      <div
        class="mx-auto"
        :class="[
          data.VueReferenceCode == 'TC_Center_WhiteBG90'
            ? 'md:w-11/12 w-full rxsection-y-space'
            : '',
          data.VueReferenceCode == 'TC_Center_WhiteBG100' ? 'w-full rxsection-y-space' : '',
          data.VueReferenceCode == 'TC_Center_WhiteBG100_BackgroundOpacity' ? 'w-full rxsection-y-space' : '',
          data.VueReferenceCode == 'TC_Center_WhiteBG' ? 'lg:w-4/5 w-full rxsection-y-space' : '',
          data.VueReferenceCode == 'TC_Center_WhiteBG100_Left'
            ? 'text-left rxsection-t-space pb-10 ' : '',
          data.VueReferenceCode == 'TC_Center_WhiteBG90_Hspace' ? 'text-center rxsection-y-halfspace' : '',
          data.VueReferenceCode == 'TC_Center_BGTeal_Left'? 'text-left rxsection-y-space':'text-center',
           data.VueReferenceCode == 'TC_Center_Top_Aweserve' ? 'rxsection-t-space text-center' : '',
        ]"
      >
      <h1 class="h2" v-if="data.VueReferenceCode == 'TC_Center_WhiteBGH1'">{{ data.Title }}</h1>
        <h2 class="dark:text-themelight-0" v-else>{{ data.Title }}</h2>
        <!-- <div v-html="title"></div> -->
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div
          v-if="data.LongText"
          v-rxhtml="data.LongText"
          class="listanchor para_md"
        ></div>
        <div
          v-if="data.CTA"
          v-html="$md.render(data.CTA)"
          class="btn btn_md"
        ></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import mountedMixin from "../mixins/mounted.mixin";
// import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      // titleStyle : "dark:text-themelight-0 h2 mx-auto",
      // subTitleStyle : "",
      // sTitleStyle : "",
      // sSubTitleStyle : ""
    }
  }
};
</script>