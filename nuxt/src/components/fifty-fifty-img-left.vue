<template>
  <div
    class="fifty-fifty-left rxsection-y-space bg-no-repeat relative bg-left bg-themelight-20 dark:bg-themedark-70"
    v-bind:style="[
      data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '',
    ]"
  >
    <div class="container fifty-content">
      <div class="smd:w-6/12 w-full smd:ml-auto smd:pl-12">
        <!-- <h2>{{ data.Title }}</h2> -->
        <div v-html="title"></div>
        <div
          class="list_sm dark:text-themelight-0"
          :class="[data.VueReferenceCode == 'TCM_BgImgLeft5050CircleList' ? 'circle_list':'square_list']"
          v-if="data.LongText"
          v-rxhtml="data.LongText"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
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
     }
  }
};
</script>
<style lang="scss">
@layer components {
  .fifty-fifty-left {
    
    background-size: 0;
    @screen smd {
      background-size: 50%;
    }
    .fifty-content {
      @apply z-10 relative;
      ul {
        @apply sxl:block md:flex flex-wrap block;
        li {
          @apply mb-0 pt-1 smd:w-full md:w-1/2 dark:text-themelight-0;
        }
      }
    }
  }
}
</style>