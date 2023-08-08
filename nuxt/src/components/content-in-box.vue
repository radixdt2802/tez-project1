<template>
  <div
    class="contentInBox text-center rxsection-y-space"
    :class="[
        data.VueReferenceCode == 'TWithTML_IconTitle_4TealBox'
        ? 'rxsection-y-space'
        : '',
        data.VueReferenceCode ==  'TWithTML_IconTitle_4TealBox_zoho'
        ? 'rxsection-t-space pb-0 dark:bg-themedark-0' : '',
    ]"
  >
    <div class="container">
       <div v-html="title"></div>
      <div class="row">
        <div class="w-full px-4">
          <div class="row mx-auto justify-center">
            <div class="w-full smd:w-1/4 sm:w-1/2 mt-8 px-4" v-for="(item , i) in data.TitleMediaList">
              <div
                class="
                  card-bg
                  px-5
                  py-10
                  bg-primary
                  contentWhite
                  h-full
                  dark:bg-themedark-70
                "
              >
                <img
                  v-if="item.Icon"
                  v-rxlazy="item.Icon"
                  :height="item.Icon.height"
                  :width="item.Icon.width"
                  class="mx-auto light-image"
                />
                <img  
                  v-if="item.HoverIcon"
                  v-rxlazy="item.HoverIcon"
                  :height="item.HoverIcon.height"
                  :width="item.HoverIcon.width"
                  class="mx-auto dark-image"    
                />
                <!-- <div class="para_md" v-html="$md.render(item.Title)">
                  {{ item.Title }}
                </div> -->
                <div v-html="sTitles[i]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
import { defineAsyncComponent } from '@vue/runtime-core';  
const sectionHeading = defineAsyncComponent(() => import("./section-heading100.vue"));
import mountedMixin from "../mixins/mounted.mixin";
import titleMixin from '../mixins/title.mixin';
export default {
  mixins: [mountedMixin ,titleMixin],
  components: {
    sectionHeading:sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
    return {
      titleStyle : "h2",
      subTitleStyle : "",
      sTitleStyle : "para_md text-white pt-4",
      sSubTitleStyle : ""
    }
  }
};
</script>
 <style lang="scss">
@layer utilities {
  .dark{
    .contentInBox{
      .light-image{
        @apply hidden;
      }
      .dark-image{
        @apply block;
      }
    }
  }
  .contentInBox{
      .light-image{
        @apply block;
      }
      .dark-image{
        @apply hidden;
      }    
    .card-row {
      @screen sxl {
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
      }
  }
}
}
</style>