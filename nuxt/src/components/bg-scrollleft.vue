<template>
  <div
    class="rxsection-y-space bgscrollleft bg-fixed bg-left-bottom relative contentWhite"
    v-bind:style="[data.Image ? { backgroundImage: 'url(' + data.Image.url + ')' } : '']"
  >
    <div class="container">
      <div class="row">
        <div class="sxl:w-7/12 w-full px-4 ml-auto">
          <!-- <h2 class="relative">{{data.Title}}</h2> -->
          <div v-html="title"></div>
          <div
            v-if="data.LongText"
            v-rxhtml="data.LongText"
            class="square_list para_sm para_md relative"
          ></div>
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
    titleStyle : "h2 relative"
    }
  },
};
</script>
<style lang="scss">
@layer utilities {
  .bgscrollleft {
    &::before {
      content: "";
      @apply absolute top-0 right-0 h-full block bg-opacitybg-50 w-full;
      // dark:bg-opacitybg-90
      
      @screen sxl {
        width: 63%;
      }
    }
  }
}
</style>