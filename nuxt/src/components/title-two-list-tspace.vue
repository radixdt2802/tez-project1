<template>
  <div
    class="two-col-list-tspace"
    :class="{
      'dark:bg-themedark-0 rxsection-t-space':
        data.VueReferenceCode == 'TC_Two_Col_CenterTSpace',
    }"
  >
    <div class="container">
      <div class="text-center w-full">
        <!--<h2 class="dark:text-themelight-0">{{ data.Title }}</h2>-->
        <div v-html="title"></div>
        <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
        <div class="px-4 mx-auto sxl:w-8/12">
          <div
            class="listTwoCol t-space-40 text-left circle_list list_md"
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
  mixins: [mountedMixin, titleMixin],
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "dark:text-themelight-0 h2",
      
    }
  }
};
</script>
  <style lang="scss" scoped>
@layer utilities {
  .two-col-list {
    p {
      @apply pb-10;
    }
  }
}
</style>
  