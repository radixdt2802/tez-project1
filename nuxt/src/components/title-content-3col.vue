<template>
  <div
    class="rxsection-y-space t-three-comp"
    :style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
    :class="[
      data.Image ? 'contentWhite beforeDark relative' : '',
      data.VueReferenceCode == 'TCWithTCL_TealBG_6Box'
        ? 'bg-themelight-20 dark:bg-themedark-40'
        : '',
      data.VueReferenceCode == 'TCWithTCL_TealBG_6Box_Sd'
        ? 'bg-themelight-20 dark:bg-themedark-40'
        : ' ',
     
    ]"
  >
    <div class="container relative">
      <!-- <h2 v-if="!data.CTA" class="text-center">{{ data.Title }}</h2> -->
      <div v-html="title"></div>
      <!-- <h2
        v-if="data.CTA"
        v-html="$md.render(data.CTA)"
        class="text-center"
      ></h2> -->
      
      <!-- <div v-html="title"></div> -->
      <div
        class="text-center para_md"
        v-if="data.LongText"
        v-rxhtml="data.LongText"
      ></div>
      <div class="row">
        <div
          class="bgCard-row w-full sxl:w-4/12 md:w-6/12 mt-8 px-4"
          v-for="(item,i) in data.TitleContentList"
        >
          <div
            class="bgCard p-8 h-full dark:bg-themedark-70"
            :class="[data.Image ? 'bg-opacitybg-40' : 'bg-opacitybg-0']"
          >
            <!-- <h3 class="h3_sm" v-if="!item.CTA">{{ item.Title }}</h3> -->
            <div v-html="sTitles[i]"></div>
            <!-- <h3
              class="h3_sm"
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
      sTitleStyle: "h3_sm"
    }
  },
 
};
</script>
<style lang="scss">
@layer utilities {
  .t-three-comp {
    .bgCard {
      .h3_sm {
        > p {
          padding: 0;
        }
      }
    }
  }
}
</style>