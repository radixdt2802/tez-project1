<template>
  <div
    class="two-col-list"
    :class="[
      data.VueReferenceCode == 'TC_Two_Col_Center_SquareList'
        ? 'bg-themelight-0 dark:bg-themedark-0 rxsection-y-space'
        : '',
      data.VueReferenceCode == 'TC_BgTealTwo_Col_Center'
        ? 'bg-themelight-20 dark:bg-themedark-70 rxsection-y-space'
        : '',
      data.VueReferenceCode == 'TC_Two_Col_Center'
        ? 'bg-themelight-0 dark:bg-themedark-0 rxsection-y-space'
        : '',
      data.VueReferenceCode == 'TC_LightTealBG_CircleList'
        ? 'bg-themelight-20 dark:bg-themedark-65 rxsection-y-space'
        : '',
        data.VueReferenceCode == 'TC_Two_Col_Center_SquareList_Sd'
        ? ''
        : '',
      data.VueReferenceCode == 'TC_Two_Col_Center_SquareList_Sd_space'
      ? 'rxsection-y-space'
      :''
        
    ]"
  >
    <div class="container">
      <div class="text-center w-full">
        <!-- <h2 class="dark:text-themelight-0">{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>

        <div
          class="px-4 mx-auto"
          :class="[
            data.VueReferenceCode == 'TC_Two_Col_Center_SquareList'
              ? 'w-full'
              : '',
            data.VueReferenceCode == 'TC_Two_Col_Center' ? 'w-8/12' : '',
            data.VueReferenceCode == 'TC_BgTealTwo_Col_Center' ? 'w-full lg:w-8/12' : '',
            data.VueReferenceCode == 'TC_LightTealBG_CircleList' ? 'w-full': '',
          ]"
        >
          <div
            :class="[
              data.VueReferenceCode == 'TC_Two_Col_Center_SquareList'
                ? 'square_list list_sm noBs primary_list'
                : '',
              data.VueReferenceCode == 'TC_Two_Col_Center_SquareList_Sd' || data.VueReferenceCode == 'TC_Two_Col_Center_SquareList_Sd_space'
                ? 'square_list list_sm noBs primary_list mx-auto max-w-5xl'
                : '',
              data.VueReferenceCode == 'TC_Two_Col_Center'
                ? 'circle_list list_md'
                : '',
              data.VueReferenceCode == 'TC_BgTealTwo_Col_Center'
                ? 'circle_list list_sm mx-auto max-w-4xl'
                : '',
              data.VueReferenceCode == 'TC_LightTealBG_CircleList'
                ? 'circle_list list_md mx-auto w-full'
                : '',
            ]"
            class="listTwoCol text-left"
            v-if="data.LongText"
            v-rxhtml="data.LongText"
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
      titleStyle : "h2 dark:text-themelight-0",
     }
  }
};
</script>
  