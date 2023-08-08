<template>
  <div
    class="rxsection-y-space t-four-comp bg-themelight-20 dark:bg-themedark-40"
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row justify-center mt-5">
        <div class="bgCard-row w-full sxl:w-3/12 smd:w-1/3 sm:w-1/2 px-4 mt-8 smd:mt-10" v-for="(item,i) in data.TitleContentList">
          <div class="bgCard bg-opacitybg-0 h-full dark:bg-themedark-70 py-5 px-4 sm:py-8 md:py-11 md:px-4">
            <div v-html="sTitles[i]"></div>
            <!-- <h3 class="para_lg h3_sm" v-if="!item.CTA">
              {{ item.Title }}
            </h3> 
            <h3
              class="para_lg w-full sxl:w-3/4 h3_sm"
              v-if="item.CTA"
              v-html="$md.render(item.CTA)"
            ></h3> -->
            <div
              v-if="item.LongText"
              v-rxhtml="item.LongText"
              class="listanchor"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import titleMixin from '../mixins/title.mixin';
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
  mixins: [titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
		return {
		  sTitleStyle: "h3_sm h3 pb-2 relative"
		}
	},
};
</script>
