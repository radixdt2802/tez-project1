<template>
  <div
    class="threeiconbg bg-secondary dark:bg-themedark-70 rxsection-y-space contentWhite text-center"
  >
    <div class="container">
      <sectionHeading :data="data" />
      <div class="row bgcontent">
        <div class="bgCard-row w-full px-4 mt-10 mx-auto smd:w-1/3" v-for="(item,i) in data.TitleContentMediaList">
          <div class="bgCard bg-opacitybg-40 dark:bg-opacitybg-15 h-full p-10">
            <img
              class="mx-auto pb-5"
              v-rxlazy="item.Icon"
              :width="item.Icon.width"
              :height="item.Icon.height"
            />
            <!-- <h3 v-if="!item.CTA" class="h3_sm">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <h3
              v-if="item.CTA"
              class="h3_sm"
              v-html="$md.render(item.CTA)"
            ></h3>
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
import { defineAsyncComponent } from '@vue/runtime-core';  
import titleMixin from '../mixins/title.mixin';
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
  mixins: [mountedMixin,titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
  return {
    sTitleStyle: "h3_sm"
    }
  },
};
</script>
<style lang="scss">
@layer utilities {
 
}
</style>