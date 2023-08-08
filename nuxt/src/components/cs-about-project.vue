<template>
  <div
    :class="{
      'bg-secondary dark:bg-themedark-70 rxsection-t-space':
        data.VueReferenceCode == 'CS_AboutProject',
      'bg-secondary dark:bg-themedark-70 rxsection-y-space':
        data.VueReferenceCode == 'CS_AboutProjectYSpace',
      'bg-themelight-10 dark:bg-themedark-40 rxsection-y-space':
        data.VueReferenceCode == 'CS_Approach',
      'bg-themelight-20 dark:bg-themedark-65 rxsection-y-space':
        data.VueReferenceCode == 'CS_Result',
    }"
  >
    <div class="container">
      <div :class="{ 'contentWhite' : data.VueReferenceCode == 'CS_AboutProject' || data.VueReferenceCode == 'CS_AboutProjectYSpace' }">
        <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div
          class="para_md list_fifty square_list"
          v-rxhtml="data.LongText"
        ></div>
        <p v-if="data.ShortText">{{ data.ShortText }}</p>
      </div>
      <div>
        <img
          v-if="data.Image"
          v-rxlazy="data.Image"
          :width="data.Image.width"
          :height="data.Image.width"
          class="mx-auto mt-10"
        />
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
      titleStyle : "h2 text-center",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .list_fifty {
    h3 {
      @apply mt-8 mb-5;
    }
    ul {
      @apply flex flex-wrap py-3;
      li {
        @apply md:w-1/2 w-full pl-5 pr-4 text-lg;
      }
    }
  }
}
</style>