<template>
  <div class="rxsection-b-space three-icon-left">
    <div class="container">
      <div class="heading-style">
        <!-- <h2 class="text-center">{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div
          class="para_md"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
      <div class="row">
        <div
          class="bgCard-row mt-8 smd:mt-10 smd:w-4/12 md:w-6/12 w-full px-4"
          v-for="(item,i) in data.TitleContentMediaList"
        >
          <div class="Bg-card h-full py-10 px-8 border-solid border-t border-r border-b-4 border-l border-themelight-10 dark:border-themedark-10">
            <img
              class="mb-5"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <!-- <h3 class="para_lg">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]" class="para_lg h3"></div>
            <div
              class="square_list primary_list list_sm"
              v-if="item.LongText"
              v-rxhtml="item.LongText"
            ></div>
          </div>
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
      sTitleStyle : "",
     }
  }
  
};
</script>
