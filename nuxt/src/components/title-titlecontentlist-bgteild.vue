<template>
  <div class="rxsection-y-space title-content-bgteild bg-themelight-20 dark:bg-themedark-70">
    <div class="container">
      <!-- <h2 class="pb-0">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <div class="iconcontent md:p-5 dark:bg-themedark-0" v-for="(item,i) in data.TitleContentList">
        <!-- <h3 class="para_lg">{{ item.Title }}</h3> -->
        <div v-html="sTitles[i]"></div>
        <div v-if="item.LongText" v-rxhtml="item.LongText"></div>
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
      sTitleStyle : "para_lg h3",
     }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .title-content-bgteild {
   
   
    .iconcontent {
      padding: 0.9375rem;
      margin-top: 1.875rem;
      
      &:first-child {
        @apply mt-0;
      }

      @screen smd {
        margin-top: 1.875rem;
        @apply bg-transparent p-0 border-b border-solid border-opacitybg-35 dark:border-themedark-65;
        padding-bottom: 1.875rem;

        &:last-child {
          @apply pb-0 border-b-0;
        }
      }
      p {
        padding: 0.625rem 0;
      }
    }
  }
}
</style>