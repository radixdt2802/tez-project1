<template>
  <div
    class="cs-proposed-2col"
    :class="{
      'dark:bg-themedark-10 bg-secondary rxsection-y-space contentWhite':
        data.VueReferenceCode == 'CS_Proposed_LoopedContent_Dark',
      'dark:bg-themedark-10 bg-themelight-10 rxsection-y-space':
        data.VueReferenceCode == 'CS_Proposed_LoopedContent',
      'dark:bg-themedark-10 bg-themelight-10 rxsection-t-space':
        data.VueReferenceCode == 'CS_Proposed_LoopedContentBgImg',
      'bg-themelight-20 dark:bg-themedark-65 rxsection-t-space':
        data.VueReferenceCode == 'CS_Proposed_LoopedContent_LightTeal',
    }"
  >
    <div class="container">
      <div class>
        <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div class="para_md" v-rxhtml="data.LongText"></div>
        <div class="row mt-8">
          <div
            class="smd:w-5/12 md:w-1/2 w-full px-4"
            v-for="item in data.TitleContentList"
          >
            <h3 class="para_lg">{{ item.Title }}</h3>
            <div
              v-if="item.LongText"
              class="list_sm square_list"
              v-rxhtml="item.LongText"
            ></div>
          </div>
        </div>
        <div class="mt-10">
          <img
            v-if="data.Image"
            v-rxlazy="data.Image"
            :width="data.Image.width"
            :height="data.Image.width"
            class="mx-auto"
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
  .cs-proposed-2col {
    .row {
      > div {
        &:nth-child(even) {
          @apply ml-auto;
        }
      }
    }
  }
}
</style>