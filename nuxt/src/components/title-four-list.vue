<template>
  <div
    class="four-col-list rxsection-y-space"
    :class="{
      'bg-themelight-10 circle_list dark:bg-themedark-0':
        data.VueReferenceCode == 'TC_GreyBG_TextLeft',
      'bg-primary dark:bg-themedark-70 contentWhite circleListWhite':
        data.VueReferenceCode == 'TC_TealBG_TextLeft',
      'bg-secondary dark:bg-themedark-0 contentWhite circle_list':
        data.VueReferenceCode == 'TC_DarkBG_TextCenter',
      'bg-themelight-20 dark:bg-themedark-70':
        data.VueReferenceCode == 'TC_LightTealBG_TextLeft',
      'bg-secondary contentWhite':
        data.VueReferenceCode == 'TC_DarkBGTitle_TextLeft',
    }"
  >
    <div class="container">
      <div class="row">
        <div class="main-content-heading threecol">
          <div
            v-if="data.Title"
            :class="{
              'text-center': data.VueReferenceCode == 'TC_DarkBG_TextCenter',
            }"
          >
            <!-- <h2>{{ data.Title }}</h2> -->
            <div v-html="title"></div>
          </div>
          <p class="para_md" v-if="data.ShortText">{{ data.ShortText }}</p>
          <div
            class="custom-content"
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
      titleStyle : "h2",
     }
  }
};
</script>
<style lang="scss" scoped>
@layer utilities {
  .four-col-list {
    .main-content-heading {
      @apply ml-0;
    }
  }
}
</style>
