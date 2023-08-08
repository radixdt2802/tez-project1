<template >
  <div class="dev_reasonMove rxsection-y-space bg-themelight-20 dark:bg-themedark-70">
    <div class="container">
      <sectionHeading :data="data" />
      <div class="multi_component relative sxl:-mx-4">
        <div class="image_component hidden sxl:block inset-x-0 text-center comp_size w-1/4 mx-auto px-4 sxl:absolute sm:relative top-50 transform -translate-y-1/2 h-auto">
           
            <img
              v-rxlazy="data.Image"
              :alt="data.Image.alternativeText"
              :width="data.Image.width"
              :height="data.Image.height"
              class="mx-auto"
            />
           
        </div>
        <div class="reason_content top-0 flex flex-wrap content-between xl:justify-between h-full md:justify-between">
          <div class="content_outer  w-full sxl:w-4/12 xl:mb-0 mt-8 sxl:py-0 sxl:px-5" v-for="(item,i) in data.TitleContentList">
            <div class="comp_size h-auto sxl:bg-transparent bg-opacitybg-0 p-5 sm:h-full dark:bg-themedark-0 sxl:dark:bg-transparent sxl:p-0">
              <!-- <h3 class="font-semibold para_lg">{{ item.Title }}</h3> -->
              <div v-html="sTitles[i]"></div>
              <div
                class="h3_para listanchor square_list"
                v-if="item.LongText"
                v-rxhtml="item.LongText"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import titleMixin from '../mixins/title.mixin';
import { defineAsyncComponent } from '@vue/runtime-core'; 
const sectionHeading = defineAsyncComponent(() => import("./section-heading90.vue"));
import mountedMixin from "../mixins/mounted.mixin";
export default {
   mixins: [mountedMixin, titleMixin],
  components: {
    sectionHeading,
  },
  props: {
    data: Object,
  },
  data(){
    return {
      sTitleStyle: "font-semibold para_lg md:pb-2.5"
    }
  }
};
</script>
<style lang="scss">
@layer utilities {
  .dev_reasonMove {
    .content_outer:nth-child(even) {
      @apply xxl:pl-16 xxl:pr-4 sxl:pr-4 sxl:px-12 px-0;
    }
    .content_outer:nth-child(odd) {
      @apply xxl:pr-16 xxl:pl-4 sxl:pl-4 sxl:px-12 px-0;
    }
    .listanchor {
      p {
        @apply py-0;
      }
    }
    .content_outer {
      @screen md {
        width: 47%;
      }
      @screen smd {
        width: 48%;
      }
      @screen sxl {
        width: 34%;
      }
    }
    .square_list {
      li {
        @apply mb-0 md:text-lg text-base;
      }
    }
  }
}
</style>
