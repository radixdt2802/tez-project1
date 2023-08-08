<template>
  <div
    class="rxsection-t-space cs-proposed-3col"
    :class="{
      'bg-themelight-20 dark:bg-themedark-80':
        data.VueReferenceCode == 'CS_Proposed_3Col',
      'bg-secondary dark:bg-themedark-10 contentWhite':
        data.VueReferenceCode == 'CS_Proposed_3ColDark',
      'bg-themelight-10 dark:bg-themedark-10':
        data.VueReferenceCode == 'CS_Proposed_3ColGrey',
    }"
  >
    <div class="container">
      <div class>
        <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div class="para_md" v-rxhtml="data.LongText"></div>
        <div class="row mt-8">
          <div
            class="md:w-1/3 w-full px-4"
            v-for="item in data.TitleContentList"
          >
            <h3 class="para_lg">{{ item.Title }}</h3>
            <div
              v-if="item.LongText"
              class="list_sm square_list"
              v-rxhtml="item.LongText"
            ></div>
            <p v-if="data.ShortText">{{ data.ShortText }}</p>
          </div>
        </div>
      </div>
      <div class="pt-10 bottom-img">
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
  .cs-proposed-3col {
    .bottom-img {
      // img {
      //   // max-height: 66vh;
      //   / @screen md {
      //     // max-width: 60vw;
      //   }
      // }
    }
  }
}
</style>